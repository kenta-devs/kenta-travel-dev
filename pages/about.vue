<template>
  <div class="page">
    <kt-header></kt-header>
    <main>
      <header class="banner" :style="{ backgroundImage: `url(${homePage[7]?.dictValue})` }">
        <img src="~assets/images/Logo-white.svg" alt="">
        <h1 class="banner-txt" v-if="homePage[0]">{{ homePage[0].dictValue }}</h1>
      </header>
      <section class="about-layout">
        <div class="layout-left">
          <h2 class="about-hd" v-if="homePage[3]">{{ homePage[3].dictValue }}</h2>
          <div class="about-content">
            <!-- <p v-if="homePage[2]" v-html="homePage[2].dictValue"></p> -->
            <p>We're here to revolutionize the way casino enthusiasts experience travel. At Kenta, we merge the
              glamorous world of top-tier casino resorts with the desires of passionate travelers, curating
              tailor-made getaways that transform ordinary trips into memories of a lifetime.</p>
            <p>Whether you're a seasoned gambler or simply seeking that extraordinary mix of thrill and luxury,
              we've got your back, ensuring every step of your journey is unforgettable.
            </p>
            <div class="line"></div>
            <p>Our commitment lies in delivering unparalleled insights, timely travel tips, and showcasing
              destinations that are a gambler's dream. We're in tune with the heartbeat of casino-centric
              locales across the globe - from the mesmerizing lights of Vegas to the grandeur of Monaco.
            </p>
            <p class="bold">Trust in Kenta as your premier guide in weaving together the exhilaration of gaming
              with unmatched travel escapades.
            </p>
          </div>
        </div>
        <div class="layout-right">
          <!-- <img src="~assets/images/about-pic.png" alt=""> -->
          <img v-if="homePage[1]" :src="homePage[1].dictValue" alt="">
        </div>
      </section>
      <section class="excellence-box">
        <h2 class="excellence-hd">
          Unparalleled casino travel excellence
        </h2>
        <div class="item-list clearfix">
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/fi_1055916.svg" alt="">
            </div>
            <h3 class="item-title">
              Tailored Casino Experiences
            </h3>
            <p class="item-desc">
              Handpicked destinations to match your casino preferences.
            </p>
          </div>
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/fi_6459895.svg" alt="">
            </div>
            <h3 class="item-title">
              Exclusive Deals & Perks
            </h3>
            <p class="item-desc">
              Unbeatable offers and bonuses for Kenta’s Members.
            </p>
          </div>
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/fi_6459781.svg" alt="">
            </div>
            <h3 class="item-title">
              Holistic Experience
            </h3>
            <p class="item-desc">
              Amplify your Kenta status with every booking and trade in points for rewards and privileges.
            </p>
          </div>
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/fi_6459853.svg" alt="">
            </div>
            <h3 class="item-title">
              Global Casino Directory
            </h3>
            <p class="item-desc">
              Navigate the world's best casinos effortlessly in an all-in-one platform.
            </p>
          </div>
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/fi_7231283.svg" alt="">
            </div>
            <h3 class="item-title">
              Top-tier Partnerships
            </h3>
            <p class="item-desc">
              Teamed up with the finest in the industry for your luxury.
            </p>
          </div>
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/fi_5247290.svg" alt="">
            </div>
            <h3 class="item-title">
              Always Evolving
            </h3>
            <p class="item-desc">
              Continually refining our services for the ultimate experience.
            </p>
          </div>
        </div>
      </section>
      <travel-expert></travel-expert>
      <subscribe></subscribe>
    </main>
    <kt-footer></kt-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { dictList } from '@/api/index';
export default {
  name: 'AboutPage',
  data() {
    return {
      homePage: [],
    }

  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      dictList({ dictType: 'about' }).then((res) => {
        this.homePage = res.data;
        console.log(" this.homePage", this.homePage)
      })
    },
    toHome() {
      this.$router.push({ path: '/' })
    },
  }
}
</script>
<style lang="scss" scoped>
h1 {
  margin: 0;
}

h2 {
  margin: 0;
  letter-spacing: -1.28px;
}

h3 {
  margin: 0;

}

