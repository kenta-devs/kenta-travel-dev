<template>
  <div class="page">
    <KtHeader></KtHeader>
    <!-- header end-->
    <!-- 照片 -->
    <div class="view-photo">
      <div class="item-picture">
        <img src="~assets/images/ticket.png" alt="">
        <div class="background-title">
          <div>
            <div class="background-icon">
              <p>
                SECURE YOUR TICKETS
              </p>
            </div>
            <p class="background-first" v-if="homePage[0]">{{ homePage[0].dictValue }}</p>
            <p class="background-end" v-if="homePage[1]">{{ homePage[1].dictValue }} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tags-btn">
      <div class="item-tags">
        <div class="tilte-tag" @click="filterList">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2.66669 3.33333H4.66669M9.33335 3.33333H13.3334M9.33335 3.33333C9.33335 2.59695 8.73642 2 8.00002 2C7.26362 2 6.66669 2.59695 6.66669 3.33333C6.66669 4.06971 7.26362 4.66667 8.00002 4.66667C8.73642 4.66667 9.33335 4.06971 9.33335 3.33333ZM6.66669 8H10.6667M10.6667 8C10.6667 8.7364 11.2636 9.33333 12 9.33333C12.7364 9.33333 13.3334 8.7364 13.3334 8C13.3334 7.2636 12.7364 6.66667 12 6.66667C11.2636 6.66667 10.6667 7.2636 10.6667 8ZM2.66669 8H4.66669M7.33335 12.6667H13.3334M4.00002 11.3333C4.7364 11.3333 5.33335 11.9303 5.33335 12.6667C5.33335 13.4031 4.7364 14 4.00002 14C3.26364 14 2.66669 13.4031 2.66669 12.6667C2.66669 11.9303 3.26364 11.3333 4.00002 11.3333Z"
              stroke="#1A1A1A" stroke-opacity="0.6" stroke-linecap="round" />
          </svg>
          &nbsp;Filters
        </div>
      </div>
    </div>
    <div class="body-center">
      <!-- 左边部分 -->
      <div class="box-left">
        <div class="Search-criteria">
          <!-- <div class="line"></div> -->
          <div class="Search-title">
            <i style="width: 0.16rem; height: 0.16rem; margin-right: 0.08rem" class="el-icon-date">
            </i>
            Date
          </div>
          <el-date-picker v-model="startDate" type="daterange" range-separator="-" start-placeholder="start"
            end-placeholder="end" @change="changeDate" value-format="yyyy-MM-dd">
          </el-date-picker>
          <div class="line line-mobile"></div>
          <div class="Search-title">
            <i style="width: 0.16rem; height: 0.16rem; margin-right: 0.08rem" class="el-icon-location-outline">
            </i>
            Location
          </div>
          <div v-for="(item, index) in Locationlist" :key="index" class="checkbox">
            <el-checkbox v-model="item.check" @change="changeLocation(item)">{{ item.name }}</el-checkbox>
          </div>
          <div class="line"></div>
          <div class="Search-title">
            <svg t="1703583643581" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="72828" width="20" height="20" style="margin-right: 0.08rem;">
              <path
                d="M512 42.666667C284.458667 42.666667 42.666667 117.418667 42.666667 256c0 31.658667 84.650667 511.573333 85.333333 516.010667 3.584 89.898667 128 139.093333 256 157.525333V938.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h170.666666a42.666667 42.666667 0 0 0 42.666667-42.666666v-9.130667c128-18.432 252.373333-67.626667 256-157.525333C896.64 767.701333 981.333333 260.266667 981.333333 256c0-138.581333-241.792-213.333333-469.333333-213.333333z m42.666667 853.333333h-85.333334v-85.333333a42.666667 42.666667 0 0 1 85.333334 0z m256.597333-134.997333A42.666667 42.666667 0 0 0 810.666667 768c0 15.274667-51.669333 55.936-170.666667 75.178667V810.666667a128 128 0 0 0-256 0v32.512c-118.997333-19.242667-170.666667-59.733333-170.666667-75.178667a38.741333 38.741333 0 0 0-0.597333-6.997333l-29.866667-179.2A859.221333 859.221333 0 0 0 512 640a862.506667 862.506667 0 0 0 329.002667-58.282667z m47.445333-285.866667C791.253333 523.605333 657.92 554.666667 512 554.666667c-143.616 0-275.925333-29.866667-345.301333-77.781334-0.384-0.256-0.810667-0.256-1.194667-0.469333L152.32 396.8A846.762667 846.762667 0 0 0 512 469.333333a847.232 847.232 0 0 0 359.722667-72.533333z m-603.434666-128A593.92 593.92 0 0 1 512 298.666667a593.92 593.92 0 0 1 256.725333 48.554666A831.146667 831.146667 0 0 1 512 384a834.090667 834.090667 0 0 1-256.725333-36.778667z m602.026666-41.472C797.184 249.514667 663.936 213.333333 512 213.333333s-285.098667 36.138667-345.301333 92.416C151.253333 295.04 128 274.773333 128 256c0-52.181333 149.589333-128 384-128s384 75.818667 384 128c0 18.858667-23.210667 39.04-38.698667 49.749333z"
                p-id="72829" fill="#2c2c2c"></path>
            </svg>
            Stadium
          </div>
          <div v-for="item in Stadiumlist" :key="item.id" class="checkbox">
            <el-checkbox v-model="item.check" @change="changeStadium(item)">{{ item.name }}</el-checkbox>
          </div>
        </div>
      </div>
      <!-- 右边的部分 -->
      <div class="box-right">
        <div class="view-article">
          <div class="item-ticket">
            <div class="box-bottom">
              <div class="item" v-for="(item, index) in recommendChampionslist" :key="item.ticketId">
                <div class="left-content">
                  <div class="discount" v-if="item.isDiscount == 1">
                    <p class="money">{{ item.discount }}</p>
                    <p style="font-size: .12rem;">DISCOUNT</p>
                    <p class="sanjiao1"></p>
                    <p class="sanjiao2"></p>
                  </div>
                  <div class="logo-img">
                    <img :src="item.thumbnailUrl" alt="" />
                  </div>
                  <div class="title-text">
                    <div class="center-title">{{ item.name }}</div>
                    <div class="center-date">{{ item.eventDate }}</div>
                    <div class="center-bottom" @click="recommendExpandCollapse(item, index)">
                      <span v-if="!item.showBtn">
                        Less Details<i class="el-icon-arrow-up"></i>
                      </span>
                      <span v-else>
                        More Details<i class="el-icon-arrow-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="center" v-if="!item.showBtn">
                  <div class="center-content">
                    <div class="center-title">{{ item.name }}</div>
                    <div class="center-date">{{ item.eventDate }}</div>
                    <div class="center-line"></div>
                    <div class="center-footer">
                      <p v-if="item.eventCategory"> {{ item.eventCategory.title }} | {{ item.eventCategory.description }}
                      </p>
                      <p>{{ item.location }}</p>
                      <p>{{ item.venue }}</p>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="right-content" v-if="item.totalTickets && !item.showEmail">
                    <p v-if="!item.showBtn"><i class="el-icon-circle-check"></i>{{ item.uvp1 }}</p>
                    <p v-if="!item.showBtn"><i class="el-icon-circle-check"></i>{{ item.uvp2 }}</p>
                    <div class="price-count">
                      <p>Form</p>
                      <p class="discount-price" v-if="item.isDiscount == 1">
                        <span class="discount-price-line"></span>
                        <span>€{{ item.discount_price }}</span>
                      </p>
                      <span class="starting-price">€{{ item.startingPrice }}</span>
                    </div>
                    <el-button @click="goDetails(item.ticketId)" class="button">More Info
                    </el-button>
                  </div>
                  <div class="right-content-no" v-if="!item.totalTickets && !item.showEmail">
                    <div class="right-content-no-text" v-if="!item.showBtn">
                      <p>
                        <img src="../assets/images/events-calendar.png" style="width: 25px;" />
                      </p>
                      <p>Tickets are sold out</p>
                    </div>
                    <el-button @click="recommendgoEmail(item.ticketId)" class="button">Notify me when available
                    </el-button>
                  </div>
                  <div class="right-content-email" v-if="item.showEmail">
                    <div class="right-content-email">
                      <p>Get notified to your email</p>
                    </div>
                    <div class="inp-box">
                      <i class="icon icon-email">
                        <img src="~assets/images/email.svg" alt="">
                      </i>
                      <el-input v-model="item.email" placeholder="Email Address"></el-input>
                    </div>
                    <el-button @click="witeEmail()" class="button">Notify me
                    </el-button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-title">
            <p><i class="el-icon-circle-check"></i>Event Guarantee</p>
            <p><i class="el-icon-circle-check"></i>Official E-tickets</p>
            <p><i class="el-icon-circle-check"></i>Seats next to each other</p>
          </div>
          <div class="item-ticket">
            <div class="box-bottom">
              <div class="item" v-for="(item, index) in Championslist" :key="item.ticketId">
                <div class="left-content">
                  <div class="discount" v-if="item.isDiscount == 1">
                    <p class="money">{{ item.discount }}</p>
                    <p style="font-size: .12rem;">DISCOUNT</p>
                    <p class="sanjiao1"></p>
                    <p class="sanjiao2"></p>
                  </div>
                  <div class="logo-img">
                    <img :src="item.thumbnailUrl" alt="" />
                  </div>
                  <div class="title-text">
                    <div class="center-title">{{ item.name }}</div>
                    <div class="center-date">{{ item.eventDate }}</div>
                    <div class="center-bottom" @click="ExpandCollapse(item, index)">
                      <span v-if="!item.showBtn">
                        Less Details<i class="el-icon-arrow-up"></i>
                      </span>
                      <span v-else>
                        More Details<i class="el-icon-arrow-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="center" v-if="!item.showBtn">
                  <div class="center-content">
                    <div class="center-title">{{ item.name }}</div>
                    <div class="center-date">{{ item.eventDate }}</div>
                    <div class="center-line"></div>
                    <div class="center-footer">
                      <p v-if="item.eventCategory"> {{ item.eventCategory.title }} | {{ item.eventCategory.description }}
                      </p>
                      <p>{{ item.location }}</p>
                      <p>{{ item.venue }}</p>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="right-content" v-if="item.totalTickets && !item.showEmail">
                    <p v-if="!item.showBtn"><i class="el-icon-circle-check"></i>{{ item.uvp1 }}</p>
                    <p v-if="!item.showBtn"><i class="el-icon-circle-check"></i>{{ item.uvp2 }}</p>
                    <div class="price-count">
                      <p>Form</p>
                      <p class="discount-price" v-if="item.isDiscount == 1">
                        <span class="discount-price-line"></span>
                        <span>€{{ item.discount_price }}</span>
                      </p>
                      <span class="starting-price">€{{ item.startingPrice }}</span>
                    </div>
                    <el-button @click="goDetails(item.ticketId)" class="button">More Info
                    </el-button>
                  </div>
                  <div class="right-content-no" v-if="!item.totalTickets && !item.showEmail">
                    <div class="right-content-no-text" v-if="!item.showBtn">
                      <p>
                        <img src="../assets/images/events-calendar.png" style="width: 25px;" />
                      </p>
                      <p>Tickets are sold out</p>
                    </div>
                    <el-button @click="goEmail(item.ticketId)" class="button">Notify me when available
                    </el-button>
                  </div>
                  <div class="right-content-email" v-if="item.showEmail">
                    <div class="right-content-email">
                      <p>Get notified to your email</p>
                    </div>
                    <div class="inp-box">
                      <i class="icon icon-email">
                        <img src="~assets/images/email.svg" alt="">
                      </i>
                      <el-input v-model="item.email" placeholder="Email Address"></el-input>
                    </div>
                    <el-button @click="witeEmail()" class="button">Notify me
                    </el-button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页底 -->
    <kt-footer></kt-footer>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { ticketList, getLoactions, getStadium } from "@/api/ticket";
