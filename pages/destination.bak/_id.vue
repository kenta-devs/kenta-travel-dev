<template>
  <div class="page" @click="closePop">
    <!-- 页头 -->
    <kt-header v-show="!mobileMap"></kt-header>
    <!-- 中间内容 -->
    <div class="box">
      <div class="body-left">
        <div class="search-box">
          <div class="inp-box1">
            <el-autocomplete class="inline-input" v-model="query.destinationName" :fetch-suggestions="querySearch" placeholder="Destination" @select="handleSelect"></el-autocomplete>
          </div>
          <div class="inp-box2">
            <el-popover placement="bottom-start" style="width:100%" trigger="manual" :visible-arrow="false" popper-class="select-date-wrap" v-model="visible3">
              <div class="select-date-con">
                <div class="tabs">
                  <div class="tab" :class="dateType == 0 ? 'active' : ''" @click="handleDateType(0)">
                    Select your
                    dates
                  </div>
                  <div class="tab" :class="dateType == 1 ? 'active' : ''" @click="handleDateType(1)">
                    <span>New:&nbsp;</span> I’m flexible
                  </div>
                </div>
                <div class="tab-con" v-if="dateType == 0">
                  <date-picker ref="myDatePicker" v-model="startAndEndTime" type="daterange" @pick="confirmDateRange" popperClass="date-content" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="" end-placeholder="">
                  </date-picker>
                  <div class="exact-dates">
                    <div class="item" :class="dayRageIndex==0?'active':''" @click="handleDateRange(0)">Exact dates
                    </div>
                    <div class="item" :class="dayRageIndex==1?'active':''" @click="handleDateRange(1)">± 1 day</div>
                    <div class="item" :class="dayRageIndex==2?'active':''" @click="handleDateRange(2)">± 2 days</div>
                    <div class="item" :class="dayRageIndex==3?'active':''" @click="handleDateRange(3)">± 3 days</div>
                    <div class="item" :class="dayRageIndex==7?'active':''" @click="handleDateRange(7)">± 7 days</div>
                  </div>
                </div>
                <div class="tab-con" v-if="dateType == 1">
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
              </div>

              <div class="date-show-inp" slot="reference">
                <div v-show="dateType==0">
                  <el-input placeholder="Add dates" v-model="startAndEndTime" @click.stop.native="handleVisible3" @clear="handleDateClear"></el-input>
                  <div class="show-date-range" v-if="startAndEndTime&&dayRageIndex>0">±{{ dayRageIndex }}</div>
                </div>
                <div v-show="dateType==1">
                  <el-input placeholder="Add dates" v-model="formDate2" @click.stop.native="handleVisible3" @clear="handleDateClear2"></el-input>
                </div>
              </div>
            </el-popover>
          </div>

          <div class="inp-box3">
            <el-popover placement="bottom-start" style="width:100%" trigger="manual" :visible-arrow="false" popper-class="select-guest-wrap" v-model="visible4">
              <div class="select-guest-con">
                <div class="item-list">
                  <div class="item" v-for="(item, index) in guestList" :key="index">
                    <div class="item-con">
                      <div class="item-title">{{ item.label }}</div>
                      <div class="item-desc">{{ item.tips }}</div>
                    </div>
                    <el-input-number v-model="item.value" :min="item.min||0"></el-input-number>
                  </div>
                </div>
              </div>
              <el-input placeholder="Add guests" v-model="guests" slot="reference" @click.stop.native="handleVisible4"></el-input>
            </el-popover>
            <el-button type="primary" class="search-btn" @click="handleSearch" v-if="!isMobile">Search</el-button>
          </div>
        </div>

        <!-- 标题 -->
        <div class="item-tags">
          <div class="tilte-tag" v-if="isMobile" @click="showMobileMap()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12.3337L1 10.3337V1.66699L5 3.66699M5 12.3337L9 10.3337M5 12.3337V3.66699M5 3.66699L9 1.66699M9 10.3337L13 12.3337V3.66699L9 1.66699M9 10.3337V1.66699" stroke="#1A1A1A" stroke-opacity="0.6" stroke-linecap="round" />
            </svg>
            &nbsp;Map
          </div>
          <div class="tilte-tag" @click="filterList">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.66669 3.33333H4.66669M9.33335 3.33333H13.3334M9.33335 3.33333C9.33335 2.59695 8.73642 2 8.00002 2C7.26362 2 6.66669 2.59695 6.66669 3.33333C6.66669 4.06971 7.26362 4.66667 8.00002 4.66667C8.73642 4.66667 9.33335 4.06971 9.33335 3.33333ZM6.66669 8H10.6667M10.6667 8C10.6667 8.7364 11.2636 9.33333 12 9.33333C12.7364 9.33333 13.3334 8.7364 13.3334 8C13.3334 7.2636 12.7364 6.66667 12 6.66667C11.2636 6.66667 10.6667 7.2636 10.6667 8ZM2.66669 8H4.66669M7.33335 12.6667H13.3334M4.00002 11.3333C4.7364 11.3333 5.33335 11.9303 5.33335 12.6667C5.33335 13.4031 4.7364 14 4.00002 14C3.26364 14 2.66669 13.4031 2.66669 12.6667C2.66669 11.9303 3.26364 11.3333 4.00002 11.3333Z" stroke="#1A1A1A" stroke-opacity="0.6" stroke-linecap="round" />
            </svg>
            &nbsp;Filters
          </div>
        </div>
        <div class="tilte-box">
          <div v-if="isMobile" class="navigator">
            {{ form.country }}
            <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66675 4.66699L10.0001 8.00033L6.66675 11.3337" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ form.continent }}
          </div>
          <div class="box-hd">{{ form.city }}</div>
        </div>
        <div class="sub-title-box">
          <div class="box-hd">{{ form.casinoList.length }} Casinos available in this location</div>
        </div>
        <div class="notice">
          <div class="notice-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_78_7755)">
                <path
                  d="M8.21413 0.966769H8.17246L8.14313 0.996349L0.337822 8.86592C0.337785 8.86596 0.337748 8.86599 0.337711 8.86603C0.141399 9.0624 0.0330566 9.32434 0.0330566 9.60199C0.0330566 9.87969 0.14144 10.1417 0.337822 10.3381L5.7956 15.7958C5.99833 15.9986 6.26438 16.1001 6.5306 16.1001C6.79805 16.1001 7.06562 15.9977 7.27035 15.7932L7.27134 15.7922L14.8719 7.98636L14.9002 7.95724V7.9166V1.48527L15.8595 0.525992C16.0028 0.38267 16.0028 0.150815 15.8595 0.00749197C15.7162 -0.135831 15.4843 -0.135831 15.341 0.00749197L14.3817 0.966769H8.21413ZM0.857123 9.38362L0.85741 9.38333L8.47819 1.70012H13.6484L12.5864 2.76213C12.3748 2.63857 12.1292 2.56682 11.8668 2.56682C11.0763 2.56682 10.4334 3.20975 10.4334 4.0002C10.4334 4.79065 11.0763 5.43358 11.8668 5.43358C12.6572 5.43358 13.3002 4.79065 13.3002 4.0002C13.3002 3.7378 13.2284 3.49216 13.1049 3.28063L14.1669 2.21862V7.65941L6.74924 15.2773C6.7491 15.2775 6.74896 15.2776 6.74882 15.2777C6.6289 15.3972 6.43385 15.3971 6.3141 15.2773L0.856322 9.81955C0.736564 9.69979 0.736309 9.50443 0.857123 9.38362ZM12.5668 4.0002C12.5668 4.38605 12.2526 4.70023 11.8668 4.70023C11.4809 4.70023 11.1668 4.38605 11.1668 4.0002C11.1668 3.61435 11.4809 3.30017 11.8668 3.30017C11.9222 3.30017 11.9761 3.30729 12.0281 3.32038L11.6075 3.74095C11.4642 3.88427 11.4642 4.11613 11.6075 4.25945C11.679 4.33091 11.773 4.36688 11.8668 4.36688C11.9606 4.36688 12.0546 4.33091 12.126 4.25945L12.5467 3.8388C12.5597 3.89075 12.5668 3.94465 12.5668 4.0002Z"
                  fill="#3451FF" stroke="#3451FF" stroke-width="0.2" />
              </g>
              <defs>
                <clipPath id="clip0_78_7755">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="notice-text">
            Prices are surprise-free and include end-of-stay cleaning, tax and service fees.
          </div>

        </div>
        <!-- 目标 -->
        <div class="white-box">
          <div class="item-box" v-for="(item, index) in form.casinoList" :key="index">
            <img @click="toCasinoDetail(item)" :src="item.imagesList[0]?.url" alt="">
            <div class="item-right">
              <div class="item-title">
                <div class="casino-name" @click="toCasinoDetail(item)">
                  {{ item.name }}
                </div>
                <div v-if="item.isSave == 1" class="tag" @click="collection(item.id)">
                  <i class="icon-mark-saved" @click="collection(item)"></i>
                </div>
                <div v-if="item.isSave == 0" class="tag" @click="collection(item.id)">
                  <i class="icon-mark" @click="collection(item)"></i>
                </div>
              </div>
              <div class="item-locate">
                {{ form.city }}, {{ form.country }}
              </div>
              <div class="line2"></div>
              <div class="item-price">
                <div class="from-night">
                  From
                  <div class="boldfont">€215</div>
                  night
                </div>
                <div class="total">
                  €1,505 total
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="body-right" v-if="!isMobile">
        <!-- :class="{'is_fixed' : (isFixed && !isCoincide), 'is_coincide':(isFixed && isCoincide)}" -->
        <div class="map-container">
          <div ref="map" id="map" class="map-box"></div>
        </div>
      </div>
      <el-drawer title="" :append-to-body="false" :visible.sync="mobileMap" direction="ltr" size="100vw" custom-class="mobile-map" :before-close="mobileMapClose" :with-header="false" @opened="initMobileMap()">
        <div id="map" class="map-box-mobile"></div>
        <div class="map-box-close" @click="mobileMap = false">
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 1.32628L16.8487 0L9 6.82892L1.15133 0L0 1.32628L7.66615 8L0 14.6737L1.15133 16L9 9.17108L16.8487 16L18 14.6737L10.3339 8L18 1.32628Z" fill="#1A1A1A" />
          </svg>
        </div>
      </el-drawer>
    </div>
    <el-dialog v-if="!isMobile" :class="isMobile ? 'mobile-login' : 'destination-login'" :visible.sync="pcLoginVisible" :modal="false" :close-on-click-modal="true" height="580px" top="80px" border-radius="8px" border="1px">
      <loginVue style="height: 100%;min-height:0px;" />
    </el-dialog>
    <!-- 页底 -->
    <kt-footer></kt-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getDestinationList, destinationDetail, destinationSlugDetail, destinationLandmarks } from '@/api/destination'
