<template>
	<div class="page theme-xs2event">
		<new-header />
		<div class="banner">
			<div class="info">
				<div class="navigation">
					<span>בית</span>
					<i class="el-icon-arrow-right"></i>
					<span>אירועים</span>
					<i class="el-icon-arrow-right"></i>
					<span>{{$route.query.event_name}}</span>
				</div>
				<h1 class="name">
					{{$route.query.event_name}}
				</h1>
				<div class="time">
					<p>
						<img style="padding-right: 0;" src="~assets/images/icon/icon1.png" />
						<span>{{'אוג’'+ date_start + '- אוג’ ' + date_stop}}</span>
					</p>
					<p>
						<img src="~assets/images/icon/icon2.png" />
						<span>{{$route.query.event_name}}{{$route.query.city}}</span>
					</p>
					<p>
						<img src="~assets/images/icon/icon3.png" />
						<span style="direction: rtl;">{{$route.query.season}}{{$route.query.tournament_name}} </span>
					</p>
					<!-- <span class="Promo">Exclusive Promo</span>
						<span class="Casino"><img src="~assets/images/icon/icon4.png" />Sponsored by Asper Casino</span> -->
				</div>
			</div>
		</div>
		<!-- 选座 -->
		<img @click="showSeat" class="seat" src="~assets/images/seat.png" />
		<div class="content">
			<div class="left">
				<div class="tips">
					<p> כאן תוכלו למצוא את כל הכרטיסים שלנו לגראנד פרי האיטלקי. בחרו וקנו את כרטיסי הפורמולה 1
					</p>
					<p>לבחירתכם והבטיחו את ביקורכם ב-Autodromo Nazionale Monza. </p>
				</div>
				<div @mouseover="mouseover(index,item.category_id)" @mouseout="mouseout(item.category_id)"
					:class="[active==index?'active':'']" v-if="item.net_rate!='0'" class="item-li"
					v-for="(item,index) in list" :key="index">
					<div class="text">
						<div class="text-info">
							<img src="~assets/images/icon/icon7.png" />
							<div class="info">
								<h3>{{item.ticket_title}}</h3>
								<p>{{item.ticket_validity}}</p>
							</div>
						</div>
						<div class="icon-img icon-img1">
							<img v-if="item.options.numbered_seat" src="~assets/images/icon/icon6.png" />
							<img v-if="item.options.covered_seat" src="~assets/images/icon/icon5.png" />
							<img v-if="item.options.videowall" src="~assets/images/icon/room-feature.png" />
						</div>
					</div>
					<div @click="totripPage(item)" tag="button" class="button" style="cursor: pointer;direction: ltr;">
						€{{priceFn(item.net_rate)}} -הזמינו</div>
				</div>
			</div>
			<div class="right">
				<div id="venue-map"></div>
			</div>
		</div>
		<!-- 座位移动端 -->
		<el-drawer :with-header="false" :visible.sync="direction" size="100%" direction="btt">
			<mobile-header @close="direction=false" />
			<venue-map-m v-if="direction" @close="direction=false" ref="venueRef" />
		</el-drawer>
		<new-footer />

	</div>
</template>

