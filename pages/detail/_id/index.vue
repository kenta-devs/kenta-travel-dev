<template>
  <div class="page">
    <kt-header></kt-header>
    <main>
      <header>
        <div class="banner">
          <div class="banner-content">
            <div class="article-tag">{{ form.ccategoryName }}</div>
            <h1 class="banner-text">{{ form.articleTitle }}</h1>
            <div class="article-msg">
              <label class="lab">Written by</label>
              <div class="article-auth checked">{{ form.author }}</div>
              <div class="article-date"><label class="lab">Published on </label>{{ form.publishTime }}</div>
              <!-- April 28, 2023 -->
              <p class="read-time">{{ form.readingTime }}&nbsp;read</p>
            </div>
            <div class="share-white share-white-pc">
              <label class="lab">share</label>
              <a title="Share on Facebook" target="_blank" @click="toFacebook">
                <div class="circle">
                  <img src="@/assets/images/share-facebook.svg" />
                </div>
              </a>
              <a title="Share on Twitter" target="_blank" @click="toTwitter">
                <div class="circle">
                  <img src="@/assets/images/share-x.svg" />
                </div>
              </a>
              <a title="Share on Reddit" target="_blank" @click="toReddit">
                <div class="circle">
                  <img src="@/assets/images/share-redit.svg" />
                </div>
              </a>
              <a title="Share on linkedin" target="_blank" @click="toLinkedin">
                <div class="circle">
                  <img src="@/assets/images/share-linkedin.svg" />
                </div>
              </a>
              <!-- <a
				   title="Share on Facebook" target="_blank"
				   onclick="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent('https://www.baidu.com')+'&t='+encodeURIComponent(document.title), 'newWindow', 'width=800, height=400','center');void(0);">
				</a> -->
              <!-- <div class="fb-share-button" data-href="https://your-website-url.com" data-layout="button_count" data-size="small">
                  <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyour-website-url.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">分享</a>
              </div> -->
              <!-- <img src="~assets/images/share.png" alt=""> -->

            </div>

            <div class="article-msg-mobile">
              <div class="tag">
                <div class="tag-progress" :style="{'width': progress+'%'}"></div>
              </div>
              <h2 class="article-title">
                {{ form.articleTitle }}
              </h2>
              <div class="article-by">
                <label class="lab">Written by</label>
                <div class="article-auth checked">{{ form.author }}</div>
                <p class="read-time">{{ form.readingTime }}&nbsp;read</p>
              </div>
              <p class="article-date lab">Published on {{ form.publishTime }}</p>
              <div class="share-white">
                <label class="lab">share</label>
                <div class="circle" @click="toFacebook">
                  <img src="@/assets/images/share-facebook.svg" />
                </div>
                <div class="circle" @click="toTwitter">
                  <img src="@/assets/images/share-x.svg" />
                </div>
                <div class="circle" @click="toReddit">
                  <img src="@/assets/images/share-redit.svg" />
                </div>
                <div class="circle" @click="toLinkedin">
                  <img src="@/assets/images/share-linkedin.svg" />
                </div>
              </div>
              <!-- <div class="share-white">
                <img src="~assets/images/share.png" alt="">
              </div> -->
            </div>
          </div>
          <div class="banner-pic">
            <img :src="form.thumbnail" alt="">
          </div>
        </div>
      </header>
      <div class="article-container">
        <aside>
          <div class="article-msg">
            <div class="tag">
              <div class="tag-progress" :style="{'width': progress+'%'}"></div>
            </div>
            <div class="article-title">
              {{ form.articleTitle }}
            </div>
            <div class="article-by">
              <label class="lab">Written by</label>
              <div class="article-auth checked">{{ form.author }}</div>
            </div>
            <div class="article-date lab">Published on {{ form.publishTime }}</div>
            <div class="share-white">
              <label class="lab">share</label>
              <div class="circle" @click="toFacebook">
                <img src="@/assets/images/Group 1088.svg" />
              </div>
              <div class="circle" @click="toTwitter">
                <img src="@/assets/images/Group 1089.svg" />
              </div>
              <div class="circle" @click="toReddit">
                <img src="@/assets/images/Group 1090.svg" />
              </div>
              <div class="circle" @click="toLinkedin">
                <img src="@/assets/images/Group 1091.svg" />
              </div>
            </div>
            <div class="subscribe-box">
              <div class="subscribe-tips">
                Get exclusive travel deals & promotions
              </div>
              <div class="subscribe-desc">
                Subscribe to our news letter today.
              </div>
              <div class="subscribe-form">
                <div class="inp-box">
                  <i class="icon icon-email">
                    <img src="~assets/images/email.svg" alt="">
                  </i>
                  <el-input v-model="email" :placeholder="placeholder" ></el-input>
                </div>
                <el-button class="form-btn" type="primary"  @click="addsubscribe()">Subscribe</el-button>
              </div>
              <div class="subscribe-agreement">
                By clicking subscribe you agree to our <a href="/privacy-policy">privacy</a> and <a href="/terms-conditions">terms</a>.
              </div>
            </div>
          </div>
        </aside>
        <article>
          <div class="article-content ql-editor" v-html="form.articleBody"></div>
        </article>
      </div>
      <travel-expert></travel-expert>
      <section>
        <div class="bg-gray">
          <div class="box-container">
            <div class="box-hd">
              You might also like
            </div>
            <div class="item-list clearfix">
              <div class="item" v-for="(item,index) in promoteList" :key="index" @click="toDetail(item)">
                <div class="item-con">
                  <div class="item-pic">
                    <img :src="item.thumbnail" alt="">
                  </div>
                  <div class="item-msg">
                    <div class="item-tags">
                      <div class="tag tag-1">{{ item.ccategoryName }}</div>
                      <div class="read-time">{{ item.publishTime|formatDate }}</div>
                    </div>
                    <div class="item-title line-2">
                      {{ item.articleTitle }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="item">
                  <div class="item-con">
                      <div class="item-pic">
                          <img src="~assets/images/temp/pic-12.png" alt="">
                      </div>
                      <div class="item-msg">
                          <div class="item-tags">
                              <div class="tag tag-1">BEGINNER TIPS</div>
                              <div class="read-time">24/09/2023</div>
                          </div>
                          <div class="item-title line-2">
                              3 hottest trends in poker every player should know about
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="item-con">
                      <div class="item-pic">
                          <img src="~assets/images/temp/pic-12.png" alt="">
                      </div>
                      <div class="item-msg">
                          <div class="item-tags">
                              <div class="tag tag-1">BEGINNER TIPS</div>
                              <div class="read-time">24/09/2023</div>
                          </div>
                          <div class="item-title line-2">
                              3 hottest trends in poker every player should know about
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="item-con">
                      <div class="item-pic">
                          <img src="~assets/images/temp/pic-12.png" alt="">
                      </div>
                      <div class="item-msg">
                          <div class="item-tags">
                              <div class="tag">TRAVEL GUIDE</div>
                              <div class="read-time">24/09/2023</div>
                          </div>
                          <div class="item-title line-2">
                              3 hottest trends in poker every player should know about
                          </div>
                      </div>
                  </div>
              </div> -->
            </div>
            <div class="list-footer">
              <div class="list-more" @click="toBlog">
                View all Blogs
              </div>
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
import { getData } from '@/api/system/dict/data'
import { articleDetail, articleDetailSlug, articlePromoted } from '@/api/article'
import { subscribe } from '@/api/index.js';

export default {
  name: 'BlogArticle',
  data () {
    return {
      path: '',
      id: '',
      form: {},
      promoteList: [],
      progress: 0,
      email: '',
      placeholder: 'Email Address'
    }

  },
  filters: {
    formatDate (val) {
      return dayjs(val).format('DD/MM/YYYY');
    },
    formatENDate (val) {
      return dayjs(val).format('MM DD,YYYY');
    }
  },
  watch: {
    '$route.params.id' () {
      // this.id=this.$route.query.id;
      // this.getDetail();
      // this.getPromoteList();
      window.location.reload();
    }
  },
  created () {
    console.log(this.$route)
    this.id = this.$route.params.id
    this.getDetail();
    this.getPromoteList();
    // this.init();
  },
  mounted () {
    this.$nextTick(() => {
      this.path = window.location.href;
      console.log("this.path", this.path)
      // 获取滚动条的位置
      const scrollPosition = window.scrollY || window.pageYOffset;
      console.log('Scroll position:', scrollPosition);

      // 添加滚动事件监听器
      window.addEventListener('scroll', this.handleScroll);
    })
  },
  beforeDestroy () {
    // 在组件销毁之前移除滚动事件监听器，以防止内存泄漏
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    addsubscribe () {
      subscribe({ email: this.email }).then(res => {
        this.email = null
        this.placeholder = 'thank you for subscribing'
      })
    },
    handleScroll () {
      // 在滚动时更新滚动条的位置
      const scrollPosition = window.scrollY || window.pageYOffset;
      const articleContentHeight = document.querySelector(".article-content").offsetHeight
      this.progress = scrollPosition > articleContentHeight ? 100 : (scrollPosition / articleContentHeight) * 100
    },
    getPromoteList () {
      articlePromoted().then((res) => {
        this.promoteList = res.data.slice(0, 4);
      })
    },
    getDetail () {
      let params = {
        slug: this.id,
      };
      articleDetailSlug(params).then((res) => {
        this.form = this.translateData(res.data);
        this.form.ccategoryName = res.data.ccategoryName.toUpperCase()
      })
    },
    translateData (data) {
      if (data.articleBody) {
        const catalogs = []
        const el = document.createElement('div')
        el.innerHTML = data.articleBody
        let baseId = Date.now()
        el.childNodes.forEach(node => {
          const tagName = node.nodeName.toLowerCase()
          if (tagName === 'h2') {
            baseId++
            catalogs.push({ label: node.textContent, id: baseId, children: [] })
            node.setAttribute('id', baseId)
          } else if (tagName === 'h3') {
            baseId++
            catalogs[catalogs.length - 1].children.push({ label: node.textContent, id: baseId })
            node.setAttribute('id', baseId)
          }
        })
        const catalogTpl = ['<div class="ql-editor-catalog-title">Table of Contents</div><ol class="article-content-catalog">']
        catalogs.forEach(c => {
          const leafs =c.children.map(cnode => {
            return `<li><a href="#${cnode.id}" data-id="${cnode.id}">${cnode.label}</a></li>`
          })
          catalogTpl.push(`<li><a href="#${c.id}" data-id="${c.id}">${c.label}</a><ol class="article-content-catalog-inner">${leafs.join('')}</ol></li>`)
        })
        catalogTpl.push('</ol>')
        const newArticleBody = el.innerHTML
        const index = newArticleBody.indexOf('<h2')
        data.articleBody = newArticleBody.substring(0, index) + catalogTpl.join('') + newArticleBody.substring(index)
      }
      return data
    },
    toBlog () {
      this.$router.push({ path: '/blog' })
    },
    toHome () {
      this.$router.push({ path: '/' })
    },
    toDetail (row) {
      if (!window.whiteList.includes(`/detail/${row.slug}`)) {
        window.whiteList.push(`/detail/${row.slug}`)
      }

      sessionStorage.setItem("baid", row.id)

      this.$router.push(`/detail/${row.slug}`)
    },
    upperCase: function (str) {
      return str.toUpperCase();
    },
    toFacebook () {
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.path));
    },
    toTwitter () {
      window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(this.path));
    },
    toLinkedin () {
      window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(this.path));
    },
    toReddit () {
      window.open('https://www.reddit.com/submit?url=' + encodeURIComponent(this.path) + '&title=' + this.form.articleTitle);
    },
  }
}
</script>
<style lang="scss" scoped>
h2 {
  text-align: left;
}
.article-content img {
  max-width: 100%;
}

