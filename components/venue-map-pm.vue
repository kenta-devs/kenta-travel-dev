<template>
	<div class="map">
		<div class="filter" v-if="iscolse" @click="colse">
			<img src="~assets/images/icon/mapcolse.png" />
		</div>
		<div id="venue-map-m"></div>
	</div>
</template>

<script>
	import * as d3 from "d3";
	export default {
		props: {
			iscolse: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				venue_id: ''
			}
		},
		methods: {
			colse() {
				this.venue_id = ""
				this.$emit("close")
			},
			// 加载
			int(res, venue_id) {
				this.venue_id = venue_id
				this.getmap(res)
			},
			// 鼠标移上去
			mouseover(index, category_id) {
				this.active = index
				const venueMap = document.getElementById('venue-map-m');
				var elements = venueMap.querySelectorAll(`.${CSS.escape(category_id)}`);
				elements.forEach(function(element) {
					element.classList.add('active');
				})
			},
			// 鼠标移除
			mouseout(category_id) {
				this.active = -1
				const venueMap = document.getElementById('venue-map-m');
				var elements = venueMap.querySelectorAll(`.${CSS.escape(category_id)}`);
				elements.forEach(function(element) {
					element.classList.remove('active');
				})
			},
			async getmap(res) {
				let that = this
				// svg 加载
				let url = 'https://cdn.xs2event.com/venues/' + this.venue_id + '.svg'
				let svg = (await d3.xml(url)).documentElement;
				document.getElementById("venue-map-m").append(svg);
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
	.map {
		padding: 0.24rem 0.2rem;
	}

	.filter {
		background-color: rgba(245, 245, 245, 1);
		display: inline-block;
		height: 0.4rem;
		padding-top: 0.12rem;
		width: 0.48rem;
		text-align: center;
		border: 1px solid #DADADA;
		border-radius: 6px;
		margin-bottom: 0.4rem;
	}

	.filter img {
		width: 0.11rem;
		height: auto;
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
		padding: 0.5rem 0 0.35rem 0;
		display: flex;
		flex-direction: row;
		width: 1440px;
		margin: 0 auto 0.8rem auto;
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

				img {
					width: 0.24rem;
					// margin-right: 0.15rem;
				}

			}
		}

		.left {
			flex: 1;

			.tips {
				width: 100%;
				font-size: 0.16rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
				margin-bottom: 0.5rem;
			}
		}

		.right {
			margin-right: 180px;
			width: 566px;

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