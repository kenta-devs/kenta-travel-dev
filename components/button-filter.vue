<template>
	<div class="c-button-filter" @click="clickAgent">
		מסננים &nbsp;
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
			<path
				d="M2.66669 3.33333H4.66669M9.33335 3.33333H13.3334M9.33335 3.33333C9.33335 2.59695 8.73642 2 8.00002 2C7.26362 2 6.66669 2.59695 6.66669 3.33333C6.66669 4.06971 7.26362 4.66667 8.00002 4.66667C8.73642 4.66667 9.33335 4.06971 9.33335 3.33333ZM6.66669 8H10.6667M10.6667 8C10.6667 8.7364 11.2636 9.33333 12 9.33333C12.7364 9.33333 13.3334 8.7364 13.3334 8C13.3334 7.2636 12.7364 6.66667 12 6.66667C11.2636 6.66667 10.6667 7.2636 10.6667 8ZM2.66669 8H4.66669M7.33335 12.6667H13.3334M4.00002 11.3333C4.7364 11.3333 5.33335 11.9303 5.33335 12.6667C5.33335 13.4031 4.7364 14 4.00002 14C3.26364 14 2.66669 13.4031 2.66669 12.6667C2.66669 11.9303 3.26364 11.3333 4.00002 11.3333Z"
				stroke="#1A1A1A" stroke-opacity="0.6" stroke-linecap="round" />
		</svg>
	</div>
</template>

<script>
	export default {
		name: 'ButtonFilter',
		methods: {
			clickAgent() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-button-filter {
		display: inline-block;
		width: 0.94rem;
		height: 0.4rem;
		text-align: right;
		line-height: 0.4rem;
		text-align: center;
		border-radius: 4px;
		border: 1px solid rgba(26, 26, 26, 0.16);
		background: #FEFEFE;
		color: #1A1A1A;
		cursor: pointer;

		&[disabled] {
			border-color: #DADADA;
			background: #F5F5F5;
			opacity: 0.4;
		}

		svg {
			vertical-align: -0.03rem;
		}
	}
</style>