import { saveCasino, cancelSaveCasino } from '@/api/index';
import loginVue from '@/components/dialog-login.vue'
export default {
  name: 'DestinationPage',
  head () {
    return {
      link: [{ rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' }]
    }
  },
  data () {
    return {
      sortFlag: 0,
      isLogin: true,
      pcLoginVisible: false,
      search: {
        destinationName: '',
        destinationId: '',
      },
      query: {
        destinationName: '',
        destinationId: '',
      },
      startAndEndTime: null,
      destinationList: [],
      form: {
        date: null,
        dates: null,
        casinoList: [],
      },
      lat: null,
      lng: null,
      map: null,
      mapInit: false,
      markerArr: [],
      isMobile: false,
      mobileMap: false,
      visible3: false,
      visible4: false,
      dateType: 0,
      dayRageIndex: 0,
      monthIndex: 0,
      guestList: [{
        label: 'Adults',
        tips: 'Age 13+',
        value: 0,
      }, {
        label: 'Children',
        tips: 'Age 1 to 12',
        value: 0,
      }, {
        label: 'Infants',
        tips: 'Under 1',
        value: 0,
      }, {
        label: 'Pets',
        tips: 'An extra free may apply',
        value: 0,
      }],
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
      traveTypeText: 'A week',
      date: '',
      isFixed: false,
      isCoincide: false,
      offsetTop: 0

    }
  },
  components: {
    loginVue
  },
  computed: {
    reorder () {
      return this.form.casinoList.sort(function (x, y) {
        return x["name"].localeCompare(y["name"])
        //index是companyList你需要索引的字段名称
      })
    },
    reorder2 () {
      return this.form.casinoList.sort(function (x, y) {
        return y["name"].localeCompare(x["name"])
      })
    },
    formDate2: {
      get () {
        if (this.selectedMonth.length > 0) {
          return `${this.traveTypeText} in ${this.selectedMonth.join(',')}`;
        } else {
          return ''
        }
      },
      set () {
      }
    },
    guests: {
      get () {
        let gustText = '';
        let infantText = '';
        let petText = '';
        let gutstNum = this.guestList[0].value + this.guestList[1].value;
        let infantNum = this.guestList[2].value;
        let petNum = this.guestList[3].value;
        if (infantNum > 0 || petNum > 0) {
          this.$set(this.guestList[0], 'min', 1);
        } else {
          this.$set(this.guestList[0], 'min', 0);
        }
        if (gutstNum == 1) {
          gustText += gutstNum + ' guest'
        } else if (gutstNum > 0) {
          gustText += gutstNum + ' guests'
        }
        if (infantNum == 1) {
          infantText += ' ,' + infantNum + ' infant'
        } else if (infantNum > 1) {
          infantText += ' , ' + infantNum + ' infants'
        }
        if (petNum == 1) {
          petText += ' ,' + petNum + ' pet'
        } else if (petNum > 1) {
          petText += ' , ' + petNum + ' pets'
        }
        return `${gustText}${infantText}${petText}`;
      },
      set () {
      }
    },
  },
  mounted () {
    this.isMobile = window.isMobile;

    this.pcLoginVisible = !this.$store.getters.token;

    // if (sessionStorage.key("showSearch") != null) {
    //   if (sessionStorage.getItem("showSearch") != 'false') {
    //     if (sessionStorage.getItem("label") != null) {
    //       this.query.destinationName = sessionStorage.getItem("label");
    //       this.query.destinationId = sessionStorage.getItem("cityid");
    //     }

    //     if (sessionStorage.getItem("dateType") != null) {
    //       this.dateType = Number(sessionStorage.getItem("dateType"));
    //       if (this.dateType == 0) {
    //         this.$refs.myDatePicker.minDate = sessionStorage.getItem("minDate");
    //         this.$refs.myDatePicker.maxDate = sessionStorage.getItem("maxDate");
    //         let e = [];
    //         e.push(this.$refs.myDatePicker.minDate);
    //         e.push(this.$refs.myDatePicker.maxDate);
    //         this.confirmDateRange(e);

    //       } else if (this.dateType == 1) {
    //         if (sessionStorage.getItem("travelTypeIndex") != null) {
    //           this.travelTypeIndex = sessionStorage.getItem("travelTypeIndex");
    //         }
    //         if (sessionStorage.getItem("traveTypeText") != null) {
    //           this.traveTypeText = sessionStorage.getItem("traveTypeText");
    //         }
    //         if (sessionStorage.getItem("monthIndex") != null) {
    //           this.handleMonth(sessionStorage.getItem("monthIndex"));
    //         }
    //       }
    //     }
    //     if (sessionStorage.getItem("guests") != null) {
    //       this.guestList = JSON.parse(sessionStorage.getItem("guests"));
    //     }
    //     sessionStorage.setItem("showSearch", false);
    //   }
    // }

    this.query.destinationId = this.$route.params.id;
    this.query.destinationName = this.$route.params.destinationName || '';
    this.dateType = Number(this.$route.params.dateType || '0');
    this.startAndEndTime = this.$route.params.date;

    this.selectedMonth = this.$route.params.selectedMonth || [];

    if (this.$route.params.guestList) {
      this.guestList = JSON.parse(this.$route.params.guestList);
    }

    if (this.isMobile) {
      if (sessionStorage.getItem("label") != null) {
        this.query.destinationName = sessionStorage.getItem("label");
        this.query.destinationId = sessionStorage.getItem("slug");
      }

      // 处理手机端参数
      if (this.dateType == 0) {
        if (sessionStorage.getItem("minDate") && sessionStorage.getItem("maxDate")) {
          this.$refs.myDatePicker.minDate = sessionStorage.getItem("minDate");
          this.$refs.myDatePicker.maxDate = sessionStorage.getItem("maxDate");
          let e = [];
          e.push(this.$refs.myDatePicker.minDate);
          e.push(this.$refs.myDatePicker.maxDate);
          this.confirmDateRange(e);
        }
      }

      if (this.dateType == 1) {
        if (sessionStorage.getItem("travelTypeIndex") != null) {
          this.travelTypeIndex = sessionStorage.getItem("travelTypeIndex");
        }
        if (sessionStorage.getItem("traveTypeText") != null) {
          this.traveTypeText = sessionStorage.getItem("traveTypeText");
        }
        if (sessionStorage.getItem("monthIndex") != null) {
          this.handleMonth(sessionStorage.getItem("monthIndex"));
        }
      }

      if (sessionStorage.getItem("guests") != null) {
        this.guestList = JSON.parse(sessionStorage.getItem("guests"));
      }

      sessionStorage.setItem("showSearch", false);
    }

    this.makMonthList();

    if (this.query.destinationId) {
      this.handleSearch();
    }

    this.init();
  },
  methods: {
    loadJS (src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        var loaded;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!loaded && (!script.readyState || /loaded|complete/.test(script.readyState))) {
            script.onload = script.onreadystatechange = null;
            loaded = true;
            resolve({ loaded: loaded, err: null });
          }
        }
        script.onerror = error => {
          loaded = false;
          reject({ loaded: loaded, err: error })
        };
        document.head.appendChild(script);
      });

    },
    getCookie (name) {
      var cookie_start = document.cookie.indexOf(name);
      var cookie_end = document.cookie.indexOf(";", cookie_start);
      return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    },
    async initMap () {
      try {
        await this.loadJS('https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js')

        mapboxgl.accessToken = 'pk.eyJ1Ijoia2VudGF2aXAiLCJhIjoiY2xwYjdvaHM2MGh2eTJxcDk0MmI3d2Q5ZCJ9.luCk1ALDEYK9AR9Ik9-0hg';

        this.map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [this.lng, this.lat], // 设置初始地图中心点
          zoom: 13
        });

        this.mapInit = true;

        return true
      } catch (error) {
        return false
      }
    },
    filterList () {
      // console.log("this.form.casinoList1", this.form.casinoList)
      if (this.sortFlag == 0) {
        this.sortFlag = 1;
        this.form.casinoList = this.reorder2
      } else {
        this.form.casinoList = this.reorder
        this.sortFlag = 0;
      }
    },
    init () {
      getDestinationList().then((res) => {
        let list = [];
        for (let i = 0; i < res.data.length; i++) {
          list.push({
            value: res.data[i].city,
            label: res.data[i].id,
            slug: res.data[i].slug
          })
        }
        this.destinationList = list;
      })
    },
    toHome () {
      this.$router.push({ path: '/' })
    },
    querySearch (queryString, cb) {
      var destinationList = this.destinationList;
      var results = queryString ? destinationList.filter(this.createFilter(queryString)) : destinationList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return (destination) => {
        return (destination.value.toLowerCase().includes(queryString.toLowerCase()));
      };
    },
    handleSelect (item) {
      this.query.destinationId = item.slug;
      if(window.isMobile){
        this.handleSearch();
      }
    },
    async handleSearch () {
      this.markerArr = []

      let params = {
        slug: this.query.destinationId
      };

      const res = await destinationSlugDetail(params)

      this.form = res.data;
      this.lng = res.data.lng;
      this.lat = res.data.latt;

      const mapRes = await this.initMap() //设置初始点

      if (mapRes) {
        res.data.casinoList.forEach((landmark, index) => {
          if (this.map) {
            if (index == 0) {
              this.map.flyTo({ center: [landmark.longitude, landmark.latitude] })
            }

            let popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML('<h3>' + landmark.name + '</h3><img src="' + landmark.imagesList[0].url + '" alt="' + landmark.name + '" style="width:100%;">');

            let markerArr = new mapboxgl.Marker()
              .setLngLat([landmark.longitude, landmark.latitude])
              .setPopup(popup)
              .addTo(this.map);

            this.markerArr.push(markerArr)
          }
        });
      }


      else {
        this.handleSearch()
        if (!this.isMobile) {
          this.handleSearch()
        }
      }
    },
    toCasinoDetail (row) {
      if (!window.whiteList.includes(`/casino-profile/${row.slug}`)) {
        window.whiteList.push(`/casino-profile/${row.slug}`)
      }

      sessionStorage.setItem('cpid', row.id)

      this.$router.push(`/casino-profile/${row.slug}`)
      // this.$router.push({
      //   path: '/casino-profile',
      //   query: { id: id },
      // })
    },
    collection (item) {
      console.log(item, "collectioncollection");
      let memberId = this.getCookie("userId");
      console.log('user => ' + memberId);
      if (memberId == '') {
        this.$router.push({ path: '/login' })
        return;
      }
      if (item.isSave == 0) {
        saveCasino({ casinoId: item.id }).then(res => {
          // this.$message({
          //   message: 'Collection successful',
          //   type: 'success'
          // });
          item.isSave = 1
          console.log("收藏成功")
        })
      } else {
        cancelSaveCasino({ casinoId: item.id }).then(res => {
          //   this.$message({
          //       message: 'cancelSaveCasino success',
          //       type: 'success',
          // customClass:'messageIndex'
          //   });
          item.isSave = 0
          console.log("success")
        })
      }
      //重新获取数据
      let params = {
        id: this.query.destinationId
      };
      destinationDetail(params).then((res) => {
        console.log(res, '------')
        this.form = res.data;
      })
    },
    showMobileMap () {
      this.mobileMap = true;
      this.$nextTick(() => {
        this.initMap() //设置初始点
        this.handleSearch()
      })
    },
    initMobileMap () {
      if (!this.mapInit) {
        this.initMap();
      }
    },
    mobileMapClose (done) {
      done();
    },
    handleDateRange (index) {
      this.dayRageIndex = index;
    },
    handleDateClear () {
      this.dayRageIndex = 0;
      this.$refs.myDatePicker.minDate = '';
      this.$refs.myDatePicker.maxDate = '';
      this.dateType = 0;
    },
    handleDateClear2 () {
      for (let i = 0; i < this.monthList.length; i++) {
        this.$set(this.monthList[i], 'checked', false);
      }
      this.selectedMonth = [];
      this.travelTypeIndex = 2;
      this.traveTypeText = 'A week';
      this.dateType = 0;
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
      console.log(index);
      console.log(this.monthList.length);
      if (this.monthList[index].checked) {
        this.monthList[index].checked = false;
      } else {
        for (let i = 0; i < this.monthList.length; i++) {
          if (this.monthList[i].checked) {
            this.monthList[i].checked = false;
            break;
          }
        }
        this.monthList[index].checked = true;
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
    handleTab (index) {
      this.tabIndex = index;
    },
    handleVisible3 () {
      if (window.isMobile) {
        this.$router.push({ path: '/mobileIndexDate' });
        return;
      }
      this.visible3 = !this.visible3;
      this.visible4 = false;
    },
    handleVisible4 () {
      if (window.isMobile) {
        this.$router.push({ path: '/mobileIndexGuest' });
        return;
      }
      this.visible4 = !this.visible4;
      this.visible3 = false;
    },
    selectFn3 (val) {
      this.date = val;
      this.visible3 = false;
    },
    handleDateType (type) {
      this.dateType = type;
    },
    confirmDateRange (e) {
      this.startAndEndTime = `${dayjs(e[0]).format('DD')} ${this.monthEN['month' + dayjs(e[0]).format('MM') % 12].slice(0, 3)} - ${dayjs(e[1]).format('DD')} ${this.monthEN['month' + dayjs(e[1]).format('MM') % 12].slice(0, 3)}`
      // this.visible3 = false;
    },
    closePop () {
      this.visible3 = false;
      this.visible4 = false;
    },
  },
}
</script>

