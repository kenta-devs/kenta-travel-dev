<template>
  <div class="page-order-mobile">
    <div class="pom-header">
      <span class="pomh-label">Checkout</span>
      <div class="pomh-time">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_366_9532)">
            <path d="M7.99992 14.6663C11.6818 14.6663 14.6666 11.6816 14.6666 7.99967C14.6666 4.31778 11.6818 1.33301 7.99992 1.33301C4.31802 1.33301 1.33325 4.31778 1.33325 7.99967C1.33325 11.6816 4.31802 14.6663 7.99992 14.6663Z" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 4V8L10.6667 9.33333" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_366_9532">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span class="pomh-time-label">{{ timeRemaining }}</span>
      </div>
    </div>
    <div class="pom-content">
      <div class="pomc-info">
        <div class="pomci-left">
          <img :src="casino.imagesList[0]?.url" class="pomci-img">
        </div>
        <div class="pomci-right">
          <div class="pomc-title">{{ casino.name }}</div>
          <div class="pomc-text">{{ roomInfo.room_data_trans.bedding_type }}</div>
          <div class="pomc-price">
            <span class="pomc-price-old">${{ paymentInfo.$old }} {{ paymentInfo.currency_code }}</span>
            <span class="pomc-price-new">${{ paymentInfo.amount | filterMoney }}</span>
            <span class="pomc-price-text">+ Taxes and fees</span>
          </div>
          <div class="pomc-detail">{{ casino.roomView }}</div>
        </div>
      </div>
      <div class="pomc-checktime">
        <div class="pomc-ct-row">
          <span class="pomc-ct-label">Check-in</span>
          <span class="pomc-ct-text">{{ theCheckInTime }} {{ hotelInfo.$check_in_time_format }}</span>
        </div>
        <div class="pomc-ct-row mt16">
          <span class="pomc-ct-label">Check-out</span>
          <span class="pomc-ct-text">{{ theCheckOutTime }} {{ hotelInfo.$check_out_time_format }}</span>
        </div>
      </div>
      <div class="pomc-imt-info">
        <div class="pomc-title">{{ casino.name }}</div>
        <div class="pomc-text">{{ roomInfo.room_data_trans.bedding_type }}</div>
        <div class="pomc-price">
          <span class="pomc-price-old">${{ paymentInfo.$old }} {{ paymentInfo.currency_code }}</span>
          <span class="pomc-price-new">${{ paymentInfo.amount | filterMoney }}</span>
          <span class="pomc-price-text">+ Taxes and fees</span>
        </div>
        <div class="pomc-detail">{{ casino.roomView }}</div>
        <a class="pomc-imt-link" @click="openInfoModal">Important Information</a>
      </div>
      <div class="pomc-book-form">
        <div class="pomc-bf-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 8.00169V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Guests Info
        </div>
        <div class="pomc-bf-text">Please fill out all the fields below to proceed.</div>
        <div class="pomc-bf-formitem">
          <el-input v-model="guestForm.user_first_name" placeholder="First name" />
        </div>
        <div class="pomc-bf-formitem">
          <el-input v-model="guestForm.user_last_name" placeholder="Last name" />
        </div>
        <div class="pomc-bf-formitem email">
          <el-input v-model="guestForm.email" placeholder="Email Address">
            <span slot="suffix" class="pomc-icon-email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15.9587 3.50861C15.8866 3.1453 15.7255 2.81283 15.5005 2.53817C15.4531 2.47833 15.4035 2.42473 15.3498 2.37114C14.9512 1.97058 14.3918 1.7207 13.7806 1.7207H2.21941C1.60825 1.7207 1.05081 1.97058 0.650344 2.37114C0.59675 2.42473 0.547188 2.47833 0.499625 2.53817C0.274531 2.8128 0.113438 3.1453 0.0433125 3.50861C0.0145 3.64883 0 3.79373 0 3.94023V12.06C0 12.3715 0.0660625 12.671 0.183875 12.9414C0.293156 13.1995 0.454281 13.433 0.650312 13.6289C0.7 13.6785 0.749344 13.724 0.803187 13.7693C1.18712 14.0873 1.68272 14.2793 2.21941 14.2793H13.7806C14.3175 14.2793 14.8152 14.0873 15.1969 13.7673C15.2506 13.724 15.3002 13.6785 15.3498 13.6289C15.5457 13.433 15.7068 13.1995 15.8183 12.9414V12.9394C15.9361 12.669 16 12.3715 16 12.06V3.94023C16 3.79373 15.9857 3.64883 15.9587 3.50861ZM1.45341 3.17411C1.65169 2.97605 1.91797 2.85614 2.21941 2.85614H13.7806C14.082 2.85614 14.3507 2.97605 14.5466 3.17411C14.5817 3.20939 14.6147 3.2487 14.6438 3.28777L8.58425 8.56886C8.41713 8.71533 8.21069 8.78767 8 8.78767C7.79144 8.78767 7.58512 8.71533 7.41578 8.56886L1.3585 3.28552C1.38531 3.24645 1.41834 3.20939 1.45341 3.17411ZM1.13544 12.06V4.46048L5.52056 8.28595L1.13766 12.1074C1.13544 12.0929 1.13544 12.0765 1.13544 12.06ZM13.7806 13.1437H2.21941C2.02313 13.1437 1.83947 13.0921 1.68272 13.0014L6.30703 8.97145L6.73875 9.34702C7.10003 9.66095 7.55212 9.81995 8 9.81995C8.45019 9.81995 8.90225 9.66095 9.2635 9.34702L9.695 8.97145L14.3175 13.0014C14.1605 13.0921 13.9769 13.1437 13.7806 13.1437ZM14.8646 12.06C14.8646 12.0765 14.8646 12.0929 14.8624 12.1074L10.4796 8.28817L14.8646 4.46252V12.06Z" fill="#1A1A1A" fill-opacity="0.4"/>
              </svg>
            </span>
          </el-input>
        </div>
        <div class="pomc-bf-formitem">
          <el-select v-model="otherForm.citizenship" placeholder="Citizenship" style="width: 100%;">
            <el-option
              v-for="citem in countryList"
              :key="citem.value"
              :value="citem.value"
            >
              {{ citem.label }}
            </el-option>
          </el-select>
        </div>
        <div class="pomc-bf-formitem">
          <el-input v-model="otherForm.phone" placeholder="Phone Number" />
        </div>
        <div class="pomc-bf-btns">
          <el-button icon="el-icon-arrow-down" type="primary" plain>Enter All Guests Names</el-button>
        </div>
        <div class="pomc-bf-tip">
          Not necessary, but you might need it for the visa application
        </div>
      </div>
      <div class="pomc-arrive-detail">
        <div class="pomc-bf-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 8.00169V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Arrival Details
        </div>
        <div class="pomc-ad-form">
          <el-select v-model="otherForm.arrival_datetime" placeholder="Time">
            <el-option
              v-for="opt in timeList"
              :key="opt"
              :value="opt"
            >{{ opt }}</el-option>
          </el-select>
          <span class="pomc-ad-time-text">Your room <br>will be ready by 16:00</span>
        </div>
      </div>
      <div v-if="showCardForm" class="pomc-card-form">
        <div class="pomc-bf-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.0001 23.6157C11.6113 23.619 11.2292 23.5146 10.8961 23.314L6.73383 20.8797C5.17562 20.0083 3.87506 18.7409 2.96361 17.2058C2.05215 15.6706 1.5621 13.9221 1.54297 12.1368V5.48541C1.54315 5.03719 1.6806 4.59978 1.93681 4.232C2.19302 3.86423 2.55572 3.58374 2.97611 3.42827L11.2458 0.390553C11.7329 0.212264 12.2673 0.212264 12.7544 0.390553L21.0241 3.42827C21.4445 3.58374 21.8072 3.86423 22.0634 4.232C22.3196 4.59978 22.4571 5.03719 22.4573 5.48541V12.1368C22.4381 13.9221 21.9481 15.6706 21.0366 17.2058C20.1252 18.7409 18.8246 20.0083 17.2664 20.8797L13.1041 23.314C12.771 23.5146 12.3889 23.619 12.0001 23.6157ZM12.0001 1.97455C11.9457 1.96465 11.89 1.96465 11.8355 1.97455L3.56583 5.02598C3.47268 5.06048 3.39274 5.12341 3.33736 5.20587C3.28198 5.28833 3.25395 5.38613 3.25725 5.48541V12.1368C3.27714 13.6223 3.68902 15.0761 4.45122 16.3513C5.21341 17.6264 6.29889 18.6776 7.59783 19.3986L11.7601 21.8397C11.8337 21.8799 11.9162 21.901 12.0001 21.901C12.084 21.901 12.1665 21.8799 12.2401 21.8397L16.4024 19.3986C17.7013 18.6776 18.7868 17.6264 19.549 16.3513C20.3112 15.0761 20.7231 13.6223 20.743 12.1368V5.48541C20.7434 5.38845 20.714 5.2937 20.6588 5.21398C20.6037 5.13426 20.5253 5.07342 20.4344 5.0397L12.1647 2.00198C12.112 1.98287 12.0562 1.97358 12.0001 1.97455Z" fill="#1A1A1A"/>
            <path d="M11.2456 15.3255C11.0433 15.3242 10.8474 15.254 10.6902 15.1266L7.76217 12.6581C7.58759 12.5117 7.47831 12.3019 7.45837 12.0749C7.43844 11.848 7.50949 11.6224 7.65589 11.4478C7.80229 11.2732 8.01205 11.1639 8.23902 11.144C8.46599 11.124 8.69159 11.1951 8.86618 11.3415L11.1633 13.2752L15.0856 8.95521C15.2384 8.78608 15.4521 8.68456 15.6797 8.67298C15.9073 8.66141 16.1302 8.74073 16.2993 8.8935C16.4685 9.04626 16.57 9.25996 16.5815 9.48757C16.5931 9.71519 16.5138 9.93808 16.361 10.1072L11.9176 15.0444C11.8325 15.137 11.7284 15.21 11.6124 15.2586C11.4964 15.3071 11.3713 15.3299 11.2456 15.3255Z" fill="#1A1A1A"/>
          </svg>
          Pay with credit or debit card
        </div>
        <div class="pomc-bf-text">As soon as you click “Complete Booking”, you will be charged the full price of your stay and your booking will be completed.</div>
        <div class="pomc-ad-row">
          <el-input v-model="cardInfo.card_number" placeholder="Credit card number" />
        </div>
        <div class="pomc-ad-row">
          <el-input v-model="validDate" placeholder="Expiry date（MM/YYYY）" class="pomc-ad-row-half" />
          <el-input v-model="guestForm.cvc" placeholder="CVC/CVV" style="width: 1.28rem;margin-left:0.16rem;" />
        </div>
        <div class="pomc-ad-row">
          <el-input v-model="cardInfo.card_holder" placeholder="Name on the card" />
        </div>
        <div class="pomc-ad-btns">
          <el-button type="primary" style="width:100%;" :loading="finishLoading" @click="handleCompleteBooking">Complete Booking</el-button>
          <div class="pomc-ad-btns-tip">
            By clicking on "Complete Booking", you accept <span class="underline">Booking Terms and Conditions</span>
          </div>
        </div>
      </div>
      <div id="paypal-button-container" class="mt16"></div>
    </div>
    <div v-if="!showCardForm" class="pom-btns">
      <el-button type="primary" style="width:100%;" @click="handleShowCard">Continue to Payment</el-button>
    </div>
    <kt-footer />
    <modal-tip
      v-if="showTip"
      is-mobile
      msg="Booking succeed"
    />
    <modal-order-policy
      v-if="infoModal"
      fullscreen
      @close="infoModal=false"
    />
  </div>
