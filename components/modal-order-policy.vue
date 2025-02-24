<template>
  <el-dialog
    :visible.sync="show"
    custom-class="c-modal-order-policy"
    :close-on-click-modal="true"
    width="600px"
    :fullscreen="fullscreen"
    append-to-body
    @close="$emit('close')"
  >
    <div v-loading="loading" v-html="content" class="cmop-content"></div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: true,
      loading: false,
      content: ''
    }
  },
  mounted () {
    this.initContent();
  },
  methods: {
    async initContent() {
      try {
        this.loading = true;
        const casinoJson = window.sessionStorage.getItem('casino');
        if (casinoJson) {
          const casino = JSON.parse(casinoJson);
          this.content = casino.metaPolicy;
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
      }
    }
  }
}
</script>

<style lang="scss">
  .c-modal-order-policy {
    .el-dialog__body {
      padding: 0 18px 30px;
    }
    .header {
      color: #1A1A1A;
      margin-top: 16px;
    }
    .text {
      margin-top: 6px;
      line-height: 1.5;
      font-weight: 300;
      color: rgba(26, 26, 26, 0.6);
    }
  }
</style>
