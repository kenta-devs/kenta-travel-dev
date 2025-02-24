<template>
	<div class="page">
		<TripHeader />
		<div class="content">
			<div class="left">
				<div class="choose">
					<div class="choose-bg">
						<h1>1. &nbsp;&nbsp;בחרו כרטיס או חבילה</h1>
						<div class="text" style="margin-right: 0;">
							<img src="~assets/images/icon/icon13.png" />
							כרטיסים רשמיים ישירות ממארגן האירוע. זמינות בזמן אמת ומקומות ישיבה מובטחים!
						</div>
						<div class="type-name">סוג החבילה:</div>
						<div class="type">
							<div class="type-li" @click="select(index)" :class="[active==index?'current':'']"
								v-for="(item,index) in list" :key="index">
								<span class="Casino" v-if="index==0"><img
										src="~assets/images/icon/icon4.png" />Sponsored by Asper
									Casino</span>
								<div class="radio">
									<img v-if="active==index" src="~assets/images/icon/select.png" />
								</div>
								<div class="ticket">
									{{item.name}}
								</div>
								<div class="tips">
									<p>{{item.p}}</p>
									<p>{{item.t}}</p>
								</div>
							</div>
						</div>
						<div class="people">
							<div class="type-name">מספר אנשים:</div>
							<el-select v-model="peopleNum" placeholder="2 אנשים">
								<el-option v-for="item in optionsList" :key="item.value" :label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
					</div>
					<div class="confirm">
						<!-- <div @click="toceltaPage" tag="button">אישור והמשך</div> -->
						<button @click="toceltaPage">אישור והמשך</button>
						<div class="confirm-text">
							<p>יש לאשר כדי לראות את המחיר הסופי. ניתן לשנות</p>
							<p>את פרטי הכרטיס/חבילה עד לביצוע ההזמנה סופית.</p>
						</div>
					</div>
				</div>
				<div class="item-li">
					2.איפה תרצו לשבת?
				</div>
				<div class="item-li">
					3.פרטים אישיים
				</div>
			</div>
			<div class="right">
				<div class="r-img">
					<div>
						<p>פרטי ההזמנה והמחיר יופיעו </p>
						<p>לאחר אישור השלב הראשון.</p>
					</div>
				</div>
				<div class="why padding">
					<div class="name">
						למה להזמין ב-<span> Kenta</span>？
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
							<el-select disabled v-model="value" placeholder="האם תאריכי הכרטיסים מאושרים?">
								<el-option v-for="item in options" :key="item.value" :label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="checkbox">
							<el-select disabled v-model="value" placeholder="איך ומתי אקבל את הכרטיסים שלי?">
								<el-option v-for="item in options" :key="item.value" :label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="checkbox">
							<el-select disabled v-model="value" placeholder="איפה אני אשב באיצדטיון?">
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
	</div>
</template>

