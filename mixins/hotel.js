import { casinoDetailSlug } from '@/api/casino'
import { getHotelRooms, getHotelInfo } from '@/api/hotel'
import { mapToken } from '@/config/map'
import { getLastestPrice } from '@/utils/index'
import { getHotelRoomsParams } from '@/utils/casino'

export default {
  data () {
    return {
      pageType: 0,
      btnList: [
        { label: 'Casino Overview', value: 0 },
        { label: 'Available Rooms', value: 1 },
        { label: 'Hotel Info', value: 2 }
      ],

      slugInfo: {
        casinoImages: []
      },
      hotelInfo: {},
      roomGroups: [],
      map: null
    }
  },
  methods: {
    async initDetail (slug) {
      try {
        const params = { slug }
        const res = await casinoDetailSlug(params)
        this.slugInfo = res.data || {}
        // this.slugInfo.hotelId = 'test_hotel'
        this.initHotelRooms()
        this.initMap()
      } catch (e) {
        console.log('get hotel info error: ', e)
      }
    },
    async initHotelRooms () {
      try {
        if (!this.slugInfo.hotelId) {
          return false;
        }
        const hotelInfoStr = localStorage.getItem(`c_${this.slugInfo.hotelId}`)
        let hotelInfo = {}
        if (hotelInfoStr) {
          hotelInfo = JSON.parse(hotelInfoStr)
        } else {
          const p = await getHotelRoomsParams(this.searchQuery)
          const params = {
            id: this.slugInfo.hotelId,
            ...p,
          }
          const hpRes = await getHotelRooms(params)
          const hotels = hpRes.data.hotels || []
          hotelInfo = hotels.find(h => h.id === this.slugInfo.hotelId)?.rates || []
        }
        if (hotelInfo) {
          const infoRes = await getHotelInfo({ id: this.slugInfo.hotelId, language: 'en' })
          this.hotelInfo = this.translateHotelInfo(infoRes.data || {})
          this.roomGroups = this.handleRatesGroup(hotelInfo, infoRes.data.room_groups)
        } else {
          this.hotelInfo = {}
          this.roomGroups = []
        }
      } catch (e) {
        console.log('init rooms error: ', e)
      }
    },
    changePageType (t) {
      this.pageType = t.value
      document.querySelector(`#pageBox${t.value}`).scrollIntoView({ behavior:'smooth' })
    },
    translateHotelInfo (info) {
      let clientWidth = 350
      if (window.isMobile) {
        clientWidth = document.body.clientWidth - 80
      }
      if (info.check_in_time) {
        info.$check_in_time_format = info.check_in_time.substring(0, 5)
        const [hour, minute] = info.check_in_time.split(':')
        const percent = (hour * 60 + minute * 1) / (24 * 60)
        info.$check_in_time_width = (1 - percent) * 100 + '%'
        info.$check_in_time_left = percent * clientWidth - 12 + 'px'
      }
      if (info.check_out_time) {
        info.$check_out_time_format = info.check_out_time.substring(0, 5)
        const [hour, minute] = info.check_out_time.split(':')
        const percent = (hour * 60 + minute * 1) / (24 * 60)
        info.$check_out_time_width = percent * 100 + '%'
        info.$check_out_time_left = percent * clientWidth - 12 + 'px'
      }
      if (info.description_struct) {
        const loclist = info.description_struct.find(hd => hd.title === 'Location')
        info.$location = loclist || { title: '', paragraphs: [] }
        const additional = info.description_struct.find(hd => hd.title === 'At the hotel')
        info.$additinal = additional || { title: '', paragraphs: [] }
      } else {
        info.$location = { title: '', paragraphs: [] }
        info.$additinal = { title: '', paragraphs: [] }
      }
      return info
    },
    handleRatesGroup (hpList, hiList) {
      const groupMap = {}
      hpList.forEach(hp => {
        const name = hp.room_data_trans.main_name
        const type = hp.room_data_trans.bedding_type || ''
        const key = `${name}|${type}`
        if (!groupMap[key]) {
          const info = hiList.find(hi => hi.name_struct.main_name === name && hi.name_struct.bedding_type === type) || {}
          groupMap[key] = {
            key,
            info,
            items: []
          }
        }
        hp.payment_options.payment_types.forEach(pt => {
          pt.$realAmount = pt.amount
          pt.amount = getLastestPrice(pt.amount)
        })

        groupMap[key].items.push(hp)
      })
      const groups = []
      for (let key in groupMap) {
        groups.push(groupMap[key])
      }
      console.log('groups = ', groups)
      return groups
    },
    async initMap () {
      try {
        await this.loadScript('https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js')
        mapboxgl.accessToken = mapToken
        this.map = new mapboxgl.Map({
          container: 'location-map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [this.slugInfo.longitude, this.slugInfo.latitude], // 设置初始地图中心点
          zoom: 13
        })
        this.map.flyTo({ center: [this.slugInfo.longitude, this.slugInfo.latitude] })
        new mapboxgl.Marker()
        .setLngLat([this.slugInfo.longitude, this.slugInfo.latitude])
        .addTo(this.map)

        return true
      } catch (e) {
        console.log('init map error: ', e)
        return false
      }
    },
    loadScript (src) {
      return new Promise((resolve, reject) => {
        let script = document.querySelector('#map_script')
        if (script && window.mapboxgl) {
          if (window.mapboxgl) {
            resolve({ loaded: true, err: null })
            return
          }
          script.parentElement.removeChild(script)
        }
        script = document.createElement('script')
        script.setAttribute('id', 'map_script')
        script.src = src
        script.onload = () => {
          resolve({ loaded: true, err: null })
        }
        script.onerror = error => {
          reject({ loaded: true, err: error })
        }
        document.body.appendChild(script)
      })
    }
  }
}
