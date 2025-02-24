<template>
    <div class="page">


    </div>
</template>

<script>
  import { googleLogin } from '@/api/index'
  import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
    name: 'AuthPage',
    data() {
        return {
          params:'',
        }

    },
    mounted() {
      this.params=window.location.search;
      this.login();
    },
    methods: {
      login(){
        googleLogin(this.params).then(async (res)=>{
            this.$store.commit('SET_TOKEN', res.token)
            setToken(res.token)
            await this.$store.dispatch('GetInfo')
            this.$router.replace('/concierge')
        })
      },
    }
}
</script>
<style lang="scss" scoped>

</style>
