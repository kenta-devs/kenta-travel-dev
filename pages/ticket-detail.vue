<template>
  <div class="page">
    <!-- header start-->
    <KtHeader></KtHeader>
    <!-- header end-->
    <!-- 照片 -->
    <div class="view-photo">
      <div class="item-picture">
        <!-- <img src="~assets/images/ticket.png" alt=""> -->
        <img :src="ticketDetailList.backgroundImageUrl" alt="">
        <div class="background-title">
          <div>
            <div class="background-top">
              <p class="background-img">
                <img :src="ticketDetailList.thumbnailUrl" alt="" />
              </p>
              <p>
                {{ ticketDetailList.name }}
              </p>
            </div>
            <div class="background-data">
              <!-- <p>Football Tickets | Premier League 2023-2024</p> -->
              <p v-if="ticketDetailList.eventCategory">{{ ticketDetailList.eventCategory.title }} | {{
                ticketDetailList.eventCategory.description }}</p>
              <p class="background-icon">DATE CONFIRMED</p>
            </div>
            <div class="background-location">
              {{ ticketDetailList.location }}
            </div>
            <div class="background-satdium">
              {{ ticketDetailList.venue }}
            </div>
            <p class="background-icon1">DATE CONFIRMED</p>
            <div>
              <span class="background-note"> <i class="el-icon-info"></i>Organizer regulations: No away fans
                allowed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="head-title">
      <h2> Tickets Information</h2>
    </div>
    <div class="body-content">
      <div class="body-top">
        <!-- 左边部分 -->
        <div class="box-left">
          <div class="box-picture">
            <img :src="images[currentIndex]" alt="Carousel Image" class="imgpic" />
            <div class="box-bottom">
              <div class="box-picture-small">
                <div class="box-items" v-for="(itm, idx) in images" :key="idx">
                  <img :src="itm" />
                  <div class="mask" @click="picBtn(itm)">
                    <p>
                      <svg t="1703580658094" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5755" style="margin-bottom: -6px;" width="25"
                        height="25">
                        <path
                          d="M925.866667 633.6c-6.4 57.6-51.2 100.266667-106.666667 110.933333l32 164.266667c4.266667 23.466667-10.666667 44.8-34.133333 51.2h-8.533334c-19.2 0-38.4-14.933333-42.666666-34.133333L733.866667 746.666667H290.133333L256 925.866667c-4.266667 21.333333-21.333333 34.133333-42.666667 34.133333h-8.533333c-23.466667-4.266667-38.4-27.733333-34.133333-51.2l32-164.266667c-55.466667-8.533333-100.266667-53.333333-106.666667-110.933333L85.333333 537.6c-2.133333-12.8 2.133333-23.466667 10.666667-34.133333 8.533333-8.533333 19.2-12.8 32-12.8h44.8l14.933333-305.066667C192 117.333333 247.466667 64 315.733333 64h392.533334c68.266667 0 123.733333 53.333333 128 121.6l14.933333 305.066667H896c12.8 0 23.466667 4.266667 32 14.933333 8.533333 8.533333 12.8 21.333333 10.666667 34.133333l-12.8 93.866667z m-83.2-10.666667l6.4-46.933333H177.066667l6.4 46.933333c2.133333 21.333333 21.333333 38.4 42.666666 38.4H797.866667c23.466667 0 40.533333-17.066667 44.8-38.4zM273.066667 189.866667L258.133333 490.666667h507.733334l-14.933334-300.8c-2.133333-23.466667-19.2-40.533333-42.666666-40.533334H315.733333c-23.466667 0-40.533333 17.066667-42.666666 40.533334z"
                          fill="#ffffff" p-id="5756"></path>
                      </svg>
                      View seats
                    </p>
                  </div>
                </div>
              </div>
              <div class="box-count">
                <p>
                  <i class="el-icon-picture-outline"></i>
                  See all images({{ images.length }})
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 右边的部分 -->
        <div class="box-right">
          <div class="right-title">
            Standard tickets
          </div>
          <div class="textcolor" style="display: none;">
            SILVER MEMBERS
            <i class="el-icon-info"></i>
          </div>
          <div class="line">

          </div>
          <div class="textcolor">
            Cheer on the Hammers at the spectacular London Stadium. Choose your seats on the next page!
          </div>
          <div style="padding: 0.2rem 0 0.1rem ">
            Select seat type:
          </div>
          <div class="right select">
            <el-select v-model="value" placeholder="Please select a seat" style="width:100%" @change="changePrice">
              <el-option v-for="item in options" :key="item.type" :label="item.type" :value="item.price">
              </el-option>
            </el-select>
          </div>
          <div class="right-included">
            <p style="color: #1A1A1A;">What’s included?</p>
            <p>
              <i class="el-icon-circle-check"></i>
              Official E-tickets
            </p>
            <p>
              <i class="el-icon-circle-check"></i>
              Event guarantee
            </p>
            <p>
              <i class="el-icon-circle-check"></i>
              Seats next to each other
            </p>
          </div>
          <div>
            <p class="right-money">€{{ price }}</p>
            <span class="textcolor">per ticket</span>
          </div>
          <div class="textcolor">
            Confirmation will be sent up to 24h.
          </div>
          <div>
            <el-button @click="goEmail(item.index)" class="button">Buy Tickets
            </el-button>
          </div>
        </div>
      </div>
      <div class="body-center">
        <div class="center-title">
          <h2> How does it work?</h2>
        </div>
        <div class="center-content">
          <div class="center-items">
            <div class="center-left">
              <svg t="1703582649316" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="39534" width="43" height="43">
                <path
                  d="M819.2 399.36c-20.48 0-35.84 5.12-51.2 15.36-10.24-35.84-46.08-61.44-81.92-61.44-15.36 0-35.84 5.12-51.2 15.36-10.24-35.84-40.96-61.44-81.92-61.44-15.36 0-30.72 5.12-40.96 10.24v-92.16c0-51.2-35.84-92.16-87.04-92.16s-92.16 40.96-92.16 92.16v353.28l-56.32-56.32c-35.84-35.84-97.28-30.72-128 0s-51.2 92.16-5.12 133.12l256 256 15.36 15.36c46.08 35.84 102.4 61.44 209.92 61.44 256 0 281.6-138.24 281.6-312.32V491.52c0-51.2-40.96-92.16-87.04-92.16m35.84 276.48c0 143.36 0 261.12-230.4 261.12-97.28 0-158.72-20.48-199.68-66.56L184.32 629.76c-20.48-20.48-15.36-51.2 0-66.56s51.2-20.48 66.56 0c0 0 40.96 40.96 81.92 76.8l51.2 51.2V230.4c0-25.6 20.48-40.96 46.08-40.96s40.96 20.48 40.96 40.96v296.96c0 10.24 10.24 25.6 20.48 25.6 15.36 0 25.6-10.24 25.6-25.6V404.48c0-25.6 15.36-40.96 40.96-40.96 0 0 40.96 0 40.96 40.96v163.84c0 10.24 10.24 25.6 20.48 25.6 15.36 0 25.6-10.24 25.6-25.6V450.56c0-25.6 15.36-40.96 40.96-40.96 0 0 40.96 5.12 40.96 40.96v143.36c0 10.24 10.24 25.6 20.48 25.6 15.36 0 25.6-10.24 25.6-25.6v-102.4c0-25.6 20.48-40.96 40.96-40.96 0 0 40.96 0 40.96 40.96v184.32M296.96 358.4v-76.8c-10.24-15.36-15.36-35.84-15.36-56.32 0-76.8 61.44-138.24 138.24-138.24 76.8 0 138.24 61.44 138.24 138.24 0 10.24 0 20.48-5.12 30.72 15.36 0 30.72 10.24 46.08 20.48 5.12-15.36 5.12-30.72 5.12-51.2 0-102.4-81.92-184.32-184.32-184.32s-184.32 81.92-184.32 184.32c0 51.2 20.48 97.28 61.44 133.12"
                  p-id="39535" fill="#d81e06"></path>
              </svg>
            </div>
            <div class="center-right">
              <div class="center-right-title">Choose your event</div>
              <p>Visit your favorite sports or music events</p>
            </div>
            <p class="center-line"></p>
            <p class="center-line-mobile"></p>
          </div>
          <div class="center-items">
            <div class="center-left">
              <svg t="1703583097522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="60576" width="43" height="43">
                <path
                  d="M641.102655 348.654916 581.09301 318.319321 611.549889 378.266485 570.945617 422.810635 634.255643 419.120674 669.148564 476.972941 677.7891 414.816945 739.930395 406.047775 682.0377 371.239388 685.562272 307.958763 641.102655 348.654916ZM510.895546 479.130319 450.918979 448.761646 481.41261 508.675733 440.800988 553.219883 504.077938 549.566675 538.945129 607.448341 547.615068 545.25927 609.785766 536.460698 551.830591 501.71479 555.355165 438.43049 510.895546 479.130319ZM380.750917 609.539566 320.741273 579.203971 351.201827 639.151134 310.593881 683.695285 373.903908 680.005325 408.800501 737.85759 417.437361 675.701597 479.578656 666.932423 421.65656 632.157118 425.214211 568.839738 380.750917 609.539566ZM829.345792 421.630877 422.545972 829.268655C413.570988 838.258339 398.421567 837.747477 388.751958 828.096247L195.91107 635.652289C186.21941 625.982681 185.682822 610.836932 194.654131 601.847247L601.457625 194.205794C610.42526 185.219783 625.571003 185.726969 635.262669 195.400253L828.099879 387.844213C837.773161 397.495445 838.313424 412.644866 829.345792 421.630877L829.345792 421.630877ZM651.507314 179.118852C632.127669 159.779634 601.891306 158.699107 583.919285 176.707881L177.119466 584.345659C159.14377 602.354435 160.257373 632.620201 179.637019 651.963091L372.474231 844.403375C391.8355 863.727893 422.123318 864.793714 440.095339 846.784946L846.898833 439.147166C864.867177 421.138392 863.713147 390.887328 844.348205 371.562811L651.507314 179.118852ZM880.799431 245.181648 978.315101 342.495181C997.680044 361.823372 998.808353 392.103839 980.836328 410.116288L411.303352 980.817998C393.364409 998.793692 363.076592 997.72787 343.711648 978.399678L247.294879 882.181373C274.267611 855.149833 272.569641 809.749347 243.535088 780.769925 214.478483 751.775798 169.089023 750.184412 142.116291 777.215952L45.681146 680.979269C26.312526 661.651077 25.206273 631.388985 43.145216 613.413292L612.674518 42.71158C630.650217 24.702806 660.915977 25.74658 680.280925 45.074772L775.606139 140.201524C748.629733 167.233061 750.33138 212.629871 779.384308 241.627672 808.426213 270.607097 853.826699 272.213185 880.799431 245.181648L880.799431 245.181648Z"
                  fill="#d81e06" p-id="60577"></path>
              </svg>
            </div>
            <div class="center-right">
              <div class="center-right-title">Choose your event</div>
              <p>Visit your favorite sports or music events</p>
            </div>
            <p class="center-line"></p>
            <p class="center-line-mobile"></p>
          </div>
          <div class="center-items">
            <div class="center-left">
              <svg t="1703583395323" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="66334" width="43" height="43">
                <path
                  d="M969.142857 914.285714h-19.428571V84.571429h-94.857143V0H169.142857v84.571429H74.285714v829.714285H54.857143c-30.171429 0-54.857143 24.685714-54.857143 54.857143s24.685714 54.857143 54.857143 54.857143h914.285714c30.171429 0 54.857143-24.685714 54.857143-54.857143s-24.685714-54.857143-54.857143-54.857143zM589.289143 452.701714v108.994286H434.710857v-108.994286h154.578286z m-154.578286-72.834285v-108.988572h154.578286v108.988572H434.710857z m154.578286 254.662857v228.462857H434.710857V634.530286h154.578286z m72.833143-363.651429h154.579428v108.988572H662.122286v-108.988572z m0 181.822857h154.579428v108.994286H662.122286v-108.994286z m0 181.828572h154.579428v108.988571H662.122286v-108.988571zM432.371429 58.576h0.574857c0-4.584 3.436571-8.594286 8.019428-8.594286h30.932572c4.582857 0 8.019429 4.010286 8.019428 8.594286v42.389714c0 4.584 3.437714 8.594286 8.020572 8.594286h48.693714c4.585143 0 8.020571-4.010286 8.020571-8.594286V58.576c0-4.584 3.436571-8.594286 8.019429-8.594286h30.933714c4.584 0 8.020571 4.010286 8.020572 8.594286v150.661714c0 4.584-3.436571 8.594286-8.020572 8.594286h-31.506285c-4.585143 0-8.020571-4.010286-8.020572-8.594286v-48.12c0-4.582857-3.436571-8.593143-8.019428-8.593143h-48.693715c-4.585143 0-8.020571 4.010286-8.020571 8.593143v48.12c0 4.584-3.436571 8.594286-8.019429 8.594286h-30.932571c-4.585143 0-8.020571-4.010286-8.020572-8.594286V58.576z m-225.074286 212.302857h154.578286v108.988572H207.297143v-108.988572z m0 181.822857h154.578286v108.994286H207.297143v-108.994286z m0 181.828572h154.578286v108.988571H207.297143v-108.988571z"
                  fill="#d81e06" p-id="66335"></path>
              </svg>
            </div>
            <div class="center-right">
              <div class="center-right-title">Choose your event</div>
              <p>Visit your favorite sports or music events</p>
            </div>
          </div>
        </div>
      </div>
      <div class="body-bottom">
        <div class="bottom-title">
          <h2>FAQ</h2>
        </div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Is the event date confirmed?" name="1">
            <div>Game dates are confirmed about 2 weeks in advance. But, please keep in mind, game dates can sometimes
              change due to things like television rights, cup matches, or other external factors. The good news is,
              with our ticket guarantee, your tickets will stay valid even if there are changes to the date or time.
              We’ve got your back to ensure you catch all the action!</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Can I pick my seat number?" name="2">
            <div>Game dates are confirmed about 2 weeks in advance. But, please keep in mind, game dates can sometimes
              change due to things like television rights, cup matches, or other external factors. The good news is,
              with our ticket guarantee, your tickets will stay valid even if there are changes to the date or time.
              We’ve got your back to ensure you catch all the action!</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Do you only offer tickets for the home sections?" name="3">
            <div>Game dates are confirmed about 2 weeks in advance. But, please keep in mind, game dates can sometimes
              change due to things like television rights, cup matches, or other external factors. The good news is,
              with our ticket guarantee, your tickets will stay valid even if there are changes to the date or time.
              We’ve got your back to ensure you catch all the action!</div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Do you have more questions?" name="4">
            <div>Game dates are confirmed about 2 weeks in advance. But, please keep in mind, game dates can sometimes
              change due to things like television rights, cup matches, or other external factors. The good news is,
              with our ticket guarantee, your tickets will stay valid even if there are changes to the date or time.
              We’ve got your back to ensure you catch all the action!</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <!-- 页底 -->
    <kt-footer></kt-footer>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { casinoPromoted, ticketDetail } from "@/api/ticket";