</template>

<script>
import order from '@/mixins/order'
import { countryList } from '@/config/data'

export default {
  mixins: [order],
  data () {
    return {
      isMobile: window.isMobile,
      countryList,
    }
  }
}
</script>

<style lang="scss" scoped>
.page-order-mobile {
  background-color: #F5F5F5;
  .mt16 {
    margin-top: 0.16rem;
  }
  .pomc-info {
    background-color: #FEFEFE;
    display: flex;
    align-items: flex-start;
    padding: 0.16rem 0.2rem;
  }
  .pomci-img {
    width: 1.2rem;
    border-radius: 0.06rem;
  }
  .pomci-right {
    margin-left: 0.06rem;
  }
  .pomc-title {
    color: #1A1A1A;
    font-size: 0.14rem;
    font-weight: 500;
  }
  .pomc-text {
    margin-top: 0.14rem;
    font-size: 0.12rem;
    color: rgba(26, 26, 26, 0.40);
  }
  .pomc-price {
    margin-top: 0.04rem;
    &-old {
      color: rgba(26, 26, 26, 0.60);
      font-size: 0.12rem;
      text-decoration: line-through;
    }
    &-new {
      margin-left: 0.08rem;
      color: #1A1A1A;
      font-size: 0.14rem;
    }
    &-text {
      margin-left: 0.08rem;
      color: #1A1A1A;
      font-size: 0.12rem;
      font-weight: 300;
    }
  }
  .pomc-detail {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.1rem;
  }
  .pomc-checktime {
    margin-top: 0.08rem;
    background-color: #FEFEFE;
    padding: 0.16rem 0.2rem;
  }
  .pomc-imt-info {
    margin-top: 0.08rem;
    background-color: #FEFEFE;
    padding: 0.16rem 0.2rem;
  }
  .pomc-imt-link {
    margin-top: 0.16rem;
    display: inline-block;
    color: #007aff;
    font-weight: 300;
  }
  .pomc-ct-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pomc-ct-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
  }
  .pomc-ct-text {
    color: #1A1A1A;
    font-size: 0.14rem;
  }
  .pomc-book-form {
    margin-top: 0.08rem;
    background-color: #FEFEFE;
    padding: 0.16rem 0.2rem;
  }
  .pomc-bf-title {
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    svg {
      margin-right: 0.04rem;
    }
  }
  .pomc-bf-text {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
  }
  .pomc-bf-formitem {
    position: relative;
    margin-top: 0.08rem;
    &.email {
      :deep(.el-input__suffix) {
        top: 0.12rem;
      }
    }
  }
  .pomc-bf-btns {
    margin-top: 0.16rem;
  }
  .pomc-bf-tip {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
  }
  .pomc-arrive-detail {
    margin-top: 0.08rem;
    background-color: #FEFEFE;
    padding: 0.16rem 0.2rem;
  }
  .pomc-ad-form {
    margin-top: 0.16rem;
    display: flex;
    align-items: center;
  }
  .pomc-ad-time-text {
    margin-left: 0.04rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
  }
  .pomc-card-form {
    margin-top: 0.08rem;
    background-color: #FEFEFE;
    padding: 0.16rem 0.2rem;
  }
  .pomc-ad-row {
    margin-top: 0.08rem;
    display: flex;
  }
  .pomc-ad-row-half {
    flex: 1;
    min-width: 0;
  }
  .pomc-ad-btns {
    margin-top: 0.16rem;
  }
  .pomc-ad-btns-tip {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
  }
  .underline {
    text-decoration: underline;
  }
  .pom-btns {
    margin: 0.24rem auto;
    width: 90%;
  }
  .pom-header {
    position: sticky;
    top: 0;
    height: 0.64rem;
    width: 100%;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DADADA;
    background: #FEFEFE;
    z-index: 999;
  }
  .pomh-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 500;
  }
  .pomh-time {
    display: flex;
    align-items: center;
    width: 0.7rem;
    &-label {
      margin-left: 0.04rem;
      color: #1A1A1A;
      font-size: 0.14rem;
      font-weight: 400;
    }
  }
}
</style>
