<template>
	<div class="page">
		<div class="login">
			<div class="login-bg">
				<img src="~assets/images/login-bg.jpg" />
			</div>
			<div class="login-info">
				<img class="logo" @click="toHome" src="~assets/images/logo.png" />
				<div class="login-box">
					<div class="title">התחברות</div>
					<a href="https://admin.kenta.travel/prod-api/kenta-hb/login" class="item-li">
						<img class="jiant" src="~assets/images/icon/arrow-narrow-left-svgrepo-com 1.png" />
						<div class="flex"></div>
						<div class="name">המשיכו עם גוגל</div>
						<img class="icon" src="~assets/images/gg.png" />
					</a>
					<div class="item-li">
						<img class="jiant" src="~assets/images/icon/arrow-narrow-left-svgrepo-com 1.png" />
						<div class="flex"></div>
						<div class="name">המשיכו עם פייסבוק</div>
						<img class="icon" src="~assets/images/facebook-color-svgrepo-com 1.png" />
					</div>
					<div class="line">
						<div></div>
						<p>או</p>
						<div></div>
					</div>
					<div class="text">כתובת אימייל*</div>
					<div class="item-li">
						<img class="jiant" src="~assets/images/icon/email-8-svgrepo-com 1.png" />
						<el-input v-model="email" @keyup.native.enter="toNext" placeholder="דואר אלקטרוני"
							@blur="validateFun"></el-input>
					</div>
					<div class="tips" v-if="tips.length > 0">{{ tips }}</div>
					<div class="tologin" @click="toNext">המשך</div>
				</div>
				<div class="footer">
					בלחיצה על כפתור המשך את/ה מסכימ/ה עם
					<span>תנאי השימוש ומדיניות האתר.</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// const { google } = require('googleapis');
	// import VueGoogleApi from 'vue-google-api'
	import {
		validEmail
	} from '@/utils/validate'
	import {
		getMail,
		getUserInfo
	} from '@/api/login'
	import {
		gclogin
	} from '@/api/kentaHb'
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

		data() {
			return {
				email: '',
				tips: '',
				successTips: 'Please open your email to complete registration',
				isSuccess: false,
				form: {
					email: '',
					token: '',
					provider: ''
				}
			}
		},
		mounted() {
			// if (google) {
			// 	this.client = google.accounts.oauth2.initCodeClient({
			// 		client_id: '16800385999-8c2rie3crqe9npuou97ubripn199cr4a.apps.googleusercontent.com',
			// 		scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
			// 		ux_mode: 'redirect',
			// 		redirect_uri: "https://casino-blog.vercel.app/auth",
			// 		state: "YOUR_BINDING_VALUE"
			// 	});
			// }
		},
		created() {
			this.verifyToken()
		},
		methods: {
			// 跳回来携带token谷歌登录验证token
			verifyToken() {
				let that = this
				if (this.$route.query.token) {
					this.form = Object.assign(this.form, this.$route.query);

					getUserInfo(this.form).then(res => {
						if (res.status == 'success') {
							setToken(this.$route.query.token)
							localStorage.setItem("token", this.$route.query.token)
							this.$store.commit('SET_TOKEN', this.$route.query.token)

							localStorage.setItem("user_email", this.$route.query.email)
							localStorage.setItem("user_provider", this.$route.query.provider)
							localStorage.setItem("user_id", this.$route.query.user_id)

							let username = (res.data.first_name || '') + (res.data.last_name || '')
							localStorage.setItem("user_name", username)
							setUserName(username)
							this.$store.commit('SET_NAME', username)

							this.$notify({
								title: '',
								message: 'Login succeeded',
								type: 'success'
							})
							this.$router.push({
								path: '/'
							})
						} else {
							this.$notify({
								title: '',
								message: 'user does not exist',
								type: 'warning'
							})
						}
					})


				}
			},
			toHome() {
				this.$router.push({
					path: '/'
				})
			},
			validateFun() {
				if (this.email.length == 0) {
					this.tips = 'Please Enter Your Email'
					return false;
				} else if (!validEmail(this.email)) {
					this.tips = 'Please enter the correct Email'
					return false;
				} else {
					this.tips = '';
					return true;
				}
			},
			onTwiLog() {
				const redirectUrl = 'https://www.kenta.travel/login';
				window.location.href = redirectUrl;
			},
			toNext() {
				if (this.validateFun()) {
					let params = {
						email: this.email,
					};
					getMail(params).then((res) => {
						if (res.code == 200) {
							this.$notify({
								title: '',
								message: 'Please open your email to complete registration',
								type: 'success'
							});
						}
						// this.isSuccess = true;
					}).catch((err) => {
						this.$router.push({
							path: '/password',
							query: {
								email: this.email
							}
						})
					})

				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	a {
		text-decoration: none;
	}

	.item-li ::v-deep .el-input__inner {
		border: none;
		text-align: right;
		height: 0.48rem;
	}

	.tips {
		color: #ff3263;
		font-size: 0.12rem;
		padding: 0.1rem 0;
	}

	.tips.success {
		color: #67c23a;
	}

	.login {
		display: flex;

		.tologin {
			margin-top: 8px;
			text-align: center;
			line-height: 0.48rem;
			height: 0.48rem;
			background-color: rgba(255, 50, 99, 1);
			color: #fff;
			cursor: pointer;
			border-radius: 8px;
		}

		.login-box {
			padding-top: 1.40rem;

			.text {
				margin-bottom: 8px;
			}

			.line {
				display: flex;
				align-items: center;
				margin: 0.32rem 0;

				p {
					margin: 0 5px;
				}

				div {
					flex: 1;
					height: 1px;
					background-color: rgba(26, 26, 26, 0.16);
				}
			}

			.item-li {
				cursor: pointer;
				display: flex;
				align-items: center;
				height: 0.48rem;
				padding: 0 0.16rem;
				border: 1px solid rgba(26, 26, 26, 0.5);
				border-radius: 8px;
				margin-bottom: 8px;
				overflow: hidden;

				input {
					height: 0.48rem;
					background-color: none;
					text-align: right;
					flex: 1;
					border: none;
					outline: none;
					outline: 0
				}


				.name {
					color: rgba(26, 26, 26, 0.6);
					margin-right: 5px;
				}

				.icon {
					width: 0.16rem;
					height: auto;
				}

				.jiant {
					width: 0.16rem;
					height: auto;
				}
			}

			.title {
				font-size: 0.32rem;
				margin-bottom: 0.24rem;
			}
		}

		.login-bg {
			flex: 1;
			height: 100vh;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.login-info {
			width: 5.12rem;
			text-align: right;
			padding: 0.2rem 0.32rem 0 0.32rem;
			height: 100vh;
			position: relative;

			.footer {
				direction: rtl;
				position: absolute;
				width: 100%;
				text-align: center;
				bottom: 0.32rem;
				left: 0;

				span {
					cursor: pointer;
					color: rgba(52, 81, 255, 1);
				}
			}

			.logo {
				cursor: pointer;
				width: 0.76rem;
				height: auto;
			}
		}
	}
</style>