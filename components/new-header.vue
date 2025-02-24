<template>
	<div class="header-box">
		<div class="header" :class="[ishome?(top<456?'':'header-curr'):'']"
			:style="{backgroundColor:ishome?(top<456?'rgba(255, 255, 255, 0)':'rgba(255, 255, 255, 1)'):'rgba(255, 255, 255, 1)',borderBottom:!ishome?'1px solid rgba(218, 218, 218, 1)':''}">
			<div class="left-icon" :class="[!ishome?'icon-curr':'']" @click="showMenu">
				<div v-if="ishome">
					<div v-if="!hasToken">
						<img v-if="top<456" class="user-icon"
							src="~assets/images/icon/user-circle-svgrepo-com (1) 3.png" />
						<img v-else class="user-icon" src="~assets/images/icon/user-circle-svgrepo-com (1) 3 (1).png" />
					</div>

					<div v-else>
						<div v-if="top<456">
							<span class="username" v-if="userName"
								:style="{color:top<456?'#fff':'#333'}">{{userName}}</span>
							<img v-else class="D-icon" src="~assets/images/icon/D (1).png" />
						</div>
						<div v-else>
							<span class="username" v-if="userName"
								:style="{color:top<456?'#fff':'#333'}">{{userName}}</span>
							<img v-else class="D-icon" src="~assets/images/icon/D.png" />
						</div>


						<!-- <img v-if="top<456" class="D-icon" src="~assets/images/icon/D (1).png" />
						<div v-else>
							<span v-if="userName">{{userName}}</span>
						</div> -->
					</div>
				</div>
				<div v-else>
					<img v-if="!hasToken" class="user-icon"
						src="~assets/images/icon/user-circle-svgrepo-com (1) 3 (1).png" />
					<div v-else>
						<span class="username" v-if="userName">{{userName}}</span>
						<img v-else class="D-icon" src="~assets/images/icon/D.png" />
					</div>
				</div>

				<div class="navs-icon" v-if="ishome">
					<img v-if="top<456" src="~assets/images/icon/Group 1029.png" />
					<img v-else src="~assets/images/icon/Group 1029 (1).png" />
				</div>
				<div class="navs-icon" v-else>
					<img src="~assets/images/icon/Group 1029 (1).png" />
				</div>
			</div>

			<div class="navs">
				<div class="navs-a" :class="[!ishome?'navcolor':'']">
					₪
				</div>
				<div class="new-line" :style="{backgroundColor:!ishome?'rgba(26, 26, 26, 0.6)':'#fff'}"></div>
				<div class="navs-a" :class="[!ishome?'navcolor':'']">
					עברית
				</div>
			</div>
			<div class="flex">
				<div class="tab" v-if="tabshow">
					<el-menu router :default-active="$route.path" mode="horizontal">
						<el-menu-item index="/chatPage">
							<span>הודעות</span>
						</el-menu-item>
						<el-menu-item index="/ticketsPage">
							<span>כרטיסים</span>
						</el-menu-item>
						<el-menu-item index="/upcoming">
							<span>חופשות</span>
						</el-menu-item>
					</el-menu>
				</div>
			</div>
			<div @click="toHome">
				<div v-if="ishome">
					<img v-if="top<456" class="logo" src="~assets/images/logo-white.png" />
					<img v-else class="logo" src="~assets/images/logo.png" />
				</div>
				<img v-else class="logo" src="~assets/images/logo.png" />
			</div>
		</div>
		<div class="header-h" v-if="!ishome"></div>
		<el-drawer :title="hedaName" :visible.sync="drawer" direction="ltr">
			<div class="menu">
				<div class="tips">ניווט</div>
				<el-menu router :default-active="$route.path" class="el-menu-vertical-demo">
					<el-menu-item index="/upcoming">
						<span>חופשות</span>
					</el-menu-item>
					<el-menu-item index="/ticketsPage">
						<span>כרטיסים</span>
					</el-menu-item>
					<el-menu-item index="/chatPage">
						<span>הודעות</span>
					</el-menu-item>
				</el-menu>
				<div class="menu-line"></div>
				<div :style="{color:$route.path=='/userSetting'?'rgba(255, 50, 99, 1)':''}" class="menu-li"
					@click="toUser">
					איזור אישי
				</div>
				<div class="menu-li" @click="logOut">
					התנתק
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
	import {
		getToken,
		setToken,
		removeToken,
		getRedirect,
		setRedirect,
		getUserId,
		setUserId,
		removeUserId,
		getUserName,
		setUserName,
		removeUserName,
		getMemberId,
		setMemberId,
		removeMemberId
	} from '@/utils/auth'
	export default {
		props: {
			ishome: {
				type: Boolean,
				default: false
			},
			tabshow: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				top: 0,
				drawer: false,
			}

		},
		computed: {
			hasToken() {
				return this.$store.state.token
			},
			userName() {
				return getUserName() ? getUserName()[0] : ''
			},
			hedaName() {
				return getUserName()
			}
		},
		mounted() {
			window.addEventListener('scroll', this.listenerScroll, true)
		},
		methods: {
			toUser() {
				this.$router.push({
					path: '/userSetting'
				})
			},
			logOut() {
				let that = this
				this.$confirm('האם אתה בטוח שאתה מתנתק?', 'רֶמֶז', {
					confirmButtonText: 'בַּטוּחַ',
					cancelButtonText: 'לְבַטֵל',
					showCancelButton: true,
				}).then(res => {
					that.$store.dispatch("FedLogOut").then(() => {
						location.reload();
					})
				})
			},
			toHome() {
				this.$router.push({
					path: '/'
				})
			},
			showMenu() {
				if (!this.hasToken) {
					this.$router.push({
						path: '/login'
					})
				} else {
					this.drawer = true
				}

			},
			listenerScroll() {
				let value = window.pageYOffset || document.documentElement.scrollTop ||
					document.body.scrollTop
				this.top = value
			}
		}
	}
