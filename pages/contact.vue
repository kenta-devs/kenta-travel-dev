<template>
  <div class="page">
    <kt-header></kt-header>
    <div class="center">
      <div class="top">
        <div class="guide">
          <span class="text-left" @click="toHome">Home</span>
          <svg class="text-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
            fill="none">
            <path d="M6.66666 4.66675L9.99999 8.00008L6.66666 11.3334" stroke="#1A1A1A" stroke-opacity="0.6"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="text-right">Contact us</span>
        </div>
        <div class="contact">
          <span class="text-title">Contact us</span>
        </div>
        <div class="introduction">
          <p class="text-introduction text-introduction-pc">Please contact us for any questions that you</p>
          <p class="text-introduction text-introduction-pc">may have by submitting your details below.</p>
          <p class="text-introduction text-introduction-mobile">Please contact us for any questions that you may have by
            submitting your details below.</p>
        </div>
      </div>
      <div class="table animate__animated" ref="animatedBox" :class="searchValited ? '' : 'animate__shakeX'">
        <div class="name">
          <div class="text">
            <span class="word">
              Your name
            </span>
            <span class="symbol">
              *
            </span>
          </div>
          <div class="input">
            <el-input v-model="form.firstName" placeholder="First name" :class="searchValited ? '' : 'animate__shakeX'"
              :style="showBorderRed(form.firstName)"></el-input>
          </div>
          <div class="input">
            <el-input v-model="form.lastName" placeholder="Last name" :class="searchValited ? '' : 'animate__shakeX'"
              :style="showBorderRed(form.lastName)"></el-input>
          </div>
        </div>
        <div class="name">
          <div class="text">
            <span class="word">
              Your email
            </span>
            <span class="symbol">
              *
            </span>
          </div>
          <div class="input">
            <el-input v-model="form.email" placeholder="Email address" :class="searchValited ? '' : 'animate__shakeX'"
              :style="showBorderRed(form.email)"></el-input>
          </div>
          <div class="input">
            <el-input v-model="form.confirmEmail" placeholder="Confirm email address"
              :class="searchValited ? '' : 'animate__shakeX'" :style="showBorderRed(form.confirmEmail)"></el-input>
          </div>
        </div>
        <div class="name">
          <div class="text">
            <span class="word">
              Booking Reference
            </span>
          </div>
          <div class="input-one">
            <el-input v-model="form.bookingReference" placeholder="Enter booking reference if available"></el-input>
          </div>
        </div>
        <div class="name">
          <div class="text">
            <span class="word">
              Subject
            </span>
            <span class="symbol">
              *
            </span>
          </div>
          <div class="input-one">
            <el-input v-model="form.subject" placeholder="How can we help?" :class="searchValited ? '' : 'animate__shakeX'"
              :style="showBorderRed(form.subject)"></el-input>
          </div>
        </div>
        <div class="name">
          <div class="text">
            <span class="word">
              Message
            </span>
            <span class="symbol">
              *
            </span>
          </div>
          <div class="input-two">
            <el-input v-model="form.message" class="textarea" type="textarea"
              placeholder="Enter booking reference if available" :class="searchValited ? '' : 'animate__shakeX'"
              :style="showBorderRed(form.message)"></el-input>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div v-if="!thank" class="thank-you">thank you for subscribing</div>
        <div class="content">
          <div class="prompt">
            <el-checkbox v-model="checked"><span class="left-text">By proceeding, you accept
                our&nbsp;</span></el-checkbox>
            <router-link to="terms-conditions" class="center-text">Terms of Use</router-link>
            <span class="connect-word">&nbsp;and&nbsp;</span>
            <router-link to="privacy-policy" class="right-text">Data Policy.</router-link>
          </div>
          <!-- <div class="button">
            <span class="button-text">
              Submit Request
            </span>
          </div> -->

          <el-button class="button" @click="submit">Submit Request</el-button>
        </div>
      </div>
    </div>

    <kt-footer></kt-footer>
  </div>
</template>

