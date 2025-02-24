<template>
  <div class="page">
    <!-- header start-->
    <div class="header">
      <div class="logo" @click="toHome">
        <img src="~assets/images/Logo.svg" alt="">
      </div>
    </div>
    <div class="step-box">
      <el-steps :active="active">
        <el-step title=""></el-step>
        <el-step title=""></el-step>
        <el-step title=""></el-step>
        <el-step title=""></el-step>
      </el-steps>
    </div>
    <div class="box-container">
      <div class="form-box" v-if="active === 0">
        <div class="form-hd">How many people are travelling?</div>
        <div class="form-list">
          <div class="form-item" :class="peopleTypeIndex == 0 ? 'checked' : ''" @click="handlePeople(0, 'Single')">
            <div class="item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20.0003 20.0003C23.6837 20.0003 26.667 17.017 26.667 13.3337C26.667 9.65033 23.6837 6.66699 20.0003 6.66699C16.317 6.66699 13.3337 9.65033 13.3337 13.3337C13.3337 17.017 16.317 20.0003 20.0003 20.0003ZM20.0003 23.3337C15.5503 23.3337 6.66699 25.567 6.66699 30.0003V33.3337H33.3337V30.0003C33.3337 25.567 24.4503 23.3337 20.0003 23.3337Z" :fill="peopleTypeIndex == 0 ? '#FF3263' : '#1A1A1A'" />
              </svg>
            </div>
            <div class="item-lab">
              Single
            </div>
          </div>
          <div class="form-item" :class="peopleTypeIndex == 1 ? 'checked' : ''" @click="handlePeople(1, 'Couple')">
            <div class="item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M11.6667 1.66699C12.4908 1.66699 13.2964 1.91136 13.9816 2.3692C14.6668 2.82704 15.2008 3.47779 15.5162 4.23914C15.8316 5.0005 15.9141 5.83828 15.7533 6.64653C15.5925 7.45479 15.1957 8.19722 14.613 8.77994C14.0303 9.36266 13.2878 9.75949 12.4796 9.92026C11.6713 10.081 10.8336 9.99852 10.0722 9.68316C9.31084 9.36779 8.6601 8.83374 8.20226 8.14853C7.74442 7.46333 7.50005 6.65775 7.50005 5.83366C7.50005 4.72859 7.93904 3.66878 8.72044 2.88738C9.50184 2.10598 10.5616 1.66699 11.6667 1.66699ZM34.9134 12.807C34.7828 12.4884 34.5656 12.2127 34.2863 12.0112C34.007 11.8097 33.6769 11.6905 33.3334 11.667H23.3334C22.9889 11.6872 22.6573 11.8051 22.3774 12.007C22.0976 12.2089 21.8811 12.4864 21.7534 12.807L20 18.0653L18.2467 12.807C18.2467 12.7853 18.2234 12.772 18.2167 12.752C18.1691 12.6418 18.1093 12.5372 18.0384 12.4403C17.9903 12.3543 17.9345 12.2729 17.8717 12.197C17.7974 12.1295 17.7177 12.0682 17.6334 12.0137C17.5473 11.942 17.454 11.8795 17.355 11.827C17.2696 11.7948 17.1815 11.7702 17.0917 11.7537C16.973 11.7142 16.8498 11.6896 16.725 11.6803C16.7067 11.6787 16.6884 11.667 16.6667 11.667H6.66672C6.64505 11.667 6.62672 11.6787 6.60505 11.6803C6.48025 11.6894 6.35707 11.714 6.23838 11.7537C6.14856 11.77 6.06041 11.7946 5.97505 11.827C5.87638 11.8791 5.78362 11.9417 5.69838 12.0137C5.61247 12.0672 5.53208 12.1292 5.45838 12.1987C5.39615 12.2738 5.34039 12.3541 5.29172 12.4387C5.22025 12.5361 5.15988 12.6412 5.11172 12.752C5.11172 12.772 5.08838 12.7853 5.08172 12.807L1.74838 22.807C1.6087 23.2269 1.64156 23.6851 1.83972 24.0808C2.03788 24.4765 2.38512 24.7773 2.80505 24.917C3.22498 25.0567 3.68319 25.0238 4.07889 24.8257C4.47459 24.6275 4.77537 24.2802 4.91505 23.8603L6.66672 18.602V36.667C6.66672 37.109 6.84231 37.5329 7.15487 37.8455C7.46743 38.1581 7.89136 38.3337 8.33338 38.3337C8.77541 38.3337 9.19933 38.1581 9.51189 37.8455C9.82445 37.5329 10 37.109 10 36.667V26.667H13.3334V36.667C13.3334 37.109 13.509 37.5329 13.8215 37.8455C14.1341 38.1581 14.558 38.3337 15 38.3337C15.4421 38.3337 15.866 38.1581 16.1786 37.8455C16.4911 37.5329 16.6667 37.109 16.6667 36.667V18.602L18.42 23.8603C18.5121 24.0998 18.6535 24.3173 18.8349 24.4988C19.0164 24.6802 19.2339 24.8216 19.4734 24.9137C19.6433 24.9699 19.821 24.9992 20 25.0003C20.3473 24.9905 20.6836 24.8766 20.9654 24.6733C21.2471 24.47 21.4613 24.1868 21.58 23.8603L23.3334 18.602V36.667C23.3334 37.109 23.509 37.5329 23.8215 37.8455C24.1341 38.1581 24.558 38.3337 25 38.3337C25.4421 38.3337 25.866 38.1581 26.1786 37.8455C26.4911 37.5329 26.6667 37.109 26.6667 36.667V26.667H30V36.667C30 37.109 30.1756 37.5329 30.4882 37.8455C30.8008 38.1581 31.2247 38.3337 31.6667 38.3337C32.1087 38.3337 32.5327 38.1581 32.8452 37.8455C33.1578 37.5329 33.3334 37.109 33.3334 36.667V18.602L35.0867 23.8603C35.1559 24.0682 35.2653 24.2605 35.4088 24.4261C35.5523 24.5918 35.7269 24.7275 35.9229 24.8257C36.1188 24.9238 36.3321 24.9823 36.5507 24.998C36.7693 25.0137 36.9888 24.9862 37.1967 24.917C37.4046 24.8478 37.5969 24.7384 37.7625 24.5949C37.9282 24.4515 38.0639 24.2768 38.162 24.0808C38.2602 23.8849 38.3187 23.6716 38.3344 23.453C38.3501 23.2344 38.3225 23.0149 38.2534 22.807L34.9134 12.807ZM24.1667 5.83366V10.0003H32.5V5.83366C32.5 4.72859 32.0611 3.66878 31.2797 2.88738C30.4983 2.10598 29.4384 1.66699 28.3334 1.66699C27.2283 1.66699 26.1685 2.10598 25.3871 2.88738C24.6057 3.66878 24.1667 4.72859 24.1667 5.83366Z"
                  :fill="peopleTypeIndex == 1 ? '#FF3263' : '#1A1A1A'" />
              </svg>
            </div>
            <div class="item-lab">
              Couple
            </div>
          </div>
          <div class="form-item" :class="peopleTypeIndex == 2 ? 'checked' : ''" @click="handlePeople(2, 'Family')">
            <div class="item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="red">
                <path d="M8.26685 10.2812C9.82935 10.2812 11.1106 9 11.1106 7.4375C11.1106 5.875 9.82935 4.59375 8.26685 4.59375C7.20435 4.59375 6.26685 5.1875 5.7981 6.03125C5.7356 6.125 5.6731 6.21875 5.57935 6.3125C5.01685 6.875 4.1106 6.875 3.57935 6.3125C3.4856 6.21875 3.4231 6.125 3.3606 6.03125C3.70435 8.4375 5.76685 10.2812 8.26685 10.2812Z" :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
                <path
                  d="M14.3602 24.5C15.0477 24.4062 15.5164 23.8125 15.4539 23.125L14.3914 14.0625C14.1414 12.3437 12.6727 11 10.8602 11H5.42269C3.64144 11 2.14144 12.3437 1.89144 14.0625L0.797687 23.125C0.703937 23.8125 1.20394 24.4375 1.89144 24.5C2.57894 24.5937 3.20394 24.0937 3.26644 23.4062L4.29769 15C4.32894 14.8437 4.48519 14.7187 4.64144 14.7187C4.82894 14.7187 4.98519 14.875 4.98519 15.0625C4.98519 15.0937 4.98519 15.125 4.98519 15.125C4.98519 15.125 4.26644 21.0937 4.23519 21.2187C4.20394 21.375 4.20394 21.5312 4.20394 21.6875V36.8437C4.20394 37.9062 4.98519 38.7812 5.98519 38.7812C6.95394 38.7812 7.76644 37.9062 7.76644 36.8437V24.5C7.76644 24.3125 7.92269 24.1562 8.11019 24.1562C8.29769 24.1562 8.45394 24.3125 8.45394 24.5V36.8125C8.45394 37.875 9.23519 38.75 10.2352 38.75C11.2039 38.75 12.0164 37.875 12.0164 36.8125V21.6562C12.0164 21.5 12.0164 21.3438 11.9852 21.1875C11.9852 21.0625 11.2352 15.0937 11.2352 15.0937C11.2352 15.0937 11.2352 15.0625 11.2352 15.0312C11.2352 14.8437 11.3914 14.6875 11.5789 14.6875C11.7664 14.6875 11.8914 14.8125 11.9227 14.9687L12.9227 23.375C13.0477 24.0937 13.6727 24.5937 14.3602 24.5Z"
                  :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
                <path d="M16.3606 28.7812C17.2753 28.7812 18.0168 28.0397 18.0168 27.125C18.0168 26.2103 17.2753 25.4688 16.3606 25.4688C15.4459 25.4688 14.7043 26.2103 14.7043 27.125C14.7043 28.0397 15.4459 28.7812 16.3606 28.7812Z" :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
                <path d="M18.0793 29.2188H14.6106C13.7356 29.25 13.0168 30 13.0168 30.875V33.1562C13.0168 33.5 13.2981 33.75 13.6418 33.75C13.9856 33.75 14.2668 33.4687 14.2668 33.1562V31.25C14.2668 31.125 14.3606 31.0625 14.4856 31.0625C14.6106 31.0625 14.6731 31.1562 14.6731 31.25V38.0312C14.6731 38.4375 14.9856 38.75 15.3918 38.75C15.7981 38.75 16.1106 38.4375 16.1106 38.0312V34.5937C16.1106 34.4687 16.2043 34.4062 16.2981 34.4062C16.4231 34.4062 16.4856 34.5 16.4856 34.5937V38.0312C16.4856 38.4375 16.7981 38.75 17.2043 38.75C17.6106 38.75 17.9231 38.4375 17.9231 38.0312V31.25C17.9231 31.125 18.0168 31.0625 18.1106 31.0625C18.2356 31.0625 18.3293 31.1562 18.3293 31.25V33.1562C18.3293 33.5 18.6106 33.75 18.9543 33.75C19.2981 33.75 19.5793 33.4687 19.5793 33.1562V30.875C19.6731 30 18.9856 29.25 18.0793 29.2188Z" :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
                <path d="M31.9231 10.125C33.4937 10.125 34.7668 8.85181 34.7668 7.28125C34.7668 5.71069 33.4937 4.4375 31.9231 4.4375C30.3525 4.4375 29.0793 5.71069 29.0793 7.28125C29.0793 8.85181 30.3525 10.125 31.9231 10.125Z" :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
                <path d="M35.5168 10.875H28.3918C26.4231 10.875 24.8293 12.4688 24.8293 14.4375V23.1562C24.8293 23.8438 25.3918 24.4062 26.0793 24.4062C26.7981 24.4062 27.3293 23.8438 27.3293 23.1562V15.1562C27.3293 14.9688 27.4856 14.8125 27.6731 14.8125C27.8606 14.8125 28.0168 14.9688 28.0168 15.1562V36.8125C28.0168 37.875 28.7981 38.75 29.7981 38.75C30.7981 38.75 31.5793 37.875 31.5793 36.8125V24.4688C31.5793 24.2813 31.7356 24.125 31.9231 24.125C32.1106 24.125 32.2668 24.2813 32.2668 24.4688V36.8125C32.2668 37.875 33.0481 38.75 34.0481 38.75C35.0481 38.75 35.8293 37.875 35.8293 36.8125V15.1562C35.8293 14.9688 35.9856 14.8125 36.1731 14.8125C36.3606 14.8125 36.5168 14.9688 36.5168 15.1562V23.1875C36.5168 23.875 37.0793 24.4375 37.7668 24.4375C38.4856 24.4375 39.0168 23.875 39.0168 23.1875V14.4375C39.0793 12.4688 37.4543 10.875 35.5168 10.875Z" :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
                <path d="M23.7974 28.7812C24.7121 28.7812 25.4536 28.0397 25.4536 27.125C25.4536 26.2103 24.7121 25.4688 23.7974 25.4688C22.8826 25.4688 22.1411 26.2103 22.1411 27.125C22.1411 28.0397 22.8826 28.7812 23.7974 28.7812Z" :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
                <path d="M25.5474 29.2188H22.0474C21.1724 29.25 20.4536 30 20.4536 30.875V33.1562C20.4536 33.5 20.7349 33.75 21.0786 33.75C21.4224 33.75 21.7036 33.4687 21.7036 33.1562V31.25C21.7036 31.125 21.7974 31.0625 21.9224 31.0625C22.0474 31.0625 22.1099 31.1562 22.1099 31.25V38.0312C22.1099 38.4375 22.4224 38.75 22.8286 38.75C23.2349 38.75 23.5474 38.4375 23.5474 38.0312V34.5937C23.5474 34.4687 23.6411 34.4062 23.7349 34.4062C23.8599 34.4062 23.9224 34.5 23.9224 34.5937V38.0312C23.9224 38.4375 24.2349 38.75 24.6411 38.75C25.0474 38.75 25.3599 38.4375 25.3599 38.0312V31.25C25.3599 31.125 25.4536 31.0625 25.5474 31.0625C25.6724 31.0625 25.7661 31.1562 25.7661 31.25V33.1562C25.7661 33.5 26.0474 33.75 26.3911 33.75C26.7349 33.75 27.0161 33.4687 27.0161 33.1562V30.875C27.1099 30 26.4224 29.25 25.5474 29.2188Z" :fill="peopleTypeIndex == 2 ? '#FF3263' : '#1A1A1A'" />
              </svg>
            </div>
            <div class="item-lab">
              Family
            </div>
          </div>
          <div class="form-item" :class="peopleTypeIndex == 3 ? 'checked' : ''" @click="handlePeople(3, 'Group')">
            <div class="item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M11.529 25.0142C11.5229 24.952 11.5034 24.8946 11.5034 24.8323V24.2989C11.5034 24.045 11.5448 23.7948 11.6279 23.5567C11.6279 23.5567 12.9573 21.777 13.5859 19.6859C12.8974 18.2332 12.2724 16.4254 12.2724 14.6334C12.2724 14.2171 12.303 13.8143 12.3457 13.4175C11.4485 12.4776 10.2363 11.9453 8.89719 11.9453C6.13227 11.9453 3.88868 14.2012 3.88868 17.707C3.88868 20.5122 6.17141 23.5566 6.17141 23.5566C6.25196 23.7947 6.29352 24.0449 6.29352 24.2988V24.8323C6.29352 25.4976 5.90532 26.103 5.29985 26.3802L1.67555 27.8609C0.833207 28.2491 0.233832 29.023 0.0666447 29.9336L0.0043791 30.7307C-0.0273396 31.1458 0.114223 31.5547 0.397426 31.8587C0.679379 32.1651 1.07618 32.3372 1.49243 32.3372H7.41649L7.65938 29.2159L7.67524 29.1316C7.97188 27.4947 9.05344 26.103 10.5646 25.4073L11.529 25.0142Z" :fill="peopleTypeIndex == 3 ? '#FF3263' : '#1A1A1A'" />
                <path d="M39.9332 29.9336C39.7671 29.023 39.1678 28.249 38.3255 27.8609L34.6988 26.3802C34.0933 26.103 33.7075 25.4976 33.7075 24.8323V24.2988C33.7075 24.0449 33.7479 23.7947 33.8308 23.5566C33.8308 23.5566 36.1123 20.5122 36.1123 17.707C36.1123 14.2012 33.8699 11.9453 31.1001 11.9453C29.7635 11.9453 28.5513 12.4776 27.6516 13.4199C27.6956 13.8155 27.7261 14.217 27.7261 14.6333C27.7261 16.4241 27.1023 18.232 26.415 19.6845C27.0425 21.7756 28.3743 23.5566 28.3743 23.5566C28.4548 23.7947 28.4975 24.0449 28.4975 24.2988V24.8323C28.4975 24.8945 28.4768 24.9519 28.4707 25.0141L29.3691 25.3804C30.9438 26.1006 32.0254 27.4922 32.3257 29.1291L32.3404 29.2146L32.5821 32.3372H38.5086C38.9248 32.3372 39.3215 32.1651 39.6023 31.8587C39.8855 31.5547 40.0271 31.1458 39.9954 30.7307L39.9332 29.9336Z" :fill="peopleTypeIndex == 3 ? '#FF3263' : '#1A1A1A'" />
                <path d="M28.7399 26.9223L24.3527 25.1291C23.6203 24.7922 23.1528 24.0598 23.1528 23.2566V22.6096C23.1528 22.3045 23.2016 22.0005 23.303 21.7112C23.303 21.7112 26.0618 18.0295 26.0618 14.6335C26.0618 10.3903 23.3482 7.66211 19.9998 7.66211C16.6526 7.66211 13.9377 10.3904 13.9377 14.6335C13.9377 18.0295 16.699 21.7112 16.699 21.7112C16.7979 22.0005 16.8491 22.3045 16.8491 22.6096V23.2566C16.8491 24.0598 16.378 24.7922 15.6467 25.1291L11.2595 26.9223C10.2402 27.3898 9.51391 28.3273 9.31375 29.4309L9.08789 32.3373H19.9998H30.9116L30.6883 29.4309C30.4855 28.3274 29.7592 27.3899 28.7399 26.9223Z" :fill="peopleTypeIndex == 3 ? '#FF3263' : '#1A1A1A'" />
              </svg>
            </div>
            <div class="item-lab">
              Group
            </div>
          </div>
        </div>
        <div class="form-number">
          <template v-if="peopleTypeIndex == 2 || peopleTypeIndex == 3">
            <div class="form-item">
              <div class="form-lab">
                No. of Adults
              </div>
              <div class="form-val">
                <el-input-number :min="0" v-model="form.adultsNum"></el-input-number>
              </div>
            </div>
            <div class="form-item">
              <div class="form-lab">
                No. of Children
              </div>
              <div class="form-val">
                <el-input-number :min="0" v-model="form.childrenNum"></el-input-number>
              </div>
            </div>
          </template>
          <el-button type="primary" @click="handleNext(1)">Next</el-button>
        </div>
        <div class="tip-warning" v-if="step1_tips">
          Please be more specific about your group size.
        </div>
      </div>
      <div class="form-box form-box-2" v-if="active === 1">
        <div class="form-hd">When will you be traveling?</div>
        <div class="form-list">
          <div class="form-item" :class="dateType == 0 ? 'checked' : ''" @click="handleDateType(0)">
            <div class="item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z" :fill="dateType == 0 ? '#FF3263' : '#1A1A1A'" />
                <path d="M15.2929 17.7071C15.6834 17.3166 16.3166 17.3166 16.7071 17.7071L17.3483 18.3482L19.2473 16.4491C19.6379 16.0586 20.271 16.0586 20.6616 16.4491C21.0521 16.8397 21.0521 17.4728 20.6616 17.8634L18.1213 20.4036C18.0349 20.49 17.9367 20.5573 17.8318 20.6054C17.4488 20.8294 16.9488 20.7772 16.6203 20.4487L15.2929 19.1213C14.9024 18.7308 14.9024 18.0976 15.2929 17.7071Z" :fill="dateType == 0 ? '#FF3263' : '#1A1A1A'" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z" :fill="dateType == 0 ? '#FF3263' : '#1A1A1A'" />
              </svg>
            </div>
            <div class="item-lab">
              I have my exact dates
            </div>
          </div>
          <div class="form-item" :class="dateType == 1 ? 'checked' : ''" @click="handleDateType(1)">
            <div class="item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 14C7 13.4477 7.44772 13 8 13C8.55229 13 9 13.4477 9 14C9 14.5523 8.55229 15 8 15C7.44772 15 7 14.5523 7 14Z" :fill="dateType == 1 ? '#FF3263' : '#1A1A1A'" />
                <path d="M8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19C8.55229 19 9 18.5523 9 18C9 17.4477 8.55229 17 8 17Z" :fill="dateType == 1 ? '#FF3263' : '#1A1A1A'" />
                <path d="M11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z" :fill="dateType == 1 ? '#FF3263' : '#1A1A1A'" />
                <path d="M12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z" :fill="dateType == 1 ? '#FF3263' : '#1A1A1A'" />
                <path d="M15 14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14Z" :fill="dateType == 1 ? '#FF3263' : '#1A1A1A'" />
                <path d="M16 17C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17Z" :fill="dateType == 1 ? '#FF3263' : '#1A1A1A'" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H6V2ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H19C19.5523 5 20 5.44772 20 6V9H4V6C4 5.44772 4.44772 5 5 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16ZM4 11V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11H4Z" :fill="dateType == 1 ? '#FF3263' : '#1A1A1A'" />
              </svg>
            </div>
            <div class="item-lab">
              I have my approx. dates
            </div>
          </div>
          <div class="form-item" :class="dateType == 2 ? 'checked' : ''" @click="handleDateType(2)">
            <div class="item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99951 1C6.44723 1 5.99951 1.44772 5.99951 2V3H4.99951C3.34266 3 1.99951 4.34315 1.99951 6V20C1.99951 21.6569 3.34266 23 4.99951 23H13.1005C12.5146 22.4259 12.0292 21.7496 11.6731 21H4.99951C4.44723 21 3.99951 20.5523 3.99951 20V11H19.9995V11.2899C20.7219 11.5049 21.3955 11.8334 21.9995 12.2547V6C21.9995 4.34315 20.6564 3 18.9995 3H17.9995V2C17.9995 1.44772 17.5518 1 16.9995 1C16.4472 1 15.9995 1.44772 15.9995 2V3H7.99951V2C7.99951 1.44772 7.55179 1 6.99951 1ZM15.9995 6V5H7.99951V6C7.99951 6.55228 7.55179 7 6.99951 7C6.44723 7 5.99951 6.55228 5.99951 6V5H4.99951C4.44723 5 3.99951 5.44772 3.99951 6V9H19.9995V6C19.9995 5.44772 19.5518 5 18.9995 5H17.9995V6C17.9995 6.55228 17.5518 7 16.9995 7C16.4472 7 15.9995 6.55228 15.9995 6Z" :fill="dateType == 2 ? '#FF3263' : '#1A1A1A'" />
                <path d="M16.9995 16C16.9995 15.4477 17.4472 15 17.9995 15C18.5518 15 18.9995 15.4477 18.9995 16V17.703L19.8796 18.583C20.2701 18.9736 20.2701 19.6067 19.8796 19.9973C19.4891 20.3878 18.8559 20.3878 18.4654 19.9973L17.2924 18.8243C17.0823 18.6142 16.9852 18.3338 17.0012 18.0588C17.0001 18.0393 16.9995 18.0197 16.9995 18V16Z" :fill="dateType == 2 ? '#FF3263' : '#1A1A1A'" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9995 18C23.9995 21.3137 21.3132 24 17.9995 24C14.6858 24 11.9995 21.3137 11.9995 18C11.9995 14.6863 14.6858 12 17.9995 12C21.3132 12 23.9995 14.6863 23.9995 18ZM13.9814 18C13.9814 20.2191 15.7804 22.0181 17.9995 22.0181C20.2186 22.0181 22.0176 20.2191 22.0176 18C22.0176 15.7809 20.2186 13.9819 17.9995 13.9819C15.7804 13.9819 13.9814 15.7809 13.9814 18Z" :fill="dateType == 2 ? '#FF3263' : '#1A1A1A'" />
              </svg>
            </div>
            <div class="item-lab">
              I will decide later
            </div>
          </div>
        </div>
        <template v-if="dateType === 0">
          <div class="form-number">
            <div class="form-item">
              <div class="form-lab">
                Pick your trip start date
              </div>
              <div class="form-lab-mobile">
                Select start date
              </div>
              <div class="form-val my-input">
                <el-date-picker v-model="form.startDate" type="date" value-format="yyyy-MM-dd" :picker-options="pickerOptionsStart" placeholder="From">
                </el-date-picker>
              </div>
            </div>
            <div class="form-item">
              <div class="form-lab">
                Pick your trip end date
              </div>
              <div class="form-lab-mobile">
                Select end date
              </div>
              <div class="form-val my-input">
                <el-date-picker v-model="form.endDate" :picker-options="pickerOptionsEnd" value-format="yyyy-MM-dd" type="date" placeholder="To">
                </el-date-picker>
              </div>
            </div>
          </div>
          <div class="form-tips">
            Trip Start and End dates can be changed later if you wish to.
          </div>
          <div class="tip-warning" v-if="step2_tips">
            {{ step2_tips_text }}
          </div>
        </template>
        <template v-if="dateType === 1">
          <div class="form-number">
            <div class="form-item">
              <div class="form-lab">
                Select your departure month
              </div>
              <div class="form-lab-mobile">
                Select your month
              </div>
              <div class="form-val my-input">
                <el-date-picker v-model="form.month" :picker-options="pickerOptionsStart" format="MM yyyy" value-format="yyyy-MM" type="month" prefix-icon="''" placeholder="Month">
                </el-date-picker>
              </div>
            </div>
            <div class="form-item">
              <div class="form-lab">
                Select your preferred duration
              </div>
              <div class="form-lab-mobile">
                Select your duration
              </div>
              <div class="form-val my-input">
                <el-select v-model="form.duration" placeholder="Days">
                  <!--<el-option :value="1" label="Less than 1 Day"></el-option>-->
                  <el-option v-for="item in 29" :key="item" :value="`${item+1} Days`" :label="`${item+1} Days`"></el-option>
                  <el-option value="30+" label="More than 30 days"></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="form-tips">
            Departure month and duration can be changed later if you wish to.
          </div>
          <div class="tip-warning" v-if="step2_tips">
            {{ step2_tips_text }}
          </div>
        </template>
        <div class="form-btn" :style="{'margin-top':dateType==2?'1rem':'0'}">
          <el-button type="primary" @click="handleNext(2)">Next</el-button>
        </div>
      </div>
      <div class="form-box form-box-3" v-if="active === 2">
        <div class="form-hd">We're almost there! Please create your Kenta Membership (It's Free)</div>
        <div class="form-con">
          <div class="form-tips">
            Your details needed so we can securely connect you with a travel expert.
          </div>
          <div class="login-or-sign">
            <div class="login-box">
              <div class="btn btn-red" @click="toLogin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.6665 2H1.33317C1.15636 2 0.98679 2.07024 0.861766 2.19526C0.736742 2.32029 0.666504 2.48986 0.666504 2.66667V13.3333C0.666504 13.5101 0.736742 13.6797 0.861766 13.8047C0.98679 13.9298 1.15636 14 1.33317 14H14.6665C14.8433 14 15.0129 13.9298 15.1379 13.8047C15.2629 13.6797 15.3332 13.5101 15.3332 13.3333V2.66667C15.3332 2.48986 15.2629 2.32029 15.1379 2.19526C15.0129 2.07024 14.8433 2 14.6665 2ZM13.9998 12.6667H1.99984V6.318L7.75184 8.61933C7.91115 8.68245 8.08853 8.68245 8.24784 8.61933L13.9998 6.318V12.6667ZM13.9998 4.882L7.99984 7.282L1.99984 4.882V3.33333H13.9998V4.882Z" fill="#FEFEFE" />
                </svg>
                &nbsp;Login with Email
              </div>
              <div class="to-login">Already have an account? <a @click="toLogin" href="javascript:void();">Log In</a>
              </div>
            </div>
            <div class="sign-box">
              <div class="btn btn-blue">
                <google-login></google-login>
                <img src="../assets/images/icon-google.png" />
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                    fill="none">
                    <g clip-path="url(#clip0_1403_4625)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.8572 6.40313H8.16904C8.16904 7.20268 8.16903 8.80163 8.16413 9.60118H12.6192C12.4485 10.4007 11.8432 11.5203 10.988 12.084C10.988 12.084 10.9863 12.0887 10.9847 12.0879C9.84766 12.8387 8.34711 13.009 7.23293 12.7852C5.48651 12.4382 4.10438 11.1716 3.54321 9.5629C3.54647 9.5605 3.54894 9.53833 3.55139 9.53673C3.20014 8.53889 3.20014 7.20268 3.55139 6.40313H3.55057C4.0031 4.93356 5.42686 3.59278 7.17574 3.22579C8.58235 2.92756 10.1695 3.2504 11.3368 4.34259C11.492 4.19067 13.4851 2.24465 13.6346 2.08634C9.6467 -1.52523 3.2614 -0.254784 0.872114 4.40899H0.871296C0.871296 4.40899 0.87212 4.40918 0.867219 4.41798C-0.314763 6.70869 -0.265753 9.40789 0.875386 11.5891C0.872119 11.5915 0.86967 11.5929 0.867219 11.5953C1.90135 13.6022 3.78337 15.1413 6.05095 15.7274C8.45984 16.359 11.5255 15.9273 13.579 14.0699L13.5815 14.0723C15.3214 12.5052 16.4045 9.8356 15.8572 6.40313Z"
                            fill="#FEFEFE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1403_4625">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg> -->
                &nbsp;
                Sign up with Google
              </div>
              <div class="btn btn-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_3304_699)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54612 16H0.883077C0.395224 16 0 15.6045 0 15.1169V0.883072C0 0.395285 0.395286 0 0.883077 0H15.117C15.6047 0 16 0.395285 16 0.883072V15.1169C16 15.6046 15.6046 16 15.117 16H11.0398V9.80392H13.1195L13.4309 7.3892H11.0398V5.84755C11.0398 5.14843 11.2339 4.672 12.2364 4.672L13.5151 4.67144V2.5117C13.294 2.48227 12.5349 2.41652 11.6519 2.41652C9.80828 2.41652 8.54612 3.54184 8.54612 5.6084V7.3892H6.46104V9.80392H8.54612V16Z" fill="#4460A0" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3304_699">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                    fill="none">
                    <g clip-path="url(#clip0_1403_4630)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.54612 16H0.883077C0.395224 16 0 15.6045 0 15.1169V0.883072C0 0.395285 0.395286 0 0.883077 0H15.117C15.6047 0 16 0.395285 16 0.883072V15.1169C16 15.6046 15.6046 16 15.117 16H11.0398V9.80392H13.1195L13.4309 7.3892H11.0398V5.84755C11.0398 5.14843 11.2339 4.672 12.2364 4.672L13.5151 4.67144V2.5117C13.294 2.48227 12.5349 2.41652 11.6519 2.41652C9.80828 2.41652 8.54612 3.54184 8.54612 5.6084V7.3892H6.46104V9.80392H8.54612V16Z"
                            fill="#FEFEFE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1403_4630">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg> -->
                &nbsp;
                Sign up with Facebook
              </div>
              <div class="btn btn-twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M16 2.91193C15.4121 3.17965 14.7791 3.3607 14.1152 3.4416C14.7932 3.02556 15.3135 2.36588 15.5586 1.58004C14.9238 1.96525 14.2222 2.2455 13.4728 2.39573C12.8755 1.74183 12.0218 1.3335 11.0771 1.3335C9.26548 1.3335 7.79574 2.84066 7.79574 4.69933C7.79574 4.9632 7.82391 5.21938 7.88026 5.46592C5.15208 5.32531 2.73381 3.98668 1.11381 1.94792C0.831132 2.44677 0.669596 3.02556 0.669596 3.64191C0.669596 4.80912 1.24905 5.83958 2.12995 6.4434C1.59277 6.42703 1.08563 6.27391 0.642365 6.02352V6.06493C0.642365 7.69632 1.77402 9.0571 3.27663 9.36527C3.00147 9.44424 2.71128 9.48373 2.41169 9.48373C2.20039 9.48373 1.99378 9.46351 1.79374 9.42402C2.21166 10.7607 3.42313 11.7344 4.86001 11.7604C3.7368 12.6637 2.32059 13.202 0.783234 13.202C0.518398 13.202 0.256383 13.1866 0 13.1558C1.45284 14.1092 3.17896 14.6668 5.03187 14.6668C11.0705 14.6668 14.3715 9.53862 14.3715 5.09033C14.3715 4.94394 14.3687 4.79756 14.3631 4.65407C15.0045 4.17929 15.5614 3.58702 16 2.91193Z"
                    fill="#00AAEC" />
                </svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                    fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 2.91193C15.4121 3.17965 14.7791 3.3607 14.1152 3.4416C14.7932 3.02556 15.3135 2.36588 15.5586 1.58004C14.9238 1.96525 14.2222 2.2455 13.4728 2.39573C12.8755 1.74183 12.0218 1.3335 11.0771 1.3335C9.26548 1.3335 7.79574 2.84066 7.79574 4.69933C7.79574 4.9632 7.82391 5.21938 7.88026 5.46592C5.15208 5.32531 2.73381 3.98668 1.11381 1.94792C0.831132 2.44677 0.669596 3.02556 0.669596 3.64191C0.669596 4.80912 1.24905 5.83958 2.12995 6.4434C1.59277 6.42703 1.08563 6.27391 0.642365 6.02352V6.06493C0.642365 7.69632 1.77402 9.0571 3.27663 9.36527C3.00147 9.44424 2.71128 9.48373 2.41169 9.48373C2.20039 9.48373 1.99378 9.46351 1.79374 9.42402C2.21166 10.7607 3.42313 11.7344 4.86001 11.7604C3.7368 12.6637 2.32059 13.202 0.783234 13.202C0.518398 13.202 0.256383 13.1866 0 13.1558C1.45284 14.1092 3.17896 14.6668 5.03187 14.6668C11.0705 14.6668 14.3715 9.53862 14.3715 5.09033C14.3715 4.94394 14.3687 4.79756 14.3631 4.65407C15.0045 4.17929 15.5614 3.58702 16 2.91193Z"
                        fill="#FEFEFE" />
                </svg> -->
                &nbsp;
                Sign up with Twitter
              </div>
            </div>
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
            <template v-if="peopleTypeIndex == 2 || peopleTypeIndex == 3">
              <template v-if="form.adultsNum * 1 > 0">{{ form.adultsNum }}{{ form.adultsNum > 1 ? ' Adults' : ' Adult' }}
              </template>
              {{ form.adultsNum * 1 > 0 && form.childrenNum * 1 > 0 ? ',' : '' }}
              <template v-if="form.childrenNum * 1 > 0">{{ form.childrenNum }}{{
                  form.childrenNum > 1 ? ' Children' : ' Child'
                }}
              </template>
            </template>
            ({{ peopleType }})
          </div>
        </div>
        <div class="result-item" v-if="active > 0">
          <div class="item-lab">
            Travel dates
          </div>
          <div class="item-val">
            <template v-if="dateType==0">
              {{ form.startDate }}{{ form.startDate && form.endDate ? '~' : '' }}{{ form.endDate }}
            </template>
            <template v-else-if="dateType==1">
              {{ form.month }}{{ form.month && form.duration ? '，' : '' }}{{ form.duration }}
            </template>
            <template v-else-if="dateType==2">
              Not decided yet
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="tips-box" v-if="active === 0">
      <div class="item">
        <div class="item-num">1</div>
        <div class="item-text">Define your dream trip</div>
        <div class="item-sub-text">
          Share your casino vacation preferences.
        </div>
      </div>
      <div class="item">
        <div class="item-num">2</div>
        <div class="item-text">Connect with an expert</div>
        <div class="item-sub-text">
          Get personalized advice from our specialist.
        </div>
      </div>
      <div class="item">
        <div class="item-num">3</div>
        <div class="item-text">Book with confidence</div>
        <div class="item-sub-text">
          Secure your tailor-made itinerary with ease.
        </div>
      </div>
    </div>

    <div class="next-btn-mobile">
      <el-button type="primary" @click="handleNext(active+1)">Next</el-button>
    </div>
  </div>
