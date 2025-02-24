<template lang="html">
	<!-- header start-->
	<nav class="header">
		<div class="logo" @click="toHome">
			<img src="~assets/images/Logo.svg" alt='logo' />
		</div>
		<div v-if="!isMobile">
			<div class="header-right" v-if="!isLogin">
				<span class="btn-text" @click="toSign">Sign Up</span>
				<span class="btn-text" @click="toLogin">Log In</span>
			</div>
		</div>
		<div v-else-if="isMobile && drawer">
			<div class="header-right" v-if="!isLogin">
				<span class="btn-text" @click="toSign">Sign Up</span>
				<span class="btn-text" @click="toLogin">Log In</span>
			</div>
		</div>
		<div class="header-right" v-if="isLogin">
			<span class="el-dropdown-link" @click="goToMessage">
				<i class="icon-message el-icon--left"><img src="~assets/images/icon-message.png" /></i>Messages
			</span>
			<el-dropdown @command="handleCommand">
				<span class="btn-text">
					<div class="icon">
						<div class="icon-text">
							{{ userName.slice(0, 1).toUpperCase() }}
						</div>
					</div><i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="Settings">Account Settings</el-dropdown-item>
					<el-dropdown-item command="Viewed">Recently Viewed</el-dropdown-item>
					<el-dropdown-item command="Saved">Saved</el-dropdown-item>
					<el-dropdown-item command="Messages">Messages</el-dropdown-item>
					<el-dropdown-item command="logout">Log Out</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="nav-bar" :class="drawer ? 'open' : ''" @click="handleOpen">
			<i class="icon-bar" v-if="!drawer"><img src="~assets/images/nav-icon.svg" alt='menu' /></i>
			<i class="icon-bar icon-close" v-else><img src="~assets/images/icon-close.png" alt='menu' /></i>
		</div>
		<el-drawer title="" :append-to-body="true" :visible.sync="drawer" :direction="direction" :size="drawerSize"
			custom-class="my-navigation" :before-close="handleClose">
			<div class="navigation-wrap">
				<el-collapse v-model="activeNames">
					<el-collapse-item title="Destinations" name="1">
						<div class="city-box">
							<div class="item-list">
								<div class="item-hd"><span class="fi fi-us"></span> United States</div>
								<div class="item"><router-link to="../destination/las-vegas">Las Vegas</router-link>
								</div>
								<div class="item"><router-link to="../destination/reno">Reno</router-link></div>
								<div class="item"><router-link to="../destination/atlantic-city">Atlantic
										City</router-link></div>
								<div class="item"><router-link to="../destination/biloxi">Biloxi</router-link></div>
								<div class="item"><router-link to="../destination/new-york">New York</router-link></div>
							</div>
							<div class="item-list">
								<div class="item-hd"><span class="fi fi-ca"></span> Canada</div>
								<div class="item"><router-link to="../destination/toronto">Toronto</router-link></div>
								<!--<div class="item">Montreal</div>-->
								<div class="item"><router-link to="../destination/vancouver">Vancouver</router-link>
								</div>
								<!--<div class="item">Calgary</div>-->
								<!--<div class="item">Ottawa</div>-->
							</div>
						</div>
						<div class="city-tips">More destinations are coming soon.</div>
					</el-collapse-item>
				</el-collapse>
				<div class="nav-list">

					<div class="item"><router-link to="../ticket">Events</router-link></div>
					<div class="item"><router-link to="../about">About us</router-link></div>
					<div class="item"><router-link to="../blog">Travel Guides</router-link></div>
					<div class="item"><router-link to="../custom-trip-step1">Concierge Service</router-link></div>
					<div class="item"><router-link to="../comingSoon">Partners <span class="will">COMING
								SOON</span></router-link>
					</div>
					<div class="item"><router-link to="../comingSoon">Join Kenta</router-link></div>
					<div class="item"><router-link to="../contact">Contact us</router-link></div>
				</div>
				<div class="follow-box">
					<div class="follow-hd">Follow us on</div>
					<div class="follow-list">
						<a class="item" target="_blank" href="https://www.facebook.com/">
							<img class="site-facebook" src="~assets/images/site-facebook.png" alt="">
						</a>
						<a class="item" target="_blank" href="https://twitter.com/">
							<img class="site-x" src="~assets/images/site-x.png" alt="">
						</a>
						<a class="item" target="_blank" href="https://www.linkedin.com/">
							<img class="site-reddit" src="~assets/images/site-reddit.png" alt="">
						</a>
						<a class="item" target="_blank" href="https://www.reddit.com/">
							<img class="site-linkedin" src="~assets/images/site-linkedin.png" alt="">
						</a>
					</div>
				</div>
			</div>
		</el-drawer>
	</nav>
	<!-- header end-->
