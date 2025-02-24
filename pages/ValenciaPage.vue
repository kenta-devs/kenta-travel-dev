<template>
	<div class="page">
		<TripHeader :index="3" />
		<main>
			<div class="content">
				<div class="left">
					<div class="Change-t">
						<i class="el-icon-right"></i>
						<p>
							שנוי הזמנה
						</p>
					</div>
					<div class="ready">
						שמרנו את הפרטים האישיים שלך
					</div>
					<div class="How">
						איך תרצו לשלם?
					</div>
					<div class="form">
						<div class="zan-li">
							<img src="~assets/images/icon/icon16.png" />
							תשלום מאובטח - הבטיחות שלך היא בראש סדר העדיפויות שלנו.
						</div>
						<div class="zan-li">
							<img src="~assets/images/icon/icon16.png" />
							ללא עלויות נסתרות - מה שאתם רואים זה מה שאתם משלמים.
						</div>
						<div class="method">
							אמצעי תשלום
						</div>
						<div class="tips">
							<p> בלחיצה על כפתור התשלום אני מבצע/ת הזמנה עם התחייבות לתשלום, </p>
							<p> ובכך אני מסכימ/ה עם <span>תנאי השימוש ומדיניות האתר.</span></p>
						</div>
						<div class="card">
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
							<div class="form-li">
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
							<div class="form-li form-li1">
								<div class="form-li-f">
									<p>תוקף</p>
									<el-input v-model="input" placeholder="בחרו באזרחות שלכם"></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p class="CVV">CVV</p>
									<el-input v-model="input" placeholder="3 ספרות בגב הכרטיס"></el-input>
								</div>
							</div>
							<div class="form-li">
								<button class="button">המשך לתשלום</button>
							</div>
						</div>
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
								תשלום באמצעות כרטיס אשראי
							</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="Summary">
						<div class="name">
							סיכום ההזמנה שלך
						</div>
						<div class="Summary-li">
							<div class="n">
								אירוע
							</div>
							<p class="p">
								Celta de Vigo vs Valencia CF
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								תאריך
							</div>
							<p class="p">
								<span class="dec"><i class="el-icon-check"></i>
									התאריך אושר</span>
								אוגוסט 23, 2024
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								איצטדיון
							</div>
							<p class="p">
								Estadio Municipal de Balaídos
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								מושבים
							</div>
							<p class="p">
								Long Side
							</p>
						</div>
						<div class="Summary-li Summary-Number">
							<div class="n">
								מספר אנשים
							</div>
							<p class="p">
								2 מבוגרים
							</p>
						</div>
						<div class="Card">
							<div>כרטיס/ים</div>
							<p>2</p>
						</div>
						<div class="Card">
							<div>סה״כ מחיר לאדם</div>
							<p>€55</p>
						</div>
						<div class="Total">
							<div class="n">
								<h4>סה״כ עבור 2 מבוגרים</h4>
								<p>ללא עלויות נוספות</p>
							</div>
							<div class="num">
								€110
							</div>
						</div>
						<div class="order">
							<div class="n">
								<img src="~assets/images/icon/icon15.png" />
								הזמינו בבטחה עם קנטה
							</div>
							<div class="img">
								<img src="~assets/images/icon/imgs1.png" />
								<img src="~assets/images/icon/imgs5.png" />
								<img src="~assets/images/icon/imgs3.png" />
								<img src="~assets/images/icon/imgs2.png" />
								<img src="~assets/images/icon/imgs4.png" />
							</div>
						</div>
					</div>
					<!-- 价格信息移动端 -->
					<el-drawer :with-header="false" :visible.sync="pricedirection" size="100%" direction="btt">
						<mobile-header @close="pricedirection=false" />
						<div class="priceSummary">
							<div class="filter-w">
								<div class="filter" @click="pricedirection=false">
									<img src="~assets/images/icon/mapcolse.png" />
								</div>
							</div>
							<div class="Summary">
								<div class="name">
									סיכום ההזמנה שלך
								</div>
								<div class="Summary-li">
									<div class="n">
										אירוע
									</div>
									<p class="p">
										Celta de Vigo vs Valencia CF
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										תאריך
									</div>
									<p class="p">
										<span class="dec"><i class="el-icon-check"></i>
											התאריך אושר</span>
										אוגוסט 23, 2024
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										איצטדיון
									</div>
									<p class="p">
										Estadio Municipal de Balaídos
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										מושבים
									</div>
									<p class="p">
										Long Side
									</p>
								</div>
								<div class="Summary-li Summary-Number">
									<div class="n">
										מספר אנשים
									</div>
									<p class="p">
										2 מבוגרים
									</p>
								</div>
								<div class="Card">
									<div>כרטיס/ים</div>
									<p>2</p>
								</div>
								<div class="Card">
									<div>סה״כ מחיר לאדם</div>
									<p>€55</p>
								</div>
								<div class="Total">
									<div class="n">
										<h4>סה״כ עבור 2 מבוגרים</h4>
										<p>ללא עלויות נוספות</p>
									</div>
									<div class="num">
										€110
									</div>
								</div>
								<div class="order">
									<div class="n">
										<img src="~assets/images/icon/icon15.png" />
										הזמינו בבטחה עם קנטה
									</div>
									<div class="img">
										<img src="~assets/images/icon/imgs1.png" />
										<img src="~assets/images/icon/imgs5.png" />
										<img src="~assets/images/icon/imgs3.png" />
										<img src="~assets/images/icon/imgs2.png" />
										<img src="~assets/images/icon/imgs4.png" />
									</div>
								</div>
							</div>
						</div>
					</el-drawer>
					<div class="why padding">
						<div class="name">
							למה להזמין ב-<span>Kenta</span>？
						</div>
						<div class="why-li">
							<p>
								<img src="~assets/images/icon/icon14.png" />
								כרטיסים רישמיים
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								מושבים אחד-ליד-השני
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								אירועים מובטחים
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								זמינות בזמן אמת
							</p>
						</div>
					</div>
					<div class="padding">
						<div class="Frequently">
							<div class="name">
								שאלות נפוצות
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="האם תאריכי הכרטיסים מאושרים?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="איך ומתי אקבל את הכרטיסים שלי?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="איפה אני אשב באיצדטיון?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
						<div class="help">
							<div class="help-name">איך נוכל לעזור?</div>
							<div class="user">
								<div class="state"></div>
								<img src="~assets/images/kefu.png" />
								<div class="text">
									<p>שירות הלקוחות שלנו ישמח לסייע לכם</p>
									<p>בימי חול בין השעות 09:00-17:00. </p>
								</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon11.png" />
								</div>
								<p>כתבו לנו בWhatsApp</p>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon12.png" />
								</div>
								<p>כתבו לנו אימייל</p>
								<div class="text">support@kenta.co.il</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon10.png" />
								</div>
								<p>התקשרו</p>
								<div class="text">03-555-8888</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="foo-h"></div>
		</main>
		<!-- 移动端的悬浮 -->
		<div class="suspension-h"></div>
		<div class="suspension">
			<div class="suspension-warp">
				<div class="l">
					<h3>€110</h3>
					<p>Total for 2 adults</p>
				</div>
				<div class="r" @click="pricedirection=true">
					פרטי נסיעה<i class="el-icon-arrow-up"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tripPage',
		data() {
			return {
				input: '',
				options: [{
					value: 'Choose your nationality',
					label: 'Choose your nationality'
				}],
				value: '',
				type: 0,
				pricedirection: false
			}

		},
		methods: {
			select(val) {
				this.type = val
			}
		}
	}
