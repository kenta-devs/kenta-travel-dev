<template>
  <div class="page">
    <!-- header start-->
    <KtHeader></KtHeader>
    <!-- header end-->
    <!-- 照片 -->
    <div class="view-photo" v-if="!isMobile && form.casinoImages.length > 0">
      <div class="item-picture" v-for="(item, index) in form.casinoImages.slice(0, 2)" :key="index">
        <img :src="item.url" />
        <div class="item-view" v-if="form.casinoImages.length > 2">VIEW {{ form.casinoImages.length }} PHOTOS</div>
      </div>
    </div>

    <div class="view-photo" v-if="isMobile && form.casinoImages.length > 0">
      <el-carousel class="item-picture">
        <el-carousel-item v-for="(item, index) in form.casinoImages" :key="index">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="body-center">
      <div class="box-left">
        <div class="navigator">
          {{ form.countryName }}
          <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.66675 4.66699L10.0001 8.00033L6.66675 11.3337" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ form.continentName }}
          <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.66675 4.66699L10.0001 8.00033L6.66675 11.3337" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ form.cityName }}
        </div>
        <div class="view-article">
          <h1 class="casino-title">
            {{ form.name }}
          </h1>
          <div class="casino-subtitle">
            {{ form.address }}
          </div>
          <div style="margin-top: .26rem;" class="line"></div>
          <div class="article-1">
            <h2 class="article-title">
              Overview
            </h2>
            <div class="article-body" :style="articleBody">
              <div style="margin-bottom: 1.5em;" v-for="text in form.overView?.split('\n')">{{ text }}</div>
            </div>
            <div class="article-more" v-if="isMobile" @click="viewArticleMore()">
              {{viewMore}}
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="#3451FF" />
              </svg>
            </div>
          </div>
          <div class="line"></div>
          <div class="item-stats">
            <h2 class="title">
              Casino Stats
            </h2>
            <div class="item-box">
              <div class="white-box">
                <div class="item-line">
                  <div class="line-left">Established</div>
                  <div class="line-right">{{ form.established }}</div>
                </div>
                <div class="line2"></div>
                <div class="item-line">
                  <div class="line-left">Casino sqm</div>
                  <div class="line-right">{{ form.sqm }}</div>
                </div>
                <div class="line2"></div>
                <div class="item-line">
                  <div class="line-left">Table Games</div>
                  <div class="line-right">{{ form.tableGames }}</div>
                </div>
                <div class="line2"></div>
                <div class="item-line">
                  <div class="line-left">Gaming Machines</div>
                  <div class="line-right">{{ form.gameMachines }}</div>
                </div>
              </div>
              <div class="white-box" style="margin-left: .08rem;">
                <div class="item-line">
                  <div class="line-left">Poker Tables</div>
                  <div class="line-right">{{ form.pokerTables }}</div>
                </div>
                <div class="line2"></div>
                <div class="item-line">
                  <div class="line-left">Minimum bet</div>
                  <div class="line-right">N/A{{ form.minimumBet }}</div>
                </div>
                <div class="line2"></div>
                <div class="item-line">
                  <div class="line-left">Maximum payout</div>
                  <div class="line-right">N/A{{ form.maximumPayout }}</div>
                </div>
                <div class="line2"></div>
                <div class="item-line">
                  <div class="line-left">Open 24/7</div>
                  <div class="line-right">{{ form.isForeverOpen ? 'Yes' : 'No' }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="item-games">
            <h2 class="title">
              Available Games
            </h2>
            <div class="item-body" :style="itemBody">
              <div class="item-line">
                <div class="item-1" v-if="form.blackjack">
                  <img src="@/assets/images/casino-cards.png" />
                  Blackjack
                </div>
                <div class="item-1" v-if="form.roullete">
                  <img src="@/assets/images/roulette.png" />
                  Roullete
                </div>
                <div class="item-1" v-if="form.sicbo">
                  <img src="@/assets/images/domino-leisure.png" />
                  Sic Bo
                </div>
                <div class="item-1" v-if="form.slotmachines">
                  <img src="@/assets/images/slot-machine-casino.png" />
                  Slot Machines
                </div>
                <div class="item-1" v-if="form.baccarat">
                  <img src="@/assets/images/cards-svgrepo.png" />
                  Baccarat
                </div>
                <div class="item-1" v-if="form.craps">
                  <img src="@/assets/images/craps.png" />
                  Craps
                </div>
              </div>
            </div>
            <!--<div class="item-more" v-if="isMobile" @click="viewGamesMore()">
              {{viewMoreGames}}
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="#3451FF" />
              </svg>
            </div>-->
          </div>
          <div class="line"></div>
          <div class="item-location">
            <div class="top">
              <h2 class="title">
                Location
              </h2>
            </div>
            <map class="location-map">
              <div id="map" class="map-box"></div>
            </map>
          </div>
          <div class="line"></div>
          <div class="item-additional">
            <h2 class="title">Additional Information</h2>
            <div class="white-box">
              <div class="item-line">
                <div class="item1">
                  <div class="left">Phone</div>
                  <div class="right"><a v-bind:href="telphone">{{ form.phone }}</a></div>
                </div>
                <div class="item1">
                  <div class="left">Email</div>
                  <div class="right-1"><a v-bind:href="email">Message Here</a></div>
                </div>
              </div>
              <div class="item-line">
                <div class="item">
                  <div class="left">Website</div>
                  <span class="right-2" @click="toWebsite">Visit Here</span>
                </div>
                <div class="item">
                  <div class="left">Social Media</div>
                  <div class="right-3">
                    <a v-bind:href="form.youtube" target="_blank" v-if="isShow.youtube">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10.4016 14.311L14.3297 12.0047L10.4016 9.69849V14.311Z" fill="black" />
                        <path d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM18 14.1469C18 16.2141 15.9328 16.2141 15.9328 16.2141H8.06719C6 16.2141 6 14.1469 6 14.1469V9.85781C6 7.79062 8.06719 7.79063 8.06719 7.79063H15.9328C18 7.79063 18 9.85781 18 9.85781V14.1469Z" fill="black" />
                      </svg></a>

                    <a v-bind:href="form.tiktok" target="_blank" v-if="isShow.tiktok">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM4.8 9.08984C4.8 6.72441 6.72441 4.8 9.08984 4.8H14.9102C17.2756 4.8 19.2 6.72441 19.2 9.08984V14.9102C19.2 17.2756 17.2756 19.2 14.9102 19.2H9.08984C6.72441 19.2 4.8 17.2756 4.8 14.9102V9.08984ZM14.9102 17.7514C16.4793 17.7514 17.7514 16.4793 17.7514 14.9102V9.08984C17.7514 7.52067 16.4793 6.24864 14.9102 6.24864H9.08984C7.5207 6.24864 6.24864 7.52067 6.24864 9.08984V14.9102C6.24864 16.4793 7.5207 17.7514 9.08984 17.7514H14.9102ZM16.624 8.30361C16.624 8.79649 16.2244 9.19604 15.7316 9.19604C15.2387 9.19604 14.8391 8.79649 14.8391 8.30361C14.8391 7.81073 15.2387 7.41118 15.7316 7.41118C16.2244 7.41118 16.624 7.81073 16.624 8.30361ZM12 8.27565C9.94639 8.27565 8.27565 9.94639 8.27565 12C8.27565 14.0536 9.94639 15.7243 12 15.7243C14.0536 15.7243 15.7244 14.0536 15.7244 12C15.7244 9.94636 14.0536 8.27565 12 8.27565ZM12 14.2757C10.7431 14.2757 9.72429 13.2569 9.72429 12C9.72429 10.7431 10.7432 9.72429 12 9.72429C13.2569 9.72429 14.2757 10.7431 14.2757 12C14.2757 13.2568 13.2568 14.2757 12 14.2757Z"
                          fill="#1A1A1A" />
                      </svg></a>

                    <a v-bind:href="form.facebook" target="_blank" v-if="isShow.facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6281 0 24 5.40462 24 12.0731C24 18.1002 19.6125 23.0945 13.875 24V15.563L16.6711 15.563L17.2031 12.0731H13.875V9.80939C13.875 8.97378 14.2303 8.1562 15.3177 7.96485C15.4731 7.93752 15.6434 7.92297 15.8297 7.92297V7.92297H17.3438L17.3438 4.95185C17.3438 4.95185 15.9703 4.71605 14.6578 4.71605C13.9609 4.71605 13.3254 4.82404 12.7652 5.0348C11.1211 5.65329 10.125 7.15679 10.125 9.41324V12.0731H7.07813L7.0781 15.563H10.125V24C4.3875 23.0945 0 18.1002 0 12.0731C0 5.40462 5.3719 0 12 0Z" fill="#1A1A1A" />
                      </svg></a>

                    <a v-bind:href="form.linkedin" target="_blank" v-if="isShow.linkedin">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM8.64375 17.0203H6.30469V9.53437H8.64375V17.0203ZM7.41094 8.59687H7.39219C6.54375 8.59687 5.99531 8.025 5.99531 7.29844C5.99531 6.55781 6.5625 6 7.425 6C8.2875 6 8.81719 6.55781 8.83594 7.29844C8.84062 8.02031 8.29219 8.59687 7.41094 8.59687ZM18 17.0203H15.3469V13.1484C15.3469 12.1359 14.9344 11.4422 14.0203 11.4422C13.3219 11.4422 12.9328 11.9109 12.7547 12.3609C12.6891 12.5203 12.6984 12.7453 12.6984 12.975V17.0203H10.0688C10.0688 17.0203 10.1016 10.1578 10.0688 9.53437H12.6984V10.7109C12.8531 10.1953 13.6922 9.46406 15.0328 9.46406C16.6969 9.46406 18 10.5422 18 12.8578V17.0203Z" fill="black" />
                      </svg></a>

                    <a v-bind:href="form.twitter" target="_blank" v-if="isShow.twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM16.7906 10.1344C16.7953 10.2375 16.7953 10.3453 16.7953 10.4531C16.7953 13.7109 14.3156 17.4703 9.77813 17.4703C8.38594 17.4703 7.0875 17.0625 6 16.3641C6.19219 16.3875 6.38906 16.3969 6.59063 16.3969C7.74375 16.3969 8.80781 16.0031 9.65156 15.3422C8.57344 15.3234 7.65938 14.6109 7.35 13.6312C7.5 13.6594 7.65469 13.6734 7.81406 13.6734C8.03906 13.6734 8.25938 13.6453 8.46563 13.5844C7.33594 13.3594 6.4875 12.3609 6.4875 11.1656V11.1375C6.82031 11.3203 7.2 11.4328 7.60312 11.4469C6.94219 11.0063 6.50625 10.2469 6.50625 9.39375C6.50625 8.94375 6.62812 8.51719 6.83906 8.15156C8.05781 9.64687 9.87187 10.6266 11.9203 10.7297C11.8781 10.5516 11.8547 10.3641 11.8547 10.1672C11.8547 8.80781 12.9609 7.70156 14.3203 7.70156C15.0281 7.70156 15.6703 8.00156 16.1203 8.47969C16.6828 8.36719 17.2078 8.16563 17.6859 7.87969C17.5031 8.45625 17.1094 8.93906 16.6031 9.24375C17.1 9.18281 17.5781 9.05156 18.0187 8.85469C17.6906 9.35156 17.2734 9.78281 16.7906 10.1344Z"
                          fill="black" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="line line-mobile"></div>
        </div>
      </div>
      <!-- 右边的部分 -->
      <div class="box-right">
        <BookingBox v-bind:casionName="form.name" v-bind:address="form.websiteUrl"></BookingBox>
      </div>
    </div>

    <!-- 内容 -->
    <div class="spec-box hot-box">
      <h2 class="box-hd">
        You might also like
      </h2>
      <div class="item-list">
        <div class="item" v-for="(item, index) in promoteList" v-if="index<4" :key="item.id">
          <div class="item-pic">
            <img :src="item.casinoImages[0].url" alt="" @click="toCasinoDetail(item)">
            <i v-if="item.isSave == 1" class="icon-mark-saved" @click="collection(item)"></i>
            <i v-if="item.isSave == 0" class="icon-mark" @click="collection(item)"></i>
          </div>
          <h3 class="item-title line-1">
            {{ item.name }}
          </h3>
          <p class="item-address">
            {{item.cityName}},&nbsp;{{ item.countryName? `${item.countryName}` : '' }}
          </p>
        </div>
      </div>
    </div>
<travel-expert></travel-expert>

    <subscribe></subscribe>

    <!-- 页底 -->
    <kt-footer></kt-footer>
  </div>
</template>

<script>
import { saveCasino, cancelSaveCasino } from '@/api/index';
import { casinoDetailSlug, casinoPromoted } from '@/api/casino'

export default {
  name: 'CasinoPage',
  head () {
    return {
      link: [{ rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' }],
      script: [{ src: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js' }]
    }
  },
  data () {
    return {
      id: '',
      form: {
        casinoImages: []
      },
      promoteList: [],
      isMobile: false,
      email: '',
      telphone: '',
      lat: null,
      lng: null,
      markerArr: [],
      map: null,
      isShow: [],
      viewMore: 'View More',
      viewMoreGames: 'View More',
      articleBody: '',
      itemBody: ''
    }

  },
  created () {
    this.id = this.$route.params.id;
    if (this.id) {
      // this.getDestinationLandmarks();
    }
    if (this.id) this.getCasinoDetail();
    this.getCasinoPromoted();
  },
  mounted () {
    if (!window.isMobile) {
      this.initMap();
    }
    this.isMobile = window.isMobile;
  },
  watch: {
    '$route' (to, from) {
      // console.log(to,from,"watch");
      if (to.path == '/casino-profile') {
        // console.log('触发监听事件');
        location.reload();
        window.scrollTo(0, 0);
      }
    }
  },
  methods: {
    handleUrlTo (url) {
      window.location.href = url
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
    initMap () {
      // console.log("经纬度", this.lat + "---" + this.lng);
      mapboxgl.accessToken = 'pk.eyJ1Ijoia2VudGF2aXAiLCJhIjoiY2xwYjdvaHM2MGh2eTJxcDk0MmI3d2Q5ZCJ9.luCk1ALDEYK9AR9Ik9-0hg'; //
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.lng, this.lat], // 设置初始地图中心点
        zoom: 13
      });
      // this.getDestinationLandmarks()
    },
    getCookie (name) {
      var cookie_start = document.cookie.indexOf(name);
      var cookie_end = document.cookie.indexOf(";", cookie_start);
      return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    },
    collection (item) {
      let memberId = this.getCookie("userId");
      if (memberId == '') {
        this.$router.push({ path: '/login' })
        return;
      }

      if (item.isSave == 0) {
        saveCasino({ casinoId: item.id }).then(res => {
          //   this.$message({
          //       message: 'Collection successful',
          //       type: 'success',
          // customClass:'messageIndex'
          //   });
          item.isSave = 1
          console.log("success")
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
      this.getCasinoPromoted();
    },
    getCasinoDetail () {
      this.markerArr = []
      let params = {
        slug: this.id
      };
      casinoDetailSlug(params).then((res) => {
        console.log(res.data, "casinoDetailcasinoDetailcasinoDetail");
        this.lng = res.data.longitude;
        this.lat = res.data.latitude;
        this.initMap() //设置初始点
        // if (index == 0) {
        //   this.map.flyTo({ center: [landmark.longitude, landmark.latitude] })
        // }
        let popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3>' + res.data.name + '</h3><img src="' + res.data.casinoImages[0].url + '" alt="' + res.data.name + '" style="width:100%;">');

        let markerArr = new mapboxgl.Marker()
          .setLngLat([res.data.longitude, res.data.latitude])
          .setPopup(popup)
          .addTo(this.map);
        this.markerArr.push(markerArr)
        if (res.data) {
          this.form = res.data;
          this.email = 'mailto:' + res.data.email
          this.telphone = 'tel:' + res.data.phone
          this.isShow.youtube = (res.data.youtube != null)
          this.isShow.tiktok = (res.data.tiktok != null)
          this.isShow.facebook = (res.data.facebook != null)
          this.isShow.linkedin = (res.data.linkedin != null)
          this.isShow.twitter = (res.data.twitter != null)
          this.form.youtube = 'https://www.youtube.com/' + res.data.youtube
          this.form.tiktok = 'https://www.tiktok.com/' + res.data.tiktok
          this.form.facebook = 'https://www.facebook.com/' + res.data.facebook
          this.form.linkedin = 'https://www.linkedin.com/' + res.data.linkedin
          this.form.twitter = 'https://twitter.com/' + res.data.twitter
          // console.log("this.form >>>", this.form)
          console.log("this.form >>>", this.isShow)
        }
      })
    },
    getCasinoPromoted () {
      casinoPromoted().then((res) => {
        this.promoteList = res.data;
      })
    },
    goTrip () {
      window.open('https://www.trip.com');
    },
    toBooking () {
      window.open('https://Booking.com');

    },
    toHotel () {
      window.open('https://www.hotels.com');
    },
    toWebsite () {
      let url = this.form.websiteUrl
      window.open(url);
    },
    viewArticleMore () {
      if (this.isMobile) {
        if ('View More' == this.viewMore) {
          this.viewMore = 'View Less';
          this.articleBody = 'height:auto;';
        } else {
          this.viewMore = 'View More';
          this.articleBody = '';
        }
      }
    },
    viewGamesMore () {
      if (this.isMobile) {
        if ('View More' == this.viewMoreGames) {
          this.viewMoreGames = 'View Less';
          this.itemBody = 'height:auto;';
        } else {
          this.viewMoreGames = 'View More';
          this.itemBody = '';
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  // background: #F5F5F5;
  background-color: #f5f5f5;
}
.icon-mark-saved {
  display: block;
  width: 0.32rem;
  height: 0.32rem;
  position: absolute;
  right: 0.16rem;
  top: 0.16rem;
  background: url('~assets/images/icon-mark-saved.png');
  background-size: 100%;
}
.map-box {
  width: 100%;
  height: 3.88rem;
}

.line {
  width: 6rem;
  height: 0.01rem;
  background: #dadada;
}

.select-wrap {
  transform: translate(-0.4rem, 0.1rem);
  width: 9.12rem;
  padding: 0;

  .popper__arrow {
    display: none;
  }

  .select-con {
    padding: 0.06rem 0;

    .select-hd {
      font-size: 0.12rem;
      font-weight: 400;
      height: 0.3rem;
      line-height: 0.3rem;
      padding: 0 0.16rem;
    }

    .item-list {
      .item {
        cursor: pointer;
        height: 0.32rem;
        padding: 0 0.16rem;
        line-height: 0.32rem;
        font-size: 0.12rem;
        display: flex;
        align-items: center;
        font-weight: 300;

        .icon {
          width: 0.09rem;
          height: 0.12rem;
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

.view-photo {
  display: flex;
  padding: 0.08rem 0.24rem 0 0.24rem;
  background: #f5f5f5;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

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
  }
}

.body-center {
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  .box-left {
    //padding: 0 0 0 .36rem;
    background-color: #f5f5f5;
    flex: 1;

    .title {
      color: #1a1a1a;
      // height: .4rem;
      font-size: 0.32rem;
      font-weight: 400;
      line-height: 100%;
      letter-spacing: -1.28px;
      text-align: left;
    }
  }

  .box-right {
    //padding: 0 .36rem 0 0;
    background-color: #f5f5f5;
    flex: 1;

    .view-article {
      margin-top: 0.4rem;
      padding: 0 0.16rem 0 0.16rem;
      width: 6rem;
      border-radius: 8px;
      border: 1px solid #dadada;
      background: #fefefe;
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

    .card-box2 {
      display: flex;
      margin: 0.24rem 0 0.12rem 0;

      .box-item-1 {
        display: flex;
        align-items: center;
        justify-content: center;
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
    }
  }
}

.navigator {
  display: inline-flex;
  color: rgba(26, 26, 26, 0.6);
  margin: 0.32rem 0.32rem 0 0.32rem;
  height: 0.3rem;
  font-size: 0.14rem;
  font-style: normal;
  font-weight: 400;
  flex-direction: row;
  align-items: center;

  .icon-svg {
    margin: 0 0.04rem 0 0.04rem;
  }
}

.view-article {
  margin: 0 0.32rem 0 0.32rem;

  .casino-title {
    margin: 0.16rem 0 0.16rem 0;
    color: #1a1a1a;
    text-align: left;
    font-size: 0.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.6px;
  }

  .casino-subtitle {
    color: rgba(26, 26, 26, 0.4);
    font-family: Rubik;
    font-size: 0.16rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.16rem;
    /* 100% */
  }

  .item-views {
    margin-top: 0.16rem;

    .item-1 {
      display: inline-block;
      margin: 0.05rem 0;
      margin-right: 0.24rem;
      background: url('~assets/images/views-1.png');
      background-repeat: no-repeat;
      background-position: left center;
      height: 0.2rem;
      line-height: 0.2rem;
      background-size: auto 0.2rem;
      padding-left: 0.8rem;
      font-size: 0.12rem;
    }

    .item-2 {
      display: inline-block;
      background: url('~assets/images/views-2.png');
      background-repeat: no-repeat;
      background-size: auto 0.16rem;
      padding-left: 0.75rem;
      height: 0.16rem;
      line-height: 0.16rem;
      background-position: left center;
      font-size: 0.12rem;
    }
  }

  .article-1 {
    .article-title {
      margin: 0.24rem 0 0.16rem 0;
      color: #1a1a1a;
      font-size: 0.32rem;
      font-weight: 400;
      line-height: 124%;
      letter-spacing: -1.28px;
      text-align: left;
    }

    .article-body {
      color: #5f6d7a;
      margin-bottom: 0.24rem;
      width: 6rem;
      color: #5f6d7a;
      font-size: 0.16rem;
      font-weight: 300;
      line-height: 140%;
      /* 22.4px */
      white-space: pre-wrap;
    }

    .article-more {
      display: none;
    }
  }

  .item-stats {
    margin: 0.16rem 0 0.16rem 0;

    .item-box {
      display: flex;
      margin-top: 0.16rem;
      margin-bottom: 0.24rem;
    }

    .white-box {
      width: 2.92rem;
      height: 1.92rem;
      flex-shrink: 0;
      border-radius: 10px;
      border: 1px solid rgba(26, 26, 26, 0.16);

      background: #fefefe;

      .item-line {
        height: 0.48rem;
        padding: 0 0.16rem 0 0.16rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .line-left {
          color: #1a1a1a;
          font-size: 0.16rem;
          font-weight: 300;
          line-height: 0.16rem;
          /* 100% */
        }

        .line-right {
          color: rgba(26, 26, 26, 0.87);
          text-align: right;
          font-size: 0.16rem;
          font-weight: 600;
          line-height: 0.16rem;
          /* 100% */
        }
      }

      .line2 {
        width: 2.6rem;
        height: 0.01rem;
        background: rgba(26, 26, 26, 0.16);
        margin: 0 auto;
      }
    }
  }

  .item-games {
    margin: 0.24rem 0 0.24rem 0;

    .item-more {
      display: none;
    }

    .item-body {
      width: 6rem;

      .item-line {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.08rem;
        height: 1rem;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #f5f5f5 100%);

        .item-1 {
          display: flex;
          width: 33.3%;
          margin-top: 0.16rem;
          color: rgba(26, 26, 26, 0.6);
          font-size: 0.16rem;
          font-weight: 400;
          line-height: 0.24rem;
          /* 100% */
          letter-spacing: -0.32px;
          text-transform: capitalize;
        }
      }

      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 0.08rem;
      }
    }
  }

  .item-hotel {
    margin: 0.16rem 0 0.24rem 0;

    .card-box {
      display: flex;
      height: 2.22rem;
      margin-top: 0.16rem;
      border-radius: 0.08rem;
      border: 1px solid #dadada;

      background: rgba(254, 254, 254, 0.94);

      .item-box-left {
        width: 2.92rem;
        height: 2.2rem;
        flex-shrink: 0;
        position: relative;

        .trending {
          position: absolute;
          left: 0.08rem;
          top: 0.08rem;

          display: inline-flex;
          padding: 0.04rem;
          justify-content: center;
          align-items: center;
          gap: 0.1rem;
          border-radius: 2px;
          background: #ffb800;
        }
      }

      .item-box-right {
        padding: 0.16rem 0.16rem 0.16rem 0.15rem;
        width: 3.07rem;
        display: flex;
        flex-direction: column;

        .title {
          color: #1a1a1a;

          font-size: 0.18rem;
          font-weight: 400;
          line-height: 0.24rem;
          /* 133.333% */
          letter-spacing: -0.72px;
        }

        .subtitle {
          width: 2.32rem;
          margin-top: 0.04rem;
          margin-bottom: 0.08rem;
          color: rgba(26, 26, 26, 0.4);
          font-size: 0.12rem;
          font-weight: 400;
          line-height: 0.16rem;
          /* 133.333% */
          letter-spacing: -0.48px;
        }

        .point {
          position: relative;
          display: flex;
          height: 0.16rem;

          img {
            width: auto;
            height: auto;
          }

          margin-bottom: 0.32rem;

          .item-1 {
            display: flex;
            color: #0c3b7c;
            font-size: 0.16rem;
            font-weight: 600;
            line-height: 0.16rem;
            /* 100% */
          }

          .item-2 {
            margin-right: 0.16rem;
            display: flex;
            color: #1a1a1a;
            font-size: 0.14rem;
            font-weight: 300;
            line-height: 0.16rem;
            /* 114.286% */
            align-items: center;

            .block {
              width: 0.04rem;
              height: 0.04rem;
              background: #1a1a1a;
              margin: 0 0.08rem 0 0.08rem;
            }
          }

          .item-3 {
            display: flex;
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.16rem;
            font-weight: 400;
            line-height: 0.16rem;
            /* 100% */
          }

          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -0.16rem;
            width: 0.4rem;
            height: 0.01rem;
            background: rgba(26, 26, 26, 0.16);
          }
        }

        .green {
          img {
            width: auto;
            height: auto;
            margin-right: 0.08rem;
          }

          margin-top: 0.08rem;
          display: flex;
          color: #2c9056;
          font-size: 0.12rem;
          font-style: normal;
          font-weight: 400;
          line-height: 0.16rem;
          /* 133.333% */
          letter-spacing: -0.0048rem;
        }

        .item-price {
          display: flex;
          justify-content: space-between;
          margin-top: auto;
          color: rgba(26, 26, 26, 0.6);

          font-family: Rubik;
          font-size: 0.14rem;
          font-style: normal;
          font-weight: 400;
          line-height: 0.16rem;

          /* 114.286% */
          .boldFont {
            margin: 0 0.02rem;
            color: rgba(26, 26, 26, 0.87);
            font-size: 0.18rem;
            font-style: normal;
            font-weight: 400;
            line-height: 0.18rem;
            /* 100% */
          }

          .left {
            display: flex;
          }

          .right {
            color: rgba(26, 26, 26, 0.6);

            font-family: Rubik;
            font-size: 0.12rem;
            font-style: normal;
            font-weight: 300;
            line-height: 0.16rem;
            /* 133.333% */
          }
        }
      }
    }

    .lowest-price {
      width: 0.99rem;
      height: 0.2rem;
      border-radius: 0.04rem;
      border: 0.01rem solid #00bc93;
      margin: 0.14rem 0.46rem -0.35rem 4.55rem;
      background: #fefefe;

      .text {
        color: #00bc93;
        font-size: 0.12rem;
        align-items: center;
      }
    }

    .box-bottom {
      overflow: hidden;
      margin-top: 0.16rem;

      .item {
        margin-top: 0.08rem;
        padding: 0.16rem;
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 0.08rem;
        border: 1px solid #dadada;
        background-color: rgba(0, 188, 147, 0.08);

        .left-content {
          .label {
            display: flex;
            align-items: center;

            .logo {
              width: 0.24rem;
              height: 0.24rem;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .text {
              padding-left: 0.08rem;
              font-size: 0.12rem;
            }
          }

          .describle {
            color: rgba(26, 26, 26, 0.4);
            font-size: 0.12rem;
            margin-top: 0.12rem;
          }
        }

        .center {
          padding-left: 1rem;

          .day-price {
            padding-left: 0.83rem;
            font-size: 0.16rem;
          }

          .week-price {
            padding-left: 0.2rem;
            margin-top: 0.04rem;
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.12rem;

            .price {
              color: #1a1a1a;
              font-size: 0.12rem;
            }
          }
        }

        .right-content {
          .button {
            border-radius: 0.08rem;
            background-color: #ff3263;
            color: #fefefe;
            font-size: 0.14rem;
          }
        }

        .right-content2 {
          .button {
            border: 1px solid #ff3263;
            border-radius: 0.08rem;
            background-color: #fefefe;
            color: #ff3263;
            font-size: 0.14rem;
          }
        }
      }
    }
  }

  .item-location {
    width: 6rem;
    margin-top: 0.24rem;
    margin-bottom: 0.24rem;

    .location-map {
      width: 6rem;
      height: 4rem;
    }

    .top {
      margin-bottom: 0.16rem;
      width: 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 0.16rem;
        height: 0.16rem;
      }

      .top-right {
        align-items: center;
        display: flex;
        margin-left: auto;
        color: #3451ff;

        font-family: Rubik;
        font-size: 0.16rem;
        font-style: normal;
        font-weight: 500;
        line-height: 0.16rem;
        /* 100% */
      }
    }
  }

  .item-additional {
    margin: 0.24rem 0 0.8rem 0;

    .white-box {
      padding: 0.08rem 0;

      .line {
        width: 2.76rem;
        height: 0.01rem;
        background: rgba(95, 109, 122, 0.16);
      }

      margin-top: 0.16rem;
      width: 6rem;
      border-radius: 0.1rem;
      border: 1px solid rgba(26, 26, 26, 0.16);
      background: #fefefe;

      .item-line {
        height: 0.48rem;
        display: flex;
        color: #1a1a1a;
        font-size: 0.16rem;
        font-weight: 300;
        line-height: 0.16rem;

        &.address {
          height: auto !important;
          line-height: normal !important;
          padding-top: 0.16rem;
          .item1 {
            width: 100% !important;
            align-items: flex-start;
            padding-bottom: 0.16rem;
            .right {
              line-height: normal !important;
            }
          }
        }

        .item {
          width: 2.76rem;
          margin: 0 0.16rem 0 0.16rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .left {
            color: #1a1a1a;
            font-family: Rubik;
            font-size: 0.16rem;
            font-style: normal;
            font-weight: 300;
            line-height: 0.16rem;
            /* 100% */
          }

          .right {
            color: rgba(26, 26, 26, 0.87);

            text-align: right;
            font-family: Rubik;
            font-size: 0.16rem;
            font-style: normal;
            font-weight: 600;
            line-height: 0.16rem;
            /* 100% */
          }

          .right-1 {
            color: #3451ff;

            text-align: right;
            font-family: Rubik;
            font-size: 0.14rem;
            font-style: normal;
            font-weight: 600;
            line-height: 0.16rem;
            /* 114.286% */
            text-decoration-line: underline;
          }

          .right-2 {
            color: #3451ff;

            text-align: right;
            font-family: Rubik;
            font-size: 0.16rem;
            font-style: normal;
            font-weight: 600;
            line-height: 0.16rem;
            /* 114.286% */
            text-decoration-line: underline;
          }
        }

        .item.line {
          border-bottom: solid 1px rgba(26, 26, 26, 0.16);
        }

        .item1 {
          border-bottom: solid 1px rgba(26, 26, 26, 0.16);
          width: 2.76rem;
          margin: 0 0.16rem 0 0.16rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .left {
            color: #1a1a1a;
            font-family: Rubik;
            font-size: 0.16rem;
            font-style: normal;
            font-weight: 300;
            line-height: 0.16rem;
            /* 100% */
          }

          .right {
            color: rgba(26, 26, 26, 0.87);

            text-align: right;
            font-family: Rubik;
            font-size: 0.16rem;
            font-style: normal;
            font-weight: 600;
            line-height: 0.16rem;
            /* 100% */
          }

          .right-1 {
            color: #3451ff;

            text-align: right;
            font-family: Rubik;
            font-size: 0.14rem;
            font-style: normal;
            font-weight: 600;
            line-height: 0.16rem;
            /* 114.286% */
            text-decoration-line: underline;
          }

          .right-2 {
            color: #3451ff;

            text-align: right;
            font-family: Rubik;
            font-size: 0.16rem;
            font-style: normal;
            font-weight: 600;
            line-height: 0.16rem;
            /* 114.286% */
            text-decoration-line: underline;
          }
        }
      }
    }
  }

  .line-mobile {
    display: none;
  }
}

.banner {
  height: 4.8rem;
  background: url('~assets/images/banner-1.png') no-repeat;
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

  .search-box {
    margin-top: 0.24rem;
    display: flex;
    background: #fefefe;
    width: 9.12rem;
    height: 0.64rem;
    padding: 0.08rem;
    border-radius: 0.12rem;

    .inp-box {
      margin-right: 0.08rem;
      flex: 1;
      display: flex;
      padding-left: 0.16rem;
      align-items: center;
      border: 1px solid rgba(218, 218, 218, 0.6);
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

      .el-input__inner {
        height: 0.4rem;
        line-height: 0.4rem;
        border-radius: 0.08rem;
        border: none;
      }
    }

    .search-btn {
      width: 1.52rem;
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

  .nav-type {
    margin-top: 0.24rem;
    border-radius: 0.4rem;
    border: 1px solid #fefefe;
    background: rgba(254, 254, 254, 0.08);
    backdrop-filter: blur(4px);

    .item {
      font-size: 0.16rem;
      font-weight: 500;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      padding: 0 0.16rem;
      border-radius: 0.4rem;
      display: inline-block;
      cursor: pointer;
    }

    .item.active {
      color: #ff3263;
      background: #fefefe;
    }
  }
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

.hot-box {
  padding: 0.64rem 0.24rem;
  background: #fefefe;

  h2 {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  .item-list {
    margin-top: 0.4rem;
    display: flex;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;

    .item {
      flex: 1;
      width: 0;
      margin: 0 0.08rem;

      .item-pic {
        height: 4rem;
        border-radius: 0.08rem;
        overflow: hidden;
      }

      .item-title {
        font-family: Rubik;
        margin-top: 0.16rem;
        color: rgba(26, 26, 26, 0.87);
        font-size: 0.2rem;
      }

      .item-address {
        position: relative;
        margin-top: 0.04rem;
        font-size: 0.14rem;
        color: rgba(26, 26, 26, 0.6);

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.08rem;
          width: 0.4rem;
          height: 0.01rem;
          background: rgba(26, 26, 26, 0.16);
        }
      }

      .item-num {
        margin-top: 0.18rem;
        font-size: 0.12rem;
      }
    }
  }
}

.flow-box {
  padding: 0.64rem 0.24rem;
  background: #f5f5f5;

  .item-list {
    margin-top: 0.4rem;
    display: flex;

    .item {
      flex: 1;
      margin: 0 0.08rem;
      background: #fefefe;
      border-radius: 0.08rem;
      padding: 0.24rem 0.4rem;

      .item-pic {
        height: 2.4rem;
        background: rgba(218, 218, 218, 0.16);
      }

      .item-title {
        font-weight: 500;
        margin-top: 0.24rem;
        color: rgba(26, 26, 26, 0.87);
        font-weight: 500;
        font-size: 0.2rem;
        text-align: center;
      }

      .item-desc {
        margin-top: 0.08rem;
        text-align: center;
        color: rgba(26, 26, 26, 0.6);
        font-size: 0.16rem;
      }
    }
  }
}

.adv-box {
  width: 100%;
  height: 3.44rem;
  background: linear-gradient(110deg, #ff3263 36.89%, #ee2344 73.36%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .adv-text {
    width: 6.5rem;
    font-size: 0.56rem;
    text-align: center;
    color: #fefefe;
  }

  .adv-btn {
    margin-top: 0.24rem;
    width: 1.88rem;
    height: 0.48rem;
    padding: 0.12rem 0.2rem;
    font-size: 0.14rem;
    color: #ff3263;
  }
}

.spec-box {
  .box-hd {
    padding-left: 0.16rem;
    text-align: left;
  }

  .item-list {
    .item {
      .item-pic {
        position: relative;
        height: 2rem;

        .icon-mark {
          display: block;
          width: 0.32rem;
          height: 0.32rem;
          position: absolute;
          right: 0.16rem;
          top: 0.16rem;
          background: url('~assets/images/icon-mark.png');
          background-size: 100%;
        }
      }

      .item-views {
        margin-top: 0.16rem;

        .item-1 {
          display: inline-block;
          margin: 0.05rem 0;
          margin-right: 0.24rem;
          background: url('~assets/images/views-1.png');
          background-repeat: no-repeat;
          background-position: left center;
          height: 0.2rem;
          line-height: 0.2rem;
          background-size: auto 0.2rem;
          padding-left: 0.8rem;
          font-size: 0.12rem;
        }

        .item-2 {
          display: inline-block;
          background: url('~assets/images/views-2.png');
          background-repeat: no-repeat;
          background-size: auto 0.16rem;
          padding-left: 0.75rem;
          height: 0.16rem;
          line-height: 0.16rem;
          background-position: left center;
          font-size: 0.12rem;
        }
      }
    }
  }
}

.art-content {
  padding: 0.16rem;
  background: #fefefe;
  border-bottom-left-radius: 0.08rem;
  border-bottom-right-radius: 0.08rem;

  .art-msg {
    height: 0.2rem;
    display: flex;
    align-items: center;
  }

  .art-type {
    font-size: 0.12rem;
    padding: 0.04rem;
    border-radius: 0.02rem;
    background: #ffb800;
  }

  .art-type.type-2 {
    background: #3451ff;
    color: #fefefe;
  }

  .art-time {
    margin-left: 0.16rem;
    color: rgba(26, 26, 26, 0.6);
    font-size: 0.14rem;
  }

  .art-title {
    margin-top: 0.16rem;
    font-size: 0.2rem;
  }

  .art-desc {
    position: relative;
    padding-top: 0.16rem;
    color: rgba(26, 26, 26, 0.6);
    font-size: 0.14rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.08rem;
      width: 0.4rem;
      height: 0.01rem;
      background: rgba(26, 26, 26, 0.16);
    }
  }
}

.article-box {
  padding: 0.64rem 0.24rem;
  background: #f5f5f5;

  .box-hd {
    padding-left: 0.16rem;
    text-align: left;
  }

  .art-layout {
    margin-top: 0.24rem;
    display: flex;

    .art-left {
      height: 5.6rem;
      background: #fefefe;
      // width: 5.64rem;
      // flex-shrink: 0;
      border-bottom-left-radius: 0.08rem;
      border-bottom-right-radius: 0.08rem;

      .art-pic {
        height: 3.72rem;
        border-top-left-radius: 0.08rem;
        border-top-right-radius: 0.08rem;
        overflow: hidden;
      }

      .art-content {
        padding-top: 0.22rem;
      }
    }

    .art-center {
      width: 3.34rem;
      height: 5.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0.16rem;
      flex-shrink: 0;

      .art-pic {
        height: 1.6rem;
      }

      .art-title {
        margin-top: 0.08rem;
      }

      // .item+.item{
      //     margin-top: .24rem;
      // }
    }

    .art-right {
      flex: 1;
      height: 5.6rem;
      margin-left: 0.16rem;
      background: #fefefe;
      border-radius: 0.08rem;
      padding: 0.24rem 0.24rem;

      .art-hd {
        color: #3451ff;
        font-size: 0.2rem;
        padding-bottom: 0.16rem;
        border-bottom: solid 1px rgba(26, 26, 26, 0.16);
      }

      .item-list {
        .item {
          padding: 0.16rem 0;
          border-bottom: solid 1px rgba(26, 26, 26, 0.16);

          .item-title {
            color: rgba(26, 26, 26, 0.87);
            font-family: Rubik;
            font-size: 0.16rem;
          }

          .item-time {
            margin-top: 0.02rem;
            font-size: 0.14rem;
            color: rgba(26, 26, 26, 0.6);
          }

          .item-desc {
            position: relative;
            font-size: 0.14rem;
            padding-top: 0.16rem;
            color: rgba(26, 26, 26, 0.6);

            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0.08rem;
              width: 0.4rem;
              height: 0.01rem;
              background: rgba(26, 26, 26, 0.16);
            }
          }
        }
      }
    }
  }
}

.subscribe-box {
  height: 3.04rem;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .subscribe-tips {
    font-size: 0.56rem;
  }

  .subscribe-desc {
    margin-top: 0.08rem;
    font-size: 0.2rem;
  }

  .subscribe-form {
    width: 4.48rem;
    margin-top: 0.32rem;
    display: flex;
    padding: 0.08rem;
    border-radius: 0.08rem;
    border: 1px solid rgba(218, 218, 218, 0.6);

    .form-btn {
      border-radius: 0.08rem;
      padding: 0.12rem 0.2rem;
    }

    .inp-box {
      margin-right: 0.08rem;
      flex: 1;
      display: flex;
      padding-left: 0.16rem;
      align-items: center;
      border: 1px solid rgba(218, 218, 218, 0.6);
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

      .el-input__inner {
        height: 0.4rem;
        line-height: 0.4rem;
        border-radius: 0.08rem;
        border: none;
      }
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder,
    input::placeholder,
    textarea::placeholder {
      color: #1a1a1a;
    }
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

::v-deep .el-carousel__arrow {
  display: none;
}

::v-deep .el-carousel__container {
  width: 100%;
  height: 200px;
}

::v-deep .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #1a1a1a;
}

.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .navigator {
    font-family: Rubik;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 16px;
    margin-left: 20px;
  }

  .view-article .casino-title {
    font-family: Rubik;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.04em;
    text-align: left;
    color: rgba(26, 26, 26, 1);
  }

  .view-article .casino-subtitle {
    font-family: Rubik;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.04em;
    text-align: left;
    color: rgba(26, 26, 26, 0.4);
  }

  .view-article .article-1 .article-title {
    font-family: Rubik;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.04em;
    text-align: left;
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

  .banner {
    display: block;
    padding-top: 0;
    height: 6.64rem;
    background: url('~assets/images/banner-2.png') no-repeat center bottom;
    background-size: 100% 3.93rem;

    .tab {
      display: flex;
      width: 100%;

      .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        height: 0.4rem;
        color: rgba(26, 26, 26, 0.4);
        font-size: 0.14rem;
        border: 1px solid #dadada;
        background: #f5f5f5;
      }

      .item.active {
        position: relative;
        border-color: transparent;
        background: #fefefe;
      }

      .item.active::before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        padding: 0 0.01rem;
        top: -0.01rem;
        left: -0.01rem;
        width: 100%;
        height: 0.02rem;
        background: #ff3263;
      }
    }

    .tab-con {
      padding: 0.24rem 0.1rem 0.16rem 0.1rem;
      width: 100%;
      background: #fefefe;
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
    }

    .tab-con.tab-2 {
      h1 {
        padding: 0 0.6rem;
      }

      h3 {
        display: block;
        color: #1a1a1a;
        font-size: 0.14rem;
      }
    }

    h1 {
      padding: 0 0.7rem;
      font-size: 0.24rem;
      color: #1a1a1a;
    }

    h3 {
      display: none;
      color: #1a1a1a;
      font-size: 0.14rem;
    }

    .nav-type {
      display: none;
    }
  }

  .search-box {
    // display: none;
    display: block;
    height: auto;
    width: 100%;
    margin-top: 0.1rem;

    .inp-box {
      margin-top: 0.08rem;
    }

    .search-btn {
      margin-top: 0.16rem;
      width: 100%;
    }
  }

  .box-hd {
    font-size: 0.24rem;
  }

  .box-desc {
    font-size: 0.16rem;
  }

  .hot-box {
    padding: 0.64rem 0.2rem;

    .list-wrap {
      width: 100%;
      overflow: auto;
    }

    .item-list {
      width: 10.56rem;
      display: block;
      margin-top: 0.24rem;

      .item {
        width: 2.48rem;
        float: left;

        .item-pic {
          height: 3rem;
          border-radius: 0.06rem;
        }
      }
    }
  }

  .flow-box {
    padding: 0.64rem 0.2rem;

    .item-list {
      display: block;

      .item {
        margin: 0.16rem 0 0;
        padding: 0.16rem;

        .item-title {
          font-size: 0.18rem;
        }

        .item-desc {
          font-size: 0.14rem;
        }
      }
    }
  }

  .adv-box {
    .adv-text {
      width: 3.36rem;
      font-size: 0.38rem;
    }
  }

  .spec-box {
    .box-hd {
      padding-left: 0;
    }

    .item-list {
      width: 100%;

      .item {
        float: none;
        margin: 0;
        width: 100%;
        margin-top: 0.24rem;
        padding-bottom: 0.24rem;
        border-bottom: solid 1px rgba(26, 26, 26, 0.16);
        .item-pic {
          height: 2rem;
        }
      }
    }
  }

  .article-box {
    padding: 0.64rem 0.2rem;

    .box-hd {
      padding-left: 0;
    }

    .art-layout {
      margin-top: 0.16rem;
      display: block;

      .art-left {
        height: auto;

        .art-pic {
          height: 2.24rem;
        }
      }

      .art-center {
        width: auto;
        height: auto;
        margin-left: 0;

        .item {
          margin-top: 0.24rem;
        }
      }

      .art-content {
        .art-title {
          font-size: 0.18rem;
        }

        .art-desc {
          overflow: visible;
          -webkit-line-clamp: unset;
        }
      }

      .art-right {
        height: auto;
        margin-left: 0;
        margin-top: 0.24rem;
      }
    }
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

  .view-photo {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 232px;

    .item-picture {
      margin: 0;
      height: 100%;
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  ::v-deep .el-carousel__container {
    height: 200px;
    position: relative;
    width: 100%;
  }

  ::v-deep .el-carousel__arrow {
    display: none;
  }

  .body-center {
    display: flex;
    flex-direction: column;

    .line {
      width: 3.36rem;
    }

    .view-article {
      margin: 0 0.2rem;
    }

    .box-left {
      padding: 0;

      .article-body {
        width: 3.36rem;
      }

      .article-1 {
        .article-body {
          height: 0.9rem;
          width: 3.36rem;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #f5f5f5 100%);
          margin-bottom: 0.08rem;
          font-family: Rubik;
          font-size: 14px;
          font-weight: 300;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: #1a1a1a;
        }

        .article-more {
          display: block;
          color: #3451ff;
          font-size: 0.14rem;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          margin-bottom: 0.24rem;
        }
      }

      .title {
        font-family: Rubik;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.04em;
        text-align: left;
      }

      .item-box {
        display: flex;
        overflow-x: scroll;
        width: 100%;

        .white-box {
          width: 100%;
          float: left;
          max-width: 264px;
          height: auto;
        }
      }

      .item-games {
        .item-body {
          width: auto;
          height: 56px;

          .item-line {
            display: flex;
            flex-wrap: wrap;
            height: auto;

            .item-1 {
              width: auto !important;
              border: 1px solid;
              background-color: #fff;
              margin-right: 4px;
              padding: 4px 12px;
              width: auto !important;
              height: 24px;
              border-radius: 32px;
              gap: 4px;

              font-family: Rubik;
              font-size: 12px;
              font-weight: 400;
              line-height: 16px;
              letter-spacing: -0.02em;
              margin-top: 8px;

              img {
                height: 16px;
                margin-right: auto;
                width: 16px;
              }
            }
          }
        }

        .item-more {
          display: block;
          color: #3451ff;
          font-style: normal;
          margin-top: 4px;
          font-family: Rubik;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
        }
      }

      .item-hotel {
        .card-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 276px;
          border-radius: 8px;

          .item-box-left {
            width: 100%;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            height: 120px;
          }

          .item-box-right {
            position: relative;
            padding: 0.16rem 0;

            .item-price {
              display: flex;
              flex-direction: column;
              position: absolute;
              bottom: 0.14rem;
              right: 0.1rem;

              .left {
                margin-bottom: 0.08rem;
              }

              .right {
                text-align: right;
              }
            }

            .subtitle {
              width: 100%;
              font-family: Rubik;
              font-size: 10px;
              font-weight: 400;
              line-height: 16px;
              letter-spacing: -0.04em;
              text-align: left;
            }

            .point {
              margin-bottom: 16px;
            }
          }
        }
      }

      .item-location {
        width: 3.36rem;
        height: auto;

        .location-map {
          display: block;
          overflow: hidden;
          width: 3.36rem;
          height: 3.32rem;
          border-radius: 0.12rem;
          border: 1px solid rgba(26, 26, 26, 0.16);
        }
      }

      .item-additional {
        margin-bottom: 0.24rem;

        .white-box {
          padding: 0.16rem 0;
          width: 3.36rem;

          .item-line {
            display: flex;
            flex-direction: column;
            height: auto;

            &.address {
              height: auto !important;
              line-height: normal !important;
              padding-top: 0.16rem;
              .item1 {
                width: auto !important;
                align-items: flex-start;
                padding-bottom: 0.16rem;
                .right {
                  line-height: normal !important;
                }
              }
            }

            .item1 {
              width: auto;
              height: 0.48rem;
              .left {
                font-family: Rubik;
                font-size: 14px;
                font-weight: 300;
                line-height: 16px;
                letter-spacing: 0em;
                text-align: left;
              }

              .right {
                font-family: Rubik;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                letter-spacing: 0em;
                text-align: right;
              }

              .right-1 {
                font-family: Rubik;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                letter-spacing: 0em;
                text-align: right;
              }
            }

            .item {
              width: auto;
              height: 0.48rem;
              .right-2 {
                font-family: Rubik;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                letter-spacing: 0em;
                text-align: right;
              }
            }
          }
        }
      }

      .line-mobile {
        display: block;
        margin-bottom: 0.24rem;
      }
    }

    .box-right {
      padding: 0;
      display: none;

      .view-article {
        margin: 0;
        padding: 0.2rem;
        border: 0;

        .item-hotel {
          width: 3.36rem;
          height: auto;

          .card-box {
            display: flex;
            flex-direction: column;
            width: 3.36rem;
            height: auto;

            .item-box-left {
              width: auto;
            }
          }
        }
      }
    }
  }

  .hot-box {
    padding: 0rem 0.2rem;
    background: #f5f5f5;
    .box-hd {
      font-family: Rubik;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.04em;
      text-align: left;
    }
  }

  .footer {
    padding: 0.64rem 0.2rem 0.24rem;
    flex-direction: column-reverse;

    // position: relative;
    .footer-left {
      // position: absolute;
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

.exact-dates {
  display: flex;
  align-items: center;

  .item {
    color: rgba(26, 26, 26, 0.6);
    font-size: 0.14rem;
    padding: 0 0.08rem;
    border-radius: 0.04rem;
    height: 0.32rem;
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
  .type-hd {
    font-size: 0.2rem;
    font-weight: 400;
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
      border-radius: 0.08rem;
      border: 1px solid #dadada;
      cursor: pointer;

      .item-icon {
        height: 0.56rem;
      }

      .item-text {
        margin-top: 0.08rem;
        font-size: 0.14rem;
        font-weight: 500;
      }

      .item-desc {
        margin-top: 0.08rem;
        font-size: 0.14rem;
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

.travel-month {
  margin-top: 0.24rem;

  .type-hd {
    font-size: 0.2rem;
    font-weight: 400;
  }

  .item-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.16rem;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0.08rem;
      border: 1px solid #dadada;
      flex: 1;
      height: 1.2rem;
      cursor: pointer;

      .item-month {
        font-size: 0.14rem;
        font-weight: 500;
      }

      .item-year {
        margin-top: 0.08rem;
        font-size: 0.14rem;
      }
    }

    .item.active {
      border: 1px solid #ff3263;
      background: rgba(255, 50, 99, 0.08);

      .item-month {
        color: #ff3263;
      }
    }

    .item:hover {
      border: 1px solid #ff3263;
      background: rgba(255, 50, 99, 0.08);

      .item-month {
        color: #ff3263;
      }
    }

    .item + .item {
      margin-left: 0.25rem;
    }
  }
}
</style>
