<template>
	<div class="checkoutPage">
		<div class="header">
			<div class="time">
				<img class="l" src="~assets/images/icon/info-feature.png" />
				<div class="time-r">
					<span class="num">{{countdown}}</span>
					<span class="p">זמן נותר להזמנה:</span>
					<img class="r" src="~assets/images/icon/clock 1.png" />
				</div>
			</div>
			<router-link to="/" class="logo">
				<img src="~assets/images/logo.png" />
			</router-link>
			<p>עמוד תשלום</p>
		</div>
		<div class="header-h"></div>
		<div class="warps">
			<div class="content">
				<!-- PC -->
				<div class="left">
					<div class="price">
						<div class="top">
							<p class="flex">₪ {{price}}</p>
							<div>מחיר לילה</div>
						</div>
						<div class="text">
							עבור {{peopleday}} לילות, {{peopleNum}} אורחים
						</div>

						<div class="bottom" style="margin-bottom: 10px;" v-for="(item,index) in taxestop" :key="index">
							<p class="flex">{{item.unit}} {{item.amount}}</p>
							<div>{{item.name}}</div>
						</div>
						<div class="item">
							מידע חשוב <img src="~assets/images/icon/info-feature-s.png" />פירוט ההזמנה
						</div>
						<div class="num">
							<p class="flex">₪ {{price}}</p>
							<div>סה״כ לתשלום</div>
						</div>
					</div>
					<div class="price-c">
						<div class="bg">
							<div class="name">תשלום בעת ההגעה</div>
							<div class="info" v-for="(item,index) in taxesbot" :key="index">
								<p class="flex">{{item.currency_code}} {{item.amount}}</p>
								<div>{{item.name}}</div>
							</div>
						</div>
						<div class="b">
							<p><span>לתשומת ליבך</span> כל המיסים ואגרות</p>
							<p v-for="(item,index) in taxesbot" :key="index">יחוייבו במטבע מקומי ({{item.currency_code}}).</p>
						</div>
					</div>
					<div class="send">
						<div class="send-text">
							<i class="el-icon-arrow-up"></i>
							<div class="flex"></div>
							<p>מבצעים והנחות</p>
						</div>
						<div class="send-box">
							<img src="~assets/images/icon/Rectangle 780.png" />
							<div class="flex"></div>
							<p>קוד קופון</p>
						</div>
					</div>
				</div>
				<!-- 移动端 -->
				<el-drawer :with-header="false" :visible.sync="direction" size="100%" direction="btt">
					<mobile-header @close="direction=false" />
					<div class="left drawerleft">
						<div class="price">
							<div class="top">
								<p class="flex">₪ {{price}}</p>
								<div>מחיר לילה</div>
							</div>
							<div class="text">
								עבור {{peopleday}} לילות, {{peopleNum}} אורחים
							</div>
							<div class="bottom" style="margin-bottom: 10px;" v-for="(item,index) in taxestop" :key="index">
								<p class="flex">{{item.unit}} {{item.amount}}</p>
								<div>{{item.name}}</div>
							</div>
							<div class="item">
								מידע חשוב <img src="~assets/images/icon/info-feature-s.png" />פירוט ההזמנה
							</div>
							<div class="num">
								<p class="flex">₪ {{price}}</p>
								<div>סה״כ לתשלום</div>
							</div>
						</div>
						<div class="price-c">
							<div class="bg"> 
								<div class="name">תשלום בעת ההגעה</div>
								<div class="info" v-for="(item,index) in taxesbot" :key="index">
									<p class="flex">{{item.currency_code}} {{item.amount}}</p>
									<div>{{item.name}}</div>
								</div>
							</div>
							<div class="b">
								<p><span>לתשומת ליבך</span> כל המיסים ואגרות</p>
								<p v-for="(item,index) in taxesbot" :key="index">יחוייבו במטבע מקומי ({{item.currency_code}}).</p>
							</div>
						</div>
						<div class="send">
							<div class="send-text">
								<i class="el-icon-arrow-up"></i>
								<div class="flex"></div>
								<p>מבצעים והנחות</p>
							</div>
							<div class="send-box">
								<img src="~assets/images/icon/Rectangle 780.png" />
								<div class="flex"></div>
								<p>קוד קופון</p>
							</div>
						</div>
					</div>
				</el-drawer>

				<div class="right">
					<div class="info">
						<div class="info-left flex">
							<div class="top">
								<!-- PC端 -->
								<div class="l nomobile">
									<p class="day">צ'ק אין - 16:00</p>
									<p class="time">{{checkin}}</p>
									<p class="house">צ'ק אאוט - 11:00</p>
									<p class="time">{{checkout}}</p>
								</div>
								<div class="flex"></div>
								<!-- 移动端 -->
								<div class="ismobile">
									<div class="m-time">
										<div class="m-time-li">
											<p class="t">צ'ק אאוט - 11:00</p>
											<p>{{checkin}}</p>
										</div>
										<div class="m-time-li">
											<p class="t">צ'ק אין - 16:00</p>
											<p>{{checkout}}</p>
										</div>
									</div>
								</div>
								<div class="r">
									<div class="score">
										<p>{{other.distance_client}} ק״מ ממרכז העיר</p>
										<div class="line"></div>
										<div class="rate">
											<el-rate void-color="#FFB800" :value="other.star_rating" />
											<div class="disabled"></div>
										</div>
									</div>
									<div class="name">{{other.name}}</div>
									<div class="text">{{other.address}}</div>
								</div>
							</div>
							<div class="bottom">
								<div class="name">{{room_name}}</div>
								<div class="wallet">

									<div class="wallet-m">
										<div class="p">
											<img class="l" src="~assets/images/icon/info-feature.png" />
											<p>לא כולל ארוחות</p>
											<img class="r" src="~assets/images/icon/icon26.png" />
										</div>
									</div>

									<div class="wallet-pc">
										<div class="p">
											<img class="l" src="~assets/images/icon/info-feature.png" />
											<p class="curr">
												ניתן לבטל בחינם עד ל-27 באוגוסט*
											</p>
											<img class="r" src="~assets/images/icon/icon.png" />
										</div>
									</div>

									<div class="p">
										<img class="l" src="~assets/images/icon/info-feature.png" />
										<p>מיטה כפולה</p>
										<img class="r" src="~assets/images/icon/icon27.png" />
									</div>
								</div>
								<div class="wallet">
									<div class="p">
										<img class="l" src="~assets/images/icon/info-feature.png" />
										<p>
											שלם עכשיו
										</p>
										<img class="r" src="~assets/images/icon/qb.png" />
									</div>

									<div class="wallet-m">
										<div class="p">
											<img class="l" src="~assets/images/icon/info-feature.png" />
											<p class="curr">
												ניתן לבטל בחינם עד ל-27 באוגוסט*
											</p>
											<img class="r" src="~assets/images/icon/icon.png" />
										</div>
									</div>
									<div class="wallet-pc">
										<div class="p">
											<img class="l" src="~assets/images/icon/info-feature.png" />
											<p>לא כולל ארוחות</p>
											<img class="r" src="~assets/images/icon/icon26.png" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="img">
							<el-image class="PC-img" style="width: 2.14rem; height: 2.22rem" :src="otherimg[0]"
								:preview-src-list="other.images">
							</el-image>
							<el-image class="no-PC-img" style="width: 100%; height: 1.4rem" :src="otherimg[0]"
								:preview-src-list="other.images">
							</el-image>
						</div>
					</div>
					<!-- <div class="more" v-if="!hasToken" @click="showLogin">
						הזמן מהר יותר - התחבר לקנטה<i :class="[!hide?'xz':'']" class="el-icon-arrow-down"></i>
					</div>
					<div class="user" v-if="!hasToken&&hide">
						<div class="top">
							<div class="form">
								<div class="form-li">
									<div @click="glLogin" class="item-li">
										<img class="jiant"
											src="~assets/images/icon/arrow-narrow-left-svgrepo-com 1.png" />
										<div class="flex"></div>
										<div class="n">המשיכו עם גוגל</div>
										<img class="icon" src="~assets/images/gg.png" />
									</div>
								</div>
								<div class="form-li">
									<div href="https://admin.kenta.travel/prod-api/kenta-hb/login" class="item-li">
										<img class="jiant"
											src="~assets/images/icon/arrow-narrow-left-svgrepo-com 1.png" />
										<div class="flex"></div>
										<div class="n">המשיכו עם פייסבוק</div>
										<img class="icon" src="~assets/images/facebook-color-svgrepo-com 1.png" />
									</div>
								</div>

								<div class="form-li">
									<div class="li">
										<el-input @keyup.native.enter="toLogin" v-model="loginForm.email"
											placeholder="דואר אלקטרוני"></el-input>
									</div>
								</div>
								<div class="form-li" v-if="showPassword">
									<div class="li">
										<el-input @keyup.native.enter="toLogin" show-password
											v-model="loginForm.password" placeholder="'כתובת אימייל"></el-input>
									</div>
								</div>
							</div>
						</div>
						<div class="btn" @click="toLogin">
							<button>
								{{showPassword?'המשך' : 'המשך'}}
							</button>
						</div>
					</div> -->

					<div class="user">
						<div class="top">
							<div class="name"> פרטי קשר<img class="r"
									src="~assets/images/icon/2users-svgrepo-com 1.png" />
							</div>
							<div class="text">נא למלא את כל שדות החובה</div>

							<el-form :model="payForm" :rules="rules" ref="payForm" class="form">
								<el-form-item label=" " required>
									<el-row :gutter="20">
										<el-col :xs="24" :span="12">
											<el-form-item prop="first_name">
												<el-input v-model="payForm.first_name"
													placeholder="שם משפחה*"></el-input>
											</el-form-item>
										</el-col>
										<el-col :xs="24" :span="12">
											<el-form-item prop="last_name">
												<el-input v-model="payForm.last_name" placeholder="שם פרטי*"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</el-form-item>
								<el-form-item label=" " required>
									<el-col :xs="24" :span="24">
										<el-form-item prop="email">
											<img class="imgicon" src="~assets/images/icon/info-feature.png" />
											<el-input v-model="payForm.email" placeholder="דואר אלקטרוני*"></el-input>
										</el-form-item>
									</el-col>
								</el-form-item>
								<el-form-item label=" " required>
									<el-row :gutter="20">
										<el-col :xs="24" :span="12">
											<el-form-item prop="phone">
												<img class="imgicon" src="~assets/images/icon/info-feature.png" />
												<el-input v-model="payForm.phone" placeholder="מספר פלאפון*"></el-input>
											</el-form-item>
										</el-col>
										<el-col :xs="24" :span="12">
											<el-form-item prop="country">
												<img class="imgicon" src="~assets/images/icon/info-feature.png" />
												<el-select v-model="payForm.country" placeholder="אזרחות*">
													<el-option v-for="item in CountryList" :key="item.alpha_3"
														:label="item.name" :value="item.alpha_3">
													</el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
								</el-form-item>
							</el-form>
						</div>
						<div class="select" v-if="payForm.other_data.length>0">
							<div class="select-from" v-if="hideFrom" v-for="(item,index) in payForm.other_data"
								:key="index">
								<div class="select-from-li">
									<el-row :gutter="20">
										<el-col :xs="24" :span="12">
											<p></p>
										</el-col>
										<el-col :xs="24" :span="12">
											<el-input v-model="item.first_name" placeholder="שם משפחה*"></el-input>
										</el-col>
									</el-row>
								</div>
								<div class="select-from-li">
									<el-row :gutter="20">
										<el-col :xs="24" :span="12">
											<p></p>
										</el-col>
										<el-col :xs="24" :span="12">
											<el-input v-model="item.last_name" placeholder="שם פרטי*"></el-input>
										</el-col>
									</el-row>
								</div>
								<div class="select-email">
									<div class="email" @click="emailSelect(item)">
										<div class="checkbox" :class="[item.emailSelect?'checkboxcurrent':'']">
											<img v-if="item.emailSelect" src="~assets/images/icon/select.png" />
										</div>
										<div class="p">Send the confirmation copy to this guest</div>
									</div>
								</div>
								<div class="select-from-li" v-if="item.emailSelect">
									<el-row :gutter="20">
										<el-col :xs="24" :span="12">
											<p></p>
										</el-col>
										<el-col :xs="24" :span="12">
											<el-input v-model="item.email" placeholder="דואר אלקטרוני*"></el-input>
										</el-col>
									</el-row>
								</div>
							</div>
							<div class="selectdown" @click="hideFrom=!hideFrom">
								<div class="n">הזינו אורחים נוספים <i :class="[!hideFrom?'xz':'']"
										class="el-icon-arrow-down"></i></div>
							</div>
							<p>לא חייב, מיועד כאישור הזמנה עבור קבלת ויזה</p>
						</div>
						<div class="select-time">
							<div class="name">זמני הגעה</div>
							<div class="option">
								<div class="t">
									<p>חדר שלך יהיה מוכן</p>
									<p>ב16:00</p>
								</div>
								<el-select v-model="payForm.checkin_time" placeholder="12:00">
									<el-option v-for="item in timeList" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="select-menu">
								<!-- <el-dropdown trigger="click">
									<span class="el-dropdown-link">
										בקשות מיוחדות<i class="el-icon-arrow-down el-icon--right"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item>בקשות מיוחדות</el-dropdown-item>
										<el-dropdown-item>בקשות מיוחדות</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown> -->
							</div>
						</div>
						<div class="btn">
							<div class="left">
								<p>לחיצה על הכפתור "להשלים הזמנה", </p>
								<p>מהווה הסכמה<span>לתנאים ולהתניות.</span></p>
							</div>
							<button @click="Topayment('payForm')">להשלים הזמנה</button>
						</div>
					</div>
					<div class="foo-h"></div>
				</div>
			</div>
		</div>
		<!-- 移动端的悬浮 -->
		<div class="suspension-h"></div>
		<div class="suspension">
			<div class="more" @click="direction = !direction"><i class="el-icon-arrow-up"></i></div>
			<div class="price">
				<div class="top">
					<p class="flex">₪ {{price}}</p>
					<div>מחיר לילה</div>
				</div>
				<div class="text">עבור {{peopleday}} לילות, {{peopleNum}} אורחים</div>
				<div class="bottom" style="margin-bottom:10px" v-for="(item,index) in taxestop" :key="index">
					<p class="flex">{{item.unit}} {{item.amount}}</p>
					<div>{{item.name}}</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import {
		getFrom,
		getCountry,
		getHotelInfo
	} from '@/api/kentaHb'
	import {
		getMail,
		getUserInfo,
		findPwdSendMail,
		Topaymentpage
	} from '@/api/login'
	import {
		currencyMap
	} from '@/config/paypal.js'
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
				input: '',
				options: [{
					value: '"אזרחות*',
					label: '"אזרחות*'
				}],
				hideFrom: false,
				setData: {},
				timer: null,
				count: 10 * 60, // 转换为秒
				hide: true,
				form: {
					email: '',
					token: '',
					provider: ''
				},
				direction: false,
				CountryList: [],

				surname: '',
				username: '',
				timeList: [{
						label: 'לא ידוע',
						value: 'לא ידוע'
					},
					{
						label: '16:00',
						value: '16:00'
					},
					{
						label: '17:00',
						value: '17:00'
					},
					{
						label: '18:00',
						value: '18:00'
					},
					{
						label: '19:00',
						value: '19:00'
					},
					{
						label: '20:00',
						value: '20:00'
					},
					{
						label: '21:00',
						value: '21:00'
					},
					{
						label: '22:00',
						value: '22:00'
					},
					{
						label: '23:00',
						value: '23:00'
					},
					{
						label: '00:00, למחרת',
						value: '00:00, למחרת'
					},
					{
						label: '01:00, למחרת',
						value: '01:00, למחרת'
					},
					{
						label: '02:00, למחרת',
						value: '02:00, למחרת'
					},
					{
						label: '03:00, למחרת',
						value: '03:00, למחרת'
					},
					{
						label: '04:00, למחרת',
						value: '04:00, למחרת'
					},
					{
						label: '05:00, למחרת',
						value: '05:00, למחרת'
					},
					{
						label: '06:00, למחרת',
						value: '06:00, למחרת'
					},
					{
						label: '07:00, למחרת',
						value: '07:00, למחרת'
					},
					{
						label: '08:00, למחרת',
						value: '08:00, למחרת'
					},
					{
						label: '09:00, למחרת',
						value: '09:00, למחרת'
					},
					{
						label: '10:00, למחרת',
						value: '10:00, למחרת'
					},
					{
						label: '11:00, למחרת',
						value: '11:00, למחרת'
					}
				],
				loginForm: {
					email: '',
					password: ''
				},
				showPassword: false,
				price: 0,
				taxprice: 0,
				unit: '',
				other: {},
				otherimg: [],
				checkout: '',
				checkin: '',
				room_name: '',
				payForm: {
					// client_name: '',
					email: '',
					phone: '',
					country: '',
					checkin_time: '12:00',
					hotel_name: '',
					checkin: '',
					checkout: '',
					hotel_price: '',
					tax: '',
					amount: '',
					first_name: '',
					last_name: '',
					partner_order_id: '',
					order_id: '',
					other_data: []
				},
				hotelslist: [],
				peopleNum: 1,
				peopleday: 1,
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
					}],
				},
				taxestop: [],
				taxesbot: []
			}

		},
		created() {
			// this.taxprice = this.$route.query.taxprice
			this.peopleNum = this.$route.query.peopleNum
			// this.unit = this.$route.query.unit
			this.checkin = this.$route.query.checkin
			this.checkout = this.$route.query.checkout
			this.room_name = this.$route.query.room_name
			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");
			this.getPeople()
			this.verifyToken()
			this.startCountdown();
			this.getCountryList()
			this.getHotel()
			this.getpeopleday()
			this.getpeople()
			this.cftaxes()
			// this.taxesList = JSON.parse(this.$route.query.taxes)
			// console.log(this.taxesList,"税费")
		},
		computed: {
			countdown() {
				let minutes = Math.floor(this.count / 60);
				let seconds = this.count % 60;

				minutes = minutes < 10 ? '0' + minutes : minutes;
				seconds = seconds < 10 ? '0' + seconds : seconds;

				return minutes + ':' + seconds;
			},
			hasToken() {
				return this.$store.state.token
			}
		},

		beforeDestroy() {
			this.clearCountdown();
		},
		methods: {
			// 税费遍历
			cftaxes() {
				let list = JSON.parse(this.$route.query.taxes)
				if (list.length > 0) {
					list.forEach(item => {
						if (item.included_by_supplier) {
							this.taxestop.push(item)
						} else {
							this.taxesbot.push(item)
						}
					})
				}
				this.taxestop.forEach(item=>{
					Object.keys(currencyMap).forEach(key => {
						if (item.currency_code == key) {
							item.unit = currencyMap[key]
						}
					})
				})
				this.taxesbot.forEach(item=>{
					Object.keys(currencyMap).forEach(key => {
						if (item.currency_code == key) {
							item.unit = currencyMap[key]
						}
					})
				})
			},
			// 邮箱选择
			emailSelect(e) {
				e.emailSelect = !e.emailSelect
				if (!e.emailSelect) {
					e.email = ''
				}
			},
			// 获取人数
			getpeople() {
				if (this.$route.query.peopleNum > 1) {
					for (let i = 0; i < (this.$route.query.peopleNum - 1); i++) {
						this.topush()
					}
				} else {
					this.payForm.other_data = []
				}
			},
			// 追击
			topush() {
				let data = {
					last_name: '',
					first_name: '',
					email: '',
					emailSelect: true
				}
				this.payForm.other_data.push(data)
			},
			// 计算多少晚
			getpeopleday() {
				// 创建两个日期对象
				let date1 = new Date(this.$route.query.checkin);
				let date2 = new Date(this.$route.query.checkout);
				let timeDifference = date2 - date1;
				let daysDifference = timeDifference / (1000 * 3600 * 24);
				this.peopleday = daysDifference
			},
			getHotel() {
				let modifyData = {
					checkin: this.$route.query.checkin,
					checkout: this.$route.query.checkout,
					hid: this.$route.query.hid
				}
				this.getDateils(modifyData)
			},
			getDateils(modifyData) {
				getHotelInfo(modifyData).then(res => {
					let arr = res.data.hotels[0].rates
					this.hotelslist = []
					this.other = res.data.other
					this.otherimg = this.other.images.length > 2 ? this.other.images.slice(0, 2) : []
					arr.forEach(element => {
						let index = this.hotelslist.findIndex(t => {
							return t.room_name === element.room_name
						})
						if (index === -1) {
							this.hotelslist.push({
								room_name: element.room_name,
								children: [],
								payment_options: element.payment_options,
								room_data_trans: element.room_data_trans,
								images: element.images,
								book_hash: element.book_hash
							})
							index = this.hotelslist.length - 1
						}

						this.hotelslist[index].children.push({
							allotment: element.allotment,
							daily_prices: element.daily_prices[0]
						})
					})
				}).catch(err => {
					this.loading = false
				})
			},
			// 谷歌登录
			glLogin() {
				let url = window.location.href
				let parm = window.location.protocol + "//" + window.location.host + '/'
				let urlarr = url.split(parm)

				window.open('https://admin.kenta.travel/prod-api/kenta-hb/login?redirect_url=' + urlarr[1])
			},
			Topayment(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// this.payForm.client_name = this.payForm.last_name + this.payForm.first_name
						this.payForm.hotel_price = this.price
						this.payForm.tax = this.taxprice
						this.payForm.amount = this.price
						this.payForm.checkin = this.checkin
						this.payForm.checkout = this.checkout
						this.payForm.hotel_name = this.other.name
						this.payForm.book_hash = this.$route.query.book_hash
						this.payForm.order_id = this.setData.order_id
						this.payForm.partner_order_id = this.setData.partner_order_id

						if (localStorage.getItem("user_provider")) {
							this.payForm.provider = localStorage.getItem("user_provider")
						}
						if (localStorage.getItem("user_id")) {
							this.payForm.user_id = localStorage.getItem("user_id")
						}
						Topaymentpage(this.payForm).then((data) => {
							window.open(data)
						})
					} else {
						return false;
					}
				})
			},
			// 登录
			toLogin() {
				if (!this.loginForm.email) {
					this.$message({
						message: 'Please Enter Your Email',
						type: 'warning'
					})
				} else if (!this.loginForm.password && this.showPassword) {
					this.$message({
						message: 'Please Enter Your Password',
						type: 'warning'
					})
				} else {
					if (!this.showPassword) {
						this.verifyEmail()
					} else {
						this.handleSendEmail()
					}
				}
			},
			// 登录
			handleSendEmail() {
				let that = this
				findPwdSendMail(this.loginForm).then((res) => {
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
				}).catch((err) => {
					console.log(err)
				})
			},
			// 验证邮箱
			verifyEmail() {
				getMail({
					email: this.loginForm.email
				}).then((res) => {
					if (res.code == 200) {
						this.$notify({
							title: '',
							message: 'Please open your email to complete registration',
							type: 'success'
						});
					}
				}).catch((err) => {
					this.showPassword = true
				})
			},
			// 获取国家
			async getCountryList() {
				const res = await getCountry()
				this.CountryList = res.data
			},
			// 显示登录隐藏
			showLogin() {
				this.hide = !this.hide
			},
			// 获取人数
			async getPeople() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})
				const res = await getFrom({
					book_hash: this.$route.query.book_hash
				}).catch(err => {
					loading.close()
				})
				this.setData = res.data
				res.data.payment_types.forEach(item => {
					if (item.currency_code == 'ILS') {
						this.price = item.amount
					}
				})
				loading.close()
			},
			// 倒计时
			startCountdown() {
				this.timer = setInterval(() => {
					if (this.count > 0) {
						this.count -= 1;
					} else {
						this.clearCountdown();
						this.$router.back();
					}
				}, 1000);
			},
			clearCountdown() {
				clearInterval(this.timer);
				this.timer = null;
			},
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
						} else {
							this.$notify({
								title: '',
								message: 'user does not exist',
								type: 'warning'
							})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.checkoutPage::v-deep .el-form-item__label::before {
		display: none;
	}

	.select-from {
		border-bottom: 1px solid rgb(218, 218, 218);
		padding: 0.24rem 1.16rem;
	}

	.select-from:nth-last-child(1) {
		border: none;
	}

	.select-email {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-bottom: 22px;

		.email {
			cursor: pointer;
			display: flex;
			align-items: center;
		}

		.p {
			margin-top: 0;
			margin-left: 0.1rem;
		}
	}

	.checkboxcurrent {
		border: 1px solid rgb(255, 50, 99) !important;
		background-color: rgb(255, 50, 99) !important;
	}


	.checkbox {
		width: 0.20rem;
		height: 0.20rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 1px solid rgb(218, 218, 218);
		background-color: #fff;

		img {
			width: 0.10rem;
			height: 0.10rem;
		}
	}

	.select-from-li {
		margin-bottom: 22px;
	}

	.selectdown {
		margin: 0.24rem 1.16rem 0 1.16rem;
		width: 2.09rem;
		border: 1px solid #FF3263;
		border-radius: 4px;
		height: 0.4rem;
		line-height: 0.4rem;
		display: inline-block;
		padding: 0 0.24rem;
		font-size: 0.16rem;
		color: #FF3263;
		cursor: pointer;
		background: rgba(255, 50, 99, 0.08);

		i {
			margin-left: 0.1rem;
			font-weight: bold;
			transition: ease .3s;
		}
	}

	.imgicon {
		width: 0.12rem;
		height: auto;
		position: absolute;
		left: 15px;
		top: 18px;
		z-index: 1;
	}

	.no-PC-img,
	.wallet-m {
		display: none;
	}

	.wallet-pc {
		flex: 1;
	}

	.checkoutPage::v-deep .content .right .info .info-left .top .r .score .rate {
		direction: rtl;
	}

	@media (max-width: 820px) {
		.el-form::v-deep .el-col-12 {
			margin-bottom: 22px;
		}

		.el-form::v-deep .el-col-12:nth-last-child(1) {
			margin-bottom: 0;
		}

		.select-from::v-deep .el-col-12 {
			margin-bottom: 0;
		}

		.checkoutPage {
			.selectdown {
				width: 100%;
				text-align: center;
				padding: 0;
				margin: 0;
			}

			.content .user .select p {
				padding: 0;
			}

			.selectdown {
				margin-bottom: 0.08rem;
			}

			.select-from {
				margin-bottom: 0.22rem;
				padding: 0;
			}

			.select-email {
				justify-content: center;
			}

			.select-email .p {
				font-size: 0.12rem;
				text-align: center;
			}

			.no-PC-img,
			.wallet-m {
				display: inline-block;
			}

			.content .right .info .info-left .top .r .score p {
				direction: rtl;
			}

			.PC-img,
			.wallet-pc {
				display: none;
			}

			.content {
				margin-top: 0.09rem;
				flex-direction: column;
				padding: 0 0.2rem;
			}

			.ismobile {
				display: inline-block;
				text-align: right;
			}

			.m-time {
				margin-top: 0.16rem;
				display: flex;
				align-items: center;
				float: right
			}

			.m-time-li .t {
				font-size: 0.12rem;
				color: rgba(26, 26, 26, 0.6);
			}

			.m-time-li {
				margin-left: 0.4rem;
				line-height: 20px;
			}

			.content .right .img img {
				width: 100%;
				height: 1.40rem;
			}

			.content .right .info .info-left .bottom .wallet {
				flex-direction: column-reverse;
				align-items: flex-end;
			}

			.content .right .info .info-left .bottom .wallet .p {
				margin-top: 0.08rem;
			}

			.content .right .info .info-left .top .r .name {
				text-align: right;
				margin: 0.16rem 0 0.08rem 0;
			}

			.content .right .info .info-left .top .l {
				margin-top: 0.16rem;
			}

			.content .right .info .info-left .top {
				flex-direction: column;
				display: flex;
				flex-direction: column-reverse;
				padding: 0.16rem 0.16rem 0.24rem 0.16rem;
			}

			.header {
				padding: 0 0.2rem;
			}

			.time-r {
				direction: rtl;
			}

			.header .time .r {
				margin-left: 0.08rem;
			}

			.warps {
				width: 100%;
			}

			.content .user .name {
				font-size: 0.28rem;
			}

			.content .user .text {
				margin-top: 0;
			}

			.content .user .top {
				padding: 0.4rem 0.2rem 0 0.2rem;
			}

			.content .form-li .li {
				margin-bottom: 0.16rem;
			}

			.content .form-li .li:nth-last-child(1) {
				margin-bottom: 0;
			}

			.content .form-li {
				padding-right: 0;
			}

			.form-li-m {
				flex-direction: column;
			}

			.btn button {
				width: 100%;
			}

			.btn {
				padding: 0.1rem 0.2rem 0.4rem 0.2rem;
			}

			.content .user .select {
				padding: 0.24rem 0.2rem;
				width: 100%;
			}

			.content .user .select p {
				text-align: center;
			}

			.content .user .select-time .name {
				font-size: 0.28rem;
			}

			.content .user .select-time::v-deep .el-input__inner {
				width: 1.82rem;
			}

			.content .user .select .el-select {
				width: 100%;
			}

			.content .user .select-time {
				padding: 0.24rem 0.2rem;
			}

			.content .right .info {
				flex-direction: column;
				height: auto !important;
				display: flex;
				flex-direction: column-reverse;
			}

			.suspension-h,
			.suspension,
			.drawerleft {
				display: inline-block !important;
			}

			.content .drawerleft {
				width: 100%;
				margin-right: 0;
				padding: 0.24rem 0.2rem;
			}

			.content .left,
			.header .time .p,
			.nomobile {
				display: none;
			}
		}

	}

	.suspension-h {
		height: 1.2rem;
		display: none;
	}

	.ismobile {
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

		.price {
			border: none;

			.top {
				padding: 0;
				margin-bottom: 0.03rem;
			}

			.text {
				padding: 0;
				margin-bottom: 0.1rem;
			}

			.bottom {
				padding: 0;
			}
		}

		.more {
			text-align: center;

			i {
				color: #FF3263;
				font-size: 0.25rem;
			}
		}
	}

	a {
		text-decoration: none;
	}

	.item-li ::v-deep .el-input__inner {
		border: none;
		text-align: right;
		height: 0.48rem;
	}

	.item-li {
		cursor: pointer;
		display: flex;
		flex: 1;
		height: 0.48rem;
		padding: 0 0.16rem;
		align-items: center;
		border: 1px solid rgba(26, 26, 26, 0.5);
		border-radius: 8px;
		margin-bottom: 8px;
		overflow: hidden;
		font-size: 0.14rem;
		color: rgba(26, 26, 26, 0.6);

		.n {
			margin-right: 5px;
		}

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

	.xz {
		transform: rotate(180deg);
		display: inline-block;
		transition: ease .3s;
	}

	.time-r {
		display: flex;
		align-items: center;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 16px 1.16rem 16px 0;

		p {
			direction: rtl;
		}

		button {
			width: 1.34rem;
			height: 0.40rem;
			background-color: rgba(255, 50, 99, 1);
			border-radius: 8px;
			border: none;
			cursor: pointer;
			font-size: 0.14rem;
			font-weight: 400;
			color: #fff;

		}

		.left {
			font-size: 0.14rem;
			font-weight: 400;
			text-align: right;
			color: rgba(26, 26, 26, 0.6);

			span {
				color: rgba(26, 26, 26, 1);
			}
		}
	}

	.form-boxs {
		padding: 0 !important;

		.name {
			margin-top: 0.42rem;
			padding: 0 1.16rem;
		}

		.form-bg {
			margin-top: 0.26rem;
			background-color: rgba(255, 184, 0, 0.16);
			padding: 0.4rem 1.16rem 0.4rem 3.31rem;

			.w {
				width: 0.22rem !important;
			}

			.li-none {
				flex: inherit !important;
			}

			.li-none::v-deep .el-input {
				width: 1.16rem !important;
			}

			.li {
				text-align: right;

				.img {
					top: 0.4rem !important;
				}

				p {
					font-size: 0.12rem;
					font-weight: 400;
					text-align: right;
					margin-bottom: 8px;
				}
			}
		}
	}

	.form::v-deep .el-input__inner {
		text-align: right;
		direction: rtl;
		height: 0.48rem;
		font-size: 0.16rem;
	}

	.content::v-deep .el-input__icon {
		font-weight: bold;
	}


	.form::v-deep .el-select {
		width: 100%;
	}

	.form::v-deep .el-input__suffix {
		right: auto;
		left: 40px;
	}

	.form::v-deep .el-select-dropdown__item {
		text-align: right;
	}

	.content {
		margin-top: 0.4rem;
		display: flex;
		align-items: flex-start;

		.form-li {
			// padding-right: 0.56rem;
			margin-bottom: 0.16rem;
			display: flex;

			.w {
				width: 16px;
			}

			.li {
				flex: 1;
				position: relative;


			}
		}

		.user {
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 8px;
			background-color: #fff;
			margin-top: 16px;

			.select::v-deep .el-input__inner {
				text-align: right;
				direction: rtl;
				height: 0.48rem;
				line-height: 0.48rem;
			}

			.select::v-deep .el-select-dropdown__item {
				text-align: right;
			}

			// .select::v-deep .el-input__inner::placeholder {
			// 	color: rgba(255, 50, 99, 1);
			// }

			// .select::v-deep .el-select .el-input .el-select__caret {
			// 	color: rgba(255, 50, 99, 1);
			// }

			.select::v-deep .el-select {
				width: 209px;
			}

			.select-time::v-deep .el-input__inner::placeholder {
				color: rgba(26, 26, 26, 0.6);
			}

			.select-time::v-deep .el-input__inner {
				width: 216px;
				height: 0.48rem;
				font-size: 0.16rem;
				text-align: right;

			}

			.select-time::v-deep .el-input__suffix {
				right: auto;
				left: 15px;
				font-weight: bold;
				color: rgba(26, 26, 26, 0.6);
			}

			.select-time::v-deep .el-dropdown {
				font-size: 0.16rem;
				font-weight: 400;
				color: rgba(52, 81, 255, 1);
			}

			.select-time::v-deep .el-icon--right {
				font-weight: bold;
			}

			.select-time {
				padding: 0.24rem 1.16rem;
				text-align: right;

				.select-menu {
					margin-top: 16px;
					cursor: pointer;

				}

				.name {
					font-size: 0.32rem;
					font-weight: 500;
					letter-spacing: -0.04em;
					text-align: right;
				}

				.option {
					margin-top: 16px;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					p {
						font-size: 0.12rem;
						font-weight: 400;
						text-align: right;
						padding-right: 12px;
						color: rgba(26, 26, 26, 0.6)
					}
				}
			}

			.select {
				border-top: 1px solid rgba(218, 218, 218, 1);
				border-bottom: 1px solid rgba(218, 218, 218, 1);
				// padding: 0.24rem 1.16rem;
				text-align: right;

				p {
					font-size: 0.12rem;
					font-weight: 400;
					text-align: right;
					padding: 0.08rem 1.16rem 0.24rem 1.16rem;
					color: rgba(26, 26, 26, 0.6);
				}
			}

			.top {
				padding: 0.4rem 1.16rem;
			}

			.text {
				margin-top: 8px;
				text-align: right;
				padding-right: 0.56rem;
				margin-bottom: 0.24rem;
			}

			.name {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				font-size: 0.32rem;
				font-weight: 500;
				letter-spacing: -0.04em;

				img {
					width: 0.4rem;
					height: auto;
					margin-left: 0.16rem;
				}
			}
		}

		.more {
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: rgba(255, 50, 99, 1);
			font-size: 0.16rem;
			font-weight: 400;
			padding: 0.16rem 0;
			margin: 0.16rem 0;
			background-color: #fff;
			cursor: pointer;

			i {
				font-weight: bold;
				margin-left: 10px;
				font-size: 16px;
				transition: ease .3s;
			}
		}

		.right {
			flex: 1;

			.info {
				display: flex;
				overflow: hidden;
				border-radius: 8px;
				border: 1px solid rgba(218, 218, 218, 1);
				background-color: #fff;
				height: 2.22rem;

				.info-left {

					.bottom {
						padding: 0.16rem;
						border-top: 1px solid rgba(218, 218, 218, 1);

						.name {
							font-size: 0.16rem;
							font-weight: 600;
							text-align: right;
							margin-bottom: 8px;
							display: inline-block;
							width: 100%;
						}

						.wallet {
							display: flex;
							align-items: center;
							font-size: 0.14rem;
							font-weight: 400;
							margin-top: 8px;

							.curr {
								color: rgba(0, 188, 147, 1);
							}

							.p {
								flex: 1;
								display: flex;
								justify-content: flex-end;
								align-items: center;

								p {
									margin: 0 8px;
								}
							}

							.l {
								width: 0.12rem;
								height: auto;
							}

							.r {
								width: 0.16rem;
								height: auto;
							}
						}
					}

					.top {
						padding: 0.16rem;
						display: flex;

						.r {
							.name {
								margin: 8px 0;
								font-size: 0.20rem;
								font-weight: 600;
								text-align: right;

							}

							.text {
								font-size: 0.14rem;
								font-weight: 400;
								text-align: right;
								color: rgba(26, 26, 26, 0.6);

							}

							.score {
								display: flex;
								align-items: center;
								justify-content: flex-end;

								.rate {
									position: relative;

									.disabled {
										width: 1.15rem;
										height: 20px;
										position: absolute;
										top: 0;
										left: 0;
										z-index: 1;
									}
								}

								.line {
									width: 12px;
									height: 1px;
									background-color: rgba(218, 218, 218, 1);
									margin: 0 8px;
								}

								p {
									color: rgba(26, 26, 26, 0.6);
									font-size: 0.14rem;
									font-weight: 400;
									direction: rtl;
								}
							}
						}

						.l {
							// flex: 1;
							text-align: right;

							.day {
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
								margin-bottom: 4px;
							}

							.house {
								margin-top: 0.16rem;
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}

							.time {
								margin-top: 4px;
								font-size: 0.14rem;
								font-weight: 400;
								direction: rtl;
								text-align: right;
							}
						}


					}
				}
			}

			.img {
				img {
					width: 2.14rem;
					height: 2.22rem;
				}
			}
		}

		.left {
			width: 3.32rem;
			margin-right: 0.16rem;

			.send {
				border: 1px solid rgba(218, 218, 218, 1);
				border-radius: 8px;
				overflow: hidden;
				padding: 0.16rem;
				background-color: #fff;

				.send-box {
					margin-top: 0.16rem;
					display: flex;
					padding: 0 8px;
					align-items: center;
					border: 1px solid rgba(218, 218, 218, 1);
					border-radius: 6px;
					height: 0.48rem;

					p {
						font-size: 0.16rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
					}

					img {
						width: 0.32rem;
						height: auto;
					}
				}

				.send-text {
					display: flex;
					align-items: center;
					cursor: pointer;

					i {
						font-weight: bold;
					}

					p {
						font-size: 0.16rem;
						font-weight: 600;
					}
				}
			}

			.price-c {
				margin: 0.16rem 0;
				border: 1px solid rgba(218, 218, 218, 1);
				border-radius: 8px;
				overflow: hidden;

				.b {
					text-align: right;
					padding: 12px 0.16rem;
					font-size: 0.12rem;
					font-weight: 400;
					direction: rtl;

					span {
						font-weight: 600;
					}
				}

				.bg {
					background-color: #fff;

					.info {
						display: flex;
						align-items: center;
						padding: 8px 0.16rem;
						border-bottom: 1px solid rgba(218, 218, 218, 1);

						p {
							font-size: 0.12rem;
							font-weight: 400;
						}

						div {
							color: rgba(26, 26, 26, 0.6);
						}
					}

					.name {
						text-align: right;
						font-size: 0.16rem 0.16rem 0 0.16rem;
						font-weight: 600;
						padding: 0.16rem;
					}
				}
			}

			.text {
				padding: 0 0.16rem;
				text-align: right;
				font-size: 0.12rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
				margin-top: 4px;
				margin-bottom: 8px;
			}

			.num {
				display: flex;
				align-items: center;
				font-size: 0.16rem;
				font-weight: 600;
				padding: 0.16rem;
			}

			.item {
				margin-top: 0.16rem;
				display: flex;
				padding: 0.18rem 0.16rem;
				align-items: center;
				justify-content: flex-end;
				border-top: 1px solid rgba(218, 218, 218, 1);
				border-bottom: 1px solid rgba(218, 218, 218, 1);
				color: rgba(52, 81, 255, 1);

				img {
					width: 0.12rem;
					height: auto;
					margin: 0 0.16rem;
				}
			}

			.bottom {
				display: flex;
				align-items: center;
				font-size: 0.12rem;
				padding: 0 0.16rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
			}


		}
	}

	.price {
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;
		background-color: #fff;

		.text {
			padding: 0 0.16rem;
			text-align: right;
			font-size: 0.12rem;
			font-weight: 400;
			color: rgba(26, 26, 26, 0.6);
			margin-top: 4px;
			margin-bottom: 8px;
		}

		.num {
			display: flex;
			align-items: center;
			font-size: 0.16rem;
			font-weight: 600;
			padding: 0.16rem;
		}

		.item {
			margin-top: 0.16rem;
			display: flex;
			padding: 0.18rem 0.16rem;
			align-items: center;
			justify-content: flex-end;
			border-top: 1px solid rgba(218, 218, 218, 1);
			border-bottom: 1px solid rgba(218, 218, 218, 1);
			color: rgba(52, 81, 255, 1);

			img {
				width: 0.12rem;
				height: auto;
				margin: 0 0.16rem;
			}
		}

		.bottom {
			display: flex;
			align-items: center;
			font-size: 0.12rem;
			padding: 0 0.16rem;
			font-weight: 400;
			color: rgba(26, 26, 26, 0.6);
		}

		.top {
			display: flex;
			align-items: center;
			padding: 0.16rem;

			p {
				font-size: 0.14rem;
				font-weight: 400;
			}

			div {
				font-size: 0.16rem;
				font-weight: 600;
			}
		}
	}

	.header {
		padding: 0 0.32rem;
		height: 0.64rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 89;
		display: flex;
		width: 100%;
		align-items: center;
		background-color: #fff;

		.logo {
			flex: 1;
			text-align: center;
			justify-content: center;
			display: flex;
			align-items: center;

			img {
				width: 0.76rem;
				height: auto;
			}
		}

		p {
			font-size: 0.14rem;
			font-weight: 500;
			color: rgba(26, 26, 26, 0.6);
		}

		.time {
			display: flex;
			align-items: center;

			.l {
				width: 0.12rem;
				height: auto;
			}

			.p {
				font-size: 0.14rem;
				font-weight: 400;
				margin: 0 4px;
				display: inline-block;
				direction: rtl;

			}

			.num {
				font-size: 0.14rem;
				font-weight: 500;
				margin-left: 8px;
				display: inline-block;
			}

			.r {
				width: 0.16rem;
				height: auto;
			}
		}
	}

	.header-h {
		height: 0.64rem;
	}
</style>