</template>

<script>
import { destinationDetail } from '@/api/destination'

export default {
  name: 'CustomTrip',
  data () {
    return {
      active: 0,
      form: {
        adultsNum: 1,
        childrenNum: 0,
        startDate: '',
        endDate: '',
        month: '',
        duration: '',
      },
      pickerOptionsStart: {
        disabledDate (time) {
          // 禁止选择今天以前的日期
          return time.getTime() < Date.now() - 8.64e7; // 8.64e7毫秒是一天的时间
        },
      },
      pickerOptionsEnd: {
        disabledDate: (time) => {
          // 禁止选择比开始日期前的日期
          return time.getTime() < (this.form.startDate ? new Date(this.form.startDate).getTime() : 0);
        },
      },
      destinationId: '',
      destinationForm: {},
      peopleType: 'Single',
      peopleTypeIndex: 0,
      dateType: 0,
      step1_tips: false,
      step2_tips: false,
      step2_tips_text: 'Please pick your trip start and end dates.',
    }

  },
  created () {
    this.destinationId = this.$route.query.id;
    this.getDestination();
  },
  watch: {
    'form.adultsNum' (val) {
      if (val * 1 > 0) {
        this.step1_tips = false;
      } else {
        this.step1_tips = true;
      }
    },
  },
  mounted () {
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    },
    handleNext (step) {
      if (step == 1) {
        if (this.form.adultsNum === 0 && this.form.childrenNum === 0) {
          this.step1_tips = true;
          return;
        } else {
          this.step1_tips = false;
        }

        this.active++;
      }
      if (step == 2) {
        if (this.dateType == 0) {
          if (this.form.startDate == "" || this.form.endDate == "") {
            this.step2_tips = true;
            return;
          }
        }
        if (this.dateType == 1) {
          if (this.form.month == "" || this.form.duration == "") {
            this.step2_tips = true;
            return;
          }
        }

        if (this.$store.getters.token) {
          let parmas = {
            adultsNum: this.form.adultsNum,
            childrenNum: this.form.childrenNum,
            approxDuration: this.form.duration,
            approxMonth: this.form.month,
            destinationId: this.destinationId,
            endDate: this.form.endDate,
            peopleNumType: this.peopleTypeIndex,
            startDate: this.form.startDate,
            travelDateType: this.dateType,
          };
          this.$router.push({
            path: '/concierge',
            query: parmas,
          })
        } else {
          this.active++;
        }
      }
    },
    getDestination () {
      let params = {
        id: this.destinationId
      };
      destinationDetail(params).then((res) => {
        this.destinationForm = res.data;
      })
    },
    handlePeople (index, type) {
      this.peopleType = type;
      if (index === 0) {
        this.form.adultsNum = 1;
        this.form.childrenNum = 0;
      } else if (index === 1) {
        this.form.adultsNum = 2;
        this.form.childrenNum = 0;
      } else {
        this.form.adultsNum = 0;
        this.form.childrenNum = 0;
      }
      this.peopleTypeIndex = index;
    },
    handleDateType (index) {
      this.dateType = index;
      if (index === 0) {
        this.step2_tips_text = 'Please pick your trip start and end dates.';
      } else if (index === 1) {
        this.step2_tips_text = 'Please select your departure month and preferred duration.';
      }
    },
    toLogin () {
      this.$router.push('/login')
      let obj = {
        adultsNum: this.form.adultsNum,
        childrenNum: this.form.childrenNum,
        approxDuration: this.form.duration,
        approxMonth: this.form.month,
        destinationId: this.destinationId,
        endDate: this.form.endDate,
        peopleNumType: this.peopleTypeIndex,
        startDate: this.form.startDate,
        travelDateType: this.dateType,
      };
      let params = new URLSearchParams(obj);
      this.$store.commit('SET_REDIRECT', '/concierge?' + params.toString());
    },
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-steps {
  width: 448px;
  height: 40px;
}

::v-deep.step-box .el-steps .el-step__head.is-finish .el-step__line-inner {
  //width: 136px;
  width: 0!important;
}

::v-deep .el-input-number {
  position: relative;
  display: inline-block;
  width: 1.44rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.08rem;
  background: #fefefe;
}
::v-deep .el-input-number .el-input__inner {
  color: rgba(26, 26, 26, 0.87);
  font-family: Rubik;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 500;
}
::v-deep .el-input-number .el-input__inner {
  color: rgba(26, 26, 26, 0.87);
  font-family: Rubik;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.16rem; /* 100% */
}
::v-deep .el-input-number__decrease,
.el-input-number__increase {
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 0.4rem;
  height: 0.35rem;
  text-align: center;
  /* background: #F5F7FA; */
  // color: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
}

::v-deep .el-input__inner::placeholder {
  color: rgba(26, 26, 26, 0.87);
  font-family: Rubik;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.16rem; /* 100% */
}
::v-deep .el-step__icon-inner {
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
}
.page {
  background: #f5f5f5;
  min-height: 100vh;
}

body {
  background: #f5f5f5;
}

.header {
  width: 100%;
  height: 0.64rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  // padding-right: 1.12rem;
  background: #fefefe;
  color: rgba(26, 26, 26, 0.6);
  font-weight: 500;

  .logo {
    height: 0.32rem;

    img {
      height: 100%;
    }
  }
}

.tip-warning {
  margin-left: 2.97rem;
  margin-top: 0.2rem;
  // text-align: center;
  text-align: left;
  color: #ff3263;
}

.box-container {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0 0.4rem;
  width: 11.44rem;
  margin: 0 auto;

  .form-box {
    width: 7.96rem;
    min-height: 4rem;
    padding-bottom: 0.2rem;
    border-radius: 0.12rem;
    border: 0.01rem solid rgba(26, 26, 26, 0.16);
    background: #fefefe;

    .form-lab-mobile {
      display: none;
    }

    .form-hd {
      color: #1a1a1a;
      font-weight: 500;
      border-radius: 0.11rem 0.11rem 0px 0px;
      border-bottom: 0.01rem solid #dadada;
      background: #fafafa;
      font-size: 0.2rem;
      height: 0.56rem;
      padding: 0 0.4rem;
      line-height: 0.56rem;
    }

    .form-list {
      display: flex;
      padding: 0.4rem 0.32rem 0.66rem;

      .form-item {
        cursor: pointer;
        flex: 1;
        border-radius: 0.06rem;
        border: 0.01rem solid rgba(26, 26, 26, 0.16);
        background: #fefefe;
        margin: 0.08rem;

        .item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 0.72rem;
        }

        .item-lab {
          height: 0.34rem;
          line-height: 0.34rem;
          text-align: center;
          color: rgba(26, 26, 26, 0.87);
          font-size: 0.14rem;
          font-weight: 500;
          border-top: solid 0.01rem rgba(26, 26, 26, 0.16);
        }
      }

      .form-item.checked {
        border-color: #ff3263;

        .item-lab {
          color: rgba(255, 50, 99, 1);
        }
      }
    }

    .form-number {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 0 40px;

      .form-item {
        margin-right: 0.16rem;
      }

      .form-lab {
        color: #1a1a1a;
        font-size: 0.12rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 0.08rem;
      }
    }
  }

  .form-box-2 {
    .form-list {
      padding: 0.4rem 0.32rem 0;

      .form-item {
        height: 0.96rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .item-icon {
          height: 0.3rem;
        }

        .item-lab {
          display: inline;
          margin-top: 0;
          border-top: none;
        }
      }
    }

    .form-number {
      margin-top: 0.2rem;
      display: flex;
      align-items: center;

      .form-item {
        flex: 1;
        margin-right: 0;
      }

      .form-item + .form-item {
        margin-left: 0.16rem;
      }
    }

    .form-tips {
      text-align: center;
      font-size: 0.12rem;
      padding: 0.16rem 0 0.08rem;
    }

    .form-btn {
      padding: 0 0.4rem;
      display: flex;
      justify-content: flex-end;

      .el-button {
        width: 0.99rem;
      }
    }
  }

  .form-box-3 {
    .form-tips {
      color: #1a1a1a;
      font-weight: 300;
      font-size: 0.16rem;
    }
    .form-con {
      padding: 0.24rem 0.4rem;

      .login-or-sign {
        display: flex;
        margin-top: 0.4rem;

        .login-box {
          margin-right: 0.16rem;

          .to-login {
            font-weight: 400;
            margin-top: 0.24rem;
            font-size: 0.14rem;
            color: rgba(26, 26, 26, 0.6);

            a {
              font-weight: 500;
              color: #1a1a1a;
            }
          }
        }

        .btn {
          position: relative;
          width: 3.5rem;
          height: 0.48rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.16rem;
          color: #fefefe;
          margin-bottom: 0.08rem;
          border-radius: 0.04rem;
          cursor: pointer;
        }

        .btn:hover {
          opacity: 0.9;
        }

        .btn-red {
          border-radius: 8px;
          background: #ff3263;
        }

        .btn-blue {
          // background: #3451FF;
          color: #1a1a1a;
          background: #fefefe;
          border: 0.01rem solid #dadada;

          img {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
        }

        .btn-facebook {
          // background: #4460A0;
          color: #1a1a1a;
          background: #fefefe;
          border: 0.01rem solid #dadada;
        }

        .btn-twitter {
          // background: #00AAEC;
          color: #1a1a1a;
          background: #fefefe;
          border: 0.01rem solid #dadada;
        }
      }
    }
  }

  .form-result {
    width: 3.36rem;
    min-height: 4rem;
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
        // padding-left: .1rem;
        text-align: right;
        color: rgba(26, 26, 26, 0.87);
        font-weight: 500;
      }
    }
  }
}

