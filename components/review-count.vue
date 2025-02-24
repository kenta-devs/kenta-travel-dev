<template>
  <div class="c-review-count" :class="{ 'multi': isMultiLine }">
    <div class="crc-icons">
      <img src="~assets/images/image 1.png" style="width:0.2rem; height:0.2rem;">
      <div class="crc-rates">
        <span
          v-for="n in 4"
          :key="`solid${n}`"
          class="crc-circle-item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#00BC93"/>
          </svg>
        </span>
        <span
          v-for="n in 5 - 4"
          :key="`hollow${n}`"
          class="crc-circle-item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="3.5" stroke="#00BC93"/>
          </svg>
        </span>
      </div>
    </div>
    <div class="crc-label">{{ count }} Reviews</div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCount',
  props: {
    count: {
      type: Number,
      default: 0
    },
    isMultiLine: Boolean
  }
}
</script>

<style lang="scss" scoped>
.c-review-count {
  display: flex;
  align-items: center;
  text-align: right;
  &.multi {
    display: block;
    .crc-label {
      margin-top: 0.04rem;
    }
  }
  .crc-icons {
    display: flex;
    align-items: center;
  }
  .crc-rates {
    margin-left: 0.04rem;
    font-size: 0;
  }
  .crc-circle-item {
    margin-left: 0.02rem;
  }
  .crc-label {
    margin-left: 0.04rem;
    font-size: 0.12rem;
    color: rgba(26, 26, 26, 0.60);
  }
}
</style>