<script>
	export default {
		name: 'tripPage',
		data() {
			return {
				peopleNum: 1,
				options: [{
					value: '2 אנשים',
					label: '1'
				}],
				value: '',
				list: [{
						name: 'כרטיס/ים',
						p: 'בחר/י את מקומות הישיבה',
						t: 'שלך בשלב 2.'
					},
					{
						name: 'כרטיס/ים + מלון',
						p: 'בחר/י את מקומות הישיבה',
						t: 'והמלון שלך בשלב 2 ו- 3.'
					}
				],
				active: 0,
				setData: {},
				optionsList: []
			}

		},
		mounted() {
			if (sessionStorage.getItem('TotripData')) {
				this.setData = JSON.parse(sessionStorage.getItem('TotripData'))
			}
			this.getoptions()
		},
		methods: {
			// 下一页
			toceltaPage() {
				this.setData.peopleNum = this.peopleNum
				this.$router.push({
					path: '/celtaPage'
				})
				// this.$router.push({
				// 	path: '/celtaPage?data=' + JSON.stringify(this.setData)
				// })
				sessionStorage.setItem("TotripData", JSON.stringify(this.setData))
			},
			// 获取人数
			getoptions() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})
				let list = []
				for (let i = 1; i <= this.setData.stock; i++) {
					let data = {
						value: i,
						label:  i + ' אנשים'
					}
					list.push(data)
				}
				this.optionsList = list
				loading.close()
			},
			select(index) {
				this.active = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	@media (max-width: 820px) {
		.page {
			.content .right .r-img {
				display: none;
			}

			.content .left .tips {
				width: 100%;
				margin: 0;
			}

			.content .right {
				width: 100%;
				margin-right: 0;
			}

			.content .item-li {
				margin-top: 0.24rem;
				font-size: 0.28rem;
				height: auto;
				padding: 0.24rem 0.2rem;
			}

			.content .left {
				width: 100%;
				flex: inherit;
			}

			.content .left .choose .choose-bg {
				padding: 0.32rem 0.16rem;
			}

			.content .choose .confirm button {
				width: 100%;
				margin-bottom: 0.12rem;
			}

			.content .choose .confirm .confirm-text {
				margin-right: 0;
			}

			.content .choose .confirm {
				flex-direction: column;
				padding: 0.16rem 0.2rem;
			}

			.content .type-li {
				margin-left: 0;
				margin-bottom: 0.08rem;
			}

			.content .type-li:nth-last-child(1) {
				margin-bottom: 0;
			}

			.content .left .choose .text img {
				width: 0.14rem;
				height: 0.14rem;
			}

			.content .left .choose .text {
				height: auto;
				font-size: 0.14rem;
				padding: 0.12rem;
				align-items: flex-start
			}

			.content .type {
				flex-direction: column;
			}

			.content .left .choose h1 {
				font-size: 0.28rem;
			}

			.content {
				width: 100%;
				padding: 0 0.2rem;
				margin-top: 0.24rem;
				flex-direction: column;
			}
		}
	}

	.page::v-deep .el-input__suffix {
		left: 0;
		right: auto;
	}

	.people::v-deep .el-input__suffix {
		left: 15px !important;
		right: auto;
	}

	.page {
		direction: rtl;
		background-color: #F5F5F5;

	}

	.warp {
		padding: 0 0.32rem;
	}

	.why {
		margin: 0.20rem 0;
		padding: 0.25rem !important;
		border: 1px solid rgba(0, 188, 147, 1) !important;
		border-radius: 8px;
		background-color: rgba(0, 188, 147, 0.05) !important;

		.name {
			font-size: 0.2rem;
			font-weight: 600 !important;
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

	.people::v-deep .el-input__inner {
		height: 48px;
		width: 308px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 6px;
		font-size: 16px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
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
		text-align: right;
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
		margin-left: 0.10rem;
	}



	.content .type-name {
		font-weight: 400;
		margin-bottom: 0.10rem;
	}

	.content .type {
		display: flex;
	}

	.content .type-li {
		width: 308px;
		cursor: pointer;
		margin-left: 20px;
		padding: 0.16rem;
		border: 1px solid #DADADA;
		border-radius: 6px;
		position: relative;

		.Casino {
			position: absolute;
			top: -0.15rem;
			left: 0.2rem;
			color: rgba(26, 26, 26, 1);
			background-color: rgba(254, 243, 213, 1);
			z-index: 9;
			border: 1px solid rgba(255, 184, 0, 1);
			padding: 0.05rem;
			border-radius: 6px;
			display: flex;
			align-items: center;
			font-size: 0.12rem;

			img {
				width: 0.12rem;
				margin-right: 0.05rem;
			}
		}
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
		margin-top:0.32rem;
		margin-bottom: 0.08rem;
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
		width: 123px;
		height: 40px;
		cursor: pointer;
		font-weight: 400;
		border: none;
		color: rgba(254, 254, 254, 1);
	}

	.content .choose .confirm .confirm-text {
		margin-right: 32px;
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
		padding-right: 20px;
		display: flex;
		align-items: center;
		font-size: 0.32rem;
		font-weight: 400;
		color: #a2a2a2;
	}

	.content .right {
		width: 4.48rem;
		margin-right: 0.15rem;
		display: inline-block;

		.r-img {
			width: 4.48rem;
			height: 3.04rem;
			background: url("~assets/images/icon/imgs.png");
			display: flex;
			justify-content: center;
			align-items: center;
			// border: 1px solid #DADADA;
			// border-radius: 8px;
			// overflow: hidden;
			// background-color: #fff;

			// img {
			// 	width: 100%;
			// 	height: auto;
			// }
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
		position: relative;
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