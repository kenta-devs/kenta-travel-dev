<!-- <template>
  <div class="c-page-hotel">
    <div class="phcl-fixed">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{ slugInfo.continentName }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ slugInfo.countryName }}</el-breadcrumb-item>
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
      <div class="phcl-buttons">
        <button-switch
          :list="btnList"
          :current="pageType"
          @change="changePageType"
        />
      </div>
    </div>
    <div class="phcl-content">
      <div class="phcl-line mt16"></div>
      <div class="phcl-paras" id="pageBox0">
        <div class="phcl-p-title">Casino Overview</div>
        <p v-for="text in slugInfo.overView?.split('\n')" class="phcl-p">
          {{ text }}
        </p>
      </div>
      <div class="phcl-line mt24"></div>
      <div class="phcl-p-sub-title">Available Games</div>
      <div class="phcl-games-list">
        <div v-if="slugInfo.blackjack" class="phcl-games-item"><img src="@/assets/images/casino-cards.png" class="phcl-games-img" /> Blackjack</div>
        <div v-if="slugInfo.roullete" class="phcl-games-item"><img src="@/assets/images/roulette.png" class="phcl-games-img" /> Roullete</div>
        <div v-if="slugInfo.sicbo" class="phcl-games-item"><img src="@/assets/images/domino-leisure.png" class="phcl-games-img" /> Sic Bo</div>
        <div v-if="slugInfo.slotmachines" class="phcl-games-item"><img src="@/assets/images/slot-machine-casino.png" class="phcl-games-img" /> Slot Machines</div>
        <div v-if="slugInfo.baccarat" class="phcl-games-item"><img src="@/assets/images/cards-svgrepo.png" class="phcl-games-img" /> Baccarat</div>
        <div v-if="slugInfo.craps" class="phcl-games-item"><img src="@/assets/images/craps.png" class="phcl-games-img" /> Craps</div>
      </div>
      <div class="phcl-line mt24"></div>
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
      <div class="phcl-line mt24"></div>
      <div id="pageBox1" class="phcl-rooms">
        <div class="phcl-rooms-info">
          <div class="phclri-left">
            <div class="phclri-title">Available Rooms</div>
            <div class="phclri-text">For {{ guestDetail }}</div>
          </div>
          <div class="phclri-right">
            <review-count :count="casino.views" is-multi-line />
          </div>
        </div>
        <room-style-group
          v-for="item in roomGroups"
          :key="item.key"
          :room="item"
          :current="selectedRoom"
          :guest-detail="guestDetail"
          class="mt16"
          @room-select="handleRoomSelect"
        />
      </div>
      <div class="phcl-line mt24"></div>
      <div id="pageBox2" class="phcl-p-title">Hotel Info</div>
      <div class="phcl-info">
        <div class="phcl-info-left">
          <div class="phcl-p-sub-title">{{ hotelInfo.$location?.title }}</div>
          <div class="phcl-il-content">
            <p v-for="(pl, pi) in hotelInfo.$location?.paragraphs" :key="pi">
              {{ pl }}
            </p>
          </div>
          <div class="phcl-il-more">
            <a class="phcl-il-more-btn">View More <i class="el-icon-bottom" /></a>
          </div>
        </div>
        <div class="phcl-info-right">
          <div class="phcl-p-sub-title">Additional info</div>
          <div class="phcl-ir-label">Year of construction</div>
          <div class="phcl-ir-text">{{ hotelInfo.facts?.year_built }}</div>
          <div class="phcl-ir-label" style="margin-top:0.16rem;">Year of renovation</div>
          <div class="phcl-ir-text">{{ hotelInfo.facts?.year_renovated }}</div>
        </div>
      </div>
      <div class="phcl-line mt24"></div>
      <div class="phcl-p-title">Additional information</div>
      <div class="phcl-il-content">
        <p>{{ hotelInfo.metapolicy_extra_info }}</p>
      </div>

      <div class="phcl-line mt24"></div>
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
            <div class="phcl-dbr-text">After {{ hotelInfo.$check_in_time_format }}</div>
          </div>
          <div class="phcl-dbr-right">
            <div class="phcl-dbr-process">
              <div class="phcl-dbr-process-inner in" :style="{ 'width': hotelInfo.$check_in_time_width }"></div>
            </div>
            <div class="phcl-dbr-timeline">
              <span class="phcl-dbr-time" :style="{ 'margin-left': hotelInfo.$check_in_time_left }">{{ hotelInfo.$check_in_time_format }}</span>
            </div>
          </div>
        </div>
        <div class="phcl-db-row">
          <div class="phcl-dbr-left">
            <div class="phcl-dbr-label">Check-out</div>
            <div class="phcl-dbr-text">After {{ hotelInfo.$check_out_time_format }}</div>
          </div>
          <div class="phcl-dbr-right">
            <div class="phcl-dbr-process">
              <div class="phcl-dbr-process-inner out" :style="{ 'width': hotelInfo.$check_out_time_width }"></div>
            </div>
            <div class="phcl-dbr-timeline">
              <span class="phcl-dbr-time" :style="{ 'margin-left': hotelInfo.$check_out_time_left }">{{ hotelInfo.$check_out_time_format }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="phcl-line mt24"></div>
      <div class="phcl-p-sub-title">{{ hotelInfo.$additinal?.title }}</div>
      <div class="phcl-addit-content">
        <p class="phcl-p" v-for="(ap, apindex) in hotelInfo.$additinal?.paragraphs" :key="apindex">
          {{ ap }}
        </p>
      </div>
      <div class="phcl-p-title">Paid on the spot</div>
      <div class="phcl-il-content" v-html="casino.otherPaid"></div>
      <div class="phcl-line mt24"></div>
      <div class="phcl-p-title">Location</div>
      <div class="phcl-location">
        <div id="location-map" class="map-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import hotel from '@/mixins/hotel'

export default {
  props: {
    casino: Object,
    searchQuery: Object,
    selectedRoom: Object,
  },
  mixins: [hotel],
  data () {
    return {
    }
  },
  computed: {
    guestDetail () {
      let detail = ''
      if (this.searchQuery.date) {
        const [start, end] = this.searchQuery.date.split(',').map(d => parseInt(d, 10))
        const diff = dayjs(end).diff(dayjs(start), 'day')
        detail += diff + ' night '
      }
      if (this.searchQuery.guestList) {
        const adult = this.searchQuery.guestList.find(g => g.label === 'Adults')
        if (adult) {
          detail += adult.value + ' guests'
        }
      }
      return detail
    }
  },
  watch: {
    casino: {
      handler () {
        this.casino && this.initDetail(this.casino.slug)
      },
      immediate: true
    },
    searchQuery: {
      handler () {
        if (this.slugInfo.hotelId) {
          this.initHotelRooms()
        }
      },
      deep: true
    }
  },
  methods: {
    handleRoomSelect (data) {
      this.$emit('room-select', { ...data, hotel: this.hotelInfo })
    }
  }
}
</script>

<style lang="scss" scoped>
.c-page-hotel {
  background-color: #FEFEFE;
  height: 100%;
  border-radius: 0.08rem;
  display: flex;
  flex-direction: column;
  :deep(.accd-title) {
    margin-top: 0.16rem;
    font-size: 0.16rem;
    font-weight: 400;
    color: #1A1A1A;
  }
  :deep(.accd-table) {
    margin-top: 0.08rem;
    width: 100%;
    table-layout: fixed;
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
  .phcl-fixed {
    padding: 0.16rem;
  }
  .mt16 {
    margin-top: 0.16rem;
  }
  .mt24 {
    margin-top: 0.24rem;
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
  }
  .phcl-content {
    flex: 1;
    min-height: 0;
    padding: 0 0.16rem 0.16rem;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .phcl-content::-webkit-scrollbar {
    width: 0!important;
  }
  .phcl-line {
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
  .phcl-rooms {
    margin-top: 0.24rem;
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
      &.in {
        right: 0;
      }
      &.out {
        left: 0;
      }
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
</style> -->
