<template lang="html">
  <section class="subscribe-box">
      <h2 class="subscribe-tips" v-if="homePage[0]">
        {{homePage[0].dictValue}}
      </h2>
      <p class="subscribe-desc" v-if="homePage[1]">
        {{homePage[1].dictValue}}
      </p>
      <div class="subscribe-form">
        <div class="inp-box">
          <i class="icon icon-email">
            <img src="~assets/images/icon-email.png" alt="">
          </i>
          <el-input v-model="email" :placeholder="placeholder"></el-input>
        </div>
        <el-button class="form-btn" type="primary" @click="addsubscribe()">Subscribe</el-button>
      </div>
    </section>
</template>

<script>
import { subscribe } from '@/api/index.js';
import { dictList } from '@/api/index';

export default {
  data: () => ({
    loading: false,
    email: '',
    homePage: [],
    placeholder: 'Address'
  }),
  mounted () {
    this.init();
  },
  methods: {
    init () {
      dictList({ dictType: 'newsletter' }).then((res) => {
        this.homePage = res.data;
        console.log(" this.homePage", this.homePage)
      })
    },
    addsubscribe () {
      subscribe({ email: this.email }).then(res => {
        this.email = null
        this.placeholder = 'thank you for subscribing'
      })
    },
    toHome () {
      this.$router.push({ path: '/' })
    },
    toLogin () {
      this.$router.push({ path: '/login' })
    },
    toSign () {
      this.$router.push({ path: '/login' })
    },
  }
}

</script>

<style lang="scss" scoped>
h2 {
  margin: 0;
}
.subscribe-box {
  height: 304px;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .subscribe-tips {
    font-family: Rubik;
    font-size: 56px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.04em;
    text-align: center;
  }

  .subscribe-desc {
    font-family: Rubik;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }

  .subscribe-form {
    padding: 0 8px;
    align-items: center;
    width: 448px;
    height: 64px;

    margin-top: 24px;
    display: flex;
    border-radius: 8px;
    border: 1px solid rgba(218, 218, 218, 0.6);

    .form-btn {
      width: 139px;
      height: 48px;
      border-radius: 8px;
      font-family: Rubik;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      margin-right: 8px;
    }

    .inp-box {
      align-items: center;
      background: #fefefe;
      border: 1px solid hsla(0, 0%, 85%, 0.6);
      border-radius: 8px;
      display: flex;
      flex: 1;
      height: 48px;
      margin-left: 8px;
      margin-right: 8px;
      padding-left: 16px;
      width: 320px;

      .icon {
        width: 16px;
        height: 16px;
        display: block;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
        }
      }

      ::v-deep .el-input__inner {
        height: 0.4rem;
        line-height: 0.4rem;
        border-radius: 0.08rem;
        border: none;
      }
    }
  }
}

.mobile {
  .subscribe-box {
    text-align: center;
    height: auto;
    padding: 1.2rem 0.2rem;

    .subscribe-tips {
      // padding: 0 .16rem;
      font-size: 0.4rem;
    }

    .subscribe-desc {
      padding: 0 0.4rem;
      font-size: 0.16rem;
    }

    .subscribe-form {
      width: 336px;
      height: 120px;
      flex-direction: column;

      .inp-box {
        width: 320px;
        height: 48px;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 8px;
        margin-bottom: 8px;
      }

      .el-button {
        width: 320px;
        height: 48px;
        margin-left: 8px;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
