<template>
  <div class="page">
    <kt-header></kt-header>
    <div class="body">

      <div v-if="messageList.length == 0" class="box chat-wrapper">
        <div class="no-message-div">
          <center>
            <img src="~assets/images/no-message.svg" alt="">
            <p>You currently have no message.</p>
            <p>Once a message will be sent.we will notify you via email.</p>
            <p>this is a real-time chat and messageing system. it will be activated</p>
            <p>when booking is activated,of concierge is requested</p>
          </center>
        </div>
      </div>

      <div v-if="messageList.length > 0" class="box chat-wrapper">
        <div v-if="activeVisible==true" class="active-box">
          <div class="head">
            Active Enquiries
            <svg @click="activied()" xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32" fill="none">
              <rect x="0.5" y="0.5" width="47" height="31" rx="5.5" fill="#FEFEFE" stroke="#DADADA" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24 24C28.4182 24 32 20.4182 32 16C32 11.5817 28.4182 8 24 8C19.5817 8 16 11.5817 16 16C16 17.2798 16.3005 18.4893 16.8348 19.562C16.9768 19.847 17.024 20.1729 16.9417 20.4805L16.4652 22.2614C16.2584 23.0344 16.9656 23.7416 17.7387 23.5348L19.5195 23.0583C19.8271 22.976 20.153 23.0233 20.438 23.1652C21.5107 23.6995 22.7202 24 24 24ZM20.8 17C20.4686 17 20.2 17.2686 20.2 17.6C20.2 17.9314 20.4686 18.2 20.8 18.2H25.2C25.5314 18.2 25.8 17.9314 25.8 17.6C25.8 17.2686 25.5314 17 25.2 17H20.8ZM20.2 14.8C20.2 14.4686 20.4686 14.2 20.8 14.2H27.2C27.5314 14.2 27.8 14.4686 27.8 14.8C27.8 15.1314 27.5314 15.4 27.2 15.4H20.8C20.4686 15.4 20.2 15.1314 20.2 14.8Z" fill="#FF3263" />
            </svg>
          </div>
          <div class="select">
            <div :class="selected=='All'?'confirm':'unconfirm'" @click="handle('All')">All</div>
            <div :class="selected=='Unread'?'confirm':'unconfirm'" @click="handle('Unread')">Unread</div>
          </div>
          <el-input v-model="searchParam" placeholder="Search">
            <template #prefix>
              <svg style="margin-top: .12rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.5303 10.5407L14 14M12 7C12 9.7614 9.7614 12 7 12C4.23857 12 2 9.7614 2 7C2 4.23857 4.23857 2 7 2C9.7614 2 12 4.23857 12 7Z" stroke="#FF3263" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </el-input>
          <div class="chat-user">
            <div class="user-avater"><img src="../assets/images/message-chat.png" /></div>
            <div class="user-right">
              Ilia Bortnikov
              <div class="sub">Travel Expert - Las Vegas</div>
            </div>
          </div>
          <div class="chat-user" :class="'default'">
            <div class="user-avater"><img src="../assets/images/message-chat.png" /></div>
            <div class="user-right">
              Kenta
              <div class="sub">Trip Expert - Las Vegas</div>
            </div>
          </div>
        </div>
        <div class="chat-box" :class="activeVisible==false?'box-1':'box-2'">
          <div class="showall" v-if="activeVisible==false" @click="activied()">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="40" viewBox="0 0 56 40" fill="none">
              <rect x="0.5" y="0.5" width="55" height="39" rx="5.5" fill="#FEFEFE" stroke="#DADADA" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28 32C34.6274 32 40 26.6274 40 20C40 13.3726 34.6274 8 28 8C21.3726 8 16 13.3726 16 20C16 21.9196 16.4507 23.7339 17.2522 25.343C17.4651 25.7706 17.536 26.2593 17.4125 26.7207L16.6978 29.392C16.3875 30.5516 17.4484 31.6124 18.608 31.3022L21.2793 30.5875C21.7407 30.464 22.2295 30.5349 22.657 30.7478C24.266 31.5493 26.0804 32 28 32ZM23.2 21.5C22.7029 21.5 22.3 21.903 22.3 22.4C22.3 22.897 22.7029 23.3 23.2 23.3H29.8C30.297 23.3 30.7 22.897 30.7 22.4C30.7 21.903 30.297 21.5 29.8 21.5H23.2ZM22.3 18.2C22.3 17.703 22.7029 17.3 23.2 17.3H32.8C33.297 17.3 33.7 17.703 33.7 18.2C33.7 18.697 33.297 19.1 32.8 19.1H23.2C22.7029 19.1 22.3 18.697 22.3 18.2Z" fill="#FF3263" />
            </svg>
          </div>
          <div class="message-container">
            <div :class="item.belongTo==0?'message-box':'message-box2'" v-for="(item,index) in messageList" :key="index">
              <div v-if="item.belongTo==0" class="user-left">
                <img src="../assets/images/message-chat.png" />
              </div>
              <div v-html="item.content" class="chatting-box">

              </div>
              <div v-if="item.belongTo==1" class="user-right">
                <!--<img src="../assets/images/message-chat.png"/> -->
                <div class="icon">
                  <div class="icon-text">
                    {{userName.slice(0,1).toUpperCase()}}
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="message-box" >
              <div class="chatting-box2">
               {{item.content}}
              </div>
              <div class="user-right">
                <img src="../assets/images/message-chat.png"/>
              </div>
            </div> -->
            <!-- <div class="block"></div> -->
          </div>
          <div class="chat-input">
            <el-input class v-model="message" placeholder="Type your message here..." @keyup.enter.native="sendMsg"></el-input>
            <el-button class="btns" @click="sendMsg">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.66687 8.00016H3.61248M3.49756 8.53163L2.82772 10.5326C2.46085 11.6284 2.27742 12.1764 2.40906 12.5138C2.52337 12.8068 2.7689 13.029 3.07187 13.1136C3.42074 13.2109 3.94767 12.9738 5.00154 12.4996L11.7578 9.45923C12.7865 8.9963 13.3008 8.7649 13.4597 8.44336C13.5979 8.16403 13.5979 7.83623 13.4597 7.5569C13.3008 7.23543 12.7865 7.00396 11.7578 6.54106L4.98989 3.49552C3.93919 3.02271 3.41385 2.7863 3.06533 2.88328C2.76265 2.9675 2.51715 3.18907 2.40243 3.48156C2.27034 3.81835 2.45181 4.3651 2.81477 5.45861L3.49886 7.5197C3.56119 7.7075 3.59237 7.80143 3.60467 7.89743C3.61559 7.9827 3.61547 8.06896 3.60434 8.15416C3.59179 8.25016 3.56038 8.34396 3.49756 8.53163Z" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </el-button>
          </div>
        </div>
        <div class="information-box">
          <div class="title">Participating in the conversation</div>
          <div class="User-box">
            <div class="user" v-if="staffName">
              <div class="avater2">
                <div class="user-name" v-if="staffName">
                  {{ staffName.slice(0, 1).toUpperCase() }}
                </div>
              </div>
              <div>
                <div class="h5">{{ staffName }}</div>
                <div class="h3">Travel Expert</div>
              </div>
            </div>
            <div class="user" v-if="customer">
              <div class="avater2">
                <div class="user-name">
                  {{ str1 }}
                </div>
              </div>
              <div>
                <div class="h5">{{ customer.memberName }}</div>
                <div class="h3">Traveller</div>
              </div>
            </div>
          </div>
          <div class="title2">Your trip plan</div>
          <!-- <img src="../assets/images/Rectangle 725.png"/> -->
          <img :src="destinationPic" />
          <div class="trip-box">
            <div class="box-item">
              <div class="item-left">Destination</div>
              <div class="item-right">{{ city }}, {{ country }}</div>
            </div>
            <div class="box-item">
              <div class="item-left">No. of people</div>
              <div class="item-right">
                <font v-if="order.adultsNum>0">{{ order.adultsNum }} Adults</font>
                <font v-if="order.adultsNum>0&&order.childrenNum>0">,</font>
                <font v-if="order.childrenNum>0">{{ order.childrenNum }} children</font>
                (
                <font v-if="order.peopleNumType==0">Single</font>
                <font v-if="order.peopleNumType==1">Couple</font>
                <font v-if="order.peopleNumType==2">Family</font>
                <font v-if="order.peopleNumType==3">Group</font>
                )
              </div>
            </div>
            <div class="box-item">
              <div class="item-left">Travel dates</div>
              <div class="item-right">{{ order.approxMonth }}, {{ order.approxDuration }} Days</div>
            </div>
            <div class="box-item">
              <div class="item-left">Age group</div>
              <div class="item-right" v-if="order.adultsPrimaryAge==0">21-35 yrs</div>
              <div class="item-right" v-if="order.adultsPrimaryAge==1">35-55 yrs</div>
              <div class="item-right" v-if="order.adultsPrimaryAge==2">55+ yrs</div>
            </div>
            <div class="box-item">
              <div class="item-left">Experiences</div>
              <div class="item-right" v-if="order.experiencesType==0">mostly Casions</div>
              <div class="item-right" v-if="order.experiencesType==1">Casinos, Events & Nightilfe</div>
              <div class="item-right" v-if="order.experiencesType==2">Casinos & Fine Dining</div>
            </div>
            <div class="box-item">
              <div class="item-left">Accommodation</div>
              <div class="item-right" v-if="order.accommodationType==0">Basic</div>
              <div class="item-right" v-if="order.accommodationType==1">Comfortable</div>
              <div class="item-right" v-if="order.accommodationType==2">Luxury</div>
              <div class="item-right" v-if="order.accommodationType==3">VIP</div>
            </div>
            <div class="box-item">
              <div class="item-left">Budget Per Person</div>
              <div class="item-right">USD {{ order.budgetPerPerson }}</div>
            </div>
            <div class="box-item">
              <div class="item-left">Planning Stage</div>
              <div class="item-right" v-if="order.tripPlanningStage==0">need more information</div>
              <div class="item-right" v-if="order.tripPlanningStage==1">ready to start planning</div>
              <div class="item-right" v-if="order.tripPlanningStage==2">Ready to Book</div>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-mobile-wrapper">
        <div>
          <div class="chat-tabs">
            <div @click="currentTab = 1" :class="currentTab === 1? 'chat-tab chat-tab-active':'chat-tab'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_3378_4688)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3307 2.66669C15.3307 1.56212 14.4353 0.666687 13.3307 0.666687H2.66406C1.5595 0.666687 0.664062 1.56212 0.664062 2.66669V13.3334C0.664062 14.438 1.5595 15.3334 2.66406 15.3334H13.3307C14.4353 15.3334 15.3307 14.438 15.3307 13.3334V2.66669ZM13.9974 2.66669C13.9974 2.2985 13.6989 2.00002 13.3307 2.00002H2.66406C2.29588 2.00002 1.9974 2.2985 1.9974 2.66669V13.3334C1.9974 13.7016 2.29588 14 2.66406 14H13.3307C13.6989 14 13.9974 13.7016 13.9974 13.3334V2.66669Z" :fill="currentTab === 1?'#FF3263':'#9D9D9D'" />
                  <path d="M10.6654 5.33335C10.6654 6.80609 9.47143 8.00002 7.9987 8.00002C6.52594 8.00002 5.33203 6.80609 5.33203 5.33335C5.33203 3.86059 6.52594 2.66669 7.9987 2.66669C9.47143 2.66669 10.6654 3.86059 10.6654 5.33335ZM6.65014 5.33335C6.65014 6.07815 7.2539 6.68189 7.9987 6.68189C8.7435 6.68189 9.34723 6.07815 9.34723 5.33335C9.34723 4.58856 8.7435 3.98479 7.9987 3.98479C7.2539 3.98479 6.65014 4.58856 6.65014 5.33335Z" :fill="currentTab === 1?'#FF3263':'#9D9D9D'" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.597 11.1206C4.32437 9.21909 6.3117 8.66669 7.99761 8.66669C9.68354 8.66669 11.6709 9.21909 12.3982 11.1206C12.6313 11.7299 12.4527 12.3171 12.0885 12.7186C11.7378 13.1051 11.2119 13.3334 10.6643 13.3334H5.33094C4.78327 13.3334 4.25743 13.1051 3.90675 12.7186C3.54252 12.3171 3.36392 11.7299 3.597 11.1206ZM7.99761 10C6.47991 10 5.26364 10.4956 4.84233 11.597C4.80978 11.682 4.83431 11.7566 4.89425 11.8227C4.98089 11.9182 5.14223 12 5.33094 12H10.6643C10.853 12 11.0143 11.9182 11.1009 11.8227C11.1609 11.7566 11.1854 11.682 11.1529 11.597C10.7316 10.4956 9.51527 10 7.99761 10Z" :fill="currentTab === 1?'#FF3263':'#9D9D9D'" />
                </g>
                <defs>
                  <clipPath id="clip0_3378_4688">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Contacts
              </span>
            </div>
            <div @click="currentTab = 2" :class="currentTab === 2? 'chat-tab chat-tab-active':'chat-tab'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" v-if="currentTab === 2">
                <g clip-path="url(#clip0_3378_4656)">
                  <path d="M11.9893 7.19333V9.86C11.9893 10.0333 11.9826 10.2 11.9626 10.36C11.8093 12.16 10.7493 13.0533 8.79594 13.0533H8.52927C8.3626 13.0533 8.2026 13.1333 8.1026 13.2667L7.3026 14.3333C6.94927 14.8067 6.37594 14.8067 6.0226 14.3333L5.2226 13.2667C5.13593 13.1533 4.9426 13.0533 4.79594 13.0533H4.52928C2.40261 13.0533 1.33594 12.5267 1.33594 9.86V7.19333C1.33594 5.24001 2.23594 4.18001 4.02928 4.02667C4.18928 4.00667 4.35594 4 4.52928 4H8.79594C10.9226 4 11.9893 5.06667 11.9893 7.19333Z" stroke="#FF3263" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.654 4.52665V7.19331C14.654 9.15331 13.754 10.2066 11.9607 10.36C11.9807 10.2 11.9873 10.0333 11.9873 9.85998V7.19331C11.9873 5.06665 10.9206 3.99998 8.79398 3.99998H4.52734C4.35401 3.99998 4.18734 4.00665 4.02734 4.02665C4.18068 2.23332 5.24068 1.33331 7.19398 1.33331H11.4607C13.5873 1.33331 14.654 2.39999 14.654 4.52665Z" stroke="#9D9D9D" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 8.83319H9.006" stroke="#FF3263" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66406 8.83331H6.67006" stroke="#FF3263" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.33203 8.83331H4.33803" stroke="#FF3263" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_3378_4656">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" v-if="currentTab !== 2">
                <g clip-path="url(#clip0_3378_4656)">
                  <path d="M11.9893 7.19333V9.86C11.9893 10.0333 11.9826 10.2 11.9626 10.36C11.8093 12.16 10.7493 13.0533 8.79594 13.0533H8.52927C8.3626 13.0533 8.2026 13.1333 8.1026 13.2667L7.3026 14.3333C6.94927 14.8067 6.37594 14.8067 6.0226 14.3333L5.2226 13.2667C5.13593 13.1533 4.9426 13.0533 4.79594 13.0533H4.52928C2.40261 13.0533 1.33594 12.5267 1.33594 9.86V7.19333C1.33594 5.24001 2.23594 4.18001 4.02928 4.02667C4.18928 4.00667 4.35594 4 4.52928 4H8.79594C10.9226 4 11.9893 5.06667 11.9893 7.19333Z" stroke="#9D9D9D" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.654 4.52665V7.19331C14.654 9.15331 13.754 10.2066 11.9607 10.36C11.9807 10.2 11.9873 10.0333 11.9873 9.85998V7.19331C11.9873 5.06665 10.9206 3.99998 8.79398 3.99998H4.52734C4.35401 3.99998 4.18734 4.00665 4.02734 4.02665C4.18068 2.23332 5.24068 1.33331 7.19398 1.33331H11.4607C13.5873 1.33331 14.654 2.39999 14.654 4.52665Z" stroke="#9D9D9D" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 8.83319H9.006" stroke="#9D9D9D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66406 8.83331H6.67006" stroke="#9D9D9D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.33203 8.83331H4.33803" stroke="#9D9D9D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_3378_4656">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Messages
              </span>
            </div>
            <div @click="currentTab = 3" :class="currentTab === 3? 'chat-tab chat-tab-active':'chat-tab'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M9.8947 13.3333H4.33203C3.4127 13.3333 2.66536 12.586 2.66536 11.6666C2.66536 10.7473 3.4127 9.99998 4.33203 9.99998H8.9987C10.2854 9.99998 11.332 8.95331 11.332 7.66665C11.332 6.37998 10.2854 5.33331 8.9987 5.33331H5.75803C5.5132 5.81323 5.21001 6.26107 4.85536 6.66665H8.9987C9.55003 6.66665 9.9987 7.11531 9.9987 7.66665C9.9987 8.21798 9.55003 8.66665 8.9987 8.66665H4.33203C2.67803 8.66665 1.33203 10.0126 1.33203 11.6666C1.33203 13.3206 2.67803 14.6666 4.33203 14.6666H10.7274C10.4002 14.2552 10.1209 13.8078 9.8947 13.3333ZM3.33203 1.33331C2.22936 1.33331 1.33203 2.23065 1.33203 3.33331C1.33203 5.45865 3.33203 6.66665 3.33203 6.66665C3.33203 6.66665 5.33203 5.45798 5.33203 3.33331C5.33203 2.23065 4.4347 1.33331 3.33203 1.33331ZM3.33203 4.33331C3.20067 4.33327 3.07059 4.30735 2.94925 4.25704C2.8279 4.20673 2.71764 4.13301 2.62479 4.04009C2.53193 3.94717 2.45828 3.83687 2.40805 3.71548C2.35782 3.5941 2.33199 3.46401 2.33203 3.33265C2.33207 3.20128 2.35799 3.07121 2.4083 2.94986C2.45862 2.82851 2.53234 2.71826 2.62526 2.6254C2.71818 2.53254 2.82848 2.4589 2.94986 2.40866C3.07124 2.35843 3.20133 2.3326 3.3327 2.33265C3.598 2.33273 3.85241 2.43821 4.03994 2.62587C4.22748 2.81353 4.33279 3.06801 4.3327 3.33331C4.33261 3.59862 4.22713 3.85302 4.03947 4.04056C3.85181 4.22809 3.59734 4.3334 3.33203 4.33331Z"
                  :fill="currentTab === 3?'#FF3263':'#9D9D9D'" />
                <path d="M12.668 9.33331C11.5653 9.33331 10.668 10.2306 10.668 11.3333C10.668 13.4586 12.668 14.6666 12.668 14.6666C12.668 14.6666 14.668 13.458 14.668 11.3333C14.668 10.2306 13.7706 9.33331 12.668 9.33331ZM12.668 12.3333C12.5366 12.3333 12.4065 12.3074 12.2852 12.257C12.1638 12.2067 12.0536 12.133 11.9607 12.0401C11.8679 11.9472 11.7942 11.8369 11.744 11.7155C11.6938 11.5941 11.6679 11.464 11.668 11.3326C11.668 11.2013 11.6939 11.0712 11.7442 10.9499C11.7946 10.8285 11.8683 10.7183 11.9612 10.6254C12.0541 10.5325 12.1644 10.4589 12.2858 10.4087C12.4072 10.3584 12.5373 10.3326 12.6686 10.3326C12.9339 10.3327 13.1883 10.4382 13.3759 10.6259C13.5634 10.8135 13.6687 11.068 13.6686 11.3333C13.6685 11.5986 13.5631 11.853 13.3754 12.0406C13.1877 12.2281 12.9333 12.3334 12.668 12.3333Z" :fill="currentTab === 3?'#FF3263':'#9D9D9D'" />
              </svg>
              <span>
                Trip Details
              </span>
            </div>
          </div>
          <div v-if="currentTab === 1">
            <div class="active-box">
              <div class="head">
                Active Enquiries
                <svg @click="activied()" xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32" fill="none">
                  <rect x="0.5" y="0.5" width="47" height="31" rx="5.5" fill="#FEFEFE" stroke="#DADADA" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 24C28.4182 24 32 20.4182 32 16C32 11.5817 28.4182 8 24 8C19.5817 8 16 11.5817 16 16C16 17.2798 16.3005 18.4893 16.8348 19.562C16.9768 19.847 17.024 20.1729 16.9417 20.4805L16.4652 22.2614C16.2584 23.0344 16.9656 23.7416 17.7387 23.5348L19.5195 23.0583C19.8271 22.976 20.153 23.0233 20.438 23.1652C21.5107 23.6995 22.7202 24 24 24ZM20.8 17C20.4686 17 20.2 17.2686 20.2 17.6C20.2 17.9314 20.4686 18.2 20.8 18.2H25.2C25.5314 18.2 25.8 17.9314 25.8 17.6C25.8 17.2686 25.5314 17 25.2 17H20.8ZM20.2 14.8C20.2 14.4686 20.4686 14.2 20.8 14.2H27.2C27.5314 14.2 27.8 14.4686 27.8 14.8C27.8 15.1314 27.5314 15.4 27.2 15.4H20.8C20.4686 15.4 20.2 15.1314 20.2 14.8Z" fill="#FF3263" />
                </svg>
              </div>
              <div class="select">
                <div :class="selected=='All'?'confirm':'unconfirm'" @click="handle('All')">All</div>
                <div :class="selected=='Unread'?'confirm':'unconfirm'" @click="handle('Unread')">Unread</div>
              </div>
              <el-input v-model="searchParam" placeholder="Search">
                <template #prefix>
                  <svg style="margin-top: .12rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10.5303 10.5407L14 14M12 7C12 9.7614 9.7614 12 7 12C4.23857 12 2 9.7614 2 7C2 4.23857 4.23857 2 7 2C9.7614 2 12 4.23857 12 7Z" stroke="#FF3263" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </template>
              </el-input>
              <div class="chat-user">
                <div class="user-avater"><img src="../assets/images/message-chat.png" /></div>
                <div class="user-right">
                  Ilia Bortnikov
                  <div class="sub">Travel Expert - Las Vegas</div>
                </div>
              </div>
              <div class="chat-user" :class="'default'">
                <div class="user-avater"><img src="../assets/images/message-chat.png" /></div>
                <div class="user-right">
                  Kenta
                  <div class="sub">Trip Expert - Las Vegas</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="currentTab === 2">
            <div class="chat-box box-1">
              <div class="showall" v-if="activeVisible==false" @click="activied()">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="40" viewBox="0 0 56 40" fill="none">
                  <rect x="0.5" y="0.5" width="55" height="39" rx="5.5" fill="#FEFEFE" stroke="#DADADA" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28 32C34.6274 32 40 26.6274 40 20C40 13.3726 34.6274 8 28 8C21.3726 8 16 13.3726 16 20C16 21.9196 16.4507 23.7339 17.2522 25.343C17.4651 25.7706 17.536 26.2593 17.4125 26.7207L16.6978 29.392C16.3875 30.5516 17.4484 31.6124 18.608 31.3022L21.2793 30.5875C21.7407 30.464 22.2295 30.5349 22.657 30.7478C24.266 31.5493 26.0804 32 28 32ZM23.2 21.5C22.7029 21.5 22.3 21.903 22.3 22.4C22.3 22.897 22.7029 23.3 23.2 23.3H29.8C30.297 23.3 30.7 22.897 30.7 22.4C30.7 21.903 30.297 21.5 29.8 21.5H23.2ZM22.3 18.2C22.3 17.703 22.7029 17.3 23.2 17.3H32.8C33.297 17.3 33.7 17.703 33.7 18.2C33.7 18.697 33.297 19.1 32.8 19.1H23.2C22.7029 19.1 22.3 18.697 22.3 18.2Z" fill="#FF3263" />
                </svg>
              </div>
              <div class="message-container mobile-message">
                <div :class="item.belongTo==0?'message-box':'message-box2'" v-for="(item,index) in messageList" :key="index">
                  <div v-if="item.belongTo==0" class="user-left">
                    <img src="../assets/images/message-chat.png" />
                  </div>

                  <div v-html="item.content" class="chatting-box"></div>
                  <div v-if="item.belongTo==1" class="user-right">
                    <!--<img src="../assets/images/message-chat.png" />-->
                    <div class="icon">
                      <div class="icon-text">
                        {{userName.slice(0,1).toUpperCase()}}
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="message-box" >
                  <div class="chatting-box2">
                   {{item.content}}
                  </div>
                  <div class="user-right">
                    <img src="../assets/images/message-chat.png"/>
                  </div>
                </div> -->
                <!-- <div class="block"></div> -->
              </div>
            </div>
            <div class="chat-input">
              <el-input class v-model="message" placeholder="Type your message here..." @keyup.enter.native="sendMsg"></el-input>
              <el-button class="btns" @click="sendMsg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.66687 8.00016H3.61248M3.49756 8.53163L2.82772 10.5326C2.46085 11.6284 2.27742 12.1764 2.40906 12.5138C2.52337 12.8068 2.7689 13.029 3.07187 13.1136C3.42074 13.2109 3.94767 12.9738 5.00154 12.4996L11.7578 9.45923C12.7865 8.9963 13.3008 8.7649 13.4597 8.44336C13.5979 8.16403 13.5979 7.83623 13.4597 7.5569C13.3008 7.23543 12.7865 7.00396 11.7578 6.54106L4.98989 3.49552C3.93919 3.02271 3.41385 2.7863 3.06533 2.88328C2.76265 2.9675 2.51715 3.18907 2.40243 3.48156C2.27034 3.81835 2.45181 4.3651 2.81477 5.45861L3.49886 7.5197C3.56119 7.7075 3.59237 7.80143 3.60467 7.89743C3.61559 7.9827 3.61547 8.06896 3.60434 8.15416C3.59179 8.25016 3.56038 8.34396 3.49756 8.53163Z" stroke="#FEFEFE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </el-button>
            </div>
          </div>
          <div v-if="currentTab === 3">
            <div class="information-box">
              <div class="title">Participating in the conversation</div>
              <div class="User-box">
                <div class="user" v-if="staffName">
                  <div class="avater2">
                    <div class="user-name" v-if="staffName">
                      {{ staffName.slice(0, 1).toUpperCase() }}
                    </div>
                  </div>
                  <div>
                    <div class="h5">{{ staffName }}</div>
                    <div class="h3">Travel Expert</div>
                  </div>
                </div>
                <div class="user" v-if="customer">
                  <div class="avater2">
                    <div class="user-name">
                      {{ str1 }}
                    </div>
                  </div>
                  <div>
                    <div class="h5">{{ customer.memberName }}</div>
                    <div class="h3">Traveller</div>
                  </div>
                </div>
              </div>
              <div class="title2">Your trip plan</div>
              <!-- <img src="../assets/images/Rectangle 725.png"/> -->
              <img :src="destinationPic" />
              <div class="trip-box">
                <div class="box-item">
                  <div class="item-left">Destination</div>
                  <div class="item-right">{{ city }}, {{ country }}</div>
                </div>
                <div class="box-item">
                  <div class="item-left">No. of people</div>
                  <div class="item-right">
                    <font v-if="order.adultsNum>0">{{ order.adultsNum }} Adults</font>
                    <font v-if="order.adultsNum>0&&order.childrenNum>0">,</font>
                    <font v-if="order.childrenNum>0">{{ order.childrenNum }} children</font>
                    (
                    <font v-if="order.peopleNumType==0">Single</font>
                    <font v-if="order.peopleNumType==1">Couple</font>
                    <font v-if="order.peopleNumType==2">Family</font>
                    <font v-if="order.peopleNumType==3">Group</font>
                    )
                  </div>
                </div>
                <div class="box-item">
                  <div class="item-left">Travel dates</div>
                  <div class="item-right">{{ order.approxMonth }}, {{ order.approxDuration }} Days</div>
                </div>
                <div class="box-item">
                  <div class="item-left">Age group</div>
                  <div class="item-right" v-if="order.adultsPrimaryAge==0">21-35 yrs</div>
                  <div class="item-right" v-if="order.adultsPrimaryAge==1">35-55 yrs</div>
                  <div class="item-right" v-if="order.adultsPrimaryAge==2">55+ yrs</div>
                </div>
                <div class="box-item">
                  <div class="item-left">Experiences</div>
                  <div class="item-right" v-if="order.experiencesType==0">mostly Casions</div>
                  <div class="item-right" v-if="order.experiencesType==1">Casinos, Events & Nightilfe</div>
                  <div class="item-right" v-if="order.experiencesType==2">Casinos & Fine Dining</div>
                </div>
                <div class="box-item">
                  <div class="item-left">Accommodation</div>
                  <div class="item-right" v-if="order.accommodationType==0">Basic</div>
                  <div class="item-right" v-if="order.accommodationType==1">Comfortable</div>
                  <div class="item-right" v-if="order.accommodationType==2">Luxury</div>
                  <div class="item-right" v-if="order.accommodationType==3">VIP</div>
                </div>
                <div class="box-item">
                  <div class="item-left">Budget Per Person</div>
                  <div class="item-right">USD {{ order.budgetPerPerson }}</div>
                </div>
                <div class="box-item">
                  <div class="item-left">Planning Stage</div>
                  <div class="item-right" v-if="order.tripPlanningStage==0">need more information</div>
                  <div class="item-right" v-if="order.tripPlanningStage==1">ready to start planning</div>
                  <div class="item-right" v-if="order.tripPlanningStage==2">Ready to Book</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getLatest, loadMessage, sendMessage } from '@/api/message'