export default {
  name: "ticket-detail",
  data() {
    return {
      id: "",
      form: {
        casinoImages: [],
      },
      promoteList: [],
      isMobile: false,
      Championslist: [{ identifying: 11, index: 1 }, { index: 2 }, { identifying: 23, index: 4 },],
      showEmail: false,
      options: [
      ],
      value: '',
      activeNames: [''],
      images: [],// 轮播图片路径数组
      currentIndex: 0, // 当前显示的图片索引
      ticketDetailList: [],
      price: ''
    };
  },
  created() {
    this.getCasinoPromoted();
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // 每5秒切换到下一张图
    this.ticketDetail(this.$route.query.id)
  },
  methods: {
    // 详情接口
    ticketDetail(id) {
      const data = {
        id: id
      }
      ticketDetail(data).then((res) => {
        if (res.code == 200) {
          this.ticketDetailList = res.data
          this.options = res.data.priceTypes
          this.price = res.data.startingPrice
          res.data.detailImages.forEach((itm) => {
            // this.images.push(itm.url)
          })

        }

      })
      this.images.push('https://miniodev.handlersoft.com/public/2024/01/03/wallhaven-48ovmj_1920x1080_20240103114611A001.png')
      this.images.push('https://miniodev.handlersoft.com/public/2024/01/03/v2-05091f488124bb92fa5875b16ad4cd7a_r_20240103114653A002.jpg')
      // this.images.push('https://miniodev.handlersoft.com/public/2024/01/06/Rectangle 735_20240106121114A160.png')
      // this.images.push('https://miniodev.handlersoft.com/public/2024/01/03/wallhaven-48ovmj_1920x1080_20240103114611A001.png')
      // this.images.push('https://miniodev.handlersoft.com/public/2024/01/03/v2-05091f488124bb92fa5875b16ad4cd7a_r_20240103114653A002.jpg')
      // this.images.push('https://miniodev.handlersoft.com/public/2024/01/06/Rectangle 735_20240106121114A160.png')
      // this.images.push('https://miniodev.handlersoft.com/public/2024/01/03/wallhaven-48ovmj_1920x1080_20240103114611A001.png')
      // this.images.push('https://miniodev.handlersoft.com/public/2024/01/03/wallhaven-48ovmj_1920x1080_20240103114611A001.png')
      // this.images.push('https://miniodev.handlersoft.com/public/2024/01/03/wallhaven-48ovmj_1920x1080_20240103114611A001.png')
    },
    // 改变价格
    changePrice(val) {
      this.price = val
    },
    // 切换图片
    picBtn(item) {
      this.images.forEach((itm, idx) => {
        if (item == itm) {
          this.currentIndex = idx
        }
      })

    },
    // 折叠面板
    handleChange(val) {
      console.log(val);
    },
    // 点击显示填写email
    goEmail(idx) {
      this.Championslist.forEach((itm, index) => {
        if (idx == itm.index) {
          this.$set(this.Championslist[index], 'showEmail', true)
        }
      })
    },
    // menu查询
    filterList() {
      this.$router.push({ path: '/menu-app' })
    },
    getCasinoPromoted() {
      casinoPromoted().then((res) => {
        this.promoteList = res.data;
      });
    },

  },
};
</script>
<style lang="scss" scoped>
.line {
  width: 6rem;
  height: 0.01rem;
  background: #dadada;
  margin-top: 0.21rem;
}

