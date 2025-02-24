<template>
	<div>
		<new-header tabshow />
		<div class="warps">
			<div class="content">
				<div class="title">
					<h1>איזור אישי</h1>
					<el-tabs v-model="activeName">
						<el-tab-pane label="הגדרות" name="1"></el-tab-pane>
						<el-tab-pane label="אמצעי תשלום" name="2"></el-tab-pane>
						<el-tab-pane label="פרופיל" name="3"></el-tab-pane>
					</el-tabs>
					<div class="form">
						<div class="form-tit">פרופיל</div>
						<div class="form-li">
							<div class="li">
								<p class="text">שם משפחה</p>
								<el-input v-model="form.first_name" placeholder=""></el-input>
							</div>

							<div class="li">
								<p class="text">שם פרטי</p>
								<el-input v-model="form.last_name" placeholder=""></el-input>
							</div>

						</div>
						<div class="form-li">
							<div class="tips">
								<p>מידע זה לא יהיה משותף בפומבי,</p>
								<p>משמש רק למטרות אימות.</p>
							</div>
							<div class="li">
								<p class="text">מספר פלאפון</p>
								<el-input v-model="form.phone_number" placeholder=""></el-input>
							</div>
							<div class="li">
								<p class="text">תאריך לידה</p>
								<div class="t-input">
									<div class="t-input-li">
										<el-input v-model="day" placeholder="יום"></el-input>
									</div>
									<div class="t-input-li">
										<el-input v-model="month" placeholder="חודש"></el-input>
									</div>
									<div class="t-input-li">
										<el-input v-model="year" placeholder="שנה"></el-input>
									</div>
								</div>
							</div>
						</div>
						<div class="btn">
							<button class="button" @click="updateUser">שמירה</button>
						</div>
					</div>
					<div class="cart">
						<div class="cart-tit">אמצעי תשלום</div>
						<p class="desc">את/ה יכול/ה לנהל את אמצעי התשלום שלך כאן. חיבור אמצעי תשלום יהפוך את חוויית
							התשלום שלך למהירה יותר.</p>
						<div class="cart-bg">
							<div class="card-info" @click="select(0)">
								<div class="top">
									<div class="checkbox" :class="[type==0?'checkboxCurrent':'']">
										<img v-if="type==0" src="~assets/images/icon/select.png" />
									</div>
									<div class="tickets">
										<span><img src="~assets/images/icon/icon17.png" /></span>
										תשלום באמצעות כרטיס אשראי
									</div>
								</div>
								<div class="correctly">
									נא למלא נכון את כל השדות הנדרשים
								</div>
							</div>

							<div class="cart-form-li">
								<div class="form-li-f">
									<p>מספר כרטיס</p>
									<el-input v-model="input" placeholder="1234 5678 9012 3456"></el-input>
								</div>
								<div class="imgs">
									<div>
										<img src="~assets/images/icon/imgs4.png" />
									</div>
									<div>
										<img src="~assets/images/icon/imgs2.png" />
									</div>
									<div>
										<img src="~assets/images/icon/imgs3.png" />
									</div>
								</div>
							</div>
							<div class="cart-form-li">
								<div class="form-li-f">
									<p>תוקף</p>
									<el-input v-model="input" placeholder="בחרו באזרחות שלכם"></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>CVV</p>
									<el-input v-model="input" placeholder="3 ספרות בגב הכרטיס"></el-input>
								</div>
							</div>
						</div>
						<div class="select-box">
							<div class="select" @click="select(1)">
								<div class="checkbox" :class="[type==1?'checkboxCurrent':'']">
									<img v-if="type==1" src="~assets/images/icon/select.png" />
								</div>
								<div class="tickets">
									<span><img src="~assets/images/icon/icon18.png" /></span>
									תשלום באמצעות PayPal
								</div>
							</div>
							<div class="select" @click="select(2)">
								<div class="checkbox" :class="[type==2?'checkboxCurrent':'']">
									<img v-if="type==2" src="~assets/images/icon/select.png" />
								</div>
								<div class="tickets">
									<span><img src="~assets/images/icon/icon19.png" /></span>
									ביטקוין (בקרוב)
								</div>
							</div>
						</div>
					</div>
					<div class="btn">
						<button class="button">שמירה</button>
					</div>

					<div class="form">
						<div class="form-tit">הגדרות</div>
						<div class="form-li">
							<div class="li">
								<p class="text">סיסמא נוכחית</p>
								<el-input v-model="input" type="password" placeholder=""></el-input>
							</div>
						</div>

						<div class="form-li">
							<div class="li">
								<p class="text">אימות סיסמא חדשה</p>
								<el-input v-model="input" type="password" placeholder=""></el-input>
							</div>

							<div class="li">
								<p class="text">סיסמא חדשה</p>
								<el-input v-model="input" type="password" placeholder=""></el-input>
							</div>
						</div>

						<div class="btn no-boder">
							<button class="button">עדכון סיסמא</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getUserInfo,
		updateUserInfo
	} from '@/api/kentaHb'
	export default {
		data() {
			return {
				activeName: "3",
				input: "",
				type: 0,
				form: {},
				year: '',
				month: '',
				day: ''
			}

		},
		mounted() {
			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");
			this.getuser()
		},
		methods: {
			// 编辑用户信息
			async updateUser() {
				this.form.birth_date = this.year && this.month && this.day ? this.year + '-' + this.month + '-' + this
					.day : ''
				this.form.token = sessionStorage.getItem("token")
				this.form.provider = sessionStorage.getItem("user_provider")
				this.form.email = sessionStorage.getItem("user_email")
				const res = await updateUserInfo(this.form)
				this.$notify({
					title: '',
					message: 'Edited successfully',
					type: 'success'
				})
				this.getuser()
			},
			// 获取用户信息
			async getuser() {
				const res = await getUserInfo({
					email: sessionStorage.getItem("user_email"),
					token: sessionStorage.getItem("token"),
					provider: sessionStorage.getItem("user_provider"),
				})
				if (res.data.birth_date) {
					let arr = res.data.birth_date.split("-")
					this.year = arr[0]
					this.month = arr[1]
					this.day = arr[2]
				}
				this.form = res.data
			},
			select(val) {
				this.type = val
			}
		}
	}