export default {
  name: 'AboutPage',
  data () {
    return {
      message: null,
      activeVisible: false,
      selected: 'All',
      searchParam: null,
      str1: "",
      destinationPic: '',
      createTime: '',
      customer: [],
      serviceMan: [],
      messageId: 0,
      staffId: 0,
      staffName: '',
      city: '',
      country: '',
      order: {
        adultsNum: 0,
        childrenNum: 0,
        peopleNumType: 3,
        budgetPerPerson: 2500,
        tripPlanningStage: 2,
      },
      interval: null,
      messageList: [
        // {
        //   belongTo:0,
        //   content:"and fashion, while the resort's renowned performance venues have hosted iconic entertainers from around the globe. The accommodations at Caesars Palace are equally impressive, offering spacious rooms and suites adorned with lavish amenities and elegant decor. Whether you're lounging by the stunning pools, attending a mesmerizing live show, or enjoying a sumptuous meal, Caesars Palace promises an all-encompassing Las Vegas experience. Its enduring charm, commitment to exceptional service, and dedication to delivering the epitome of opulence firmly establish it as a top choice for travelers seeking an unforgettable and luxurious Las Vegas vacation",
        // },
        // {
        //   belongTo:1,
        //   content:"ok",
        // },
      ],
      currentTab: 2
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.token ? true : false;
    },
    userName () {
      return this.$store.getters.name || '';
    },
  },
  mounted () {
    this.init();

    this.interval = setInterval(() => {
      if (this.messageList.length > 0) {
        this.loadMsg();
      }
    }, 1000);
  },
  destroyed () {
    //清空定时任务
    if (this.interval) {
      clearTimeout(this.interval);
      this.interval = null;
    }
  },
  methods: {
    init () {
      let memberId = sessionStorage.getItem("user_id");
      if (memberId == null) {
        this.$router.push({ path: '/login' })
      }
      loadMessage({ memberId: memberId }).then(res => {
        if (res.data.orderId) {
          this.messageId = res.data.id,
            this.staffId = res.data.staffId,
            this.customer = res.data.customer,
            this.destinationPic = res.data.destinationPic,
            this.staffName = res.data.staffName,
            this.country = res.data.country,
            this.city = res.data.city,
            this.str1 = res.data.customer.email.slice(0, 1).toUpperCase(),
            this.serviceMan = res.data.serviceMan,
            this.messageList = res.data.messageContents
          this.order = res.data.tripBookOrder
        }
        this.scrollToBottom()
      })
    },
    loadMsg () {
      getLatest({ messageId: this.messageId }).then(res => {
        let that = this
        let flag = 0;
        for (let i = this.messageList.length - 1; i >= 0; i--) {
          // console.log("that.messageList[i]",that.messageList[i])
          if (that.messageList[i].id == res.data.id) {
            flag = 1;
          }
        }
        if (flag == 0) {
          this.messageList.push(res.data);
        }
        this.scrollToBottom()
      })
    },
    sendMsg () {
      if (this.message == '' || this.message == null) {
        this.$message.warning("please enter the content")
        return;
      }
      // this.messageList.push({content:this.message,belongTo:1,})
      let param = {
        messageId: this.messageId,
        messageString: this.message,
      }
      sendMessage(param).then(res => {
        getLatest({ messageId: this.messageId }).then(res => {
          // this.messageList.push(res.data)
          this.message = null;
          this.scrollToBottom();
        })
      })
    },
    activied () {
      if (this.activeVisible == false) {
        this.activeVisible = true;
      } else {
        this.activeVisible = false;
      }
    },
    handle (flag) {
      this.selected = flag
    },
    scrollToBottom () {
      this.$nextTick(() => {
        let msg = document.querySelector('.message-container') // 获取对象
        if(window.isMobile){
          msg = document.querySelector('.mobile-message') // 获取对象
        }
        // scrollTop被卷上去的高度，scrollHeight内补被隐藏的实际元素高度
        setTimeout(() => {
          msg.scrollTo({ top: msg.scrollHeight + 200, behavior: 'smooth' });
        }, 1000);
      })
    },
    getCookie (name) {
      var cookie_start = document.cookie.indexOf(name);
      var cookie_end = document.cookie.indexOf(";", cookie_start);
      return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    }
  }
}
</script>
<style lang="scss" scoped>
.body {
  padding: 0.32rem;
  // max-width:1440px;
  margin-left:auto;
  margin-right:auto;
}

