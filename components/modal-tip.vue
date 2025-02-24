<template>
  <el-dialog
    :visible.sync="show"
    :custom-class="`c-modal-tip ${isMobile ? 'mobile' : ''}`"
    :close-on-click-modal="true"
    width="564px"
    append-to-body
    :show-close="false"
  >
    <div class="cmb-tips">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <g clip-path="url(#clip0_366_8117)">
          <path d="M40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0ZM40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5ZM54.3198 27.5L57.8553 31.0355L36.6421 52.2487L22.5 38.1066L26.0355 34.5711L36.6404 45.1759L54.3198 27.5Z" fill="#FF3263"/>
        </g>
        <defs>
          <clipPath id="clip0_366_8117">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <div class="cmb-tips-text">{{ msg }}</div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    msg: '',
    isMobile: Boolean
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss">
.c-modal-tip {
  background: #F5F5F5!important;
  &.mobile {
    max-width: 3.4rem;
    .cmb-tips-text {
      width: 2.4rem;
    }
  }
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0;
  }
  .cmb-tips {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 388px;
    z-index: 99;
    background: #F5F5F5;
    border-radius: 8px;
    &-text {
      margin-top: 24px;
      color: #1A1A1A;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
