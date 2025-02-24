<template>
	<div class="trip-header">
		<div class="head warp">
			<div class="logo" @click="toHome">
				<img src="~assets/images/Logo.svg" alt='logo' />
			</div>
			<div class="celta">
				<h3>Celta de Vigo vs Valencia CF</h3>
				<div class="text">
					<p>אוגוסט 23, 2024</p>
					<p class="day-t">19:00-20:45</p>
					<p class="date"><i class="el-icon-check"></i>התאריך אושר</p>
					<div class="line line-l"></div>
					<p class="span">
						Estadio Municipal de Balaídos Vigo (ESP)
					</p>
					<div class="line line-l"></div>
					<p class="span">
						לה ליגה 24/25
					</p>
				</div>
			</div>
			<div class="trip">
				<div class="index" :class="[index == 1 ? '' : 'no-index']">1</div>
				<span :class="[index == 1 ? '' : 'no-select']">הטיול שלך </span>
				<i class="el-icon-arrow-left"></i>
				<div class="index" :class="[index == 2 ? '' : 'no-index']">2</div>
				<span :class="[index == 2 ? '' : 'no-select']">אוגוסט </span>
				<i class="el-icon-arrow-left"></i>
				<div class="index" :class="[index == 3 ? '' : 'no-index']">3</div>
				<span :class="[index == 3 ? '' : 'no-select']">תשלום </span>
			</div>
		</div>
		<div class="head-h"></div>
		<!-- 移动端 -->
		<div class="mobile-trip">
			<div class="trip">
				<div class="index" :class="[index == 1 ? '' : 'no-index']">1</div>
				<span :class="[index == 1 ? '' : 'no-select']">הטיול שלך </span>
				<i class="el-icon-arrow-left"></i>
				<div class="index" :class="[index == 2 ? '' : 'no-index']">2</div>
				<span :class="[index == 2 ? '' : 'no-select']">אוגוסט </span>
				<i class="el-icon-arrow-left"></i>
				<div class="index" :class="[index == 3 ? '' : 'no-index']">3</div>
				<span :class="[index == 3 ? '' : 'no-select']">תשלום </span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				default: 1
			}
		},
		methods: {

			toHome() {
				this.$router.push({
					path: '/'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.el-icon-arrow-left{
		margin-right: 0.08rem;
	}
	.el-icon-check{
		margin-left: 4px;
	}
	@media (max-width: 820px) {
		.trip-header {
			.warp {
				padding-right: 0.2rem;
				padding-left: 0;
			}
			
			.mobile-trip{
				display: inline-block;
				padding: 0.16rem 0.1rem 0.16rem 0.1rem;
			}
			.head .celta .text{
				padding-right: 0;
			}

			.head .celta .text p {
				margin-right: 0;
				font-size: 0.1rem;
			}

			.day-t {
				margin: 0 0.04rem !important;
			}

			.head .celta .text .date {
				padding: 0.05rem;
			}

			.head .celta h3 {
				padding-right: 0;
			}

			.head .logo {
				margin-left: 0.08rem;
			}

			.head .celta {
				padding-left: 0;
				margin-left: 0;
				border: none;
			}

			.head .trip,
			.line-l,
			.span {
				display: none !important;
			}

		}
	}

	.warp {
		padding: 0 32px;
	}

	.head-h {
		height: 0.64rem;
	}
	.mobile-trip{
		display: none;
	}

	.trip {
		display: flex;
		align-items: center;
		flex-direction: row;

		.index {
			width: 0.28rem;
			height: 0.28rem;
			display: flex;
			line-height: 0.26rem;
			// align-items: center;
			justify-content: center;
			border: 2px solid #FF3263;
			border-radius: 50%;
			color: #FF3263;
			font-weight: 500;
			margin: 0 0.10rem;
			;
		}

		i {
			color: rgba(26, 26, 26, 0.6);
			font-size: 0.12rem;
			font-weight: bold;
		}

		span {
			font-size: 0.16rem;
			font-weight: 500;
		}

		.no-select {
			color: #d0d0d0;
		}

		.no-index {
			border-color: #d0d0d0;
			color: #d0d0d0;
		}
	}

	.head {
		height: 0.64rem;
		background-color: #fff;
		border-bottom: 1px solid #DADADA;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;


		.logo {
			margin-left: 0.32rem;

			img {
				width: 0.76rem
			}
		}

		.celta {
			flex: 1;
			padding-left: 32px;
			height: 0.64rem;
			margin-left: 32px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			border-right: 1px solid #DADADA;

			h3 {
				font-size: 0.16rem;
				font-weight: 600;
				text-align: right;
				padding-right: 0.32rem;

			}

			i {
				font-weight: bold;
				margin-right: 0.05rem;
				;
			}

			.text {
				display: flex;
				margin-top: 0.05rem;
				align-items: center;
				flex-direction: row;
				padding-right: 0.2rem;

				.line {
					height: 0.15rem;
					width: 1px;
					margin-right: 0.15rem;
					background-color: #DADADA;
				}

				.date {
					padding: 0.05rem 0.10rem;
					margin-right: 0.15rem;
					border-radius: 200px;
					background-color: rgba(0, 188, 147, 0.12);
					color: rgba(0, 188, 147, 1);
					font-size: 0.1rem;
					font-weight: 500;
					line-height: 0.12rem;


				}

				p {
					font-size: 0.12rem;
					color: rgba(26, 26, 26, 0.6);
					margin-right: 0.12rem;
					display: inline-block;
				}
			}
		}



	}
</style>