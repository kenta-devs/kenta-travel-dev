import { getUserIp, postBookingFinish, checkBookingFinishStatus, postDataServer } from '@/api/hotel'
import { createPaypalToken, createPaypalOrder, capturePaypalOrder } from '@/api/order'
import dayjs from 'dayjs'
import { getDefaultDateRange, generateUUid, imageToBase64 } from '../utils/index'
import { ClientId } from '@/config/paypal'
import { MessageBox } from 'element-ui'

export default {
  filters: {
    filterMoney (val) {
      return val ? parseFloat(val).toFixed(2) : '0.00'
    }
  },
  data () {
    return {
      showCardForm: false,
      finishLoading: false,
      cloading: false,
      showTip: false,
      validDate: '',
      theCheckInTime: '',
      theCheckOutTime: '',
      guestDetail: '',
      cancelInfo: '',
      casino: {
        imagesList: []
      },
      searchQuery: {},
      hotelInfo: {},
      orderForm: {},
      roomInfo: {
        meal: '',
        payment_options: {
          payment_types: []
        },
        room_data_trans: {}
      },
      paymentInfo: {
        amount: 0,
        currency_code: 'EUR',
        is_need_credit_card_data: false,
        is_need_cvc: false,
        recommended_price: null,
        type: '',
        $tax: 0
      },
      // 'BGN', 'EUR', 'GBP', 'PLN', 'MYR', 'RON', 'RUB', 'SGD', 'TRY', 'USD', 'ZAR'
      paymentCodeList: [],
      otherForm: {
        citizenship: '',
        email: '',
        phone: '',
        arrival_datetime: ''
      },
      guestForm: {
        user_first_name: '',
        user_last_name: '',
        cvc: ''
      },
      cardInfo: {
        card_number: '',
        card_holder: '',
      },
      timeList: this.getTimeList(),
      timeRemaining: '10:00',
      payUuid: '',
      initUuid: '',
      requestPaypalId: '',
      paypalToken: {},
      orderRes: {},
      cardField: {},
      infoModal: false,
      imageBase64: null,
      taxList: []
    }
  },
  mounted () {
    this.initInfo()
    const targetTime = dayjs().add(10, 'minute')
    this.initTimer(targetTime)
  },
  methods: {
    openInfoModal () {
      this.infoModal = true;
    },
    async initPayButton () {
      try {
        await this.loadScript();
        this.paypalToken = await createPaypalToken();
        this.cardField = paypal.CardFields({
          style: {
            'input': {
              'font-size': '14px',
              'font': 'Rubik',
              'color': '#1A1A1A',
              'padding': '8px 15px'
            }
          },
          createOrder: this.createOrderCallback,
          onApprove: this.onApproveCallback,
          onError: function (error) {
            // Do something with the error from the SDK
            console.log('paypal render error = ', error);
            this.postData2Server('Paypal_Error');
          },
        });
        if (this.cardField.isEligible()) {
          const nameField = this.cardField.NameField();
          nameField.render("#card-name-field-container");

          const numberField = this.cardField.NumberField();
          numberField.render("#card-number-field-container");

          const cvvField = this.cardField.CVVField();
          cvvField.render("#card-cvv-field-container");

          const expiryField = this.cardField.ExpiryField();
          expiryField.render("#card-expiry-field-container");
        }
        this.showCardForm = true;
        this.cloading = false
      } catch (e) {
        this.cloading = false
      }
    },
    async createOrderCallback (data, actions) {
      // 在paypal弹窗中执行支付操作后生单的回调
      console.log('create-order-cb===', data, ' === ', actions);
      try {
        this.finishLoading = true
        const params = {
          intent: 'CAPTURE',
          purchase_units: [{
            amount: {
              currency_code: this.paymentInfo.currency_code,
              value: this.paymentInfo.amount
            },
          }],
        };
        const res = await createPaypalOrder(params, this.paypalToken.access_token);
        return res.id;
      } catch (e) {
        this.finishLoading = false;
        console.log('create order error: ', e);
        return false;
      }
    },
    async onApproveCallback (data, actions) {
      console.log('approve-order-cb===', data, ' === ', actions);
      // 用户在paypal生单授权支付成功的回调，请求中台接口，把paypal返回的tokenId等参数传给中台完成支付
      try {
        this.finishLoading = true;
        const res = await capturePaypalOrder(data.orderID, this.paypalToken.access_token);
        if (res.status === 'COMPLETED') {
          const processor = res.purchase_units[0].payments.captures[0].processor_response || {};
          if (processor.response_code === '0000') {
            this.postData2Server('Paypal_Complete')
            this.orderRes = data;

            this.initUuid = generateUUid()
            this.handleBookingFinish()
          } else {
            this.finishLoading = false;
            this.postData2Server('Paypal_Code_Error');
            MessageBox.alert(`Card invalid,please double check your card number.`, 'Error', {
              type: 'error'
            });
          }
        } else {
          this.finishLoading = false;
          this.postData2Server('Paypal_Status_Error');
          MessageBox.alert(`Paypal Error! (status: ${res.status})`, 'Error', {
            type: 'error'
          });
        }
        return res;
      } catch (e) {
        this.finishLoading = false;
        this.postData2Server('Paypal_Capture_Error')
        console.log('capture order error: ', e);
        return false;
      }
    },
    async initInfo () {
      const searchQueryStr = sessionStorage.getItem('destination-params')
      if (searchQueryStr) {
        const searchQuery = JSON.parse(searchQueryStr)
        let [start, end] = [dayjs(), dayjs().add(1, 'day')]
        if (searchQuery.date) {
          [start, end] = searchQuery.date.split(',').map(d => parseInt(d, 10))
        }
        this.theCheckInTime = dayjs(start).format('MMM DD, YYYY')
        this.theCheckOutTime = dayjs(end).format('MMM DD, YYYY')

        this.guestDetail = ''
        if (searchQuery.date) {
          const [start, end] = searchQuery.date.split(',').map(d => parseInt(d, 10))
          const diff = dayjs(end).diff(dayjs(start), 'day')
          this.guestDetail += diff + ' night '
        }
        if (searchQuery.guestList) {
          const glist = Array.isArray(searchQuery.guestList) ? searchQuery.guestList : JSON.parse(searchQuery.guestList)
          const adult = glist.find(g => g.label === 'Adults')
          if (adult) {
            this.guestDetail += adult.value + ' guests '
          }
        }
        this.searchQuery = searchQuery;
      }
      const orderInfo = sessionStorage.getItem('orderform')
      if (orderInfo) {
        this.orderForm = JSON.parse(orderInfo)
      }
      const roomInfo = sessionStorage.getItem('roominfo')
      if (roomInfo) {
        this.roomInfo = JSON.parse(roomInfo)
        const paymentTypes = this.roomInfo.payment_options.payment_types || [];
        this.paymentInfo = paymentTypes[0] || {}
        this.paymentCodeList = paymentTypes.map(pt => pt.currency_code) || ['EUR'];
        this.taxList = this.paymentInfo.tax_data.taxes || []
        let total = 0
        this.taxList.forEach(tax => {
          tax.name = tax.name.replace('_', ' ')
          total += tax.amount * 1
        })
        this.paymentInfo.$tax = total.toFixed(2)
        this.paymentInfo.$old = (this.paymentInfo.amount * 1 + total).toFixed(2)
        // Free cancellation before January 4
        if (this.paymentInfo.cancellation_penalties && this.paymentInfo.cancellation_penalties.free_cancellation_before) {
          const cancelDate = new Date(this.paymentInfo.cancellation_penalties.free_cancellation_before)
          this.cancelInfo = 'Free cancellation before ' + dayjs(cancelDate).format('MMM DD, HH:mm')
        }
      }
      const hotelinfo = sessionStorage.getItem('hotelinfo')
      if (hotelinfo) {
        this.hotelInfo = JSON.parse(hotelinfo)
      }
      const casino = sessionStorage.getItem('casino')
      if (casino) {
        this.casino = JSON.parse(casino)
        const imgs = this.casino.imagesList
        if (imgs && imgs[0]) {
          this.imageBase64 = await imageToBase64(imgs[0].url)
        }
      }
      // const img = await imageToBase64(this.casino.imagesList[0].url)
      // console.log('img = ', img)
      this.postData2Server('Order_Init')
    },
    initTimer (target) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      const timeLeft = target.diff(dayjs(), 'second')
      if (timeLeft > 0) {
        this.timeRemaining = this.formatTime(timeLeft)
        this.timer = setTimeout(() => {
          this.initTimer(target)
        }, 1000)
      } else {
        this.timeRemaining = '00:00'
        this.$alert('Sorry, the order form has expired. Please refresh the page.', 'Oops', {
          type: 'error',
          customClass: this.isMobile ? 'common-alert-mobile' : ''
        })
      }
    },
    formatTime (time) {
      const minute = parseInt(time / 60)
      const second = (time % 60).toString().padStart(2, '0')
      return [minute.toString().padStart(2, '0'), second].join(':')
    },
    validOrderForm () {
      if (!this.guestForm.user_first_name) {
        this.$message.error('First name is required')
        return false
      }
      if (!this.guestForm.user_last_name) {
        this.$message.error('Last name is required')
        return false
      }
      if (!this.otherForm.phone) {
        this.$message.error('Phone Number is required')
        return false
      }
      if (!this.cardInfo.card_number) {
        this.$message.error('Credit card number is required')
        return false
      }
      if (!this.validDate) {
        this.$message.error('Expiry date is required')
        return false
      }
      if (!this.guestForm.cvc) {
        this.$message.error('CVC/CVV is required')
        return false
      }
      if (!this.cardInfo.card_holder) {
        this.$message.error('Name on the card is required')
        return false
      }
      return true
    },
    handleCompleteBooking () {
      this.cardField.submit().then(() => {
        // submit successful
        console.log('submit success.');
      });
    },
    async handleBookingFinish () {
      try {
        const params = {
          // this.otherForm.arrival_datetime,
          // arrival_datetime: new Date(2024, 0, 31, 16, 0, 0),
          language: 'en',
          partner: {
            partner_order_id: this.orderForm.partner_order_id
            // comment: '',
            // amount_sell_b2b2c: ''
          },
          payment_type: {
            type: this.paymentInfo.type, // choices: (now, hotel, deposit)
            amount: this.paymentInfo.$realAmount,
            currency_code: this.paymentInfo.currency_code // choices: (BGN, EUR, GBP, PLN, MYR, RON, RUB, SGD, TRY, USD, ZAR)
            // init_uuid: '',
            // pay_uuid: ''
          },
          // upsell_data: [],
          // return_path: '',
          rooms: [{
            guests: [
              {
                first_name: this.guestForm.user_first_name,
                last_name: this.guestForm.user_last_name
                // is_child: false,
                // age: 0
              }
            ]
          }],
          user: {
            phone: this.otherForm.phone,
            email: this.otherForm.email,
            comment: ''
          },
          supplier_data: {
            first_name_original: this.guestForm.user_first_name,
            last_name_original: this.guestForm.user_last_name,
            phone: this.otherForm.phone,
            email: this.otherForm.email
          }
        }
        const res = await postBookingFinish(params)
        if (res.status === 'ok') {
          this.postData2Server('Booking_Finish_Complete')
          this.checkBookingFinishStatusWeb()
        } else {
          this.postData2Server('Booking_Finish_Error')
        }
      } catch (e) {
        this.postData2Server('Booking_Finish_Error');
        this.finishLoading = false
      }
    },
    async postData2Server (status = 'OK') {
      try {
        if (!this.imageBase64 && this.casino.imagesList[0]) {
          this.imageBase64 = await imageToBase64(this.casino.imagesList[0].url)
        }
        let cancelInfo = 'No-Cancellation';
        if (this.paymentInfo.cancellation_penalties && this.paymentInfo.cancellation_penalties.free_cancellation_before) {
          const cancelDate = new Date(this.paymentInfo.cancellation_penalties.free_cancellation_before)
          cancelInfo = 'Free cancellation before ' + dayjs(cancelDate).format('DD.MM.YYYY, HH:mm')
        }
        const adult = (this.searchQuery.guestList || []).find(g => g.label === 'Adults') || {};
        // const [month, year] = (this.validDate || '').split('/')
        const dateStr = this.searchQuery.date || getDefaultDateRange()
        const [start, end] = dateStr.split(',').map(d => parseInt(d, 10))
        const res = await getUserIp()
        const postData = {
          checkin: dayjs(start).format('YYYY-MM-DD'),
          checkout: dayjs(end).format('YYYY-MM-DD'),
          guests: JSON.stringify(this.searchQuery.guestList),
          amount: this.paymentInfo.amount,
          hotelId: this.hotelInfo.id,
          hotelName: this.hotelInfo.name,
          hotelImg: this.imageBase64 || this.casino.imagesList[0].url,
          orderId: this.orderForm.order_id,
          currencyCode: this.paymentInfo.currency_code,
          dueDate: dayjs().format('DD.MM.YYYY'),
          cancellationConditions: cancelInfo,
          adult: adult.value,
          countryName: this.casino.countryName,
          cityName: this.casino.cityName,
          partnerOrderId: this.orderForm.partner_order_id,
          bookHash: this.roomInfo.book_hash,
          userIp: res.ip,
          objectId: this.orderForm.item_id,
          payUuid: this.orderRes.orderID, // this.payUuid,
          initUuid: this.initUuid,
          userFirstName: this.guestForm.user_first_name,
          userLastName: this.guestForm.user_last_name,
          cvc: '', // this.guestForm.cvc,
          cardNumber: '', // this.cardInfo.card_number,
          cardHolder: '', // this.cardInfo.card_holder,
          cardYear: '', // year ? year.substr(-2) : '',
          cardMonth: '', // month,
          memberId: sessionStorage.getItem('user_id'),
          userPhone: this.otherForm.phone,
          userEmail: this.otherForm.email,
          orderStatus: status
        }
        await postDataServer(postData)
      } catch (e) {
        console.log('p2s error = ', e)
      }
    },
    async checkBookingFinishStatusWeb () {
      try {
        const params = {
          partner_order_id: this.orderForm.partner_order_id
        }
        const res = await checkBookingFinishStatus(params)
        if (res.status === 'error') {
          this.postData2Server('Booking_Status_Error');
        } else {
          if (res.data.percent !== 100) {
            this.checkBookingFinishStatusWeb()
          } else {
            this.finishLoading = false;
            this.postData2Server('OK');
            this.showTip = true
            setTimeout(() => {
              this.showTip = false
            }, 1000 * 3)
          }
        }
      } catch (e) {
        this.postData2Server('Booking_Status_Error');
        this.finishLoading = false
      }
    },
    handlePaymentType (code) {
      const types = this.orderForm.payment_types || []
      const item = types.find(t => t.currency_code === code)
      if (item) {
        this.paymentInfo = item
      }
    },
    getTimeList () {
      const list = []
      for (let i = 0; i < 24; i++) {
        const hour = i.toString().padStart(2, 0)
        list.push(`${hour}:00`)
      }
      return list
    },
    handleShowCard () {
        console.log('handleShowCard is called');
        let isValid = true;

        if (!this.guestForm.user_first_name) {
            this.isFirstNameValid = false;
            isValid = false;
        } else {
            this.isFirstNameValid = true;
        }

        if (!this.guestForm.user_last_name) {
            this.isLastNameValid = false;
            isValid = false;
        } else {
            this.isLastNameValid = true;
        }


        if (!this.otherForm.email) {
            this.isemailValid = false;
            isValid = false;
        } else {
            this.isemailValid = true;
        }
        if (!this.otherForm.citizenship) {
            this.iscitizenshipValid = false;
            isValid = false;
        } else {
            this.iscitizenshipValid = true;
        }
        if (!this.otherForm.phone) {
            this.isphoneValid = false;
            isValid = false;
        } else {
            this.isphoneValid = true;
        }
        if (!isValid) {
            return false;
        }

        this.cloading = true;
        this.initPayButton();
    },

    loadScript () {
      return new Promise((resolve) => {
        let script = document.querySelector('#paypalScript');
        if (script) {
          script.parentNode.removeChild(script);
        }
        script = document.createElement('script');
        script.id = 'paypalScript';
        script.setAttribute('mode', 'client');
        const currency = this.paymentInfo.currency_code || 'EUR'
        script.src = `https://www.paypal.com/sdk/js?components=buttons,card-fields&client-id=${ClientId}&currency=${currency}`;
        script.onload = () => {
          resolve(true);
        };
        document.body.appendChild(script);
      });
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