import { dictList } from '@/api/index';

export default {
  name: "ticket",
  data() {
    return {
      form: {
        beginEventDate: '',
        endEventDate: '',
        location: [],
        Stadium: []
      },
      Locationlist: [],
      Stadiumlist: [],
      Championslist: [],//列表
      recommendChampionslist: [],//推荐列表
      showEmail: false,
      homePage: [],
      startDate: [],
      arrTempLocation: [],//位置
      arrTempStadium: []//体育馆
    };
  },
  created() {
    this.init()
  },
  mounted() {
    this.Championslist.forEach((itm) => {
      itm['email'] = ''
      itm['showBtn'] = false
    })
    this.recommendChampionslist.forEach((itm) => {
      itm['email'] = ''
      itm['showBtn'] = false
    })
    if (this.$route.query.form) {
      this.ticketList(this.$route.query.form)
    } else {
      this.ticketList()
    }
    this.getLoactions()
    this.getStadium()
    // 推荐列表
    this.recommendticketList()
  },
  methods: {
    init() {
      dictList({ dictType: 'enenttickets' }).then((res) => {
        this.homePage = res.data;
        res.code == 200 ? this.homePage = res.data : ''
      })
    },
    // 选择时间
    changeDate() {
      if (this.startDate && this.startDate.length) {
        this.form.beginEventDate = this.startDate[0]
        this.form.endEventDate = this.startDate[1]

      } else {
        this.form.beginEventDate = ''
        this.form.endEventDate = ''
      }
      this.ticketList(this.form)
    },
    // 时间转换
    dateConvert(secondPart, type) {
      var newStr = ''
      var newStr1 = ''
      if (secondPart == '01') {
        newStr = this.startDate[0].replace("01", "JANUARY");
        newStr1 = this.startDate[1].replace("01", "JANUARY");
      } else if (secondPart == '02') {
        newStr = this.startDate[0].replace("02", "FEBRUARY");
        newStr1 = this.startDate[1].replace("02", "JANUARY");
      } else if (secondPart == '03') {
        newStr = this.startDate[0].replace("03", "MARCK");
        newStr1 = this.startDate[1].replace("03", "MARCK");
      } else if (secondPart == '04') {
        newStr = this.startDate[0].replace("04", "APRIL");
        newStr1 = this.startDate[1].replace("04", "APRIL");
      } else if (secondPart == '05') {
        newStr = this.startDate[0].replace("05", "MAY");
        newStr1 = this.startDate[1].replace("05", "MAY");
      } else if (secondPart == '06') {
        newStr = this.startDate[0].replace("06", "JUNE");
        newStr1 = this.startDate[1].replace("06", "JUNE");
      } else if (secondPart == '07') {
        newStr = this.startDate[0].replace("07", "JULY");
        newStr1 = this.startDate[1].replace("07", "JULY");
      } else if (secondPart == '08') {
        newStr = this.startDate[0].replace("08", "AUGUST");
        newStr1 = this.startDate[1].replace("08", "AUGUST");
      } else if (secondPart == '09') {
        newStr = this.startDate[0].replace("09", "SEPTEMBER");
        newStr1 = this.startDate[1].replace("09", "SEPTEMBER");
      } else if (secondPart == '10') {
        newStr = this.startDate[0].replace("10", "OCTOBER");
        newStr1 = this.startDate[1].replace("10", "OCTOBER");
      } else if (secondPart == '11') {
        newStr = this.startDate[0].replace("11", "NOVEMBER");
        newStr1 = this.startDate[1].replace("11", "NOVEMBER");
      } else if (secondPart == '12') {
        newStr = this.startDate[0].replace("12", "DECEMBER");
        newStr1 = this.startDate[1].replace("12", "DECEMBER");
      }
      var replaceStr = '-';//要替换的字符串
      let res = newStr.replace(new RegExp(replaceStr, 'gm'), '  ')//逗号替换成空
      let res1 = newStr1.replace(new RegExp(replaceStr, 'gm'), '  ')//逗号替换成空
      return type == 0 ? res : res1
    },
    // 选择位置
    changeLocation(item) {
      if (item.check == true) {
        this.arrTempLocation.push(item.name)
      } else {
        this.arrTempLocation.forEach((itm, idx) => {
          if (itm == item.name) {
            this.arrTempLocation.splice(idx, 1)
          }
        })
      }
      this.form.location = this.arrTempLocation
      this.ticketList(this.form)
    },
    // 选择体育馆
    changeStadium(item) {
      if (item.check == true) {
        this.arrTempStadium.push(item.name)
      } else {
        this.arrTempStadium.forEach((itm, idx) => {
          if (itm == item.name) {
            this.arrTempStadium.splice(idx, 1)
          }
        })
      }
      this.form.stadium = this.arrTempStadium
      this.ticketList(this.form)

    },
    // 位置
    getLoactions() {
      getLoactions().then((res) => {
        if (res.code == 200) {
          res.data.forEach((item) => {
            this.Locationlist.push({ name: item, check: false })
          })
        }
      })
    },
    // 体育场
    getStadium() {
      getStadium().then((res) => {
        if (res.code == 200) {
          res.data.forEach((item) => {
            this.Stadiumlist.push({ name: item, check: false })
          })
        }
      })
    },
    // 列表接口
    ticketList(data) {
      const params = {
        beginEventDate: data && data.beginEventDate ? data.beginEventDate : '',
        endEventDate: data && data.endEventDate ? data.endEventDate : '',
        locations: data && data.location ? data.location : [],
        stadiums: data && data.stadium ? data.stadium : []
      }
      ticketList(params).then((res) => {
        if (res.code == 200) {
          this.Championslist = res.data
        }
      })
    },
    // 推荐列表
    recommendticketList() {
      const params = {
        // beginEventDate: '',
        // endEventDate: '',
        locations: [],
        stadiums: [],
        is_featured: ''
      }
      ticketList(params).then((res) => {
        res.code == 200 ? this.recommendChampionslist = res.data : []
      })
    },
    // 点击显示填写email
    goEmail(id) {
      this.Championslist.forEach((itm, index) => {
        if (id == itm.ticketId) {
          this.$set(this.Championslist[index], 'showEmail', true)
        }
      })
    },
    // 推荐点击显示填写email
    recommendgoEmail(id) {
      this.recommendChampionslist.forEach((itm, index) => {
        if (id == itm.ticketId) {
          this.$set(this.recommendChampionslist[index], 'showEmail', true)
        }
      })
    },
    // menu查询
    filterList() {
      this.$router.push({ path: '/menu-app' })
    },
    // 移动端展开收起按钮
    ExpandCollapse(item, index) {
      this.$set(this.Championslist[index], 'showBtn', !item.showBtn)
    },
    // 推荐移动端展开收起按钮
    recommendExpandCollapse(item, index) {
      this.$set(this.recommendChampionslist[index], 'showBtn', !item.showBtn)
    },
    goDetails(id) {
      this.$router.push({ path: '/ticket-detail', query: { id } })
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  background: #f5f5f5;
}

.line {
  //width: 6rem;
  height: 0.01rem;
  background: #dadada;
  margin-top: 0.2rem;
}

.select-wrap {
  transform: translate(-0.4rem, 0.1rem);
  width: 9.12rem;
  padding: 0;
}

.tags-btn {
  display: flex;
  justify-content: flex-end;
  background: #f5f5f7;

}

.item-tags {
  display: none;
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
      /* 100% */
      text-align: center;
    }

    .background-title {
      height: 100%;
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      // /* 换行 */
      flex-direction: column;
      // /* 设置主轴方向：垂直，默认为row（水平）。重点 */
      text-align: center;

      .background-icon {
        display: flex;
        justify-content: center;
        // /* 水平居中对齐 */
        align-items: center;

        /* 垂直居中对齐 */
        P {
          width: 1.63rem;
          height: 0.2rem;
          background: #3451FF;
          color: #F5F5F5;
          border-radius: 20px;
          font-size: .13rem;
          line-height: .2rem;
        }
      }

      .background-first {
        font-weight: 500;
        color: #FEFEFE;
        font-size: .33rem;
        line-height: .6rem;
      }

      .background-end {
        font-size: .17rem;
        color: #FEFEFE;

      }
    }

    .background-title :first-child {
      width: 5rem;
    }
  }
}