</script>
<style lang="scss" scoped>
	@media (max-width: 820px) {
		.header-box ::v-deep .el-drawer {
			width: 80% !important;
		}

		.header-box {
			.menu {
				padding: 0 0.4rem;
			}

			.header {
				padding: 0 0.2rem;
				border-bottom: 1px solid #DADADA;
			}

			.header .navs,.header .username {
				display: none;
			}

			.header .navs-icon img {
				width: 0.30rem;
			}

			.left-icon {
				margin-right: 0.1rem;
				height: 0.64rem;
				border-radius: 0px;
				padding-right: 0.2rem;
				border-right: 1px solid #DADADA;

				.user-icon {
					display: none;
				}
			}

			.username {
				font-size: 0.25rem
			}
		}

	}

	.username {
		font-size: 0.3rem;
		margin-right: 10px;
		margin-top: -5px;
		display: inline-block;
	}

	.tab {
		text-align: center;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tab ::v-deep .el-menu--horizontal>.el-menu-item {
		height: 0.64rem;
		line-height: 0.64rem;
	}

	.tab ::v-deep .el-menu-item {
		font-size: 0.14rem;
	}

	.tab ::v-deep .el-menu--horizontal>.el-menu-item.is-active {
		border-bottom: 2px solid rgba(255, 50, 99, 1)
	}

	.menu-line {
		width: 100%;
		height: 1px;
		margin-bottom: 8px;
		display: inline-block;
		background-color: rgba(218, 218, 218, 1);
	}

	.menu-li {
		margin-top: 0.16rem;
		text-align: right;
		font-size: 0.16rem;
		cursor: pointer;
	}

	.menu ::v-deep .el-submenu {
		background-color: #fff !important;
	}

	.menu ::v-deep .el-menu-item.is-active {
		color: rgba(255, 50, 99, 1);
	}

	.menu ::v-deep .el-menu-item {
		padding: 0;
		height: 0.36rem;
		text-align: right;
		line-height: 0.36rem;
		font-size: 0.32rem;
		cursor: pointer;
		background-color: #fff !important;
		margin-bottom: 0.24rem;
	}

	.menu ::v-deep .el-menu,
	.tab ::v-deep .el-menu {
		border: none;
	}

	.menu ::v-deep i {
		display: none;
	}

	.menu ::v-deep .el-submenu:hover {
		background-color: #fff !important;
	}

	.menu {
		padding: 0.8rem 0.4rem 0 0.4rem;

		.tips {
			text-align: right;
			font-size: 0.14rem;
			color: rgba(26, 26, 26, 0.4);
			margin-bottom: 0.16rem;
		}
	}

	:deep(.el-drawer__header) {
		text-align: center;
		padding: 0.24rem 0.4rem;
		border-bottom: 1px solid rgba(218, 218, 218, 1);
		color: rgba(26, 26, 26, 1);
		font-size: 0.14rem;

		i {
			font-weight: bold;
		}
	}

	.left-icon {
		display: flex;
		align-items: center;
		border-radius: 200px;
		cursor: pointer;
		height: 0.4rem;
		padding-top: 3px;
		justify-content: center;
		width: 0.74rem;
		text-align: center;
		border: 1px solid none;
		margin-right: 0.40rem;
	}

	.icon-curr:hover {
		background-color: rgba(245, 245, 245, 1);
		border: 1px solid rgba(218, 218, 218, 1)
	}

	.header-curr {
		.navs-a {
			color: rgba(26, 26, 26, 0.6);
		}

		.new-line {
			background-color: rgba(26, 26, 26, 0.6) !important;
		}
	}

	.header-h {
		height: 0.64rem;
	}

	.user-icon {
		width: 0.24rem;
		height: auto;
		margin-right: 0.1rem;
	}

	.D-icon {
		width: 0.16rem;
		height: auto;
		margin-right: 0.1rem;
		object-fit: fill
	}

	.navcolor {
		color: rgba(26, 26, 26, 0.6);

		i {
			color: rgba(26, 26, 26, 0.6) !important;
		}
	}

	.header {
		padding: 0 0.32rem;
		height: 0.64rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 899;
		display: flex;
		width: 100%;
		align-items: center;
		overflow: hidden;

		.icon {
			margin-right: 0.24rem !important;
			padding-right: 0.32rem;
			height: 0.64rem;

			border-right: 1px solid rgba(218, 218, 218, 1);
		}

		.navs-icon {
			img {
				width: 0.16rem;
				height: auto;
			}
		}

		.navs::v-deep .el-dropdown {
			color: rgba(254, 254, 254, 1);
			font-size: 0.14rem;
			font-weight: 500;
		}

		.navs {
			display: flex;
			align-items: center;
			color: rgba(254, 254, 254, 1);
			font-size: 0.14rem;
			font-weight: 500;

			.new-line {
				width: 1px;
				height: 15px;
				margin: 0 0.1rem;
				background-color: #fff;
			}

			.navs-a {
				i {
					color: rgba(254, 254, 254, 1);
					margin-right: 0.08rem;
				}
			}
		}

		.logo {
			cursor: pointer;
			width: 0.76rem;
			height: auto;
		}
	}
</style>