::-webkit-scrollbar {
  display: none;
}

::v-deep .el-input__inner {
  color: rgba(26, 26, 26, 0.6);
  font-family: Rubik;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 300;
  line-height: 0.24rem; /* 150% */
  border: none;
}

::v-deep .el-input__inner .search2 {
  border: none;
  color: rgba(26, 26, 26, 0.6);
  text-align: right;
  font-family: Rubik;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 400;
  font-size: 0.16rem;
}

.no-message-div {
  margin: auto;
  img {
    width: 80px;
  }
  p:nth-child(2) {
    font-weight: 600;
    font-size: 0.25rem;
  }
  p:nth-child(3) {
    font-size: 0.25rem;
  }
  p {
    line-height: 0.27rem;
  }
}

.chatting-box {
  padding: 0.16rem;
  max-width: 5.64rem;
  flex-shrink: 0;
  border-radius: 0.08rem;
  border: 0.01rem solid #dadada;
  background: #fefefe;
  box-shadow: 0.02rem 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.08);
  white-space: normal;
  word-break: break-word;

  color: rgba(26, 26, 26, 0.6);
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 22.4px */
}

.chatting-box2 {
  padding: 0.16rem;
  max-width: 6.2rem;
  flex-shrink: 0;
  border-radius: 0.08rem;
  border: 0.01rem solid #dadada;
  border-radius: 8px;
  background: rgba(255, 50, 99, 0.04);
  box-shadow: 0.02rem 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.08);
  white-space: normal;
  word-break: break-word;

  color: rgba(26, 26, 26, 0.6);
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 22.4px */
}

