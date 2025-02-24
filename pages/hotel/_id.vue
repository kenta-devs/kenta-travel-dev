<template>
  <div class="page-hotel">
    <kt-header v-show="!mobileMap" />
    <div class="page-hotel-content">
      <div class="phc-left">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>{{ slugInfo.countryName }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ slugInfo.continentName }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ slugInfo.cityName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="phcl-header">
          <div class="phcl-header-left">
            <div class="phcl-title">{{ slugInfo.name }}</div>
            <div class="phcl-text">{{ slugInfo.address }}</div>
          </div>
          <div class="phcl-header-right">
            <review-count :count="slugInfo.views" is-multi-line />
          </div>
        </div>
        <div v-if="slugInfo.casinoImages.length < 3" class="phcl-images">
          <div class="phcl-img-left1">
            <img :src="slugInfo.casinoImages[0]?.url" alt="" style="width:100%;height:3.36rem;">
          </div>
          <div v-if="slugInfo.casinoImages[1]" class="phcl-img-right1">
            <img :src="slugInfo.casinoImages[1]?.url" alt="" style="width:100%;height:3.36rem;">
          </div>
        </div>
        <div v-else class="phcl-images">
          <div class="phcl-img-left">
            <img :src="slugInfo.casinoImages[0]?.url" alt="" style="width:4.16rem;height:3.36rem;">
          </div>
          <div class="phcl-img-right">
            <div class="phcli-img">
              <img :src="slugInfo.casinoImages[1]?.url" alt="" style="height:1.6rem;">
            </div>
            <div class="phcli-img" style="margin-top:0.12rem;">
              <img :src="slugInfo.casinoImages[2]?.url" alt="" style="height:1.6rem;">
            </div>
          </div>
        </div>
        <button-switch :list="btnList" :current="pageType" @change="changePageType" class="phcl-buttons" />
        <div class="phcl-line"></div>
        <div class="phcl-paras" id="pageBox0">
          <div class="phcl-p-title">Casino Overview</div>
          <p v-for="text in slugInfo.overView?.split('\n')" class="phcl-p">
            {{ text }}
          </p>
        </div>
        <div class="phcl-line"></div>
        <div class="phcl-p-sub-title">Available Games</div>
        <div class="phcl-games-list">
          <div v-if="slugInfo.blackjack" class="phcl-games-item"><img src="@/assets/images/casino-cards.png" class="phcl-games-img" /> Blackjack</div>
          <div v-if="slugInfo.roullete" class="phcl-games-item"><img src="@/assets/images/roulette.png" class="phcl-games-img" /> Roullete</div>
          <div v-if="slugInfo.sicbo" class="phcl-games-item"><img src="@/assets/images/domino-leisure.png" class="phcl-games-img" /> Sic Bo</div>
          <div v-if="slugInfo.slotmachines" class="phcl-games-item"><img src="@/assets/images/slot-machine-casino.png" class="phcl-games-img" /> Slot Machines</div>
          <div v-if="slugInfo.baccarat" class="phcl-games-item"><img src="@/assets/images/cards-svgrepo.png" class="phcl-games-img" /> Baccarat</div>
          <div v-if="slugInfo.craps" class="phcl-games-item"><img src="@/assets/images/craps.png" class="phcl-games-img" /> Craps</div>
        </div>
        <div class="phcl-line"></div>
        <div class="phcl-p-sub-title">Casino Stats</div>
        <div class="phcl-stat-tables">
          <div class="phcl-stat-table">
            <div class="phclst-row">
              <span class="phclst-label">Established</span>
              <span class="phclst-text">{{ slugInfo.established }}</span>
            </div>
            <div class="phclst-row">
              <span class="phclst-label">Casino sqm</span>
              <span class="phclst-text">{{ slugInfo.sqm }}</span>
            </div>
            <div class="phclst-row">
              <span class="phclst-label">Table Games</span>
              <span class="phclst-text">{{ slugInfo.tableGames }}</span>
            </div>
            <div class="phclst-row">
              <span class="phclst-label">Gaming Machines</span>
              <span class="phclst-text">{{ slugInfo.gameMachines }}</span>
            </div>
          </div>
          <div class="phcl-stat-table">
            <div class="phclst-row">
              <span class="phclst-label">Poker Tables</span>
              <span class="phclst-text">{{ slugInfo.pokerTables }}</span>
            </div>
            <div class="phclst-row">
              <span class="phclst-label">Minimum bet</span>
              <span class="phclst-text">{{ slugInfo.minimumBet || 'N/A' }}</span>
            </div>
            <div class="phclst-row">
              <span class="phclst-label">Maximum payout</span>
              <span class="phclst-text">{{ slugInfo.maximumPayout || 'N/A' }}</span>
            </div>
            <div class="phclst-row">
              <span class="phclst-label">Open 24/7</span>
              <span class="phclst-text">{{ slugInfo.isForeverOpen ? 'Yes' : 'No' }}</span>
            </div>
          </div>
        </div>
        <div class="phcl-line"></div>
        <div id="pageBox1" class="phcl-rooms">
          <div class="phcl-rooms-info">
            <div class="phclri-left">
              <div class="phclri-title">Available Rooms</div>
              <div class="phclri-text">For 1 night 2 adults</div>
            </div>
            <div class="phclri-right">
              <review-count :count="4" is-multi-line />
            </div>
          </div>
          <room-style-group
            v-for="item in roomGroups"
            :key="item.name"
            :room="item"
          />
        </div>
        <div class="phcl-line"></div>
        <div id="pageBox2" class="phcl-p-title">Hotel Info</div>
        <div class="phcl-info">
          <div class="phcl-info-left">
            <div class="phcl-p-sub-title">Location</div>
            <div class="phcl-il-content">
              Plans for the journey: have a rest and enjoy! Resort «Caesars Palace - Resort & Casino» is located in Las Vegas. This resort is located in 6 km from the city center. You can take a walk and explore the neighbourhood area of the resort. Places nearby: Caesars Palace, Mirage Volcano and High Roller.
            </div>
            <div class="phcl-il-more">
              <a class="phcl-il-more-btn">View More <i class="el-icon-bottom" /></a>
            </div>
          </div>
          <div class="phcl-info-right">
            <div class="phcl-p-sub-title">Additional info</div>
            <div class="phcl-ir-label">Year of construction</div>
            <div class="phcl-ir-text">1966</div>
            <div class="phcl-ir-label" style="margin-top:0.16rem;">Year of renovation</div>
            <div class="phcl-ir-text">2010</div>
          </div>
        </div>
        <div class="phcl-line"></div>
        <div class="phcl-date-box">
          <div class="phcl-db-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 6V12L16 14" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="phcl-db-title">Check-in and Check-out</span>
          </div>
          <div class="phcl-db-row">
            <div class="phcl-dbr-left">
              <div class="phcl-dbr-label">Check-in</div>
              <div class="phcl-dbr-text">After 16:00</div>
            </div>
            <div class="phcl-dbr-right">
              <div class="phcl-dbr-process">
                <div class="phcl-dbr-process-inner"></div>
              </div>
              <div class="phcl-dbr-timeline">
                <span class="phcl-dbr-time">16:00</span>
              </div>
            </div>
          </div>
          <div class="phcl-db-row">
            <div class="phcl-dbr-left">
              <div class="phcl-dbr-label">Check-in</div>
              <div class="phcl-dbr-text">After 16:00</div>
            </div>
            <div class="phcl-dbr-right">
              <div class="phcl-dbr-process">
                <div class="phcl-dbr-process-inner"></div>
              </div>
              <div class="phcl-dbr-timeline">
                <span class="phcl-dbr-time">16:00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="phcl-line"></div>
        <div class="phcl-p-sub-title">Additional Information</div>
        <div class="phcl-addit-content">
          <p class="phcl-p">
            Check-in or check-out outside the mentioned hours may be subject to an additional charge.
            The minimum age required to check-in at this property is 21 years.
          </p>
          <p class="phcl-p">
            A limited selection of drinks and pastries is available for rooms that have breakfast inclusion. Anything additional will need to be purchased by guests.
          </p>
          <p class="phcl-p">
            The room rate with breakfast includes breakfast for 2 persons only. Kindly contact the property for additional breakfast details.
          </p>
          <p class="phcl-p">
            Resort fees are not assessed for Diamond and Seven Stars guests.
          </p>
        </div>
        <div class="phcl-line"></div>
        <div class="phcl-p-title">Location</div>
        <map class="phcl-location">
          <div id="map" class="map-box"></div>
        </map>
      </div>
      <div class="phc-right">
        <div class="phc-title">Select a casino hotel</div>
        <div class="phc-search">
          <el-autocomplete
            class="phc-input"
            v-model="query.destinationName"
            placeholder="Search for specific Casino"
            suffix-icon="el-icon-search"
            :fetch-suggestions="queryFetch"
            @select="handleQuerySelect"
          />
        </div>
        <div class="phc-filter">
          <filter-datepicker
            class="pacf-dp"
            :start-and-end-time="startAndEndTime"
            :date-type="dateType"
            :day-rage-index="dayRageIndex"
            @update:datetype="updateDateType"
            @update:time="updateStartEndTime"
            @update:daterange="updateDateRange"
          />
          <filter-member
            :list="guestList"
            class="pacf-mb"
            @change="changeGuests"
          />
          <button-filter @click="handleFilterList" />
        </div>
        <div class="phc-list">
          <casino-box
            v-for="item in form.casinoList"
            :key="item.id"
            class="phc-item"
            :casino="item"
            :parent="form"
          />
          <!-- <hotel-box class="phc-item">
            <el-button type="primary" plain>Remove</el-button>
          </hotel-box>
          <hotel-box class="phc-item" />
          <hotel-box class="phc-item" /> -->
        </div>
        <div class="phc-button">
          <div class="phc-button-info">
            <div class="phcb-row bold">
              <span>Total</span>
              <span>$210.00</span>
            </div>
            <div class="phcb-row">
              <span>1 night</span>
              <span>$105.00 per person</span>
            </div>
          </div>
          <el-button type="primary" class="phcb-btn" @click="openBookingModal">Next</el-button>
        </div>
      </div>
    </div>
    <div class="page-hotel-desc">
      <div class="phd-label">Take the gamble out of <br>your casino trip planning</div>
      <div class="phd-btns">
        <a class="phd-btn">Get a Travel Expert</a>
      </div>
    </div>
    <kt-footer />
    <modal-booking
      v-if="showModal"
      @close="showModal=false"
    />
  </div>
