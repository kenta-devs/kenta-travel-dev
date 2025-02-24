<template>
	<div>
		<new-header tabshow />
		<div class="warps">
			<div class="content">
				<div class="no-data">
					<img class="icon" src="~assets/images/icon/Group 1327.png" alt="">
					<div>הצ׳אט שלנו בבניה</div>
					<p class="p1">
						לכל פניה ובקשה -
						<router-link to="/">
							<span>.שלחו לנו הודעה</span>
						</router-link>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: "3"
			}

		},
		mounted() {
			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");
		}
	}
</script>

<style lang="scss" scoped>
	.no-data {
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div {
			font-size: 0.32rem;
			margin-bottom: 0.16rem;
		}

		.p1 {
			span {
				cursor: pointer;
				color: rgba(52, 81, 255, 1);
				text-decoration: underline;
			}
		}

		.p {
			cursor: pointer;
			color: rgba(52, 81, 255, 1);
			text-decoration: underline;
		}

		img {
			width: 1.28rem;
			height: auto;
		}
	}

	.content {
		width: 100%;
		background-color: #fff;
		border-radius: 8px;
		margin: 0.24rem 0;
		padding: 0.64rem;
		box-sizing: border-box;
		height: calc(100vh - 1.22rem);
		overflow-y: auto;
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