.box {
  display: flex;
  // width: 13.77rem;
  border-radius: 0.12rem;
  border: 1px solid rgba(26, 26, 26, 0.16);
  background: #f5f5f5;
  height: 7.61rem;
}

.showall {
  position: absolute;
  left: 0.16rem;
  top: 0.16rem;
  width: 0.56rem;
  height: 0.4rem;
  flex-shrink: 0;
}

.chat-box {
  display: flex;
  flex-direction: column;
  position: relative;
  // width: 10.45rem;
  // width: 8.29rem;
  flex-shrink: 0;

  .message-container {
    display: flex;
    flex-direction: column;
    // width: 10.45rem;
    height: 7rem;
    overflow-y: auto;
    overflow-x: hidden;
    // padding-bottom: 0.22rem;
    padding-bottom: 100px;
  }

  .message-box {
    display: flex;
    float: left;
    margin-left: 0.44rem;
    margin-top: 0.32rem;
  }

  .message-box2 {
    display: flex;
    // float: right;
    margin-left: auto;
    margin-top: 0.32rem;
    margin-right: 0.44rem;
  }

  .user-left {
    margin-right: 0.48rem;
    width: 0.56rem;
    height: 0.56rem;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .user-right {
    margin-left: 0.48rem;
    width: 0.56rem;
    height: 0.56rem;
    flex-shrink: 0;
    border-radius: 50%;
    .icon {
      position: relative;
      width: 0.6rem;
      height: 0.6rem;
      background-color: rgba(255, 50, 99, 0.16);
      border-radius: 50%;

      .icon-text {
        text-align: center;
        color: #ff3263;
        font-size: 0.24rem;
        font-weight: 500;
        line-height: 0.6rem;
      }
    }
  }

  .block {
    width: 100%;
    height: 0.55rem;
  }

  .chat-input {
    width: 100%;
    position: absolute;
    border-bottom-left-radius: 0.12rem;
    bottom: 0;
    background-color: #fefefe;
    display: flex;
    height: 0.55rem;
    padding: 0.08rem 0.07rem 0.07rem 0.08rem;

    .btns {
      display: flex;
      width: 1.5rem;
      height: 0.4rem;
      flex-shrink: 0;
      border-radius: 0.08rem;
      background: #ff3263;
      color: #fefefe;
      font-family: Rubik;
      font-size: 0.14rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.16rem; /* 114.286% */
    }
  }
}

.box-1 {
  // width: 10.45rem;
  flex: 1;
  min-width: 0;
}

.box-2 {
  width: 8.29rem;
}

.active-box {
  margin-right: auto;
  width: 2.16rem;
  height: 7.61rem;
  border-radius: 0.12rem 0 0 0.12rem;
  border: 0.01rem solid #dadada;
  background: #f5f5f5;

  .head {
    padding: 0.04rem;
    display: flex;
    align-items: center;
    padding-left: 0.16rem;
    justify-content: space-between;
    border-radius: 0.11rem 0 0 0;
    border: 0.01rem solid #dadada;
    background: #fafafa;
    color: #1a1a1a;
    text-align: right;
    font-family: Rubik;
    font-size: 0.14rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.16rem; /* 114.286% */
  }

  .select {
    display: flex;
    padding: 0.04rem;
    margin: 0.04rem;
    width: 2.08rem;
    height: 0.4rem;
    border-radius: 8px;
    background: rgba(26, 26, 26, 0.04);

    .confirm {
      flex: 1;
      width: 0.96rem;
      height: 0.32rem;
      border-radius: 6px;
      border: 1px solid #dadada;
      background: #fefefe;
      color: #1a1a1a;
      text-align: center;
      font-family: Rubik;
      font-size: 0.14rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.32rem; /* 114.286% */
    }

    .unconfirm {
      flex: 1;
      width: 0.96rem;
      height: 0.32rem;
      color: rgba(26, 26, 26, 0.6);
      text-align: center;
      font-family: Rubik;
      font-size: 0.14rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.32rem; /* 114.286% */
    }
  }

  .chat-user {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 0.16rem;
    height: 0.56rem;
    border: 0.01rem solid #dadada;
    background: #fefefe;
    color: #1a1a1a;
    font-family: Rubik;
    font-size: 0.12rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.16rem; /* 133.333% */
    .user-avater {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }

    .user-right {
      margin-left: 0.08rem;
    }

    .sub {
      color: #1a1a1a;
      font-family: Rubik;
      font-size: 0.12rem;
      font-style: normal;
      font-weight: 300;
      line-height: 0.16rem; /* 133.333% */
    }
  }

  .chat-user &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 0.02rem;
    height: 0.54rem;
    background: #ff3263;
  }

  .chat-user.default {
    border: 1px solid #dadada;
    background: #f5f5f5;
    color: rgba(26, 26, 26, 0.6);

    .sub {
      color: rgba(26, 26, 26, 0.6);
    }
  }
}

