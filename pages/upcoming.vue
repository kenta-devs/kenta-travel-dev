<template>
	<div>
		<new-header tabshow />
		<div class="warps">
			<div class="content">
				<div class="title">
					<h1>חופשות</h1>
					<el-tabs v-model="activeName">
						<el-tab-pane label="ביטולים" name="1"></el-tab-pane>
						<el-tab-pane label="היסטוריה" name="2"></el-tab-pane>
						<el-tab-pane label="החופשות הבאות" name="3"></el-tab-pane>
					</el-tabs>
					<!-- <div class="list">
						<div class="li">

							<div class="laber-top" v-if="activeName==1">ההזמנה בוטלה<i class="el-icon-check"></i></div>

							<img class="img" src="~assets/images/Rectangle 616.png" alt="">
							<div class="info">
								<div class="name">
									<div class="ka">
										<img src="~assets/images/icon/icon17.png" alt="">
									</div>
									<div class="flex"></div>
									<div class="r-tit">
										<h2>Wynn Las Vegas</h2>
										<p>3655 Las Vegas Blvd S, Paradise</p>
									</div>
								</div>
								<div class="item-li">
									<div class="price">₪ 1,050</div>
									<div class="flex"></div>
									<div class="xx">
										<el-rate void-color="#FFB800" :value="5" />
										<div class="disabled"></div>
									</div>
								</div>
								<div class="item-li item-li-b">
									<div class="text">עבור 2 לילות, 2 אורחים</div>
									<div class="flex"></div>
									<div class="text">עבור 2 לילות, 2 אורחים</div>
								</div>
								<div class="footer" v-if="activeName==3">
									<div class="laber">המלון אושר <i class="el-icon-check"></i></div>
									<div class="flex"></div>
									<p>26/8 - 28/8</p>
									<img class="icon" src="~assets/images/icon/calendar-days-svgrepo-com 2.png" alt="">
									<p class="t">ביטול ללא עלות</p>
									<img class="icon"
										src="~assets/images/icon/secure-shield-password-protect-safe-svgrepo-com (1) 2.png"
										alt="">
								</div>
							</div>
						</div>
						<div class="li">

							<div class="laber-top" v-if="activeName==1">ההזמנה בוטלה<i class="el-icon-check"></i></div>

							<img class="img" src="~assets/images/Rectangle 616.png" alt="">
							<div class="info">
								<div class="name">
									<div class="ka">
										<img src="~assets/images/icon/icon17.png" alt="">
									</div>
									<div class="flex"></div>
									<div class="r-tit">
										<h2>Wynn Las Vegas</h2>
										<p>3655 Las Vegas Blvd S, Paradise</p>
									</div>
								</div>
								<div class="item-li">
									<div class="price">₪ 1,050</div>
									<div class="flex"></div>
									<div class="xx">
										<el-rate void-color="#FFB800" :value="5" />
										<div class="disabled"></div>
									</div>
								</div>
								<div class="item-li item-li-b">
									<div class="text">עבור 2 לילות, 2 אורחים</div>
									<div class="flex"></div>
									<div class="text">עבור 2 לילות, 2 אורחים</div>
								</div>
								<div class="footer" v-if="activeName==3">
									<div class="laber">המלון אושר <i class="el-icon-check"></i></div>
									<div class="flex"></div>
									<p>26/8 - 28/8</p>
									<img class="icon" src="~assets/images/icon/calendar-days-svgrepo-com 2.png" alt="">
									<p class="t">ביטול ללא עלות</p>
									<img class="icon"
										src="~assets/images/icon/secure-shield-password-protect-safe-svgrepo-com (1) 2.png"
										alt="">
								</div>
							</div>
						</div>
					</div> -->
					<!-- 无数据 -->
					<div class="no-data" v-if="activeName==3">
						<img class="icon" src="~assets/images/icon/Asset 71 1.png" alt="">
						<div>אין לך טיולים קרובים</div>
						<router-link to="/">
							<p class="p">תכננ/י את הטיול הבא שלך</p>
						</router-link>
					</div>
					<div class="no-data" v-if="activeName==2">
						<img class="icon" src="~assets/images/icon/Asset 71 1.png" alt="">
						<div>אין לך היסטוריית חופשות</div>
						<p class="p1">
							אם משהו לא נראה תקין,
							<router-link to="/">
								<span>שלחו לנו הודעה.</span>
							</router-link>
						</p>
					</div>
					<div class="no-data" v-if="activeName==1">
						<img class="icon" src="~assets/images/icon/Asset 71 1.png" alt="">
						<div>אין לך חופשות שהתבטלו</div>
						<p class="p1">
							אם משהו לא נראה תקין,
							<router-link to="/">
								<span>שלחו לנו הודעה.</span>
							</router-link>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: "3"
			}

		},
		mounted() {
			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");
		}
	}
