<template>
  <div class="mobile-page">
    <div @click="back()" class="back-mark">
      <i class="el-icon-back" />
    </div>

    <div class="mobile-page-tabs">
      <div class="mobile-page-tab" :class="dateType == 0 ? 'active' : ''" @click="handleDateType(0)">
        Select your dates
      </div>
      <div class="mobile-page-tab" :class="dateType == 1 ? 'active' : ''" @click="handleDateType(1)">
        <span>New:&nbsp;</span> I’m flexible
      </div>
    </div>
    <div v-if="dateType == 0" class="mobile-page-select-date-con">
      <date-picker ref="myDatePicker" v-model="date" type="daterange" @pick="confirmDateRange" popperClass="date-content" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="" end-placeholder="">
      </date-picker>
    </div>
    <div v-if="dateType == 1">
      <div class="travel-type">
        <div class="type-hd">Travel for...</div>
        <div class="item-list">
          <div class="item" :class="travelTypeIndex==0?'active':''" @click="handleTravelType(0,'A short weekend')">
            <div class="item-icon">
              <img src="~assets/images/date-type-1.png" alt="">
            </div>
            <div class="item-text">A short weekend</div>
            <div class="item-desc">Fri-Sun</div>
            <div class="item-radio"></div>
          </div>
          <div class="item" :class="travelTypeIndex==1?'active':''" @click="handleTravelType(1,'A long weekend')">
            <div class="item-icon">
              <img src="~assets/images/date-type-2.png" alt="">
            </div>
            <div class="item-text">a long weekend</div>
            <div class="item-desc">Thu-Mon</div>
            <div class="item-radio"></div>
          </div>
          <div class="item" :class="travelTypeIndex==2?'active':''" @click="handleTravelType(2,'A week')">
            <div class="item-icon">
              <img src="~assets/images/date-type-3.png" alt="">
            </div>
            <div class="item-text">A week</div>
            <div class="item-desc">7 days</div>
            <div class="item-radio"></div>
          </div>
          <div class="item" :class="travelTypeIndex==3?'active':''" @click="handleTravelType(3,'Two weeks')">
            <div class="item-icon">
              <img src="~assets/images/date-type-4.png" alt="">
            </div>
            <div class="item-text">Two weeks</div>
            <div class="item-desc">14 days</div>
            <div class="item-radio"></div>
          </div>
        </div>
      </div>
      <div class="travel-month">
        <div class="type-hd">Travel in...</div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in monthList" :key="index">
            <div class="item" :class="item.checked?'checked':''" @click="handleMonth(index)">
              <div class="item-month">{{ item.month }}</div>
              <div class="item-year">{{ item.year }}</div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>

    <div style="width: 100%;height: 100px;"></div>

    <div class="mobile-page-footer">
      <div class="mobile-page-footer-clear" @click="clear()">Clear selection</div>
      <div class="mobile-page-footer-btn"> <el-button type="primary" class="apply-btn" @click="apply()">Apply</el-button> </div>
    </div>

  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data: () => ({
    dateType: 0,
    dayRageIndex: 0,
    monthIndex: 0,
    monthEN: {
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month0: 'December',
    },
    travelTypeIndex: 2,
    traveTypeText: 'A week',
    monthList: [],
    swiperOption: {
      slidesPerView: 3,
      // 设置分页器
      pagination: {
        el: '.swiper-pagination',
        // 设置点击可切换
        clickable: true
      },
      // 设置前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // 设置自动轮播
      autoplay: false,
      // 设置轮播可循环
      loop: false
    },
    selectedMonth: [],
    date: ''
  }),
  mounted () {
    this.makMonthList();
  },
  computed: {


  },
  methods: {
    clear () {
      if (this.dateType == 0) {
        this.date = '';
        sessionStorage.removeItem("date");
        this.$refs.myDatePicker.minDate = '';
        this.$refs.myDatePicker.maxDate = '';
      } else if (this.dateType == 1) {
        this.selectedMonth = [];
        this.travelTypeIndex = -1;
        this.traveTypeText = '';

        for (let i = 0; i < this.monthList.length; i++) {
          if (this.monthList[i].checked) {
            this.monthList[i].checked = false;
            break;
          }
        }

        sessionStorage.removeItem("selectedMonth");
        sessionStorage.removeItem("travelTypeIndex");
        sessionStorage.removeItem("traveTypeText");
      }

    },
    back () {
      sessionStorage.setItem("showSearch", true);
      this.$router.go(-1);
    },
    apply () {
      if (this.dateType == 0) {
        sessionStorage.setItem("date", this.date);
        sessionStorage.setItem("minDate", this.$refs.myDatePicker.minDate);
        sessionStorage.setItem("maxDate", this.$refs.myDatePicker.maxDate);
      } else if (this.dateType == 1) {
        sessionStorage.setItem("selectedMonth", JSON.stringify(this.selectedMonth));
        sessionStorage.setItem("travelTypeIndex", this.travelTypeIndex);
        sessionStorage.setItem("traveTypeText", this.traveTypeText);
        sessionStorage.setItem("monthIndex", this.monthIndex);
      }


      sessionStorage.setItem("dateType", this.dateType);
      this.back();
    },
    handleDateType (type) {
      this.dateType = type;
    },
    confirmDateRange (e) {
      this.date = `${dayjs(e[0]).format('DD')} ${this.monthEN['month' + dayjs(e[0]).format('MM') % 12].slice(0, 3)} - ${dayjs(e[1]).format('DD')} ${this.monthEN['month' + dayjs(e[1]).format('MM') % 12].slice(0, 3)}`
      this.visible3 = false;
      console.log(this.date);
      console.log(this.dateType);
    },
    handleDateRange (index) {
      this.dayRageIndex = index;
    },
    handleTravelType (index, text) {
      this.travelTypeIndex = index;
      this.traveTypeText = text;
    },
    makMonthList () {
      let list = [];
      let currentYear = dayjs().year();
      let currentMonth = dayjs().month() + 1;
      for (let i = currentMonth; i <= currentMonth + 20; i++) {
        let item = new Object();
        item = {
          year: i > 12 ? currentYear + 1 : currentYear,
          month: this.monthEN['month' + i % 12]
        };
        list.push(item);
      }
      this.monthList = list;
    },
    handleMonth (index) {
      this.monthIndex = index;
      if (this.monthList[index].checked) {
        this.monthList[index].checked = false;
      } else {
        for (let i = 0; i < this.monthList.length; i++) {
          if (this.monthList[i].checked) {
            this.monthList[i].checked = false;
            break;
          }
        }
        this.$set(this.monthList[index], 'checked', true);
      }
      this.calcSelectMonth();
    },
    calcSelectMonth () {
      let selectedMonth = this.monthList.filter((item) => {
        return item.checked
      });
      let monthTextArr = [];
      for (let i = 0; i < selectedMonth.length; i++) {
        monthTextArr.push(selectedMonth[i].month.slice(0, 3))
      }
      this.selectedMonth = monthTextArr;
    },
  }
}
</script>