<script>
	import {
		tickets
	} from '@/api/kentaHb'
	import * as d3 from "d3";
	import tday from '@/utils/time.js'
	import priceqf from '@/utils/priceqf.js'
	export default {
		name: 'engPage',
		data() {
			return {
				list: [],
				svgUrl: '',
				svg: '',
				active: -1,
				direction: false,
				InfoData: null,
				date_stop: '',
				date_start: '',
			}
		},
		async created() {
			this.getInfo()
			this.date_stop = tday.getdayTime(this.$route.query.date_stop)
			this.date_start = tday.getdayTime(this.$route.query.date_start)
		},
		methods: {
			priceFn(e) {
				if (e) {
					return priceqf.addThousandsSeparator(e)
				} else {
					return '0.00'
				}
			},
			// 下一页
			totripPage(e) {
				let date_time = tday.getdayTime(this.$route.query.date_stop) + ',' + tday.getdayTime(this.$route.query
					.date_start)
				let city_address = this.$route.query.event_name + this.$route.query.city

				e.venue_id = this.$route.query.venue_id
				e.event_id = this.$route.query.event_id
				e.event_name = this.$route.query.event_name
				e.date_time = date_time
				e.city_address = city_address

				// this.$router.push({
				// 	path: '/tripPage?data=' + JSON.stringify(e)
				// })
				this.$router.push({
					path: '/tripPage'
				})
				sessionStorage.setItem("TotripData", JSON.stringify(e))
			},
			// 移动端选座
			showSeat() {
				this.direction = !this.direction
				this.$nextTick(() => {
					this.$refs.venueRef.int(this.InfoData, this.$route.query.venue_id)
				})
			},
			// 鼠标移上去
			mouseover(index, category_id) {
				this.active = index
				const venueMap = document.getElementById('venue-map');
				var elements = venueMap.querySelectorAll(`.${CSS.escape(category_id)}`);
				elements.forEach(function(element) {
					element.classList.add('active');
				})
			},
			// 鼠标移除
			mouseout(category_id) {
				this.active = -1
				const venueMap = document.getElementById('venue-map');
				var elements = venueMap.querySelectorAll(`.${CSS.escape(category_id)}`);
				elements.forEach(function(element) {
					element.classList.remove('active');
				})
			},
			async getInfo() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})
				tickets({
					event_id: this.$route.query.event_id
				}).then(res => {
					this.list = res.tickets
					this.InfoData = res
					this.getmap(res)
					loading.close()
				}).catch(err => {
					loading.close()
				})
			},
			async getmap(res) {
				let that = this
				// svg 加载
				let url = 'https://cdn.xs2event.com/venues/' + this.$route.query.venue_id + '.svg'
				console.log(url)
				let svg = (await d3.xml(url)).documentElement;
				document.getElementById("venue-map").append(svg);
				// 页面一加载满足查找票是否在svg 存在 
				res.tickets.forEach(obj => {
					var elements = document.querySelectorAll(`.${CSS.escape(obj.category_id)}`);
					elements.forEach(function(element) {
						element.classList.add('nosale');
					})
				})
				var nosaleElements = document.querySelectorAll('.nosale')
				nosaleElements.forEach(Elements => {
					// 监听svg鼠标移入
					Elements.addEventListener('mouseover', function(e) {
						let ElementList = e.toElement.classList
						if (ElementList.length > 0) {
							that.list.forEach((item, index) => {
								ElementList.forEach(elm => {
									if (item.category_id == elm) {
										that.active = index
										Elements.classList.add("active")
									}
								})
							})
						}
					})
					// 监听svg鼠标移出
					Elements.addEventListener('mouseout', function(e) {
						that.active = -1
						Elements.classList.remove("active")
					})
				})

			}
		}
	}