.article-content {
  flex: 1;
  margin-left: 1.2rem;
  font-size:20px;
  :deep(.article-content-catalog) {
    margin: 24px 0;
  }
  :deep(.article-content-catalog li) {
    padding-left: 0;
    line-height: 28px;
    list-style-type: decimal!important;
  }
  :deep(.article-content-catalog a) {
    font-size: 0.24rem;
    color: #3451ff;
  }
  :deep(.article-content-catalog li:before) {
    display: none;
  }
  :deep(.article-content-catalog-inner li) {
    list-style-type: lower-alpha!important;
  }
}

.bg-white {
  background: #fefefe;
}

.share-white {
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  .lab {
    margin-right: 0.16rem;
    color: rgba(26, 26, 26, 0.6);
    text-align: center;
    font-family: Rubik;
    font-size: 0.14rem;
    font-style: normal;
    font-weight: 300;
    line-height: 0.16rem; /* 114.286% */
  }
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    margin-right: 0.16rem;
    background-color: #fefefe;
  }
  img {
    width: auto;
    height: 0.4rem;
  }
}

.banner {
  height: 5.5rem;
  width: 100%;
  padding: 0 1.48rem;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .banner-content {
    flex: 1;
    max-width: 676px;

    .article-tag {
      display: inline-block;
      height: 0.2rem;
      line-height: 0.22rem;
      border-radius: 0.04rem;
      background: #ffb800;
      padding: 0 0.04rem;
      font-size: 0.12rem;
    }

    .article-msg {
      display: flex;
      align-items: center;
      margin-top: 0.2rem;

      .lab {
        font-weight: 300;
        padding-right: 0.05rem;
        font-size: 0.14rem;
        color: rgba(26, 26, 26, 0.6);
        text-decoration: none;
      }

      .article-auth {
        font-size: 0.16rem;
        text-decoration: underline;
      }

      .article-auth.checked {
        padding-right: 0.26rem;
        background: url('~assets/images/icon-auth.png') no-repeat right center;
        background-size: 0.24rem;
      }

      .article-date {
        font-weight: 300;
        position: relative;
        font-size: 0.14rem;
        color: rgba(26, 26, 26, 0.6);
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

      .read-time {
        font-weight: 300;
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

    .article-msg-mobile {
      display: none;
    }
  }

  .banner-pic {
    width: 4.48rem;
    height: 3.96rem;
    flex-shrink: 0;
    margin-left: 0.2rem;
    border-radius: 0.16rem;
    overflow: hidden;

    img {
      display: block;
    }
  }

  .banner-text {
    text-align: left;
    margin-top: 0.16rem;
    font-size: 0.56rem;
    letter-spacing: -2.24px;
  }
}

.bg-gray {
  background-color: #f5f5f5;
}

.article-container {
  padding: 0.8rem 1.48rem;
  background: #fefefe;
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  .article-msg {
    position: sticky;
    top: 1rem;
    align-self: flex-start;
    width: 3.32rem;
    flex-shrink: 0;

    .tag {
      width: 2.16rem;
      height: 0.08rem;
      margin-bottom: 0.24rem;
      position: relative;
      border-radius: 0.08rem;
      background: #f5f5f5;

      & .tag-progress {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        border-radius: 0.08rem;
        background: linear-gradient(270deg, #ff3263 0%, #ff6a8e 100%);
      }
    }

    .article-title {
      font-size: 0.24rem;
    }

    .article-by {
      margin-top: 0.25rem;
      display: flex;
      align-items: center;
    }

    .lab {
      font-weight: 300;
      padding-right: 0.05rem;
      font-size: 0.14rem;
      color: rgba(26, 26, 26, 0.6);
      text-decoration: none;
    }

    .article-auth {
      font-size: 0.16rem;
      text-decoration: underline;
    }

    .article-auth.checked {
      padding-right: 0.26rem;
      background: url('~assets/images/icon-auth.png') no-repeat right center;
      background-size: 0.24rem;
    }

    .article-date {
      font-weight: 300;
      margin-top: 0.1rem;
    }

    .subscribe-box {
      margin-top: 1.2rem;
      height: 3.16rem;
      width: 3.4rem;
      padding: 0.24rem;
      text-align: center;
      border-radius: 0.16rem;
      border: 0.01rem solid rgba(26, 26, 26, 0.16);
      background: #f5f5f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .subscribe-tips {
        font-size: 0.32rem;
        letter-spacing: -1.28px;
        line-height: 110%;
        font-weight: 500;
      }

      .subscribe-desc {
        margin-top: 0.08rem;
        font-size: 0.16rem;
        color: rgba(26, 26, 26, 0.6);
        line-height: 140%;
        font-weight: 400;
        text-align: center;
      }

      .subscribe-form {
        width: 2.48rem;
        margin-top: 0.16rem;
        padding: 0.08rem;
        border-radius: 0.12rem;
        border: 0.01rem solid rgba(218, 218, 218, 0.6);

        .form-btn {
          width: 100%;
          margin-top: 0.08rem;
          border-radius: 0.08rem;
          color: #fefefe;
          font-family: Rubik;
          font-size: 0.16rem;
          font-style: normal;
          font-weight: 400;
          line-height: 0.16rem;
        }

        .inp-box {
          position: relative;
          border: 0.01rem solid rgba(218, 218, 218, 0.6);
          background: #fefefe;
          border-radius: 0.08rem;

          .icon {
            position: absolute;
            left: 0.16rem;
            top: 50%;
            z-index: 1;
            margin-top: -0.08rem;
            width: 0.16rem;
            height: 0.16rem;
            display: block;

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
            text-align: center;
          }
          ::v-deep .el-input__inner::placeholder {
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.16rem;
          }
        }
      }

      .subscribe-agreement {
        margin-top: 0.1rem;
        padding: 0 0.2rem;
        color: rgba(26, 26, 26, 0.6);
        font-size: 0.12rem;
        line-height: 0.16rem;

        a {
          color: #ff3263;
        }
      }
    }
  }
}

.box-container {
  padding: 0.8rem 0.22rem;

  .box-hd {
    text-align: center;
    padding: 0 0.08rem;
    font-size: 0.32rem;
  }

  .list-footer {
    margin-top: 0.4rem;
    text-align: center;

    .list-more {
      cursor: pointer;
      display: inline-block;
      font-size: 0.16rem;
      border-radius: 0.08rem;
      padding: 0.12rem 0.24rem;
      border: 0.01rem solid #1a1a1a;
    }
  }

  .item-list {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    .item {
      margin: 0.4rem 0 0;
      padding: 0 0.08rem;
      width: 25%;
      float: left;

      .item-con {
        border-radius: 0.08rem;
        background: #fefefe;

        .item-pic {
          height: 2rem;
        }

        .item-msg {
          height: 1.14rem;
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

          .tag-1 {
            background: #3451ff;
            color: #fefefe;
          }

          .read-time {
            position: relative;
            padding-left: 0.08rem;
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.14rem;
            // &::before{
            //     content: '';
            //     width: 4px;
            //     height: 4px;
            //     border-radius: 50%;
            //     background: rgba(26, 26, 26, 0.24);
            //     position: absolute;
            //     left: 8px;
            //     top: 50%;
            //     margin-top: -2px;
            // }
          }
        }

        .item-title {
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
}

.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .banner {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap-reverse;
    padding: 0;
    height: auto;

    .banner-pic {
      padding: 0;
      margin: 0;
      width: 100%;
      height: auto;
      border-radius: 0;

      img {
        width: 100%;
        height: auto;
        transform: none;
      }
    }

    .banner-content {
      box-sizing: border-box;
      padding: 0 0.24rem 0 0.2rem;

      .article-tag {
        display: none;
      }

      .banner-text {
        font-size: 0.32rem;
      }

      .share-white-pc,
      .tag-progress,
      .article-msg,
      .article-title,
      .tag {
        display: none !important;
      }

      .article-msg-mobile {
        position: sticky;
        top: 1rem;
        align-self: flex-start;
        width: 3.32rem;
        flex-shrink: 0;
        display: block;

        .tag {
          width: 2.16rem;
          height: 0.08rem;
          margin-bottom: 0.24rem;
          position: relative;
          border-radius: 0.08rem;
          background: #f5f5f5;

          & .tag-progress {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            border-radius: 0.08rem;
            background: linear-gradient(270deg, #ff3263 0%, #ff6a8e 100%);
          }
        }

        .article-title {
          font-size: 0.24rem;
        }

        .article-by {
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
        }

        .read-time {
          font-weight: 300;
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

        .lab {
          font-weight: 300;
          padding-right: 0.05rem;
          font-size: 0.14rem;
          color: rgba(26, 26, 26, 0.6);
          text-decoration: none;
        }

        .article-auth {
          font-size: 0.16rem;
          text-decoration: underline;
        }

        .article-auth.checked {
          padding-right: 0.26rem;
          background: url('~assets/images/icon-auth.png') no-repeat right center;
          background-size: 0.24rem;
        }

        .article-date {
          margin-top: 0.1rem;
        }

        .subscribe-box {
          margin-top: 1.2rem;
          height: 3.16rem;
          width: 3.4rem;
          padding: 0.24rem;
          text-align: center;
          border-radius: 0.16rem;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
          background: #f5f5f5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .subscribe-tips {
            font-size: 0.32rem;
            letter-spacing: -1.28px;
            line-height: 110%;
            font-weight: 500;
          }

          .subscribe-desc {
            margin-top: 0.08rem;
            font-size: 0.16rem;
            color: rgba(26, 26, 26, 0.6);
            line-height: 140%;
            font-weight: 400;
            text-align: center;
          }

          .subscribe-form {
            width: 2.48rem;
            margin-top: 0.16rem;
            padding: 0.08rem;
            border-radius: 0.08rem;
            border: 0.01rem solid rgba(218, 218, 218, 0.6);

            .form-btn {
              width: 100%;
              margin-top: 0.08rem;
              border-radius: 0.08rem;
              color: #fefefe;
              font-family: Rubik;
              font-size: 0.16rem;
              font-style: normal;
              font-weight: 400;
              line-height: 0.16rem;
            }

            .inp-box {
              position: relative;
              border: 0.01rem solid rgba(218, 218, 218, 0.6);
              background: #fefefe;
              border-radius: 0.08rem;

              .icon {
                position: absolute;
                left: 0.16rem;
                top: 50%;
                z-index: 1;
                margin-top: -0.08rem;
                width: 0.16rem;
                height: 0.16rem;
                display: block;

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
                text-align: center;
              }
            }
          }

          .subscribe-agreement {
            margin-top: 0.1rem;
            padding: 0 0.2rem;
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.12rem;
            line-height: 0.16rem;

            a {
              color: #ff3263;
            }
          }
        }
      }

      .share-white {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 0.4rem 0;

        img {
          width: 2.8rem;
          height: 0.38rem;
          transform: none;
        }

        a {
          display: none !important;
        }
      }
    }

    img {
      width: 1.5rem;
      height: 0.64rem;
      transform: scale(0.6);
    }
  }

  .article-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0.4rem 0.2rem;

    aside {
      width: 100%;
    }

    .article-msg {
      width: 100%;
      display: none;
    }

    .article-content {
      margin: 0;
      padding: 0;
    }
  }

  .about-layout {
    flex-direction: column;
    padding: 0.5rem 0 0;

    .layout-left {
      padding: 0 0.15rem;
    }

    .layout-right {
      width: 100%;
      padding: 0.15rem;

      img {
        height: 4rem;
        border-radius: 0.08rem;
      }
    }
  }

  .box-hd {
    font-size: 0.22rem;
    text-align: left;
    letter-spacing: -0.04em;
  }

  .box-desc {
    font-size: 0.16rem;
  }

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
      width: 100%;
      flex-direction: column;

      .inp-box {
        margin-right: 0;
      }

      .el-button {
        margin-top: 0.08rem;
      }
    }
  }

  .box-container {
    padding: 0.56rem 0.2rem;

    .item-list {
      display: flex;
      flex-direction: column;
      margin-top: 0.16rem;

      .item {
        width: 100%;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
