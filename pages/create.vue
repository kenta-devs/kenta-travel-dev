<template>
	<div class="page">
		<div class="box">
			<div class="logo" @click="toHome">
				<img src="~assets/images/logo.png" alt="">
			</div>
			<div class="newuser">
				< {{form.email}} </div>
					<div class="prompt">
						{{form.isFind==1?'Recover your password':'Create a password for your new account'}}
					</div>
					<div class="password">
						Password
					</div>
					<div class="input" :class="isValidate?'':'warning'">
						<el-input v-model="form.password" placeholder="" show-password></el-input>
					</div>
					<div class="requirement">
						Password requirements:
					</div>
					<div class="demand">
						<div class="need">
							<span class="text">
								• Minimum 10 characters
							</span>
							<span class="percent">
								{{passwordLen}}/10
							</span>
						</div>
						<div class="need">
							<span class="text">
								• Include at least 1 uppercase character
							</span>
							<span class="percent">
								{{upperLen}}/1
							</span>
						</div>
						<div class="need">
							<span class="text">
								• Include at least 1 number
							</span>
							<span class="percent">
								{{numberLen}}/1
							</span>
						</div>
					</div>
					<!-- <div class="button">
       <span class="text">
         Create Account
       </span>
     </div> -->
					<el-button v-if="form.isFind==1" class="button" @click="handleRestPwd">Recover Password</el-button>
					<el-button v-else class="button" @click="handleCreat">Create Account</el-button>
					<div class="warn">
						<span class="none-underline">
							By creating an account, you agree to our
						</span>
						<span class="underline" @click="toView">
							Privacy policy
						</span>
						<span class="none-underline">
							and
						</span>
						<span class="underline" @click="toTerm">
							Terms of use.
						</span>
					</div>
			</div>
		</div>
</template>

<script>
	import {
		registerByMail,
		findPwdByMail
	} from '@/api/login'
	export default {
		data() {
			return {
				form: {
					email: '',
					code: '',
					key: '',
					isFind: '',
					password: '',
					token: ''
				},
			}
		},
		computed: {
			passwordLen() {
				return this.form.password.length;
			},
			upperLen() {
				let str = this.form.password;
				const uppercaseLetters = str.match(/[A-Z]/g);
				return uppercaseLetters ? uppercaseLetters.length : 0;
			},
			numberLen() {
				let str = this.form.password;
				const digitMatches = str.match(/\d/g);
				return digitMatches ? digitMatches.length : 0;
			},
			isValidate() {
				return this.passwordLen >= 10 && this.upperLen > 0 && this.numberLen > 0;
			},
		},
		created() {
			this.form = Object.assign(this.form, this.$route.query);
		},
		methods: {
			handleCreat() {
				this.$router.push({
					path: '/login'
				})
				// if (!this.isValidate) return;
				// registerByMail(this.form).then((res) => {
				// 	this.$store.dispatch('Login', this.form).then(async () => {
				// 		await this.$store.dispatch('GetInfo')
				// 		this.$router.replace('/')
				// 	})
				// })
			},
			handleRestPwd() {
				if (!this.isValidate) return;
				findPwdByMail(this.form).then((res) => {
					this.$store.dispatch('Login', this.form).then(async () => {
						await this.$store.dispatch('GetInfo')
						this.$router.replace('/')
					})
				})
			},
			toHome() {
				this.$router.push({
					path: '/'
				})
			},
			toView() {
				this.$router.push({
					path: '/privacy-policy'
				})
			},
			toTerm() {
				this.$router.push({
					path: '/terms-conditions'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
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

	.page {
		min-height: 100vh;
		background: #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box {
		width: 4.80rem;
		height: 5.42rem;
		margin: 0 auto;

		.logo {
			width: .76rem;

			img {
				width: 100%;
			}
		}

		.newuser {
			font-weight: 400;
			line-height: 100%;
			/* 16px */
			letter-spacing: -0.64px;
			margin-top: .24rem;
			font-size: .16rem;
			color: rgba(26, 26, 26, 0.60);
		}

		.prompt {
			width: 3.67rem;
			color: #1A1A1A;
			font-weight: 400;
			letter-spacing: -1.28px;
			margin-top: .24rem;
			font-size: .32rem;
		}

		.password {
			color: #1A1A1A;
			margin-top: .24rem;
			font-size: .14rem;
			font-weight: 500;
			line-height: 100%;
			/* 14px */
			letter-spacing: -0.56px;
		}

		.input {
			margin-top: .08rem;

			::v-deep .el-input__inner {
				height: .48rem;
			}

			// .el-icon-eye {
			//   background: url('~assets/images/icon-eye.png') center center no-repeat;
			//   background-size: 16px;
			// }
		}

		.input.warning {
			::v-deep .el-input__inner {
				background: rgba(238, 35, 68, 0.16);
				border: 1px solid #EE2344;
			}
		}

		.requirement {
			color: rgba(26, 26, 26, 0.60);
			margin-top: .16rem;
			font-size: .14rem;
		}

		.demand {
			letter-spacing: -0.56px;
			margin-top: .16rem;

			.need {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: .08rem;

				.text {
					color: rgba(26, 26, 26, 0.40);
					font-size: .14rem;
				}

				.percent {
					color: rgba(26, 26, 26, 0.40);
					text-align: right;
					font-size: .14rem;
					font-weight: 500;
				}
			}

		}

		.button {
			height: .48rem;
			border-radius: 8px;
			background: #FF3263;
			margin-top: .24rem;
			color: #FEFEFE;
			width: 100%;
			// .text {
			//   color: #FEFEFE;
			//   font-size: .14rem;
			//   line-height: .48rem;
			//   padding: .16rem 1.73rem;
			// }
		}

		.warn {
			margin-top: .24rem;

			.none-underline {
				color: #1A1A1A;
				font-size: .14rem;
				letter-spacing: -0.56px;
				font-weight: 400;
				line-height: .16rem;
			}

			.underline {
				cursor: pointer;
				font-size: .14rem;
				text-decoration-line: underline;
			}
		}
	}


	.mobile {
		.page {
			align-items: flex-start;
		}

		.box {
			width: 3.36rem;

			.logo {
				padding-top: .64rem;
				width: .76rem;
			}

			.button {
				width: 3.36rem;
			}
		}
	}
</style>