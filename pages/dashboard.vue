<template>
    <div class="page">
        <!-- header start-->
        <kt-header></kt-header>
        <!-- header end-->
        <div class="nav-box">
            <div class="container-box">
                <div class="item-list">
                    <div class="item" :class="pageIndex == 0 ? 'active' : ''" @click="handleType(0)">
                        Bookings & Trips
                    </div>
                    <div class="item" :class="pageIndex == 1 ? 'active' : ''" @click="handleType(1)">
                        My Profile
                    </div>
                    <div class="item" :class="pageIndex == 2 ? 'active' : ''" @click="handleType(2)">
                        Membership & Rewards
                    </div>
                    <div class="item" :class="pageIndex == 3 ? 'active' : ''" @click="handleType(3)">
                        Saved
                    </div>
                    <div class="item" :class="pageIndex == 4 ? 'active' : ''" @click="handleType(4)">
                        Sign Out
                    </div>
                </div>
            </div>
        </div>

        <div class="member-box container-box" v-if="pageIndex==0">
            <div class="hd">My Trips & Bookings</div>
            <div class="item-list">
                <div class="item-hd">Request for travel experts</div>
                <div class="item">
                    <div class="item-flex">
                        <div class="item-title">
                            Customized trip for a group of 5 adults
                        </div>
                        <div class="item-desc">Trip request to Las Vegas, US</div>
                    </div>
                    <div class="item-btns">
                        <el-button type="primary">VIEW</el-button>
                        <!-- <el-button class="btn-default" type="primary">VIEW MESSAGES</el-button> -->
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="item-list">
                <div class="item-hd">Saved travel offers</div>
                <div class="item">
                    <div class="item-flex">
                        <div class="item-title">
                            Bellagio Hotel & Casino <label class="item-status"><span class="lab">STATUS：</span><span class="item-state">PENDING</span></label>
                        </div>
                        <div class="item-desc"><span class="item-tag">Hotel</span><span>23 Aug - 28 Aug</span><span class="split">5 Guests</span></div>
                    </div>
                    <div class="item-btns">
                        <el-button type="primary">BOOK NOW</el-button>
                    </div>
                </div>
                <div class="item">
                    <div class="item-flex">
                        <div class="item-title">
                            Berlin (BER) → Las Vegas (LAS)<label class="item-status"><span class="lab">STATUS：</span><span class="item-state">PENDING</span></label>
                        </div>
                        <div class="item-desc"><span class="item-tag">FLIGHT</span><span>23 Aug - 28 Aug</span><span class="split">5 Passangers</span></div>
                    </div>
                    <div class="item-btns">
                        <el-button type="primary">BOOK NOW</el-button>
                    </div>
                </div>
                <div class="item">
                    <div class="item-flex">
                        <div class="item-title">
                            Nobu Las Vegas - Japanese Restaurant<label class="item-status"><span class="lab">STATUS：</span><span class="item-state state-2">RESERVED</span></label>
                        </div>
                        <div class="item-desc"><span class="item-tag">Restaurant</span><span>26 Aug, 2023</span><span class="split">5 Guests</span></div>
                    </div>
                    <div class="item-btns">
                        <el-button class="btn-default">VIEW RESERVATION</el-button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="member-box container-box" v-if="pageIndex==1">
          <div class="hd">My Profile</div>
        </div>
        <div class="member-box container-box" v-if="pageIndex==2">
          <div class="hd">Membership & Rewards</div>
        </div>
        <div class="member-box container-box" v-if="pageIndex==3">
          <div class="hd">Saved</div>
        </div>
        <div class="member-box container-box" v-if="pageIndex==4">
          <div class="hd">Sign Out</div>
        </div>

        <kt-footer></kt-footer>
    </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name: 'AboutPage',
    data() {
        return {
            isLogin:true,
            pageIndex:0,
        }

    },
    mounted() {
    },
    methods: {
        toHome(){
            this.$router.push({path:'/'})
        },
        handleType(index){
          this.pageIndex = index;
        }
    }
}
</script>
<style lang="scss" scoped>
.page{
    background: #F5F5F5;
}

