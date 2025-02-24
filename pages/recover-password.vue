<template>
    <div class="page">
        <div class="box">
            <div class="logo" @click="toHome">
                <img src="~assets/images/Logo.svg" alt="">
            </div>
            <div class="newuser">
                < {{form.email}} </div>
                    <div class="prompt">
                        Let's recover your password
                    </div>
                    <div class="recover-password">
                        Enter your email address and we will send you a link for the password reset.
                    </div>
                    <div class="password">
                        Your email address
                    </div>
                    <div class="input">
                        <el-input v-model="form.email" readonly placeholder="Enter your email"></el-input>
                    </div>
                    <div class="tips success" v-if="isSuccess">{{successTips}}</div>
                    <!-- <div class="button">
       <span class="text">
         Send reset link
       </span>
     </div> -->
                    <el-button class="button" @click="handleSendEmail">Send reset link</el-button>

            </div>
        </div>
</template>

<script>
import {findPwdSendMail} from '@/api/login'
export default {
    data() {
        return {
            form: {
                email: ''
            },
            isSuccess:false,
            successTips:'Please open your email to recover your password',
        }
    },
    created(){
        this.form.email=this.$route.query.email;
    },
    methods: {
        toHome() {
            this.$router.push({ path: '/' })
        },
        handleSendEmail(){
            findPwdSendMail({email:this.form.email}).then((res)=>{
                this.isSuccess=true;
            })
        },
    },
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
.tips{
    color: #FF3263;
    font-size: .12rem;
    padding: .1rem 0;
}
.tips.success{
    color: #67C23A;
}
.page {
    min-height: 100vh;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    width: 4.60rem;
    height: 5.42rem;
    margin: 0 auto;

    .logo {
        width: .76rem;

        img {
            width: 100%;
        }
    }

    .newuser {
       font-weight: 400;
       line-height: 100%;
       letter-spacing: -0.64px;
       margin-top: .24rem;
       font-size: .16rem;
       color: rgba(26, 26, 26, 0.60);

    }

    .prompt {
		color: #1A1A1A;
		font-weight: 400;
		letter-spacing: -1.28px;
        margin-top: .24rem;
        font-size: .32rem;
    }

    .recover-password {
		width: 3.32rem;
        margin-top: .16rem;
        color: rgba(26, 26, 26, 0.60);
        font-size: .14rem;
		font-weight: 400;
		line-height: .16rem; /* 114.286% */
		letter-spacing: -0.56px;
    }

    .password {
        margin-top: .24rem;
        color: #1A1A1A;
        font-size: .14rem;
        font-weight: 500;
		line-height: 100%; /* 14px */
		letter-spacing: -0.56px;
    }

    .input {
        margin-top: .08rem;

        ::v-deep .el-input__inner {
            color: rgba(26, 26, 26, 0.40);
            font-size: .16rem;
            font-weight: 400;
            width: 3.36rem;
            height: .48rem;
        }
    }


    .button {
        border-radius: 8px;
        height: .48rem;
        background: #FF3263;
        margin-top: .24rem;
        width: 4.48rem;
        color: #FEFEFE;
        // .text {
        //   color: #FEFEFE;
        //   font-size: .14rem;
        //   line-height: .48rem;
        // }
        color: #FEFEFE;
        font-family: Rubik;
        font-size: .14rem;
        font-style: normal;
        font-weight: 400;
        line-height: .16rem; /* 114.286% */
    }
}


.mobile{
  .page{
    align-items: flex-start;
  }

  .box {
    width: 3.36rem;

    .prompt {
      font-family: Rubik;
      font-size: 24px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    .logo {
      padding-top: .64rem;
      width: .76rem;
    }

    .button {
      width: 3.36rem;
    }
  }
}

</style>
