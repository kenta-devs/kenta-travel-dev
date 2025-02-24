<template>
  <div class="page">
    <kt-header></kt-header>
    <main>
      <header>
        <div class="banner">
          <div class="banner-tag">
            TRAVEL BLOG
          </div>
          <h1 class="banner-txt">Chips & Trips: <br />Kenta's casino travel tales</h1>
          <p class="banner-sub-text">Dive into insider tips and iconic gambling destinations.
            <br v-if="!isMobile" />
            Your guide to the world of casino travel awaits!
          </p>
        </div>
      </header>
      <section>
        <div class="bg-gray">
          <div class="box-container">
            <div class="box-hd">
              <h2 class="box-hd-text">Spotlight Destinations</h2>
              <!-- <div class="box-hd-more">
                View More
              </div> -->
            </div>
            <div class="item-list clearfix">
              <div class="item" v-for="(item,index) in SpotlightDestinations.slice(0,8)" @click="toDetail(item.id)" :key="index">
                <div class="item-con">
                  <div class="item-pic">
                    <img :src="item.thumbnail" alt="">
                  </div>
                  <div class="item-msg">
                    <div class="item-tags">
                      <div class="tag">{{ item.ccategoryName.toUpperCase() }}</div>
                      <div class="read-time">{{ item.readingTime }}&nbsp;read</div>
                    </div>
                    <h3 class="item-title line-2">
                      {{ item.articleTitle }}
                    </h3>
                    <div class="item-by">
                      <div class="item-auth checked">{{ item.author }}</div>
                      <p class="item-date">{{ item.publishTime }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-hd-more-mobile">
              View More
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="bg-white">
          <div class="box-container box-2">
            <div class="box-hd">
              <h2 class="box-hd-text">A Foodies Guide - Where to eat?</h2>
              <!-- <div class="box-hd-more">
                View More
              </div> -->
            </div>
            <div class="item-list clearfix">
              <div class="item" v-for="(item,index) in EventHighlights.slice(0,6)" @click="toDetail(item.id)" :key="index">
                <div class="item-con">
                  <div class="item-pic">
                    <img :src="item.thumbnail" alt="">
                  </div>
                  <div class="item-msg">
                    <div class="item-tags">
                      <div class="tag">{{ item.ccategoryName.toUpperCase() }}</div><span class="read-time">{{ item.readingTime }}</span>
                    </div>
                    <h3 class="item-title line-2">
                      {{ item.articleTitle }}
                    </h3>
                    <div class="item-by">
                      <p class="item-auth checked">{{ item.author }}</p>
                      <p class="item-date">{{ item.publishTime }}</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-hd-more-mobile">
              View More
            </div>
          </div>
        </div>
      </section>

      <section class="bg-pink">
        <subscribe></subscribe>
      </section>

      <section>
        <div class="bg-gray">
          <div class="box-container box-3">
            <div class="box-hd">
              <h2 class="box-hd-text">Practical advices - From packing to etiquette</h2>
              <!-- <div class="box-hd-more">
                View More
              </div> -->
            </div>
            <div class="item-list clearfix">
              <div class="item" v-for="(item,index) in PracticalAdvices.slice(0,8)" @click="toDetail(item.id)" :key="index">
                <div class="item-con">
                  <div class="item-pic">
                    <img :src="item.thumbnail" alt="">
                  </div>
                  <div class="item-msg">
                    <div class="item-tags">
                      <div class="tag">{{ item.ccategoryName.toUpperCase() }}</div>
                      <div class="read-time">{{ item.readingTime }}&nbsp;read</div>
                    </div>
                    <h3 class="item-title line-2">
                      {{ item.articleTitle }}
                    </h3>
                    <div class="item-by">
                      <p class="item-auth checked">{{ item.author }}</p>
                      <p class="item-date">{{ item.publishTime }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-hd-more-mobile">
              View More
            </div>
          </div>
        </div>
      </section>
    </main>
    <kt-footer></kt-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getClientArticleList, getIndexData } from '@/api/index';
import { articleDetail } from '@/api/article'
export default {
  name: 'BlogPage',
  data () {
    return {
      articleList: [],
      isMobile: false
    }

  },
  computed: {
    SpotlightDestinations () {
      return this.articleList.filter((item) => item.ccategory == 6);
    },
    EventHighlights () {
      return this.articleList.filter((item) => item.ccategory == 7);
    },
    PracticalAdvices () {
      return this.articleList.filter((item) => item.ccategory == 8);
    },
  },
  mounted () {
    this.init();
    this.isMobile = window.isMobile;
  },
  methods: {
    init () {
      getClientArticleList().then((res) => {
        this.articleList = res.data
        console.log("this.articleList", this.articleList)
      })
    },
    toHome () {
      this.$router.push({ path: '/' })
    },
    toDetail (blogId) {
      let params = {
        id: blogId,
      };

      articleDetail(params).then(res => {
        if (res.data) {
          if (!window.whiteList.includes(`/detail/${res.data.slug}`)) {
            window.whiteList.push(`/detail/${res.data.slug}`)
          }

          sessionStorage.setItem("baid", blogId)

          this.$router.push(`/detail/${res.data.slug}`)
        }
      })
      // window.whiteList.push()
      // this.$router.push({
      //   path: '/blog-article',
      //   query: { id: blogId },
      // })
    },
    mobilebr () {
      if (window.isMobile) {
        return "dispaly:none;";
      }
      return "";
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-pink {
  padding: 0 0.32rem;
  .subscribe-box {
    color: #fff;
    background: linear-gradient(110deg, #ff3263 36.89%, #ee2344 73.36%);
    border-radius: 16px;
    :deep(.subscribe-form) {
      background-color: #fff;
    }
  }
}
h1 {
  margin: 0;
}
h2 {
  margin: 0;
}
.banner {
  height: 3.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .banner-tag {
    // display: none;
    display: block;
    width: 0.86rem;
    height: 0.2rem;
    padding: 0.04rem;
    border-radius: 0.04rem;
    font-weight: 400;
    font-size: 0.12rem;
    background: #3451ff;
    color: #fefefe;
    margin-bottom: 0.12rem;
  }

  img {
    width: 1.5rem;
    height: 0.64rem;
  }

  .banner-txt {
    color: #1a1a1a;
    text-align: center;
    font-family: Rubik;
    font-size: 0.56rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 56px */
    letter-spacing: -2.24px;
  }

  .banner-sub-text {
    margin-top: 0.16rem;
    font-size: 0.2rem;
    font-weight: 300;
    line-height: 140%; /* 28px */
    color: #1a1a1a;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
  }
}

.bg-gray {
  background-color: #f5f5f5;
}

.box-container {
  padding: 0.8rem 0.22rem;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  .box-hd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.08rem;

    .box-hd-more {
      color: #1a1a1a;
      font-weight: 400;
      cursor: pointer;
      font-size: 0.16rem;
      border-radius: 0.08rem;
      padding: 0.12rem 0.24rem;
      border: 0.01rem solid #1a1a1a;
    }

    .box-hd-text {
      color: #1a1a1a;
      font-weight: 400;
      font-size: 0.32rem;
      line-height: 124%; /* 39.68px */
      letter-spacing: -1.28px;
    }
  }

  .item-list {
    .item {
      margin: 0.4rem 0 0;
      padding: 0 0.08rem;
      width: 25%;
      float: left;

      .item-con {
        border-radius: 0.08rem;
        background: #fefefe;

        .item-pic {
          border-radius: 0.08rem 0.08rem 0px 0px;
          overflow: hidden;
          height: 2rem;
        }

        .item-msg {
          padding: 0.2rem 0.16rem;
        }

        .item-tags {
          display: flex;
          align-items: center;

          .tag {
            height: 0.2rem;
            line-height: 0.22rem;
            border-radius: 0.02rem;
            background: #ffb800;
            padding: 0 0.04rem;
            font-size: 0.12rem;
          }

          .read-time {
            position: relative;
            padding-left: 0.2rem;
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.14rem;

            &::before {
              content: '';
              width: 0.04rem;
              height: 0.04rem;
              border-radius: 50%;
              background: rgba(26, 26, 26, 0.24);
              position: absolute;
              left: 0.08rem;
              top: 50%;
              margin-top: -0.02rem;
            }
          }
        }

        .item-title {
          font-weight: 500;
          height: 0.46rem;
          font-size: 0.2rem;
          margin-top: 0.08rem;
        }

        .item-by {
          display: flex;
          align-items: center;
          margin-top: 0.16rem;

          .item-auth {
            font-size: 0.16rem;
            text-decoration: underline;
            flex-shrink: 0;
          }

          .item-auth.checked {
            padding-right: 0.26rem;
            background: url('~assets/images/icon-auth.png') no-repeat right center;
            background-size: 0.24rem;
          }

          .item-date {
            position: relative;
            font-size: 0.14rem;
            color: rgba(26, 26, 26, 0.6);
            flex-shrink: 0;
            padding-left: 0.2rem;

            &::before {
              content: '';
              width: 0.04rem;
              height: 0.04rem;
              border-radius: 50%;
              background: rgba(26, 26, 26, 0.24);
              position: absolute;
              left: 0.08rem;
              top: 50%;
              margin-top: -0.02rem;
            }
          }
        }
      }
    }
  }

  .box-hd-more-mobile {
    display: none;
  }
}

.box-2.box-container {
  .item {
    width: 33.3%;
    height: 4rem;

    .item-con {
      height: 100%;
      position: relative;
      overflow: hidden;

      .item-pic {
        height: 100% !important;
      }

      .item-msg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 40.5%, #000 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: #fefefe;

        .tag {
          background: #3451ff !important;
        }

        .item-date {
          color: #fefefe !important;

          &::before {
            background: #fefefe !important;
          }
        }

        .read-time {
          position: relative;
          padding-left: 0.2rem;
          font-size: 0.14rem;
          color: rgba(254, 254, 254, 1);

          &::before {
            content: '';
            width: 0.04rem;
            height: 0.04rem;
            border-radius: 50%;
            background: rgba(254, 254, 254, 1);
            color: rgba(254, 254, 254, 1);
            position: absolute;
            left: 0.08rem;
            top: 50%;
            margin-top: -0.02rem;
          }
        }
      }
    }
  }
}

.box-3.box-container .item-list .item .item-con .item-tags .tag {
  background: #00bc93;
  color: #fefefe;
}

.box-hd {
  font-size: 0.32rem;
  text-align: center;
}

.box-desc {
  margin-top: 0.08rem;
  font-size: 0.2rem;
  text-align: center;
}

.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .bg-pink {
    padding: 0;
    .subscribe-box {
      border-radius: 0;
    }
  }

  .box-container {
    width: 100%;
    padding: 56px 20px;
    .item-list {
      width: 100%;
      margin-top: 16px;
      .item {
        width: 100%;
        .item-title {
          font-size: 0.16rem;
          font-weight: 500;
          line-height: 0.19rem;
          color: rgba(26, 26, 26, 0.87);
        }
        .item-con {
          .item-tags .read-time {
            font-weight: 300;
          }
          .item-by {
            .item-date {
              font-weight: 300;
            }
          }
        }
      }
    }
  }

  .box-hd {
    .box-hd-text {
      font-size: 0.18rem;
      text-align: left;
    }

    .box-hd-more {
      display: none;
    }
  }

  .item {
    margin: 0 0 0.4rem 0 !important;

    .item-tags {
      .tag {
        font-size: 0.12rem;
        font-weight: 400;
      }
    }

    .item-by {
      .item-auth {
        font-size: 0.16rem;
      }
    }
  }

  .banner {
    padding: 0 0.22rem;
    align-items: flex-start;
    height: 319px;

    .banner-tag {
      display: block;
      width: 0.86rem;
      height: 0.2rem;
      padding: 0.04rem;
      border-radius: 0.04rem;
      font-size: 0.12rem;
      background: #3451ff;
      color: #ffffff;
    }

    img {
      width: 1.5rem;
      height: 0.64rem;
      transform: scale(0.6);
    }

    .banner-txt {
      width: 100%;
      font-size: 0.26rem;
      text-align: left;
    }

    .banner-sub-text {
      width: 100%;
      font-family: Rubik;
      font-size: 16px;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .box-desc {
    font-size: 0.16rem;
  }

  .box-2 {
    &.box-container .item-list .item {
      height: 320px;
      .item-con {
        .item-title {
          color: #fff;
        }
        .item-by {
          margin-top: 16px;
        }
      }
    }
  }

  .box-hd-more-mobile {
    display: block;
    cursor: pointer;
    font-size: 0.16rem;
    border-radius: 0.08rem;
    padding: 0.12rem 0.24rem;
    border: 0.01rem solid #1a1a1a;
    width: 100%;
    text-align: center;
  }
}
</style>
