<template>
  <page-views-order-mobile v-if="isMobile" />
  <page-views-order-web v-else />
</template>

<script>
import PageViewsOrderWeb from '@/components/page-views/order/web'
import PageViewsOrderMobile from '@/components/page-views/order/mobile'
import { getToken } from '@/utils/auth'

export default {
  components: {
    PageViewsOrderWeb,
    PageViewsOrderMobile
  },
  data () {
    return {
      isMobile: window.isMobile
    }
  },
  created () {
    if (!getToken()) {
      this.$store.commit('SET_REDIRECT', this.$route.fullPath);
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
