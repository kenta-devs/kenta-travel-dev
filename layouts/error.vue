<template>
	<div class="__nuxt-error-page">

		<!-- <kt-header></kt-header>

    <div class="main">
      <img src="@/assets/images/WechatIMG138.png" />
      <h1 class="title">Page not found</h1>
      <p class="desc">Something went wrong..</p>
      <el-button type="primary" @click="$router.push('/')">Back to Homepage</el-button>
    </div> -->
	</div>
</template>
<script>
	export default {

		data() {
			return {}
		},
		created() {
			
		},
	}
</script>
<style lang="scss">
	.__nuxt-error-page {
		width: 100%;
		box-sizing: border-box;

		.main {
			width: 100%;
			height: calc(100vh - 57px);
			box-sizing: border-box;
			padding-top: 10%;
			text-align: center;

			img {
				width: 50% !important;
				height: auto !important;
				object-fit: none !important;
			}

			.title {
				text-align: center;
				font-size: 0.5rem;
				color: #1a1a1a;
				margin-top: -0.5rem;
			}

			.desc {
				text-align: center;
				font-size: 0.2rem;
				color: #1a1a1a;
				margin-top: 0.1rem;
			}

			.el-button {
				width: 200px;
				height: 48px;
				border-radius: 10px;
				margin-top: 0.2rem;
			}
		}
	}

	.mobile {
		.__nuxt-error-page {
			.main {
				background-size: 90%;

				img {
					display: block !important;
					margin: 0px auto !important;
					width: 90% !important;
					height: auto !important;
					object-fit: none !important;
				}

				.title {
					margin-top: 100px !important;
				}
			}
		}
	}
</style>