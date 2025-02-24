<template>
  <section class="adv-box">
    <h2 class="adv-text" v-if="homePage[0]">
      {{homePage[0].dictValue}}
    </h2>
    <el-button class="adv-btn" @click="toCustom2" v-if="homePage[1]">{{homePage[1].dictValue}}</el-button>
  </section>
</template>

<script>
	import {dictList} from '@/api/index';
  export default {
    data: () => ({
			homePage: [],
    }),
    created() {
      this.init();
    },
    methods: {
			init(){
				dictList({dictType: 'ctabanner'}).then((res) => {
				  this.homePage = res.data;
					console.log(" this.homePage",this.homePage)
				})
			},
      toCustom2() {
		  this.$router.push({path: this.homePage[2].dictValue})
        // this.$router.push({path: '/custom-trip-step1'})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .adv-box {
    // font-family: Rubik;
    width: 100%;
    height: 3.44rem;
    background: linear-gradient(110deg, #FF3263 36.89%, #EE2344 73.36%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .adv-text {
      width: 5.91rem;
      font-size: .56rem;
      text-align: center;
      color: #FEFEFE;
      font-style: normal;
      font-family: Rubik;
      font-weight: 400;
      line-height: .56rem;
      letter-spacing: -0.04rem;
    }

    .adv-btn {
      margin-top: 24px;
      color: #FF3263;
      width: 1.88rem;
      height: .48rem;
      border-radius: .08rem;
      font-family: Rubik;
      font-size: .16rem;
      font-weight: 400;
      line-height: .16rem;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  .mobile{
    .adv-box {
      width: 100%;
      height: 5.12rem;

      .adv-text {
        width: 3.36rem;
        font-size: .40rem;
        line-height: .40rem;
      }
      .adv-btn{
        width: 1.86rem;
        font-size: .14rem;

      }
    }
  }

</style>
