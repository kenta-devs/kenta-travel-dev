<template>
	<!-- <page-views-destination-mobile v-if="isMobile" :hid="hid" :query="searchQuery" /> -->
	<page-views-destination-web :hid="hid" :query="searchQuery" />

	<!-- <page-views-destination-mobile v-if="isMobile" :hid="hid" :query="searchQuery" />
	<page-views-destination-web v-else :hid="hid" :query="searchQuery" /> -->
</template>

<script>
	import PageViewsDestinationWeb from '@/components/page-views/destination/web.vue'
	import PageViewsDestinationMobile from '@/components/page-views/destination/mobile.vue'
	import {
		updateSessionQuery
	} from '@/utils/casino'
	import {
		getIndexData,
		getIdByName
	} from '@/api/kentaHb'
	export default {
		name: 'DestinationPage',
		components: {
			PageViewsDestinationWeb,
			PageViewsDestinationMobile
		},
		head() {
			return {
				link: [{
					rel: 'stylesheet',
					href: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css'
				}]
			}
		},
		data() {
			return {
				isMobile: window.isMobile,
				hid: '',
				searchQuery: {
					destinationId: '',
					destinationName: '',
					date: '',
					gj: '',
					dateType: 0,
					selectedMonth: [],
					guestList: []
				}
			}
		},
		mounted() {
			this.getid()
			this.hid = sessionStorage.getItem('hid') || ''
			this.searchQuery.destinationName = this.$route.query.destinationName || ''
			this.searchQuery.dateType = parseInt(this.$route.query.dateType || 0)
			this.searchQuery.date = this.$route.query.date
			this.searchQuery.gj = this.$route.query.gj
			if (this.$route.query.selectedMonth) {
				this.searchQuery.selectedMonth = JSON.parse(this.$route.query.selectedMonth);
			}
			if (this.$route.query.guestList) {
				this.searchQuery.guestList = JSON.parse(this.$route.query.guestList);
			}
			updateSessionQuery(this.searchQuery)
			sessionStorage.removeItem('hid')
		},
		methods: {
			getid() {
				getIdByName({
					city: this.$route.params.id
				}).then(res => {
					this.searchQuery.destinationId = res[0].id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>