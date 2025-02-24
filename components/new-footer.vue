<template>
	<div class="footer">
		<div class="footer-item footer-item1">
			<div class="name">
				קישורים
			</div>
			<div class="Links-li">
				<p>תנאי שימוש</p>
				<p>אודות</p>
			</div>
			<div class="Links-li">
				<p>מדיניות פרטיות</p>
				<p>כרטיסים</p>
			</div>
			<div class="Links-li">
				<p>יצירת קשר</p>
				<p>הצהרת נגישות</p>
			</div>
		</div>
		<div class="footer-item">
			<div class="name">
				יצירת קשר
			</div>
			<div class="text">
				<p>
					03-888-5555<img src="~assets/images/icon/icon10.png" />
				</p>
				<p>
					support@kenta.co.il<img src="~assets/images/icon/icon11.png" />
				</p>
				<p>
					054-5455-888<img src="~assets/images/icon/icon12.png" />
				</p>
			</div>
		</div>
		<div class="footer-item">
			<div class="name">
				תשלום מאובטח
			</div>
			<div class="img">
				<div class="img-r">
					<img src="~assets/images/icon/img5.png" />
					<img src="~assets/images/icon/img1.png" />
					<img src="~assets/images/icon/img4.png" />
					<img src="~assets/images/icon/img3.png" />
					<img src="~assets/images/icon/img2.png" />
				</div>
			</div>
		</div>
		<div class="flex"></div>
		<div class="logo">
			<img src="~assets/images/logo-white.png" alt='logo' />
			<p>קנטה טק בע״מ 2021-2024</p>
			<div class="icon">
				<div class="icon-li">
					<img src="~assets/images/icon/icon9.png" />
				</div>
				<div class="icon-li">
					<img src="~assets/images/icon/facebook 2.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.logo{
		text-align: right;
	}
	@media (max-width: 820px) {
		.footer {
			display: flex;
			flex-direction: column-reverse;
			/* 反转元素顺序 */
			align-items: flex-end;
			padding: 0.4rem 0.2rem !important
		}

		.logo {
			text-align: right;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-end;
			margin-bottom: 0.32rem
		}

		.footer-item1 {
			margin-bottom: 0 !important;
		}

		.footer-item {
			width: 100%;
			flex: inherit;
			margin-bottom: 0.32rem
		}
	}

	.footer {
		background-color: rgba(26, 26, 26, 1);
		padding: 0.6rem 0.32rem;
		display: flex;

		.footer-item {
			flex: 1;
			text-align: right;

			.Links-li {
				display: flex;
				margin-bottom: 0.2rem;

				p {
					flex: 1;
					font-size: 0.14rem;
					font-weight: 400;
					color: #fff;
				}
			}

			.text {
				color: #fff;

				p {
					display: flex;
					align-items: center;
					margin-bottom: 0.2rem;
					justify-content: flex-end;
				}

				img {
					width: 0.16rem;
					height: 0.16rem;
					margin-left: 0.1rem;
				}
			}

			.name {
				font-size: 0.2rem;
				font-weight: 400;
				color: #fff;
				margin-bottom: 0.2rem;
			}

			.img {
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.img-r {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					width: 2rem;
					justify-content: flex-end;

					img {
						width: 0.5rem;
						height: auto;
						margin-left: 0.10rem;
						margin-bottom: 0.10rem;
					}
				}

			}
		}

		.logo {
			img {
				width: 0.77rem;
				height: 0.24rem;
			}

			.icon {
				display: flex;
				align-items: center;
				direction: rtl;

				.icon-li {
					border: 1px solid rgba(254, 254, 254, 0.16);
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 8px;
					margin-right: 0.10rem;
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						width: 0.16rem;
						height: 0.16rem;
					}
				}
			}

			p {
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(254, 254, 254, 0.6);
				margin: 0.20rem 0;
			}
		}
	}
</style>