<template>
  <div class="page">
    <KtHeader></KtHeader>
    <!-- <div class="Header">
      <div class="header-pic">
        <i><img src="~assets/images/Logo.svg" /></i>
      </div>
      <div class="header-text">
        Secured Checkout
      </div>
    </div> -->
    <div class="body-box">
      <div class="box-left">
        <div class="box-content">
          <div class="content-title">
            Payment by Credit Card
          </div>
          <div class="content-item">
            <div class="left-item">
              <div class="item-title">
                <i class="el-icon-bank-card"></i>
                Card Number
              </div>
              <el-input v-model="form.input" placeholder="####-####-####-####"></el-input>
            </div>
            <div class="right-item">
              <div class="item-title">
                <i class="el-icon-date"></i>
                Expiration Date
              </div>
              <div style="display: flex;">
                <el-date-picker v-model="form.value2" type="month" placeholder="Month(MM)" style="margin-right: 15px;">
                </el-date-picker>
                <el-date-picker v-model="form.value1" type="year" placeholder="Year(YYYY)">
                </el-date-picker>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="content-item">
            <div class="left-item">
              <div class="item-title">
                <i class="el-icon-s-custom"></i>
                ID/SSR/PASSPORT
              </div>
              <el-input v-model="form.input" placeholder="####-####-####-####"></el-input>
            </div>
            <div class=" right-item">
              <div class="item-title">
                <i class="el-icon-s-ticket"></i>
                CVV
              </div>
              <el-input v-model="form.input1" placeholder="####-####-####-####"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="box-right">
        <div class="right-title">
          Summary
        </div>
        <div style="padding-bottom: 0.15rem;">
          West Ham United vs Manchester United
        </div>
        <div class="line"></div>
        <div class="right-content">
          <p class="describe">Quantity:</p>
          <p class="numbers">22</p>
        </div>
        <div class="line"></div>
        <div class="right-content">
          <p class="describe">Total:</p>
          <p class="numbers">22</p>
        </div>
        <el-button @click="goEmail(item.index)" class="button">Pay Now</el-button>
        <div class="remark">Confirmation will be sent up to 24h.</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { } from "@/api/ticket";

export default {
  name: "checkout",
  data() {
    return {
      isMobile: false,
      form: {
        input: '',
        input1: '',
        value1: '',
        value2: ''
      }

    };
  },
  created() {

  },
  mounted() {
    if (!window.isMobile) {
      // this.initMap();
    }
    this.isMobile = window.isMobile;
  },
  methods: {
    // 返回按钮
    backbtn() {
      this.$router.push({ path: '/ticket' })
    },

    // menu查询
    filterList() {
      this.$router.push({ path: '/menu-app' })
    },



  },
};
</script>
<style lang="scss" scoped>
.page {
  background-color: #f5f5f5;
  height: 100vh;
}

.Header {
  height: 0.64rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999;
  justify-content: space-between;
  padding-right: .32rem;
  background: #FEFEFE;
  color: rgba(26, 26, 26, 0.6);
  border-bottom: solid 1px #DADADA;
  font-weight: 500;

  .header-pic {
    margin-left: 0.32rem;

    img {
      width: 0.76rem;
    }
  }

  .header-text {
    color: #1A1A1A99;
  }
}


.body-box {
  display: flex;
  border: 1px solid #dadada;
  margin: 0.8rem 1.3rem;
  border-radius: .08rem;

  .box-left {
    width: 60%;
    border-right: 1px solid #dadada;
    background: #FEFEFE;
    border-bottom-left-radius: .08rem;
    border-top-left-radius: .08rem;

    .box-content {
      padding: 0.2rem 0.3rem;

      .line {
        width: 6rem;
        height: 0.01rem;
        background: #dadada;
        margin-top: 0.21rem;
        width: 100%;
      }

      .content-title {
        font-weight: 500;
        font-size: .25rem;

      }

      .content-item {
        display: flex;

        .item-title {
          padding: 0.3rem 0 0.1rem 0;
        }

        .left-item {
          width: 50%;
          margin-right: 15px;

        }

        .right-item {
          width: 50%;
        }
      }



    }
  }

  .box-right {
    width: 40%;
    padding: 0.2rem;
    background: #FEFEFE;
    border-top-right-radius: .08rem;
    border-bottom-right-radius: .08rem;

    .line {
      width: 6rem;
      height: 0.001rem;
      background: #dadada;
      width: 100%;
    }

    .right-title {
      padding-bottom: .2rem;
      font-weight: 500;
    }

    .right-content {
      display: flex;
      justify-content: space-between;
      line-height: .4rem;

      .describe {
        color: #1A1A1A99;
      }

      .numbers {
        color: #1A1A1A;
        font-weight: 500;
      }

    }

    .button {
      border-radius: 0.08rem;
      background-color: #ff3263;
      color: #fefefe;
      font-size: 0.14rem;
      margin-top: 0.1rem;
      width: 100%;
      margin-top: 0.5rem;
    }

    .remark {
      text-align: center;
      color: #1A1A1A99;
      margin-top: 0.13rem;
    }
  }
}

.mobile {
  .body-box {
    display: contents;
    flex-direction: column;

  }
}
</style>