.body-center {
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  .box-left {
    padding: 0 0 0 0.55rem;
    background-color: #f5f5f5;
    // flex: 1;
    width: 20%;

    .Search-criteria {
      margin: 0.24rem 0 0 0;

      .Search-title {
        display: flex;
        align-items: center;
        flex: 1;
        border-radius: 8px;
        height: 0.48rem;
        background: #f5f5f7;
        color: #1a1a1a;
        font-size: 0.16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0.16rem;
      }

      ::v-deep {

        .el-range-editor,
        .el-input__inner {
          width: 2.34rem;
        }

        .checkbox {
          .el-checkbox {
            font-weight: 500;
            font-size: 14px;
            position: relative;
            cursor: pointer;
            display: inline-block;
            white-space: nowrap;
            user-select: none;
            margin-right: 30px;
          }

          .el-checkbox__input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
          }

          .el-checkbox {
            font-weight: 500;
            font-size: 14px;
            position: relative;
            cursor: pointer;
            display: inline-block;
            white-space: nowrap;
            user-select: none;
            margin-right: 30px;
          }

          .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: #409eff;
            border-color: #409eff;
          }



          .el-checkbox__inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
              background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
          }

          .el-checkbox__input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
          }

          .el-checkbox {
            font-weight: 500;
            font-size: 14px;
            position: relative;
            cursor: pointer;
            display: inline-block;
            white-space: nowrap;
            user-select: none;
            margin-right: 30px;
          }

          .el-checkbox__input.is-checked .el-checkbox__inner:after {
            transform: rotate(45deg) scaleY(1);
            background: none;
            margin-left: 0;
            margin-top: 0;
            border-radius: 0;

          }

          .el-checkbox__inner:after {
            box-sizing: content-box;
            content: "";
            border: 1px solid #fff;
            border-left: 0;
            border-top: 0;
            height: 7px;
            left: 4px;
            position: absolute;
            top: 1px;
            transform: rotate(45deg) scaleY(0);
            width: 3px;
            transition: transform 0.15s ease-in 0.05s;
            transform-origin: center;
          }
        }
      }
    }
  }

  .box-right {
    padding: 0 0.36rem 0 0;
    background-color: #f5f5f5;
    width: 80%;

    .view-article {
      margin: 0 0.32rem 0 0.32rem;

      .item-ticket {
        margin: 0.16rem 0 0.24rem 0;

        .box-bottom {
          overflow: hidden;
          margin-top: 0.16rem;

          .item {
            margin-top: 0.08rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 0.08rem;
            border: 1px solid #dadada;
            align-items: normal;

            .left-content {
              position: relative;
              // width: 100%;
              display: flex;
              /* 居中 */
              justify-content: center;
              /* 间距在弹性盒子(子级)之间 */
              justify-content: space-between;
              /* 所有地方的间距都相等 */
              justify-content: space-evenly;
              /* 间距加在子级的两侧 */
              /* 视觉效果: 子级之间的距离是父级两头距离的2倍 */
              justify-content: space-around;
              margin: auto;

              .discount {
                width: 0.73rem;
                position: absolute;
                left: -0.6rem;
                background: #3451FF;
                top: -0.25rem;
                color: #FEFEFE;
                padding: .15rem .02rem .02rem .02rem;
                padding-top: 0.15rem;
                text-align: center;

                .money {
                  font-weight: 500;
                  height: .2rem;
                  font-size: .2rem;
                }

                .sanjiao1 {
                  width: 0;
                  height: 0;
                  border-right: 0.71rem solid transparent;
                  border-top: 0.3rem solid #3451FF;
                  position: absolute;
                  right: 2px;
                }

                .sanjiao2 {
                  width: 0;
                  height: 0;
                  border-left: 0.71rem solid transparent;
                  border-top: 0.32rem solid #3451FF;
                  position: absolute;
                }
              }

              .logo-img {
                height: 1.2rem;
                width: 1.2rem;

                img {
                  border-radius: 50%;

                }
              }
            }

            .center {
              background: #fff;
              width: 50%;

              .center-content {
                padding: 0.16rem;

                .center-title {
                  color: rgba(26, 26, 26, 0.87);
                  font-family: Rubik;
                  font-size: 0.2rem;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 0.24rem;
                }

                .center-line {
                  border-bottom: solid 1px rgba(26, 26, 26, 0.16);
                  width: 0.4rem;
                  margin: 0.03rem 0 0.1rem 0;
                }

                .center-date,
                .center-footer {
                  color: rgba(26, 26, 26, 0.6);
                  font-family: Rubik;
                  font-size: 0.14rem;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 0.2rem;
                }
              }
            }

            .right {
              width: 25%;
              align-self: stretch;
              background-color: #fff;
              border-left: 1px solid rgba(26, 26, 26, 0.16);
              border-top-right-radius: 8px;
              border-bottom-right-radius: 8px;

              .right-content,
              .right-content-no,
              .right-content-email {
                padding: 0.16rem;
              }

              .right-content {
                .price-count {
                  padding-top: 0.25rem;
                  text-align: end;

                  p {
                    display: inline-block;
                  }

                  .discount-price {
                    position: relative;

                    .discount-price-line {
                      width: 100%;
                      display: block;
                      position: absolute;
                      border-top: 1px solid rgba(26, 26, 26, 0.6);
                      top: .1rem;
                    }
                  }

                  .starting-price {
                    margin: 0 0.01rem 0 0.01rem;
                    color: rgba(26, 26, 26, 0.87);
                    font-family: Rubik;
                    font-size: 0.18rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 0.24rem;
                  }
                }

                p {
                  color: rgba(26, 26, 26, 0.6);
                  font-family: Rubik;
                  font-size: 0.14rem;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 0.2rem;

                  i {
                    padding-right: .1rem;
                  }
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

              .right-content-no {
                .right-content-no-text {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-wrap: wrap;
                  flex-direction: column;
                  text-align: center;
                }

                p {
                  color: rgba(26, 26, 26, 0.6);
                  font-family: Rubik;
                  font-size: 0.14rem;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 0.2rem;

                  i {
                    padding-right: .1rem;
                  }
                }

                button {
                  border-radius: 0.08rem;
                  background-color: #fff;
                  font-size: 0.14rem;
                  margin-top: 0.22rem;
                  width: 100%;
                }
              }

              .right-content-email {
                p {
                  color: rgba(26, 26, 26, 0.6);
                  font-family: Rubik;
                  font-size: 0.14rem;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 0.2rem;

                  i {
                    padding-right: .1rem;
                  }
                }

                .inp-box {
                  width: 100%;
                  position: relative;
                  border: .01rem solid rgba(218, 218, 218, 0.60);
                  background: #FEFEFE;
                  border-radius: .08rem;

                  .icon {
                    position: absolute;
                    left: .16rem;
                    top: 50%;
                    z-index: 1;
                    margin-top: -.08rem;
                    width: .16rem;
                    height: .16rem;
                    display: block;

                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }

                  ::v-deep .el-input__inner {
                    height: .36rem;
                    line-height: .4rem;
                    border-radius: .08rem;
                    border: none;
                    text-align: center;
                  }

                  ::v-deep .el-input__inner::placeholder {
                    color: rgba(26, 26, 26, 0.60);
                    font-size: .16rem;
                  }
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
        }
      }

      .line-mobile {
        display: none;
      }
    }

    .item-title {
      background: #00BC9314;
      display: flex;
      padding: 0.15rem 0.5rem;
      border-radius: 0.03rem;
      justify-content: space-between;
      align-items: center;

      p {
        color: #00BC93;

        i {
          margin-right: 8px;
        }
      }
    }

    .title {
      color: #1a1a1a;
      text-align: center;
      font-size: 0.32rem;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: -1.28px;
      color: #1a1a1a;
    }

    .title-text {
      display: none;
    }
  }
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

.mobile {
  .item-tags {
    display: block;
    margin-right: .1rem;
  }

  .item-tags {
    .tilte-tag {
      margin-top: 0.25rem;
      width: .9rem;
      height: .32rem;
      flex-shrink: 0;
      display: flex;
      flex: 1;
      padding-left: .16rem;
      align-items: center;
      background: #FEFEFE;
      border-radius: 100px;
      border: 1px solid rgba(218, 218, 218, 0.60);
      color: rgba(26, 26, 26, 0.60);

      text-align: center;
      font-family: Rubik;
      font-size: .14rem;
      font-style: normal;
      font-weight: 400;
      line-height: .16rem;
    }
  }

  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .header {
    height: 0.48rem;

    .logo {
      height: 0.24rem;
    }

    .header-right {
      display: none;
    }

    .nav-bar {
      border-left: none;
      width: 0.56rem;
      height: 0.48rem;

      .icon-bar {
        width: 0.2rem;
      }
    }
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

      img {
        width: 3.75rem;
        height: 3.5rem;
      }

      .background-title {
        .background-first {
          color: #FEFEFE;
          font-size: .25rem;
          line-height: .3rem;
          padding: 0 .1rem;
        }

        .background-icon {
          p {
            padding: 0 .1rem;
          }
        }

        .background-end {
          padding: 0 0.5rem;

        }
      }

      .background-title :first-child {
        width: auto;
      }
    }
  }

  .body-center {
    display: flex;
    flex-direction: column;

    .line {
      width: 3.36rem;
    }

    .view-article {
      padding: 0 0.1rem;
    }

    .item-title {
      width: 100vw;
      padding: .2rem;
      border-radius: 0.03rem;
      flex-direction: column;
      align-items: flex-start;
      line-height: .23rem;
    }



    .box-right {
      width: 100%;

      .view-article {
        margin: 0;
        border: 0;

        .item-ticket {
          width: 3.55rem;
          height: auto;

          .box-bottom {
            overflow: hidden;
            margin-top: 0.16rem;

            .item {
              flex-direction: column;
              align-items: center;
              margin-top: 0.08rem;
              border-radius: 0.08rem;
              border: 1px solid #dadada;
              align-items: normal;

              .left-content {
                width: 100%;
                display: flex;
                /* 居中 */
                justify-content: center;
                /* 间距在弹性盒子(子级)之间 */
                justify-content: space-between;
                /* 所有地方的间距都相等 */
                justify-content: space-evenly;
                /* 间距加在子级的两侧 */
                /* 视觉效果: 子级之间的距离是父级两头距离的2倍 */
                justify-content: space-around;
                margin: auto;
                padding: 0.2rem 0;

                .discount {
                  width: 0.73rem;
                  position: absolute;
                  left: 0.001rem;
                  background: #3451FF;
                  top: 0;
                  color: #FEFEFE;
                  padding: .15rem .02rem .02rem .02rem;
                  padding-top: 0.15rem;
                  text-align: center;

                }

                .logo-img {
                  height: 1rem;
                  width: 1rem;

                  img {
                    width: auto;
                    border-radius: 50%;

                  }

                }

                .title-text {
                  width: 53%;
                  color: rgba(26, 26, 26, 0.87);
                  font-family: Rubik;
                  font-size: 0.2rem;
                  font-style: normal;
                  font-weight: 500;
                  word-wrap: break-word;

                  .center-date,
                  .center-bottom {
                    color: rgba(26, 26, 26, 0.6);
                    font-family: Rubik;
                    font-size: 0.14rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 0.16rem;
                  }

                  .center-bottom {
                    text-align: end;
                    padding-top: .46rem;

                    i {
                      margin-left: .12rem;
                    }
                  }

                }


              }

              .center {
                background: #fff;

                width: 100%;

                .center-content {
                  padding: 0.16rem;

                  .center-title {
                    display: none;
                  }

                  .center-line {
                    border-bottom: solid 1px rgba(26, 26, 26, 0.16);
                    width: 0.4rem;
                    margin: 0.03rem 0 0.1rem 0;
                  }

                  .center-date {
                    display: none;
                  }

                  .center-footer {
                    color: rgba(26, 26, 26, 0.6);
                    font-family: Rubik;
                    font-size: 0.14rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 0.16rem;
                  }
                }
              }

              .right {
                width: 100%;
                align-self: stretch;
                background-color: #fff;
                border-left: 1px solid rgba(26, 26, 26, 0.16);
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;

                .right-content {
                  padding: 0.16rem;

                  p {
                    color: rgba(26, 26, 26, 0.6);
                    font-family: Rubik;
                    font-size: 0.14rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 0.2rem;

                    i {
                      padding-right: .1rem;
                    }

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
          }
        }
      }
    }

    .box-left {
      padding: 0;
      display: none;

      .Search-criteria {
        margin: 0.24rem 0 0 0;

        .Search-title {
          display: flex;
          align-items: center;
          flex: 1;
          border-radius: 8px;
          height: 0.48rem;
          background: #f5f5f7;
          color: #1a1a1a;
          font-size: 0.16rem;
          font-style: normal;
          font-weight: 400;
          line-height: 0.16rem;
          /* 100% */
        }

        ::v-deep {
          .checkbox {
            .el-checkbox {
              font-weight: 500;
              font-size: 14px;
              position: relative;
              cursor: pointer;
              display: inline-block;
              white-space: nowrap;
              user-select: none;
              margin-right: 30px;
            }

            .el-checkbox__input {
              white-space: nowrap;
              cursor: pointer;
              outline: none;
              display: inline-block;
              line-height: 1;
              position: relative;
              vertical-align: middle;
            }

            .el-checkbox {
              font-weight: 500;
              font-size: 14px;
              position: relative;
              cursor: pointer;
              display: inline-block;
              white-space: nowrap;
              user-select: none;
              margin-right: 30px;
            }

            .el-checkbox__input.is-checked .el-checkbox__inner {
              background-color: #409eff;
              border-color: #409eff;
            }

            .el-checkbox__inner {
              display: inline-block;
              position: relative;
              border: 1px solid #dcdfe6;
              border-radius: 2px;
              box-sizing: border-box;
              width: 14px;
              height: 14px;
              background-color: #fff;
              z-index: 1;
              transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
                background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
            }

            .el-checkbox__input {
              white-space: nowrap;
              cursor: pointer;
              outline: none;
              display: inline-block;
              line-height: 1;
              position: relative;
              vertical-align: middle;
            }

            .el-checkbox {
              font-weight: 500;
              font-size: 14px;
              position: relative;
              cursor: pointer;
              display: inline-block;
              white-space: nowrap;
              user-select: none;
              margin-right: 30px;
            }

            .el-checkbox__input.is-checked .el-checkbox__inner:after {
              transform: rotate(45deg) scaleY(1);
            }

            .el-checkbox__inner:after {
              box-sizing: content-box;
              content: "";
              border: 1px solid #fff;
              border-left: 0;
              border-top: 0;
              height: 7px;
              left: 4px;
              position: absolute;
              top: 1px;
              transform: rotate(45deg) scaleY(0);
              width: 3px;
              transition: transform 0.15s ease-in 0.05s;
              transform-origin: center;
            }
          }
        }
      }
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
