<template>
  <div class="page">
    <kt-header></kt-header>
    <!-- <div class="header">
        <div class="logo" @click="toHome">
            <img src="~assets/images/logo.png" alt="">
        </div>
        <div class="header-right">
            <span class="el-dropdown-link">
                <i class="icon-message el-icon--left"><img src="~assets/images/icon-message.png" width="width"
                        height="height" /></i>Messages
            </span>
            <span class="btn-text">
                <div class="icon">
                    <i class="icon-text">
                        D
                    </i>
                </div><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
        </div>
        <div class="nav-bar">
            <i class="icon-bar"><img src="~assets/images/nav-icon.svg" width="width" height="height" /></i>
        </div>
    </div> -->
    <div class="step-box">
      <el-steps :active="active">
        <el-step title=""></el-step>
        <el-step title=""></el-step>
        <el-step title=""></el-step>
        <el-step title=""></el-step>
        <el-step class="step-final" title="">
          <div slot="title" class="connect-with">
            <p>Connect with</p>
            <p>an Expert</p>
          </div>
        </el-step>
      </el-steps>
    </div>
    <div class="box-container">
      <div class="form-box" v-if="active === 4 && submitPage == false" style="height: 8.76rem;">
        <div class="form-hd">
          <div class="form-text">
            Great {{ name }}! Now to the most important part, your upcoming trip.
          </div>
          <div class="form-number">
            1 / 2
          </div>
        </div>
        <div class="form-content">
          <div class="form-tips">
            After sharing your trip ideas and thoughts, we’ll connect you with a travel expert.
          </div>
          <div class="form-age">
            Primary age group of adults?
          </div>
          <div class="age-stage-selection">
            <div class="age-stage" :class="ageTypeIndex == 0 ? 'checked' : ''" @click="handleAgeType(0)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">21-35 yrs</div>
            </div>
            <div class="age-stage" :class="ageTypeIndex == 1 ? 'checked' : ''" @click="handleAgeType(1)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">35-55 yrs</div>
            </div>
            <div class="age-stage" :class="ageTypeIndex == 2 ? 'checked' : ''" @click="handleAgeType(2)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">55+ yrs</div>
            </div>
          </div>
          <div class="form-line">

          </div>
          <div class="form-title">
            What experiences are you looking for?
          </div>
          <div class="experience-stage-selection">
            <div class="experience-stage" :class="exTypeIndex == 0 ? 'checked' : ''" @click="handleExType(0)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">I am looking to explore mostly Casions.</div>
              <div class="radio-label">Stay in primary casino locations, enjoy multiple different casinos - on
                your
                budget.
              </div>
            </div>
            <div class="experience-stage" :class="exTypeIndex == 1 ? 'checked' : ''" @click="handleExType(1)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">I am looking to explore Casinos, Events & Nightilfe.</div>
              <div class="radio-label">Access exclusive clubs, bars and nightlife.</div>
            </div>
            <div class="experience-stage" :class="exTypeIndex == 2 ? 'checked' : ''" @click="handleExType(2)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">I am looking to explore Casinos & Fine Dining</div>
              <div class="radio-label">Enjoy world class restaurants combined with your casino experience.
              </div>
            </div>
          </div>
          <div class="form-line1">

          </div>
          <div class="form-title1">
            What accommodation options are you looking for?
          </div>
          <div class="accommodation-option-selection">
            <div class="accommodation-option" :class="hotelTypeIndex == 0 ? 'checked' : ''" @click="handleHotelType(0)">
              <div class="accommodation-class">
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="18" viewBox="0 0 58 18" fill="none">
                  <path
                    d="M48.3399 2.19789C48.5494 1.70516 48.6541 1.4588 48.8 1.38293C48.9266 1.31702 49.0754 1.31702 49.202 1.38293C49.3479 1.4588 49.4526 1.70516 49.6621 2.19789L51.3304 6.12254C51.3923 6.2682 51.4233 6.34103 51.4712 6.3968C51.5136 6.44615 51.5654 6.48563 51.6232 6.51264C51.6886 6.54319 51.7643 6.55156 51.9155 6.56829L55.9906 7.01931C56.5022 7.07593 56.758 7.10423 56.8719 7.22623C56.9708 7.33219 57.0168 7.48056 56.9961 7.62726C56.9724 7.79613 56.7814 7.97666 56.3992 8.33783L53.3551 11.2144C53.2422 11.3212 53.1857 11.3746 53.1499 11.4396C53.1183 11.4971 53.0984 11.561 53.0918 11.627C53.0843 11.7017 53.1001 11.7797 53.1316 11.9357L53.9819 16.1391C54.0886 16.6668 54.142 16.9306 54.0666 17.0819C54.001 17.2134 53.8807 17.305 53.7412 17.3298C53.5807 17.3582 53.3579 17.2235 52.9122 16.954L49.3626 14.8071C49.2309 14.7274 49.165 14.6877 49.095 14.672C49.033 14.6583 48.969 14.6583 48.907 14.672C48.837 14.6877 48.7711 14.7274 48.6394 14.8071L45.0897 16.954C44.6441 17.2235 44.4213 17.3582 44.2608 17.3298C44.1213 17.305 44.001 17.2134 43.9354 17.0819C43.86 16.9306 43.9134 16.6668 44.0201 16.1391L44.8703 11.9357C44.9019 11.7797 44.9177 11.7017 44.9102 11.627C44.9035 11.561 44.8838 11.4971 44.8521 11.4396C44.8163 11.3746 44.7598 11.3212 44.6468 11.2144L41.6028 8.33783C41.2207 7.97666 41.0296 7.79613 41.0058 7.62726C40.9852 7.48056 41.0312 7.33219 41.1301 7.22623C41.244 7.10423 41.4998 7.07593 42.0114 7.01931L46.0865 6.56829C46.2377 6.55156 46.3134 6.54319 46.3788 6.51264C46.4366 6.48563 46.4884 6.44615 46.5308 6.3968C46.5787 6.34103 46.6097 6.2682 46.6716 6.12254L48.3399 2.19789Z"
                    :stroke="hotelTypeIndex == 0 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M28.3394 2.19789C28.5489 1.70516 28.6536 1.4588 28.7995 1.38293C28.9261 1.31702 29.0749 1.31702 29.2015 1.38293C29.3474 1.4588 29.4521 1.70516 29.6616 2.19789L31.3299 6.12254C31.3918 6.2682 31.4228 6.34103 31.4707 6.3968C31.5131 6.44615 31.5649 6.48563 31.6227 6.51264C31.6881 6.54319 31.7638 6.55156 31.915 6.56829L35.9901 7.01931C36.5018 7.07593 36.7575 7.10423 36.8714 7.22623C36.9703 7.33219 37.0163 7.48056 36.9956 7.62726C36.9719 7.79613 36.7809 7.97666 36.3987 8.33783L33.3546 11.2144C33.2417 11.3212 33.1852 11.3746 33.1494 11.4396C33.1178 11.4971 33.098 11.561 33.0913 11.627C33.0838 11.7017 33.0996 11.7797 33.1312 11.9357L33.9814 16.1391C34.0882 16.6668 34.1415 16.9306 34.0661 17.0819C34.0005 17.2134 33.8802 17.305 33.7408 17.3298C33.5803 17.3582 33.3574 17.2235 32.9118 16.954L29.3621 14.8071C29.2304 14.7274 29.1645 14.6877 29.0945 14.672C29.0325 14.6583 28.9685 14.6583 28.9065 14.672C28.8365 14.6877 28.7706 14.7274 28.6389 14.8071L25.0893 16.954C24.6436 17.2235 24.4208 17.3582 24.2603 17.3298C24.1209 17.305 24.0005 17.2134 23.935 17.0819C23.8595 16.9306 23.9129 16.6668 24.0196 16.1391L24.8698 11.9357C24.9014 11.7797 24.9172 11.7017 24.9097 11.627C24.9031 11.561 24.8833 11.4971 24.8516 11.4396C24.8158 11.3746 24.7593 11.3212 24.6464 11.2144L21.6023 8.33783C21.2202 7.97666 21.0291 7.79613 21.0053 7.62726C20.9847 7.48056 21.0307 7.33219 21.1296 7.22623C21.2435 7.10423 21.4993 7.07593 22.0109 7.01931L26.086 6.56829C26.2373 6.55156 26.3129 6.54319 26.3783 6.51264C26.4361 6.48563 26.4879 6.44615 26.5303 6.3968C26.5782 6.34103 26.6092 6.2682 26.6711 6.12254L28.3394 2.19789Z"
                    :stroke="hotelTypeIndex == 0 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8.33893 2.19789C8.54838 1.70516 8.65314 1.4588 8.79898 1.38293C8.92564 1.31702 9.07438 1.31702 9.20104 1.38293C9.34688 1.4588 9.45164 1.70516 9.66108 2.19789L11.3294 6.12254C11.3914 6.2682 11.4223 6.34103 11.4702 6.3968C11.5126 6.44615 11.5644 6.48563 11.6222 6.51264C11.6876 6.54319 11.7633 6.55156 11.9145 6.56829L15.9897 7.01931C16.5013 7.07593 16.757 7.10423 16.8709 7.22623C16.9698 7.33219 17.0158 7.48056 16.9952 7.62726C16.9715 7.79613 16.7804 7.97666 16.3982 8.33783L13.3541 11.2144C13.2412 11.3212 13.1847 11.3746 13.1489 11.4396C13.1173 11.4971 13.0975 11.561 13.0909 11.627C13.0833 11.7017 13.0991 11.7797 13.1307 11.9357L13.9809 16.1391C14.0877 16.6668 14.1411 16.9306 14.0656 17.0819C14 17.2134 13.8797 17.305 13.7403 17.3298C13.5798 17.3582 13.3569 17.2235 12.9113 16.954L9.36162 14.8071C9.2299 14.7274 9.16403 14.6877 9.09401 14.672C9.03204 14.6583 8.96798 14.6583 8.90601 14.672C8.83598 14.6877 8.77012 14.7274 8.63839 14.8071L5.08876 16.954C4.64312 17.2235 4.4203 17.3582 4.25979 17.3298C4.12037 17.305 4 17.2134 3.93446 17.0819C3.85902 16.9306 3.91239 16.6668 4.01914 16.1391L4.86935 11.9357C4.90091 11.7797 4.91669 11.7017 4.9092 11.627C4.90256 11.561 4.88278 11.4971 4.85111 11.4396C4.81533 11.3746 4.75884 11.3212 4.64587 11.2144L1.60185 8.33783C1.21969 7.97666 1.0286 7.79613 1.00484 7.62726C0.984216 7.48056 1.03018 7.33219 1.12911 7.22623C1.24299 7.10423 1.4988 7.07593 2.01042 7.01931L6.08551 6.56829C6.23676 6.55156 6.31238 6.54319 6.37777 6.51264C6.43563 6.48563 6.48743 6.44615 6.52983 6.3968C6.57773 6.34103 6.60869 6.2682 6.67062 6.12254L8.33893 2.19789Z"
                    :stroke="hotelTypeIndex == 0 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="line">
              </div>
              <div class="standard">
                Basic
              </div>
            </div>
            <div class="accommodation-option" :class="hotelTypeIndex == 1 ? 'checked' : ''" @click="handleHotelType(1)">
              <div class="accommodation-class">
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="18" viewBox="0 0 78 18" fill="none">
                  <path
                    d="M48.3399 1.86439C48.5494 1.37167 48.6541 1.1253 48.8 1.04944C48.9266 0.983521 49.0754 0.983521 49.202 1.04944C49.3479 1.1253 49.4526 1.37167 49.6621 1.86439L51.3304 5.78904C51.3923 5.9347 51.4233 6.00753 51.4712 6.0633C51.5136 6.11266 51.5654 6.15213 51.6232 6.17915C51.6886 6.2097 51.7643 6.21806 51.9155 6.2348L55.9906 6.68581C56.5022 6.74243 56.758 6.77074 56.8719 6.89273C56.9708 6.99869 57.0168 7.14706 56.9961 7.29377C56.9724 7.46263 56.7814 7.64317 56.3992 8.00433L53.3551 10.8809C53.2422 10.9877 53.1857 11.0411 53.1499 11.1061C53.1183 11.1636 53.0984 11.2275 53.0918 11.2935C53.0843 11.3682 53.1001 11.4462 53.1316 11.6022L53.9819 15.8056C54.0886 16.3333 54.142 16.5971 54.0666 16.7484C54.001 16.8799 53.8807 16.9715 53.7412 16.9963C53.5807 17.0247 53.3579 16.89 52.9122 16.6205L49.3626 14.4736C49.2309 14.3939 49.165 14.3542 49.095 14.3385C49.033 14.3248 48.969 14.3248 48.907 14.3385C48.837 14.3542 48.7711 14.3939 48.6394 14.4736L45.0897 16.6205C44.6441 16.89 44.4213 17.0247 44.2608 16.9963C44.1213 16.9715 44.001 16.8799 43.9354 16.7484C43.86 16.5971 43.9134 16.3333 44.0201 15.8056L44.8703 11.6022C44.9019 11.4462 44.9177 11.3682 44.9102 11.2935C44.9035 11.2275 44.8838 11.1636 44.8521 11.1061C44.8163 11.0411 44.7598 10.9877 44.6468 10.8809L41.6028 8.00433C41.2207 7.64317 41.0296 7.46263 41.0058 7.29377C40.9852 7.14706 41.0312 6.99869 41.1301 6.89273C41.244 6.77074 41.4998 6.74243 42.0114 6.68581L46.0865 6.2348C46.2377 6.21806 46.3134 6.2097 46.3788 6.17915C46.4366 6.15213 46.4884 6.11266 46.5308 6.0633C46.5787 6.00753 46.6097 5.9347 46.6716 5.78904L48.3399 1.86439Z"
                    :stroke="hotelTypeIndex == 1 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M68.3389 1.86439C68.5484 1.37167 68.6531 1.1253 68.799 1.04944C68.9256 0.983521 69.0744 0.983521 69.201 1.04944C69.3469 1.1253 69.4516 1.37167 69.6611 1.86439L71.3294 5.78904C71.3914 5.9347 71.4223 6.00753 71.4702 6.0633C71.5126 6.11266 71.5644 6.15213 71.6222 6.17915C71.6876 6.2097 71.7633 6.21806 71.9145 6.2348L75.9897 6.68581C76.5013 6.74243 76.757 6.77074 76.8709 6.89273C76.9698 6.99869 77.0158 7.14706 76.9952 7.29377C76.9715 7.46263 76.7804 7.64317 76.3982 8.00433L73.3541 10.8809C73.2412 10.9877 73.1847 11.0411 73.1489 11.1061C73.1173 11.1636 73.0975 11.2275 73.0909 11.2935C73.0833 11.3682 73.0991 11.4462 73.1307 11.6022L73.9809 15.8056C74.0877 16.3333 74.1411 16.5971 74.0656 16.7484C74 16.8799 73.8797 16.9715 73.7403 16.9963C73.5798 17.0247 73.3569 16.89 72.9113 16.6205L69.3616 14.4736C69.2299 14.3939 69.164 14.3542 69.094 14.3385C69.032 14.3248 68.968 14.3248 68.906 14.3385C68.836 14.3542 68.7701 14.3939 68.6384 14.4736L65.0888 16.6205C64.6431 16.89 64.4203 17.0247 64.2598 16.9963C64.1204 16.9715 64 16.8799 63.9345 16.7484C63.859 16.5971 63.9124 16.3333 64.0191 15.8056L64.8694 11.6022C64.9009 11.4462 64.9167 11.3682 64.9092 11.2935C64.9026 11.2275 64.8828 11.1636 64.8511 11.1061C64.8153 11.0411 64.7588 10.9877 64.6459 10.8809L61.6018 8.00433C61.2197 7.64317 61.0286 7.46263 61.0048 7.29377C60.9842 7.14706 61.0302 6.99869 61.1291 6.89273C61.243 6.77074 61.4988 6.74243 62.0104 6.68581L66.0855 6.2348C66.2368 6.21806 66.3124 6.2097 66.3778 6.17915C66.4356 6.15213 66.4874 6.11266 66.5298 6.0633C66.5777 6.00753 66.6087 5.9347 66.6706 5.78904L68.3389 1.86439Z"
                    :stroke="hotelTypeIndex == 1 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M28.3394 1.86439C28.5489 1.37167 28.6536 1.1253 28.7995 1.04944C28.9261 0.983521 29.0749 0.983521 29.2015 1.04944C29.3474 1.1253 29.4521 1.37167 29.6616 1.86439L31.3299 5.78904C31.3918 5.9347 31.4228 6.00753 31.4707 6.0633C31.5131 6.11266 31.5649 6.15213 31.6227 6.17915C31.6881 6.2097 31.7638 6.21806 31.915 6.2348L35.9901 6.68581C36.5018 6.74243 36.7575 6.77074 36.8714 6.89273C36.9703 6.99869 37.0163 7.14706 36.9956 7.29377C36.9719 7.46263 36.7809 7.64317 36.3987 8.00433L33.3546 10.8809C33.2417 10.9877 33.1852 11.0411 33.1494 11.1061C33.1178 11.1636 33.098 11.2275 33.0913 11.2935C33.0838 11.3682 33.0996 11.4462 33.1312 11.6022L33.9814 15.8056C34.0882 16.3333 34.1415 16.5971 34.0661 16.7484C34.0005 16.8799 33.8802 16.9715 33.7408 16.9963C33.5803 17.0247 33.3574 16.89 32.9118 16.6205L29.3621 14.4736C29.2304 14.3939 29.1645 14.3542 29.0945 14.3385C29.0325 14.3248 28.9685 14.3248 28.9065 14.3385C28.8365 14.3542 28.7706 14.3939 28.6389 14.4736L25.0893 16.6205C24.6436 16.89 24.4208 17.0247 24.2603 16.9963C24.1209 16.9715 24.0005 16.8799 23.935 16.7484C23.8595 16.5971 23.9129 16.3333 24.0196 15.8056L24.8698 11.6022C24.9014 11.4462 24.9172 11.3682 24.9097 11.2935C24.9031 11.2275 24.8833 11.1636 24.8516 11.1061C24.8158 11.0411 24.7593 10.9877 24.6464 10.8809L21.6023 8.00433C21.2202 7.64317 21.0291 7.46263 21.0053 7.29377C20.9847 7.14706 21.0307 6.99869 21.1296 6.89273C21.2435 6.77074 21.4993 6.74243 22.0109 6.68581L26.086 6.2348C26.2373 6.21806 26.3129 6.2097 26.3783 6.17915C26.4361 6.15213 26.4879 6.11266 26.5303 6.0633C26.5782 6.00753 26.6092 5.9347 26.6711 5.78904L28.3394 1.86439Z"
                    :stroke="hotelTypeIndex == 1 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8.33893 1.86439C8.54838 1.37167 8.65314 1.1253 8.79898 1.04944C8.92564 0.983521 9.07438 0.983521 9.20104 1.04944C9.34688 1.1253 9.45164 1.37167 9.66108 1.86439L11.3294 5.78904C11.3914 5.9347 11.4223 6.00753 11.4702 6.0633C11.5126 6.11266 11.5644 6.15213 11.6222 6.17915C11.6876 6.2097 11.7633 6.21806 11.9145 6.2348L15.9897 6.68581C16.5013 6.74243 16.757 6.77074 16.8709 6.89273C16.9698 6.99869 17.0158 7.14706 16.9952 7.29377C16.9715 7.46263 16.7804 7.64317 16.3982 8.00433L13.3541 10.8809C13.2412 10.9877 13.1847 11.0411 13.1489 11.1061C13.1173 11.1636 13.0975 11.2275 13.0909 11.2935C13.0833 11.3682 13.0991 11.4462 13.1307 11.6022L13.9809 15.8056C14.0877 16.3333 14.1411 16.5971 14.0656 16.7484C14 16.8799 13.8797 16.9715 13.7403 16.9963C13.5798 17.0247 13.3569 16.89 12.9113 16.6205L9.36162 14.4736C9.2299 14.3939 9.16403 14.3542 9.09401 14.3385C9.03204 14.3248 8.96798 14.3248 8.90601 14.3385C8.83598 14.3542 8.77012 14.3939 8.63839 14.4736L5.08876 16.6205C4.64312 16.89 4.4203 17.0247 4.25979 16.9963C4.12037 16.9715 4 16.8799 3.93446 16.7484C3.85902 16.5971 3.91239 16.3333 4.01914 15.8056L4.86935 11.6022C4.90091 11.4462 4.91669 11.3682 4.9092 11.2935C4.90256 11.2275 4.88278 11.1636 4.85111 11.1061C4.81533 11.0411 4.75884 10.9877 4.64587 10.8809L1.60185 8.00433C1.21969 7.64317 1.0286 7.46263 1.00484 7.29377C0.984216 7.14706 1.03018 6.99869 1.12911 6.89273C1.24299 6.77074 1.4988 6.74243 2.01042 6.68581L6.08551 6.2348C6.23676 6.21806 6.31238 6.2097 6.37777 6.17915C6.43563 6.15213 6.48743 6.11266 6.52983 6.0633C6.57773 6.00753 6.60869 5.9347 6.67062 5.78904L8.33893 1.86439Z"
                    :stroke="hotelTypeIndex == 1 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="line">
              </div>
              <div class="standard">
                Comfortable
              </div>
            </div>
            <div class="accommodation-option" :class="hotelTypeIndex == 2 ? 'checked' : ''" @click="handleHotelType(2)">
              <div class="accommodation-class">
                <svg xmlns="http://www.w3.org/2000/svg" width="98" height="18" viewBox="0 0 98 18" fill="none">
                  <path
                    d="M48.3399 1.86439C48.5494 1.37167 48.6541 1.1253 48.8 1.04944C48.9266 0.983521 49.0754 0.983521 49.202 1.04944C49.3479 1.1253 49.4526 1.37167 49.6621 1.86439L51.3304 5.78904C51.3923 5.9347 51.4233 6.00753 51.4712 6.0633C51.5136 6.11266 51.5654 6.15213 51.6232 6.17915C51.6886 6.2097 51.7643 6.21806 51.9155 6.2348L55.9906 6.68581C56.5022 6.74243 56.758 6.77074 56.8719 6.89273C56.9708 6.99869 57.0168 7.14706 56.9961 7.29377C56.9724 7.46263 56.7814 7.64317 56.3992 8.00433L53.3551 10.8809C53.2422 10.9877 53.1857 11.0411 53.1499 11.1061C53.1183 11.1636 53.0984 11.2275 53.0918 11.2935C53.0843 11.3682 53.1001 11.4462 53.1316 11.6022L53.9819 15.8056C54.0886 16.3333 54.142 16.5971 54.0666 16.7484C54.001 16.8799 53.8807 16.9715 53.7412 16.9963C53.5807 17.0247 53.3579 16.89 52.9122 16.6205L49.3626 14.4736C49.2309 14.3939 49.165 14.3542 49.095 14.3385C49.033 14.3248 48.969 14.3248 48.907 14.3385C48.837 14.3542 48.7711 14.3939 48.6394 14.4736L45.0897 16.6205C44.6441 16.89 44.4213 17.0247 44.2608 16.9963C44.1213 16.9715 44.001 16.8799 43.9354 16.7484C43.86 16.5971 43.9134 16.3333 44.0201 15.8056L44.8703 11.6022C44.9019 11.4462 44.9177 11.3682 44.9102 11.2935C44.9035 11.2275 44.8838 11.1636 44.8521 11.1061C44.8163 11.0411 44.7598 10.9877 44.6468 10.8809L41.6028 8.00433C41.2207 7.64317 41.0296 7.46263 41.0058 7.29377C40.9852 7.14706 41.0312 6.99869 41.1301 6.89273C41.244 6.77074 41.4998 6.74243 42.0114 6.68581L46.0865 6.2348C46.2377 6.21806 46.3134 6.2097 46.3788 6.17915C46.4366 6.15213 46.4884 6.11266 46.5308 6.0633C46.5787 6.00753 46.6097 5.9347 46.6716 5.78904L48.3399 1.86439Z"
                    :stroke="hotelTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M68.3389 1.86439C68.5484 1.37167 68.6531 1.1253 68.799 1.04944C68.9256 0.983521 69.0744 0.983521 69.201 1.04944C69.3469 1.1253 69.4516 1.37167 69.6611 1.86439L71.3294 5.78904C71.3914 5.9347 71.4223 6.00753 71.4702 6.0633C71.5126 6.11266 71.5644 6.15213 71.6222 6.17915C71.6876 6.2097 71.7633 6.21806 71.9145 6.2348L75.9897 6.68581C76.5013 6.74243 76.757 6.77074 76.8709 6.89273C76.9698 6.99869 77.0158 7.14706 76.9952 7.29377C76.9715 7.46263 76.7804 7.64317 76.3982 8.00433L73.3541 10.8809C73.2412 10.9877 73.1847 11.0411 73.1489 11.1061C73.1173 11.1636 73.0975 11.2275 73.0909 11.2935C73.0833 11.3682 73.0991 11.4462 73.1307 11.6022L73.9809 15.8056C74.0877 16.3333 74.1411 16.5971 74.0656 16.7484C74 16.8799 73.8797 16.9715 73.7403 16.9963C73.5798 17.0247 73.3569 16.89 72.9113 16.6205L69.3616 14.4736C69.2299 14.3939 69.164 14.3542 69.094 14.3385C69.032 14.3248 68.968 14.3248 68.906 14.3385C68.836 14.3542 68.7701 14.3939 68.6384 14.4736L65.0888 16.6205C64.6431 16.89 64.4203 17.0247 64.2598 16.9963C64.1204 16.9715 64 16.8799 63.9345 16.7484C63.859 16.5971 63.9124 16.3333 64.0191 15.8056L64.8694 11.6022C64.9009 11.4462 64.9167 11.3682 64.9092 11.2935C64.9026 11.2275 64.8828 11.1636 64.8511 11.1061C64.8153 11.0411 64.7588 10.9877 64.6459 10.8809L61.6018 8.00433C61.2197 7.64317 61.0286 7.46263 61.0048 7.29377C60.9842 7.14706 61.0302 6.99869 61.1291 6.89273C61.243 6.77074 61.4988 6.74243 62.0104 6.68581L66.0855 6.2348C66.2368 6.21806 66.3124 6.2097 66.3778 6.17915C66.4356 6.15213 66.4874 6.11266 66.5298 6.0633C66.5777 6.00753 66.6087 5.9347 66.6706 5.78904L68.3389 1.86439Z"
                    :stroke="hotelTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M88.3389 1.86439C88.5484 1.37167 88.6531 1.1253 88.799 1.04944C88.9256 0.983521 89.0744 0.983521 89.201 1.04944C89.3469 1.1253 89.4516 1.37167 89.6611 1.86439L91.3294 5.78904C91.3914 5.9347 91.4223 6.00753 91.4702 6.0633C91.5126 6.11266 91.5644 6.15213 91.6222 6.17915C91.6876 6.2097 91.7633 6.21806 91.9145 6.2348L95.9897 6.68581C96.5013 6.74243 96.757 6.77074 96.8709 6.89273C96.9698 6.99869 97.0158 7.14706 96.9952 7.29377C96.9715 7.46263 96.7804 7.64317 96.3982 8.00433L93.3541 10.8809C93.2412 10.9877 93.1847 11.0411 93.1489 11.1061C93.1173 11.1636 93.0975 11.2275 93.0909 11.2935C93.0833 11.3682 93.0991 11.4462 93.1307 11.6022L93.9809 15.8056C94.0877 16.3333 94.1411 16.5971 94.0656 16.7484C94 16.8799 93.8797 16.9715 93.7403 16.9963C93.5798 17.0247 93.3569 16.89 92.9113 16.6205L89.3616 14.4736C89.2299 14.3939 89.164 14.3542 89.094 14.3385C89.032 14.3248 88.968 14.3248 88.906 14.3385C88.836 14.3542 88.7701 14.3939 88.6384 14.4736L85.0888 16.6205C84.6431 16.89 84.4203 17.0247 84.2598 16.9963C84.1204 16.9715 84 16.8799 83.9345 16.7484C83.859 16.5971 83.9124 16.3333 84.0191 15.8056L84.8694 11.6022C84.9009 11.4462 84.9167 11.3682 84.9092 11.2935C84.9026 11.2275 84.8828 11.1636 84.8511 11.1061C84.8153 11.0411 84.7588 10.9877 84.6459 10.8809L81.6018 8.00433C81.2197 7.64317 81.0286 7.46263 81.0048 7.29377C80.9842 7.14706 81.0302 6.99869 81.1291 6.89273C81.243 6.77074 81.4988 6.74243 82.0104 6.68581L86.0855 6.2348C86.2368 6.21806 86.3124 6.2097 86.3778 6.17915C86.4356 6.15213 86.4874 6.11266 86.5298 6.0633C86.5777 6.00753 86.6087 5.9347 86.6706 5.78904L88.3389 1.86439Z"
                    :stroke="hotelTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M28.3389 1.86439C28.5484 1.37167 28.6531 1.1253 28.799 1.04944C28.9256 0.983521 29.0744 0.983521 29.201 1.04944C29.3469 1.1253 29.4516 1.37167 29.6611 1.86439L31.3294 5.78904C31.3914 5.9347 31.4223 6.00753 31.4702 6.0633C31.5126 6.11266 31.5644 6.15213 31.6222 6.17915C31.6876 6.2097 31.7633 6.21806 31.9145 6.2348L35.9897 6.68581C36.5013 6.74243 36.757 6.77074 36.8709 6.89273C36.9698 6.99869 37.0158 7.14706 36.9952 7.29377C36.9715 7.46263 36.7804 7.64317 36.3982 8.00433L33.3541 10.8809C33.2412 10.9877 33.1847 11.0411 33.1489 11.1061C33.1173 11.1636 33.0975 11.2275 33.0909 11.2935C33.0833 11.3682 33.0991 11.4462 33.1307 11.6022L33.9809 15.8056C34.0877 16.3333 34.1411 16.5971 34.0656 16.7484C34 16.8799 33.8797 16.9715 33.7403 16.9963C33.5798 17.0247 33.3569 16.89 32.9113 16.6205L29.3616 14.4736C29.2299 14.3939 29.164 14.3542 29.094 14.3385C29.032 14.3248 28.968 14.3248 28.906 14.3385C28.836 14.3542 28.7701 14.3939 28.6384 14.4736L25.0888 16.6205C24.6431 16.89 24.4203 17.0247 24.2598 16.9963C24.1204 16.9715 24 16.8799 23.9345 16.7484C23.859 16.5971 23.9124 16.3333 24.0191 15.8056L24.8694 11.6022C24.9009 11.4462 24.9167 11.3682 24.9092 11.2935C24.9026 11.2275 24.8828 11.1636 24.8511 11.1061C24.8153 11.0411 24.7588 10.9877 24.6459 10.8809L21.6018 8.00433C21.2197 7.64317 21.0286 7.46263 21.0048 7.29377C20.9842 7.14706 21.0302 6.99869 21.1291 6.89273C21.243 6.77074 21.4988 6.74243 22.0104 6.68581L26.0855 6.2348C26.2368 6.21806 26.3124 6.2097 26.3778 6.17915C26.4356 6.15213 26.4874 6.11266 26.5298 6.0633C26.5777 6.00753 26.6087 5.9347 26.6706 5.78904L28.3389 1.86439Z"
                    :stroke="hotelTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8.33893 1.86439C8.54838 1.37167 8.65314 1.1253 8.79898 1.04944C8.92564 0.983521 9.07438 0.983521 9.20104 1.04944C9.34688 1.1253 9.45164 1.37167 9.66108 1.86439L11.3294 5.78904C11.3914 5.9347 11.4223 6.00753 11.4702 6.0633C11.5126 6.11266 11.5644 6.15213 11.6222 6.17915C11.6876 6.2097 11.7633 6.21806 11.9145 6.2348L15.9897 6.68581C16.5013 6.74243 16.757 6.77074 16.8709 6.89273C16.9698 6.99869 17.0158 7.14706 16.9952 7.29377C16.9715 7.46263 16.7804 7.64317 16.3982 8.00433L13.3541 10.8809C13.2412 10.9877 13.1847 11.0411 13.1489 11.1061C13.1173 11.1636 13.0975 11.2275 13.0909 11.2935C13.0833 11.3682 13.0991 11.4462 13.1307 11.6022L13.9809 15.8056C14.0877 16.3333 14.1411 16.5971 14.0656 16.7484C14 16.8799 13.8797 16.9715 13.7403 16.9963C13.5798 17.0247 13.3569 16.89 12.9113 16.6205L9.36162 14.4736C9.2299 14.3939 9.16403 14.3542 9.09401 14.3385C9.03204 14.3248 8.96798 14.3248 8.90601 14.3385C8.83598 14.3542 8.77012 14.3939 8.63839 14.4736L5.08876 16.6205C4.64312 16.89 4.4203 17.0247 4.25979 16.9963C4.12037 16.9715 4 16.8799 3.93446 16.7484C3.85902 16.5971 3.91239 16.3333 4.01914 15.8056L4.86935 11.6022C4.90091 11.4462 4.91669 11.3682 4.9092 11.2935C4.90256 11.2275 4.88278 11.1636 4.85111 11.1061C4.81533 11.0411 4.75884 10.9877 4.64587 10.8809L1.60185 8.00433C1.21969 7.64317 1.0286 7.46263 1.00484 7.29377C0.984216 7.14706 1.03018 6.99869 1.12911 6.89273C1.24299 6.77074 1.4988 6.74243 2.01042 6.68581L6.08551 6.2348C6.23676 6.21806 6.31238 6.2097 6.37777 6.17915C6.43563 6.15213 6.48743 6.11266 6.52983 6.0633C6.57773 6.00753 6.60869 5.9347 6.67062 5.78904L8.33893 1.86439Z"
                    :stroke="hotelTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="line">
              </div>
              <div class="standard">
                Luxury
              </div>
            </div>
            <div class="accommodation-option" :class="hotelTypeIndex == 3 ? 'checked' : ''" @click="handleHotelType(3)">
              <div class="accommodation-class">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_1403_4936)">
                    <path
                      d="M5.82013 13.4417L7.96347 31.6667H32.0368L34.1801 13.4417L27.4968 17.8967L20.0001 7.40172L12.5035 17.8967L5.82013 13.4417ZM4.66847 8.66672L11.6668 13.3334L18.6435 3.56672C18.7976 3.35067 19.0012 3.17456 19.2372 3.05306C19.4731 2.93155 19.7347 2.86816 20.0001 2.86816C20.2656 2.86816 20.5271 2.93155 20.7631 3.05306C20.9991 3.17456 21.2026 3.35067 21.3568 3.56672L28.3335 13.3334L35.3335 8.66672C35.5984 8.49047 35.9082 8.39373 36.2264 8.38795C36.5445 8.38217 36.8577 8.46758 37.1288 8.63409C37.4 8.8006 37.6178 9.04126 37.7565 9.32761C37.8953 9.61397 37.9492 9.93406 37.9118 10.2501L35.1735 33.5284C35.1257 33.9338 34.9308 34.3076 34.6258 34.5789C34.3207 34.8501 33.9267 35 33.5185 35.0001H6.4818C6.07358 35 5.67957 34.8501 5.37451 34.5789C5.06946 34.3076 4.87456 33.9338 4.8268 33.5284L2.08847 10.2484C2.05147 9.93253 2.10561 9.61267 2.2445 9.32658C2.38339 9.04049 2.60124 8.80012 2.87232 8.63382C3.1434 8.46753 3.4564 8.38227 3.77437 8.3881C4.09234 8.39392 4.402 8.4906 4.6668 8.66672H4.66847ZM20.0001 25.0001C19.1161 25.0001 18.2682 24.6489 17.6431 24.0237C17.018 23.3986 16.6668 22.5508 16.6668 21.6667C16.6668 20.7827 17.018 19.9348 17.6431 19.3097C18.2682 18.6846 19.1161 18.3334 20.0001 18.3334C20.8842 18.3334 21.732 18.6846 22.3572 19.3097C22.9823 19.9348 23.3335 20.7827 23.3335 21.6667C23.3335 22.5508 22.9823 23.3986 22.3572 24.0237C21.732 24.6489 20.8842 25.0001 20.0001 25.0001Z"
                      :fill="hotelTypeIndex == 3 ? '#FF3263' : '#1A1A1A'" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1403_4936">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="line">
              </div>
              <div class="standard">
                VIP
              </div>
            </div>
          </div>
          <!-- <el-button class="button">Next</el-button> -->
          <div class="next-btn">
            <el-button class="button" type="primary" @click="handleNext()">Next</el-button>
          </div>
        </div>
      </div>
      <div class="form-box form-box-2" v-if="active === 4 && submitPage == true">
        <div class="form-hd">
          <div class="form-text">
            You are almost done!
          </div>
          <div class="form-number">
            2 / 2
          </div>
        </div>
        <div class="form-content">
          <div class="form-tips">
            After sharing your trip ideas and thoughts, we’ll connect you with a travel expert.
          </div>
          <div class="form-list">
            <div class="left">
              <div class="text">
                Enter your approx. budget per person
              </div>
              <div class="box" :style="budgetTips ? 'border-color: #ff3263' : ''">
                <span class="symbol">
                  USD
                </span>
                <el-input class="number" v-model="budget" clearable placeholder="2500" oninput="value=value.replace(/[^\d.]/g,'')" @blur="handleBlurBudget" />
              </div>
              <div v-if="budgetTips" class="tip-warning">{{ budgetTipsText }}</div>
            </div>
            <div class="right">
              <div class="text">
                Is your budget flexible?
              </div>
              <div class="box" :style="budgetFlexibleTips ? 'border-color: #ff3263' : ''">
                <el-select style="width:100%" clearable v-model="form.budgetFlexible" @change="handleChangeFlexible" placeholder="Select one of the options">
                  <el-option :value="0" label="No, this is my maximum budget"></el-option>
                  <el-option :value="1" label="Flexible, I can increase up to 20%, if needed"></el-option>
                  <el-option :value="2" label="Very Flexible, plan me the best trip possible"></el-option>
                </el-select>
              </div>
              <div v-if="budgetFlexibleTips" class="tip-warning">{{ budgetFlexibleText }}</div>
            </div>
          </div>
          <div class="form-line">

          </div>
          <div class="form-title">
            What trip planning stage are you at?
          </div>
          <div class="plan-stage-selection">
            <div class="plan-stage" :class="stageIndex == 0 ? 'checked' : ''" @click="handleStage(0)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">I need more information before I can start planning.</div>
            </div>
            <div class="plan-stage" :class="stageIndex == 1 ? 'checked' : ''" @click="handleStage(1)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">I'm ready to start trip planning.</div>
            </div>
            <div class="plan-stage" :class="stageIndex == 2 ? 'checked' : ''" @click="handleStage(2)">
              <div class="radio-box">
              </div>
              <div class="radio-lab">I've done my homework and almost ready to book.</div>
            </div>
          </div>

          <div class="msg" style="text-align:right;font-size:15px;color:#ff3263;font-weight: 500;margin-bottom: 0.2rem;"></div>
          <div class="form-bottom">
            <el-button class="back" @click="handleBack">Back</el-button>
            <el-button class="submit" type="primary" @click="handleOpen">Submit your trip
              details
            </el-button>
            <el-dialog title="" :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" :width="dialogWidth" :top="dialogTop">
              <div class="title">What's your contact number:</div>
              <div class="country-code">
                <div class="left">
                  <el-select v-model="countryCode" clearable filterable placeholder="Country Code">
                    <el-option v-for="(item, index) in codeList" :label="`${item.name} (${item.dial_code})`" :value="item.dial_code" :key="index"></el-option>
                  </el-select>
                </div>
                <div class="input">
                  <el-input v-model="phone" oninput="value=value.replace(/[^\d]/g,'')" @blur="phone = $event.target.value" placeholder="Enter your mobile number"></el-input>
                  <div class="send-btn">
                    <el-button size="small" v-if="sending" disabled type="primary">{{ seconds }} s</el-button>
                    <el-button size="small" v-else @click="handleSend" :disabled="(countryCode && phone) ? false : true" type="primary">Send code
                    </el-button>
                  </div>
                </div>
              </div>
              <div class="code-box" v-if="sendOk">
                <div class="code-tips">
                  We have sent a 6 digit pin code to"{{ countryCode }} {{ phone }}".
                </div>
                <div class="code-tips">
                  Please insert it below.
                </div>
                <div class="code-inp">
                  <el-input v-model.trim="code" placeholder="Enter code here."></el-input>
                </div>
                <!-- <div class="code-resend">
                    Didn't get the pin code? <span @click="handleSend">Resend it</span>
                </div> -->
              </div>
              <div class="intro">Our travel specialists are in demand and usually only work with clients who
                provide a contact number.
              </div>
              <div class="footer">
                <el-button class="submit-button" type="primary" @click="handleSubmit">Submit</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </div>

      <div class="form-result">
        <div class="result-hd">Your trip plan</div>
        <div class="result-pic">
          <img :src="destinationForm.destinationPic" alt="">
        </div>
        <div class="result-item">
          <div class="item-lab">
            Destination
          </div>
          <div class="item-val">
            {{ destinationForm.city }}, {{ destinationForm.country }}
          </div>
        </div>
        <div class="result-item">
          <div class="item-lab">
            No. of people
          </div>
          <div class="item-val">
            <template v-if="form.peopleNumType == 2 || form.peopleNumType == 3">
              <template v-if="form.adultsNum * 1 > 0">{{ form.adultsNum }}{{ form.adultsNum * 1 > 1 ? 'Adults' : 'Adult' }}
              </template>
              {{ form.adultsNum * 1 > 0 && form.childrenNum * 1 > 0 ? ',' : '' }}
              <template v-if="form.childrenNum * 1 > 0">{{ form.childrenNum }}{{
                form.childrenNum * 1 > 1 ? 'Children' : 'Child'
              }}
              </template>
            </template>
            ({{ peopleTypeObj[form.peopleNumType] }})
          </div>
        </div>
        <div class="result-item">
          <div class="item-lab">
            Travel dates
          </div>
          <div class="item-val">
            <template v-if="form.travelDateType == 0">
              {{ form.startDate }}~{{ form.endDate }}
            </template>
            <template v-else-if="form.travelDateType == 1">
              {{ form.approxMonth }}，{{ form.approxDuration }}
            </template>
            <template v-else-if="form.travelDateType == 2">
              Not decided yet
            </template>
          </div>
        </div>
        <div class="result-item">
          <div class="item-lab">
            Age group
          </div>
          <div class="item-val">
            {{ ageGroupType[ageTypeIndex] }}
          </div>
        </div>
        <div class="result-item">
          <div class="item-lab">
            Experiences
          </div>
          <div class="item-val">
            {{ experiencesType[exTypeIndex] }}
          </div>
        </div>
        <div class="result-item">
          <div class="item-lab">
            Accommodation
          </div>
          <div class="item-val">
            {{ hotelType[hotelTypeIndex] }}
          </div>
        </div>
        <div class="result-item" v-if="active === 4 && submitPage == true">
          <div class="item-lab">
            Budget Per Person
          </div>
          <div class="item-val">
            USD {{ budget==''? 2500 : budget }}
          </div>
        </div>
        <div class="result-item" v-if="active === 4 && submitPage == true">
          <div class="item-lab">
            Planning Stage
          </div>
          <div class="item-val">
            {{ stageType[stageIndex] }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { orderCreate } from '@/api/destination'
import { destinationDetail } from '@/api/destination'
import countryCode from '@/utils/countryCode'
import { sendMsgByBuka, checkMsg } from '@/api/index'
import { getUserId } from '@/utils/auth'

export default {
  name: 'Concierge',
  data () {
    return {
      name: '',
      ageTypeIndex: 0,
      exTypeIndex: 0,
      hotelTypeIndex: 0,
      stageIndex: 0,
      peopleTypeObj: {
        '0': 'Single',
        '1': 'Couple',
        '2': 'Family',
        '3': 'Group',
      },
      ageGroupType: ['21-35 yrs', '35-55 yrs', '55+ yrs'],
      experiencesType: ['Casions', 'Casinos, Events & Nightilfe', 'Casinos & Fine Dining'],
      hotelType: ['Basic', 'Comfortable', 'Luxury', 'VIP'],
      stageType: ['Start Planning', 'Ready to Plan', 'Ready to Book'],
      budget: '',
      checked: true,
      active: 4,
      submitPage: false,
      dialogVisible: false,
      phone: '',
      form: {
        "accommodationType": 0,
        "adultsNum": "",
        "adultsPrimaryAge": "",
        "approxDuration": "",
        "approxMonth": "",
        "budgetFlexible": "",
        "budgetPerPerson": "",
        "childrenNum": 0,
        "contactNumber": "",
        "destinationId": "",
        "endDate": "",
        "experiencesType": 0,
        "memberEmail": "",
        "memberId": "",
        "peopleNumType": 0,
        "startDate": "",
        "travelDateType": 0,
        "tripPlanningStage": 0,
      },
      destinationForm: {},
      codeList: [],
      countryCode: '',
      budgetTips: false,
      budgetTipsText: 'Please enter your approx. budget per person',
      budgetFlexibleTips: true,
      budgetFlexibleText: 'Please choose an option', // 'Please select budget flexible',
      sending: false,
      seconds: 60,
      code: '',
      sendOk: false,
      uuid: '',
      dialogWidth: "480px",
      dialogTop: "15vh"
    }

  },
  mounted () {
    this.name = this.$store.state.name;
    this.codeList = countryCode;
  },
  created () {
    this.form = Object.assign(this.form, this.$route.query)
    if (this.form.destinationId) {
      this.getDestination();
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
  methods: {
    toHome () {
      this.$router.push({
        path: '/'
      })
    },
    toLogin () {
      this.$router.push({ path: '/login' })
    },
    handleBack () {
      this.submitPage = false;
    },
    handleOpen1 () {
      this.dialogWidth = '480px';
      this.dialogTop = '15vh';
      if (window.isMobile) {
        this.dialogWidth = '100%'
        this.dialogTop = '0vh';
      }

      if (this.budget * 1 === 0) {
        this.budgetTipsText = 'Please enter your approx. budget per person';
        this.budgetTips = true;
        return;
      } else if (this.budget * 1 < 100) {
        this.budgetTipsText = 'No less than 100 budget per person per day';
        this.budgetTips = true;
        return;
      } else {
        this.budgetTips = false;
      }
      if (this.form.budgetFlexible === '') {
        this.budgetFlexibleTips = true;
        return;
      } else {
        this.budgetFlexibleTips = false;
      }
      this.dialogVisible = true;

    },
    handleBlurBudget () {
      if (this.budget * 1 === 0) {
        this.budgetTipsText = 'Please enter your approx. budget per person';
        this.budgetTips = true;
        return false;
      } else if (this.budget * 1 < 100) {
        this.budgetTipsText = 'No less than 100 budget per person per day';
        this.budgetTips = true;
        return false;
      }
      this.budgetTips = false;
      return true;
    },
    handleChangeFlexible () {
      if (this.form.budgetFlexible === '') {
        this.budgetFlexibleTips = true;
        return false;
      }
      this.budgetFlexibleTips = false;
      return true;
    },
    getDestination () {
      let params = {
        id: this.form.destinationId
      };
      destinationDetail(params).then((res) => {
        this.destinationForm = res.data;
      })
    },
    handleNext () {
      this.submitPage = true;
    },
    handleSend () {
      this.sending = true;
      let params = {
        phone: this.countryCode + " " + this.phone
      }
      console.log("formData", formData)
      console.log("params", params)
      const formData = new FormData();
      formData.append('phone', `${this.countryCode} ${this.phone}`);
      params = JSON.stringify(params);
      sendMsgByBuka(params).then((res) => {
        this.sendOk = true;
        this.uuid = res.msg;
        let timmer = setInterval(() => {
          this.seconds--;
          if (this.seconds <= 0) {
            clearInterval(timmer);
            this.seconds = 60;
            this.sending = false;
          }
        }, 1000)
      }).catch((err) => {
        this.sending = false;
        this.$message.error(err)
      })
    },
    handleAgeType (index) {
      this.ageTypeIndex = index;
    },
    handleExType (index) {
      this.exTypeIndex = index;
    },
    handleHotelType (index) {
      this.hotelTypeIndex = index;
    },
    handleStage (index) {
      this.stageIndex = index;
    },
    checkMobile () {
      return new Promise((resolve, reject) => {
        let params = {
          code: this.code,
          phone: `${this.countryCode} ${this.phone}`,
          uuid: this.uuid
        };
        checkMsg(params).then((res) => {
          resolve(true);
        }).catch((err) => {
          this.$message.error(err);
          reject(false);
        })
      })
    },
    getCookie (name) {
      var cookie_start = document.cookie.indexOf(name);
      var cookie_end = document.cookie.indexOf(";", cookie_start);
      return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    },
    handleSubmit() {},
    async handleOpen () {
      if (!this.handleBlurBudget() || !this.handleChangeFlexible()) {
        return false
      }
      /*if (this.code.length == 0) {
        this.$message.warning("Please enter code");
        return;
      }
      let check = await this.checkMobile();
      if (!check) return;*/
      // this.getCookie("userId");

      let params = this.form;
      params.accommodationType = this.hotelTypeIndex;
      params.adultsPrimaryAge = this.ageTypeIndex;
      params.budgetFlexible = this.form.budgetFlexible;
      params.budgetPerPerson = this.budget;
      params.contactNumber = this.phone;
      params.experiencesType = this.exTypeIndex;
      params.memberEmail = '';
      params.tripPlanningStage = this.stageIndex;
      params.memberId = getUserId();
      orderCreate(params).then((res) => {
        this.dialogVisible = false;
        this.$router.replace('/message')
      }).catch((err) => {
        console.log(err.message)
        if (err.message === 'you have an trip without finished') {
          document.querySelector(".msg").innerHTML = "you have an trip without finished"
        }
        this.$message.error(err);
      })
    },
  }
}
</script>

<style lang="scss">
.step-final {
  display: flex;
  align-items: center;

  .el-step__head {
    display: none;
  }

  .el-step__title.is-process {
    color: #ff3263;
    font-size: 0.12rem;
    line-height: 0.12rem;
    margin-top: 0.08rem;
    margin-left: 0.05rem;
  }
}
</style>
<style lang="scss" scoped>
.connect-with {
  width: 78px;
  height: 24px;
  color: #ff3263;

  font-family: Rubik;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  margin: 8px;
}

::v-deep .el-input__inner {
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.16rem;
  /* 100% */
}

::v-deep .el-input__inner::placeholder {
  color: rgba(26, 26, 26, 0.6);
  font-family: Rubik;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.16rem;
  /* 100% */
}

::v-deep .el-dialog {
  border-radius: 0.16rem;
}

::v-deep .el-dialog__body {
  padding: 0 0.2rem 0.24rem 0.2rem;
}

::v-deep .el-select-dropdown__item {
  font-size: 0.15rem;
}

::v-deep .el-step__icon-inner {
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
}

::v-deep .el-dialog__wrapper {
  backdrop-filter: blur(10px);
}

.page {
  background: #f5f5f5;
  min-height: 100vh;
}

.tip-warning {
  margin-top: 0.2rem;
  margin-bottom:0.2rem;
  text-align: center;
  color: #ff3263;
}

.code-box {
  margin-top: 0.2rem;
  // width: 80%;
  border: solid 1px #ddd;
  background: rgba(238, 35, 68, 0.16);
  padding: 0.24rem;
  color: rgba(26, 26, 26, 0.6);

  .code-tips {
    text-align: center;
  }

  .code-inp {
    margin: 0.1rem 0;
  }

  .code-resend {
    span {
      color: #ff3263;
      cursor: pointer;
    }
  }
}

.header {
  height: 0.64rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding-right: 1.12rem;
  background: #fefefe;
  color: rgba(26, 26, 26, 0.6);
  font-weight: 500;

  .logo {
    margin-left: 0.32rem;
    height: 0.32rem;

    img {
      height: 100%;
    }
  }

  .header-right {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-dropdown-link {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      img {
        width: 0.24rem;
      }
    }

    .btn-text {
      margin-left: 0.24rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        position: relative;
        width: 0.4rem;
        height: 0.4rem;
        background-color: rgba(255, 50, 99, 0.16);
        border-radius: 50%;

        .icon-text {
          position: absolute;
          top: 0.02rem;
          left: 0.1rem;
          color: #ff3263;
          font-size: 0.24rem;
          font-weight: 500;
          line-height: 0.4rem;
        }
      }
    }
  }

  .nav-bar {
    width: 0.88rem;
    height: 0.64rem;
    display: flex;
    right: 0;
    top: 0;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-left: solid 1px #dadada;

    .icon-bar {
      width: 0.32rem;
    }
  }
}

.step-box {
  background: #fefefe;
  :deep(.el-step__line-inner) {
    width: 100% !important;
    border-width: 1px !important;
  }
}

::v-deep .el-steps {
  width: 622px;
  height: 40px;
}

::v-deep .step-box .el-steps .el-step__head {
  width: 136px;
}

::v-deep .step-box .el-step:last-child .el-step__head {
  display: none;
}

.box-container {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0 0.4rem;
  width: 11.44rem;
  margin: 0 auto;

  .form-box {
    border: 0.01rem solid rgba(26, 26, 26, 0.16);
    width: 7.94rem;
    border-radius: 0.12rem;
    background-color: #fafafa;

    .form-hd {
      border-radius: 0.11rem 0.11rem 0rem 0rem;
      // line-height: .56rem;
      line-height: 114%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 0.01rem solid #dadada;
      padding-top: 0.16rem;
      padding-bottom: 0.16rem;
      padding-left: 0.39rem;
      padding-right: 0.22rem;

      .form-text {
        flex: 1;
        font-size: 0.2rem;
        font-weight: 500;
      }

      .form-number {
        border-radius: 0.04rem;
        width: 0.4rem;
        height: 0.2rem;
        background-color: black;
        color: #f5f5f5;
        line-height: 0.2rem;
        font-size: 0.12rem;
        text-align: center;
      }
    }

    .form-content {
      background-color: #fefefe;

      .form-tips {
        padding: 0.24rem 0 0.4rem 0.39rem;
        font-size: 0.16rem;
      }

      .form-age {
        padding-left: 0.39rem;
        font-size: 0.18rem;
        font-weight: 500;
      }

      .age-stage-selection {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.16rem 0.4rem 0.4rem 0.4rem;

        .age-stage {
          width: 2.28rem;
          height: 0.64rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding-left: 0.16rem;
          border-radius: 0.06rem;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
          background: #fefefe;

          .radio-box {
            width: 0.16rem;
            height: 0.16rem;
            margin-right: 0.16rem;
            border-radius: 50%;
            border: 0.01rem solid rgba(26, 26, 26, 0.16);
            background: #fefefe;
          }
        }

        .age-stage.checked {
          border: 0.01rem solid #ff3263;
          color: #ff3263;

          .radio-box {
            position: relative;
            border-color: #ff3263;

            &::before {
              content: '';
              width: 0.08rem;
              height: 0.08rem;
              border-radius: 50%;
              position: absolute;
              background: #ff3263;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      .form-line {
        border: 0.01rem solid #1a1a1a29;
        margin: 0 auto;
        width: 7.16rem;
      }

      .form-title {
        font-size: 0.18rem;
        font-weight: 500;
        padding: 0.4rem 0 0 0.4rem;
      }

      .experience-stage-selection {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.16rem 0.4rem 0.4rem 0.4rem;

        .experience-stage {
          padding: 0.16rem;
          width: 2.28rem;
          height: 1.6rem;
          cursor: pointer;
          border-radius: 0.06rem;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
          background: #fefefe;

          .radio-box {
            width: 0.16rem;
            height: 0.16rem;
            margin-right: 0.16rem;
            border-radius: 50%;
            border: 0.01rem solid rgba(26, 26, 26, 0.16);
            background: #fefefe;
          }

          .radio-lab {
            font-size: 0.14rem;
            font-weight: 500;
            margin-top: 0.24rem;
          }

          .radio-label {
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.12rem;
            margin-top: 0.08rem;
          }
        }

        .experience-stage.checked {
          border: 1px solid #ff3263;
          color: #ff3263;
          padding: 0.16rem;

          .radio-box {
            position: relative;
            border-color: #ff3263;

            &::before {
              content: '';
              width: 0.08rem;
              height: 0.08rem;
              border-radius: 50%;
              position: absolute;
              background: #ff3263;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .radio-lab {
            color: #ff3263;
            font-size: 0.14rem;
            font-weight: 500;
          }

          .radio-label {
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.12rem;
          }
        }
      }

      .form-line1 {
        border: 1px solid #1a1a1a29;
        margin: 0 auto;
        width: 7.16rem;
      }

      .form-title1 {
        font-size: 0.18rem;
        font-weight: 500;
        padding: 0.4rem 0 0 0.4rem;
      }

      .accommodation-option-selection {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.16rem 0.4rem 0.4rem 0.4rem;

        .accommodation-option {
          width: 1.67rem;
          height: 1.06rem;
          cursor: pointer;
          border-radius: 0.06rem;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
          background: #fefefe;

          .accommodation-class {
            height: 0.72rem;
            text-align: center;
            padding-top: 0.28rem;
          }

          .line {
            width: 1.67rem;
            height: 0.01rem;
            background: rgba(26, 26, 26, 0.16);
          }

          .standard {
            margin: 0 auto;
            font-size: 0.14rem;
            font-weight: 500;
            padding-top: 0.09rem;
            text-align: center;
          }
        }

        .accommodation-option.checked {
          border: 0.01rem solid #ff3263;
          color: #ff3263;

          .accommodation-class {
          }

          .line {
            width: 1.67rem;
            height: 0.01rem;
            background: rgba(26, 26, 26, 0.16);
          }

          .standard {
            color: #ff3263;
            font-size: 0.14rem;
            font-weight: 500;
          }
        }
      }

      .button {
        width: 0.99rem;
        height: 0.4rem;
        border-radius: 0.08rem;
        background-color: #ff3263;
        color: #fefefe;
        font-size: 0.16rem;
        margin: 0 0.4rem 0.4rem 6.57rem;
      }
    }
  }

  .form-box-2 {
    .form-list {
      display: flex;
      justify-content: space-between;
      // align-items: center;
      padding: 0 0.4rem 0.4rem;

      .left {
        .text {
          font-size: 0.18rem;
          font-weight: 500;
        }

        .box {
          margin-top: 0.16rem;
          display: flex;
          align-items: center;
          width: 3.5rem;
          height: 0.64rem;
          border-radius: 0.06rem;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
          background-color: #fefefe;
          padding-left: 0.24rem;

          .symbol {
            font-size: 0.14rem;
            font-weight: 500;
          }

          .number {
            padding-left: 0.24rem;
            color: rgba(26, 26, 26, 0.6);
            font-size: 0.16rem;

            ::v-deep .el-input__inner {
              border: 0;
            }
          }
        }
      }

      .right {
        .text {
          font-size: 0.18rem;
          font-weight: 500;
        }

        .box {
          margin-top: 0.16rem;
          display: flex;
          align-items: center;
          width: 3.5rem;
          height: 0.64rem;
          border-radius: 0.06rem;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
          background-color: #fefefe;
          padding-left: 0.24rem;

          .describle {
            color: rgba(26, 26, 26, 0.4);
            font-size: 0.16rem;
          }

          ::v-deep .el-input__inner {
            border: 0;
          }
        }
      }
    }

    .form-line {
      margin-top: 0.4rem;
    }

    .plan-stage-selection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.16rem 0.4rem 0;

      .plan-stage {
        width: 2.28rem;
        height: 1.04rem;
        border-radius: 0.06rem;
        border: 0.01rem solid rgba(26, 26, 26, 0.16);
        background: #fefefe;
        padding: 0.16rem;
        cursor: pointer;

        .radio-box {
          width: 0.16rem;
          height: 0.16rem;
          // margin-right: .16rem;
          border-radius: 50%;
          border: 0.01rem solid rgba(26, 26, 26, 0.16);
          background: #fefefe;
        }

        .radio-lab {
          font-size: 0.14rem;
          font-weight: 500;
          margin-top: 0.24rem;
        }
      }

      .plan-stage.checked {
        border: 0.01rem solid #ff3263;
        color: #ff3263;
        padding: 0.16rem;

        .radio-box {
          position: relative;
          border-color: #ff3263;

          &::before {
            content: '';
            width: 0.08rem;
            height: 0.08rem;
            border-radius: 50%;
            position: absolute;
            background: #ff3263;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .radio-lab {
          color: #ff3263;
          font-size: 0.14rem;
          font-weight: 500;
        }
      }
    }

    .form-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.54rem 0.4rem 0.4rem 0.4rem;

      ::v-deep .el-button {
        height: 0.4rem;
        border-radius: 0.08rem;
      }

      .back {
        // border-radius: .08rem;
        border: 0.01rem solid rgba(26, 26, 26, 0.16);
        font-size: 0.16rem;
      }

      .submit {
      }
    }

    .title {
      color: #1a1a1a;
      font-size: 0.2rem;
      font-weight: 500;
      text-align: center;
    }

    .country-code {
      margin-top: 0.2rem;
      display: flex;
      max-height: 1.12rem;

      align-items: flex-start;
      border-radius: 0.06rem;
      width: 100%;

      .left {
        border-radius: 0.06rem 0 0 0.06rem;
        //height: .42rem;
        width: 1.5rem;
        flex-shrink: 0;
        border-top: 0.01rem solid #dadada;
        border-left: 0.01rem solid #dadada;
        border-bottom: 0.01rem solid #dadada;

        ::v-deep .el-input__inner {
          border: 0;
        }
      }

      .input {
        position: relative;
        border-radius: 0 0.06rem 0.06rem 0;
        flex: 1;
        //height: .42rem;
        border: 0.01rem solid #dadada;

        .send-btn {
          position: absolute;
          right: 0.04rem;
          top: 0.04rem;

          ::v-deep .el-button {
            padding: 0 0.1rem;
            height: 0.32rem;
          }
        }

        ::v-deep .el-input__inner {
          border: 0;
        }
      }
    }

    .intro {
      color: rgba(26, 26, 26, 0.6);
      font-size: 0.12rem;
      text-align: center;
      margin-top: 0.16rem;
      padding: 0 0.16rem;
    }

    .submit-button {
      width: 100%;
      // width: 3.36rem;
      margin-top: 0.4rem;
    }
  }

  .form-result {
    width: 3.32rem;
    max-height: 5.99rem;
    border-radius: 0.12rem;
    border: 0.01rem solid rgba(26, 26, 26, 0.16);
    background: #fefefe;

    .result-hd {
      font-weight: 500;
      border-radius: 0.11rem 0.11rem 0rem 0rem;
      border-bottom: 0.01rem solid #dadada;
      background: #fafafa;
      font-size: 0.2rem;
      height: 0.56rem;
      padding: 0 0.24rem;
      line-height: 0.56rem;
    }

    .result-pic {
      height: 2rem;
      margin-bottom: 0.12rem;
    }

    .result-item {
      height: 0.4rem;
      display: flex;
      margin: 0 0.24rem;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 0.01rem rgba(26, 26, 26, 0.16);

      .item-val {
        padding-left: 0.2rem;
        text-align: right;
        color: rgba(26, 26, 26, 0.87);
        font-weight: 500;
      }
    }
  }
}

::v-deep .mobile .step-box {
  padding: 0.08rem 0.2rem;
}

::v-deep .mobile .step-box .el-steps {
  width: 332px;
  height: 24px;
}

::v-deep .mobile .step-box .el-steps .el-step__head {
  width: 64px;
}

::v-deep .mobile .step-box .el-steps .el-step__line {
  height: 2px;
  left: 24px;
  width: 40px;
  margin-top: 0;
  top: 11px;
  background: rgba(255, 50, 99, 1);
  color: #ff3263;
}
::v-deep .mobile .el-step__icon-inner {
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
}

.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
    display: block;
    position: relative;
  }

  .connect-with {
    margin: 0px;
  }

  .step-box {
    padding: 0.08rem 0.2rem;

    ::v-deep .el-steps {
      width: 332px;
      height: 24px;

      .el-step__head {
        width: 64px;
      }

      .el-step__icon {
        height: 24px;
        width: 24px;
      }

      .el-step__line {
        height: 2px;
        left: 24px;
        width: 40px;
        margin-top: 0;
        top: 9px;
        background: rgba(255, 50, 99, 1);
        color: #ff3263;
      }

      .el-step__icon-inner {
        font-family: Rubik;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
      }
    }
  }

  .header {
    height: 0.48rem;

    .logo {
      height: 0.24rem;
    }

    .header-right {
      display: none;
    }

    .nav-bar {
      border-left: none;
      width: 0.56rem;
      height: 0.48rem;

      .icon-bar {
        width: 0.2rem;
      }
    }
  }

  .box-container {
    width: auto;
    padding: 0.15rem 0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin: 0;

    .form-box {
      padding: 0.2rem !important;
    }

    .form-hd {
      padding: 0;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;

      .form-text {
        color: #1a1a1a;
        font-size: 0.16rem;
        font-style: normal;
        font-weight: 500;
        line-height: 0.16rem;
        padding: 0.08rem 0 0.12rem;
      }
    }

    .form-box {
      background-color: #fff;
      width: 3.36rem;
      min-height: auto;
      margin-bottom: 0;
      padding: 0 0.2rem;
      height: auto !important;

      .form-tips {
        padding: 0.24rem 0;
      }

      .form-content {
        .age-stage-selection {
          padding: 0.16rem 0.4rem 0.24rem 0.4rem;
          display: flex;
          flex-direction: column;

          .age-stage {
            width: 3.04rem;
            height: 0.48rem;
            margin-bottom: 0.08rem;
          }
        }
        .form-line {
          width: 100%;
        }
      }
    }

    .form-result {
      margin-bottom: 0.16rem;
    }

    .form-age {
      padding-left: 0!important;
    }

    .form-content {
      .accommodation-option-selection {
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        .accommodation-option {
          width: 1.32rem;
          margin-bottom: 0.08rem;

          .line {
            width: auto !important;
          }
        }
      }
    }

    .form-line {
      width: 3.36rem;
    }

    .form-line1 {
      width: auto !important;
    }

    .form-title {
      padding: 0.4rem 0 !important;
    }

    .form-title1 {
      padding: 0.4rem 0 !important;
    }

    .form-content {
      .experience-stage-selection {
        padding: 0 0 0.24rem;
        display: flex;
        flex-direction: column;

        .experience-stage {
          width: 3.04rem;
          //height: .48rem;
          margin-bottom: 0.08rem;
        }
      }
    }

    ::v-deep .el-button {
      width: 3.36rem !important;
      height: 0.8rem;
      margin: 0 auto !important;
    }

    .next-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0.6rem;
    }
  }

  .form-box-2 {
    background-color: #ffffff;

    .form-hd {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-start;

      .form-text {
        padding-top: 0;
        padding-left: 0.08rem;
      }
    }

    .form-list {
      padding: 0;
      display: flex;
      flex-direction: column;

      .left {
        .box {
          width: auto;
          padding-left: 0.16rem;
          margin-bottom: 0.16rem;
        }
      }

      .right {
        .box {
          width: auto;
          padding-left: 0.16rem;

          .text {
            padding: 0;

            ::v-deep {
              .el-input__inner {
                padding: 0;
              }
            }
          }
        }
      }
    }

    .form-line {
      width: 2.92rem !important;
      margin-top: 0.24rem !important;
    }

    .form-title {
      padding: 0.24rem 0 !important;
    }

    .plan-stage-selection {
      display: flex;
      flex-direction: column;
      padding: 0.16rem 0;

      .plan-stage {
        width: 3.04rem;
        height: 0.64rem;
        margin-bottom: 0.08rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .radio-lab {
          padding: 0 0 0 0.16rem;
          margin: 0;
          width: 2.4rem;
        }
      }
    }

    .form-bottom {
      padding: 0;

      ::v-deep {
        .back {
          display: none;
        }
      }

      .country-code {
        flex-direction: column;

        .left {
          width: 3.36rem;

          ::v-deep {
            .el-input__inner {
              width: 3.36rem;
              border: 0.01rem solid #dadada;
              height: 0.48rem;
            }
          }
        }

        .input {
          position: relative;
          width: 3.36rem;
          height: 0.48rem;
          border: 0;

          ::v-deep {
            .el-input__inner {
              width: 3.36rem;
              border: 0.01rem solid #dadada;
              height: 0.48rem;
            }
          }

          .send-btn {
            width: 0.16rem !important;
            position: absolute;
            right: 0.9rem;
            top: 0.08rem;

            ::v-deep .el-button {
              width: auto !important;
            }
          }
        }
      }

      .intro {
        margin-top: 0;
        margin-bottom: 0.24rem;
      }
    }
  }
}

.footer {
  width: 100%;
  // padding: 0 1rem 0 1rem;
}
</style>
