<template lang="html">
	<footer class="footer">
		<div class="footer-left">
			<div>
				<div class="logo">
					<img src="~assets/images/Logo-white.svg" alt="">
				</div>
				<div class="copyright">© All rights reserved. <br />Kent Tech LLC</div>
			</div>
			<div class="share">
				<div class="square" @click="toFacebook">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M16.4621 3.75373L13.9826 3.75073C11.5781 3.75073 10.0249 5.34373 10.0249 7.81198V9.68323H7.53711V13.0695H10.0249L10.0219 20.2507H13.5026L13.5056 13.0695H16.3601L16.3579 9.68398H13.5056V8.09623C13.5056 7.33273 13.6864 6.94648 14.6801 6.94648L16.4546 6.94573L16.4621 3.75373Z"
							fill="#FEFEFE" />
					</svg>
				</div>
				<div class="square" @click="toInstagram">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M11.9996 7.90014C11.1887 7.90014 10.396 8.14061 9.72182 8.59112C9.04758 9.04163 8.52207 9.68197 8.21175 10.4311C7.90143 11.1803 7.82024 12.0047 7.97844 12.8C8.13663 13.5953 8.52712 14.3259 9.10052 14.8993C9.67391 15.4726 10.4044 15.8631 11.1997 16.0213C11.9951 16.1795 12.8194 16.0983 13.5686 15.788C14.3178 15.4777 14.9581 14.9522 15.4086 14.278C15.8592 13.6037 16.0996 12.811 16.0996 12.0001C16.1009 11.4613 15.9958 10.9276 15.7902 10.4296C15.5846 9.93155 15.2827 9.47905 14.9017 9.09807C14.5207 8.71708 14.0682 8.41513 13.5702 8.20955C13.0721 8.00398 12.5384 7.89883 11.9996 7.90014ZM11.9996 14.6701C11.4715 14.6701 10.9553 14.5135 10.5162 14.2201C10.0772 13.9268 9.73498 13.5098 9.5329 13.0219C9.33081 12.534 9.27794 11.9972 9.38096 11.4792C9.48398 10.9613 9.73827 10.4855 10.1116 10.1121C10.485 9.73876 10.9608 9.48447 11.4787 9.38145C11.9967 9.27843 12.5335 9.3313 13.0214 9.53339C13.5093 9.73547 13.9263 10.0777 14.2196 10.5167C14.513 10.9558 14.6696 11.472 14.6696 12.0001C14.6696 12.7082 14.3883 13.3874 13.8876 13.8881C13.3869 14.3888 12.7077 14.6701 11.9996 14.6701ZM17.2296 7.73014C17.2296 7.92793 17.171 8.12127 17.0611 8.28571C16.9512 8.45016 16.795 8.57834 16.6123 8.65402C16.4296 8.72971 16.2285 8.74951 16.0345 8.71093C15.8405 8.67234 15.6624 8.5771 15.5225 8.43725C15.3827 8.2974 15.2874 8.11922 15.2488 7.92524C15.2102 7.73125 15.23 7.53019 15.3057 7.34746C15.3814 7.16474 15.5096 7.00856 15.674 6.89868C15.8385 6.78879 16.0318 6.73014 16.2296 6.73014C16.4948 6.73014 16.7492 6.8355 16.9367 7.02304C17.1243 7.21057 17.2296 7.46493 17.2296 7.73014ZM19.9396 8.73014C19.9687 7.48697 19.505 6.28274 18.6496 5.38014C17.7518 4.51383 16.547 4.0391 15.2996 4.06014C13.9996 4.00014 9.99964 4.00014 8.69965 4.06014C7.45686 4.03323 6.25343 4.49665 5.34965 5.35014C4.49429 6.25274 4.03057 7.45697 4.05965 8.70014C3.99965 10.0001 3.99965 14.0001 4.05965 15.3001C4.03057 16.5433 4.49429 17.7475 5.34965 18.6501C6.25343 19.5036 7.45686 19.967 8.69965 19.9401C10.0196 20.0201 13.9796 20.0201 15.2996 19.9401C16.5428 19.9692 17.747 19.5055 18.6496 18.6501C19.505 17.7475 19.9687 16.5433 19.9396 15.3001C19.9996 14.0001 19.9996 10.0001 19.9396 8.70014V8.73014ZM18.2396 16.7301C18.1038 17.0741 17.8989 17.3864 17.6374 17.6479C17.3759 17.9094 17.0636 18.1143 16.7196 18.2501C15.1672 18.564 13.5802 18.6716 11.9996 18.5701C10.4224 18.6717 8.83866 18.5641 7.28965 18.2501C6.94572 18.1143 6.63333 17.9094 6.37187 17.6479C6.1104 17.3864 5.90543 17.0741 5.76965 16.7301C5.34965 15.6701 5.43965 13.1701 5.43965 12.0101C5.43965 10.8501 5.34965 8.34014 5.76965 7.29014C5.9016 6.94281 6.10511 6.62711 6.36697 6.36352C6.62883 6.09994 6.94319 5.89436 7.28965 5.76014C8.83866 5.44612 10.4224 5.33852 11.9996 5.44014C13.5802 5.33869 15.1672 5.44629 16.7196 5.76014C17.0636 5.89592 17.3759 6.10089 17.6374 6.36236C17.8989 6.62382 18.1038 6.93621 18.2396 7.28014C18.6596 8.34014 18.5596 10.8401 18.5596 12.0001C18.5596 13.1601 18.6596 15.6701 18.2396 16.7201V16.7301Z"
							fill="#FEFEFE" />
					</svg>
				</div>
				<div class="square" @click="toTwitter">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M16 2.91241C15.4121 3.18014 14.7791 3.36119 14.1152 3.44209C14.7932 3.02605 15.3135 2.36637 15.5586 1.58053C14.9238 1.96574 14.2222 2.24599 13.4728 2.39622C12.8755 1.74231 12.0218 1.33398 11.0771 1.33398C9.26548 1.33398 7.79574 2.84115 7.79574 4.69982C7.79574 4.96369 7.82391 5.21987 7.88026 5.4664C5.15208 5.3258 2.73381 3.98717 1.11381 1.9484C0.831132 2.44726 0.669596 3.02605 0.669596 3.6424C0.669596 4.80961 1.24905 5.84007 2.12995 6.44389C1.59277 6.42752 1.08563 6.2744 0.642365 6.02401V6.06541C0.642365 7.69681 1.77402 9.05759 3.27663 9.36576C3.00147 9.44473 2.71128 9.48422 2.41169 9.48422C2.20039 9.48422 1.99378 9.46399 1.79374 9.42451C2.21166 10.7612 3.42313 11.7349 4.86001 11.7609C3.7368 12.6642 2.32059 13.2025 0.783234 13.2025C0.518398 13.2025 0.256383 13.1871 0 13.1563C1.45284 14.1097 3.17896 14.6673 5.03187 14.6673C11.0705 14.6673 14.3715 9.53911 14.3715 5.09082C14.3715 4.94443 14.3687 4.79805 14.3631 4.65456C15.0045 4.17978 15.5614 3.58751 16 2.91241Z"
							fill="#FEFEFE" />
					</svg>
				</div>
				<div class="square" @click="toLinkedin">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
							fill="#FEFEFE" />
					</svg>
				</div>
			</div>
		</div>
		<div class="footer-right">
			<div class="item-list">
				<div class="item-hd">Company</div>
				<div class="item">
					<router-link to="../about">About Us</router-link>
				</div>
				<div class="item">
					<router-link to="../contact">Contact Us</router-link>
				</div>
				<div class="item">
					<router-link to="../blog">Travel Guides</router-link>
				</div>
				<div class="item">
					<router-link to="../privacy-policy">Privacy Policy</router-link>
				</div>
				<div class="item">
					<router-link to="../cookie-policy">Cookie Policy</router-link>
				</div>
				<div class="item">
					<router-link to="../terms-conditions">Terms & Conditions</router-link>
				</div>
			</div>
			<div class="item-list">
				<div class="item-hd">Quick Links</div>
				<div class="item">
					<router-link to="custom-trip-step1">Concierge</router-link>
				</div>
				<div class="item">
					<router-link to="comingSoon">Affiliates</router-link>
				</div>
				<div class="item">
					<router-link to="comingSoon">Partners</router-link>
				</div>
				<div class="item">
					<router-link to="comingSoon">Submission</router-link>
				</div>
				<div class="item">
					<router-link to="comingSoon">Press</router-link>
				</div>
				<div class="item">
					<router-link to="comingSoon">Responsible Gambling</router-link>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		data: () => ({
			loading: false
		}),
		methods: {
			toHome() {
				this.$router.push({
					path: '/'
				})
			},
			toLogin() {
				this.$router.push({
					path: '/login'
				})
			},
			toSign() {
				this.$router.push({
					path: '/login'
				})
			},
			toFacebook() {
				window.open('https://www.facebook.com/');
			},
			toTwitter() {
				window.open('https://twitter.com/');
			},
			toLinkedin() {
				window.open('https://www.linkedin.com/');
			},
			toReddit() {
				window.open('https://www.reddit.com/');
			},
			toInstagram() {
				window.open('https://www.instagram.com/');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		width: 100%;
		box-sizing: border-box;
		background: #1a1a1a;
		padding: 0.64rem 0.32rem;
		display: flex;

		h2 {
			color: #1a1a1a;
			text-align: center;
			font-family: Rubik;
			font-size: 56px;
			font-style: normal;
			font-weight: 400;
			line-height: 100%;
			/* 56px */
			letter-spacing: -2.24px;
		}

		.footer-left {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.logo {
				width: 0.76rem;
			}

			.copyright {
				margin-top: 0.16rem;
				color: rgba(254, 254, 254, 0.6);
				font-size: 0.14rem;
				font-weight: 400;
			}

			flex: 1;

			.share {
				display: flex;

				.square {
					cursor: pointer;
					display: flex;
					width: 0.4rem;
					height: 0.4rem;
					margin-left: 0.1rem;
					border-radius: 0.04rem;
					border: 0.01rem solid rgba(254, 254, 254, 0.16);
					align-items: center;
					justify-content: center;
				}

				a {
					display: inline-block;
					width: 0.4rem;
					height: 0.4rem;
				}
			}
		}

		.footer-right {
			width: 6rem;
			display: flex;

			.item-list {
				flex: 1;

				.item-hd {
					color: #fefefe;
					font-family: Rubik;
					font-size: 0.2rem;
					margin-bottom: 0.24rem;
				}

				.item {
					margin-top: 0.16rem;
				}

				.item a {
					color: rgba(254, 254, 254, 0.6);
					font-family: Rubik;
					font-size: 0.14rem;
					text-decoration: none;
				}

				.item a:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.mobile {
		.footer {
			padding: 0.64rem 0.2rem 0.24rem;
			flex-direction: column-reverse;

			// position: relative;
			.footer-left {
				// position: absolute;
				margin-top: 0.4rem;
				display: flex;
				flex-direction: row;
				align-items: flex-end;
				left: 0;
				bottom: 0;

				.share {
					.square {
						display: flex;
						width: 0.24rem;
						height: 0.24rem;
						margin-left: 0.1rem;
						border-radius: 0.04rem;
						border: 0.01rem solid rgba(254, 254, 254, 0.16);
						align-items: center;
						justify-content: center;
					}

					a {
						width: 0.24rem;
						height: 0.24rem;
						margin-left: 0.08rem;
					}
				}
			}

			.footer-right {
				justify-content: space-between;
				width: 100%;

				.item-list {
					flex: none;
				}
			}
		}
	}
</style>