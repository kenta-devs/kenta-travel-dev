<template>
<div class="mobile-page">
  <div @click="back()" class="back-mark"><</div>
  <div class="mobile-guest-title">Who will be traveling?</div>
      <div class="mobile-page-select-guest-con">
        <div class="mobile-page-select-guest-con-item-list">
          <div class="mobile-page-select-guest-con-item" v-for="(item, index) in guestList" :key="index">
            <div class="mobile-page-select-guest-con-item-con">
              <div class="item-title">{{ item.label }}</div>
              <div class="item-desc">{{ item.tips }}</div>
            </div>
            <el-input-number v-model="item.value" :min="item.min||0"></el-input-number>
          </div>
        </div>
      </div>

      <div class="mobile-page-footer">

        <div class="mobile-page-footer-btn"> <el-button type="primary" class="apply-btn" @click="apply()">Apply</el-button> </div>
      </div>
</div>
</template>

<script>
  export default {
      data: () => ({
          guestList: [{
            label: 'Adults',
            tips: 'Age 13+',
            value: 0,
          }, {
            label: 'Children',
            tips: 'Age 1 to 12',
            value: 0,
          }, {
            label: 'Infants',
            tips: 'Under 1',
            value: 0,
          }, {
            label: 'Pets',
            tips: 'An extra free may apply',
            value: 0,
          }],
      }),
      mounted() {

      },
      computed: {


      },
      methods: {
        back(){
          sessionStorage.setItem("showSearch",true);
          this.$router.go(-1);
        },
        apply(){
          sessionStorage.setItem("guests",JSON.stringify(this.guestList));
          this.back();
        },
      }
  }
</script>

<style>
  .mobile-page{
    width: 100%;
    height:100%;
  }

  .back-mark{
    width: 100%;
    height: 24px;
    margin-left: 20px;
    margin-top: 36px;
    font-size: 24px;
  }

  .mobile-guest-title{
    font-family: Rubik;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.04em;
    text-align: left;
    color: rgba(26, 26, 26, 1);
    margin-left: 20px;
    margin-top: 20px;
  }

  .mobile-page-select-guest-con{
    height: 100%;
    width: 336px;
    margin-left: auto;
    margin-right: auto;

      .mobile-page-select-guest-con-item-list{
          .mobile-page-select-guest-con-item{
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: .24rem 0;
              border-bottom: solid 1px rgba(26, 26, 26, 0.16);
              .mobile-page-select-guest-con-item-con{
                .item-title{
                color: #1A1A1A;
                 font-family: Rubik;
                 font-size: 14px;
                 font-weight: 500;
                 line-height: 16px;
                 letter-spacing: 0em;
                 text-align: left;
                    }
                    .item-desc{
                color: #1A1A1A;
                        margin-top: .08rem;
                        font-family: Rubik;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 16px;
                        letter-spacing: 0em;
                        text-align: left;
                    }
              }

          }
      }
      .el-input-number{
          display: flex;
          align-items: center;
          line-height: .32rem;
          width: 1.2rem;
          .el-input-number__decrease,
          .el-input-number__increase{
              display: flex;
              align-items: center;
              justify-content: center;
              width: .32rem;
              height: .32rem;
              border-radius: .32rem;
              border: 1px solid #DADADA;
              font-weight: bold;
              font-size: .18rem;
              background: #fff;
              color: #1A1A1A;
          }
          .el-input__inner{
  			font-weight: 300;
              border: none;
              padding-left: .36rem;
              padding-right: .36rem;
              height: .4rem;
              color: #1A1A1A;

              font-family: Rubik;
              font-size: 20px;
              font-weight: 300;
              line-height: 24px;
              letter-spacing: 0em;
          }
      }
  }

  .mobile-page-footer{
    width: 100%;
    height: 64px;
    background: linear-gradient(0deg, rgba(26, 26, 26, 0.16), rgba(26, 26, 26, 0.16)),
    linear-gradient(0deg, #F5F5F5, #F5F5F5);
    border-top: 1px solid rgba(26, 26, 26, 0.16);
    position: fixed;
    bottom: 0px;
    z-index: 1000;
  }

  .mobile-page-footer-btn{
    width: 100px;
    height: 100%;
    float: right;
    margin-left: auto;
    margin-right: 19px;
  }

  .apply-btn{
    width: 86px;
    height: 48px;
    border-radius: 8px;
    font-family: Rubik;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(254, 254, 254, 1);
    background: rgba(255, 50, 99, 1);
    margin-top: 8px;
  }
</style>