</template>

<script>
	import "/node_modules/flag-icons/css/flag-icons.min.css";
	export default {
		data: () => ({
			drawer: false,
			drawerSize: "3.64rem",
			direction: 'rtl',
			activeNames: [],
			isMobile: false,
		}),
		computed: {
			isLogin() {
				if (typeof window !== 'undefined') {
					return sessionStorage.getItem("token") ? true : false;
				} else {
					// 如果在服务器端渲染时，可以从 Vuex 或者其他全局状态获取登录信息
					return false; // 或者你可以返回从其他地方获取的状态
				}
			},
			userName() {
				if (typeof window !== 'undefined') {
					return sessionStorage.getItem("user_name");
				} else {
					// 服务器端可以从 Vuex 或其他全局状态中获取用户名
					return ''; // 返回默认值，或者从其他地方获取的状态
				}
			},
			// isLogin () {
			//   return sessionStorage.getItem("token") ? true : false;
			//   //return this.$store.getters.token ? true : false;
			// },
			userName() {
				//return this.$store.getters.name || '';
				return sessionStorage.getItem("user_name");
				//return this.$store.getters.name || '';
			},
		},
		mounted() {
			this.isMobile = window.isMobile;
		},
		methods: {
			toHome() {
				this.$router.push({
					path: '/'
				})
			},
			toLogin() {
				this.$router.push({
					path: '/login'
				})
			},
			toSign() {
				this.$router.push({
					path: '/login'
				})
			},
			goToMessage() {
				this.$router.push({
					path: '/message'
				})
			},
			handleOpen: function() {
				this.drawer = !this.drawer;
				if (this.drawer) {
					document.body.style.overflow = 'hidden';
					document.body.style.width = '100vw';
					document.body.style.height = '100vh';
				} else {
					document.body.style.overflow = 'auto';
					document.body.style.width = 'auto';
					document.body.style.height = 'auto';
				}

				let ele = document.getElementsByClassName("mobile");
				if (ele && ele.length === 1) {
					this.drawerSize = "100vw";
				} else {
					this.drawerSize = "3.64rem";
				}
			},
			handleClose(done) {
				done();
				document.body.style.overflow = 'auto';
				document.body.style.width = 'auto';
				document.body.style.height = 'auto';
			},
			handleCommand(command) {
				console.log(command);
				if (command == 'logout') {
					this.handleLogOut();
				} else if (command == 'Settings') {
					this.$router.push({
						path: '/userdashboard',
						query: {
							pageIndex: 0
						}
					})
				} else if (command == 'Viewed') {
					this.$router.push({
						path: '/userdashboard',
						query: {
							pageIndex: 1
						}
					})
				} else if (command == 'Saved') {
					this.$router.push({
						path: '/userdashboard',
						query: {
							pageIndex: 3
						}
					})
				} else if (command == 'Messages') {
					this.$router.push({
						path: '/message'
					})
				}
			},
			handleLogOut() {
				this.$store.dispatch("FedLogOut").then(() => {
					location.reload();
				});
			},
		}
	}