</template>

<script>
import { casinoDetailSlug } from '@/api/casino'
import { getHotelRooms, getHotelInfo } from '@/api/hotel'
import casino from '@/mixins/casino'
import dayjs from 'dayjs'
import { mapToken } from '@/config/map'
import { groupBy } from '@/utils/index'

export default {
  name: 'HotelPage',
  mixins: [casino],
  head () {
    return {
      link: [{ rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' }],
      script: [{ src: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js' }]
    }
  },
  data() {
    return {
      showModal: false,
      mobileMap: false,
      isMobile: window.isMobile,
      map: null,
      slugInfo: {
        casinoImages: []
      },
      roomGroups: [],

      btnList: [
        { label: 'Casino Overview', value: 0 },
        { label: 'Available Rooms', value: 1 },
        { label: 'Hotel Info', value: 2 }
      ],
      pageType: 0
    }
  },
  mounted () {
    this.query.destinationId = this.$route.params.id
    this.query.destinationSlug = this.$route.params.destinationSlug || ''
    this.query.destinationName = this.$route.params.destinationName || ''
    this.dateType = parseInt(this.$route.params.dateType || 0)
    this.startAndEndTime = this.$route.params.date
    this.selectedMonth = this.$route.params.selectedMonth || [];

    if (this.$route.params.guestList) {
      this.guestList = JSON.parse(this.$route.params.guestList);
    }

    if (this.query.destinationSlug) {
      this.handleSearchList()
    }
    this.initDestinations()
    this.initDetail()
  },
  methods: {
    async handleSearchList () {
      const data = await this.handleSearch(this.query.destinationSlug)
      this.form = data || {}
    },
    async initDetail () {
      try {
        const params = {
          slug: this.$route.params.id
        }
        const res = await casinoDetailSlug(params)
        this.slugInfo = res.data || {}
        this.initHotelDetail()
        this.initMap()
      } catch (e) {
        console.log('get hotel info error: ', e)
      }
    },
    getAdultsParams () {
      const guestMap = {
        adults: 0,
        children: []
      }
      this.guestList.forEach(g => {
        if (g.label === 'Adults') {
          guestMap.adults = g.value
        }
      })
      return [guestMap]
    },
    async initHotelDetail () {
      console.log('route-params = ', this.$route.params)
      let start = new Date()
      let end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 2)
      if (this.startAndEndTime) {
        [start, end] = this.startAndEndTime.split(',').map(t => parseInt(t, 10))
      }
      this.guestList
      const params = {
        id: this.slugInfo.hotelId,
        checkin: dayjs(start).format('YYYY-MM-DD'),
        checkout: dayjs(end).format('YYYY-MM-DD'),
        guests: this.getAdultsParams(),
        language: 'en'
      }
      const res = await getHotelRooms(params)
      const hotels = res.data.hotels || []
      const hotelInfo = hotels.find(h => h.id === this.slugInfo.hotelId)
      const groupMap = hotelInfo ? groupBy(hotelInfo.rates, 'room_name') : {}
      const resInfo = await getHotelInfo({ id: this.slugInfo.hotelId, language: 'en' })
      console.log('rooms = ', resInfo.data.room_groups)

      const groups = []
      for (let key in groupMap) {
        console.log('key = ', key)
        const item = {
          name: key,
          items: groupMap[key],
          info: resInfo.data.room_groups.find(g => g.name === key) || { images: [], name_struct: {} }
        }
        groups.push(item)
      }
      this.roomGroups = groups
    },
    openBookingModal () {
      this.showModal = true
    },
    changePageType (t) {
      this.pageType = t.value
      document.querySelector(`#pageBox${t.value}`).scrollIntoView({ behavior:'smooth' })
    },
    initMap () {
      mapboxgl.accessToken = mapToken
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.slugInfo.longitude, this.slugInfo.latitude], // 设置初始地图中心点
        zoom: 13
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-hotel {
  background-color: #f5f5f5;
  .page-hotel-desc {
    width: 100%;
    padding: 0.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background: linear-gradient(110deg, #FF3263 36.89%, #EE2344 73.36%);
  }
  .phd-label {
    color: #FEFEFE;
    font-size: 0.56rem;
    font-weight: 400;
  }
  .phd-btns {
    margin-top: 0.24rem;
  }
  .phd-btn {
    display: block;
    width: 1.88rem;
    height: 0.48rem;
    line-height: 0.48rem;
    border-radius: 0.08rem;
    background: #FEFEFE;
    color: #FF3263;
    font-size: 0.16rem;
    text-align: center;
    cursor: pointer;
  }
  .page-hotel-content {
    display: flex;
    padding: 0.24rem 0.32rem;
    max-width: 1440px;
    margin: 0 auto;
  }
  .phcl-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .phcl-title {
    margin-top: 0.08rem;
    color: #1A1A1A;
    font-size: 0.32rem;
    font-weight: 500;
  }
  .phcl-images {
    margin-top: 0.16rem;
    display: flex;
    img {
      border-radius: 0.06rem;
    }
  }
  .phcl-img-left1 {
    flex: 1;
    min-width: 0;
  }
  .phcl-img-right1 {
    flex: 1;
    min-width: 0;
    margin-left: 0.16rem;
  }
  .phcl-img-left {
    width: 4.16rem;
  }
  .phcl-img-right {
    margin-left: 0.16rem;
    flex: 1;
    min-width: 0;
  }
  .phcl-buttons {
    margin-top: 0.14rem;
    position: sticky;
    top: 80px;
    z-index: 9;
  }
  .phcl-line {
    margin-top: 0.24rem;
    width: 100%;
    height: 0.01rem;
    background: #DADADA;
  }
  .phcl-paras {
    color: #5F6D7A;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4
  }
  .phcl-p-title {
    margin-top: 0.24rem;
    color: #1A1A1A;
    font-size: 0.24rem;
    font-weight: 400;
  }
  .phcl-p {
    margin-top: 0.16rem;
    line-height: 1.4;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.16rem;
    font-weight: 300;
  }
  .phcl-text {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.40);
    font-size: 14px;
    font-weight: 400;
  }
  .phcl-p-sub-title {
    margin-top: 0.24rem;
    color: #1A1A1A;
    font-size: 0.18rem;
  }
  .phcl-games-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .phcl-games-item {
    margin-top: 0.16rem;
    width: 30%;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.16rem;
  }
  .phcl-games-img {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.08rem;
    vertical-align: middle;
  }
  .phcl-stat-tables {
    margin-top: 0.16rem;
    display: flex;
    justify-content: space-between;
  }
  .phcl-stat-table {
    flex: 1;
    min-width: 0;
    padding: 0 0.16rem;
    border-radius: 0.08rem;
    border: 1px solid rgba(26, 26, 26, 0.16);
    background: #FEFEFE;
    &:last-child {
      margin-left: 0.16rem;
    }
  }
  .phclst-row {
    padding: 0.16rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(26, 26, 26, 0.16);
    &:first-child {
      border-top: 0;
    }
  }
  .phclst-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.16rem;
    font-weight: 300;
  }
  .phclst-text {
    color: #1A1A1A;
    font-size: 0.16rem;
    font-weight: 400;
  }
  .phcl-info {
    display: flex;
    align-items: flex-start;
    &-left {
      flex: 1;
      min-width: 0;
    }
    &-right {
      margin-left: 0.4rem;
      width: 2rem;
    }
  }
  .phcl-il-content {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.16rem;
    font-weight: 300;
    line-height: 1.4;
  }
  .phcl-il-more {
    margin-top: 0.16rem;
    &-btn {
      color: #FF3263;
      font-size: 0.16rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .phcl-ir-label {
    margin-top: 0.12rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
    font-weight: 400;
  }
  .phcl-ir-text {
    margin-top: 0.04rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.16rem;
    font-weight: 300;
  }
  .phc-left {
    flex: 1;
    min-width: 0;
    padding: 0.16rem;
    margin-right: 0.16rem;
    border-radius: 0.08rem;
    border: 0.01rem solid rgba(26, 26, 26, 0.16);
    background: #FEFEFE;

    :deep(.el-breadcrumb__inner) {
      color: rgba(26, 26, 26, 0.60);
    }
  }
  .phc-right {
    position: relative;
    width: 5.64rem;
    padding: 0.16rem;
    border-radius: 0.08rem;
    border: 1px solid #DADADA;
    background: #FEFEFE;
  }
  .phc-title {
    color: #1A1A1A;
    font-size: 20px;
    font-weight: 400;
  }
  .phc-search {
    margin-top: 0.16rem;
  }
  .phc-input {
    width: 100%;
  }
  .phc-filter {
    margin-top: 0.14rem;
    display: flex;
    align-items: center;
  }
  .pacf-dp {
    flex: 4;
    min-width: 0;
  }
  .pacf-mb {
    flex: 3;
    min-width: 0;
    margin: 0 0.08rem;
  }
  .phc-list {
    margin-top: 0.1rem;
  }
  .phc-item {
    margin-top: 0.08rem;
  }
  .phcl-rooms {
    margin-top: 0.24rem;
    .c-room-style-group {
      margin-top: 0.16rem;
    }
  }
  .phcl-rooms-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .phclri-title {
      color: #1A1A1A;
      font-size: 0.24rem;
      font-weight: 400;
    }
    .phclri-text {
      margin-top: 0.08rem;
      font-size: 0.16rem;
      color: rgba(26, 26, 26, 0.60);
    }
  }

  .phc-button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #DADADA;
    background: #FEF6F8;
  }
  .phc-button-info {
    padding: 0.16rem;
  }
  .phcb-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.08rem;
    color: #FF3263;
    font-size: 16px;
    &.bold {
      font-weight: 500;
    }
  }
  .phcb-btn {
    width: 100%;
    height: 0.56rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .phcl-date-box {
    margin-top: 0.24rem;
    padding: 0.24rem;
    border-radius: 0.06rem;
    background: #F5F5F5;
  }
  .phcl-db-header {
    display: flex;
    align-items: center;
  }
  .phcl-db-title {
    margin-left: 0.08rem;
    color: #1A1A1A;
    font-size: 0.18rem;
    font-weight: 400;
  }
  .phcl-db-row {
    display: flex;
    justify-content: space-between;
    margin-top: 0.16rem;
  }
  .phcl-dbr-left {
    flex: 1;
    min-width: 0;
  }
  .phcl-dbr-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
    font-weight: 400;
  }
  .phcl-dbr-text {
    margin-top: 0.04rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.16rem;
    font-weight: 300;
  }
  .phcl-dbr-right {
    width: 3.5rem;
  }
  .phcl-dbr-process {
    position: relative;
    height: 0.08rem;
    border-radius: 0.08rem;
    background: #DADADA;
    &-inner {
      position: absolute;
      height: 0.08rem;
      border-radius: 0.08rem;
      background: #FF3263;
    }
  }
  .phcl-dbr-timeline {
    position: relative;
    margin-top: 0.08rem;
  }
  .phcl-dbr-time {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
    font-weight: 400;
  }
  .map-box {
    margin-top: 0.16rem;
    width: 100%;
    height: 4rem;
  }
}
</style>