</script>

<style lang="scss" scoped>
	@media (max-width: 820px) {
		.page {
			.How {
				font-size: 0.28rem;
				margin: 0.24rem 0;
			}

			.priceSummary .Summary {
				display: inline-block !important;
				border: none;
			}

			.priceSummary .filter-w {
				padding: 0.24rem 0.2rem;
			}

			.suspension-warp {
				display: flex;
				align-items: center;
				direction: ltr;

				.r {
					color: #EE2344;
					font-size: 0.16rem;

					i {
						margin-left: 0.16rem;
					}
				}

				.l {
					flex: 1;

					h3 {
						font-size: 0.32rem;
						color: #00BC93;
					}

					p {
						font-size: 0.12rem;
						color: #1A1A1A;
					}
				}
			}

			.suspension-h,
			.suspension {
				display: inline-block !important;
			}

			.form {
				padding: 0.24rem 0.16rem;
			}

			.select .tickets {
				padding-left: 0;
			}

			.content .right .why {
				background-color: rgb(241, 250, 248, 1)
			}

			.why .why-li {
				flex-direction: column;
				align-items: flex-start;
			}

			.why .why-li p {
				width: 100%;
			}

			.form-li1 {
				flex-direction: column;

				.form-li-f {
					width: 100%;
					flex: inherit;
				}

				.CVV {
					margin-top: 0.1rem;
				}
			}

			.card {
				padding: 0.28rem 0.12rem;
			}

			.zan-li {
				align-items: flex-start;
			}

			.zan-li img {
				height: 0.16rem;
			}

			.content .right {
				width: 100%;
				margin-right: 0;
			}

			.Summary {
				display: none;
			}

			.content {
				width: 100%;
				padding: 0 0.2rem;
				margin-top: 0.24rem;
				flex-direction: column;
			}
		}
	}

	.priceSummary .filter-w {
		padding: 0.24rem 0.2rem;
	}

	.filter-w {
		text-align: left;
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
	}

	.filter img {
		width: 0.11rem;
		height: auto;
	}

	.form-li::v-deep .el-input__inner,
	.form-li::v-deep .el-select {
		height: 0.48rem;
		width: 100%;
	}

	.suspension-h {
		height: 0.7rem;
		display: none;
	}

	.suspension {
		display: none;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
		z-index: 1;
		border-top: 1px solid #DADADA;
		background-color: #fff;
		padding: 0.2rem 0.2rem 0.24rem 0.2rem;
		width: 100%;
	}

	.button {
		height: 0.4rem;
		background-color: rgba(255, 50, 99, 1);
		border: none;
		border-radius: 8px;
		color: #fff;
		font-size: 0.14rem;
		flex: 1;
		cursor: pointer;
	}

	.correctly {
		font-size: 0.14rem;
		font-weight: 400;
		margin-top: 0.20rem;
		color: rgba(26, 26, 26, 0.6);
	}

	.method {
		font-size: 0.16rem;
		font-weight: 500;
		margin-top: 0.25rem;
	}

	.select {
		margin-top: 0.1rem;
		height: 0.64rem;
		cursor: pointer;
		padding: 0 0.25rem !important;
		border: 1px solid rgba(218, 218, 218, 1) !important;
		border-radius: 6px;

		.price {
			color: rgba(0, 188, 147, 1) !important;
		}
	}

	.top,
	.select {
		position: relative;
		display: flex;
		align-items: center;

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
			flex: 1;
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

	.card {
		padding: 0.25rem;
		display: inline-block;
		width: 100%;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;
		background-color: rgba(245, 245, 245, 1);
		margin-bottom: 0.1rem;

		.card-info {
			cursor: pointer;
		}

	}

	.tips {
		margin: 0.15rem 0;
		font-size: 0.14rem;
		font-weight: 400;

		span {
			color: rgba(52, 81, 255, 1);
		}
	}

	.zan-li {
		display: flex;
		align-items: center;
		padding: 0.08rem 0.15rem;
		font-size: 0.16rem;
		font-weight: 400;
		border-radius: 8px;
		margin-bottom: 0.1rem;
		background-color: rgba(0, 188, 147, 0.12);

		img {
			width: 0.16rem;
			height: auto;
			margin-left: 0.05rem;
		}
	}

	.form {
		padding: 0.25rem;
		background-color: #fff;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;

		.form-li {
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
	}

	.How {
		font-size: 0.32rem;
		font-weight: 400;
		margin: 0.25rem 0;
	}

	.ready {
		margin-top: 0.05rem;
		font-size: 0.14rem;
		color: rgba(26, 26, 26, 0.6);
		font-weight: 400;
	}

	.Change-t {
		color: rgba(52, 81, 255, 1);
		font-size: 0.14rem;
		font-weight: 400;

		p {
			cursor: pointer;
			border-bottom: 1px solid rgba(52, 81, 255, 1);
			display: inline-block;
		}
	}

	.page {
		background-color: #F5F5F5;
		direction: rtl;
	}

	.warp {
		padding: 0 0.32rem;
	}

	.why {
		margin: 0.20rem 0;
		padding: 0.25rem !important;
		border: 1px solid rgba(0, 188, 147, 1);
		border-radius: 8px;

		.name {
			font-size: 0.2rem;
			font-weight: 700;
			color: rgba(0, 188, 147, 1);

			span {
				font-family: Oleo Script;
				font-size: 0.24rem;
				font-weight: 700;
			}

		}

		.why-li {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			p {
				margin-top: 0.15rem;
				width: 50%;
				display: flex;
				align-items: center;
				font-family: Rubik;
				font-size: 0.14rem;
				font-weight: 400;

				img {
					width: 0.16rem;
					height: 0.16rem;
					margin-left: 0.10rem;
				}
			}
		}
	}


	/* content */
	.content {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 1440px;
		margin: 0.32rem auto 0 auto;
	}

	.content .left {
		flex: 1;
	}

	.content .left .choose .choose-bg {
		background-color: #fff;
		padding: 0.32rem;
		;
	}

	.content .left .choose {
		border-radius: 8px;
		width: 100%;
		display: inline-block;
		border: 1px solid #DADADA;
		margin-bottom: 0.10rem;
		;
		overflow: hidden;
	}

	.content .left .choose h1 {
		font-size: 0.32rem;
		font-weight: 400;
		text-align: left;
	}

	.content .left .choose .text {
		margin: 0.20rem;
		background-color: rgba(0, 188, 147, 0.12);
		font-size: 0.16rem;
		font-weight: 400;
		height: 0.4rem;
		;
		display: flex;
		align-items: center;
		border-radius: 8px;
		padding: 0 0.15rem;

	}

	.content .left .choose .text img {
		width: 0.24rem;
		height: 0.24rem;
		margin-right: 0.10rem;
	}



	.content .type-name {
		font-weight: 400;
		margin-bottom: 0.10rem;
	}

	.content .type {
		display: flex;
	}

	.content .type-li {
		position: relative;
		width: 308px;
		margin-right: 20px;
		padding: 20px;
		border: 1px solid #DADADA;
		border-radius: 6px;


	}

	.content .current {
		background: rgba(255, 50, 99, 0.08);
		border-color: rgba(255, 50, 99, 1);
		color: rgba(255, 50, 99, 1);
	}

	.content .current p {
		color: rgba(255, 50, 99, 1);
	}

	.content .current .radio {
		background-color: rgba(255, 50, 99, 1);
		border-color: rgba(255, 50, 99, 1) !important;
	}

	.content .type-li .radio {
		width: 0.24rem;
		height: 0.24rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 1px solid #DADADA;
	}

	.content .type-li .radio img {
		width: 0.12rem;
		height: 0.15rem;
	}

	.content .type-li .ticket {
		margin-top: 35px;
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: 550;
		line-height: 16px;
	}

	.content .type-li .tips {
		font-weight: 400;
		width: 176px;
		color: rgba(26, 26, 26, 0.6);
	}

	.content .people {
		margin-top: 40px;
	}

	.content .people .select {
		height: 48px;
		width: 308px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 6px;
		font-family: Noto Sans Hebrew;
		font-size: 16px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}

	.content .people .select img {
		width: 20px;
	}

	.content .people .select p {
		flex: 1;
	}

	.content .choose .confirm {
		padding: 32px;
		display: flex;
		align-items: center;
		border-top: 1px solid #DADADA;
	}

	.content .choose .confirm button {
		background-color: rgba(255, 50, 99, 1);
		border-radius: 8px;
		width: 100px;
		height: 40px;
		cursor: pointer;
		font-weight: 400;
		border: none;
		color: rgba(254, 254, 254, 1);
	}

	.content .choose .confirm .confirm-text {
		margin-left: 32px;
		font-weight: 400;
		line-height: 16px;
		color: rgba(26, 26, 26, 0.6);
	}

	.content .item-li {
		margin-top: 0.25rem;
		background-color: #fff;
		border: 1px solid #DADADA;
		border-radius: 8px;
		height: 1rem;
		padding-left: 20px;
		display: flex;
		align-items: center;
		font-size: 0.32rem;
		font-weight: 400;
		color: #a2a2a2;
	}

	.Summary {
		padding: 0.25rem 0.25rem 0.20rem 0.25rem;
		border: 1px solid #DADADA;
		border-radius: 8px;
		overflow: hidden;
		background-color: #fff;

		.Summary-Number {
			padding-bottom: 0.15rem;
			border-bottom: 1px solid #DADADA;
		}

		.order {
			.img {
				display: flex;
				align-items: center;

				img {
					width: 15%;
					height: auto;
					margin-left: 0.25rem;
				}
			}

			.n {
				padding: 0.15rem 0;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(0, 188, 147, 1);
				display: flex;
				align-items: center;

				img {
					width: 0.16rem;
					height: auto;
					margin-left: 0.05rem;
				}
			}
		}

		.Total {
			display: flex;
			padding: 0.15rem 0;
			align-items: center;
			margin-top: 0.15rem;
			border-top: 1px solid #DADADA;
			border-bottom: 1px solid #DADADA;

			.num {
				color: rgba(0, 188, 147, 1);
				font-size: 0.32rem;
				font-weight: 400;
			}

			.n {
				flex: 1;

				h4 {
					font-size: 0.16rem;
					font-weight: 500;
					margin: 0;
				}

				p {
					margin-top: 0.1rem;
					color: rgba(0, 188, 147, 1);
					font-family: Noto Sans Hebrew;
					font-size: 0.1rem;
					font-weight: 400;
				}
			}
		}

		.Card {
			display: flex;
			align-items: center;
			margin-top: 0.15rem;
			font-size: 0.12rem;
			color: rgba(26, 26, 26, 0.6);
			font-weight: 400;

			div {
				flex: 1;
			}
		}

		.Summary-li {
			display: flex;
			align-items: center;
			margin-top: 0.25rem;

			.dec {
				padding: 0.05rem 0.10rem;
				margin-right: 0.15rem;
				border-radius: 200px;
				background-color: rgba(0, 188, 147, 0.12);
				color: rgba(0, 188, 147, 1);
				font-size: 0.1rem;
				font-weight: 500;
				line-height: 0.12rem;
				margin-left: 0.1rem;

				i {
					font-weight: bold;
					margin-left: 0.05rem;
					;
				}
			}

			.n {
				flex: 1;
				font-size: 0.16rem;
				font-weight: 500;
				color: rgba(26, 26, 26, 1);
			}

			.t {
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 1);
			}
		}

		.name {
			font-size: 0.20rem;
			font-weight: 500;
			padding-bottom: 0 !important;
		}
	}

	.content .right {
		width: 4.48rem;
		margin-right: 0.15rem;
		display: inline-block;

		.r-img {
			border: 1px solid #DADADA;
			border-radius: 8px;
			overflow: hidden;
			background-color: #fff;

			img {
				width: 100%;
				height: auto;
			}
		}
	}

	.content .right .padding {
		padding: 0.25rem 0;
		border: 1px solid #DADADA;
		border-radius: 8px;
		overflow: hidden;
		background-color: #fff;

		.Frequently {
			padding: 0 0.25rem;
		}
	}

	.content .right .name {
		font-size: 20px;
		font-weight: 600;
		padding-bottom: 10px;

	}

	.checkbox::v-deep .el-input__suffix {
		left: 0;
		right: auto;
	}

	.checkbox::v-deep .el-input__inner {
		height: 48px;
		border: none;
		padding: 0;
		background-color: rgba(26, 26, 26, 0);
	}

	.checkbox::v-deep .el-select {
		width: 100%;
	}

	.content .right .checkbox {
		margin-top: 15px;
		border: 1px solid #DADADA;
		border-radius: 6px;
		display: flex;
		align-items: center;
		height: 48px;
		background-color: #F5F5F5;
		font-size: 16px;
		padding: 0 15px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}

	.content .right .checkbox p {
		flex: 1;
	}

	.content .right .checkbox img {
		width: 0.2rem;
		height: auto;
	}

	.content .right .help {
		margin-top: 0.30rem;
		padding: 0.20rem 0.25rem 0 0.25rem;
		border-top: 1px solid #DADADA;
	}

	.content .right .help .help-name {
		font-size: 20px;
		font-weight: 500;
	}

	.content .right .help .user {
		display: flex;
		position: relative;
		align-items: center;
		margin: 20px 0;
	}

	.content .right .help .user .state {
		width: 16px;
		height: 16px;
		position: absolute;
		right: 0px;
		top: 0;
		z-index: 9;
		background-color: #00BC93;
		border: 2px solid #fff;
		border-radius: 50%;
	}

	.content .right .help .user img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
	}

	.content .right .help .user .text {
		font-size: 12px;
		margin-right: 20px;
		color: rgba(26, 26, 26, 0.6);
		font-weight: 400;
		line-height: 16px;

	}

	.contact-li {
		margin-top: 15px;
		border: 1px solid #DADADA;
		border-radius: 6px;
		display: flex;
		align-items: center;
		height: 48px;
		background-color: #F5F5F5;
		font-size: 16px;
		padding: 0 15px;
		font-weight: 400;
		color: rgba(26, 26, 26, 1);
	}

	.contact-li .icon {
		width: 32px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32px;
		margin-left: 20px;
		border-radius: 4px;
		background: linear-gradient(135deg, #FF3263 0%, #EE2344 100%);
	}

	.contact-li .icon img {
		width: 0.16rem;
		height: auto;
	}

	.contact-li p {
		flex: 1;
	}

	.contact-li .text {
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
		color: rgba(26, 26, 26, 0.6);
	}
</style>