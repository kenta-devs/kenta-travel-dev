<template>
  <div class="page">
    <div class="box">
      <!-- <div class="logo-text">
        kenta
      </div> -->
      <div class="logo" @click="toHome">
        <img src="~assets/images/Logo.svg" alt="">
      </div>
      <div class="prompt">
        Login or create an account
      </div>
      <div class="email">
        Your email address
      </div>
      <div class="input">
        <el-input v-model="email" @keyup.native.enter="toNext" placeholder="Enter your email" @blur="validateFun"></el-input>
      </div>
      <div class="tips" v-if="tips.length > 0">{{ tips }}</div>
      <div class="tips success" v-if="isSuccess">{{ successTips }}</div>
      <!-- <el-button type="primary">Next</el-button> -->
      <div class="button" @click="toNext">
        <span class="text">
          Next
        </span>
      </div>
      <div class="or">
        <div class="line-1">

        </div>
        <div class="text">
          OR
        </div>
        <div class="line-2">

        </div>
      </div>
      <div class="sign">
        <div class="frame">
          <div class="content">
            <google-login></google-login>
            <div class="icon-logo">
              <img src="~assets/images/icon-google.png" alt="">
            </div>
            <div class="text">
              Sign up with Google
            </div>
          </div>

        </div>
        <div class="frame" style="width: 4.51rem;">
          <div class="content">
            <div class="icon-logo">
              <a href="">
                <img src="~assets/images/icon-facebook.png" alt="">
              </a>
            </div>
            <div class="text">
              Sign up with Facebook
            </div>
          </div>
        </div>
        <div class="frame">
          <div class="content">
            <div class="icon-logo">
              <img src="~assets/images/icon-twitter.png" alt="">
            </div>
            <div class="text" @click="onTwiLog()">
              Sign up with Twitter
            </div>
          </div>
        </div>
      </div>
      <div class="warn">
        <div class="warn-wrapper">
          <span class="none-underline">
            By creating an account, you agree to our
          </span>
          <router-link to="privacy-policy" class="underline">
            Privacy policy
          </router-link>
          <span class="none-underline">
            and
          </span>
          <router-link to="terms-conditions" class="underline">
            Terms of use.
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const { google } = require('googleapis');
// import VueGoogleApi from 'vue-google-api'
import { validEmail } from '@/utils/validate'
import { getMail } from '@/api/login'
export default {

  data () {
    return {
      email: '',
      tips: '',
      successTips: 'Please open your email to complete registration',
      isSuccess: false,
    }
  },
  mounted () {
    if (google) {
      this.client = google.accounts.oauth2.initCodeClient({
        client_id: '16800385999-8c2rie3crqe9npuou97ubripn199cr4a.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
        ux_mode: 'redirect',
        redirect_uri: "https://casino-blog.vercel.app/auth",
        state: "YOUR_BINDING_VALUE"
      });
    }
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    },
    validateFun () {
      if (this.email.length == 0) {
        this.tips = 'Please Enter Your Email'
        return false;
      } else if (!validEmail(this.email)) {
        this.tips = 'Please enter the correct Email'
        return false;
      } else {
        this.tips = '';
        return true;
      }
    },
    onTwiLog () {
      const redirectUrl = 'https://www.kenta.travel/login';
      window.location.href = redirectUrl;
    },
    toNext () {
      if (this.validateFun()) {
        let params = {
          email: this.email,
        };
        getMail(params).then((res) => {
          this.isSuccess = true;
        }).catch(() => {
          this.$router.push({ path: '/password', query: { email: this.email } })
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

.icon-logo {
  img {
    width: 0.16rem;
    height: 0.16rem;
  }
}

.page {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tips {
  color: #ff3263;
  font-size: 0.12rem;
  padding: 0.1rem 0;
}

.tips.success {
  color: #67c23a;
}

.box {
  width: 4.8rem;
  height: 5.42rem;
  margin: 0 auto;

  .logo {
    width: 0.76rem;

    img {
      width: 100%;
    }
  }

  .prompt {
    color: #1a1a1a;
    font-weight: 400;
    line-height: 124%;
    /* 39.68px */
    letter-spacing: -1.28px;
    margin-top: 0.24rem;
    font-size: 0.32rem;
  }

  .email {
    margin-top: 0.4rem;
    font-size: 0.14rem;
    font-weight: 500;
    letter-spacing: -0.56px;
  }

  .input {
    margin-top: 0.08rem;
    width: 4.48rem;
    border-radius: 0.04rem;
    letter-spacing: -0.56px;
    background: #fefefe;

    ::v-deep .el-input__inner {
      height: 0.48rem;
      color: rgba(26, 26, 26, 0.4);
      font-size: 0.16rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      /* 16px */
      letter-spacing: -0.64px;
    }
  }

  .button {
    margin-top: 0.24rem;
    width: 4.48rem;
    height: 0.48rem;
    cursor: pointer;
    border-radius: 0.08rem;
    background: #ff3263;

    .text {
      padding: 0 2.09rem;
      color: #fefefe;
      font-size: 0.14rem;
      line-height: 0.48rem;
    }
  }

  .or {
    margin-top: 0.32rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.48rem;
    height: 0.2rem;

    .line-1 {
      flex: 1;
      border: solid 0.01rem rgba(26, 26, 26, 0.16);
      line-height: 0.2rem;
    }

    .text {
      margin: 0 0.08rem;
      font-weight: 400;
      // padding: 0 .03rem;
      font-size: 0.12rem;
      line-height: 16px;
    }

    .line-2 {
      flex: 1;
      border: solid 0.01rem #1a1a1a29;
      line-height: 0.2rem;
    }
  }

  .sign {
    margin-top: 0.32rem;

    .frame {
      cursor: pointer;
      border-radius: 0.04rem;
      border: 1px solid #dadada;
      background: #fefefe;
      width: 4.48rem;
      height: 0.48rem;
      margin-top: 0.08rem;

      .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
          img {
            width: 0.16rem;
            height: 0.16rem;
          }
        }

        .text {
          font-size: 0.16rem;
          line-height: 0.48rem;
          padding-left: 0.05rem;
        }
      }
    }
  }

  .warn {
    margin-top: 0.24rem;

    .none-underline {
      font-size: 0.14rem;
      color: #1a1a1a;
      font-style: normal;
      font-weight: 400;
      line-height: 0.16rem;
      /* 114.286% */
      letter-spacing: -0.56px;
    }

    .underline {
      font-size: 0.14rem;
      color: #1a1a1a;
      text-decoration-line: underline;
    }
  }
}

.mobile {
  .page {
    width: 100vw;
    height: auto;
    min-height: 100vh;
    align-items: flex-start;
  }

  .box {
    width: 3.36rem;
    height: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 0.82rem;

    .logo {
      width: 57px;
      padding-top: 0.64rem;
    }

    .prompt {
      font-family: Rubik;
      font-size: 24px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: -0.04em;
    }

    .input {
      width: 3.36rem;

      ::v-deep .el-input__inner {
        height: 0.48rem;
      }
    }

    .button {
      width: 3.36rem;
      height: 0.48rem;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        display: block;
        width: 0.36rem;
      }
    }

    .or {
      width: 3.36rem;
      height: 0.2rem;
    }

    .sign {
      .frame {
        width: 3.36rem !important;
        height: 0.48rem;
        margin-top: 0.08rem;
      }
    }

    .warn {
      width: 100%;
      position: absolute;
      bottom: 0.32rem;
      display: flex;
      justify-content: center;

      .warn-wrapper {
        width: 2.4rem;
      }
    }
  }
}
</style>
