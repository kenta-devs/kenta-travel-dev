<template>
	<div class="eventlPage">
		<div class="page">
			<new-header />
			<div class="warps">
				<div class="hotel">
					<div class="left flex">
						<div class="ismobile">
							<div class="nav">
								<span>אירועים</span>
								<i class="el-icon-arrow-left"></i>
								<span>בית</span>
							</div>
						</div>
						<div class="events">
							<!-- 移动端 筛选 -->
							<div class="filter" @click="show=!show">
								<img v-if="show" src="~assets/images/icon/filter.png" />
								<img v-else src="~assets/images/icon/mapcolse.png" />
							</div>
							<div class="day">
								{{page_size}} אירועים
								מתוך{{total_size}} אירועים
							</div>
							<div class="about">למדו על הסטנדרטים שלנו</div>
							<div class="item" v-show="show||!ism">
								<div class="item-li">
									<p>זמינות בזמן אמת</p>
									<img src="~assets/images/icon/checkmark.png" />
								</div>
								<div class="item-li">
									<p>מושבים אחד-ליד-השני</p>
									<img src="~assets/images/icon/checkmark.png" />
								</div>
								<div class="item-li">
									<p>אירועים מובטחים</p>
									<img src="~assets/images/icon/checkmark.png" />
								</div>
								<div class="item-li">
									<p>כרטיסים רישמיים</p>
									<img src="~assets/images/icon/checkmark.png" />
								</div>
							</div>
							<div class="select-list" v-show="show||!ism">
								<div v-if="(item.number_of_tickets!=0&&item.number_of_tickets)||item.is_popular"
									v-for="(item,index) in list" :key="index" class="select-li"
									@click="toEngPage(item)">
									<div class="flex icon">
										<span class="el-icon-back"></span>
									</div>
									<div class="flex price">
										<span v-if="item.number_of_tickets==0||item.number_of_tickets==null"
											class="no-stock">אזל המלאי</span>
										<span v-else
											class="num">€{{item.min_ticket_price_eur?priceFn(item.min_ticket_price_eur):'0.00'}}</span>
									</div>
									<div class="text">
										<p>{{item.season}} {{item.tournament_name}}</p>
										<p>{{item.venue_name}}</p>
										<p>{{item.city}} ({{item.iso_country}})</p>
									</div>
									<div class="info">
										<div class="xx" v-if="item.is_popular">
											<p class="xx-bg">
												<span>אירוע פופולרי</span>
												<img src="~assets/images/icon/icon4.png" />
											</p>
										</div>
										<h3>{{item.event_name}}</h3>
										<p class="time">
											{{fndate(item.date_stop)}},{{fndate(item.date_start)}}
										</p>
									</div>
								</div>
							</div>
							<div class="pages" v-show="show||!ism">
								<div v-if="hidePage" @click="next">הצג עוד 25</div>
								<div v-if="hideAll" @click="showAll">הצג הכל {{total_size}} תוצאות</div>
							</div>
						</div>
					</div>
					<div class="right" v-show="!show&&ism||!ism">
						<div class="nav nomobile">
							<span>אירועים</span>
							<i class="el-icon-arrow-left"></i>
							<span>בית</span>
						</div>
						<div class="Dates">
							<div class="name">תאריכים</div>
							<date-picker itemtypes="1" ref="myDatePicker" v-model="date" type="daterange"
								@pick="confirmDateRange" popperClass="date-content" value-format="yyyy-MM-dd"
								range-separator="至" start-placeholder="" end-placeholder="">
							</date-picker>
						</div>
						<div class="Sports">
							<div class="check">
								<div class="name">ענפי ספורט</div>
								<div class="check-li" @click="selectSport(item)" v-for="(item,index) in sportCounts"
									:key="index" v-if="index<sportIndex">
									<span>({{item.num}})</span>
									<p>{{item.name}}</p>
									<div class="check-img" :style="{backgroundColor:item.select?'rgb(255, 50, 99)':''}">
										<img src="~assets/images/icon/select.png" />
									</div>
								</div>
								<div class="total" @click="sportIndex=sportCounts.length">צפייה בהכל
									({{sportCounts.length}})</div>
							</div>
							<div class="check">
								<div class="name">מדינה</div>
								<div class="check-li" @click="selectCountry(item)" v-if="index<countryIndex"
									v-for="(item,index) in countryList" :key="index">
									<span>({{item.num}})</span>
									<p>{{item.name}}</p>
									<img class="icon-img" :src="item.flag" />
									<div class="check-img" :style="{backgroundColor:item.select?'rgb(255, 50, 99)':''}">
										<img src="~assets/images/icon/select.png" />
									</div>
								</div>
								<div class="total" @click="countryIndex=countryList.length">({{countryList.length}})
									צפייה
									בהכל</div>
							</div>

							<div class="check">
								<div class="name">ערים</div>
								<div @click="selectCity(item)" class="check-li" v-if="index<cityIndex"
									v-for="(item,index) in cityList" :key="index">
									<span>({{item.num}})</span>
									<p>{{item.name}}</p>
									<div class="check-img" :style="{backgroundColor:item.select?'rgb(255, 50, 99)':''}">
										<img src="~assets/images/icon/select.png" />
									</div>
								</div>
								<div class="total" @click="cityIndex=cityList.length">({{cityList.length}}) צפייה בהכל
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		events
	} from '@/api/kentaHbEvent'
	import dayjs from 'dayjs'
	import tday from '@/utils/time.js'
	import priceqf from '@/utils/priceqf.js'
	export default {
		data: () => ({
			dateType: 0,
			dayRageIndex: 0,
			monthIndex: 0,
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
			traveTypeText: 'A week',
			monthList: [],
			selectedMonth: [],
			date: '',
			list: [],
			total_size: 0,
			page_size: 0,
			maxItems: 25,
			hidePage: true,
			page: 1,
			hideAll: true,
			allList: [],
			cityList: [],
			sportCounts: [],
			countryList: [],
			cityIndex: 3,
			countryIndex: 3,
			sportIndex: 3,
			filtercountryList: [],
			filtercityList: [],
			filtersportCounts: [],
			filterAll: [],
			show: true,
			ism: false,
			form: {
				sport_type: '',
				date_start: '',
				tournament_name: '',
			}
		}),
		mounted() {
			this.getady()
			this.form.date_start = 'ge:' + this.getady()
			this.makMonthList();
			this.getEvents()
			this.checkIfMobile()
			window.addEventListener("resize", this.checkIfMobile);
		},
		methods: {
			priceFn(e) {
				if (e) {
					return priceqf.addThousandsSeparator(e)
				} else {
					return '0.00'
				}
			},
			fndate(e) {
				if (e) {
					return tday.getday(e)
				} else {
					return ''
				}
			},
			// 页面是否是移动端
			checkIfMobile() {
				if (820 < window.innerWidth) {
					this.ism = false
				} else {
					this.ism = true
				}
			},
			selectSport(item) {
				item.select = !item.select
				this.getselectSport()
			},
			getselectSport() {
				this.filtersportCounts = this.sportCounts.filter(item => item.select)
				this.fnfilter()
			},
			selectCountry(item) {
				item.select = !item.select
				this.getselectCountry()
			},
			getselectCountry() {
				this.filtercountryList = this.countryList.filter(item => item.select)
				this.fnfilter()
			},
			selectCity(item) {
				item.select = !item.select
				this.getselectCity()
			},
			getselectCity() {
				this.filtercityList = this.cityList.filter(item => item.select)
				this.fnfilter()
			},
			fnfilter() {
				this.page = 1
				this.list = []
				this.loading = true
				this.filterAll = []
				let that = this
				let filteredItems = this.allList.filter(item => {
					if (this.filtercountryList.length > 0 && this.filtercityList.length == 0) {
						return this.filtercountryList.map(item1 => item1.name).includes(item.country_name)
					} else if (this.filtersportCounts.length > 0) {
						return this
							.filtersportCounts.map(item1 => item1.name).includes(item.sport_type)
					} else if (this.filtercityList.length > 0 && this.filtercountryList.length == 0) {
						return this
							.filtercityList.map(item1 => item1.name).includes(item.city)
					} else {
						return this.filtercountryList.map(item1 => item1.name).includes(item.country_name) && this
							.filtercityList.map(item1 => item1.name).includes(item.city)
					}
				})
				if (filteredItems.length > 0) {
					this.list = filteredItems.length < this.maxItems ? filteredItems : filteredItems.slice(0, this
						.maxItems)

					this.filterAll = filteredItems
					this.total_size = filteredItems.length
					if (filteredItems.length < this.maxItems) {
						this.hideAll = false
						this.hidePage = false
					} else {
						this.hideAll = true
						this.hidePage = true
					}
					setTimeout(function() {
						that.loading = false
					}, 500)
				} else {
					this.page = 1
					this.filtercityList = []
					this.filtercountryList = []
					this.filtersportCounts = []
					this.getEvents()
				}
			},
			showAll() {
				this.page = 1
				this.hidePage = false
				this.hideAll = false
				this.list = (this.filterAll.length > 0 ? this.filterAll : this.allList)
			},
			next() {
				if (this.paginate((this.filterAll.length > 0 ? this.filterAll : this.allList), 25, this.page).length < this
					.maxItems) {
					this.hidePage = false
				} else {
					this.page++
					let list = this.paginate((this.filterAll.length > 0 ? this.filterAll : this.allList), 25, this.page)
					this.list = this.page > 1 ? [...this.list, ...list] : list
					if (list.length < this.maxItems) {
						this.hidePage = false
					}
				}
			},
			paginate(array, page_size, page_number) {
				const start = (page_number - 1) * page_size;
				const end = page_number * page_size;
				return array.slice(start, end);
			},
			//获取当前的年月日
			getady() {
				var currentDate = new Date();
				var year = currentDate.getFullYear();
				var month = currentDate.getMonth() + 1;
				var day = currentDate.getDate();
				month = (month < 10 ? '0' : '') + month;
				day = (day < 10 ? '0' : '') + day;
				var formattedDate = year + '-' + month + '-' + day;
				return formattedDate
			},
			// 获取数据
			getEvents() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})

				this.form.sport_type = this.$route.query.tournament_name ? 'soccer' : 'formula1'
				this.form.tournament_name = this.$route.query.tournament_name || '',
					events(this.form).then(res => {
						this.list = res.events.slice(0, this.maxItems)
						this.allList = res.events

						this.total_size = res.pagination.total_size
						this.page_size = res.pagination.page_size
						this.cityList = res.pagination.city_counts
						this.sportCounts = res.pagination.sport_counts
						this.countryList = res.pagination.country_counts
						if (res.events.length < this.maxItems) {
							this.hideAll = false
							this.hidePage = false
						} else {
							this.hideAll = true
							this.hidePage = true
						}
						loading.close()
					}).catch(err => {
						loading.close()
					})
			},
			toEngPage(item) {
				this.$router.push({
					path: '/engPage',
					query: {
						event_id: item.event_id,
						event_name: item.event_name,
						tournament_name: item.tournament_name,
						season: item.season,
						city: item.city,
						venue_id: item.venue_id,
						date_stop: item.date_stop,
						date_start: item.date_start
					}
				})
			},
			confirmDateRange(e) {
				// this.date =
				// 	`${dayjs(e[0]).format('DD')} ${this.monthEN['month' + dayjs(e[0]).format('MM') % 12].slice(0, 3)} - ${dayjs(e[1]).format('DD')} ${this.monthEN['month' + dayjs(e[1]).format('MM') % 12].slice(0, 3)}`
				// this.visible3 = false;
				// console.log(this.dateType);
				if (e.length > 0) {
					this.form.date_start = 'ge:' + tday.getdayTime(e[0])
					this.form.date_stop = 'ge:' + tday.getdayTime(e[1])
					this.loading = true
					this.getEvents()
				}
			},
			handleDateRange(index) {
				this.dayRageIndex = index;
			},
			handleTravelType(index, text) {
				this.travelTypeIndex = index;
				this.traveTypeText = text;
			},
			makMonthList() {
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
			handleMonth(index) {
				this.monthIndex = index;
				if (this.monthList[index].checked) {
					this.monthList[index].checked = false;
				} else {
					for (let i = 0; i < this.monthList.length; i++) {
						if (this.monthList[i].checked) {
							this.monthList[i].checked = false;
							break;
						}
					}
					this.$set(this.monthList[index], 'checked', true);
				}
				this.calcSelectMonth();
			},
			calcSelectMonth() {
				let selectedMonth = this.monthList.filter((item) => {
					return item.checked
				});
				let monthTextArr = [];
				for (let i = 0; i < selectedMonth.length; i++) {
					monthTextArr.push(selectedMonth[i].month.slice(0, 3))
				}
				this.selectedMonth = monthTextArr;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.warps {
		width: 100%;
		padding: 0 0.32rem 0 1.48rem;
	}

	@media (max-width: 820px) {
		.eventlPage {
			background-color: rgba(245, 245, 245, 1);
			min-height: 100vh;

			.warps {
				padding: 0 0.2rem;
			}

			.ismobile {
				display: inline-block;
				text-align: right;
				width: 100%;
				margin: 0.24rem 0;
			}

			.page .hotel .left .select-list .select-li {
				flex-direction: column-reverse;
				position: relative;
				align-items: flex-end;
			}

			.page .hotel .left .select-list .select-li .price {
				position: absolute;
				left: 0;
				bottom: 0.32rem;
			}

			.page .hotel .left .select-list .select-li .text p {
				margin-top: 0.08rem;
			}

			.pages {
				padding: 0.2rem 0;
			}

			.select-list .icon,
			.nomobile {
				display: none !important;
			}

			.filter {
				position: absolute;
				left: 0;
				background-color: #fff;
				top: 0;
				display: inline-block;
				height: 0.4rem;
				padding-top: 0.1rem;
				width: 0.48rem;
				text-align: center;
				border: 1px solid #DCDFE6;
				border-radius: 6px;
			}

			.filter img {
				width: 0.16rem;
				height: auto;
			}

			.hotel {
				flex-direction: column;

			}

			.page .hotel .left .events .item {
				flex-wrap: wrap;
				justify-content: flex-end;
				padding: 0.16rem 0.24rem 0 0.24rem;
			}

			.page .hotel .left .events .item .item-li {
				flex: inherit;
				text-align: right;
				margin-left: 0.08rem;
				margin-bottom: 0.16rem;
			}

			.page .hotel .left .events .item .item-li p {
				font-size: 0.14rem;
			}

			.warps {
				width: 100%;
			}

			.Sports {
				padding-bottom: 0.4rem;
			}

			.page .hotel .right .Dates {
				margin-top: 0.24rem;
			}

			.page .hotel .left {
				// padding: 0 0.2rem;
			}

			.page .hotel .left .events {
				padding: 0;
			}

			.page .hotel .right {
				width: 100%;
				margin-top: 0.16rem;
				border-left: none;
				padding: 0 0.2rem;
				background-color: #fff;
			}
		}
	}

	.ismobile,
	.filter {
		display: none;
	}

	.pages {
		display: flex;
		text-align: center;
		padding: 0.4rem 0;
		justify-content: flex-end;

		div {
			cursor: pointer;
			margin-left: 0.3rem;
			font-size: 0.16rem;
		}
	}

	.hotel::v-deep .el-date-range-picker__content.is-left {
		margin-right: 0
	}

	.hotel::v-deep .el-date-range-picker .el-picker-panel__body {
		min-width: 100%;
	}

	.hotel::v-deep .el-date-range-picker__content {
		width: 100%;
	}

	.page {

		.hotel {
			display: flex;

			.left {
				.select-list {
					.select-li {
						display: flex;
						align-items: center;
						padding: 0.32rem 0;
						border-bottom: 1px solid rgba(218, 218, 218, 1);
						cursor: pointer;

						.el-icon-back {
							font-size: 24px;
							color: rgba(26, 26, 26, 0.6);
						}

						.price {
							span {
								display: inline-block;
								padding: 0.08rem 0.16rem;
								font-size: 0.16rem;
								font-weight: 600;
								border-radius: 6px
							}

							.no-stock {
								background-color: rgba(238, 35, 68, 0.16);
								color: rgba(238, 35, 68, 1);
							}

							.num {
								background-color: rgba(0, 188, 147, 0.16);
								color: rgba(0, 188, 147, 1);
							}
						}

						.text {
							width: 1.60rem;
							text-align: right;

							p {
								margin-top: 4px;
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}
						}

						.info {
							width: 3.16rem;
							text-align: right;
							padding-left: 0.2rem;

							.time {
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}

							h3 {
								font-size: 0.16rem;
								font-weight: 600;
								margin: 0.12rem 0;
							}

							.xx {
								display: flex;
								justify-content: flex-end;

								.xx-bg {
									padding: 0.04rem 0.08rem;
									background-color: rgba(255, 184, 0, 0.16);
									border-radius: 6px;
									font-size: 0.12rem;
									font-weight: 400;
								}

							}

							img {
								width: 0.12rem;
								height: auto;
							}
						}
					}
				}

				.events {
					padding: 0.4rem 1rem 0 0;
					position: relative;

					.item {
						margin-top: 0.24rem;
						display: flex;
						align-items: center;
						padding: 0.12rem 0.16rem;
						background-color: rgba(0, 188, 147, 0.12);
						border-radius: 8px;

						.item-li {
							flex: 1;
							display: flex;
							justify-content: center;
							align-items: center;

							p {
								font-size: 0.16rem;
								font-weight: 400;
							}

							img {
								width: 0.16rem;
								height: auto;
								margin-left: 8px;
							}
						}
					}

					.about {
						margin-top: 0.16rem;
						font-size: 0.14rem;
						font-weight: 400;
						text-align: right;
						color: rgba(52, 81, 255, 1);
						text-decoration: underline;
					}

					.day {
						text-align: right;
						font-size: 0.16rem;
						font-weight: 400;
						direction: rtl;
					}
				}
			}

			.nav {
				display: flex;
				align-items: center;
				justify-content: flex-end;

				span {
					font-size: 0.12rem;
					font-weight: 400;
					color: rgba(26, 26, 26, 0.6)
				}

				i {
					margin: 0 4px;
					display: inline-block;
					font-size: 0.12rem;
					font-weight: 600;
					color: rgba(26, 26, 26, 0.6)
				}
			}

			.right {
				width: 3.64rem;
				padding: 0.24rem 0 0.24rem 0.32rem;
				border-left: 1px solid #DADADA;

				.Sports {
					.name {
						font-size: 0.16rem;
						font-weight: 500;
						text-align: right;
						margin-bottom: 0.16rem;
					}

					.check {
						margin-top: 0.4rem;

						.total {
							cursor: pointer;
							font-size: 0.12rem;
							font-weight: 400;
							text-align: right;
							color: rgba(26, 26, 26, 0.6);
							text-decoration: underline;
						}

						.check-li {
							display: flex;
							align-items: center;
							justify-content: flex-end;
							margin-bottom: 0.12rem;
							cursor: pointer;

							.icon-img {
								width: 0.2rem;
								height: auto;
								margin-left: 8px;
							}

							p {
								font-size: 0.16rem;
								font-weight: 400;
								margin-left: 8px;
							}

							span {
								font-size: 0.16rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.4);

							}

							.check-img {
								width: 0.16rem;
								margin-left: 8px;
								height: 0.16rem;
								text-align: center;
								display: flex;
								align-items: center;
								justify-content: center;
								border: 1px solid rgba(218, 218, 218, 1);
								box-sizing: border-box;
								border-radius: 2px;

								img {
									width: 10px;
									height: 10px;
									object-fit: contain
								}
							}
						}
					}
				}

				.Dates {
					margin-top: 0.4rem;

					.name {
						font-size: 0.16rem;
						font-weight: 500;
						text-align: right;
					}
				}


			}
		}
	}
</style>