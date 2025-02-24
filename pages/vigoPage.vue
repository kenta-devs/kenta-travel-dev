<template>
	<div class="page">
		<TripHeader :index="2" />
		<main>
			<div class="content">
				<div class="left">
					<div class="Change-t" @click="$router.back()">
						<i class="el-icon-right"></i>
						<p>
							שנוי הזמנה
						</p>
					</div>
					<div class="ready">
						ההזמנה כמעט מוכנה!
					</div>
					<el-form :model="payForm" :rules="rules" ref="payForm" class="form">
						<div class="form-info form-info1">
							<p class="t">פרטי המזמין/מטייל</p>
							<p class="f">נא למלא את כל הפרטים</p>
							<el-form-item label=" " required>
								<el-row :gutter="20">
									<el-col :xs="24" :span="12">
										<el-form-item prop="last_name">
											<p>שם משפחה*</p>
											<el-input v-model="payForm.last_name" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :xs="24" :span="12">
										<el-form-item prop="first_name">
											<p>שם פרטי*</p>
											<el-input v-model="payForm.first_name" placeholder=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form-item>

							<el-form-item label=" " required>
								<el-row :gutter="20">
									<el-col :xs="24" :span="12">
										<el-row :gutter="20">
											<el-col :span="8">
												<el-form-item prop="year">
													<p></p>
													<el-input v-model="payForm.year" placeholder="שנה"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="8">
												<el-form-item prop="month">
													<p></p>
													<el-input v-model="payForm.month" placeholder="חודש"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="8">
												<el-form-item prop="day">
													<p>תאריך לידה*</p>
													<el-input v-model="payForm.day" placeholder="יום"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
									</el-col>
									<el-col :xs="24" :span="12">
										<el-form-item prop="country">
											<div class="form-li-f">
												<p>אזרחות*</p>
												<span style="left: 16px; top: 37px;" class="i">i</span>
												<el-select prefix-icon="el-icon-search" v-model="payForm.country"
													placeholder="בחרו באזרחות שלכם">
													<el-option v-for="item in CountryList" :key="item.alpha_3"
														:label="item.name" :value="item.alpha_3">
													</el-option>
												</el-select>
											</div>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form-item>
							<el-form-item label=" " prop="address">
								<p>כתובת*</p>
								<span style="left: 16px; top: 37px;" class="i">i</span>
								<el-input v-model="payForm.address" placeholder=""></el-input>
							</el-form-item>
							<el-form-item label=" ">
								<el-row :gutter="20">
									<el-col :xs="24" :span="12">
										<el-form-item prop="live_city">
											<p>עיר מגורים*</p>
											<el-input v-model="payForm.live_city" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :xs="24" :span="12">
										<p>מיקוד</p>
										<el-input v-model="payForm.postal_code" placeholder=""></el-input>
									</el-col>
								</el-row>
							</el-form-item>
							<el-form-item label=" ">
								<el-row :gutter="20">
									<el-col :xs="24" :span="12">
										<p class="no-p"></p>
									</el-col>
									<el-col :xs="24" :span="12">
										<el-form-item prop="live_country">
											<p>מדינה*</p>
											<span style="left: 16px; top: 37px;" class="i">i</span>
											<el-select v-model="payForm.live_country" placeholder="בחר/י את המדינה שלך">
												<el-option v-for="item in CountryList" :key="item.alpha_3"
													:label="item.name" :value="item.alpha_3">
												</el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form-item>
						</div>
						<div class="Contact">
							<p class="t">פרטי התקשרות</p>
							<p class="f">איך נוכל ליצור איתך קשר?</p>
							<el-form-item label=" ">
								<el-row :gutter="20">
									<el-col :xs="24" :span="12">
										<el-form-item prop="email">
											<p>כתובת אימייל*</p>
											<el-input v-model="payForm.email" placeholder=""></el-input>
										</el-form-item>
									</el-col>
									<el-col :xs="24" :span="12">
										<el-form-item prop="phone">
											<p>מספר טלפון*</p>
											<el-input v-model="payForm.phone" placeholder=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form-item>
							<div class="form-li">
								<div class="form-li-f">
									<div class="agreement">
										<div @click="payForm.save_email=!payForm.save_email" class="icon"
											:class="[payForm.save_email?'currrent':'']">
											<img v-if="payForm.save_email" src="~assets/images/icon/select.png" />
										</div>
										<div class="flex">
											<p class="text">ברצוני לקבל הצעות והמלצות מיוחדות למייל.</p>

										</div>
									</div>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p class="text">רק למקרים של בעיות בהזמנה.</p>
								</div>
							</div>
						</div>
						<div class="voucher">
							<p>
								האם יש לך קוד קופון או שובר?
							</p>
						</div>
					</el-form>

					<div v-if="payForm.other_data.length>0" v-for="(item,index) in payForm.other_data" :key="index">
						<div class="ready">
							נוסע {{index+2}}
						</div>
						<div class="other_data">
							<div class="form">
								<div class="form-info">
									<div class="form-li" style="margin-top:0px;">
										<div class="form-li-f">
											<p>שם פרטי</p>
											<el-input v-model="item.first_name" placeholder=""></el-input>
										</div>
										<div class="w"></div>
										<div class="form-li-f">
											<p>שם משפחה</p>
											<el-input v-model="item.last_name" placeholder=""></el-input>
										</div>
									</div>
									<div class="form-li">
										<div class="form-li-f">
											<p>אזרחות</p>
											<span style="left: 16px; top: 40px;" class="i">i</span>
											<el-select v-model="item.country" placeholder="Choose your nationality">
												<el-option v-for="item in CountryList" :key="item.alpha_3"
													:label="item.name" :value="item.alpha_3">
												</el-option>
											</el-select>
										</div>
										<div class="w"></div>
										<div class="form-li-f">
											<p>תאריך לידה</p>
											<div class="form-li-input">
												<div class="input">
													<el-input v-model="item.day" placeholder="שנה"></el-input>
												</div>
												<div class="input Month">
													<el-input v-model="item.month" placeholder="חודש"></el-input>
												</div>
												<div class="input">
													<el-input v-model="item.year" placeholder="יום"></el-input>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="organizer">
						<div class="form-info">
							<div class="name">הגבלות וכללים של מארגן האירוע</div>
							<div class="text">
								<p>כדי למנוע אכזבה ביום האירוע, ברצוננו להביא לידיעתכם את ההגבלות הבאות:
								</p>
							</div>
							<div class="above">
								<p>
									<span>・</span>
									אוהדים מאסטון וילה אינם מורשים לבקר באירוע
								</p>
								<p>
									<span>・</span>
									במקרים מסוימים יידרש העתק זיהוי כדי למנוע כל ספק באמור לעיל. בנוסף, מארגני אירועים
								</p>
								<p>
									מסוימים עשויים לבקש טופס הצהרת קוד התנהגות חתום. ניצור איתך קשר במידת הצורך.
								</p>
							</div>
						</div>
						<div class="agree" @click="agree=!agree">
							<div class="icon">
								<img v-if="agree" src="~assets/images/icon/x.png" />
							</div>
							אני מסכים לתנאיו של מארגן האירוע.
						</div>
						<div class="payment">
							<button @click="Topayment('payForm')">המשך לתשלום</button>
							<div class="p">
								<p>
									מוכנים לחוויה בלתי נשכחת? לחץ על המשך לתשלום כדי לנעול את
								</p>
								<p>
									ההזמנה שלך! ההזמנה שלך תושלם ולא ניתן לשנות אותה בשלב זה.
								</p>

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
								{{setData.event_name}}
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								תאריך
							</div>
							<p class="p">
								<span class="dec"><i class="el-icon-check"></i>
									התאריך אושר</span>
								אוגוסט {{setData.date_time}}
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								איצטדיון
							</div>
							<p class="p">
								{{setData.city_address}}
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								מושבים
							</div>
							<p class="p">
								{{setData.category_type}}
							</p>
						</div>
						<div class="Summary-li Summary-Number">
							<div class="n">
								מספר אנשים
							</div>
							<p class="p">
								{{setData.peopleNum}} מבוגרים
							</p>
						</div>
						<div class="Card">
							<div>כרטיס/ים</div>
							<p>{{setData.peopleNum}}</p>
						</div>
						<div class="Card">
							<div>סה״כ מחיר לאדם</div>
							<p>€{{priceFn(setData.net_rate)}}</p>
						</div>
						<div class="Total">
							<div class="n">
								<h4>סה״כ עבור {{setData.peopleNum}} מבוגרים</h4>
								<p>ללא עלויות נוספות</p>
							</div>
							<div class="num">
								€{{priceFn((setData.net_rate)*setData.peopleNum)}}
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
										{{setData.event_name}}
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										תאריך
									</div>
									<p class="p">
										<span class="dec"><i class="el-icon-check"></i>
											התאריך אושר</span>
										אוגוסט {{setData.date_time}}
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										איצטדיון
									</div>
									<p class="p">
										{{setData.city_address}}
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										מושבים
									</div>
									<p class="p">
										{{setData.category_type}}
									</p>
								</div>
								<div class="Summary-li Summary-Number">
									<div class="n">
										מספר אנשים
									</div>
									<p class="p">
										{{setData.peopleNum}} מבוגרים
									</p>
								</div>
								<div class="Card">
									<div>כרטיס/ים</div>
									<p>{{setData.peopleNum}}</p>
								</div>
								<div class="Card">
									<div>סה״כ מחיר לאדם</div>
									<p>€{{priceFn(setData.net_rate)}}</p>
								</div>
								<div class="Total">
									<div class="n">
										<h4>סה״כ עבור {{setData.peopleNum}} מבוגרים</h4>
										<p>ללא עלויות נוספות</p>
									</div>
									<div class="num">
										€{{priceFn((setData.net_rate)*setData.peopleNum)}}
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
								<el-select v-model="value" disabled placeholder="האם תאריכי הכרטיסים מאושרים?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" disabled placeholder="איך ומתי אקבל את הכרטיסים שלי?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" disabled placeholder="איפה אני אשב באיצדטיון?">
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
									<p>שירות הלקוחות שלנו ישמח לסייע לכם </p>
									<p>בימי חול בין השעות 09:00-17:00.</p>
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
					<h3>€{{priceFn((setData.net_rate)*setData.peopleNum)}}</h3>
					<p>Total for {{setData.peopleNum}} adults</p>
				</div>
				<div class="r" @click="pricedirection=true">
					פרטי נסיעה<i class="el-icon-arrow-up"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getFrom,
		getCountry,
		getHotelInfo,
		toEventPayment
	} from '@/api/kentaHb'
	import {
		getMail,
		getUserInfo,
		findPwdSendMail,
	} from '@/api/login'
	import priceqf from '@/utils/priceqf.js'
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
				agree: true,
				pricedirection: false,
				setData: {},
				payForm: {
					tic_name: '',
					start_date: '',
					site_local: '',
					seat_type: '',
					tic_num: '',
					net_rate: '',
					amount: '',
					first_name: '',
					last_name: '',
					birthday: '',
					country: '',
					address: '',
					live_city: '',
					postal_code: '',
					live_country: '',
					phone: '',
					email: '',
					currency_code: '',
					save_email: false,
					ticket_id: '',
					other_data: [],
					year: '',
					month: '',
					day: '',
				},
				CountryList: [],
				rules: {
					first_name: [{
						required: true,
						message: 'Please enter a first name',
						trigger: 'blur'
					}],
					last_name: [{
						required: true,
						message: 'Please enter last name',
						trigger: 'blur'
					}],
					country: [{
						required: true,
						message: 'Please select nationality',
						trigger: 'blur'
					}],
					day: [{
						required: true,
						message: 'Please enter the day',
						trigger: 'blur'
					}],
					month: [{
						required: true,
						message: 'Please enter the month',
						trigger: 'blur'
					}],
					year: [{
						required: true,
						message: 'Please enter the year',
						trigger: 'blur'
					}],
					address: [{
						required: true,
						message: 'Please enter the address',
						trigger: 'blur'
					}],
					live_city: [{
						required: true,
						message: 'Please enter the live city',
						trigger: 'blur'
					}],
					live_country: [{
						required: true,
						message: 'Please select live country',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: 'Please enter the phone',
						trigger: 'blur'
					}],
					email: [{
						required: true,
						message: 'Please enter the email',
						trigger: 'blur'
					}]
				}
			}

		},
		async created() {
			// this.setData = JSON.parse(this.$route.query.data)
			if (sessionStorage.getItem('TotripData')) {
				this.setData = JSON.parse(sessionStorage.getItem('TotripData'))
			}
			this.getpeople()
			this.getCountryList()
		},
		methods: {
			priceFn(e) {
				if (e) {
					return priceqf.addThousandsSeparator(e)
				} else {
					return '0.00'
				}
			},
			// 获取乘客
			getpeople() {
				if (this.setData.peopleNum == 2) {
					this.topush()
				}
				if (this.setData.peopleNum > 2) {
					for (let i = 0; i < this.setData.peopleNum - 1; i++) {
						this.topush()
					}
				}
			},
			// 追击
			topush() {
				let data = {
					last_name: '',
					first_name: '',
					birthday: '',
					country: '',
					year: '',
					month: '',
					day: ''
				}
				this.payForm.other_data.push(data)
			},
			// 支付
			Topayment(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (!this.agree) {
							this.$message({
								message: 'Please agree and check the terms of the event organizer',
								type: 'warning'
							})
						} else {
							this.payForm.birthday = this.payForm.day + '-' + this.payForm.month + '-' + this
								.payForm.year
							this.payForm.tic_name = this.setData.event_name
							this.payForm.start_date = this.setData.date_time
							this.payForm.site_local = this.setData.city_address
							this.payForm.seat_type = this.setData.category_type
							this.payForm.tic_num = this.setData.peopleNum
							this.payForm.net_rate = this.setData.net_rate / 100
							this.payForm.amount = (this.setData.net_rate / 100) * this.setData.peopleNum
							this.payForm.currency_code = this.setData.currency_code
							this.payForm.ticket_id = this.setData.ticket_id
							// 获取乘客生日
							if (this.payForm.other_data.length > 0) {
								this.getbirthday()
							}
							toEventPayment(this.payForm).then((data) => {
								window.open(data)
							})
						}
					} else {
						return false;
					}
				})
			},
			// 获取乘客生日
			getbirthday() {
				this.payForm.other_data.forEach(item => {
					item.birthday = item.day + '-' + item.month + '-' + item.year
				})
			},
			// 获取国家
			async getCountryList() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})
				const res = await getCountry().catch(err => {
					loading.close()
				})
				this.CountryList = res.data
				loading.close()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page::v-deep .el-form-item__label::before {
		display: none;
	}

	.form::v-deep .el-select {
		width: 100%;
	}

	.other_data {
		.form:nth-last-child(1) {
			margin-bottom: 0
		}

		.form {
			margin-bottom: 0.25rem;
		}
	}

	.currrent {
		background-color: #EE2344 !important;
		border-color: #EE2344 !important;
	}

	@media (max-width: 820px) {
		.page {
			.no-p {
				display: none;
			}

			.why {
				background-color: rgba(0, 188, 147, 0.05) !important;
			}

			.why .why-li {
				flex-direction: column;
				align-items: flex-start;
			}

			.why .why-li p {
				width: 100%;
			}

			.content {
				width: 100%;
				padding: 0 0.2rem;
				margin-top: 0.24rem;
				flex-direction: column;
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
				padding: 0.32rem 0;
			}

			.form p {
				height: 0.3rem;
				line-height: 0.3rem;
			}


			.form .form-li {
				flex-direction: column;
				align-items: flex-start;
			}


			.form .form-li-f {
				width: 100%;
				flex: inherit;
			}

			.form-li-f .i {
				top: 0.48rem !important;
			}

			.form-info1::v-deep .el-input__inner,
			.Contact::v-deep .el-input__inner {
				height: 0.48rem;
				line-height: 0.48rem;
			}

			.form-info1 .i {
				top: 0.4rem !important;
			}

			.organizer .name {
				font-size: 0.28rem;
			}

			.agree {
				margin-top: 0.2rem;
			}

			.payment button {
				width: 100%;
				margin-left: 0;
				margin-bottom: 0.08rem;
			}

			.payment .p {
				padding-left: 0;
			}

			.payment {
				flex-direction: column;
				padding: 0.24rem 0.2rem;
			}

			.form .Month {
				margin: 0 0.14rem;
			}

			.form .w {
				width: 0.14rem;
			}

			.form-info {
				padding: 0 0.2rem;
			}

			.ready {
				font-size: 0.28rem;
				margin: 0.24rem 0;
			}

			.Summary {
				display: none;
			}

			.content .right {
				width: 100%;
				margin-right: 0;
			}
		}
	}

	.priceSummary .Summary {
		display: inline-block !important;
		border: none;
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
		z-index: 9999;
		border-top: 1px solid #DADADA;
		background-color: #fff;
		padding: 0.2rem 0.2rem 0.24rem 0.2rem;
		width: 100%;
	}

	.form-info::v-deep .el-input__suffix {
		left: 40px;
		right: auto;
	}

	.form-li::v-deep .el-input__inner,
	.form-li::v-deep .el-select {
		height: 0.48rem;
		width: 100%;
	}

	.payment {
		background-color: #F5F5F5;
		padding: 0.25rem;
		margin-top: 0.3rem;
		display: flex;
		align-items: center;

		.p {
			padding-left: 0.3rem;
			font-size: 0.14rem;
			font-weight: 400;
			color: rgba(26, 26, 26, 0.6);

		}

		button {
			cursor: pointer;
			width: 1.8rem;
			height: 0.40rem;
			background-color: rgba(255, 50, 99, 1);
			color: #fff;
			border-radius: 8px;
			font-size: 0.14rem;
			border: none;
			margin-left: 0.19rem;
		}
	}

	.agree {
		border-top: 1px solid rgba(218, 218, 218, 1);
		display: flex;
		margin-top: 0.3rem;
		align-items: center;
		padding: 0.3rem 0.25rem 0 0.25rem;
		font-size: 0.14rem;
		font-weight: 400;
		cursor: pointer;

		.icon {
			width: 0.16rem;
			height: 0.16rem;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(245, 245, 245, 1);
			margin-left: 0.1rem;
			border-radius: 4px;
			border: 1px solid rgba(0, 188, 147, 1);

			img {
				width: 0.08rem;
				height: auto;
			}
		}
	}

	.form-info {
		padding: 0 0.25rem;
	}

	.above {
		margin-top: 0.2rem;
		font-family: Noto Sans Hebrew;
		font-size: 0.14rem;
		line-height: 19px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}

	.organizer {
		padding: 0.25rem 0 0 0;
		margin-top: 0.30rem;
		background-color: #fff;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;

		.name {
			font-size: 0.32rem;
			font-weight: 500;
		}

		.text {
			margin-top: 0.25rem;
			font-size: 0.16rem;
			font-weight: 500;

		}
	}

	.voucher {
		margin-top: 0.25rem;
		padding: 0.25rem 0.25rem 0 0.25rem;
		border-top: 1px solid rgba(218, 218, 218, 1);
		text-align: right;

		p {
			font-size: 0.14rem;
			cursor: pointer;
			display: inline-block;
			border-bottom: 1px solid rgba(26, 26, 26, 1);
			color: rgba(26, 26, 26, 1);
			height: auto !important;
		}
	}

	.agreement {
		display: flex;
		align-items: center;

		img {
			width: 0.10rem;
			height: 0.10rem;
		}

		.icon {
			cursor: pointer;
			text-align: center;
			background-color: rgba(245, 245, 245, 1);
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 4px;
			width: 0.16rem;
			height: 0.16rem;
			margin-left: 0.1rem;
		}

		.flex {
			flex: 1;
		}
	}

	.Contact {
		padding: 0.4rem 0.25rem 0 0.25rem;
		margin-top: 0.4rem;
		border-top: 1px solid rgba(218, 218, 218, 1);

		.text {
			color: rgba(26, 26, 26, 0.6);
			font-size: 0.12rem;
			font-weight: 400;
			margin-bottom: 0.05rem !important;
			height: auto !important;

		}
	}

	.t {
		font-size: 0.16rem;
		font-weight: 600;
	}

	.f {
		margin-top: 0.05rem;
		font-size: 0.14rem;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}


	.form {
		padding: 0.25rem 0;
		background-color: #fff;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;


		.form-li {
			margin-top: 0.25rem;
			display: flex;
			align-items: center;
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

		.i {
			width: 0.16rem;
			height: 0.16rem;
			text-align: center;
			line-height: 0.16rem;
			background: rgba(245, 245, 245, 1);
			display: inline-block;
			border-radius: 0.03rem;
			font-size: 0.12rem;
			position: absolute;
			z-index: 2;
		}

		p {
			// margin-bottom: 0.10rem;
			font-size: 0.14rem;
			font-weight: 400;
			height: 0.25rem;
			line-height: 0.2rem;
		}

		.form-li-f {
			flex: 1;
			position: relative;




		}


	}

	.ready {
		margin: 0.3rem 0;
		font-size: 0.32rem;
		font-weight: 500;
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
		background-color: rgba(254, 250, 241, 1) !important;

		.name {
			font-size: 0.2rem;
			font-weight: 700;
			color: rgba(26, 26, 26, 1);

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
		width: 1440px;
		margin: 0.32rem auto 0 auto;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
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
				margin-left: 0.15rem;
				border-radius: 200px;
				background-color: rgba(0, 188, 147, 0.12);
				color: rgba(0, 188, 147, 1);
				font-size: 0.1rem;
				font-weight: 500;
				line-height: 0.12rem;
				margin-right: 0.1rem;

				i {
					font-weight: bold;
					margin-right: 0.05rem;
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
		font-weight: 400;
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
		// left: 40px;
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