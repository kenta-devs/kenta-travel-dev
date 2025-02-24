<template>
	<div>
		<div class="header">
			<div class="icon" @click="close">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="flex">
			</div>
			<div>
				<img class="logo" src="~assets/images/logo.png" />
			</div>
		</div>
		<div class="header-h"></div>
	</div>
</template>

<script>
	export default {
		methods: {
			close() {
				this.$emit("close")
			}
		}
	}
</script>
<style lang="scss" scoped>
	.header-h {
		height: 0.64rem;
	}

	.header {
		padding: 0 0.32rem 0 0;
		height: 0.64rem;
		position: fixed;
		top: 0;
		direction: ltr;
		left: 0;
		z-index: 9999;
		display: flex;
		width: 100%;
		align-items: center;
		overflow: hidden;
		border-bottom: 1px solid #DADADA;

		.icon {
			width: 0.88rem;
			text-align: center;
			line-height: 0.64rem;
			height: 0.64rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-right: 1px solid #DADADA;

			i {
				font-size: 0.25rem;
				color: #1A1A1A;
			}
		}

		.logo {
			cursor: pointer;
			width: 0.76rem;
			height: auto;
		}
	}
</style>