<template>
	<!-- <div class="c-casino-box" :class="{ 'active': isActive, 'mobile': isMobile }" @click="$emit('click')"
		@mouseenter="$emit('enter')" @mouseleave="$emit('leave')"> -->
	<div class="casino">
		<div @click="toHotel(casino.hid)" @mouseenter="$emit('enter')" @mouseleave="$emit('leave')"
			class="c-casino-box">
			<!-- :class="{ 'active': isActive, 'mobile': isMobile }" -->
			<div class="ccb-left isMobile">
				<img :src="casino.first_image" class="ccb-img">
				<svg class="ccb-img-eye" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
					fill="none">
					<path
						d="M36.6665 20C34.9999 15 27.4999 8.33331 19.9999 8.33331C12.4999 8.33331 4.99992 15 3.33325 20"
						stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" />
					<path
						d="M3.33325 19.9999C4.99992 24.9999 12.4999 31.6666 19.9999 31.6666C27.4999 31.6666 34.9999 24.9999 36.6666 19.9999"
						stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" />
					<path
						d="M24.577 19.912C24.577 22.4687 22.5312 24.5831 19.9999 24.5831C17.4686 24.5831 15.4084 22.4687 15.4084 19.912C15.4084 17.3553 17.4686 15.4164 19.9999 15.4164C22.5312 15.4164 24.577 17.3553 24.577 19.912Z"
						stroke="#FEFEFE" stroke-width="1.5" />
				</svg>
			</div>

			<div class="ccb-right">
				<div class="title">
					<div class="index"><span>{{casino.rating}}</span></div>
					<div class="flex"></div>
					<div class="name">
						<h3>{{casino.name}}</h3>
						<p>{{casino.address}}</p>
					</div>
				</div>
				<div class="see">
					<div class="number">
						<div class="top">
							<!-- 填充空白的位置 -->
							<span v-for="j in Math.max(0, 5 - Math.floor(casino.rating / 2))"
								:key="'fraction-' + j"></span>
							<!-- 显示当前的分数 -->
							<span v-for="i in Math.min(5, Math.floor(casino.rating / 2))" :key="'current-' + i"
								class="current"></span>
							<img src="~assets/images/icon/image 1.png" />
						</div>
						<div class="text">
							0 ביקורות
						</div>
					</div>
					<div class="xx">
						<div class="top">
							<el-rate void-color="#FFB800" :value="casino.star_rating" />
							<div class="disabled"></div>
						</div>
						<div class="text"><span>{{casino.distance_client}}</span> ק״מ ממרכז העיר</div>
					</div>
				</div>
				<div class="price">
					<div class="num">₪ {{casino.daily_prices?casino.daily_prices[0]:'לא זמין'}}</div>
					<div class="text">
						<p style="direction: rtl; text-align: left;"> עבור {{casino.date}} לילות , {{casino.people}}
							אורחים
						</p>
						<div class="laber">
							ביטול ללא עלות<img src="~assets/images/icon/secure-shield.png" />
						</div>
					</div>
				</div>
			</div>

			<div class="ccb-left noMobile">
				<img :src="casino.first_image" class="ccb-img">
				<svg class="ccb-img-eye" font-weight="bold" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
					viewBox="0 0 40 40" fill="none">
					<path
						d="M36.6665 20C34.9999 15 27.4999 8.33331 19.9999 8.33331C12.4999 8.33331 4.99992 15 3.33325 20"
						stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" />
					<path
						d="M3.33325 19.9999C4.99992 24.9999 12.4999 31.6666 19.9999 31.6666C27.4999 31.6666 34.9999 24.9999 36.6666 19.9999"
						stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" />
					<path
						d="M24.577 19.912C24.577 22.4687 22.5312 24.5831 19.9999 24.5831C17.4686 24.5831 15.4084 22.4687 15.4084 19.912C15.4084 17.3553 17.4686 15.4164 19.9999 15.4164C22.5312 15.4164 24.577 17.3553 24.577 19.912Z"
						stroke="#FEFEFE" stroke-width="1.5" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CasinoBox',
		props: {
			parent: Object,
			casino: Object,
			isActive: Boolean,
			dayTime: String,
			adults: String,
			children: Array
		},
		data() {
			return {
				isMobile: window.isMobile
			}
		},
		methods: {
			toHotel(id) {
				this.$router.push({
					name: 'hotelPage',
					query: {
						id: id,
						time: this.dayTime,
						adults: this.adults
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-casino-box::v-deep .el-rate__item:nth-last-child(1) .el-rate__icon{
		font-size: 0.14rem;
		margin-top: 0.01rem;
	}

	@media (max-width: 820px) {
		.casino {
			.c-casino-box .ccb-right .title .name {
				margin-top: 0.16rem;
				padding-left: 0;
				flex: inherit;
				width: 100%;
			}

			.c-casino-box {
				display: flex;
				cursor: pointer;
				transition: none;
				padding: 0.16rem;
				box-sizing: border-box;
				border: 1px solid #fff;
				border-top-color: rgba(218, 218, 218, 1) !important;

				&.active,
				&:hover {
					border: none !important;
					background: none !important;
					transition: none !important;

					.ccb-title {
						color: #FF3263;
					}

					.ccb-img-eye {
						display: block;
					}
				}
			}

			.page-area .pac-item {
				margin-bottom: 0;
			}

			.c-casino-box.mobile {
				padding: 0.16rem 0;
			}

			.c-casino-box .ccb-right .price {
				margin-top: 0.08rem;
			}

			.c-casino-box {
				display: inline-block;
				width: 100%;
			}

			.c-casino-box .ccb-right {
				padding: 0;
			}

			.c-casino-box .ccb-left {
				width: 100%;
			}

			.c-casino-box .ccb-left img {
				width: 100%;
			}

			.ccb-left img {
				height: 100%;
			}

			.isMobile {
				display: block;
			}

			.noMobile {
				display: none;
			}

			.c-casino-box .ccb-right .title .index {
				position: absolute;
				top: 0.17rem;
				left: 0.32rem;
				z-index: 1;

				width: auto;
			}
		}

	}

	.isMobile {
		display: none;
	}

	.casino {
		position: relative;
	}



	.c-casino-box {
		display: flex;
		cursor: pointer;
		transition: ease .3s;
		padding: 0.16rem 0;
		box-sizing: border-box;
		border: 1px solid #fff;
		border-top-color: rgba(218, 218, 218, 1) !important;

		&.active,
		&:hover {
			transition: ease .3s;
			padding-right: 0.16rem;
			border: 1px solid #FF3263 !important;
			background: linear-gradient(0deg, rgba(255, 50, 99, 0.04) 0%, rgba(255, 50, 99, 0.04) 100%), #FEFEFE;

			.ccb-title {
				color: #FF3263;
			}

			.ccb-img-eye {
				display: block;
			}
		}

		&.mobile {
			padding: 0.16rem 0.2rem;
			border-radius: 0;
			border-width: 0 0 0.01rem;

			.ccb-left {
				flex: none;
				width: 0.88rem;
				height: 0.72rem;

				img {
					border-radius: 0.04rem;
				}
			}

			.ccb-title {
				font-size: 0.14rem;
			}

			.ccb-right {
				padding: 0;
				margin-left: 0.12rem;

			}
		}


		:deep(.el-rate__icon) {
			margin-right: 0;
			font-size: 0.16rem;
		}

		.ccb-left {
			width: 2.15rem;
			height: 1.62rem;
			position: relative;
			overflow: hidden;
		}


		.ccb-img-eye {
			display: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.ccb-right {
			flex: 1;
			padding: 0 0.16rem;

			.price {
				margin-top: 0.41rem;

				.num {
					font-size: 0.16rem;
					font-weight: 600;
				}

				.text {
					display: flex;
					align-items: center;

					.laber {
						border-radius: 6px;
						padding: 2.5px 8px;
						background-color: rgba(255, 184, 0, 0.16);
						display: flex;
						align-items: center;
						font-size: 0.12rem;
						font-weight: 400;

						img {
							width: 0.12rem;
							height: auto;
							margin-left: 4px;
						}
					}

					p {
						font-size: 0.12rem;
						font-weight: 400;
						flex: 1;
						color: rgba(26, 26, 26, 0.6);
					}
				}
			}

			.see {
				margin-top: 0.16rem;
				display: flex;

				.xx {
					text-align: right;
					position: relative;

					.disabled {
						width: 102px;
						height: 20px;
						position: absolute;
						top: 0;
						left: 0;
						z-index: 1;
					}

					.text {
						font-size: 0.12rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
						direction: rtl;
					}
				}

				.number {
					flex: 1;

					.text {
						margin-top: 4px;
						font-size: 0.12rem;
						font-weight: 400;
						direction: rtl;
						text-align: left;
					}

					.top {
						display: flex;
						align-items: center;

						img {
							width: 0.2rem;
							height: auto;
							margin-left: 4px;
						}

						.current {
							background-color: rgba(0, 188, 147, 1);
						}

						span {
							width: 8px;
							height: 8px;
							box-sizing: border-box;
							border: 1px solid rgba(0, 188, 147, 1);
							border-radius: 50%;
							display: inline-block;
							margin-right: 4px;
						}
					}
				}
			}

			.title {
				display: flex;
				align-items: center;

				.index {
					min-width: 0.28rem;
					padding: 0 0.03rem;
					height: 0.34rem;
					background: url("~assets/images/icon/Vector.png");
					background-size: 100% 100%;
					text-align: center;
					font-size: 0.14rem;
					font-weight: 600;
					line-height: 0.3rem;
					color: rgba(254, 254, 254, 1);
				}
				.flex{
					flex:1
				}

				.name {
					text-align: right;
					padding-left: 0.16rem;
					max-width: 350px;

					h3 {
						//width: 261px;
						font-size: 0.16rem;
						font-weight: 600;
						text-align: right;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					p {
						margin-top: 0.04rem;
						font-size: 0.12rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
					}
				}
			}
		}

		.ccb-title {
			margin-top: 0.04rem;
			color: #1A1A1A;
			font-size: 16px;
			font-weight: 500;
		}

		.ccb-detail {
			position: relative;
			height: 0.16rem;
			margin-top: 0.04rem;
			color: rgba(26, 26, 26, 0.60);
			font-size: 20px;
			font-weight: 400;
			transform: scale(0.5) translate(-50%, 0);
		}

		.ccb-star {
			display: flex;
			align-items: center;
		}

		.ccb-star-label {
			color: rgba(26, 26, 26, 0.60);
			font-size: 0.12rem;
		}

		.ccb-text {
			margin-top: 0.16rem;
			color: rgba(26, 26, 26, 0.40);
			font-size: 0.12rem;
		}

		.ccb-coast {
			margin-top: 0.08rem;
			display: flex;
			align-items: center;
		}

		.ccbc-old {
			color: rgba(26, 26, 26, 0.60);
			font-size: 0.12rem;
			text-decoration: line-through;
		}

		.ccbc-num {
			margin: 0 0.08rem;
			color: #1A1A1A;
			font-size: 0.16rem;
		}

		.ccbc-label {
			color: #1A1A1A;
			font-size: 0.14rem;
			font-weight: 300;
		}

		.ccbc-save {
			margin-left: 0.08rem;
			padding: 0.02rem 0.04rem;
			line-height: 1;
			border-radius: 0.04rem;
			background: #00BC93;
			color: #FEFEFE;
			font-size: 0.12rem;
		}
	}
</style>