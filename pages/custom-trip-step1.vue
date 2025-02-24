<template>
  <div class="page">
    <!-- header start-->
    <div class="header">
      <div class="logo" @click="toHome">
        <img src="~assets/images/Logo.svg" alt="">
      </div>
    </div>
    <div class="page-container">
      <div class="tab-con tab-2">
        <h1>Customize your next casino trip</h1>
        <p class="banner-tip">The whole trip - tailored for you by travel expert.</p>
        <div class="search-box animate__animated" :class="searchValited?'':'animate__shakeX'">
          <destination-search v-model="form.location" placeholder="Where are you going?" />
          <el-button type="primary" class="search-btn" @click="toCustom">Search</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'CustomTripStep1',
  data () {
    return {
      form: {
        location: {
          label: '',
          value: '',
        },
      },
      searchValited: true,
    }

  },
  mounted () {
    this.$nextTick(() => {
      this.form.location.label = sessionStorage.getItem('label')
      this.form.location.value = sessionStorage.getItem('cityid')
    })
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    },
    toCustom () {
      if (!this.form.location.value) {
        this.searchValited = false;
        setTimeout(() => {
          this.searchValited = true;
        }, 1000);
        return;
      }
      this.$router.push({
        path: '/custom-trip', query: {
          id: this.form.location.value
        }
      })
    },

  }
}
</script>
<style lang="scss" scoped>
.page {
  background: #f5f5f5;
  min-height: 100vh;
}

body {
  background: #f5f5f5;
}

.page-container {
  width: 12rem;
  margin: 0 auto;
  display: flex;
  padding-top: 1rem;
  justify-content: center;
}

.tab-con {
  padding: 0.24rem 0.1rem 0.16rem 0.1rem;
  width: 100%;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  text-align: center;
  h1 {
    font-family: Rubik;
    font-size: 0.56rem;
    font-weight: normal;
    text-align: center;
    margin: 0;
    font-weight: 400;
    line-height: 100%; /* 56px */
    letter-spacing: -2.24px;
  }

  .banner-tip {
    margin-top: 0.08rem;
    font-size: 0.2rem;
    text-align: center;
    color: #202020;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 120% */
  }
  h1 {
    padding: 0 0.6rem;
  }
}

.search-box {
  margin: 0.24rem auto;
  display: flex;
  background: #fefefe;
  width: 9.12rem;
  height: 0.64rem;
  padding: 0.08rem;
  border-radius: 0.12rem;

  .inp-box {
    margin-right: 0.08rem;
    flex: 1;
    display: flex;
    padding-left: 0.16rem;
    align-items: center;
    border: 1px solid rgba(218, 218, 218, 0.6);
    background: #fefefe;
    border-radius: 0.08rem;

    .icon {
      width: 0.16rem;
      height: 0.16rem;
      display: block;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .inline-input {
      width: 100%;
    }

    ::v-deep .el-input__inner {
      height: 0.4rem;
      line-height: 0.4rem;
      border-radius: 0.08rem;
      border: none;
    }
  }

  .search-btn {
    width: 1.52rem;
    border-radius: 0.08rem;
    padding: 0.12rem 0.2rem;
    font-size: 0.14rem;
    flex-shrink: 0;
  }
}

.header {
  height: 0.64rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  background: #fefefe;
  color: rgba(26, 26, 26, 0.6);
  font-weight: 500;

  .logo {
    height: 0.32rem;

    img {
      height: auto;
    }
  }
}

.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .header {
    height: 0.48rem;

    .logo {
      height: 0.24rem;
    }
  }

  .page-container {
    width: auto;

    .tab-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .banner-tip {
      color: #1a1a1a;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: -0.56px;
    }

    .search-box {
      width: 3.36rem;
      height: 0.58rem;
      display: flex;
      flex-direction: column;
      position: relative;

      .search-btn {
        width: 3.36rem;
        height: 0.48rem;
        position: absolute;
        bottom: -0.6rem;
        left: -0.02rem;
      }
    }

    h1 {
      width: 2.53rem;
      color: #1a1a1a;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 118%; /* 28.32px */
      letter-spacing: -0.96px;
      padding: 0;
    }
  }
}
</style>
