<template>
  <div class="page">
    <kt-header></kt-header>
    <div class="title">
      <span class="title-name" v-if="homePage[0]">{{homePage[0].dictValue}}</span>
      <span class="update-time">Latest update on April 28, 2023</span>
    </div>
    <div class="box">
			<div class="text"  v-if="homePage[1]" v-html="homePage[1].dictValue">
			</div>
      <!-- <div class="text">
        <span class="first-word">Important: </span>
        <span class="text-content"> By visiting, using or opening an account at Kenta Tech Ltd.'s ("Company" or "we") website ("Website") you ("you") consent to the terms and conditions of this Privacy Policy and consent that all personally identifiable information ("PII") that you submit or that is processed or collected through the Website, may be processed by the Company and its affiliates in the manner and for the purposes described in the following Privacy Policy.</span>
      </div>
      <div class="text">
        <span class="text-content">we define "PII" to mean any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</span>
      </div>
      <div class="text">
        <span class="text-content">You are not legally required to provide us with PII, however, the website requires you to do so pursuant to this Privacy Policy. In these cases, if you choose to withhold any PII requested by us, it may not be possible for you to access certain features of the website. If you do not agree to the terms and conditions set forth herein please do not use the website.</span>
      </div>
      <div class="text">
        <span class="text-content">We recognize that privacy is important. This Privacy Policy applies to all of the services, information, tools, features and functionality available on the Website offered by the Company or its subsidiaries or affiliated companies and covers how PII that the Company collects and receives, including in respect of any use of the Website, is treated. If you have any questions about this Privacy Policy, please feel free to contact us at: hello@kenta.vip.</span>
      </div>
      <div class="instructions">
        <span class="text-content">1. Information We Collect and How We Use It.</span>
      </div>
      <div class="text">
        <span class="text-content">In order to provide and improve our Website, understanding usage trends, user preferences, in order to adjust and personalize use of the Website, marketing and customer relations purposes, we may collect and process PII, including the following types of information:</span>
      </div>
      <div class="instructions-content">
        <div class="content">
          <span class="text-header">• Information You Provide.</span>
          <span class="text-content"> As part of the registration to the Website we ask you to provide or we may collect PII, including: full name, age, country of residence, email address and various field of optional information.</span>
        </div>
        <div class="content">
          <span class="text-header">• Information Received from Third Parties.</span>
          <span class="text-content"> We sometimes supplement the information that you provide with information that is received from third parties. If you access the Website through any third party platforms (such as Facebook or Google), or interact with any third party platforms or other social media plug-in in the Service (such as a Facebook "Like" button) we may receive information from your respective social media or third party platforms account, including your account information, email, name, photo and any information defined as public pursuant to the policies of such third party platforms and/your settings in the respective third party platform.</span>
        </div>
        <div class="content">
          <span class="text-header">• User Communications.</span>
          <span class="text-content"> When you send email or other communication to the Company, we may retain those communications in order to process your inquiries, respond to your requests and improve our Website. When subscribing to Company’s mailing lists on our websites we collect your e-mail address and country of your residence. We may send you news and updates in respect of the Website. We may also send you newsletters and promotional communications, you may opt-out of this service, including participation in mailing list, at any time by submitting a request at the following link [please complete]. Please note that even if you opt-out of receiving the foregoing communications, we may still send you a response to any “Contact Us” request as well as administrative e-mails (e.g. in connection with password reset request) necessary to facilitate your use of the Website.</span>
        </div>
        <div class="content">
          <span class="text-header">• User Information.</span>
          <span class="text-content"> When you use the Website, we may automatically receive and record information regarding your usage and information from your browser or device, including without limitation information and statistics about your online/offline status, impressions, your IP address, geo-location data, internet service provider, pages visited, date and duration of the visit, type of browser or device, your regional and language settings and software and hardware attributes. Our systems may automatically record and store technical information regarding the method and nature of your use of the Website. An IP address is a numeric code that identifies your browser or device on a network, or in this case, the Internet. Your IP address is also used to gather broad demographic information. The Company uses all of the PII that we collect to understand the usage trends and preferences of our users.</span>
        </div>
        <div class="content">
          <span class="text-header">• Aggregate and Analytical Data.</span>
          <span class="text-content"> In an ongoing effort to better understand and serve the users of the Website, we often conduct research on demographics, interests and behavior of users and of your customers (not on an individual basis), based on the PII and other information provided to us. This research may be compiled and analyzed on an aggregate basis, and we may share this aggregate data with our affiliates, agents and business partners. This aggregate information does not identify you personally. We may also disclose aggregated user statistics in order to describe our website to current and prospective business partners, and to other third parties for other lawful purposes. We may also use such information for monetization purposes.</span>
        </div>
      </div> -->
    </div>
    <kt-footer></kt-footer>
  </div>