<script>
import { dictList } from '@/api/index';
import { contactAdd, } from '@/api/contact';
export default {
  data() {
    return {
      homePage: [],
      checked: true,
      thank: true,
      searchValited: true,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        bookingReference: '',
        subject: '',
        message: ''
      },
      showRed: false
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    toHome() {
      this.$router.push({ path: '/' })
    },
    init() {
      dictList({ dictType: 'about' }).then((res) => {
        this.homePage = res.data;
        console.log(" this.homePage", this.homePage)
      })
    },
    showBorderRed(data) {
      if (this.showRed && '' == data) {
        return 'border : 1px solid rgba(218, 0, 0, 0.6);border-radius: 0.08rem;';
      } else {
        return '';
      }
    },
    submit() {
      this.showRed = true;
      if (this.form.firstName == ''
        || this.form.lastName == ''
        || this.form.email == ''
        || this.form.confirmEmail == ''
        || this.form.subject == ''
        || this.form.message == '') {
        this.searchValited = false;
        setTimeout(() => {
          this.searchValited = true;
        }, 1000);
      }

      if (this.form.firstName != ''
        && this.form.lastName != ''
        && this.form.email != ''
        && this.form.confirmEmail != ''
        && this.form.subject != ''
        && this.form.message != '') {
        contactAdd(this.form).then((res) => {
          console.log("res", res);
          this.thank = false;
        })

      }

    }
  },
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}

::v-deep .el-input__inner::placeholder {
  color: rgba(26, 26, 26, 0.60);
  font-family: Rubik;
  font-size: .16rem;
  font-style: normal;
  font-weight: 400;
  line-height: .16rem;
  /* 100% */
}

::v-deep .el-input__inner {
  border-radius: .08rem;
  border: .01rem solid rgba(218, 218, 218, 0.60);
  background: #FEFEFE;
}

::v-deep .el-textarea__inner::placeholder {
  color: rgba(26, 26, 26, 0.60);
  font-family: Rubik;
  font-size: .16rem;
  font-style: normal;
  font-weight: 400;
  line-height: .16rem;
  /* 100% */
}

::v-deep .el-textarea__inner {
  padding: .16rem;
  border-radius: .08rem;
  border: .01rem solid rgba(218, 218, 218, 0.60);
  background: #FEFEFE;

}

.thank-you {
  color: red;
  text-align: right;
  font-family: Rubik;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  margin-bottom: 8px;
}

.header {
  height: .64rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding-right: 1.12rem;
  background: #FEFEFE;
  color: rgba(26, 26, 26, 0.60);
  font-weight: 500;

  .logo {
    margin-left: .32rem;
    height: .32rem;

    img {
      height: 100%;
    }
  }

  .btn-text {
    margin-left: .24rem;
    cursor: pointer;
    font-weight: 500;
  }

  .nav-bar {
    width: .88rem;
    height: .64rem;
    display: flex;
    right: 0;
    top: 0;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-left: solid .01rem #DADADA;

    .icon-bar {
      width: .32rem;
    }
  }
}

.center {
  background-color: #F5F5F5;
  ;
  height: 11.4rem;

  .top {
    padding-top: .8rem;

    .guide {
      font-weight: 300;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      .text-left {
        font-size: .14rem;
        text-decoration-line: underline;
        color: rgba(26, 26, 26, 0.60);
      }

      .text-center {
        margin: 0 .08rem;
      }

      .text-right {
        font-weight: 300;
        font-size: .14rem;
        color: rgba(26, 26, 26, 0.60);
      }
    }

    .contact {
      margin-top: .24rem;
      text-align: center;

      .text-title {
        font-size: .56rem;
        letter-spacing: -0.04em;
      }
    }

    .introduction {
      // margin-top: .16rem;
      margin: .16rem auto 0 auto;
      max-width: 4.27rem;
      max-height: .56rem;

      .text-introduction {
        color: #1A1A1A;
        font-size: .20rem;
        text-align: center;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        line-height: 0.28rem;
        /* 28px */
      }

      .text-introduction-pc {
        display: block;
      }

      .text-introduction-mobile {
        display: none;
      }
    }
  }

  .table {
    padding-bottom: .24rem;
    width: 9.44rem;
    margin: .4rem auto 0;
    border-radius: .16rem;
    border: 1px solid rgba(26, 26, 26, 0.16);
    background: #FEFEFE;

    .name {
      padding: .24rem .24rem 0 .24rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      .text {
        margin-top: 0.12rem;
        flex: 1;

        .word {
          font-size: .20rem;
          font-weight: 500;
        }

        .symbol {
          color: #FF3263;
          font-size: .20rem;
          font-weight: 500;
        }

      }

      .input {
        width: 3.24rem;
        border-radius: .08rem;
        margin-left: .16rem;
      }

      :deep(.el-input__inner) {
        height: 0.48rem;
        font-size: 0.16rem;
      }

      .input-one {
        width: 6.64rem;
      }

      .input-two .textarea {
        width: 6.64rem;
        height: 1.92rem;
      }
    }
  }

  .bottom {
    padding: .24rem 2.64rem 0 2.72rem;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;

      .prompt {
        flex: 1;
        display: flex;
        align-items: center;

        img {
          width: .16rem;
          height: .16rem;
          margin-right: .04rem;
        }

        .left-text {
          font-weight: 400;
          color: rgba(26, 26, 26, 0.60);
          text-align: center;
          font-size: .14rem;
        }

        .center-text {
          color: #FF3263;
          font-size: .14rem;
          text-decoration-line: underline;
        }

        .connect-word {
          color: rgba(26, 26, 26, 0.60);
          text-align: center;
          font-size: .14rem;
        }

        .right-text {
          color: #FF3263;
          font-size: .14rem;
          text-decoration-line: underline;
        }
      }

      .button {
        width: 2.14rem;
        height: .48rem;
        flex-shrink: 0;
        background-color: #FF3263;
        border-radius: 8px;
        color: #FEFEFE;
        color: #FEFEFE;
        font-family: Rubik;
        font-size: .16rem;
        font-style: normal;
        font-weight: 400;
        line-height: .16rem;
        /* 100% */
        // .button-text {
        //  color: #FEFEFE;
        //  font-size: .16rem;
        //  line-height: .48rem;
        //  padding: .16rem .47rem;
        // }
      }
    }
  }

}