</script>

<style lang="scss" scoped>
	.no-data {
		text-align: center;
		padding-top: 0.8rem;

		div {
			font-size: 0.32rem;
			margin-bottom: 0.16rem;
		}
		.p1{
			span{
				cursor: pointer;
				color: rgba(52, 81, 255, 1);
				text-decoration: underline;
			}
		}

		.p {
			cursor: pointer;
			color: rgba(52, 81, 255, 1);
			text-decoration: underline;
		}

		img {
			width: 1.28rem;
			height: auto;
		}
	}

	.list {
		margin-top: 0.4rem;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;

		.li {
			cursor: pointer;
			width: 4rem;
			border-radius: 8px;
			position: relative;
			margin-left: 0.24rem;
			margin-bottom: 0.24rem;

			.laber-top {
				z-index: 10;
				position: absolute;
				top: 0.16rem;
				right: 0.16rem;
				display: inline-block;
				padding: 6px 10px;
				background-color: rgba(255, 50, 99, 1);
				border-radius: 200px;
				color: #fff;
				font-size: 0.12rem;

				i {
					font-weight: bold;
					font-size: 10px;
					margin-left: 3px;
				}
			}

			.item-li-b {
				margin-bottom: 0.16rem;
			}

			.footer {
				border-top: 1px solid rgba(218, 218, 218, 1);
				padding: 8px 0.16rem;
				background-color: rgba(245, 245, 245, 1);
				display: flex;
				align-items: center;

				p {
					color: rgba(26, 26, 26, 0.6);
					font-size: 0.12rem;
				}

				.t {
					margin-left: 0.24rem;
				}

				.icon {
					width: 0.12rem;
					height: auto;
					margin-left: 4px;
				}

				.laber {
					display: inline-block;
					padding: 6px 10px;
					background-color: rgba(0, 188, 147, 1);
					border-radius: 200px;
					color: #fff;
					font-size: 0.12rem;

					i {
						font-weight: bold;
						font-size: 12px;
						margin-left: 3px;
					}
				}
			}

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
				}
			}

			.item-li {
				display: flex;
				align-items: center;
				padding: 0 0.16rem;

				.text {
					margin-top: 2px;
					font-family: Noto Sans Hebrew;
					font-size: 0.12rem;
					font-weight: 400;
					color: rgba(26, 26, 26, 0.6);
				}

				.price {
					font-family: Noto Sans Hebrew;
					font-size: 0.16rem;
					font-weight: 600;
				}
			}

			.info {
				margin-top: -3px;
				border: 1px solid rgba(218, 218, 218, 1);
				border-bottom-right-radius: 8px;
				border-bottom-left-radius: 8px;
				border-top: none;
				overflow: hidden;
			}

			.name {
				display: flex;
				align-items: center;
				padding: 0.16rem;

				.r-tit {
					text-align: right;

					p {
						margin-top: 4px;
						font-size: 0.12rem;
						color: rgba(26, 26, 26, 0.6);
					}

					h2 {
						text-align: right;
						font-size: 0.16rem;
						font-weight: 600;
						padding: 0;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.ka {
					width: 0.24rem;
					height: 0.24rem;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					margin-right: 0.16rem;
					border-radius: 5px;
					border: 1px solid rgba(218, 218, 218, 1);

					img {
						width: 0.12rem;
						height: auto;

					}
				}
			}

			.img {
				width: 100%;
				height: 2.40rem;
				border-top-right-radius: 8px;
				border-top-left-radius: 8px;
			}
		}
	}

	.content ::v-deep .el-tabs__nav-scroll {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.content ::v-deep .el-tabs__item.is-active {
		color: rgba(26, 26, 26, 1)
	}

	.content ::v-deep .el-tabs__active-bar {
		background-color: rgba(26, 26, 26, 1)
	}

	.content ::v-deep .el-tabs__item {
		font-weight: normal;
		color: rgba(26, 26, 26, 0.6);
	}

	.content ::v-deep .el-tabs__nav-wrap::after {
		height: 1px;
		background-color: rgba(218, 218, 218, 1)
	}

	.content {
		width: 100%;
		background-color: #fff;
		border-radius: 8px;
		margin: 0.24rem 0;
		padding: 0.64rem;
		box-sizing: border-box;
		height: calc(100vh - 1.22rem);
		overflow-y: auto;
		border: 1px solid rgba(218, 218, 218, 1);

		.title {
			h1 {
				text-align: right;
				font-size: 0.32rem;
				margin-bottom: 0.2rem;
			}
		}
	}

	.page {
		background-color: rgba(245, 245, 245, 1);
	}
</style>