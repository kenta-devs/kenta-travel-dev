<template>
    <div class="page" >
        <!-- header start-->
    </div>
</template>

<script>
    import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
    name: '',
    data() {
        return {
            token:'',
        }
    },
    created(){

        this.token=this.$route.query.token;

         this.$store.commit('SET_TOKEN', this.token);
                setToken(this.token);

        console.log("this.token",this.token)
        this.$router.push('/');
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
</style>