<style lang="scss" scoped>
.notice-icon {
  float: left;
}

.notice-text {
  float: left;
  margin-left: 3px;
}
.navigator {
  color: rgba(26, 26, 26, 0.6);
  font-size: 0.14rem;
  font-style: normal;
  font-weight: 400;
  .icon-svg {
    margin: -3px 0.04rem 0 0.04rem;
  }
}
.date-show-inp {
  // font-family: Rubik;
  position: relative;

  .show-date-range {
    position: absolute;
    left: 1.25rem;
    width: 0.4rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    border-radius: 0.3rem;
    top: 50%;
    margin-top: -0.15rem;
    border: solid 1px #ddd;
    color: #1a1a1a;
  }
}

.travel-month {
  margin-top: 0.24rem;
  font-family: Rubik;
  .type-hd {
    color: #1a1a1a;
    font-size: 0.2rem;
    font-weight: 400;
    margin-bottom: 0.16rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #dadada;
    flex: 1;
    height: 1.2rem;
    margin: 0 0.12rem;
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
    padding: 0 0.08rem;
    border-radius: 0.04rem;
    height: 0.32rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.08rem;
    border: 1px solid rgba(218, 218, 218, 0.6);
  }

  .item.active {
    color: #ff3263;
    border: 1px solid #ff3263;
    background: rgba(255, 50, 99, 0.16);
  }
}

