<template>
	<div class="dates">
		<el-popover placement="bottom-start" trigger="click" :visible-arrow="false" popper-class="select-date-wrap"
			v-model="show">
			<div class="select-date-con">
				<!-- <div class="tabs">
					<div class="tab" :class="dateType == 0 ? 'active' : ''" @click="handleDateType(0)">
						Select your dates
					</div>
					<div class="tab" :class="dateType == 1 ? 'active' : ''" @click="handleDateType(1)">
						<span>New:&nbsp;</span> I’m flexible
					</div>
				</div> -->
				<div class="tab-con" v-if="dateType == 0">
					<date-picker ref="myDatePicker" v-model="dates" type="daterange" @pick="confirmDateRange"
						popperClass="date-content" value-format="yyyy-MM-dd" range-separator="至" start-placeholder=""
						end-placeholder="" />
					<!-- <div class="exact-dates">
						<div class="item" :class="dayRageIndex==0?'active':''" @click="handleDateRange(0)">Exact dates
						</div>
						<div class="item" :class="dayRageIndex==1?'active':''" @click="handleDateRange(1)">± 1 day</div>
						<div class="item" :class="dayRageIndex==2?'active':''" @click="handleDateRange(2)">± 2 days
						</div>
						<div class="item" :class="dayRageIndex==3?'active':''" @click="handleDateRange(3)">± 3 days
						</div>
						<div class="item" :class="dayRageIndex==7?'active':''" @click="handleDateRange(7)">± 7 days
						</div>
					</div> -->
				</div>
				<div class="tab-con" v-if="dateType == 1">
					<div class="travel-type">
						<div class="type-hd">Travel for...</div>
						<div class="item-list">
							<div class="item" :class="travelTypeIndex==0?'active':''"
								@click="handleTravelType(0,'A short weekend')">
								<div class="item-icon">
									<img src="~assets/images/date-type-1.png" alt="">
								</div>
								<div class="item-text">A short weekend</div>
								<div class="item-desc">Fri-Sun</div>
								<div class="item-radio"></div>
							</div>
							<div class="item" :class="travelTypeIndex==1?'active':''"
								@click="handleTravelType(1,'A long weekend')">
								<div class="item-icon">
									<img src="~assets/images/date-type-2.png" alt="">
								</div>
								<div class="item-text">a long weekend</div>
								<div class="item-desc">Thu-Mon</div>
								<div class="item-radio"></div>
							</div>
							<div class="item" :class="travelTypeIndex==2?'active':''"
								@click="handleTravelType(2,'A week')">
								<div class="item-icon">
									<img src="~assets/images/date-type-3.png" alt="">
								</div>
								<div class="item-text">A week</div>
								<div class="item-desc">7 days</div>
								<div class="item-radio"></div>
							</div>
							<div class="item" :class="travelTypeIndex==3?'active':''"
								@click="handleTravelType(3,'Two weeks')">
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
				<div v-show="dateType==0" v-if="hideDate">
					<el-input suffix-icon="el-icon-date" placeholder="Add dates" v-model="formDate1"
						@click.stop.native="handleVisible3" @clear="handleDateClear"></el-input>
					<div class="show-date-range" v-if="formDate1&&dayRageIndex>0">±{{ dayRageIndex }}</div>
					<div class="jb-bg" @click.stop="handleVisible3"></div>
				</div>

				<div v-show="dateType==1" v-if="hideDate">
					<el-input placeholder="Add dates" v-model="formDate2" @click.stop.native="handleVisible3"
						@clear="handleDateClear2"></el-input>
				</div>

			</div>
		</el-popover>

		<!-- 移动端的 -->
		<el-drawer :with-header="false" :visible.sync="direction" size="100%" direction="btt">
			<mobile-header @close="direction=false" />
			<div class="m-date">
				<div class="select-date-con">
					<div class="tab-con" v-if="dateType == 0">
						<date-picker ref="myDatePicker" v-model="dates" type="daterange" @pick="confirmDateRange"
							popperClass="date-content" value-format="yyyy-MM-dd" range-separator="至"
							start-placeholder="" end-placeholder="" />
					</div>
					<div class="tab-con" v-if="dateType == 1">
						<div class="travel-type">
							<div class="type-hd">Travel for...</div>
							<div class="item-list">
								<div class="item" :class="travelTypeIndex==0?'active':''"
									@click="handleTravelType(0,'A short weekend')">
									<div class="item-icon">
										<img src="~assets/images/date-type-1.png" alt="">
									</div>
									<div class="item-text">A short weekend</div>
									<div class="item-desc">Fri-Sun</div>
									<div class="item-radio"></div>
								</div>
								<div class="item" :class="travelTypeIndex==1?'active':''"
									@click="handleTravelType(1,'A long weekend')">
									<div class="item-icon">
										<img src="~assets/images/date-type-2.png" alt="">
									</div>
									<div class="item-text">a long weekend</div>
									<div class="item-desc">Thu-Mon</div>
									<div class="item-radio"></div>
								</div>
								<div class="item" :class="travelTypeIndex==2?'active':''"
									@click="handleTravelType(2,'A week')">
									<div class="item-icon">
										<img src="~assets/images/date-type-3.png" alt="">
									</div>
									<div class="item-text">A week</div>
									<div class="item-desc">7 days</div>
									<div class="item-radio"></div>
								</div>
								<div class="item" :class="travelTypeIndex==3?'active':''"
									@click="handleTravelType(3,'Two weeks')">
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
			</div>
		</el-drawer>
	</div>