</script>
<style lang="scss" scoped>
	.header {
		height: 0.64rem;
		display: flex;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 9999;
		justify-content: space-between;
		padding-right: 1.12rem;
		background: #fefefe;
		color: rgba(26, 26, 26, 0.6);
		border-bottom: solid 1px #dadada;
		font-weight: 500;

		.header-right {
			display: flex;
			align-items: center;

			.el-dropdown-link {
				display: flex;
				align-items: center;
				cursor: pointer;
			}

			.btn-text {
				display: flex;
				align-items: center;
				flex-shrink: 0;

				.icon-text {
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 50%;
					line-height: 0.4rem;
					background: rgba(255, 50, 99, 0.16);
					text-align: center;
					color: #ff3263;
				}
			}
		}

		.logo {
			margin-left: 0.32rem;
			// height: .32rem;

			img {
				width: 0.76rem;
				// height: .32rem;
			}
		}

		.btn-text {
			padding: 0.04rem 0.1rem;
			cursor: pointer;
			font-weight: 500;
			color: rgba(26, 26, 26, 0.6);
		}

		.btn-text:hover {
			border-radius: 4px;
			background: #f5f5f5;
			color: #ff3263;
		}

		.nav-bar {
			width: 0.88rem;
			height: 0.64rem;
			display: flex;
			right: 0;
			top: 0;
			align-items: center;
			justify-content: center;
			position: absolute;
			border-left: solid 1px #dadada;

			.icon-bar {
				width: 0.24rem;
			}

			.icon-close {
				width: 0.18rem;
			}
		}

		.nav-bar.open {
			background: #f5f5f5;
		}
	}

	.mobile {
		.header {
			height: 0.48rem;
			padding-right: 0.48rem;

			.logo {
				height: 0.24rem;
				margin-left: 20px;
			}

			.header-right {
				display: flex;
				justify-content: center;
				align-items: center;

				.el-dropdown-link {
					display: flex;
					justify-content: center;
					align-items: center;
					flex: 1;

					img {
						width: 0.24rem;
					}
				}

				.btn-text {
					display: flex;
					justify-content: center;
					align-items: center;

					.icon {
						position: relative;
						width: 0.3rem;
						height: 0.3rem;
						//background-color: rgba(255, 50, 99, 0.16);
						border-radius: 50%;

						.icon-text {
							position: absolute;
							top: 0.02rem;
							color: #ff3263;
							font-size: 0.18rem;
							font-weight: 500;
							line-height: 0.3rem;
							width: 0.3rem;
							height: 0.3rem;
						}
					}
				}
			}

			.el-dropdown-link {
				display: flex;
				justify-content: center;
				align-items: center;
				flex: 1;

				img {
					width: 0.24rem;
				}
			}

			.btn-text {
				display: flex;
				justify-content: center;
				align-items: center;

				.icon {
					position: relative;
					width: 0.3rem;
					height: 0.3rem;
					//background-color: rgba(255, 50, 99, 0.16);
					border-radius: 50%;

					.icon-text {
						position: absolute;
						top: 0.02rem;
						color: #ff3263;
						font-size: 0.18rem;
						font-weight: 500;
						line-height: 0.3rem;
						width: 0.3rem;
						height: 0.3rem;
					}
				}
			}
		}

		.nav-bar {
			border-left: none;
			width: 0.56rem;
			height: 0.48rem;

			.icon-bar {
				width: 0.2rem;
			}
		}
	}

	.navigation-wrap {
		padding-right: 0.32rem;
		padding-left: 0.32rem;
		padding-bottom: 0.32rem;

		.city-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-radius: 0px 0px 8px 8px;
			padding: 0.1rem 0.24rem;
			background: #f5f5f5;

			.item-list {
				flex: 1;
				margin-bottom: auto;

				.item-hd {
					color: rgba(26, 26, 26, 0.6);
					font-size: 0.14rem;
					font-style: normal;
					font-weight: 300;
					line-height: 0.16rem;
					/* 114.286% */
				}

				.item {
					cursor: pointer;
					font-weight: 500;
					font-size: 0.14rem;
					color: rgba(26, 26, 26, 0.6);
				}

				.item:hover {
					color: rgba(255, 50, 99, 1);
				}
			}
		}

		.city-tips {
			margin-top: 0.08rem;
			text-align: center;
			color: rgba(26, 26, 26, 0.6);
			font-size: 0.14rem;
			font-style: normal;
			font-weight: 300;
			line-height: 0.16rem;
			/* 114.286% */
		}

		.nav-list {
			.item {
				font-weight: 500;
				height: 0.4rem;
				line-height: 0.4rem;
				border-bottom: solid 1px rgba(26, 26, 26, 0.16);
				color: rgba(26, 26, 26, 0.6);
				font-size: 0.16rem;
				cursor: pointer;

				a {
					display: block;
					color: rgba(26, 26, 26, 0.6);
					text-decoration: none;
				}

				a:hover {
					color: #ff3263;
				}

				.will {
					padding: 0.02rem 0.04rem;
					margin-left: 0.08rem;
					color: #fefefe;
					border-radius: 0.04rem;
					background: #00bc93;
					font-size: 0.12rem;
				}
			}

			.item:hover {
				color: #ff3263;
			}

			.item:last-child {
				border-bottom: none;
			}
		}

		.follow-box {
			margin-top: 0.4rem;

			.follow-hd {
				color: rgba(26, 26, 26, 0.6);
			}

			.follow-list {
				display: flex;
				margin-top: 0.16rem;

				.item {
					width: 0.4rem;
					height: 0.4rem;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 0.4rem;
					background: #f5f5f5;
					margin-right: 0.16rem;
				}

				.site-x,
				.site-reddit {
					width: 0.16rem;
					height: 0.16rem;
				}

				.site-facebook,
				.site-linkedin {
					width: 0.24rem;
					height: 0.24rem;
				}
			}
		}
	}
</style>