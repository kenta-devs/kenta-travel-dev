<template>
  <div class="page-area-mobile">
    <kt-header />
    <div class="pam-title">Select a casino hotel</div>
    <div class="pam-address">
      <div class="pama-left">
        <div class="pama-row">
          <svg style="margin-right:0.08rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M7.61192 14.7804C10.6382 13.1625 13 10.4832 13 7.22538C13 3.75106 10.3137 0.93457 7 0.93457C3.68629 0.93457 1 3.75106 1 7.22538C1 10.4832 3.36182 13.1625 6.38808 14.7804C6.7726 14.986 7.2274 14.986 7.61192 14.7804Z" stroke="#1A1A1A" stroke-opacity="0.6" stroke-width="1.17953" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.25 7.22526C9.25 8.52817 8.24268 9.58432 7 9.58432C5.75732 9.58432 4.75 8.52817 4.75 7.22526C4.75 5.9224 5.75732 4.86621 7 4.86621C8.24268 4.86621 9.25 5.9224 9.25 7.22526Z" stroke="#1A1A1A" stroke-opacity="0.6" stroke-width="1.17953" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ form.city }}, {{ form.continent }}
        </div>
        <div class="pama-row lighter">
          <span class="pama-row-label">{{ dateRangeFormat }}</span>
          <span class="pama-row-label" style="margin-left:0.16rem;">{{ guestDetail }}</span>
        </div>
      </div>
      <div class="pama-right">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.2799 6.39981L11.7399 15.9398C10.7899 16.8898 7.96987 17.3298 7.33987 16.6998C6.70987 16.0698 7.13987 13.2498 8.08987 12.2998L17.6399 2.74978C17.8754 2.49284 18.1605 2.2863 18.4781 2.1426C18.7956 1.9989 19.139 1.921 19.4875 1.91366C19.8359 1.90633 20.1823 1.96967 20.5056 2.09988C20.8289 2.23009 21.1225 2.42449 21.3686 2.67129C21.6147 2.91809 21.8083 3.21219 21.9376 3.53585C22.0669 3.85952 22.1294 4.20602 22.1211 4.55447C22.1128 4.90292 22.0339 5.24611 21.8894 5.56326C21.7448 5.88041 21.5375 6.165 21.2799 6.39981Z" stroke="#FF3263" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#FF3263" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
    <div v-if="showMap" class="map-container">
      <div ref="map" id="map" class="map-box"></div>
    </div>
    <div v-else class="pam-list">
      <casino-box
        v-for="item in form.casinoList"
        :key="item.id"
        class="pam-item"
        :casino="item"
        :parent="form"
        @click="showDetail(item)"
      />
    </div>
    <travel-expert></travel-expert>
    <kt-footer />
    <div class="pam-map-pointer" @click="handleToggleMap">
      <svg v-if="showMap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <modal-booking
      v-if="showModal"
      :casino="selectedHotel"
      :room="selectedRoom"
      :search-query="searchQuery"
      @submit="handleOrderSubmit"
      @close="showModal=false"
    />
    <modal-tip
      v-if="showTip"
      msg="Hold on, we are finalizing your casino hotel..."
    />
  </div>
</template>

<script>
import casino from '@/mixins/casino'
import { formatObject2Query } from '@/utils/casino'
import dayjs from 'dayjs'

export default {
  name: 'DestinationMobilePage',
  mixins: [casino],
  props: {
    query: Object
  },
  data () {
    return {
      showMap: false,
      isMobile: window.isMobile,
      dateRangeFormat: '',
      guestDetail: ''
    }
  },
  watch: {
    query: {
      handler (val) {
        Object.assign(this.searchQuery, val)
        if (this.searchQuery.destinationId) {
          this.initInfo()
          this.handleSearch()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    initInfo () {
      let detail = ''
      if (this.searchQuery.date) {
        const [start, end] = this.searchQuery.date.split(',').map(d => parseInt(d, 10))
        // Friday, Jan 5 - Sat, Jan 6, 2024
        const startDate = dayjs(start).format('ddd, MMM	DD')
        const endDate = dayjs(end).format('ddd, MMM	DD, YYYY')
        this.dateRangeFormat = [startDate, endDate].join(' - ')
        const diff = dayjs(end).diff(dayjs(start), 'day')
        detail += diff + ' night '
      }
      if (this.searchQuery.guestList) {
        const audit = this.searchQuery.guestList.find(g => g.label === 'Adults')
        if (audit) {
          detail += (audit.value || 1) + ' guests'
        }
      }
      this.guestDetail = detail
    },
    handleToggleMap () {
      this.showMap = !this.showMap
      if (this.showMap) {
        this.initMapMarkers()
      }
    },
    showDetail (item) {
      if (!window.whiteList.includes(`/casino-profile/${item.slug}`)) {
        window.whiteList.push(`/casino-profile/${item.slug}`)
      }
      sessionStorage.setItem('casino', JSON.stringify(item))
      sessionStorage.setItem('cpid', item.id)
      this.$router.push({
        path: `/casino-profile/${item.slug}`,
        query: formatObject2Query(this.searchQuery)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-area-mobile {
  position: relative;
  background-color: #fff;
  .pam-map-pointer {
    position: fixed;
    background-color: #FF3263;
    right: 0.12rem;
    bottom: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 99;
  }
  .map-container {
    height: 7.88rem;
    .map-box {
      width: 100%;
      height: 100%;
    }
  }
  .pam-title {
    color: #1A1A1A;
    padding: 0.16rem 0.2rem 0.08rem;
    font-size: 0.2rem;
    font-weight: 400;
  }
  .pam-address {
    background: #F5F5F5;
    padding: 0.12rem 0.2rem;
    display: flex;
    align-items: center;
  }
  .pama-left {
    flex: 1;
    min-width: 0;
  }
  .pama-row {
    display: flex;
    align-items: center;
    color: #1A1A1A;
    font-size: 0.14rem;
    &.lighter {
      margin-top: 0.08rem;
      color: rgba(26, 26, 26, 0.60);
      font-size: 0.12rem;
    }
  }
  .pama-right {
    width: 24px;
    margin-left: 0.16rem;
  }
  .pam-item {
    margin-bottom: 0.08rem;
  }
  .pam-item-btn {
    margin-top: 8px;
    text-align: right;
  }
}
</style>