.page {
  background-color: #f5f5f5;
}

h2 {
  padding-left: 0;
  text-align: left;
  color: #1A1A1A;
  font-family: Rubik;
  font-size: 0.32rem;
  font-style: normal;
  font-weight: 400;
  line-height: 124%;
  letter-spacing: -1.28px;
  // padding: .5rem 0 0 0.55rem;
}

.view-photo {
  display: flex;
  padding: 0.08rem 0.24rem 0 0.24rem;
  background: #f5f5f5;


  .item-picture {
    height: 4rem;
    display: flex;
    flex: 1;
    flex-shrink: 0;
    margin: 0.08rem;
    position: relative;

    .item-view {
      position: absolute;
      display: block;
      right: 0.16rem;
      bottom: 0.16rem;
      width: 1.72rem;
      height: 0.4rem;
      flex-shrink: 0;
      border-radius: 0.08rem;
      background: #fefefe;
      color: #ff3263;
      font-family: Rubik;
      font-size: 0.16rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.4rem;
      text-align: center;
    }

    .background-title {
      position: absolute;
      top: 1rem;
      left: 1.3rem;
      font-weight: 500;
      font-size: .15rem;
      color: #FEFEFE;

      .background-top {
        display: flex;
        font-size: 0.25rem;
        line-height: 0.6rem;

        .background-img {
          position: absolute;
          left: -0.6rem;
          width: .6rem;
          border-radius: 1rem;
          height: .5rem;
          width: .5rem;

          img {
            border-radius: 50%;

          }

        }
      }

      .background-data {
        display: flex;

        .background-icon {
          height: 0.2rem;
          background: #00BC93;
          color: #F5F5F5;
          font-weight: 400;
          border-radius: 20px;
          line-height: .2rem;
          text-align: center;
          margin-left: 0.2rem;
          padding: 0 0.1rem;
        }
      }

      .background-icon1 {
        display: none;
      }

      .background-data,
      .background-location,
      .background-satdium {
        line-height: .2rem;
      }

      .background-note {
        background: #FEFEFE66;
        margin-top: 0.2rem;
        line-height: .3rem;
        padding: 0 .15rem 0 .15rem;
        border-left: .022rem solid #FF3263;
        border-radius: 0.03rem;
        display: inline-block;
        width: auto;

        i {
          padding-right: .1rem;
        }
      }



    }
  }
}

