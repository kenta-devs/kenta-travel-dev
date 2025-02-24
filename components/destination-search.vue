<template lang="html">
    <div class="inp-box" :style="colorChange()" >
        <i class="icon icon-search">
            <img src="~assets/images/icon-search.png" alt="">
        </i>
        <el-popover placement="bottom-start" style="width:100%" trigger="manual" :visible-arrow="false"
            popper-class="select-wrap" v-model="visible">
            <div class="select-con">
                <template  v-if="historyList.length > 0">
                    <div v-show="recentShow" class="select-hd">Recent destinations</div>
                    <div v-show="recentShow" class="item-list history-list">
                        <div class="item" v-for="(item, index) in historyList" :key="index" @click="selectFn(item)">
                            <i class="icon icon-history"></i><span>{{ item.label }}</span>
                        </div>
                    </div>
                </template>
                <div v-show="popularShow" class="select-hd">Popular destinations</div>
                <div class="item-list">
                    <div class="item" v-for="(item, index) in hotList" :key="index" @click="selectFn(item)">
                        <i class="icon icon-location"></i><span>{{ item.label }}</span>
                    </div>
                </div>
            </div>
            <el-input placeholder="Where are you going?" v-model="location.label" v-on:change="colorChange()" slot="reference"
               @keyup.stop.native="searchDestinationByname()" @click.stop.native="handleVisible" clearable></el-input>
        </el-popover>
    </div>
</template>

<script>
import { destinationPopular, getDestinationList } from '@/api/destination'
export default {
  name: 'DestinationSearch',
  props: {
    value: {
      type: Object,
      default: {
        label: '',
        value: '',
        slug: ''
      },
    },
  },
  data: () => ({
    visible: false,
    historyList: [],
    hotList: [],
    popularDestinationList: [],
    searchDestinationList: [],
    searchHint: '',
    popularShow: true,
    recentShow: true,
    isColorChange: false
  }),
  mounted () {
    this.getHostList();
    document.addEventListener('click', this.handleClickOutside);
  },
  computed: {
    location: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
        console.log(val);
      }
    },
    /* styleObject: function(){

      if (this.isColorChange) {
        return 'border : 1px solid rgba(218, 0, 0, 0.6)';
      } else{
        return 'border : 1px solid rgba(218, 218, 218, 0.60)';
      }

    } */
  },
  methods: {
    searchDestinationByname () {
      if (window.isMobile) {
        this.$router.push({ path: '/mobileIndexDestination', query: { label: this.location.label } });
        return;
      }
      console.log("监听键盘事件------" + this.location.label);
      this.colorChange();
      if (this.location.label !== '') {
        this.isColorChange = false;
        this.popularShow = false;
        this.recentShow = false;
        let param = {
          name: this.location.label
        }
        getDestinationList(param).then((res) => {
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
          this.searchDestinationList = list;
          this.hotList = list;
        })
      } else {
        this.isColorChange = true;
        this.popularShow = true;
        this.recentShow = true;
        this.hotList = this.popularDestinationList;
      }
    },
    selectFn (row) {
      this.location = JSON.parse(JSON.stringify(row));
      this.historyList = JSON.parse(JSON.stringify([row]));

      this.close();
    },
    handleClickOutside (event) {
      // 点击弹窗外部区域时关闭弹窗
      if (this.visible && !this.$el.contains(event.target)) {
        this.close();
      }
    },
    handleVisible () {
      if (window.isMobile) {
        this.$router.push({ path: '/mobileIndexDestination', query: { label: this.location.label } });
        return;
      }
      console.log("监听键盘事件------" + this.location.label);
      this.colorChange();
      if (this.location.label == '') {
        this.isColorChange = true;
        this.popularShow = true;
        this.recentShow = true;
        this.hotList = this.popularDestinationList;
      } else {
        this.isColorChange = false;
        this.searchDestinationByname();
        this.recentShow = false;
        this.popularShow = false;
        this.hotList = this.searchDestinationList;
      }
      this.visible = !this.visible;
    },
    close () {
      this.visible = false;
    },
    getHostList () {
      // this.searchHint = 'Popular destinations';
      destinationPopular().then((res) => {
        let list = [];
        for (let i = 0; i < res.data.length; i++) {
          list.push({
            value: res.data[i].id,
            label: res.data[i].city,
            slug: res.data[i].slug
          })
        }
        this.popularDestinationList = list;
      })
    },
    colorChange () {
      return 'border : 1px solid rgba(218, 218, 218, 0.60)';
      if (this.location.label == '') {
        this.isColorChange = true;
        return 'border : 1px solid rgba(218, 0, 0, 0.6)';
      } else {
        this.isColorChange = false;
        return 'border : 1px solid rgba(218, 218, 218, 0.60)';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inp-box {
  margin-right: 0.08rem;
  flex: 1;
  display: flex;
  padding-left: 0.16rem;
  align-items: center;
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

.select-wrap {
  .select-con {
    padding: 0.06rem 0;

    .select-hd {
      color: #1a1a1a;
      font-size: 0.12rem;
      font-weight: 400;
      height: 0.3rem;
      line-height: 0.3rem;
      padding: 0 0.16rem;
    }

    .item-list {
      .item {
        color: #1a1a1a;
        cursor: pointer;
        height: 0.32rem;
        padding: 0 0.16rem;
        line-height: 0.32rem;
        font-size: 0.19rem;
        display: flex;
        align-items: center;
        font-weight: 300;

        .icon {
          width: 0.13rem;
          height: 0.15rem;
          margin-right: 0.08rem;
          display: block;
          background-size: 100%;
        }

        .icon-history {
          width: 0.12rem;
          height: 0.12rem;
          background-image: url('~assets/images/icon-history.png');
        }

        .icon-location {
          background-image: url('~assets/images/icon-location.png');
        }
      }

      .item:hover {
        background: rgba(255, 50, 99, 0.08);
      }
    }
  }
}
</style>
