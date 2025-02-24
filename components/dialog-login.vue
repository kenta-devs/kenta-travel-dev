<template>
  <div class="page">
    <div class="prompt">Become a member - It's free</div>
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
      <div class="frame">
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
    <div class="or">
      <el-divider>OR</el-divider>
    </div>
    <div class="email">
      Email*
    </div>
    <div class="input">
      <el-input v-model="email" @keyup.native.enter="toNext" placeholder="Enter your email" @blur="validateFun"></el-input>
    </div>
    <div class="email">
      Password*
    </div>
    <div class="input">
      <el-input v-model="email" @keyup.native.enter="toNext" placeholder="Create a password" @blur="validateFun"></el-input>
    </div>
    <div class="warn">
      <div class="warn-wrapper">
        <span class="none-underline">
          <el-checkbox style="border-radius:10%">I agree with <router-link to="privacy-policy" class="underline">terms and
              conditions</router-link></el-checkbox>
        </span>
      </div>
    </div>
    <div class="tips" v-if="tips.length > 0">{{ tips }}</div>
    <div class="tips success" v-if="isSuccess">{{ successTips }}</div>
    <!-- <el-button type="primary">Next</el-button> -->
    <div class="footer">
      <span>Already have an account? <router-link to="login" class="underline">Log In</router-link></span>
      <div class="button" @click="toNext">Sign Up</div>
    </div>
  </div>
</template>

<script>
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
        client_id: '16800385999-ulk6v0ts9v17iomhknu15n699204aku9.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
        ux_mode: 'redirect',
        redirect_uri: "https://kenta-test.ipns.tech/auth",
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
      const redirectUrl = 'https://103.169.127.236:5000/login';
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
  // background: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo {
    width: 0.76rem;

    img {
      width: 100%;
    }
  }

  .prompt {
    color: #1a1a1a;
    font-weight: 400;
    width: 100%;
    letter-spacing: -1.28px;
    margin-top: 0.14rem;
    font-size: 0.25rem;
  }

  .email {
    margin-top: 1em;
    width: 100%;
    font-size: 0.14rem;
    font-weight: 500;
    letter-spacing: -0.56px;
    :deep(.el-checkbox) {
      .el-checkbox__inner {
        border-radius: 10%;
        border-color: #dcdfe6;
      }
    }
  }

  .input {
    margin-top: 0.08rem;
    width: 100%;
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
    cursor: pointer;
    padding: 0.8em;
    border-radius: 0.08rem;
    background: #ff3263;
    color: #fff;

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
    width: 100%;
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
    margin-top: 0.12rem;
    width: 100%;

    .frame {
      cursor: pointer;
      border-radius: 0.04rem;
      border: 1px solid #dadada;
      background: #fefefe;
      width: 100%;
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
    width: 100%;

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

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #aaa;
    margin-top: 1.2em;
    padding-top: 1.2em;
  }
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
}

.mobile {
  .page {
    width: calc(100vw - 40px);
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
      width: 0.76rem;
      padding-top: 0.64rem;
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