.head-title {
  padding: .5rem 0 0 0.55rem;
}

.banner {
  height: 4.8rem;
  background: url("~assets/images/banner-1.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  padding-top: 1.2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fefefe;

  .tab {
    display: none;
  }

  h1 {
    font-family: Rubik;
    font-size: 0.56rem;
    text-align: center;
  }
}

.footer {
  background: #1a1a1a;
  padding: 0.64rem 0.32rem;
  display: flex;

  .footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo {
      width: 0.76rem;
    }

    .copyright {
      margin-top: 0.16rem;
      color: rgba(254, 254, 254, 0.6);
      font-size: 0.14rem;
    }

    flex: 1;

    .share a {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      margin-left: 0.1rem;
    }
  }

  .footer-right {
    width: 6rem;
    display: flex;

    .item-list {
      flex: 1;

      .item-hd {
        color: #fefefe;
        font-family: Rubik;
        font-size: 0.2rem;
        margin-bottom: 0.24rem;
      }

      .item {
        margin-top: 0.16rem;
      }

      .item a {
        color: rgba(254, 254, 254, 0.6);
        font-family: Rubik;
        font-size: 0.14rem;
        text-decoration: none;
      }

      .item a:hover {
        text-decoration: underline;
      }
    }
  }
}

.body-content {
  margin: .2rem .55rem .55rem .55rem;

  .body-top {
    display: flex;
    flex-direction: row;
    height: 5.1rem;
    border: 1px solid;
    border-radius: 0.08rem;
    border: 1px solid #dadada;

    .box-left {
      width: 60%;
      position: relative;

      .box-picture {
        height: 100%;

        .imgpic {
          border-bottom-left-radius: 0.08rem;
          border-top-left-radius: 0.08rem;
        }

        .box-bottom {
          position: absolute;
          bottom: 0;
          display: flex;
          width: 100%;
          height: auto;

          .box-picture-small {
            max-width: 43%;
            border-top-right-radius: 0.08rem;
            border-bottom-left-radius: 0.08rem;
            border: 1px solid #dadada;
            background-color: #fff;
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;

            .box-items {
              padding: .15rem;
              padding: 0.1rem 0.1rem 0.1rem 0;
              flex-shrink: 0;
              height: 1rem;
              flex-basis: 1.5rem;
              cursor: pointer;
              position: relative;

              .mask {
                position: absolute;
                background: #00000099;
                top: 0px;
                left: 0px;
                width: 94%;
                height: 81%;
                cursor: pointer;
                opacity: 0;
                margin: 0.1rem 0.1rem 0.1rem 0;
                border-radius: .1rem;
                text-align: center;
                justify-content: center;

                p {
                  position: absolute;
                  top: 40%;
                  left: 10%;
                  color: #FEFEFE;
                }

              }
            }

            img {
              border-radius: .1rem;
            }

            .box-items .mask:hover {
              opacity: 1;
            }
          }

          .box-picture-small::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 4px;
            /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
            border-radius: 2px;
          }

          .box-picture-small::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            width: 4px;
            height: 80px;
            border-radius: 2px;
            background: #dadada;
          }

          .box-picture-small::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            background: rgba(255, 255, 255, 0.05);
            border-radius: 2px;
          }

          .box-picture-small:first-child {
            padding-left: .1rem;
          }

          .box-count {
            // width: 45%;
            position: absolute;
            right: 0;
            width: 2rem;
            top: 1rem;

            p {
              position: absolute;
              bottom: .12rem;
              right: .12rem;
              background-color: #fff;
              border-radius: 0.03rem;
              padding: 0.05rem;
            }
          }
        }


      }
    }

    .box-right {
      width: 40%;
      padding: 0.35rem 0.1rem 0.1rem 0.1rem;
      background-color: #fff;
      border-top-right-radius: 0.08rem;
      border-bottom-right-radius: 0.08rem;

      .line {
        border-bottom: solid 1px rgba(26, 26, 26, 0.16);
        width: 0.4rem;
        margin: 0.03rem 0 0.1rem 0;
      }

      .textcolor {
        color: #1A1A1A99;
      }

      .right-title {
        font-size: 0.22rem;
        font-weight: 500;

      }

      .right-included {
        background: #00BC930A;
        margin: 0.18rem 0 0.2rem 0;
        padding: .2rem;
        color: #00BC93;
        line-height: .25rem;

      }

      .right-money {
        color: #1A1A1A;
        font-weight: 500;
        font-size: 0.18rem;
        display: inline-block;
        line-height: .5rem;
      }

      .button {
        border-radius: 0.08rem;
        background-color: #ff3263;
        color: #fefefe;
        font-size: 0.14rem;
        margin-top: 0.1rem;
        width: 100%;
      }

    }

  }

  .body-center {
    border-top: 1px solid #1A1A1A29;
    border-bottom: 1px solid #1A1A1A29;
    margin-top: .3rem;
    padding-bottom: 0.5rem;

    .center-title {
      color: #1A1A1A;
      font-size: .2rem;
      margin-top: 0.3rem;
      margin-top: .4rem;
    }

    .center-content {
      display: flex;
      justify-content: space-between;
      margin-top: .2rem;

      .center-items {
        display: flex;
        background-color: #fff;
        padding: .3rem;
        border-radius: .06rem;
        position: relative;

        .center-left {
          width: 0.6rem;

        }

        .center-right {
          .center-right-title {
            color: #1A1A1ADE;
            font-size: .18rem;
            font-weight: 400
          }

          p {
            color: #1A1A1A99;
          }
        }
      }

      .center-line {
        position: absolute;
        right: -3.5rem;
        top: 0.5rem;
        width: 3.5rem;
        height: 1px;
        border-bottom: 1px dashed #1A1A1A3D;
      }


    }
  }

  .body-bottom {
    .bottom-title {
      padding: 0.4rem 0 0.2rem 0;
    }
  }

  ::v-deep {
    .el-collapse {
      margin-top: .1rem;
    }

    .el-collapse-item__header {
      border-top-left-radius: .08rem;
      border-top-right-radius: .08rem;
      padding-left: .2rem;
      color: #1A1A1ADE;

    }

    .el-collapse-item__wrap {
      border-bottom-left-radius: .08rem;
      border-top-left-radius: .08rem;
      padding-left: .2rem;

      .el-collapse-item__content {
        color: #1A1A1A99;


      }
    }

    .el-collapse {
      border-radius: .5rem;
    }
  }
}