</script>
<style lang="scss" scoped>
	@media (max-width: 820px) {
		.page {
			.content .right {
				display: none;
			}

			.seat {
				display: inline-block;
			}

			.text-info {
				flex: 1;
				flex-direction: column;
			}

			.content .item-li .info {
				margin: 0.08rem 0 0 0;
			}

			.content .item-li {
				padding: 0.16rem 0.16rem 0.72rem 0.16rem;
				height: auto;
				position: relative;
			}

			.content {
				width: 100%;
				padding: 0 0.2rem;
				margin-bottom: 0.4rem;
			}

			.content .item-li .button {
				width: calc(100% - 0.32rem);
				position: absolute;
				bottom: 0.16rem;
				left: 0.16rem;
			}

			.content .left .tips {
				margin: 0.4rem 0;
			}

			.banner {
				background: url('~assets/images/engPage-bg.png') no-repeat;
				background-size: 100% 100%;
				padding: 0 0.2rem 0.28rem 0.2rem;
				height: 3.12rem
			}

			.banner .info .navigation {
				margin-bottom: 0.16rem;
			}

			.banner .info .name {
				font-size: 0.4rem;
				padding: 0;
				line-height: 0.36rem;
			}

			.banner .info .time p {
				margin-top: 0.16rem;
			}

			.banner .info .time img {
				padding: 0;
				margin-left: 0.08rem;
			}

			.banner .info .time {
				flex-direction: column;
				align-items: flex-start;
			}

		}
	}

	.seat {
		display: none;
		width: 0.52rem;
		height: auto;
		position: fixed;
		right: 0.2rem;
		z-index: 1;
		bottom: 15%;
	}

	.text-info {
		display: flex;
	}

	.content {
		padding: 0.4rem 0.32rem 1rem 0.32rem;
		display: flex;
		flex-direction: row;
		width: 100%;
		direction: rtl;

		.active {
			border-color: rgba(255, 50, 99, 1) !important;
		}

		.item-li {
			margin-top: 0.15rem;
			height: 0.76rem;
			width: 100%;
			padding: 0 0.2rem;
			display: flex;
			align-items: center;
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 8px;

			.button {
				width: 1.34rem;
				height: 0.4rem;
				text-align: center;
				line-height: 0.4rem;
				border-radius: 8px;
				background-color: rgba(255, 50, 99, 1);
				font-size: 0.14rem;
				font-weight: 400;
				color: #fff;
				border: 1px solid rgba(255, 50, 99, 1);
			}

			.info {
				margin-left: 0.05rem;
				margin-right: 0.20rem;

				h3 {
					font-size: 0.20rem;
					font-weight: 500;
					color: rgba(26, 26, 26, 1);
				}

				p {
					margin-top: 0.05rem;
					font-size: 0.12rem;
					font-weight: 500;
					color: rgba(26, 26, 26, 0.6);
				}
			}

			.text {
				flex: 1;
				display: flex;
				align-items: flex-start;

				.icon-img {
					display: flex;
					align-items: center;
				}

				.icon-img1 {
					img {
						margin-left: 0.08rem;
					}
				}

				img {
					width: 0.24rem;
					height: 0.24rem;
					object-fit: contain;
				}

			}
		}

		.left {
			width: 6.80rem;

			.tips {
				width: 100%;
				font-size: 0.16rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
				margin-bottom: 0.5rem;
			}
		}

		.right {
			margin-right: 130px;
			flex: 1;

			img {
				width: 100%;
				object-fit: fill
			}

			// margin-left: 18rem;
			// width: 46.2rem;
			// height: 500px;
			// background-color: red;
		}
	}

	.banner {
		background: url('~assets/images/eng1.png') no-repeat;
		background-size: 100% 100%;
		display: flex;
		height: 4rem;
		padding: 0 0.32rem 0.6rem 0.32rem;
		box-sizing: border-box;
		align-items: flex-end;
		color: rgba(254, 254, 254, 1);
		direction: rtl;

		.info {
			flex: 1;

			.time {
				display: flex;
				align-items: center;
				font-size: 0.14rem;

				p {
					display: flex;
					align-items: center;
				}

				.Promo {
					margin-left: 0.3rem;
					margin-right: 0.2rem;
					color: rgba(255, 50, 99, 1);
					border: 1px solid rgba(255, 50, 99, 1);
					padding: 0.05rem 0.05rem;
					background-color: rgba(255, 50, 99, 0.16);
					border-radius: 6px;
				}

				.Casino {
					color: rgba(255, 184, 0, 1);
					border: 1px solid rgba(255, 184, 0, 1);
					padding: 0.05rem 0.05rem;
					background-color: rgba(255, 184, 0, 0.16);
					border-radius: 6px;
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						width: 0.12rem;
					}
				}

				img {
					width: 0.25rem;
					padding: 0 0.1rem;
				}
			}

			.name {
				padding: 0.10rem 0;
				font-size: 0.56rem;
				font-weight: 600;
				text-align: right;
			}

			.navigation {
				display: flex;
				align-items: center;
				font-size: 0.12rem;

				i {
					font-size: 0.10rem;
					padding: 0 0.05rem;
				}
			}
		}

	}
</style>