.next-btn-mobile {
  display: none;
}

.tips-box {
  width: 6.8rem;
  height: 1.44rem;
  margin: 0 auto;
  border-radius: 0.12rem;
  border: 0.01rem solid #dadada;
  background: #fefefe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;

  .item {
    flex: 1;
    text-align: center;

    .item-num {
      width: 0.32rem;
      height: 0.32rem;
      margin: 0 auto;
      text-align: center;
      line-height: 0.32rem;
      border: 0.016rem solid #ff3263;
      border-radius: 50%;
      color: #ff3263;
      font-size: 0.16rem;
      font-weight: 500;
    }

    .item-text {
      color: rgba(26, 26, 26, 0.87);
      font-size: 0.16rem;
      margin: 0.08rem 0;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      line-height: 0.16rem; /* 100% */
    }

    .item-sub-text {
      color: rgba(26, 26, 26, 0.6);
      font-size: 0.14rem;
    }
  }
}

::v-deep .mobile .step-box .el-steps {
  width: 336px;
  height: 24px;
}

::v-deep .mobile .step-box .el-steps .el-step__icon {
  height: 24px;
  width: 24px;
}

.mobile {
  .page {
    width: 3.75rem;
    overflow-x: hidden;
    overflow-y: scroll;
    display: block;
    position: relative;
  }

  .step-box {
    padding: 0.08rem 0.2rem;

    ::v-deep .el-steps {
      width: 336px;
      height: 24px;

      .el-step__icon {
        height: 24px;
        width: 24px;
      }

      .el-step__line {
        height: 2px;
        left: 24px;
        width: 80px;
        margin-top: 0;
        top: 11px;
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
      min-width: 0.78rem;
      text-align: center;
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
      width: auto;
      min-height: auto;
      margin-bottom: 0;
      padding-bottom: 0.16rem;
    }

    .form-result {
      margin-bottom: 0.16rem;
    }

    .form-hd {
      color: #1a1a1a;
      font-size: 0.16rem;
      font-style: normal;
      font-weight: 500;
      display: flex;
      align-items: center;
      padding: 0.16rem;
    }

    .form-list {
      padding: 0.16rem 0.16rem 0 0.16rem;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;

      .form-item {
        width: 1.44rem;
        height: 0.4rem;
        padding: 0.08rem 0.16rem;
        border-radius: 0.04rem;
        border: 1px solid rgba(26, 26, 26, 0.16);
        background: #fefefe;
        display: flex;
        flex-direction: row;

        .item-icon {
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.08rem;
        }

        .item-lab {
          height: 0.24rem;
          width: auto;
          line-height: 0.24rem;
        }
      }
    }

    .form-number {
      padding: 0.16rem 0.16rem 0 0.16rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .form-item {
        margin-right: 0;
      }

      ::v-deep .el-input-number {
        width: 1.44rem;
      }

      ::v-deep .el-button {
        display: none;
      }
    }

    .tip-warning {
      margin-left: 0;
      text-align: center;
    }

    .form-box-2 {
      width: 3.36rem;
      margin-bottom: 0.68rem;
      .form-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.16rem 0;

        .form-item {
          width: 3.04rem;
        }
      }

      .form-lab {
        display: none;
      }

      .form-tips {
        width: 3rem;
        margin: 0 auto;
      }

      .form-lab-mobile {
        display: block;
        text-align: center;
        margin-bottom: 0.08rem;
      }

      .form-btn {
        display: none;
      }

      .form-number {
        .form-val {
          ::v-deep {
            input::placeholder {
              font-size: 0.1rem;
            }
          }
        }
      }
    }

    .form-box-3 {
      width: 3.36rem;
      height: auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 0.68rem;

      .form-hd {
        height: auto;
        font-size: 0.16rem;
        font-weight: 500;
        color: #1a1a1a;
        padding: 0.16rem;
        line-height: 0.16rem;
        border-bottom: 0.01rem solid #dadada;
      }

      .form-con {
        padding: 0.24rem 0.16rem 0 0.16rem;
      }

      .login-or-sign {
        display: flex;
        flex-wrap: wrap-reverse;

        .login-box {
          margin-right: 0;
          text-align: center;
        }

        .btn {
          width: 3.04rem;
        }
      }
    }
  }

  .tips-box {
    width: 3.36rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.24rem 0.16rem;
    margin-bottom: 0.76rem;

    .item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0.32rem;

      .item-num {
        margin: 0;
      }
    }

    .item:last-child {
      margin-bottom: 0;
    }
  }

  .next-btn-mobile {
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0.2rem;

    ::v-deep .el-button {
      width: 3.36rem;
      height: 0.4rem;
    }
  }
}
</style>