.travel-type {
  font-family: Rubik;
  .type-hd {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  .item-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.16rem;

    .item + .item {
      margin-left: 0.32rem;
    }

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

    .item:hover {
      border: 1px solid #ff3263;
      background: rgba(255, 50, 99, 0.08);

      .item-text {
        color: #ff3263;
      }
    }

    .item {
      height: 1.6rem;
      width: 1.6rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #dadada;
      cursor: pointer;

      .item-icon {
        height: 0.56rem;
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
      }
    }
  }
}

.tab-con {
  padding: 0.24rem 0.1rem 0.16rem 0.1rem;
  width: 100%;
  background: #fefefe;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.icon-mark-saved {
  display: block;
  width: 0.32rem;
  height: 0.32rem;
  position: absolute;
  //right: .16rem;
  //top: .16rem;
  background: url('~assets/images/icon-mark-saved.png');
  background-size: 100%;
}
.icon-mark {
  display: block;
  width: 0.32rem;
  height: 0.32rem;
  position: absolute;
  //right: .16rem;
  //top: .16rem;
  background: url('~assets/images/icon-mark.png');
  background-size: 100%;
}
.page {
  :deep(.el-dialog) {
    position: absolute;
    right: 0.25rem;

    .el-dialog__header {
      padding: 0px;
    }

    .el-dialog__headerbtn {
      width: 40px;
      height: 40px;
      top: -18px;
      border: 1px solid rgba(218, 218, 218, 1);
      right: -18px;
    }
  }
}