.information-box {
  margin-left: auto;
  width: 3.3rem;
  flex-shrink: 0;
  color: #1a1a1a;
  font-family: Rubik;
  font-size: 0.14rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.16rem; /* 114.286% */
  border-radius: 0 0.12rem 0.12rem 0;
  border: 1px solid rgba(26, 26, 26, 0.16);
  background: #fefefe;

  .title {
    height: 0.4rem;
    padding: 0.12rem 0.23rem;
    border-radius: 0px 0.11rem 0px 0px;
    border-bottom: 1px solid #dadada;
    background: #fafafa;
  }

  .title2 {
    height: 0.4rem;
    padding: 0.12rem 0.23rem;
    border-bottom: 1px solid #dadada;
    background: #fafafa;
  }

  img {
    width: 3.3rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .User-box {
    padding: 0 0.25rem;
    border: 0.01rem solid #dadada;
    height: 1.44rem;
    overflow-y: auto;

    .user {
      display: flex;
      height: 0.72rem;
      border-bottom: 0.01rem solid #dadada;
      align-items: center;

      .avater {
        width: 0.4rem;
        height: 0.4rem;
        flex-shrink: 0;
        border-radius: 0.4rem;
        // background-image: ;
      }

      .avater2 {
        margin-right: 0.08rem;

        .user-name {
          width: 0.32rem;
          height: 0.32rem;
          background: rgba(255, 50, 99, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #ff3263;
          font-size: 0.16rem;
          font-weight: 500;
        }
      }
    }
  }

  .h5 {
    margin-top: 0.05rem;
    margin-left: 0.08rem;
    color: rgba(0, 0, 0, 1);
    font-size: 0.14rem;
  }

  .h3 {
    margin-top: 0.05rem;
    margin-left: 0.08rem;
    color: #1a1a1a;
    font-family: Rubik;
    font-size: 0.14rem;
    font-style: normal;
    font-weight: 300;
    line-height: 0.16rem; /* 114.286% */
  }

  .trip-box {
    // border-radius: 0 0 .12rem 0;
    // border: .01rem solid rgba(26, 26, 26, 0.16);
    // background: #FEFEFE;
    padding: 0.12rem 0.24rem 0 0.24rem;

    .box-item {
      height: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 0.01rem solid rgba(26, 26, 26, 0.16);

      .item-left {
        color: #1a1a1a;
        font-family: Rubik;
        font-size: 0.14rem;
        font-style: normal;
        font-weight: 300;
        line-height: 0.16rem; /* 114.286% */
      }
    }
  }
}

.chat-wrapper {
  display: flex;

  .chat-input {
    ::v-deep {
      .el-button {
        span {
          display: flex;
          align-items: center;
          svg {
          }
        }
      }
    }
  }
}

.chat-mobile-wrapper {
  display: none;
}

.mobile {
  .body {
    padding: 0;
  }

  .chat-wrapper {
    display: none;
  }

  .chat-mobile-wrapper {
    display: flex;
    flex-direction: column;
    background: #f5f5f5;

    .box-1 {
      width: auto;

      .showall {
        display: none;
      }
    }

    .active-box {
      width: 100%;
    }

    .message-container {
      height: calc(100vh - 1.4rem);

      .message-box {
        margin-left: 0.2rem;

        .user-left {
          margin-right: 0.16rem;
          width: 0.4rem;
          height: 0.4rem;
        }

        .chatting-box {
          padding: 0.12rem;
          font-size: 0.14rem;
          max-width:300px;
        }
      }

      .message-box2 {
        margin-right: 0.2rem;

        .user-right {
          margin-left: 0.16rem;
          width: 0.4rem;
          height: 0.4rem;
          font-size: 0.14rem;

          .icon {
            width:40px;
            height:40px;
            margin-top:4px;

            .icon-text{
              line-height: 1.5;
            }
          }
        }

        .chatting-box {
          padding: 0.12rem;
        }
      }
    }

    .information-box {
      margin-left: 0;
      width: 100%;
      padding: 0.17rem 0.2rem;
      margin-bottom: 0.24rem;
      border: 0;
      background: #f5f5f5;

      > div {
        background-color: #ffffff;
      }

      .title2 {
        margin-top: 0.2rem;
      }

      img {
        width: 100%;
      }
    }

    .chat-tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0.32rem;
      border-bottom: 1px solid #dadada;
      background: #fefefe;

      .chat-tab {
        width: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.24rem;

        svg {
          width: 0.16rem;
          height: 0.16rem;
          margin-right: 0.04rem;
        }

        span {
          color: #9d9d9d;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 133.333% */
        }
      }

      .chat-tab-active {
        svg {
          fill: #ff3263;
        }

        span {
          color: #ff3263;
        }
      }
    }

    .chat-input {
      width: 100%;
      position: absolute;
      border-bottom-left-radius: 0.12rem;
      bottom: 0;
      background-color: #fefefe;
      display: flex;
      height: 0.55rem;
      padding: 0.08rem 0.07rem 0.07rem 0.08rem;

      .btns {
        display: flex;
        justify-content: center;
        width: 0.48rem;
        height: 0.4rem;
        flex-shrink: 0;
        border-radius: 0.08rem;
        background: #ff3263;
        color: #fefefe;
        font-family: Rubik;
        font-size: 0.14rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0.16rem; /* 114.286% */
      }
    }

    ::v-deep {
      .el-button {
        span {
          display: flex;
          align-items: center;
          svg {
          }
        }
      }
    }
  }
}
</style>
