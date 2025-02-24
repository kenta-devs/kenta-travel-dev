<template>
  <div class="c-modal-casino-selected">
    <div class="cmcs-title">Select a casino</div>
    <div class="cmcs-address">
      <div class="cmcs-row">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path d="M7.61192 14.7804C10.6382 13.1625 13 10.4832 13 7.22538C13 3.75106 10.3137 0.93457 7 0.93457C3.68629 0.93457 1 3.75106 1 7.22538C1 10.4832 3.36182 13.1625 6.38808 14.7804C6.7726 14.986 7.2274 14.986 7.61192 14.7804Z" stroke="#1A1A1A" stroke-opacity="0.6" stroke-width="1.17953" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.25 7.22526C9.25 8.52817 8.24268 9.58432 7 9.58432C5.75732 9.58432 4.75 8.52817 4.75 7.22526C4.75 5.9224 5.75732 4.86621 7 4.86621C8.24268 4.86621 9.25 5.9224 9.25 7.22526Z" stroke="#1A1A1A" stroke-opacity="0.6" stroke-width="1.17953" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="cmcs-ar-label">{{ casino.cityName }}, {{ casino.contentialName }}</span>
      </div>
      <div class="cmcs-row mt8">
        <span class="cmcs-ar-text">{{ dateRangeFormat }}</span>
        <span class="cmcs-ar-text">{{ guestDetail }}</span>
      </div>
    </div>
    <div class="cmcs-content">
      <el-carousel class="cmcs-imgs">
        <el-carousel-item v-for="(item, index) in (casino.imagesList || [])" :key="index">
          <img :src="item.url" style="height: 1.6rem;" />
        </el-carousel-item>
      </el-carousel>
      <div class="cmcs-star">
        <el-rate :value="casino.star" disabled />
        <span class="cmcs-star-label">· {{ casino.distance || 0 }} mile from city center</span>
      </div>
      <div class="cmcs-c-title">{{ casino.name }}</div>
      <div class="cmcs-text">DOUBLE QUEEN SIZE BED</div>
      <div class="cmcs-price">
        <span class="cmcsp-old">{{ casino.referencePrice }} USD</span>
        <span class="cmcsp-num">{{ casino.referencePrice }}</span>
        <span class="cmcsp-label">+ Taxes and fees</span>
        <span class="cmcsp-save">SAVE ${{ casino.tax }}</span>
      </div>
      <div class="cmcs-detail">{{ casino.roomView }}</div>
      <div class="cmcs-btns">
        <el-button type="primary" plain @click="clearRoomSelected">Remove</el-button>
      </div>
    </div>
    <module-price-total
      class="cmcs-footer"
      :loading="loading"
      :room="selectedRoom"
      :search-query="searchQuery"
      @next="handleCheckout"
    />
    <modal-tip
      v-if="showTip"
      is-mobile
      msg="Hold on, we are finalizing your casino hotel..."
    />
  </div>
</template>

<script>
import { createOrderForm, getUserIp } from '@/api/hotel'
import { generateUUid } from '@/utils/index'

export default {
  props: {
    casino: Object,
    selectedRoom: Object,
    searchQuery: Object,
    hotelInfo: Object,
    dateRangeFormat: String,
    guestDetail: String
  },
  data () {
    return {
      loading: false,
      showTip: false
    }
  },
  methods: {
    async handleCheckout () {
      try {
        this.loading = true
        const res = await getUserIp()
        const params = {
          partner_order_id: generateUUid(),
          book_hash: this.selectedRoom.book_hash,
          language: 'en',
          user_ip: res.ip
        }
        const orderRes = await createOrderForm(params)
        const data = orderRes.data || {}
        sessionStorage.setItem('orderform', JSON.stringify(data))
        sessionStorage.setItem('roominfo', JSON.stringify(this.selectedRoom))
        sessionStorage.setItem('hotelinfo', JSON.stringify(this.hotelInfo))
        this.loading = false
        this.$nextTick(() => {
          this.showTip = true
          setTimeout(() => {
            this.showTip = false
            this.$router.push(`/order/${data.partner_order_id}`)
          }, 1000 * 3)
        })
      } catch (e) {
        this.loading = false
      }
    },
    clearRoomSelected () {
      this.$emit('clear-selected')
    }
  }
}
</script>

<style lang="scss" scoped>
.c-modal-casino-selected {
  display: flex;
  flex-direction: column;
  height: 100%;
  :deep(.el-carousel__container) {
    height: 1.6rem;
  }
  .mt8 {
    margin-top: 0.08rem;
  }
  .cmcs-title {
    margin: 0.08rem 0.2rem;
    color: #1A1A1A;
    font-size: 0.18rem;
  }
  .cmcs-star {
    margin-top: 0.18rem;
    display: flex;
    align-items: center;
    &-label {
      color: rgba(26, 26, 26, 0.60);
      font-size: 0.12rem;
    }
  }
  .cmcs-c-title {
    margin-top: 0.06rem;
    color: #FF3263;
    font-size: 0.16rem;
    font-weight: 500;
  }
  .cmcs-text {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.40);
    font-size: 0.12rem;
    font-weight: 400;
  }
  .cmcs-price {
    margin-top: 0.08rem;
    display: flex;
    align-items: center;
  }
  .cmcsp-old {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
    text-decoration: line-through;
  }
  .cmcsp-num {
    margin-left: 0.08rem;
    color: #1A1A1A;
    font-size: 0.16rem;
  }
  .cmcsp-label {
    margin-left: 0.08rem;
    color: #1A1A1A;
    font-size: 0.14rem;
    font-weight: 300;
  }
  .cmcsp-save {
    margin-left: 0.08rem;
    padding: 0.02rem 0.04rem;
    border-radius: 0.04rem;
    background: #00BC93;
    color: #FEFEFE;
    font-size: 0.12rem;
  }
  .cmcs-address {
    background-color: #F5F5F5;
    padding: 0.12rem 0.2rem;
  }
  .cmcs-detail {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.1rem;
  }
  .cmcs-btns {
    margin-top: 0.16rem;
    text-align: right;
  }
  .cmcs-row {
    display: flex;
    align-items: center;
  }
  .cmcs-ar-label {
    margin-left: 0.08rem;
    color: #1A1A1A;
    font-size: 0.14rem;
  }
  .cmcs-ar-text {
    margin-right: 0.16rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
  }
  .cmcs-content {
    flex: 1;
    min-height: 0;
    padding: 0.16rem 0.2rem;
  }
  .cmcs-footer {
    border-top: 1px solid #DADADA;
    background: #FEF6F8;
  }
}
</style>
