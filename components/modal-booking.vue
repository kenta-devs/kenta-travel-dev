<template>
  <el-dialog
    :visible.sync="show"
    custom-class="c-modal-booking"
    :close-on-click-modal="true"
    title="Review your booking order"
    width="564px"
    append-to-body
    :show-close="false"
    @close="$emit('close')"
  >
    <div class="cmb-content">
      <div class="cmb-box">
        <div class="cmb-box-left">
          <img :src="casino.imagesList[0]?.url" class="cmb-img">
        </div>
        <div class="cmb-box-right">
          <el-rate :value="casino.star" disabled />
          <div class="cmbr-title">{{ casino.name }}</div>
          <div class="cmbr-desc">
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right:4px;" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.27331 8H13.7266C14.0644 8 14.3882 8.13415 14.627 8.37295C14.8658 8.61175 15 8.93562 15 9.27333V11.82H0.999978V9.28667C0.998215 9.11833 1.02985 8.95132 1.09305 8.79529C1.15625 8.63926 1.24977 8.49731 1.36818 8.37765C1.4866 8.258 1.62757 8.16301 1.78293 8.09819C1.93829 8.03336 2.10497 7.99999 2.27331 8Z" stroke="#A3A3A3" stroke-miterlimit="10"/>
              <path d="M2.90666 2.92676H13.0933C13.431 2.92676 13.7549 3.06091 13.9937 3.29971C14.2325 3.5385 14.3667 3.86238 14.3667 4.20009V8.00009H1.63333V4.20009C1.63333 3.86238 1.76749 3.5385 2.00628 3.29971C2.24508 3.06091 2.56896 2.92676 2.90666 2.92676Z" stroke="#A3A3A3" stroke-miterlimit="10"/>
              <path d="M4.81999 5.4668H6.72666C6.89388 5.4668 7.05946 5.49973 7.21394 5.56372C7.36843 5.62771 7.5088 5.72151 7.62704 5.83975C7.74528 5.95799 7.83908 6.09836 7.90307 6.25285C7.96706 6.40733 7.99999 6.57291 7.99999 6.74013V8.00013H3.54666V6.74013C3.54666 6.40242 3.68082 6.07854 3.91961 5.83975C4.15841 5.60095 4.48229 5.4668 4.81999 5.4668Z" stroke="#A3A3A3" stroke-miterlimit="10"/>
              <path d="M9.27333 5.4668H11.18C11.5177 5.4668 11.8416 5.60095 12.0804 5.83975C12.3192 6.07854 12.4533 6.40242 12.4533 6.74013V8.00013H8V6.74013C8 6.40242 8.13415 6.07854 8.37295 5.83975C8.61175 5.60095 8.93562 5.4668 9.27333 5.4668Z" stroke="#A3A3A3" stroke-miterlimit="10"/>
              <path d="M1.63333 13.7397V11.833" stroke="#A3A3A3" stroke-miterlimit="10"/>
              <path d="M14.3667 13.7397V11.833" stroke="#A3A3A3" stroke-miterlimit="10"/>
            </svg>
            {{ (room.room_data_trans.bedding_type || '').toUpperCase() }} · {{ theCheckTime }}
          </div>
          <div class="cmbr-footer">
            <a class="cmbr-btn">Change</a>
          </div>
        </div>
      </div>
    </div>
    <div class="cmb-footer" slot="footer">
      <module-price-total
        :loading="loading"
        button-text="Continue to Checkout"
        :room="room"
        :search-query="searchQuery"
        @next="handleCheckout"
      />
      <!-- <div class="cmbf-row bold">
        <span>Total</span>
        <span>${{ room.payment_options.payment_types[0].amount | filterMoney }}</span>
      </div> -->
    </div>
  </el-dialog>
</template>

<script>
import { createOrderForm, getUserIp } from '@/api/hotel'
import { generateUUid } from '@/utils/index'
import dayjs from 'dayjs'

export default {
  name: 'ModalBooking',
  props: {
    casino: Object,
    room: Object,
    searchQuery: Object
  },
  filters: {
    filterMoney (val) {
      return val ? parseFloat(val).toFixed(2) : '0.00'
    }
  },
  data () {
    return {
      show: true,
      loading: false
    }
  },
  computed: {
    theCheckTime () {
      if (this.searchQuery.date) {
        const [start, end] = this.searchQuery.date.split(',').map(d => parseInt(d, 10))
        const startStr = dayjs(start).format('MMM DD')
        const endStr = dayjs(end).format('MMM DD')
        const year = dayjs(start).format('YYYY')
        return `${startStr} - ${endStr} ${year}`
      }
      return ''
    }
  },
  methods: {
    async handleCheckout () {
      try {
        this.loading = true
        const res = await getUserIp()
        const params = {
          partner_order_id: generateUUid(),
          book_hash: this.room.book_hash,
          language: 'en',
          user_ip: res.ip
        }
        const orderRes = await createOrderForm(params)
        this.loading = false
        this.$emit('submit', orderRes.data)
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
.c-modal-booking {
  background-color: #F5F5F5;
  border-radius: 0.08rem;
  .el-dialog__header {
    padding: 0.15rem 0.15rem 0.16rem;
    border-radius: 0.07rem 0.07rem 0 0;
    border-bottom: 0.01rem solid #DADADA;
    background: #FEFEFE;
  }
  .el-dialog__body {
    padding: 0;
  }
  .cmb-content {
    padding: 0.24rem 0.16rem 0.48rem;
  }
  .cmb-box {
    display: flex;
    background-color: #FEFEFE;
    border: 1px solid #DADADA;
    border-radius: 8px;
  }
  .cmb-img {
    width: 160px;
    border-radius: 8px 0 0 8px;
  }
  .cmb-box-right {
    flex: 1;
    min-width: 0;
    padding: 16px;
  }
  .cmbr-title {
    margin-top: 8px;
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 500;
  }
  .cmbr-desc {
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: rgba(26, 26, 26, 0.40);
    font-size: 12px;
    font-weight: 400;
  }
  .cmbr-footer {
    margin-top: 24px;
  }
  .cmbr-btn {
    color: #FF3263;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }
  .el-dialog__footer {
    padding: 0;
    text-align: center;
    background: #FEF6F8;
    border-bottom-left-radius: 0.08rem;
    border-bottom-right-radius: 0.08rem;
  }
  .cmb-footer {
    .c-module-price-total {
      border-radius: 0.08rem;
    }
  }
}
</style>