<style lang="scss" scoped>
.mobile-page {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.back-mark {
  width: 100%;
  height: 24px;
  margin-left: 20px;
  margin-top: 36px;
  font-size: 24px;
}

.mobile-page-y {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}

::v-deep .mobile .el-date-range-picker .el-picker-panel__body {
  margin-left: auto;
  margin-right: auto;
}

::v-deep .el-date-range-picker__content {
  width: 100%;
}

::v-deep .swiper-slide {
  // height: 72px;
  width: 115px!important;
  padding: 0 4.5px;
}
.mobile-page-tabs {
  width: 313px;
  height: 40px;
  margin: 10px auto 0;
  border-radius: 48px;
  border: 1px solid rgba(218, 218, 218, 0.6);
  background: #f5f5f5;
  color: rgba(26, 26, 26, 0.6);
  font-weight: 400;
  display: flex;
  align-items: center;

  .mobile-page-tab {
    flex: 1;
    display: flex;
    height: 100%;
    border-radius: 48px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      color: #3451ff;
    }

    font-family: Rubik;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0em;
  }
  .mobile-page-tab.active {
    border: 1px solid #1a1a1a;
    background: #fefefe;
    color: #1a1a1a;
  }
}
.mobile-page-select-date-con {
  margin: 24px auto 0;
  width: 336px;
  :deep(.el-picker-panel__icon-btn) {
    display: none;
  }
}

.exact-dates {
  // font-family: Rubik;
  display: flex;
  align-items: center;

  font-family: Rubik;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;

  .item {
    color: rgba(26, 26, 26, 0.6);
    font-size: 14px;
    padding: 8px;
    border-radius: 4px;
    height: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    border: 1px solid rgba(218, 218, 218, 0.6);
  }

  .item.active {
    color: #ff3263;
    border: 1px solid #ff3263;
    background: rgba(255, 50, 99, 0.16);
  }
}

