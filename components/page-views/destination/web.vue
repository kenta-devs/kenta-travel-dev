<template>
	<div class="page-box">
		<div class="page-area">
			<new-header />
			<div class="page-area-content">
				<div class="pac-left" :style="{display:windowWidth<820?displayMap:'block'}">
					<div class="pac-right-top map-menu" :style="{display:windowWidth<820?displayMap:'none'}">
						<div class="pac-search">
							<div class="flex">
								<div class="search-btn" @click="citysearch"></div>
								<el-autocomplete @keyup.enter.native="citysearch" suffix-icon="el-icon-search"
									class="pac-input" v-model="searchQuery.destinationName"
									:fetch-suggestions="querySearch" @focus="searchQuery.destinationName=''"
									:placeholder="$route.params.id" @select="handleSelect">
									<template slot-scope="{ item }">
										<div>{{ item.city }}</div>
									</template>
								</el-autocomplete>
							</div>
							<div class="iconBox-m">
								<div class="iconBox">
									<div class="search-icon" @click="showMap">
										<img style="width: 0.12rem; height: 0.12rem;"
											src="~assets/images/icon/mapcolse.png" />
									</div>
									<div class="search-icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
											viewBox="0 0 16 16" fill="none">
											<path
												d="M2.66669 3.33333H4.66669M9.33335 3.33333H13.3334M9.33335 3.33333C9.33335 2.59695 8.73642 2 8.00002 2C7.26362 2 6.66669 2.59695 6.66669 3.33333C6.66669 4.06971 7.26362 4.66667 8.00002 4.66667C8.73642 4.66667 9.33335 4.06971 9.33335 3.33333ZM6.66669 8H10.6667M10.6667 8C10.6667 8.7364 11.2636 9.33333 12 9.33333C12.7364 9.33333 13.3334 8.7364 13.3334 8C13.3334 7.2636 12.7364 6.66667 12 6.66667C11.2636 6.66667 10.6667 7.2636 10.6667 8ZM2.66669 8H4.66669M7.33335 12.6667H13.3334M4.00002 11.3333C4.7364 11.3333 5.33335 11.9303 5.33335 12.6667C5.33335 13.4031 4.7364 14 4.00002 14C3.26364 14 2.66669 13.4031 2.66669 12.6667C2.66669 11.9303 3.26364 11.3333 4.00002 11.3333Z"
												stroke="#1A1A1A" stroke-opacity="0.6" stroke-linecap="round" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					<page-hotel v-if="selectedHotel" :casino="selectedHotel" :search-query="searchQuery"
						:selected-room="selectedRoom" @room-select="handleRoomSelect" />
					<div v-else class="map-container">
						<div ref="map" id="map" class="map-box"></div>
					</div>
				</div>
				<div class="pac-right" :style="{display:windowWidth<820?displayRight:'block'}">
					<div class="pac-right-top">
						<div class="pac-search">
							<div class="flex">
								<div class="search-btn" @click="citysearch"></div>
								<el-autocomplete @keyup.enter.native="citysearch" suffix-icon="el-icon-search"
									class="pac-input" v-model="searchQuery.destinationName"
									:fetch-suggestions="querySearch" @focus="searchQuery.destinationName=''"
									:placeholder="$route.params.id" @select="handleSelect">
									<template slot-scope="{ item }">
										<div>{{ item.city }}</div>
									</template>
								</el-autocomplete>
							</div>
							<div class="iconBox-m">
								<div class="iconBox">
									<div class="search-icon" @click="showMap">
										<img src="~assets/images/icon/solar_map-broken@2x.png" />
									</div>
									<div class="search-icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
											viewBox="0 0 16 16" fill="none">
											<path
												d="M2.66669 3.33333H4.66669M9.33335 3.33333H13.3334M9.33335 3.33333C9.33335 2.59695 8.73642 2 8.00002 2C7.26362 2 6.66669 2.59695 6.66669 3.33333C6.66669 4.06971 7.26362 4.66667 8.00002 4.66667C8.73642 4.66667 9.33335 4.06971 9.33335 3.33333ZM6.66669 8H10.6667M10.6667 8C10.6667 8.7364 11.2636 9.33333 12 9.33333C12.7364 9.33333 13.3334 8.7364 13.3334 8C13.3334 7.2636 12.7364 6.66667 12 6.66667C11.2636 6.66667 10.6667 7.2636 10.6667 8ZM2.66669 8H4.66669M7.33335 12.6667H13.3334M4.00002 11.3333C4.7364 11.3333 5.33335 11.9303 5.33335 12.6667C5.33335 13.4031 4.7364 14 4.00002 14C3.26364 14 2.66669 13.4031 2.66669 12.6667C2.66669 11.9303 3.26364 11.3333 4.00002 11.3333Z"
												stroke="#1A1A1A" stroke-opacity="0.6" stroke-linecap="round" />
										</svg>
									</div>
								</div>
							</div>

							<!-- <el-autocomplete class="pac-input" v-model="searchQuery.destinationName"
							placeholder="לאס וגאס, ארה״ב" suffix-icon="el-icon-search"
							:fetch-suggestions="queryFetch" @focus="searchQuery.destinationName=''"
							@blur="handleQueryBlur" @select="handleQuerySelect" /> -->
						</div>
						<div class="pac-filters">
							<filter-datepicker @RangeTime="RangeTime" class="pacf-dp"
								:start-and-end-time="searchQuery.date" :date-type="searchQuery.dateType"
								:day-rage-index="dayRageIndex" @update:datetype="updateDateType"
								@update:time="updateStartEndTime" @update:daterange="updateDateRange" />
							<filter-member :list="searchQuery.guestList" class="pacf-mb" @change="changeGuests" />
							<div class="button-filters">
								<button-filter :disabled="!!selectedRoom" @click="handleFilterList" />
							</div>
						</div>
						<div class="map-title">
							<h2>{{cityList.length}} מלונות אטרקטיבים זמינים</h2>
							<p class="p">אנחנו מסירים אלפי תוצאות של מלונות, על מנת לחסוך לך זמן.</p>
							<p class="a">למדו על הסטנדרטים שלנו</p>
						</div>
					</div>

					<div class="pac-list">
						<!-- <template v-if="selectedRoom">
						<casino-box class="pac-item" :casino="selectedHotel" is-active :parent="form" />
						<div class="pac-item-btn">
							<el-button type="primary" plain @click="clearRoomSelected">Remove</el-button>
						</div>
						<module-price-total :room="selectedRoom" :search-query="searchQuery" class="pac-button"
							@next="openBookingModal" />
					</template> -->
						<casino-box :adults="adults" :dayTime="dayTime" v-for="(item,index) in cityList" :key="index"
							class="pac-item" :casino="item" :parent="form" @enter="showMapPopper(item)"
							@leave="hideMapPopper(item)" @click="showDetail(item)" />
					</div>
				</div>
			</div>
			<!-- <travel-expert></travel-expert> -->
			<!-- <new-footer /> -->
			<modal-booking v-if="showModal" :casino="selectedHotel" :room="selectedRoom" :search-query="searchQuery"
				@submit="handleOrderSubmit" @close="showModal=false" />
			<modal-tip v-if="showTip" msg="Hold on, we are finalizing your casino hotel..." />
			<filter-more v-if="showFilterPanel" :filter-query="filterQuery" @close="showFilterPanel=false" />
		</div>
	</div>