.header {
    height: .64rem;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding-right: 1.12rem;
    background: #FEFEFE;
    color: rgba(26, 26, 26, 0.60);
    font-weight: 500;
    border-bottom: .01rem solid #DADADA;
    .logo {
        margin-left: .32rem;
        height: .32rem;

        img {
            height: 100%;
        }
    }
    .user-phone{
        width: .24rem;
        height: .24rem;
        display: none;
    }
    .btn-text {
        margin-left: .24rem;
        cursor: pointer;
        font-weight: 500;
    }

    .nav-bar {
        width: .88rem;
        height: .64rem;
        display: flex;
        right: 0;
        top: 0;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-left: solid .01rem #DADADA;

        .icon-bar {
            width: .32rem;
        }
    }
    .header-right{
        display: flex;
        align-items: center;
        .message{
            display: flex;
            align-items: center;
            color: rgba(26, 26, 26, 0.60);
            font-size: .08rem;
            margin-right: .24rem;
            img{
                margin-right: .08rem;
                width: .24rem;
                height: .24rem;
            }
        }
        .el-dropdown-link{
            display: flex;
            align-items: center;
            .user-name{
                width: .4rem;
                height: .4rem;
                border-radius: 50%;
                background: rgba(255, 50, 99, 0.16);
                color: #FF3263;
                font-weight: 500;
                font-size: .24rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}

.container-box{
    max-width: 11.44rem;
    margin: 0 auto;
}
.nav-box{
    height: .48rem;
    background: #FEFEFE;
    border-bottom: solid .01rem #DADADA;
    .item-list{
        display: flex;
        .item{
            padding: 0 .16rem;
            font-size: .16rem;
            line-height: .48rem;
            cursor: pointer;
        }
        .item.active,.item:hover{
            color: #FF3263;
            border-bottom: .01rem solid #F5F5F5;
            background: #F5F5F5;
        }
    }
}
.btn-default {
    padding: .12rem .2rem;
    font-size: .14rem;
    color: #FF3263;
    border: .01rem solid #FF3263;
}
.btn-default:hover{
    background: #fafafa !important;
    color: #FF3263;
    border: .01rem solid #FF3263;
}
.member-box{
    padding: .8rem 0;
    .hd{
        font-size: .4rem;
        letter-spacing: -.016rem;
    }
    .line{
        height: .01rem;
        background: rgba(26, 26, 26, 0.16);
        margin: .4rem 0;
    }
    .item-list{
        .item-hd{
            margin-top: .4rem;
            margin-bottom: .24rem;
            font-size: .24rem;
        }
        .item{
            background: #FEFEFE;
            padding: .32rem .24rem;
            border-radius: .12rem;
            margin-top: .16rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .item-status{
                margin-left: .12rem;
                font-size: .12rem;
                .lab{
                    color: rgba(26, 26, 26, 0.60);
                    display: none;

                }
            }
            .item-state{
                padding: .04rem .08rem;
                border-radius: .04rem;
                background: rgba(26, 26, 26, 0.08);
                color: rgba(26, 26, 26, 0.60);
                label{
                    display: none;
                }
            }
            .item-state.state-2{
                color: #2C9056;
                background: rgba(44, 144, 86, 0.16);
            }
            .item-tag{
                padding: .04rem .08rem;
                border-radius: .04rem;
                color: #3451FF;
                font-size: .12rem;
                margin-right: .08rem;
                background: rgba(52, 81, 255, 0.16);

            }
            .item-flex{
                flex: 1;
                .item-title{
                    font-size: .2rem;
                }
                .item-desc{
                    margin-top: .08rem;
                    font-size: .14rem;
                    color: rgba(26, 26, 26, 0.60);
                    display: flex;
                    align-items: center;
                    .split{
                        position: relative;
                        padding-left: .2rem;
                    }
                    .split::before{
                        position: absolute;
                        left: .08rem;
                        top: 50%;
                        margin-top: -.02rem;
                        display: block;
                        content: '';
                        width: .04rem;
                        height: .04rem;
                        background: #1A1A1A;
                        color: #1A1A1A;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 11.44rem) {
    .container-box{
        padding-left:.15rem;
        padding-right:.15rem;
    }
}

.mobile {
    .page {
        width: 3.75rem;
        overflow: hidden;
    }

    .header {
        height: .48rem;

        .logo {
            height: .24rem;
        }

        .header-right {
            display: none;
        }

        .nav-bar {
            border-left: none;
            width: .56rem;
            height: .48rem;

            .icon-bar {
                width: .2rem;
            }
        }
    }
    .header.login{
        position: relative;
        padding-left: 1rem;
        .header-right{
            display: flex;
            height: 100%;
            flex-direction: row-reverse;
            position: absolute;
            left: 0;
            top: 0;
            .el-dropdown-link{
                padding: .08rem;
                border-right: solid 1px #DADADA;
                .user-name{
                    width: .32rem;
                    height: .32rem;
                    font-size: .16rem;
                }
                .el-icon-arrow-down{
                    font-size: .16rem;
                }
            }
            .message{
                margin-left: .16rem;
                img{
                    width: .16rem;
                    height: .16rem;
                }
                span{
                    display: none;
                }
            }
        }
        .user-phone{
            position: absolute;
            right: .64rem;
            display: block;
        }
        .logo{
            position: absolute;
            left: 50%;
            margin-left: 0;
            transform: translateX(-50%);
        }
        .nav-bar{
            border-left: solid 1px #DADADA;
        }
    }
    .nav-box{
        display: none;
    }
    .member-box{
        padding: .4rem .2rem;
        .hd{
            font-size: .24rem;
            text-align: center;
        }
        .item-list{
            .item-hd{
                margin-top: .4rem;
                margin-bottom: .16rem;
                font-size: .18rem;
            }
            .item{
                position: relative;
                padding: .16rem;
                padding-bottom: .8rem;
                border-radius: .08rem;
                .item-title{
                    font-size: .16rem;
                }
                .item-desc{
                    font-size: .14rem;
                }
                .item-btns{
                    position: absolute;
                    right: .16rem;
                    bottom: .16rem;
                }
                .el-button{
                    padding: .12rem .2rem;
                    font-size: .14rem;
                    border-radius: .08rem;
                }
                .item-status{
                    position: absolute;
                    left: .16rem;
                    bottom: .16rem;
                    display: flex;
                    align-items: center;
                    margin-left: 0;
                    .lab{
                        display: inline;
                    }
                }
            }
        }
    }
    .box-hd {
        font-size: .24rem;
    }

    .box-desc {
        font-size: .16rem;
    }

}

</style>
