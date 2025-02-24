<template>
  <div class="c-button-switch" :class="{ 'mobile': isMobile }">
    <div
      v-for="item in list"
      :key="item.value"
      :ref="`bsRef${item.value}`"
      class="cbs-item"
      :class="{ 'active': item.value === current }"
      @click="changeItem(item)"
    >
      {{ item.label }}
      <div
        v-if="item.value === current"
        class="cbs-item-active"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonSwitch',
  props: {
    current: [String, Number],
    list: Array,
    isMobile: Boolean
  },
  data () {
    return {
      left: 0,
      width: 0
    }
  },
  // watch: {
  //   current () {
  //     this.calcActiveState()
  //   }
  // },
  // mounted () {
  //   this.calcActiveState()
  // },
  methods: {
    calcActiveState () {
      const el = this.$refs['bsRef' + this.current][0]
      this.$nextTick(() => {
        if (el) {
          this.left = el.offsetLeft / 100
          this.width = el.offsetWidth / 100
          console.log('el = ', el, el.offsetLeft, el.offsetWidth)
        }
      })
    },
    changeItem (item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-button-switch {
  position: relative;
  display: inline-flex;
  border-radius: 0.4rem;
  border: 0.01rem solid #DADADA;
  background: #F5F5F5;
  backdrop-filter: blur(0.04rem);
  &.mobile {
    .cbs-item {
      font-size: 0.12rem;
    }
  }
  .cbs-item-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.4rem;
    border: 0.01rem solid  #FF3263;
    background: linear-gradient(0deg, rgba(255, 50, 99, 0.04) 0%, rgba(255, 50, 99, 0.04) 100%), #FEFEFE;
    color: #FF3263;
    transition: left 0.2s linear;
    z-index: -1;
  }

  .cbs-item {
    position: relative;
    padding: 0.12rem 0.16rem;
    color: rgba(26, 26, 26, 0.40);
    font-size: 0.16rem;
    font-weight: 500;
    cursor: pointer;

    &.active {
      color: #FF3263;
    }
  }
}
</style>
