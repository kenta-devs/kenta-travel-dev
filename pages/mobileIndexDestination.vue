<template lang="html">
<div class="mobile-page">
    <div @click="back()" class="back-mark">&lt;</div>
    <div class="mobile-destination-title">Find your destination</div>
    <div class="inp-box">
      <el-popover placement="bottom-start" style="width:100%" trigger="manual" :visible-arrow="false"
           v-model="visible" popper-class="mobile-destination-search-list">
          <div class="select-con">
              <div class="item-list">
                  <div class="item" v-for="(item, index) in searchDestinationList" :key="index" @click="selectFn(item)">
                      <i class="icon icon-location"></i><span>{{ item.label }}</span>
                  </div>
              </div>
          </div>
    <el-input class="destination-input" @keyup.stop.native="searchDestinationByname()" @focus="searchDestinationByname()" placeholder="Where are you going?" v-model="location.label" slot="reference"
         clearable></el-input>
         </el-popover>
    </div>


    <div>
    <div class="select-hd">Recent destinations</div>
    <div class="item-list history-list">
        <div class="item" v-for="(item, index) in historyList" :key="index" @click="selectFn(item)">
            <i class="icon icon-history"></i><span>{{ item.label }}</span>
            <hr />
        </div>
    </div>
    </div>

    <div>
    <div class="select-hd">Popular destinations</div>
    <div class="item-list">
        <div class="item" v-for="(item, index) in popularDestinationList" :key="index" @click="selectFn(item)">
            <i class="icon icon-location"></i><span>{{ item.label }}</span>
            <hr />
        </div>
    </div>
    </div>
</div>
</template>

<script>
import { destinationPopular, getDestinationList } from '@/api/destination'

export default {
  data: () => ({
    visible: false,
    historyList: [],
    hotList: [],
    popularDestinationList: [],
    searchDestinationList: [],
    searchHint: '',
    location: {
      label: '',
      value: '',
      slug: ''

    },
    tabIndex: 0
  }),
  mounted () {
    this.$emit('input', this.$route.query.label);
    this.getHostList();
    this.getPopularDestinationList();
  },
  methods: {
    createFilter (queryString) {
      return (destination) => {
        return (destination.label.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    searchDestinationByname () {
      let param = {
        name: this.location.label
      }
      getDestinationList(param).then((res) => {
        console.log(res, '---res')
        let list = [];
        for (let i = 0; i < res.data.length; i++) {
          list.push({
            value: res.data[i].id,
            label: res.data[i].city,
            slug: res.data[i].slug

          })
        }
        if (list.length == 0) {
          this.visible = false;
        } else {
          this.visible = true;
        }
        this.searchDestinationList = list;//this.location.label != '' ? list.filter(this.createFilter(this.location.label)) : list;
      })
    },
    back () {
      sessionStorage.setItem("showSearch", true);

      this.$router.go(-1);
    },
    getPopularDestinationList () {
      let param = {
        name: this.location.label
      }
      getDestinationList(param).then((res) => {
        let list = [];
        for (let i = 0; i < res.data.length; i++) {
          let o = {
            value: res.data[i].id,
            label: res.data[i].city,
            slug: res.data[i].slug

          };
          list.push(o);
        }
        this.searchDestinationList = list;
        this.hotList = list;
      })
    },
    selectFn (row) {
      this.location = JSON.parse(JSON.stringify(row));
      var addFlag = true;
      if (this.historyList.length > 0) {
        for (var i = 0; i < this.historyList.length; i++) {
          if (this.historyList[i].value == this.location.value) {
            addFlag = false;
            break;
          }
        }
        if (addFlag) {
          this.historyList.push(this.location);
        }
      } else {
        this.historyList.push(this.location);
      }

      sessionStorage.setItem("label", this.location.label);
      sessionStorage.setItem("cityid", this.location.value);
      sessionStorage.setItem("slug", this.location.slug);

      this.$emit('input', this.location.label);
      this.visible = false;
      this.back();
    },
    getHostList () {
      // this.searchHint = 'Popular destinations';
      destinationPopular().then((res) => {
        let list = [];
        for (let i = 0; i < res.data.length; i++) {
          let o = {
            value: res.data[i].id,
            label: res.data[i].city,
            slug: res.data[i].slug

          };
          list.push(o);
        }
        this.popularDestinationList = list;
      })
    },

  }
}
</script>

<style lang="scss" scoped>
hr {
  width: 336px;
  border: 1px solid rgba(26, 26, 26, 0.16);
  margin-top: 16px;
}

.mobile-page {
  width: 100%;
  height: 100%;
}

.back-mark {
  width: 100%;
  height: 24px;
  margin-left: 20px;
  margin-top: 36px;
  font-size: 24px;
}

.mobile-destination-title {
  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-align: left;
  color: rgba(26, 26, 26, 1);
  margin-left: 20px;
  margin-top: 20px;
}

.destination-input {
  width: 97%;
  height: 48px;
  border-radius: 8px;
  border: 1px;
  border: 1px solid rgba(218, 218, 218, 0.6);
  font-family: Rubik;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(26, 26, 26, 0.4);
  margin-top: 16px;
}

.select-hd {
  font-family: Rubik;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 32px;
  margin-left: 20px;
}

.item {
  font-family: Rubik;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  justify-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}

.icon {
  margin-left: 20px;
  display: block;
  background-size: 100%;
  float: left;
}

.icon-history {
  width: 16px;
  height: 16px;
  background-image: url('~assets/images/icon-history.png');
  margin-right: 9px;
}

.icon-location {
  width: 11.25px;
  height: 15px;
  background-image: url('~assets/images/icon-location.png');
  margin-right: 13.75px;
}

::v-deep .el-input__inner {
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.08rem;
  border: none;
}

.mobile ::v-deep .el-popover {
  min-width: 89%;
  padding: 0px;
}

.inp-box {
  flex: 1;
  display: flex;
  align-items: center;
  background: #fefefe;
  border-radius: 0.08rem;

  margin-right: 20px;
  margin-left: 20px;

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
</style>