.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;

  }

  .head-title {
    padding: .5rem 0 0 .2rem;

  }

  .header {
    height: 0.48rem;

  }

  .title-text {
    display: block !important;
  }

  .view-photo {
    margin: 0;
    padding: 0;

    .item-picture {
      margin: 0;
      height: auto;

      .background-title {
        top: 0.7rem;
        left: 0.2rem;
        font-weight: 500;
        font-size: .15rem;
        color: #FEFEFE;

        .background-top {
          display: flex;
          flex-direction: column;
          line-height: 0.4rem;

          .background-img {
            position: absolute;
            left: 0rem;
            top: -0.5rem;
            width: .6rem;
            border-radius: 1rem;
            height: .5rem;
            width: .5rem;

            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;

            }
          }
        }

        .background-icon {
          display: none;
        }

        .background-icon1 {
          display: block;
          background: #00BC93;
          color: #F5F5F5;
          font-weight: 400;
          border-radius: 20px;
          line-height: .2rem;
          text-align: center;
          padding: 0 0.1rem;
          width: 43%;
          margin-top: 8px;

        }

        .background-note {
          padding: 0 0.06rem 0 0.06rem;

          i {
            padding-right: .06rem;
          }
        }
      }

      img {
        width: 3.75rem;
        height: 4rem;
      }
    }
  }

  .center-line {
    display: none;
  }

  .body-center {
    padding-bottom: .3rem;

    .center-title {
      margin-bottom: -.2rem;
    }
  }

  .body-content {
    margin: 0.2rem 0.2rem 0.55rem 0.2rem;

    .body-top {
      display: flex;
      flex-direction: column;
      height: auto;

      .item-title {
        width: 100vw;
        padding: .2rem;
        border-radius: 0.03rem;
        flex-direction: column;
        align-items: flex-start;
        line-height: .23rem;
      }

      .box-left {
        width: 100%;
        position: relative;
        height: 2rem;

        .box-picture {
          height: 100%;

          .imgpic {
            border-top-right-radius: 0.08rem;
            border-bottom-left-radius: 0;

          }

          .box-bottom {
            position: absolute;
            bottom: 0;
            display: flex;
            width: 100%;
            height: auto;

            .box-picture-small {
              display: none;

            }

            .box-count {
              width: 45%;
              position: relative;

              p {
                bottom: .08rem;
                right: -1.78rem;
              }
            }
          }
        }
      }

      .box-right {
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0.08rem;

        .line {
          border-bottom: solid 1px rgba(26, 26, 26, 0.16);
          width: 0.4rem;
          margin: 0.03rem 0 0.1rem 0;
        }

        .textcolor {
          color: #1A1A1A99;
        }

        .right-title {
          font-size: 0.22rem;
          font-weight: 500;

        }

        .right-included {
          background: #00BC930A;
          margin: 0.18rem 0 0.2rem 0;
          padding: .2rem;
          color: #00BC93;
          line-height: .25rem;

        }

        .right-money {
          color: #1A1A1A;
          font-weight: 500;
          font-size: 0.18rem;
          display: inline-block;
          line-height: .5rem;
        }

        .button {
          border-radius: 0.08rem;
          background-color: #ff3263;
          color: #fefefe;
          font-size: 0.14rem;
          margin-top: 0.1rem;
          width: 100%;
        }

      }


    }
  }

  .center-content {
    display: flex;
    flex-direction: column;

    .center-items {
      margin: 0.2rem 0;

      .center-right {
        .center-right-title {
          color: #1A1A1ADE;
          font-size: .16rem;
          font-weight: 400
        }

        p {
          color: #1A1A1A99;
        }
      }
    }

    .center-line-mobile {
      width: 0.2rem;
      position: absolute;
      top: 1.13rem;
      right: 1.7rem;
      width: -0.5rem;
      height: 0.4rem;
      border-right: 1px dashed rgba(26, 26, 26, 0.2392156863);
    }

  }

  .footer {
    padding: 0.64rem 0.2rem 0.24rem;
    flex-direction: column-reverse;

    .footer-left {
      margin-top: 0.4rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      left: 0;
      bottom: 0;

      .share {
        a {
          width: 0.24rem;
          height: 0.24rem;
          margin-left: 0.08rem;
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
