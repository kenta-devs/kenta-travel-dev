<template>
  <div class="c-module-price-total">
    <div class="cmpt-button-info">
      <div class="cmpt-row bold">
        <span>Total</span>
        <span>€{{ totalPrice }}</span>
      </div>
      <div class="cmpt-row mt8">
        <span>1 night</span>
        <span>€{{ perPrice }} per person</span>
      </div>
    </div>
    <el-button type="primary" :loading="loading" class="cmpt-btn" @click="$emit('next')">{{ buttonText || 'Next'}}</el-button>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    room: Object,
    searchQuery: Object,
    loading: Boolean,
    buttonText: String
  },
  computed: {
    totalPrice () {
      if (this.room) {
        const paymentInfo = this.room.payment_options.payment_types[0]
        return paymentInfo.amount
      }
      return 0
    },
    perPrice () {
      let night = 1
      let people = 1
      if (this.searchQuery) {
        if (this.searchQuery.date) {
          const [start, end] = this.searchQuery.date.split(',').map(d => parseInt(d, 10))
          night = dayjs(end).diff(dayjs(start), 'day')
        }
        if (this.searchQuery.guestList) {
          const audlt = this.searchQuery.guestList.find(g => g.label === 'Adults')
          people = audlt ? (audlt.value || 1) : 1
        }
      }
      return (this.totalPrice * 1 / (people * night)).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-module-price-total {
  border-top: 1px solid #DADADA;
  background: #FEF6F8;
  .cmpt-button-info {
    padding: 0.16rem;
  }
  .cmpt-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FF3263;
    font-size: 0.16rem;
    &.bold {
      font-weight: 500;
    }
    &.mt8 {
      margin-top: 0.08rem;
    }
  }
  .cmpt-btn {
    width: 100%;
    height: 0.56rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