.footer {
  background: #1A1A1A;
  padding: .64rem .32rem;
  display: flex;

  .footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo {
      width: .76rem;
    }

    .copyright {
      margin-top: .16rem;
      color: rgba(254, 254, 254, 0.60);
      font-size: .14rem;
    }

    flex: 1;

    .share a {
      display: inline-block;
      width: .40rem;
      height: .40rem;
      margin-left: .10rem;
    }
  }

  .footer-right {
    width: 6rem;
    display: flex;

    .item-list {
      flex: 1;

      .item-hd {
        color: #FEFEFE;
        font-family: Rubik;
        font-size: .20rem;
        margin-bottom: .24rem;
      }

      .item {
        margin-top: .16rem;
      }

      .item a {
        color: rgba(254, 254, 254, 0.60);
        font-family: Rubik;
        font-size: .14rem;
        text-decoration: none;
      }

      .item a:hover {
        text-decoration: underline;
      }
    }
  }
}

.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .header {
    height: .48rem;

    .logo {
      height: .24rem;
    }

    .header-right {
      display: none;
    }

    .nav-bar {
      border-left: none;
      width: .56rem;
      height: .48rem;

      .icon-bar {
        width: .2rem;
      }
    }
  }

  .center {
    padding: 0 .2rem;
    height: auto;
  }

  .top {
    padding-top: .4rem;

    .guide {
      justify-content: flex-start;
    }

    .contact {
      text-align: left;

      .text-title {
        font-size: .24rem;
      }

      .text-introduction {
        font-size: .15rem;
        text-align: left;
        color: #1A1A1A;
      }
    }

    .introduction {
      .text-introduction-pc {
        display: none;
      }

      .text-introduction-mobile {
        display: block;
        text-align: left;
        color: #1A1A1A;
        font-size: .16rem;
        font-style: normal;
        font-weight: 300;
        line-height: 140%;
        /* 22.4px */
      }
    }
  }

  .table {
    padding-top: .14rem;
    padding-bottom: 0;
    margin-top: .2rem;
    width: 100%;
    box-sizing: border-box;

    .name {
      display: flex;
      flex-direction: column;
      padding: 0 0 .24rem 0;

      .text {
        width: 3rem;
        text-align: left;
        margin-bottom: .16rem;

        .word,
        .symbol {
          font-size: .14rem;
        }
      }

      .input {
        width: 3rem;
        margin-left: 0;
        margin-bottom: .1rem;
      }

      .input-one {
        width: 3rem;
        margin-bottom: .1rem;
      }

      .input-two {
        .textarea {
          width: 3rem;
        }
      }
    }

    .name:last-child {
      padding-bottom: .1rem;
    }
  }

  .bottom {
    padding: .24rem 0 .48rem 0;

    .content {
      flex-direction: column;

      .prompt {
        flex-wrap: wrap;
        margin-bottom: .24rem;
      }
    }

  }

  .footer {
    padding: 0.64rem .2rem .24rem;
    flex-direction: column-reverse;

    // position: relative;
    .footer-left {
      // position: absolute;
      margin-top: .4rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      left: 0;
      bottom: 0;

      .share {
        a {
          width: .24rem;
          height: .24rem;
          margin-left: .08rem;
        }
      }
    }

    .footer-right {
      justify-content: space-between;
      width: 100%;

      .item-list {
        flex: none;
      }
    }
  }
}
</style>