</template>

<script>
	import casino from '@/mixins/casino'
	import tday from '@/utils/time.js'
	export default {
		name: 'DestinationWebPage',
		mixins: [casino],
		props: {
			query: Object,
			hid: String
		},
		data() {
			return {
				isMobile: window.isMobile,
				showFilterPanel: false,
				dayTime: tday.tdaytime(0) + '/' + tday.tdaytime(1),
			}
		},
		watch: {
			query: {
				handler(val) {
					Object.assign(this.searchQuery, val)
					if (this.searchQuery.destinationId) {
						this.handleSearch(this.searchQuery.destinationId)
					}
				},
				deep: true,
				immediate: true
			}
		},
		mounted() {
			this.initDestinations()
		},
		methods: {

			RangeTime(time) {
				this.dayTime = time
				this.getprice(this.dayTime)
			},
			showDetail(item) {
				this.selectedHotel = item
			},
			openBookingModal() {
				this.showModal = true
			},
			handleQueryBlur() {
				if (!this.searchQuery.destinationName) {
					this.searchQuery.destinationName = this.$route.query.destinationName || ''
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-box::v-deep .el-rate {
		direction: rtl;
	}

	@media (max-width: 820px) {
		.page-box {
			.pac-filters {
				direction: rtl;
			}
			.page-area .pac-item {
				margin-bottom: 0;
			}


			.page-area .pac-list {
				overflow-y: inherit;
				height: auto;
				padding: 0;
			}

			.page-area .pac-left {
				display: none;
				width: 100%;
				margin-right: 0;
			}

			.page-area .pac-right {
				width: 100%;
				position: inherit;
			}

			.page-area .pac-right-top {
				padding: 0.16rem 0.2rem 0 0.2rem;
				box-sizing: border-box;
			}

			.page-area .pac-search {
				margin-top: 0;
			}

			.page-area .pac-search .iconBox-m {
				display: inline-block;
			}

			.button-filters {
				display: none;
			}

			.page-area .pacf-mb {
				margin-left: 0;
			}
		}
	}

	.map-menu {
		display: none;
		padding-bottom: 0.16rem !important;
		width: 100%;
	}

	.pac-filters ::v-deep .el-input__icon {
		color: #333;
		font-weight: bold;
	}

	.page-area {

		.map-title {
			padding: 0.24rem 0;
			text-align: right;

			h2 {
				font-size: 0.16rem;
				font-weight: 500;
				text-align: right;
			}

			.p {
				margin-top: 0.08rem;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
			}

			.a {
				margin-top: 0.16rem;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(52, 81, 255, 1);
				text-decoration: underline;
				cursor: pointer;

			}
		}

		.pac-search {
			position: relative;
			display: flex;
			align-items: center;

			.flex {
				flex: 1
			}

			.iconBox-m {
				display: none;
			}

			.iconBox {
				display: flex;
				align-items: center;
			}

			.search-icon {
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				border: 1px solid #DCDFE6;
				width: 0.52rem;
				border-radius: 4px;
				margin-left: 0.08rem;

				img {
					width: 20px;
					height: auto;
				}

				svg {
					font-weight: bold;
				}
			}
		}

		.search-btn {
			cursor: pointer;
			width: 60px;
			height: 40px;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
		}

		.pac-search ::v-deep .el-input__inner {
			text-align: right;
			padding-right: 15px;
		}

		.pac-search ::v-deep .el-input__inner::placeholder {
			color: rgba(26, 26, 26, 1);
		}

		.pac-search ::v-deep .el-input__suffix {
			left: 15px;
			right: auto;
			font-size: 18px;
			color: rgba(26, 26, 26, 1);
		}

		.page-area-content {
			display: flex;
			//padding: 0 0.32rem;
			height: calc(100vh - 64px);
			// max-width: 1440px;
			//margin: 0 auto 0.8rem auto;
		}

		.pac-left {
			flex: 7;
			min-width: 0;
			border-right: 1px solid #DADADA;
			margin-right: 0.16rem;
			z-index: 100;
		}

		.map-container {
			height: 100%;

			.map-box {
				width: 100%;
				height: 100%;
			}

			:deep(.mapboxgl-popup-content) {
				padding: 0;
				width: 200px;
			}

			:deep(.map-pp-img) {
				width: 100%;
				height: 120px;
				border-radius: 6px 6px 0 0;
			}

			:deep(.map-pp-title) {
				margin: 2px 12px 0;
				font-size: 0.16rem;
				font-weight: 500;
				color: rgba(26, 26, 26, 0.87);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			:deep(.map-pp-text) {
				margin: 8px 12px 0;
				color: rgba(26, 26, 26, 0.60);
				font-size: 0.12rem;
				font-weight: 400;
			}

			:deep(.map-pp-line) {
				margin: 8px 12px 0;
				background: rgba(26, 26, 26, 0.16);
				width: 40px;
				height: 1px;
			}

			:deep(.map-pp-price) {
				margin: 12px 12px 10px;
				text-align: right;
				color: rgba(26, 26, 26, 0.60);
				font-size: 12px;
				font-weight: 400;
			}

			:deep(.map-pp-price-no) {
				color: rgba(26, 26, 26, 0.87);
				font-size: 16px;
				font-weight: 400;
			}
		}

		.pac-right {
			position: sticky;
			top: 0.88rem;
			flex: 5.5;
			// min-width: 0;
			height: 100%;
			background: #FEFEFE;
			display: flex;
			flex-direction: column;
			// flex: 3;
			width: 6.28rem;

		}

		.pac-right-top {
			padding: 16px 16px 0 24px;
		}

		.pac-title {
			color: #1A1A1A;
			font-size: 0.2rem;
			font-weight: 400;
		}

		.pac-search {
			margin-top: 0.16rem;
			width: 100%;
		}

		.pac-input {
			width: 100%;
		}

		.pac-filters {
			margin-top: 0.08rem;
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

		.pac-list {
			padding: 0 16px;
			height: calc(100vh - 304px);
			overflow-y: auto;
		}

		.pac-item {
			margin-bottom: 0.08rem;
		}

		.pac-item-btn {
			margin-top: 8px;
			text-align: right;
		}

		.pac-button {
			border: solid #DADADA;
			border-width: 1px 1px 0;
			border-radius: 6px;
			margin-top: 30px;
		}
	}
</style>