</script>

<style lang="scss" scoped>
	.no-boder {
		border: none !important;
		margin-bottom: 2rem;
	}

	.btn {
		text-align: right;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid rgba(218, 218, 218, 1);
	}

	.button {
		width: 1.18rem;
		height: 0.48rem;
		border-radius: 8px;
		cursor: pointer;
		color: #fff;
		border: none;
		background-color: rgba(255, 50, 99, 1);
	}

	.card-info {
		cursor: pointer;
	}

	.select-box {
		text-align: right;
		width: 100%;
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		justify-content: flex-end;
	}

	.select {
		margin-top: 0.1rem;
		height: 0.64rem;
		width: 7.84rem;
		cursor: pointer;
		padding: 0 0.25rem !important;
		border: 1px solid rgba(218, 218, 218, 1) !important;
		border-radius: 6px;

		.price {
			color: rgba(0, 188, 147, 1) !important;
		}
	}

	.cart-form-li::v-deep .el-input__inner,
	.cart-form-li::v-deep .el-select {
		height: 0.48rem;
		width: 100%;
		text-align: right;
		direction: rtl;
	}

	.cart {
		margin-top: 0.4rem;
		text-align: right;
		margin-bottom: 0.24rem;


		.cart-form-li {
			margin-top: 0.25rem;
			display: flex;
			align-items: center;
			position: relative;

			.imgs {
				display: flex;
				position: absolute;
				top: 0.40rem;
				left: 10px;
				z-index: 1;
				width: 1rem;

				div {
					flex: 1;
					margin: 0 5px;
				}

				img {
					width: 100%;
					height: auto;
				}
			}
		}

		.w {
			width: 20px;
		}

		.Month {
			margin: 0 20px;
		}

		.form-li-input {
			display: flex;
			align-items: center;

			.input {
				flex: 1;
			}
		}

		.form-li-f {
			flex: 1;
			position: relative;

			p {
				margin-bottom: 0.10rem;
				font-size: 0.14rem;
				font-weight: 400;
			}
		}

		.correctly {
			margin-top: 0.2rem;
			color: rgba(26, 26, 26, 0.6);
		}

		.top,
		.select {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			direction: rtl;

			.price {
				font-family: Rubik;
				font-size: 0.16rem;
				font-weight: 500;
				color: rgba(255, 50, 99, 1);

				span {
					font-weight: bold;
				}

				div {
					font-size: 0.12rem;
					font-weight: 400;
					text-align: right;
					margin-top: 0.05rem;
					color: rgba(26, 26, 26, 0.6);

				}
			}

			.tickets {
				font-family: Noto Sans Hebrew;
				font-size: 0.16rem;
				font-weight: 600;
				display: flex;
				align-items: center;
				padding-left: 0.25rem;

				span {
					width: 0.24rem;
					display: inline-block;
					height: 0.24rem;
					background-color: #fff;
					border: 1px solid rgba(218, 218, 218, 1);
					border-radius: 3.6px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-left: 0.15rem;
				}

				img {
					width: 0.16rem;
					height: auto;
				}
			}

			.checkboxCurrent {
				border-color: rgb(255, 50, 99);
				background-color: rgb(255, 50, 99);
			}

			.checkbox {
				width: 0.24rem;
				height: 0.24rem;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				border: 1px solid #DADADA;

				margin-left: 0.15rem;

				img {
					width: 0.12rem;
					height: 0.15rem;
				}
			}
		}

		.cart-bg {
			margin-top: 0.24rem;
			padding: 0.24rem 0.4rem;
			display: inline-block;
			width: 100%;
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 8px;
			background-color: rgba(245, 245, 245, 1);
			margin-bottom: 0.1rem;
			width: 7.84rem;
		}

		.cart-tit {
			font-size: 0.2rem;
			font-weight: 600;
		}

		.desc {
			margin-top: 0.16rem;
			color: rgba(26, 26, 26, 0.6);
		}
	}



	.form ::v-deep .el-input__inner {
		width: 3.84rem;
		height: 0.48rem;
		text-align: right;
	}

	.t-input {
		display: flex;
		align-items: center;
		width: 3.84rem;
		height: 0.48rem;
	}

	.t-input ::v-deep .el-input__inner {
		width: 1.28rem;
		text-align: center;
		border-radius: 0;
	}

	.t-input .t-input-li:nth-child(1) ::v-deep .el-input__inner {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	.t-input .t-input-li:nth-child(2) ::v-deep .el-input__inner {
		border-left: none;
		border-right: none;
	}

	.t-input .t-input-li:nth-child(3) ::v-deep .el-input__inner {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	.form {
		padding-top: 0.4rem;

		.tips {
			margin-top: 0.24rem;
			font-size: 0.12rem;
			display: flex;
			height: 0.48rem;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: rgba(26, 26, 26, 0.6);
		}

		.form-li {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			margin-bottom: 0.24rem;

			.li {
				margin-left: 0.17rem;

				.text {
					margin-bottom: 8px;
					text-align: right;
				}
			}
		}

		.form-tit {
			font-size: 0.2rem;
			font-weight: 600;
			text-align: right;
			margin-bottom: 0.24rem;
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