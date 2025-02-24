<template>
  <div class="page">
    <!-- header start-->
    <!-- <KtHeader></KtHeader> -->
    <!-- 返回 -->
    <div class="backbtn">
      <div @click="backbtn">
        <i class="el-icon-back"></i>
      </div>
    </div>
    <div class="body-center">
      <div class="box-left">
        <div class="Search-criteria">
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
            <!-- <i style="width: 0.16rem; height: 0.16rem; margin-right: 0.08rem" class="el-icon-coin">
            </i> -->
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
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { getLoactions, getStadium } from "@/api/ticket";

export default {
  name: "menu-app",
  data() {
    return {
      id: "",
      form: {
        beginEventDate: '',
        endEventDate: '',
        location: '',
        Stadium: ''
      },
      promoteList: [],
      isMobile: false,
      pickerOptionsStart: {
        disabledDate(time) {
          // 禁止选择今天以前的日期
          return time.getTime() < Date.now() - 8.64e7; // 8.64e7毫秒是一天的时间
        },
      },
      Locationlist: [],
      Stadiumlist: [],
      startDate: [],
      arrTempLocation: [],//位置
      arrTempStadium: []//体育馆
    };
  },
  created() { },
  mounted() {
    if (!window.isMobile) {
      // this.initMap();
    }
    this.isMobile = window.isMobile;
    this.getLoactions()
    this.getStadium()
  },
  methods: {
    // 返回按钮
    backbtn() {
      this.$router.push({ path: '/ticket', query: { form: this.form } })
    },
    // 选择时间
    changeDate() {
      console.log(this.startDate)
      debugger
      if (this.startDate && this.startDate.length) {
        // 通过split()函数将字符串按"-"进行分隔为数组
        // var arr = this.startDate[0].split("-");
        // var arr1 = this.startDate[1].split("-");
        // // 获取第三个元素（不包含"-")
        // var secondPart = arr[1];
        // var secondPart1 = arr[1];
        // let res = this.dateConvert(secondPart, 0)
        // let res1 = this.dateConvert(secondPart1, 1)
        // this.form.beginEventDate = res
        // this.form.endEventDate = res1
        this.form.beginEventDate = this.startDate[0]
        this.form.endEventDate = this.startDate[1]

      } else {
        this.form.beginEventDate = ''
        this.form.endEventDate = ''
      }
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
    // menu查询
    filterList() {
      this.$router.push({ path: '/menu-app' })
    },
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoia2VudGF2aXAiLCJhIjoiY2xwYjdvaHM2MGh2eTJxcDk0MmI3d2Q5ZCJ9.luCk1ALDEYK9AR9Ik9-0hg"; //
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [151.215226, -33.856784], // 设置初始地图中心点
        zoom: 13,
      });
      this.getDestinationLandmarks();
    },


    goDetails() {
      this.$router.push({ path: '/ticket-detail' })
      // this.$router.push({ path: '/blog-article?id=' + id })
      // window.open("https://www.trip.com");
    },
    toBooking() {
      window.open("https://Booking.com");
    },
    toHotel() {
      window.open("https://www.hotels.com");
    },
    toWebsite() {
      let url = this.form.websiteUrl;
      window.open(url);
    },
  },
};
</script>
<style lang="scss" scoped>
.backbtn {
  width: 100%;
  background-color: #f5f5f5;

  div {
    padding: .12rem 0 0 .2rem;
    font-size: 26px;
  }
}

.body-center {
  display: flex;

  .box-left {
    padding: 0 0 0 0.2rem;
    background-color: #f5f5f5;
    width: 100%;
    height: 100vh;

    .Search-criteria {

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
            /* color: #606266; */
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
            /* color: #606266; */
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
            /* color: #606266; */
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


}
</style>
