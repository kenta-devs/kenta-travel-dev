<template>
	<div class="filters">
		<el-popover placement="bottom-start" trigger="click" :visible-arrow="false" popper-class="select-guest-wrap"
			v-model="show" @hide="hidePopper">
			<div class="select-guest-con">
				<div class="item-list">
					<div class="item" v-for="(item, index) in guestList" :key="index">
						<div class="item-con">
							<div class="item-title">{{ item.label }}</div>
							<div class="item-desc">{{ item.tips }}</div>
						</div>
						<el-input-number v-model="item.value" :min="0" :max="limitMap[item.label]"
							@change="validPersonCount(item)" />
					</div>
				</div>
			</div>
			<div v-if="hideMember" class="filter-member-point" slot="reference">
				<div class="jb-bg" @click.stop="handleVisible4"></div>
				<i class="el-icon-arrow-down"></i>
				<el-input placeholder="Add guests" v-model="guests" @click.stop.native="handleVisible4"></el-input>
				<img class="my" src="~assets/images/icon/my.png" />
			</div>
		</el-popover>
		<!-- 移动端的 -->
		<el-drawer :with-header="false" :visible.sync="direction" size="100%" direction="btt">
			<mobile-header @close="direction=false" />
			<div class="draweryd">
				<div class="select-guest-con">
					<div class="item-list">
						<div class="name">מספר אורחים</div>
						<div class="item" v-for="(item, index) in guestList" :key="index">
							<div class="item-con">
								<div class="item-title">{{ item.label }}</div>
								<div class="item-desc">{{ item.tips }}</div>
							</div>
							<el-input-number v-model="item.value" :min="0" :max="limitMap[item.label]"
								@change="validPersonCount(item)" />
						</div>
					</div>
				</div>
				<el-button @click="submit" type="primary" class="btns">נַעֲשָׂה</el-button>
			</div>
		</el-drawer>
	</div>
</template>

<script>
	import {
		deepClone
	} from '@/utils/index'
	export default {
		name: 'FilterMember',
		props: {
			list: Array,
			hideMember: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				show: false,
				limitMap: {
					Adults: 6,
					Children: 8
				},
				direction: false,
				guestList: [{
						label: 'מבוגרים',
						tips: 'גילאים +18',
						value: 1
					},
					{
						label: 'ילדים',
						tips: 'גילאים 18-',
						value: 0
					},
					// {
					// 	label: 'Infants',
					// 	tips: 'Under 1',
					// 	value: 0,
					// },
					// {
					// 	label: 'Pets',
					// 	tips: 'An extra free may apply',
					// 	value: 0
					// }
				]
			}
		},
		watch: {
			list: {
				handler(val) {
					if (val && val.length) {
						this.guestList = deepClone(val)
					}
				},
				immediate: true
			}
		},
		computed: {
			guests: {
				get() {
					let gustText = '';
					let infantText = '';
					let petText = '';
					let gutstNum = this.guestList[0].value + this.guestList[1].value;
					// let infantNum = this.guestList[2].value;
					// let petNum = this.guestList[3].value;
					// if (infantNum > 0 || petNum > 0) {
					// 	this.$set(this.guestList[0], 'min', 1);
					// } else {
					// 	this.$set(this.guestList[0], 'min', 0);
					// }
					if (gutstNum == 1) {
						gustText += gutstNum + ' אורחים'
					} else if (gutstNum > 0) {
						gustText += gutstNum + ' אורחים'
					}
					
					// if (gutstNum == 1) {
					// 	gustText += gutstNum + ' guest'
					// } else if (gutstNum > 0) {
					// 	gustText += gutstNum + ' guests'
					// }
					// if (infantNum == 1) {
					// 	infantText += ' ,' + infantNum + ' infant'
					// } else if (infantNum > 1) {
					// 	infantText += ' , ' + infantNum + ' infants'
					// }
					// if (petNum == 1) {
					// 	petText += ' ,' + petNum + ' pet'
					// } else if (petNum > 1) {
					// 	petText += ' , ' + petNum + ' pets'
					// }
					return `${gustText}${infantText}${petText}`
				},
				set() {}
			}
		},
		methods: {
			// 提交
			submit() {
				this.$emit('change', this.guestList)
				this.direction = false
			},
			validPersonCount() {
				const aValue = this.guestList.find(g => g.label === 'מבוגרים').value
				const cValue = this.guestList.find(g => g.label === 'ילדים').value
				this.limitMap.Adults = Math.min(6, 8 - cValue)
				this.limitMap.Children = 8 - aValue
			},
			hidePopper() {
				this.$emit('change', this.guestList)
			},
			handleVisible4() {
				console.log(this.guests)
				if (window.isMobile) {
					this.direction = !this.direction
				} else {
					this.show = !this.show
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@media (max-width: 820px) {
		.filters .jb-bg {
			display: inline-block;
		}

	}

	.jb-bg {
		display: none;
		height: 32px;
		left: 0.24rem;
		z-index: 1;
		width: 0.6rem;
		top: 4px;
		position: absolute;
		background: linear-gradient(90deg, #F5F5F5 44%, rgba(245, 245, 245, 0) 100%);
	}

	.filter-member-point {
		position: relative;
	}

	.btns {
		margin-top: 0.24rem;
		width: 100%;
		background-color: #FF3263;
		color: #fff;
	}

	.filter-member-point::v-deep .el-input__inner {
		text-align: right;
		padding: 0 32px;
		direction: rtl;
	}

	.draweryd {
		padding: 0 0.20rem;

		.name {
			margin-top: 0.4rem;
			text-align: right;
			font-size: 0.24rem;
		}

		.item {
			padding-left: 0.24rem;
			padding-right: 0.24rem;
		}
	}

	.item {
		direction: rtl;
	}

	.filter-member-point {
		position: relative;

		i {
			position: absolute;
			left: 0.12rem;
			top: 0.12rem;
			z-index: 9;
		}

		.my {
			width: 0.16rem;
			height: auto;
			position: absolute;
			right: 0.12rem;
			top: 0.12rem;
		}

		:deep(.el-input__inner) {
			background-color: #F5F5F5;
		}
	}
</style>