.travel-type {
  margin: 0.24rem auto 0;
  font-family: Rubik;
  width: 336px;
  .type-hd {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  .item-list {
    width: 100%;
    height: 336px;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.24rem;

    .item.active {
      border: 1px solid #ff3263;
      background: rgba(255, 50, 99, 0.08);

      .item-text {
        color: #ff3263;
      }

      .item-radio {
        position: relative;
        border-color: #1a1a1a;
      }

      .item-radio::after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: 0.08rem;
        height: 0.08rem;
        background: #ff3263;
        border-radius: 50%;
      }
    }

    .item {
      height: 160px;
      width: 160px;
      float: left;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #dadada;
      cursor: pointer;
      float: left;
      margin-bottom: 16px;
      &:nth-child(2n-1) {
        margin-right: 16px;
      }

      .item-icon {
        height: 56px;
        width: 80px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;

        img {
          object-fit: contain;
        }
      }

      .item-text {
        color: #1a1a1a;
        margin-top: 0.08rem;

        font-family: Rubik;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
      }

      .item-desc {
        margin-top: 0.08rem;

        font-family: Rubik;
        font-size: 14px;
        font-weight: 300;
        line-height: 16px;
        letter-spacing: 0em;
      }

      .item-radio {
        width: 0.16rem;
        height: 0.16rem;
        margin-top: 0.08rem;
        border-radius: 50%;
        border: solid 1px #dadada;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

.travel-month {
  margin: 0.4rem auto 0;
  font-family: Rubik;
  .type-hd {
    width: 336px;
    margin: 0 auto;
    color: #1a1a1a;
    font-size: 0.2rem;
    font-weight: 400;
  }
  .swiper-container {
    margin: 0.16rem auto 0;
    width: 364px;
    :deep(.swiper-wrapper) {
      width: 336px;
      margin: 0 auto;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #dadada;
    // flex: 1;
    width: 106px;
    height: 0.72rem;
    cursor: pointer;

    .item-month {
      color: #1a1a1a;

      font-family: Rubik;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }

    .item-year {
      margin-top: 0.08rem;

      font-family: Rubik;
      font-size: 14px;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0em;
    }
  }

  .item:hover {
    border: 1px solid #ff3263;
    background: rgba(255, 50, 99, 0.08);
    opacity: 0.8;

    .item-month {
      color: #ff3263;
    }
  }

  .item.checked {
    border: 1px solid #ff3263;
    background: rgba(255, 50, 99, 0.08);
    opacity: 1;

    .item-month {
      color: #ff3263;
    }
  }

  .item + .item {
    margin-left: 0.25rem;
  }

  .item-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.16rem;
  }

  .swiper-button-disabled {
    opacity: 0.3;
  }
  .swiper-button-prev {
    width: 32px;
    height: 32px;
    // background: url(~assets/images/icon-swiper-prev.png) no-repeat;
    background-size: 100%;
    &::after {
      display: none;
    }
  }
  .swiper-button-next {
    width: 32px;
    height: 32px;
    // background: url(~assets/images/icon-swiper-next.png) no-repeat;
    background-size: 100%;
    &::after {
      display: none;
    }
  }
}

.mobile-page-footer {
  width: 100%;
  height: 64px;
  background: linear-gradient(0deg, rgba(26, 26, 26, 0.16), rgba(26, 26, 26, 0.16)), linear-gradient(0deg, #f5f5f5, #f5f5f5);
  border-top: 1px solid rgba(26, 26, 26, 0.16);
  position: fixed;
  bottom: 0px;
  z-index: 1000;
}

.mobile-page-footer-clear {
  // width: 98px;
  height: 17px;
  text-decoration: underline dotted;
  border-bottom: 1px solid rgba(26, 26, 26, 1);
  margin-left: 20px;
  margin-top: 24px;
  float: left;
}

.mobile-page-footer-btn {
  width: 100px;
  height: 100%;
  float: right;
  margin-left: auto;
  margin-right: 19px;
}

.apply-btn {
  width: 86px;
  height: 48px;
  border-radius: 8px;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(254, 254, 254, 1);
  background: rgba(255, 50, 99, 1);
  margin-top: 8px;
}
</style>
