<template>
	<div class="page">
		<div class="login-bg">
			<img src="~assets/images/login-bg.jpg" />
		</div>
		<div class="box">
			<div class="logo-r">
				<div class="logo" @click="toHome">
					<img src="~assets/images/Logo.svg" alt="">
				</div>
			</div>
			<div class="newuser">
				{{ form.email }} <i class="el-icon-arrow-right"></i>
			</div>
			<div class="prompt">
				נא להזין סיסמא
			</div>
			<div class="tips" v-if="isforget">נא לאמת את כתובת המייל שלך והמערכת תשלח לך קישור לאיפוס הסיסמה.</div>

			<div class="password">
				<div class="flex">
					<span @click="forget" v-if="!isforget">
						שכחת סיסמא?
					</span>
				</div>
				<p>{{!isforget? 'סיסמא*':'כתובת אימייל*'}}</p>

			</div>
			<div class="input password" v-if="!isforget">
				<el-input @keyup.native.enter="handleLogin" v-model="form.password" placeholder="" show-password>
				</el-input>
			</div>
			<div class="input email" v-else>
				<el-input @keyup.native.enter="handleLogin" @blur="validateFun" v-model="email"
					placeholder="דואר אלקטרוני" />
			</div>
			<div class="ts" v-if="isSuccess&&isforget">{{successTips}}</div>
			<el-button class="button" @click="handleLogin">
				{{!isforget?'המשך':'שליחת קישור לאיפוס'}}
			</el-button>
		</div>
	</div>
</template>

<script>
	import {
		findPwdSendMail
	} from '@/api/login'
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
				form: {
					email: '',
					password: ''
				},
				email: '',
				isforget: false,
				isSuccess: false,
				successTips: 'Please open your email to recover your password',
			}
		},
		created() {
			this.form.email = this.$route.query.email;
			this.email = this.$route.query.email;
		},
		methods: {
			validateFun() {
				if (this.email.length == 0) {
					this.isSuccess = true
					this.successTips = 'Please Enter Your Email'
					return false;
				}
			},
			handleSendEmail() {
				let that = this
				findPwdSendMail(this.form).then((res) => {
					setToken(res.auth_token)
					localStorage.setItem("token", res.auth_token)
					this.$store.commit('SET_TOKEN', res.auth_token)
					this.$notify({
						title: '',
						message: 'Login succeeded',
						type: 'success'
					})
					let username = (res.user_info.first_name || '') + (res.user_info.last_name || '')
					localStorage.setItem("user_name", username)
					localStorage.setItem("user_email", res.user_info.email)
					localStorage.setItem("user_provider", res.user_info.provider)
					localStorage.setItem("user_id", res.user_info.user_id)
					setUserName(username)
					this.$store.commit('SET_NAME', username)
					this.$router.push({
						path: '/'
					})
				}).catch((err) => {
					console.log(err)
				})
			},
			forget() {
				this.isforget = !this.isforget
			},
			toHome() {
				this.$router.push({
					path: '/'
				})
			},
			handleLogin() {
				if (!this.isforget) {
					this.handleSendEmail()
				} else {

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ts {
		color: #FF3263;
		font-size: .12rem;
		padding: .1rem 0;
	}

	.success {
		color: #67C23A;
	}

	.tips {
		margin: 0.16rem 0;
		color: rgba(26, 26, 26, 0.6);
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

	img {
		width: 100%;
		height: 100%;
	}

	::v-deep .el-input .el-input__clear {
		margin-right: .16rem;
		color: #1A1A1A;
		font-size: .16rem;
		cursor: pointer;
		transition: color .2s cubic-bezier(.645, .045, .355, 1);
	}

	.password ::v-deep .el-input__inner {
		direction: rtl;
	}

	.email ::v-deep .el-input__inner {
		text-align: right;
	}

	::v-deep .el-input__suffix {
		left: 15px;
		right: auto;
	}

	.page {
		display: flex;
	}

	.logo-r {
		text-align: right;
	}

	.box {
		width: 5.12rem;
		text-align: right;
		padding: 0.2rem 0.32rem 0 0.32rem;
		height: 100vh;
		position: relative;

		.logo {
			width: .76rem;
			display: inline-block;

			img {
				width: 100%;
			}
		}

		.newuser {
			font-weight: 400;
			line-height: 100%;
			letter-spacing: -0.64px;
			margin-top: 1.40rem;
			font-size: .16rem;
			color: rgba(26, 26, 26, 0.6);

			.el-icon-arrow-right {
				font-weight: bold;
				font-size: 12px;
				color: rgba(26, 26, 26, 0.6);
			}
		}

		.prompt {
			color: #1A1A1A;
			font-weight: 400;
			letter-spacing: -1.28px;
			margin-top: .24rem;
			font-size: .32rem;
		}

		.password {
			margin-top: .24rem;
			color: #1A1A1A;
			font-size: .14rem;
			display: flex;
			align-items: center;

			div {
				flex: 1;
				cursor: pointer;
				text-decoration: underline;
				text-align: left;
				color: rgba(52, 81, 255, 1);
			}

		}

		.input {
			margin-top: .08rem;

			::v-deep .el-input__inner {
				color: rgba(26, 26, 26, 0.40);
				font-size: .16rem;
				font-weight: 400;
				width: 4.48rem;
				height: .48rem;
			}

			// .el-icon-eye {
			//   background: url('~assets/images/icon-eye.png') center center no-repeat;
			//   background-size: 16px;
			// }
		}


		.button {
			border-radius: 8px;
			height: .48rem;
			margin-bottom: .16rem;
			background: #FF3263;
			margin-top: .24rem;
			width: 4.48rem;
			color: #FEFEFE;
			// .text {
			//   color: #FEFEFE;
			//   font-size: .14rem;
			//   line-height: .48rem;
			// }
		}

		.warn {
			margin-top: .24rem;
			color: #FF3263;
			font-size: .14rem;
			text-decoration: underline;
		}

		//   .warn:hover{
		//     color: #FF3263;
		//   }
	}

	.mobile {
		.page {
			align-items: flex-start;
		}

		.box {
			width: 3.36rem;
			height: 5.42rem;

			.input {
				::v-deep .el-input__inner {
					width: 100%;
				}
			}



			.logo {
				padding-top: .64rem;
				width: .76rem;
			}

			.prompt {
				font-size: .24rem;
			}

			.button {
				width: 3.36rem;
			}
		}
	}
</style>