</template>

<script>
	import {dictList} from '@/api/index';
    export default{
        data(){
            return {
							homePage: [],
            }
        },
				mounted() {
				  this.init();
				},
        methods:{
					init(){
						dictList({dictType: 'terms'}).then((res) => {
						  this.homePage = res.data;
							console.log(" this.homePage",this.homePage)
						})
					},
            toHome(){
                this.$router.push({path:'/'})
            },
        },
    }
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
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

      .logo {
          margin-left: .32rem;
          height: .32rem;

          img {
              height: 100%;
          }
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
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 3.36rem;
    background-color: #F5F5F5;
    .title-name {
      font-size: .56rem;
      line-height: 100%; /* 56px */
      letter-spacing: -2.24px;
    }
    .update-time {
      margin-top: .24rem;
      color: rgba(26, 26, 26, 0.60);
      font-size: .14rem;
    }
  }
  .box {
    padding: .96rem 2rem;
    .text {
      .first-word {
        font-size: .20rem;
        font-weight: 700;
      }
      .text-content {
        font-size: .20rem;
      }

    }
    .text {
      line-height: 140%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.24rem;
      width: 6.8rem;
    }
    .instructions {
      margin-top: .40rem;
      .text-content {
        font-size: .32rem;
        letter-spacing: -1.28px;
      }
    }
    .instructions-content {

      .content {
        margin-top: .24rem;
        padding-left: 0.16rem;

        .text-header {
          font-size: .20rem;
          font-weight: 700;
          display: inline;
          margin-left: -0.14rem;
        }
        .text-content {
          font-size: .20rem;
        }
      }
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
     .title {
       height: 1.72rem;
       .title-name {
         font-size: .24rem;
         letter-spacing: -0.96px;
       }
       .update-time {
         margin-top: .16rem;
       }
     }
     .box {
       padding: .2rem;
       .text {
         .first-word {
           font-size: .16rem;
         }
         .text-content {
           font-size: .16rem;
         }
       }
       .text {
        width: 100% !important;
        word-break: break-all;
        margin: 0px !important;
        //  margin-top: .24rem;
        //  .text-content {
        //    font-size: .20rem;
        //  }
       }
       .instructions {
         .text-content {
           font-size: .20rem;
           letter-spacing: -0.8px;
         }
       }
       .instructions-content {

         .content {
           .text-header {
             font-size: .16rem;
           }
           .text-content {
             font-size: .16rem;
           }
         }
       }
     }

     .footer {
         padding: 0.64rem .2rem .24rem;
         flex-direction: column-reverse;

         // position: relative;
         .footer-left {
             // position: absolute;
             margin-top: .4rem;
             display: flex;
             flex-direction: row;
             align-items: flex-end;
             left: 0;
             bottom: 0;

             .share {
                 a {
                     width: .24rem;
                     height: .24rem;
                     margin-left: .08rem;
                 }
             }
         }

         .footer-right {
             justify-content: space-between;
             width: 100%;

             .item-list {
                 flex: none;
             }
         }
     }
 }
  .footer {
      background: #1A1A1A;
      padding: .64rem .32rem;
      display: flex;

      .footer-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .logo {
              width: .76rem;
          }

          .copyright {
              margin-top: .16rem;
              color: rgba(254, 254, 254, 0.60);
              font-size: .14rem;
          }

          flex: 1;

          .share a {
              display: inline-block;
              width: .40rem;
              height: .40rem;
              margin-left: .10rem;
          }
      }

      .footer-right {
          width: 6rem;
          display: flex;

          .item-list {
              flex: 1;

              .item-hd {
                  color: #FEFEFE;
                  font-family: Rubik;
                  font-size: .20rem;
                  margin-bottom: .24rem;
              }

              .item {
                  margin-top: .16rem;
              }

              .item a {
                  color: rgba(254, 254, 254, 0.60);
                  font-family: Rubik;
                  font-size: .14rem;
                  text-decoration: none;
              }

              .item a:hover {
                  text-decoration: underline;
              }
          }
      }
  }
</style>