img {
  width: 100%;
  height: 100%;
}

.line {
  width: 7.71rem;
  height: 1px;
  background: rgba(26, 26, 26, 0.16);
}

.line2 {
  margin: 8px 0 8px 0;
  width: 0.4rem;
  height: 1px;
  background: rgba(26, 26, 26, 0.16);
}

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

.item-tags {
  width: auto;
  float: right;
  margin-top: 44px;
  margin-right: 50px;

  .tilte-tag {
    margin-right: 0.08rem;
    width: 93px;
    height: 0.32rem;
    flex-shrink: 0;
    display: flex;
    flex: 1;
    padding-left: 0.16rem;
    align-items: center;
    background: #fefefe;
    border-radius: 100px;
    border: 1px solid rgba(218, 218, 218, 0.6);
    color: rgba(26, 26, 26, 0.6);

    text-align: center;
    font-family: Rubik;
    font-size: 0.14rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.16rem;
    float: left;
    /* 114.286% */
  }
}

.box {
  border-top: solid 1px #dadada;
  padding: 0.24rem 0.32rem 0 0.32rem;
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  .body-left {
    width: 60%;

    .tilte-box {
      padding: 0.4rem 0.24rem 0.16rem 0;
      width: auto;
      .box-hd {
        color: #1a1a1a;
        text-align: left;
        font-family: Rubik;
        font-size: 0.4rem;
        font-style: normal;
        font-weight: 500;
        letter-spacing: -1.6px;
      }
    }

    .sub-title-box {
      padding: 0rem 0.24rem 0rem 0rem;
      display: flex;

      .box-hd {
        font-size: 0.16rem;
      }
    }

    .notice {
      color: #3451ff;
      border-radius: 4px;
      font-weight: 400;
      line-height: 0.16rem;
      /* 114.286% */
      height: 0.48rem;
      width: 5.71rem;
      margin: 0.24rem 0.24rem 0.32rem 0rem;
      border: 0.02rem solid #eef0fe;
      font-size: 0.14rem;
      display: flex;
      align-items: center;
      padding-left: 0.12rem;
      background-color: #eef0fe;
    }

    .white-box {
      padding-right: 0.4rem;

      .item-box {
        border-top: 0.01rem solid rgba(26, 26, 26, 0.16);
        display: flex;
        // margin: ;
        padding: 0.24rem 0 0.24rem 0;

        img {
          width: 3.32rem;
          height: 2rem;
          flex-shrink: 0;
          border-radius: 0.04rem;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
        }

        .item-right {
          display: flex;
          flex-direction: column;
          padding: 0rem 0rem 0rem 0.15rem;
          height: 2rem;
          width: 7rem;

          .item-title {
            display: flex;
            justify-content: space-between;

            .tag {
              display: flex;
              align-items: center;
              justify-content: center;
              border: solid 1px rgba(26, 26, 26, 0.16);
              width: 0.32rem;
              height: 0.32rem;
              border-radius: 50%;
            }

            .casino-name {
              color: rgba(26, 26, 26, 0.87);
              font-family: Rubik;
              font-size: 0.2rem;
              font-style: normal;
              font-weight: 500;
              line-height: 0.24rem;
              /* 120% */
            }

            .tag {
              width: 0.32rem;
              height: 0.32rem;
              flex-shrink: 0;
              stroke-width: 0.01rem;
              stroke: rgba(26, 26, 26, 0.16);
            }
          }

          .item-locate {
            color: rgba(26, 26, 26, 0.6);
            font-family: Rubik;
            font-size: 0.14rem;
            font-style: normal;
            font-weight: 400;
            line-height: 0.16rem;
            /* 114.286% */
          }

          .item-reviews {
            display: flex;
            color: #1a1a1a;
            font-family: Rubik;
            font-size: 0.12rem;
            font-style: normal;
            font-weight: 300;
            line-height: 0.16rem;

            /* 133.333% */
            .point {
              width: 0.08rem;
              height: 0.08rem;
              flex-shrink: 0;
              margin: 0.03rem;
            }

            img {
              width: 0.16rem;
              height: 0.16rem;
            }
          }

          .item-price {
            color: rgba(26, 26, 26, 0.6);
            font-family: Rubik;
            font-size: 0.14rem;
            font-style: normal;
            font-weight: 400;
            line-height: 0.16rem;
            /* 114.286% */
            flex-direction: column;
            align-items: flex-end;
            margin-top: auto;
            margin-left: auto;

            .from-night {
              display: flex;
              height: 0.24rem;
              line-height: 0.24rem;

              /* 133.333% */
              .boldfont {
                margin: 0 0.01rem 0 0.01rem;
                color: rgba(26, 26, 26, 0.87);
                font-family: Rubik;
                font-size: 0.18rem;
                font-style: normal;
                font-weight: 400;
                line-height: 0.24rem;
                /* 133.333% */
              }
            }

            .total {
              float: right;
            }
          }
        }
      }
    }
  }

  .body-right {
    position: sticky !important;
    top: 80px !important;
    z-index: 100;
    width: 40%;
    align-self: flex-start;
    flex-shrink: 0;
    .map-container {
      width: 100%;
      height: 7.88rem;
      margin-bottom: 0.24rem;
      border: 0.01rem solid rgba(26, 26, 26, 0.16);
      border-radius: 0.12rem;
      overflow: hidden;
      .map-box {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.search-box {
  // margin-top: .24rem;
  display: flex;
  background: #fefefe;
  width: 7.71rem;
  height: 0.64rem;
  // padding: .08rem;
  border-radius: 0.12rem;
  color: #1a1a1a;
  font-family: Rubik;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.16rem;
  /* 100% */
  box-shadow: 0px 0.03rem 0.12rem 0px #88888854;
  .inp-box1 {
    width: 2.32rem;
    height: 0.64rem;
    flex-shrink: 0;
    border-radius: 0.08rem;

    .inline-input {
      width: 100%;
    }
  }

  .inp-box2 {
    width: 2.31rem;
    height: 0.64rem;
    border-left: 0.01rem solid #dadada;
  }

  .inp-box3 {
    width: 3.08rem;
    height: 0.64rem;
    position: relative;
    border-left: 0.01rem solid #dadada;
  }

  .inline-input {
    width: 100%;
    height: 100%;
  }

  ::v-deep .el-input__inner {
    height: 0.64rem;
    line-height: 0.64rem;
    border: none;
    color: #1a1a1a;
    font-family: Rubik;
    font-size: 0.16rem;
    font-style: normal;
    font-weight: 400;
  }

  .inp-box {
    margin-right: 0.08rem;
    flex: 1;
    display: flex;
    padding-left: 0.16rem;
    align-items: center;
    border: 0.01rem solid rgba(218, 218, 218, 0.6);
    background: #fefefe;
    border-radius: 0.08rem;
  }

  .search-btn {
    position: absolute;
    top: 0.08rem;
    right: 0.08rem;
    width: 0.97rem;
    height: 0.48rem;
    font-weight: 400;
    border-radius: 0.08rem;
    padding: 0.12rem 0.2rem;
    font-size: 0.14rem;
    flex-shrink: 0;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder,
  input::placeholder,
  textarea::placeholder {
    color: #1a1a1a;
  }
}

.destination-login {
  border-radius: 8px;
  border: 1px solid rgba(218, 218, 218, 1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
  :deep(.el-dialog) {
    position: absolute;
    right: 0.25rem;
    width: 448px;

    .el-dialog__header {
      padding: 0px;
    }

    .el-dialog__headerbtn {
      width: 40px;
      height: 40px;
      top: -15px;
      border: 1px solid rgb(218, 218, 218);
      right: -15px;
      background: #fff;
      border-radius: 4px;
    }
  }
}

.mobile-login {
  display: none;
  :deep(.el-dialog) {
    position: absolute;
    right: 0rem;
    width: 100% !important;
    margin-top: 0.49rem !important;
    border-radius: 0px 0px 1.5em 1.5em;

    .el-dialog__header {
      padding: 0px;
    }

    .el-dialog__headerbtn {
      display: none;
      width: 40px;
      height: 40px;
      top: -15px;
      border: 1px solid rgb(218, 218, 218);
      right: -15px;
      background: #fff;
      border-radius: 4px;
    }
  }
}

.mobile {
  .navigator {
    font-family: Rubik;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    display: inline-flex;
    align-items: center;

    .icon-svg {
      margin-top: 1px;
    }
  }

  .search-btn {
    display: none;
  }

  .item-tags {
    width: 3.16rem;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(26, 26, 26, 0.16);
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  .box {
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
    width: 100vw;

    .body-left {
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 0;
      background: #f5f5f5;

      .tilte-box {
        width: 3.16rem;
        flex-wrap: wrap-reverse;
        padding: 16px 0 8px 0;

        .box-hd {
          font-family: Rubik;
          font-size: 24px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.04em;
          margin-top: 8px;
        }
      }

      .sub-title-box {
        padding: 0;
        width: 3.16rem;
      }

      .search-box {
        width: 3.16rem;
        height: 40px;
        font-size: 12px;
        font-style: normal;
        line-height: 16px;
        /* 100% */
        margin-top: 0.16rem;

        .inp-box1 {
          width: calc(100% / 3);
          height: 0.4rem;
        }

        .inp-box2 {
          width: calc(100% / 3);
          height: 0.4rem;
          border-left: 0;
        }

        .inp-box3 {
          width: calc(100% / 3);
          height: 0.4rem;
          border-left: 0;
        }

        ::v-deep .el-input__inner {
          height: 0.4rem;
          border: none;
          font-family: Rubik;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;
          padding-right: 0px !important;
        }
      }

      .notice {
        width: 3.16rem;
        margin: 0.24rem 0 0.24rem 0;
      }

      .white-box {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-right: 0;

        .line {
          width: 3.16rem;
        }

        .item-box {
          flex-direction: column;
          align-items: center;
          //padding: 0.24rem 0.24rem 0 0.24rem;
          padding: 0;
          border-top: 0px solid rgba(26, 26, 26, 0.16);

          img {
            width: 3.16rem;
          }

          .item-title {
            .tag {
              display: none;
            }
          }

          .item-locate {
            margin-top: 4px;
          }

          .item-right {
            width: 3.36rem !important;
            min-height: 1.4rem;
            height: auto;
            padding-top: 0.2rem;
            padding-bottom: 0.24rem;
            border-bottom: 0px solid rgba(26, 26, 26, 0.16);
            position: relative;
          }

          .item-price {
            position: absolute;
            right: 0.1rem;
            bottom: 0.3rem;
          }
        }
      }
    }
  }

  .body-right {
    display: none;
  }

  .mobile-map {
    .map-box-mobile {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #f5f5f5;
    }

    .map-box-close {
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
    }
  }
}
</style>