.banner {
  height: 4.24rem;
  width: 100%;
  // background: url('~assets/images/about-banner.png') center;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 1.68rem;
    height: .525rem;
  }

  .banner-txt {
    font-weight: 400;
    letter-spacing: -0.04em;
    margin-top: .1rem;
    color: #FEFEFE;
    font-size: .56rem;
    text-align: center;
  }
}

.about-layout {
  display: flex;
  align-items: center;
  padding: .8rem .32rem;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  .layout-left {
    font-weight: 400;
    line-height: 140%;
    flex: 1;
    padding: 0 1.16rem;

    .about-hd {
      text-align: left;
      color: #1A1A1A;
      font-size: 32px;
      line-height: 39.68px;
      /* 39.68px */
      letter-spacing: -0.04em;
    }

    .about-content {
      p {
        color: rgba(26, 26, 26, 0.60);
        line-height: 22.4px;
        font-size: 16px;
        margin-top: 16px;
        font-weight: 400;
      }

      .line {
        height: .01rem;
        margin: .24rem 0rem;
        background: rgba(26, 26, 26, 0.16);
      }

      .bold {
        color: #1A1A1A;
        font-weight: 600;
      }
    }
  }

  .layout-right {
    width: 5.64rem;
    flex-shrink: 0;

    img {
      height: 5.36rem;
      border-radius: .12rem;
    }
  }
}

.excellence-box {
  padding: 1.2rem 0 1rem;
  background: #F5F5F5;

  .excellence-hd {
    color: #1A1A1A;
    font-size: .32rem;
    text-align: center;
  }

  .item-list {
    margin-top: .44rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;

    .item {
      width: 3.68rem;
      float: left;
      box-sizing: content-box;
      padding: .2rem .48rem;
      text-align: center;

      .item-pic {
        width: .8rem;
        height: .8rem;
        margin: 0 auto;
        border-radius: .06rem;
        background: #FEFEFE;
        box-shadow: 0rem .02rem .12rem 0rem rgba(0, 0, 0, 0.08);
        padding: 0.1rem;
      }

      .item-title {
        margin-top: 24px;
        color: rgba(26, 26, 26, 0.87);
        font-size: 20px;
        font-weight: 500;
      }

      .item-desc {
        line-height: 22.4px;
        font-weight: 400;
        margin-top: 8px;
        color: rgba(26, 26, 26, 0.60);
        font-size: 16px;
        text-align: center;
      }
    }
  }
}

.box-hd {
  font-size: .32rem;
  text-align: center;
}

.box-desc {
  margin-top: .08rem;
  font-size: .20rem;
  text-align: center;
}






//媒体查询屏幕小于1200像素
@media screen and (max-width: 12rem) {
  .about-layout {
    .layout-left {
      padding: 0 .3rem;
    }
  }
}

@media screen and (max-width: 10rem) {
  .about-layout {
    padding: .5rem .1rem;

    .layout-left {
      padding: 0 .15rem;
    }
  }
}


.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .banner {
    height: 334px;
    background-size: 250% 100%;
    background-position: center;

    img {
      transform: scale(.6);
    }

    .banner-txt {
      width: 2.67rem;
      font-size: .24rem;
    }

    .banner-sub-text {
      font-size: .12rem;
      text-align: center;
    }
  }

  .about-layout {
    flex-direction: column;
    padding: .5rem 0 0;

    .layout-left {
      padding: 0 .15rem;

      .about-hd {
        font-family: Rubik;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.04em;
        text-align: left;
      }

      .about-content {
        font-size: 16px;
        font-weight: 400;
        line-height: 22.4px;
        text-align: left;
      }
    }

    .layout-right {
      width: 100%;
      padding: .15rem;

      img {
        height: 4rem;
        border-radius: .08rem;
      }
    }
  }

  .excellence-box {
    padding: 56px 0 36px;

    .excellence-hd {
      font-family: Rubik;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.04em;
      text-align: left;
      padding: 0 0.2rem;
    }

    .item-list {
      margin-top: 0.2rem;
    }

    .item {
      width: 100%;
      padding: .2rem .2rem;
      text-align: left;

      .item-title {
        font-family: Rubik;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
      }

      .item-desc {
        text-align: left;
      }

      .item-pic {
        margin: 0;
      }
    }
  }


  .box-hd {
    font-size: .24rem;
  }

  .box-desc {
    font-size: .16rem;
  }
}
</style>
