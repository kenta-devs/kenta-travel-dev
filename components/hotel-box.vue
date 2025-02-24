<template>
  <div class="c-hotel-box">
    <div class="chb-left">
      <img src="" class="chbl-image">
    </div>
    <div class="chb-right">
      <div class="chb-star">
        <el-rate :value="value" disabled />
        <span class="chbs-tag">Casino’s Hotel</span>
      </div>
      <div class="chb-title">Caesar’s Palace Hotel & Casino</div>
      <div class="chb-review">
        <span class="chbr-coast">SAVE $10</span>
        <review-count />
      </div>
      <div class="chb-text">DOUBLE QUEEN SIZE BED</div>
      <div class="chb-footer">
        <div class="chbf-left">
          <div class="chb-coast">
            <span class="chbc-old">$145 USD</span>
            <span class="chbc-num">$135</span>
            <span class="chbc-label">+ Taxes and fees</span>
          </div>
          <div class="chb-detail">1 Room, 1 Night, 2 Adults</div>
        </div>
        <div class="chbf-right"><slot /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelBox',
  props: {},
  data () {
    return {
      value: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.c-hotel-box {
  display: flex;
  border: 1px solid #DADADA;
  border-radius: 8px;
  background: #FEFEFE;
  &:hover {
    background: linear-gradient(0deg, rgba(255, 50, 99, 0.04) 0%, rgba(255, 50, 99, 0.04) 100%), #FEFEFE;
    border: 1px solid #FF3263;

    .chb-title {
      color: #FF3263;
    }
  }
  .chb-text {
    margin-top: 0.22rem;
    color: rgba(26, 26, 26, 0.40);
    font-size: 12px;
  }
  .chb-coast {
    margin-top: 8px;
  }
  .chbc-old {
    color: rgba(26, 26, 26, 0.60);
    font-size: 12px;
    font-weight: 400;
    text-decoration: line-through;
  }
  .chbc-num {
    margin-left: 8px;
    color: #1A1A1A;
    font-size: 16px;
  }
  .chbc-label {
    margin-left: 8px;
    color: #1A1A1A;
    font-size: 14px;
    font-weight: 300;
  }
  .chb-detail {
    margin-top: 8px;
    color: rgba(26, 26, 26, 0.60);
    font-size: 10px;
    font-weight: 400;
  }
  .chb-review {
    margin-top: 0.08rem;
    display: flex;
    align-items: center;
  }
  .chbr-coast {
    margin-right: 0.18rem;
    padding: 3px 4px;
    border-radius: 4px;
    background: #00BC93;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
  .chb-title {
    margin-top: 4px;
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 500;
  }
  .chb-left {
    flex: 1;
    min-width: 0;
  }
  .chb-right {
    flex: 3;
    min-width: 0;
    padding: 0.16rem;
  }
  .chb-star {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .chbs-tag {
    padding: 2px 4px;
    border-radius: 20px;
    background: #FFB800;
    color: #1A1A1A;
    font-size: 0.12rem;
  }
  .chb-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>