</template>

<script>
	import dayjs from 'dayjs'
	import {
		formatDateRange
	} from '@/utils/index'
	import tday from '@/utils/time.js'

	export default {
		name: 'FilterDatepicker',
		props: {
			startAndEndTime: String,
			defaultTime: String,
			dateType: {
				type: Number,
				default: 0
			},
			dayRageIndex: {
				type: Number,
				default: 0
			},
			hideDate: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				show: false,
				dates: [],
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
					month0: 'December'
				},
				travelTypeIndex: 2,
				traveTypeText: 'A week',
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
				monthList: [],
				selectedMonth: [],
				formDate1: "",
				direction: false
			}
		},
		watch: {
			startAndEndTime: {
				handler(val) {
					if (val) {
						const [start, end] = val.split(',').map(t => parseInt(t, 10))
						this.dates = [new Date(start), new Date(end)]
					} else {
						this.dates = []
					}
				},
				immediate: true
			},
			defaultTime: {
				handler(val) {
					if (val) {
						this.formDate1 = val
					}
				},
				immediate: true
			}
		},
		computed: {
			// formDate1: {
			// 	get() {
			// 		return formatDateRange(this.startAndEndTime)
			// 	},
			// 	set() {}
			// },
			formDate2() {
				if (this.selectedMonth.length > 0) {
					return `${this.traveTypeText} in ${this.selectedMonth.join(',')}`;
				}
				return ''
			}
		},
		mounted() {
			if (!this.defaultTime) {
				let t = tday.tdaytime(0) + '/' + tday.tdaytime(1)
				let t1 = t.split("/")[0]
				let t2 = t.split("/")[1]
				let year = t1.split("-")[2].slice(2,4)
				
				let tc1 =  t1.split("-")[0] + '/' + t1.split("-")[1] + '/' + year
				let tc2 =  t2.split("-")[0] + '/' + t2.split("-")[1] + '/' + year
				this.formDate1 = tc2 +'-' + tc1
			}
			// console.log(tday.tdaytime(1),"时间")
			this.makMonthList()
		},
		methods: {
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
			handleVisible3() {
				if (window.isMobile) {
					this.direction = !this.direction
					// this.$router.push({
					// 	path: '/mobileIndexDate'
					// });
					// return;
				} else {
					this.show = !this.show;
				}
			},
			handleDateType(type) {
				this.$emit('update:datetype', type)
			},
			confirmDateRange(e) {
				const start = typeof e[0] === 'object' ? e[0].getTime() : new Date(e[0]).getTime()
				const end = typeof e[1] === 'object' ? e[1].getTime() : new Date(e[1]).getTime()

				this.formDate1 = tday.getday(start) + '/' + tday.getday(end)
				this.$emit("RangeTime", this.formDate1)
				this.show = false
				this.direction = false

				// console.log(tday.getday(start),tday.getday(end))
				// this.$emit('update:time', [start, end].join(','))
			},
			handleDateRange(index) {
				this.formDate1 = tday.tdaytime(0) + '/' + tday.tdaytime(index)
				this.$emit("RangeTime", this.formDate1)
				// this.$emit('update:daterange', index)
			},
			handleDateClear() {
				this.$emit('update:datetype', 0)
				this.$emit('update:daterange', 0)
				this.$refs.myDatePicker.minDate = ''
				this.$refs.myDatePicker.maxDate = ''
			},
			handleDateClear2() {
				for (let i = 0; i < this.monthList.length; i++) {
					this.$set(this.monthList[i], 'checked', false);
				}
				this.selectedMonth = [];
				this.travelTypeIndex = 2;
				this.traveTypeText = 'A week';
				this.$emit('update:datetype', 0)
			},
			handleTravelType(index, text) {
				this.travelTypeIndex = index;
				this.traveTypeText = text;
			},
			handleMonth(index) {
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
			calcSelectMonth() {
				let selectedMonth = this.monthList.filter((item) => {
					return item.checked
				});
				let monthTextArr = [];
				for (let i = 0; i < selectedMonth.length; i++) {
					monthTextArr.push(selectedMonth[i].month.slice(0, 3))
				}
				this.selectedMonth = monthTextArr;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@media (max-width: 820px) {
		.dates .jb-bg {
			display: inline-block;
		}

	}

	.m-date ::v-deep .el-picker-panel__body {
		width: 100%;
		min-width: 100%;
	}

	.m-date ::v-deep .el-date-range-picker__content {
		width: 100%;
		padding: 0.25rem 0.2rem;
		margin: 0 !important;
	}

	.m-date .tab-con {
		padding: 0 !important;
	}

	.date-show-inp::v-deep .el-input__inner {
		text-align: right;
	}

	.jb-bg {
		display: none;
		height: 32px;
		left: 1px;
		z-index: 1;
		width: 0.6rem;
		top: 4px;
		position: absolute;
		background: linear-gradient(90deg, #F5F5F5 44%, rgba(245, 245, 245, 0) 100%);
	}

	.date-show-inp {
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

		:deep(.el-input__inner) {
			background-color: #F5F5F5;
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

		.item+.item {
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
		justify-content: flex-end;
		direction: rtl;

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

			.item+.item {
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
</style>