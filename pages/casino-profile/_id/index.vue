<template>
  <div class="page-casino-profile">
    <!-- header start-->
    <KtHeader></KtHeader>
    <!-- header end-->
    <div class="pcp-header">
      <div class="pcp-star">
        <el-rate :value="slugInfo.star" disabled />
        <span class="pcp-star-label">· {{ slugInfo.distance || 0 }} mile from city center</span>
      </div>
      <div class="pcp-title">{{ slugInfo.name }}</div>
      <div class="pcp-address">{{ slugInfo.address }}</div>
    </div>
    <!-- 照片 -->
    <div class="view-photo" v-if="slugInfo.casinoImages.length > 0">
      <el-carousel class="item-picture">
        <el-carousel-item v-for="(item, index) in slugInfo.casinoImages" :key="index">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="pcp-button-switch">
      <button-switch
        :list="btnList"
        :current="pageType"
        is-mobile
        @change="changePageType"
        class="phcl-buttons"
      />
    </div>
    <div id="pageBox0" class="pcp-paras">
      <div class="pcp-p-title">Casino Overview</div>
      <div class="pcp-p-content" :class="{ 'more': isOverMore }">
        <p v-for="text in slugInfo.overView?.split('\n')" class="pcp-p">
          {{ text }}
        </p>
        <div class="pcp-p-mask"></div>
      </div>
      <div v-if="!isOverMore" class="pcpl-il-more">
        <a class="pcpl-il-more-btn" @click="toggleMore('overview')">View More <i class="el-icon-right" /></a>
      </div>
    </div>
    <div class="pcp-box">
      <div class="pcp-p-sub-title">Available Games</div>
      <div class="pcp-games-list">
        <div v-if="slugInfo.blackjack" class="pcp-games-item"><img src="@/assets/images/casino-cards.png" class="phcl-games-img" /> Blackjack</div>
        <div v-if="slugInfo.roullete" class="pcp-games-item"><img src="@/assets/images/roulette.png" class="phcl-games-img" /> Roullete</div>
        <div v-if="slugInfo.sicbo" class="pcp-games-item"><img src="@/assets/images/domino-leisure.png" class="phcl-games-img" /> Sic Bo</div>
        <div v-if="slugInfo.slotmachines" class="pcp-games-item"><img src="@/assets/images/slot-machine-casino.png" class="phcl-games-img" /> Slot Machines</div>
        <div v-if="slugInfo.baccarat" class="pcp-games-item"><img src="@/assets/images/cards-svgrepo.png" class="phcl-games-img" /> Baccarat</div>
        <div v-if="slugInfo.craps" class="pcp-games-item"><img src="@/assets/images/craps.png" class="phcl-games-img" /> Craps</div>
      </div>
    </div>
    <div class="pcp-box">
      <div class="pcp-p-sub-title">Casino Stats</div>
      <div class="pcp-stat-tables">
        <div class="pcp-stat-table">
          <div class="pcpst-row">
            <span class="pcpst-label">Established</span>
            <span class="pcpst-text">{{ slugInfo.established }}</span>
          </div>
          <div class="pcpst-row">
            <span class="pcpst-label">Casino sqm</span>
            <span class="pcpst-text">{{ slugInfo.sqm }}</span>
          </div>
          <div class="pcpst-row">
            <span class="pcpst-label">Table Games</span>
            <span class="pcpst-text">{{ slugInfo.tableGames }}</span>
          </div>
          <div class="pcpst-row">
            <span class="pcpst-label">Gaming Machines</span>
            <span class="pcpst-text">{{ slugInfo.gameMachines }}</span>
          </div>
        </div>
        <div class="pcp-stat-table">
          <div class="pcpst-row">
            <span class="pcpst-label">Poker Tables</span>
            <span class="pcpst-text">{{ slugInfo.pokerTables }}</span>
          </div>
          <div class="pcpst-row">
            <span class="pcpst-label">Minimum bet</span>
            <span class="pcpst-text">{{ slugInfo.minimumBet || 'N/A' }}</span>
          </div>
          <div class="pcpst-row">
            <span class="pcpst-label">Maximum payout</span>
            <span class="pcpst-text">{{ slugInfo.maximumPayout || 'N/A' }}</span>
          </div>
          <div class="pcpst-row">
            <span class="pcpst-label">Open 24/7</span>
            <span class="pcpst-text">{{ slugInfo.isForeverOpen ? 'Yes' : 'No' }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="pageBox1" class="pcp-box">
      <div class="pcp-p-title">Available Rooms</div>
      <div class="pcpar-text">For {{ guestDetail }}</div>
      <div class="pcpar-views">
        <review-count :count="slugInfo.views" />
      </div>
    </div>
    <room-style-group
      v-for="item in roomGroups"
      :key="item.key"
      :room="item"
      :current="selectedRoom"
      :guest-detail="guestDetail"
      is-mobile
      class="mt8"
      @room-select="handleRoomSelect"
    />
    <div id="pageBox2" class="pcp-box">
      <div class="pcp-p-title">Hotel Info</div>
      <div class="pcp-p-sub-title mt16">{{ hotelInfo.$location?.title }}</div>
      <div class="pcpl-il-content">
        <p v-for="(pl, pi) in hotelInfo.$location?.paragraphs" :key="pi">
          {{ pl }}
        </p>
      </div>
      <div class="pcp-p-title mt16">Additional information</div>
      <div class="pcpl-il-content">
        <p>{{ hotelInfo.metapolicy_extra_info }}</p>
      </div>
      <!--<div class="pcpl-il-more">
        <a class="pcpl-il-more-btn">Show the description <i class="el-icon-bottom" /></a>
      </div>-->
      <div class="pcp-p-sub-title mt16">Additional info</div>
      <div class="pcpa-ai-content">
        <div class="pcpa-ai-left">
          <div class="pcpa-ai-label">Year of construction</div>
          <div class="pcpa-ai-text">{{ hotelInfo.facts?.year_built }}</div>
        </div>
        <div class="pcpa-ai-right">
          <div class="pcpa-ai-label">Year of renovation</div>
          <div class="pcpa-ai-text">{{ hotelInfo.facts?.year_renovated }}</div>
        </div>
      </div>
      <!-- <div class="pcpl-ai-more">
        <a class="pcpl-ai-more-btn">Show more info <i class="el-icon-bottom" /></a>
      </div> -->
    </div>
    <div class="pcp-date-box">
      <div class="pcp-db-header">
        <svg style="margin-right:0.08rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_365_6449)">
            <path d="M8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 4V8L10.6667 9.33333" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_365_6449">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span class="pcp-db-title">Check-in and Check-out</span>
      </div>
      <div class="pcp-db-row mt16">
        <div class="pcp-dbr-label">Check-in</div>
        <div class="pcp-dbr-text">After {{ hotelInfo.$check_in_time_format }}</div>
      </div>
      <div class="pcp-db-process-box mt16">
        <div class="pcp-dbr-process">
          <div class="pcp-dbr-process-inner in" :style="{ 'width': hotelInfo.$check_in_time_width }"></div>
        </div>
        <div class="pcp-dbr-timeline">
          <span class="pcp-dbr-time" :style="{ 'margin-left': hotelInfo.$check_in_time_left }">{{ hotelInfo.$check_in_time_format }}</span>
        </div>
      </div>
      <div class="pcp-db-row mt16">
        <div class="pcp-dbr-label">Check-out</div>
        <div class="pcp-dbr-text">After {{ hotelInfo.$check_out_time_format }}</div>
      </div>
      <div class="pcp-db-process-box mt16">
        <div class="pcp-dbr-process">
          <div class="pcp-dbr-process-inner out" :style="{ 'width': hotelInfo.$check_out_time_width }"></div>
        </div>
        <div class="pcp-dbr-timeline">
          <span class="pcp-dbr-time" :style="{ 'margin-left': hotelInfo.$check_out_time_left }">{{ hotelInfo.$check_out_time_format }}</span>
        </div>
      </div>
    </div>
    <div class="pcp-box">
      <div class="pcp-p-sub-title">{{ hotelInfo.$additinal?.title }}</div>
      <div class="pcpl-addit-content">
        <p class="pcp-p" v-for="(ap, apindex) in hotelInfo.$additinal?.paragraphs" :key="apindex">
          {{ ap }}
        </p>
      </div>
    </div>
    <div class="pcp-box">
      <div class="pcp-p-title">Paid on the spot</div>
      <div class="pcpl-addit-content" v-html="casino.otherPaid"></div>
    </div>
    <div class="pcp-location">
      <div class="pcp-p-sub-title">Location</div>
      <div id="location-map" class="map-box mt16"></div>
    </div>
    <travel-expert></travel-expert>
    <!-- 页底 -->
    <kt-footer></kt-footer>
    <el-drawer
      :visible.sync="showModal"
      direction="rtl"
      size="100%"
      append-to-body
      custom-class="page-casino-profile-drawer"
      :modal="false"
      :withHeader="false"
      :show-close="false"
    >
      <modal-casino-selected
        :casino="casino"
        :selected-room="selectedRoom"
        :hotel-info="hotelInfo"
        :search-query="searchQuery"
        :guest-detail="guestDetail"
        :date-range-format="dateRangeFormat"
        @clear-selected="handleRoomClear"
      />
    </el-drawer>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import hotel from '@/mixins/hotel'

export default {
  name: 'CasinoPage',
  head () {
    return {
      link: [{ rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' }]
    }
  },
  mixins: [hotel],
  data () {
    return {
      showModal: false,
      casino: {},
      searchQuery: {
        destinationId: '',
        destinationName: '',
        dateType: 0,
        date: '',
        guestList: [],
        selectedMonth: []
      },
      isOverMore: false,
      isMobile: window.isMobile,
      id: '',
      guestDetail: '',
      dateRangeFormat: '',
      selectedRoom: null
    }
  },
  mounted () {
    this.initInfo()
    const id = this.$route.params.id
    if (id) {
      this.initDetail(id)
    }
  },
  methods: {
    handleRoomSelect (data) {
      this.selectedRoom = data.item
      this.showModal = true
    },
    handleRoomClear () {
      this.showModal = false
      this.selectedRoom = null
    },
    toggleMore (type) {
      if (type === 'overview') {
        this.isOverMore = !this.isOverMore
      }
    },
    initInfo () {
      const casino = sessionStorage.getItem('casino')
      if (casino) {
        this.casino = JSON.parse(casino)
      }
      this.searchQuery = this.$route.query
      if (!this.$route.query.destinationName) {
        const searchQueryStr = sessionStorage.getItem('destination-params')
        if (searchQueryStr) {
          this.searchQuery = JSON.parse(searchQueryStr) || {}
        }
      }
      if (this.searchQuery.guestList && typeof this.searchQuery.guestList === 'string') {
        this.searchQuery.guestList = JSON.parse(this.searchQuery.guestList)
      }
      if (this.searchQuery.selectedMonth && typeof this.searchQuery.selectedMonth === 'string') {
        this.searchQuery.selectedMonth = JSON.parse(this.searchQuery.selectedMonth)
      }
      this.initGuestDetail()
    },
    initGuestDetail () {
      let detail = ''
      if (this.searchQuery.date) {
        const [start, end] = this.searchQuery.date.split(',').map(d => parseInt(d, 10))
        const diff = dayjs(end).diff(dayjs(start), 'day')
        const startDate = dayjs(start).format('ddd, MMM	DD')
        const endDate = dayjs(end).format('ddd, MMM	DD, YYYY')
        this.dateRangeFormat = [startDate, endDate].join(' - ')
        detail += diff + ' night '
      }
      if (this.searchQuery.guestList) {
        const adult = this.searchQuery.guestList.find(g => g.label === 'Adults')
        if (adult) {
          detail += adult.value + ' guests'
        }
      }
      this.guestDetail = detail
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

<style lang="scss">
.page-casino-profile-drawer {
  top: 0.5rem!important;
  height: auto!important;
}
</style>
<style lang="scss" scoped>
.page-casino-profile {
  // background: #F5F5F5;
  background-color: #f5f5f5;
  :deep(.accd-title) {
    margin-top: 0.16rem;
    font-size: 0.16rem;
    font-weight: 400;
    color: #1A1A1A;
  }
  :deep(.accd-table) {
    margin-top: 0.08rem;
    width: 100%;
  }
  :deep(.accd-table tr:nth-child(2n)) {
    background-color: rgba(244, 244, 244, 1);
  }
  :deep(.accd-table th) {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
  }
  :deep(.accd-table td) {
    padding: 0.08rem 0.2rem;
    color: rgba(26, 26, 26, 0.60);
    line-height: 1.5;
  }
  .mt8 {
    margin-top: 0.08rem;
  }
  .mt16 {
    margin-top: 0.16rem;
  }
  .pcp-date-box {
    background-color: #FEFEFE;
    margin: 0.24rem 0.2rem;
    padding: 0.16rem;
    border-radius: 0.06rem;
  }
  .pcp-db-header {
    display: flex;
    align-items: center;
  }
  .pcp-dbr-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
  }
  .pcp-dbr-text {
    margin-top: 0.04rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
  }
  .pcp-dbr-process {
    position: relative;
    height: 0.08rem;
    border-radius: 0.08rem;
    background: #DADADA;
    &-inner {
      position: absolute;
      height: 0.08rem;
      border-radius: 0.08rem;
      background: #FF3263;
      &.in {
        right: 0;
      }
      &.out {
        left: 0;
      }
    }
  }
  .pcp-dbr-timeline {
    position: relative;
    margin-top: 0.08rem;
  }
  .pcp-button-switch {
    padding: 0.12rem;
    text-align: center;
  }
  .pcp-paras {
    background-color: #FEFEFE;
    padding: 0.24rem 0.2rem;
  }
  .pcp-p-content {
    position: relative;
    height: 1.2rem;
    overflow: hidden;
    .pcp-p-mask {
      background: linear-gradient(180deg, rgba(254, 254, 254, 0.00) 0%, rgba(254, 254, 254, 0.80) 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1rem;
      z-index: 99;
    }
    &.more {
      height: auto;
      .pcp-p-mask {
        display: none;
      }
    }
  }
  .pcp-p-title {
    color: #1A1A1A;
    font-size: 0.2rem;
  }
  .pcpar-text {
    margin-top: 0.04rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
  }
  .pcp-p-sub-title {
    color: #1A1A1A;
    font-size: 0.14rem;
  }
  .pcp-p {
    margin-top: 0.16rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
    line-height: 140%; /* 19.6px */
  }
  .pcpl-il-content {
    margin-top: 0.08rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
    line-height: 140%; /* 19.6px */
  }
  .pcpl-il-more {
    margin-top: 0.08rem;
  }
  .pcpl-il-more-btn {
    color: #FF3263;
    font-size: 0.14rem;
    font-weight: 500;
  }
  .pcpa-ai-content {
    margin-top: 0.16rem;
    display: flex;
    align-items: flex-start;
  }
  .pcpa-ai-left {
    flex: 1;
    min-width: 0;
  }
  .pcpa-ai-right {
    margin-left: 0.6rem;
    flex: 1;
    min-width: 0;
  }
  .pcpa-ai-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
  }
  .pcpa-ai-text {
    margin-top: 0.04rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.14rem;
    font-weight: 300;
  }
  .pcp-box {
    margin-top: 0.08rem;
    background-color: #FEFEFE;
    padding: 0.24rem 0.2rem;
  }
  .pcp-location {
    padding: 0.24rem 0.2rem;
  }
  .map-box {
    height: 2.4rem;
    border-radius: 0.08rem;
  }
  .pcp-games-list {
    margin-top: 0.08rem;
    display: flex;
    flex-wrap: wrap;
  }
  .phcl-games-img {
    margin-right: 0.04rem;
    width: 0.16rem;
    height: 0.16rem;
  }
  .pcp-games-item {
    margin: 0.08rem 0.04rem 0 0;
    padding: 0.04rem 0.12rem;
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    border-radius: 32px;
    color: rgba(26, 26, 26, 0.60);
    border: 1px solid rgba(26, 26, 26, 0.16);
    background: #FEFEFE;
  }
  .pcp-stat-tables {
    margin-top: 0.16rem;
    padding-bottom: 0.08rem;
    overflow-x: auto;
    white-space: nowrap;
  }
  .pcp-stat-table {
    display: inline-block;
    width: 2.64rem;
    padding: 0 0.16rem;
    border-radius: 0.08rem;
    border: 1px solid rgba(26, 26, 26, 0.16);
    background: #FEFEFE;
    &:last-child {
      margin-left: 0.08rem;
    }
  }
  .pcpst-row {
    padding: 0.16rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(26, 26, 26, 0.16);
    &:first-child {
      border-top: 0;
    }
  }
  .pcpst-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.16rem;
    font-weight: 300;
  }
  .pcpst-text {
    color: #1A1A1A;
    font-size: 0.16rem;
    font-weight: 400;
  }
  .pcp-header {
    padding: 0.24rem 0.2rem 0.16rem;
  }
  .pcp-title {
    margin-top: 0.1rem;
    color: #1A1A1A;
    font-size: 0.24rem;
  }
  .pcp-address {
    margin-top: 0.04rem;
    color: rgba(26, 26, 26, 0.40);
    font-size: 0.12rem;
  }
  .pcp-star {
    display: flex;
    align-items: center;
    &-label {
      color: rgba(26, 26, 26, 0.60);
      font-size: 0.12rem;
    }
  }
}
</style>
