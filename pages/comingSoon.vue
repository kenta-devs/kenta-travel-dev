<template>
  <div class="coming-soon">
    <kt-header></kt-header>
    <div class="main">
      <p class="top">COMING SOON</p>
      <h1 class="title">A New Era of Casino Travel with Kenta</h1>
      <p class="desc">Stay tuned for the launch of our new platform, where your ideal casino getaway comes to life.</p>
      <subscribe></subscribe>
      <p class="foo">By clicking subscribe you agree to our <a href="../privacy-policy" target="_blank">privacy</a> and <a href="../terms-conditions" target="_blank">terms</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.coming-soon {
  width: 100%;
  box-sizing: border-box;
  .main {
    width: 100%;
    padding-top: 160px;
    height: calc(100vh - 57px);
    box-sizing: border-box;
    background: url('~assets/images/Rectangle 594.webp') no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;

    .top{
      color: #fff;
      background-color: #3451FF;
      width:90px;
      margin:auto;
      border-radius: 4px;
      text-align: center;
      height:20px;
      line-height: 20px;
      font-size: 12px;
    }
    .title {
      width: 480px;
      box-sizing: border-box;
      margin: 0px auto auto auto;
      text-align: center;
      font-size: 56px;
      color: #fff;
      word-break: keep-all;
      letter-spacing: -0.04em;
    }
    .desc {
      width: 448px;
      margin: 16px auto;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      font-weight: 300;
      color: #fefefe;
      //word-break: break-all;
    }

    ::v-deep .subscribe-box {
      background: transparent !important;
      height: auto !important;
      margin-top: 0.24rem;
      padding: 0px !important;
      .subscribe-tips,
      .subscribe-desc {
        display: none !important;
      }
      .subscribe-form {
        padding: 0.1rem !important;
        margin: 0px !important;
        height: auto !important;
        background: #fff;
        display: block !important;

        .inp-box {
          width: 100% !important;
          margin: 0px !important;
          padding-right: 32px;
        }

        .el-button {
          width: 100%;
          margin: 0.1rem 0px 0px 0px !important;
        }
      }
    }

    .foo {
      color: #efefef;
      text-align: center;
      font-weight: 100;
      margin-top: 0.1rem;
      a {
        color: #ff3263;
      }
    }
  }
}

.mobile {
  .coming-soon {
    .main {
      padding-top: 1.2rem;
      .title {
        margin-top: 0.08rem;
        width: 2.4rem;
        font-size: 0.24rem;
        line-height: 0.29rem;
        letter-spacing: -0.04em;
        text-align: center;
      }

      .desc {
        width: 3.36rem;
        margin-top: 0.08rem;
        line-height: 0.29rem;
        font-size: 0.16rem;
        text-align: center;
      }
      .foo{
        font-size:12px;
      }
    }
  }
}
</style>
