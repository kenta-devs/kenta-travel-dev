<template>
  <div class="page">
    <!-- header start-->
    <kt-header></kt-header>
    <!-- header end-->
    <div class="nav-box">
      <div class="container-box">
        <div class="item-list">
          <div class="item" :class="pageIndex == 5 ? 'active' : ''" @click="handleType(5)">
            My Trips
          </div>
          <div class="item" :class="pageIndex == 0 ? 'active' : ''" @click="handleType(0)">
            Account Settings
          </div>
          <div class="item" :class="pageIndex == 1 ? 'active' : ''" @click="handleType(1)">
            Recently Viewed
          </div>
          <div class="item" :class="pageIndex == 2 ? 'active' : ''" @click="handleType(2)">
            Messages
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

    <div class="member-box container-box" v-if="pageIndex === 5">
      <div class="white-box">
        <div class="hd">My Trips</div>
        <div v-for="(item, index) in orderList" :key="item.id" class="room-box">
          <div class="room-box-info">
            <div style="line-height:1;font-size:0">
              <img :src="item.$hotel.$preview" class="rbi-img">
            </div>
            <div class="rbi-center">
              <div class="rbic-star">
                <el-rate :value="item.$hotel.star_rating" disabled />
                <span class="rbic-star-label">· {{ item.$hotel.center_distance }} mile from city center</span>
              </div>
              <div class="rbic-title">{{ item.$hotel.name }}</div>
              <div class="rbic-text">DOUBLE QUEEN SIZE BED</div>
              <div class="rbic-detail">1 Room, {{ item.$night }} Night, {{ item.adult || 1 }} Adults</div>
            </div>
            <div class="rbi-right">
              <div class="rbir-label">Check-in: After {{ item.$hotel.$check_in_time_format }}</div>
              <div class="rbir-text">{{ item.$checkin }}</div>
              <div class="rbir-label mt16">Check-out: Before {{ item.$hotel.$check_out_time_format }}</div>
              <div class="rbir-text">{{ item.$checkout }}</div>
            </div>
          </div>
          <div class="room-box-amenity">
            <div>
              <span class="rba-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8.9276 1.915C8.9216 1.862 8.9061 1.81 8.8786 1.761C8.8231 1.6615 8.7456 1.566 8.6751 1.476C8.6271 1.417 8.5776 1.352 8.5191 1.302C8.4361 1.2325 8.3421 1.17 8.2336 1.148C8.1571 1.1335 8.0816 1.128 8.0041 1.125C7.9806 1.124 7.9576 1.1235 7.9346 1.1235C7.8916 1.1235 7.8486 1.125 7.8056 1.127C7.7586 1.128 7.7121 1.13 7.6651 1.129C7.5056 1.128 7.3461 1.1405 7.1866 1.147C7.0156 1.1535 6.8436 1.1625 6.6716 1.167C6.4861 1.172 6.3006 1.1785 6.1156 1.1835C5.9416 1.1875 5.7676 1.2035 5.5941 1.2085C5.2911 1.217 4.9871 1.215 4.6846 1.217C4.3721 1.219 4.0596 1.243 3.7471 1.263C3.5986 1.2725 3.4501 1.2785 3.3021 1.289C3.1091 1.3025 2.9001 1.3165 2.7306 1.421C2.6206 1.488 2.5396 1.5805 2.4726 1.6895C2.3781 1.842 2.3611 2.021 2.3761 2.1955C2.3771 2.2015 2.3791 2.2065 2.3801 2.2125C2.3721 2.243 2.3606 2.273 2.3611 2.306C2.3651 2.7015 2.4011 3.0955 2.4221 3.49C2.4411 3.858 2.4431 4.226 2.4576 4.5925C2.4861 5.3485 2.4156 6.1175 2.6191 6.8555C2.6956 7.1345 2.7921 7.4105 2.9316 7.6665C3.0531 7.889 3.2201 8.061 3.4321 8.198C3.6281 8.324 3.8401 8.369 4.0696 8.39C4.1726 8.3985 4.2771 8.408 4.3811 8.415C4.4086 8.4165 4.4371 8.416 4.4651 8.417C4.4441 8.792 4.4281 9.167 4.4166 9.5435C4.4041 9.9575 4.3756 10.37 4.3681 10.7845C4.3556 11.5555 4.3316 12.3305 4.3576 13.1025C4.3651 13.3355 4.3846 13.568 4.4256 13.798C4.4416 13.885 4.4646 13.968 4.4971 14.051C4.5401 14.163 4.5871 14.2775 4.6481 14.3805C4.7551 14.563 4.9011 14.7265 5.0821 14.8375C5.2541 14.9425 5.4661 14.982 5.6631 14.996C5.8311 15.0075 6.0061 14.992 6.1686 14.9475C6.2271 14.932 6.2786 14.91 6.3341 14.8855C6.4126 14.851 6.4786 14.791 6.5416 14.7335C6.6246 14.656 6.6946 14.551 6.7491 14.4505C6.8456 14.272 6.8916 14.0585 6.9306 13.862C6.9706 13.6605 6.9966 13.451 7.0061 13.2455C7.0146 13.0565 7.0216 12.867 7.0221 12.677C7.0231 12.489 7.0086 12.2995 6.9991 12.1115C6.9811 11.7295 6.9511 11.348 6.9286 10.966C6.9046 10.574 6.8731 10.1835 6.8436 9.7915C6.8311 9.6235 6.8246 9.454 6.8081 9.286C6.7921 9.1085 6.7701 8.9315 6.7516 8.754C6.7441 8.684 6.7336 8.6145 6.7241 8.545C6.8691 8.54 7.0136 8.5365 7.1581 8.5185C7.2926 8.5025 7.4266 8.4915 7.5546 8.446C7.6816 8.402 7.8106 8.36 7.9256 8.2875C8.1156 8.168 8.2946 8.024 8.4606 7.874C8.6611 7.6925 8.7731 7.448 8.8656 7.1985C8.9791 6.888 9.0321 6.547 9.0321 6.217C9.0331 5.854 9.0321 5.489 9.0246 5.126C9.0171 4.7935 9.0301 4.46 9.0391 4.1275C9.0486 3.749 9.0371 3.3705 9.0391 2.9925C9.0411 2.7335 9.0726 2.4755 9.0746 2.2155C9.0746 2.0935 9.0151 1.988 8.9276 1.915ZM8.2696 6.078C8.2686 6.2115 8.2731 6.346 8.2596 6.4795C8.2336 6.652 8.1936 6.8285 8.1296 6.9905C8.0966 7.065 8.0621 7.1415 8.0186 7.21C7.9581 7.2785 7.8886 7.3385 7.8176 7.3955C7.7186 7.4665 7.6111 7.531 7.5011 7.5845C7.4051 7.619 7.3021 7.646 7.2026 7.663C7.0671 7.6795 6.9326 7.6955 6.7976 7.713C6.8091 7.7115 6.8211 7.7095 6.8326 7.708C6.7311 7.7215 6.6356 7.7175 6.5346 7.71C6.3921 7.698 6.2701 7.7835 6.1931 7.8985C6.1916 7.899 6.1906 7.8985 6.1891 7.899C6.1871 7.899 6.1851 7.9 6.1826 7.901C6.0191 7.946 5.9016 8.099 5.9016 8.27C5.9016 8.3215 5.9126 8.3715 5.9321 8.417C5.9621 8.684 5.9796 8.9525 6.0066 9.2195C6.0236 9.3885 6.0276 9.5585 6.0381 9.728C6.0506 9.923 6.0716 10.118 6.0841 10.313C6.1106 10.703 6.1356 11.093 6.1701 11.4815C6.2036 11.859 6.2351 12.2365 6.2506 12.614C6.2621 12.9055 6.2561 13.2035 6.2236 13.4925C6.1951 13.671 6.1571 13.845 6.0961 14.015C6.0781 14.052 6.0576 14.0875 6.0351 14.122C6.0176 14.142 5.9996 14.1615 5.9801 14.18C5.9446 14.1905 5.9086 14.1985 5.8726 14.205C5.7921 14.2115 5.7121 14.211 5.6316 14.2045C5.5891 14.1965 5.5476 14.1855 5.5071 14.172C5.4896 14.163 5.4726 14.1535 5.4556 14.143C5.4211 14.1115 5.3891 14.078 5.3591 14.0425C5.3141 13.9765 5.2761 13.9075 5.2426 13.835C5.2211 13.781 5.2016 13.726 5.1886 13.6695C5.1771 13.6205 5.1686 13.5705 5.1611 13.52C5.1161 13.1575 5.1321 12.7885 5.1341 12.4245C5.1361 12.0375 5.1416 11.6505 5.1486 11.2635C5.1631 10.438 5.1876 9.6125 5.2546 8.7885C5.2691 8.605 5.2841 8.4225 5.2976 8.239C5.3081 8.097 5.2216 7.976 5.1056 7.901C5.1036 7.892 5.1061 7.883 5.1036 7.874C5.0751 7.77 5.0051 7.679 4.9116 7.6245C4.8201 7.571 4.7251 7.561 4.6256 7.576C4.5311 7.5805 4.4326 7.568 4.3391 7.5585C4.2436 7.5485 4.1481 7.543 4.0526 7.5335C4.0021 7.525 3.9516 7.514 3.9031 7.4985C3.8566 7.4735 3.8111 7.4445 3.7671 7.414C3.7286 7.3795 3.6931 7.3415 3.6591 7.302C3.5861 7.198 3.5216 7.086 3.4676 6.971C3.3701 6.7195 3.3066 6.4515 3.2651 6.185C3.2336 5.8955 3.2411 5.602 3.2411 5.312C3.2401 4.9825 3.2306 4.654 3.2226 4.324C3.2151 3.999 3.2131 3.674 3.1836 3.3505C3.1511 3.0025 3.1511 2.655 3.1541 2.306C3.1541 2.296 3.1491 2.2875 3.1481 2.2775C3.1541 2.25 3.1661 2.2225 3.1636 2.1955C3.1596 2.155 3.1546 2.114 3.1531 2.073C3.2116 2.0565 3.2721 2.045 3.3321 2.0355C3.4881 2.018 3.6461 2.008 3.8031 1.9945C3.8091 2.315 3.8281 2.6345 3.8526 2.9545C3.8631 3.102 3.8661 3.248 3.8766 3.395C3.8881 3.547 3.9036 3.698 3.9121 3.851C3.9281 4.135 3.9301 4.4205 3.9281 4.705C3.9266 4.9805 3.9261 5.255 3.9166 5.5305C3.9076 5.5495 3.8996 5.5695 3.8936 5.5905C3.8801 5.6405 3.8801 5.6895 3.8791 5.74C3.8771 5.9465 4.0541 6.1185 4.2586 6.1185C4.4621 6.1185 4.6406 5.9465 4.6371 5.74C4.6371 5.724 4.6371 5.7075 4.6371 5.6915C4.6366 5.6375 4.6251 5.589 4.6056 5.545C4.6046 5.2735 4.6186 5.002 4.6171 4.7305C4.6151 4.4445 4.6151 4.1585 4.6006 3.873C4.5866 3.571 4.5596 3.271 4.5521 2.969C4.5441 2.627 4.5401 2.2855 4.5416 1.9435C4.7426 1.936 4.9441 1.9305 5.1446 1.931C5.1786 1.931 5.2131 1.9305 5.2471 1.9305C5.2531 2.244 5.2651 2.5575 5.2716 2.8705C5.2781 3.209 5.2821 3.547 5.2861 3.8845C5.2881 4.0525 5.2891 4.22 5.2891 4.387C5.2891 4.5515 5.2786 4.7155 5.2836 4.88C5.2876 5.0465 5.2996 5.2125 5.3086 5.379C5.3151 5.5195 5.3136 5.659 5.3141 5.7995C5.3141 5.9965 5.4776 6.1605 5.6751 6.1605C5.8596 6.1605 6.0516 5.996 6.0361 5.7995C6.0256 5.6675 6.0236 5.535 6.0206 5.402C6.0176 5.2375 6.0071 5.0735 6.0051 4.909C6.0041 4.739 6.0126 4.568 6.0156 4.398C6.0196 4.227 6.0186 4.056 6.0186 3.885C6.0186 3.5505 6.0071 3.215 6.0121 2.88C6.0171 2.558 6.0311 2.236 6.0376 1.914C6.1816 1.9115 6.3251 1.9095 6.4696 1.908C6.5241 1.907 6.5781 1.907 6.6326 1.9065C6.6371 2.266 6.6531 2.624 6.6766 2.983C6.7006 3.347 6.7311 3.712 6.7471 4.077C6.7626 4.423 6.7651 4.77 6.7861 5.1155C6.8016 5.3715 6.7881 5.6335 6.8291 5.8875C6.8436 5.9775 6.9246 6.065 7.0001 6.11C7.0861 6.1595 7.1911 6.174 7.2876 6.1475C7.3801 6.1215 7.4616 6.0595 7.5101 5.9765C7.5541 5.901 7.5626 5.8275 7.5551 5.748C7.5566 5.759 7.5581 5.7705 7.5596 5.7815C7.5536 5.726 7.5466 5.6715 7.5391 5.6165C7.5281 5.5225 7.5261 5.428 7.5206 5.3335C7.5131 5.176 7.4996 5.019 7.4921 4.8625C7.4766 4.5415 7.4741 4.2195 7.4586 3.8985C7.4426 3.564 7.4146 3.2295 7.3926 2.896C7.3716 2.5625 7.3866 2.2275 7.3906 1.894C7.4206 1.8935 7.4506 1.8915 7.4811 1.892C7.5461 1.894 7.6121 1.893 7.6771 1.892C7.7851 1.8895 7.8926 1.888 7.9996 1.8965C8.0286 1.926 8.0566 1.958 8.0826 1.99C8.1226 2.0455 8.1621 2.104 8.1931 2.1635C8.2146 2.2035 8.2456 2.2345 8.2791 2.2625C8.2811 2.629 8.2651 2.997 8.2631 3.3635C8.2611 3.744 8.2591 4.125 8.2576 4.5065C8.2556 4.845 8.2691 5.182 8.2711 5.5205C8.2726 5.705 8.2726 5.8915 8.2696 6.078ZM13.6226 7.115C13.5731 6.7365 13.5206 6.36 13.4246 5.9915C13.3346 5.641 13.2401 5.293 13.1666 4.9375C13.0941 4.579 13.0101 4.222 12.9106 3.87C12.8611 3.694 12.8101 3.5165 12.7481 3.3455C12.6841 3.1705 12.6151 2.9985 12.5446 2.8275C12.4671 2.6395 12.3916 2.4455 12.2941 2.2655C12.2091 2.1105 12.1191 1.9595 12.0236 1.8115C11.9251 1.6595 11.8241 1.5055 11.7036 1.372C11.5766 1.2315 11.4151 1.116 11.2371 1.05C11.1421 1.0145 11.0441 1 10.9466 1C10.7701 1 10.5926 1.048 10.4256 1.1075C10.3261 1.144 10.2451 1.1955 10.1906 1.289C10.1516 1.3545 10.1411 1.43 10.1451 1.505C10.1431 1.5195 10.1361 1.5325 10.1356 1.5475C10.1221 1.9515 10.1126 2.355 10.0981 2.759C10.0856 3.148 10.0826 3.538 10.0926 3.9255C10.1136 4.714 10.1671 5.501 10.1891 6.2895C10.1996 6.6805 10.2091 7.071 10.2036 7.462C10.1981 7.8405 10.1766 8.22 10.1616 8.598C10.1471 8.9795 10.1456 9.3595 10.1456 9.741C10.1446 10.1205 10.1371 10.5015 10.1496 10.881C10.1621 11.2555 10.1736 11.629 10.1906 12.003C10.1991 12.179 10.2011 12.3545 10.2096 12.5315C10.2171 12.6795 10.2221 12.8285 10.2201 12.977C10.2181 13.2475 10.2191 13.519 10.2506 13.7875C10.2821 14.055 10.3291 14.3235 10.4551 14.5655C10.5296 14.709 10.6721 14.816 10.8136 14.8895C10.9321 14.9505 11.0571 14.9745 11.1901 14.9715C11.2606 14.9705 11.3326 14.9675 11.4041 14.9685C11.4921 14.9705 11.5771 14.9645 11.6651 14.9435C11.7426 14.9255 11.8171 14.886 11.8886 14.852C11.9916 14.8025 12.0786 14.727 12.1646 14.6525C12.2411 14.5855 12.3241 14.529 12.3911 14.452C12.4636 14.37 12.5316 14.28 12.5976 14.192C12.6481 14.125 12.6796 14.0285 12.7106 13.953C12.7201 13.9315 12.7286 13.91 12.7376 13.8885C12.7941 13.759 12.8541 13.6345 12.8816 13.494C12.9091 13.3525 12.9541 13.215 12.9781 13.0725C13.0056 12.9035 13.0251 12.7265 13.0356 12.5545C13.0471 12.376 13.0501 12.1935 13.0411 12.0145C13.0306 11.7945 12.9836 11.577 12.9406 11.363C12.9081 11.2005 12.8796 11.039 12.8556 10.8745C12.8126 10.586 12.7411 10.301 12.6731 10.0175C12.6491 9.916 12.6436 9.811 12.6101 9.7115C12.6031 9.69 12.5991 9.6685 12.5921 9.6475C12.6061 9.631 12.6261 9.6175 12.6341 9.599C12.6376 9.591 12.6411 9.5835 12.6451 9.576C12.6866 9.532 12.7326 9.4925 12.7791 9.453C12.8926 9.3545 13.0026 9.241 13.0851 9.114C13.1721 8.9765 13.2466 8.8285 13.3156 8.682C13.3966 8.512 13.4496 8.3285 13.5066 8.149C13.6131 7.818 13.6696 7.462 13.6226 7.115ZM12.8251 7.626C12.8041 7.746 12.7711 7.863 12.7391 7.98C12.7041 8.1055 12.6681 8.231 12.6216 8.352C12.5696 8.47 12.5161 8.592 12.4441 8.699C12.3701 8.787 12.2916 8.875 12.2056 8.948C12.1156 9.0255 12.0181 9.099 11.9706 9.2115C11.9641 9.226 11.9621 9.2395 11.9571 9.254C11.8486 9.3245 11.7676 9.439 11.7766 9.5725C11.7841 9.6775 11.7986 9.779 11.8361 9.8775C11.8646 9.951 11.8781 10.0255 11.8896 10.103C11.8981 10.1665 11.9076 10.229 11.9236 10.2915C11.9406 10.3605 11.9616 10.429 11.9771 10.499C12.0076 10.633 12.0316 10.7675 12.0546 10.902C12.1136 11.235 12.1956 11.5645 12.2531 11.898C12.2856 12.1915 12.2731 12.488 12.2381 12.7815C12.2196 12.9065 12.1906 13.029 12.1596 13.1515C12.1261 13.2805 12.0926 13.4065 12.0441 13.5295C12.0021 13.628 11.9561 13.728 11.8951 13.8145C11.8546 13.8655 11.8116 13.916 11.7641 13.96C11.7056 14.014 11.6421 14.064 11.5786 14.1135C11.5456 14.1365 11.5111 14.157 11.4751 14.1755C11.4621 14.18 11.4486 14.1835 11.4356 14.187C11.3441 14.193 11.2511 14.2015 11.1596 14.1985C11.1516 14.1935 11.1436 14.1885 11.1356 14.183C11.1316 14.1795 11.1276 14.1755 11.1236 14.172C11.1171 14.1615 11.1111 14.1505 11.1056 14.1395C11.0631 14.014 11.0341 13.8845 11.0141 13.7535C10.9861 13.5025 10.9846 13.2535 10.9791 13.001C10.9761 12.8575 10.9666 12.7145 10.9591 12.571C10.9486 12.397 10.9446 12.223 10.9371 12.0485C10.9216 11.6805 10.8981 11.3125 10.8891 10.944C10.8806 10.5665 10.8806 10.19 10.8796 9.8115C10.8786 9.0385 10.8976 8.2655 10.9066 7.4925C10.9161 6.7025 10.8911 5.912 10.8511 5.1225C10.8226 4.534 10.7916 3.9435 10.7956 3.354C10.7991 2.829 10.8446 2.3075 10.8781 1.784C10.8906 1.7805 10.9021 1.7745 10.9146 1.7715C10.9286 1.7715 10.9426 1.7715 10.9571 1.7725C10.9736 1.776 10.9901 1.7805 11.0061 1.7855C11.0356 1.802 11.0646 1.8195 11.0931 1.8385C11.1566 1.896 11.2126 1.96 11.2666 2.0265C11.2781 2.041 11.2891 2.0555 11.3006 2.07C11.2961 2.064 11.2911 2.058 11.2866 2.052C11.4091 2.2095 11.5186 2.375 11.6211 2.546C11.7126 2.701 11.7876 2.8615 11.8591 3.0255C11.8566 3.0195 11.8541 3.0135 11.8516 3.0075C11.8541 3.014 11.8571 3.0205 11.8596 3.027C11.8691 3.0485 11.8786 3.0705 11.8876 3.0925C11.8786 3.072 11.8696 3.0515 11.8611 3.0315C11.9186 3.1705 11.9746 3.31 12.0291 3.451C12.0816 3.5885 12.1226 3.728 12.1636 3.8705C12.2516 4.1735 12.3306 4.478 12.3986 4.787C12.4656 5.0945 12.5246 5.4045 12.5886 5.712C12.6181 5.8555 12.6611 5.995 12.6936 6.137C12.7281 6.291 12.7546 6.446 12.7776 6.6025C12.7996 6.773 12.8221 6.9435 12.8321 7.1155C12.8411 7.287 12.8421 7.4545 12.8251 7.626ZM11.8601 3.031C11.8591 3.029 11.8586 3.027 11.8576 3.0255C11.8576 3.026 11.8581 3.0265 11.8581 3.027C11.8586 3.028 11.8596 3.0295 11.8601 3.031Z"
                    fill="#1A1A1A" />
                </svg>
                No-Meal
              </span>
              <span class="rba-item" style="color:#00BC93;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_366_9664)">
                    <path
                      d="M6.33374 9.1668C6.33374 9.81347 6.83374 10.3335 7.44707 10.3335H8.70041C9.23374 10.3335 9.66707 9.88014 9.66707 9.31347C9.66707 8.7068 9.40041 8.4868 9.00707 8.3468L7.00041 7.6468C6.60707 7.5068 6.34041 7.29347 6.34041 6.68014C6.34041 6.12016 6.77374 5.66016 7.30707 5.66016H8.56041C9.17374 5.66016 9.67374 6.18016 9.67374 6.8268"
                      stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.00049 5V11" stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M14.6668 7.99967C14.6668 11.6797 11.6802 14.6663 8.00016 14.6663C4.32016 14.6663 1.3335 11.6797 1.3335 7.99967C1.3335 4.31967 4.32016 1.33301 8.00016 1.33301"
                      stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6667 3.99967V1.33301H12" stroke="#00BC93" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M11.3335 4.66634L14.6668 1.33301" stroke="#00BC93" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_366_9664">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                No-cancellation
              </span>
            </div>
            <a v-if="item.orderStatus === 'OK'" class="rba-link" @click="handleCancelOrder(item, index)">Cancel Trip</a>
            <span v-else-if="item.orderStatus === 'Cancelled'" class="rba-state">{{ item.orderStatus }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="member-box container-box" v-if="pageIndex == 0">
      <div class="white-box">
        <div class="hd">Account Settings</div>
        <div class="name1">
          First Name
        </div>
        <div class="input">
          <el-input v-model="form.firstName" @keyup.native.enter="toNext" placeholder="John"></el-input>
        </div>
        <div class="name">
          Last Name
        </div>
        <div class="input">
          <el-input v-model="form.lastName" @keyup.native.enter="toNext" placeholder="Smith"></el-input>
        </div>
        <div class="footer">
          <el-button type="primary" @click="update">Update Information</el-button>
          <div class="delete" @click="accountDelete">Delete my account</div>
        </div>
      </div>
    </div>
    <div class="member-box container-box" v-if="pageIndex == 1">
      <div class="white-box2">
        <div class="hd">Recently Viewed</div>
        <div class="box-item" v-for="(item, index) in recentView">
          <div class="item-pic">
            <img v-if="item.imagesList && item.imagesList[0]" :src="item.imagesList[0].url" alt="">
            <!-- <i class="icon-mark"></i> -->
            <i class="icon-mark-saved" @click="collection(item)"></i>
          </div>
          <div class="item-right">
            <div class="title">{{ item.name }}</div>
            <div class="subtitle">{{ item.addressString }}</div>
            <div class="line"></div>
            <!-- <div class="point-1">3K Reviews</div>
            <div class="point-2">112K Reviews</div> -->
            <!-- <div class="item-footer">
              <svg class="icon-mark1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M12.6667 2.66659H11.3334V1.99992C11.3334 1.82311 11.2631 1.65354 11.1381 1.52851C11.0131 1.40349 10.8435 1.33325 10.6667 1.33325C10.4899 1.33325 10.3203 1.40349 10.1953 1.52851C10.0703 1.65354 10 1.82311 10 1.99992V2.66659H6.00004V1.99992C6.00004 1.82311 5.9298 1.65354 5.80478 1.52851C5.67975 1.40349 5.51018 1.33325 5.33337 1.33325C5.15656 1.33325 4.98699 1.40349 4.86197 1.52851C4.73695 1.65354 4.66671 1.82311 4.66671 1.99992V2.66659H3.33337C2.80294 2.66659 2.29423 2.8773 1.91916 3.25237C1.54409 3.62744 1.33337 4.13615 1.33337 4.66658V12.6666C1.33337 13.197 1.54409 13.7057 1.91916 14.0808C2.29423 14.4559 2.80294 14.6666 3.33337 14.6666H12.6667C13.1971 14.6666 13.7058 14.4559 14.0809 14.0808C14.456 13.7057 14.6667 13.197 14.6667 12.6666V4.66658C14.6667 4.13615 14.456 3.62744 14.0809 3.25237C13.7058 2.8773 13.1971 2.66659 12.6667 2.66659ZM13.3334 12.6666C13.3334 12.8434 13.2631 13.013 13.1381 13.138C13.0131 13.263 12.8435 13.3333 12.6667 13.3333H3.33337C3.15656 13.3333 2.98699 13.263 2.86197 13.138C2.73695 13.013 2.66671 12.8434 2.66671 12.6666V7.99992H13.3334V12.6666ZM13.3334 6.66658H2.66671V4.66658C2.66671 4.48977 2.73695 4.3202 2.86197 4.19518C2.98699 4.07016 3.15656 3.99992 3.33337 3.99992H4.66671V4.66658C4.66671 4.8434 4.73695 5.01297 4.86197 5.13799C4.98699 5.26301 5.15656 5.33325 5.33337 5.33325C5.51018 5.33325 5.67975 5.26301 5.80478 5.13799C5.9298 5.01297 6.00004 4.8434 6.00004 4.66658V3.99992H10V4.66658C10 4.8434 10.0703 5.01297 10.1953 5.13799C10.3203 5.26301 10.4899 5.33325 10.6667 5.33325C10.8435 5.33325 11.0131 5.26301 11.1381 5.13799C11.2631 5.01297 11.3334 4.8434 11.3334 4.66658V3.99992H12.6667C12.8435 3.99992 13.0131 4.07016 13.1381 4.19518C13.2631 4.3202 13.3334 4.48977 13.3334 4.66658V6.66658Z"
                  fill="#1A1A1A"/>
              </svg>
              20/11/2023 - 27/11/2023
              <svg class="icon-mark2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00005 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00005 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992ZM8.00005 1.99992C4.68634 1.99992 2.00005 4.68622 2.00005 7.99992C2.00005 10.2208 3.20664 12.1598 5.00005 13.1973V9.82211C5.00005 8.61158 5.717 7.56852 6.74945 7.09438C6.15369 6.69224 5.76194 6.01088 5.76194 5.238C5.76194 4.00194 6.76398 2.99991 8.00006 2.99991C9.23614 2.99991 10.2381 4.00194 10.2381 5.238C10.2381 6.01086 9.84639 6.69224 9.25059 7.09438C10.2831 7.56852 11.0001 8.61158 11.0001 9.82211V13.1973C12.7935 12.1598 14.0001 10.2208 14.0001 7.99992C14.0001 4.68622 11.3138 1.99992 8.00005 1.99992ZM10.3334 13.5293V9.82213C10.3334 8.53345 9.2887 7.4888 8.00005 7.4888C6.71139 7.4888 5.66672 8.53347 5.66672 9.82213V13.5293C6.38398 13.8324 7.17245 13.9999 8.00005 13.9999C8.82764 13.9999 9.61611 13.8324 10.3334 13.5293ZM8.00005 3.6666C7.13219 3.6666 6.42859 4.37014 6.42859 5.23802C6.42859 6.10589 7.13219 6.80945 8.00005 6.80945C8.86791 6.80945 9.57145 6.10589 9.57145 5.23802C9.57145 4.37014 8.86792 3.6666 8.00005 3.6666Z"
                  fill="black"/>
              </svg>
              2 Guests
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="member-box container-box" v-if="pageIndex == 2">
      <div class="hd">Messages</div>
    </div>
    <div class="member-box container-box" v-if="pageIndex == 3">
      <div class="white-box2">
        <div class="hd">Saved</div>
        <div class="box-item" v-for="(item, index) in saveList">
          <div class="item-pic">
            <img v-if="item.imagesList && item.imagesList[0]" :src="item.imagesList[0].url" alt="">
            <!-- <i class="icon-mark"></i> -->
            <i class="icon-mark-saved" @click="collection(item)"></i>
          </div>
          <div class="item-right">
            <div class="title">{{ item.name }}</div>
            <div class="subtitle">{{ item.addressString }}</div>
            <div class="line"></div>
            <!-- <div class="point-1">3K Reviews</div>
            <div class="point-2">112K Reviews</div> -->
            <!-- <div class="item-footer">
              <svg class="icon-mark1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M12.6667 2.66659H11.3334V1.99992C11.3334 1.82311 11.2631 1.65354 11.1381 1.52851C11.0131 1.40349 10.8435 1.33325 10.6667 1.33325C10.4899 1.33325 10.3203 1.40349 10.1953 1.52851C10.0703 1.65354 10 1.82311 10 1.99992V2.66659H6.00004V1.99992C6.00004 1.82311 5.9298 1.65354 5.80478 1.52851C5.67975 1.40349 5.51018 1.33325 5.33337 1.33325C5.15656 1.33325 4.98699 1.40349 4.86197 1.52851C4.73695 1.65354 4.66671 1.82311 4.66671 1.99992V2.66659H3.33337C2.80294 2.66659 2.29423 2.8773 1.91916 3.25237C1.54409 3.62744 1.33337 4.13615 1.33337 4.66658V12.6666C1.33337 13.197 1.54409 13.7057 1.91916 14.0808C2.29423 14.4559 2.80294 14.6666 3.33337 14.6666H12.6667C13.1971 14.6666 13.7058 14.4559 14.0809 14.0808C14.456 13.7057 14.6667 13.197 14.6667 12.6666V4.66658C14.6667 4.13615 14.456 3.62744 14.0809 3.25237C13.7058 2.8773 13.1971 2.66659 12.6667 2.66659ZM13.3334 12.6666C13.3334 12.8434 13.2631 13.013 13.1381 13.138C13.0131 13.263 12.8435 13.3333 12.6667 13.3333H3.33337C3.15656 13.3333 2.98699 13.263 2.86197 13.138C2.73695 13.013 2.66671 12.8434 2.66671 12.6666V7.99992H13.3334V12.6666ZM13.3334 6.66658H2.66671V4.66658C2.66671 4.48977 2.73695 4.3202 2.86197 4.19518C2.98699 4.07016 3.15656 3.99992 3.33337 3.99992H4.66671V4.66658C4.66671 4.8434 4.73695 5.01297 4.86197 5.13799C4.98699 5.26301 5.15656 5.33325 5.33337 5.33325C5.51018 5.33325 5.67975 5.26301 5.80478 5.13799C5.9298 5.01297 6.00004 4.8434 6.00004 4.66658V3.99992H10V4.66658C10 4.8434 10.0703 5.01297 10.1953 5.13799C10.3203 5.26301 10.4899 5.33325 10.6667 5.33325C10.8435 5.33325 11.0131 5.26301 11.1381 5.13799C11.2631 5.01297 11.3334 4.8434 11.3334 4.66658V3.99992H12.6667C12.8435 3.99992 13.0131 4.07016 13.1381 4.19518C13.2631 4.3202 13.3334 4.48977 13.3334 4.66658V6.66658Z"
                  fill="#1A1A1A"/>
              </svg>
              20/11/2023 - 27/11/2023
              <svg class="icon-mark2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00005 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00005 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992ZM8.00005 1.99992C4.68634 1.99992 2.00005 4.68622 2.00005 7.99992C2.00005 10.2208 3.20664 12.1598 5.00005 13.1973V9.82211C5.00005 8.61158 5.717 7.56852 6.74945 7.09438C6.15369 6.69224 5.76194 6.01088 5.76194 5.238C5.76194 4.00194 6.76398 2.99991 8.00006 2.99991C9.23614 2.99991 10.2381 4.00194 10.2381 5.238C10.2381 6.01086 9.84639 6.69224 9.25059 7.09438C10.2831 7.56852 11.0001 8.61158 11.0001 9.82211V13.1973C12.7935 12.1598 14.0001 10.2208 14.0001 7.99992C14.0001 4.68622 11.3138 1.99992 8.00005 1.99992ZM10.3334 13.5293V9.82213C10.3334 8.53345 9.2887 7.4888 8.00005 7.4888C6.71139 7.4888 5.66672 8.53347 5.66672 9.82213V13.5293C6.38398 13.8324 7.17245 13.9999 8.00005 13.9999C8.82764 13.9999 9.61611 13.8324 10.3334 13.5293ZM8.00005 3.6666C7.13219 3.6666 6.42859 4.37014 6.42859 5.23802C6.42859 6.10589 7.13219 6.80945 8.00005 6.80945C8.86791 6.80945 9.57145 6.10589 9.57145 5.23802C9.57145 4.37014 8.86792 3.6666 8.00005 3.6666Z"
                  fill="black"/>
              </svg>
              2 Guests
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="member-box container-box" v-if="pageIndex == 4">
      <div class="hd">Sign Out</div>
    </div>

    <kt-footer></kt-footer>

    <modal-cancel v-if="showCancelModal" step="1" :order="selectedRow" />
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { recentlyViewed, dashboardSaved, accountSetting, getName, deleteAccount } from '@/api/userdashboard';
import { saveCasino, cancelSaveCasino } from '@/api/index';
import { getMyOrders, updateOrderCancelStatus } from '@/api/order';
import { getHotelInfo, cancelBookingOrder } from '@/api/hotel'

export default {
  name: '',
  data() {
    return {
      isLogin: true,
      pageIndex: 0,
      form: {
        firstName: '',
        lastName: '',
        memberId: 0,
      },
      recentView: [],
      saveList: [],
      orderList: [],
      hotelInfoMap: {},
      showCancelModal: false,
      selectedRow: null,
    }
  },
  mounted() {
    this.form.memberId = this.$store.state.id;
    this.init()
    this.getpath()
    this.initOrders()
  },
  methods: {
    init() {
      getName({ memberId: this.form.memberId }).then(res => {
        this.form.lastName = res.data.lastName
        this.form.firstName = res.data.firstName
        // console.log("1111", this.form);
      })
      dashboardSaved({ memberId: this.form.memberId }).then(res => {
        this.saveList = res.data;
        // console.log("this.saveList", this.saveList)
      })
      recentlyViewed({ memberId: this.form.memberId }).then(res => {
        this.recentView = res.data;
        // console.log("this.recentView", this.recentView)
      })
    },
    async initOrders() {
      try {
        const res = await getMyOrders();
        this.orderList = (res.data || []).map(row => {
          row.$night = dayjs(row.checkout).diff(dayjs(row.checkin), 'day')
          row.$checkin = dayjs(row.checkin).format('MMM DD, YYYY')
          row.$checkout = dayjs(row.checkout).format('MMM DD, YYYY')
          row.$hotel = {};
          return row;
        });
        this.initOrderHotelInfo(0);
      } catch (e) {
        console.log('get orders error.');
      }
    },
    async initOrderHotelInfo(index) {
      try {
        const orderItem = this.orderList[index];
        if (!orderItem) {
          return false;
        }
        if (this.hotelInfoMap[orderItem.hotelId]) {
          this.orderList[index].$hotel = this.hotelInfoMap[orderItem.hotelId];
        } else {
          const res = await getHotelInfo({ id: orderItem.hotelId, language: 'en' });
          const hotelInfo = this.translateHotelInfo(res.data || {});
          this.orderList[index].$hotel = hotelInfo;
          this.hotelInfoMap[orderItem.hotelId] = hotelInfo;
        }
        this.initOrderHotelInfo(index + 1)
      } catch (e) {
        console.log('get order info error: ', index);
      }
    },
    translateHotelInfo(info) {
      if (info.check_in_time) {
        info.$check_in_time_format = info.check_in_time.substring(0, 5)
      }
      if (info.check_out_time) {
        info.$check_out_time_format = info.check_out_time.substring(0, 5)
      }
      if (info.images && info.images.length) {
        info.$preview = info.images[0].replace('{size}', '120x120');
      } else {
        info.$preview = ''
      }
      return info
    },
    handleCancelOrder(item, index) {
      // this.selectedRow = item;
      // this.showCancelModal = true;
      this.$confirm('Are you sure you want to cancel this order?', 'Order Confirmation', {
        type: 'warning'
      }).then(async () => {
        await cancelBookingOrder({ partner_order_id: item.partnerOrderId });
        await updateOrderCancelStatus(item.id);
        this.$alert('We have received your request, you will be refunded within 48 hours. For additional information, please email admin@kenta.travel', {
          title: 'Tips',
          type: 'success'
        });
        this.initOrders();
      }).catch(e => { })
    },
    collection(item) {
      cancelSaveCasino({ casinoId: item.id }).then(res => {
        console.log("cancelSaveCasinosuccess")
      })
      this.init();
    },
    getpath() {
      if (this.$route.query.pageIndex) {
        this.pageIndex = +this.$route.query.pageIndex;
      }
    },
    toHome() {
      this.$router.push({ path: '/' })
    },
    handleLogOut() {
      this.$store.dispatch("FedLogOut").then(() => {
        // location.reload();
        this.$router.push({ path: '/' })
      });
    },
    handleType(index) {
      this.pageIndex = index;
      if (index == 2) {
        this.$router.push({ path: '/message' })
      }
      if (index == 4) {
        this.handleLogOut()
      }
    },
    update() {
      console.log("this.form", this.form)
      accountSetting(this.form).then(res => {
      })
    },
    accountDelete() {
      this.$confirm('This operation will delete your account.Do you want to continue?', 'Notice', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then(() => {
        deleteAccount({ memberId: this.form.memberId }).then(re => {
          this.$message({
            message: 'Your account has been successfully deleted. We hope to see you soon.',
            type: 'success'
          });
          this.$store.dispatch("FedLogOut").then(() => {
            location.href = '/'
          });
        })
      }).catch(() => {
      });

    },
    toNext() {

    },
    validateFun() {

    },
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-button {
  height: .48rem;
  width: 2.16rem;
  border-radius: .08rem;
  font-weight: 400;
  padding: 0.12rem 0.2rem;
  font-size: 0.14rem;
}

.page {
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

  .user-phone {
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

  .header-right {
    display: flex;
    align-items: center;

    .message {
      display: flex;
      align-items: center;
      color: rgba(26, 26, 26, 0.60);
      font-size: .08rem;
      margin-right: .24rem;

      img {
        margin-right: .08rem;
        width: .24rem;
        height: .24rem;
      }
    }

    .el-dropdown-link {
      display: flex;
      align-items: center;

      .user-name {
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

.container-box {
  max-width: 7.12rem;
  margin: 0 auto 0 auto;
}

.hd {
  color: #1A1A1A;
  font-family: Rubik;
  font-size: .32rem;
  font-style: normal;
  font-weight: 400;
  line-height: 124%;
  /* 39.68px */
  letter-spacing: -1.28px;
}

.white-box {
  padding: .24rem;
  width: 7.12rem;
  min-height: 3.32rem;
  flex-shrink: 0;
  border-radius: .16rem;
  background: #FEFEFE;


  color: #1A1A1A;
  font-family: Rubik;
  font-size: .14rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  /* 14px */
  letter-spacing: -0.56px;

  .name1 {
    margin-top: .24rem;
  }

  .name {
    margin-top: .16rem;
  }

  .input {
    margin-top: .08rem;
  }

  .footer {
    margin-top: .16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .delete {
      cursor: pointer;
      color: rgba(26, 26, 26, 0.40);
      font-family: Rubik;
      font-size: .14rem;
      font-style: normal;
      font-weight: 400;
      line-height: .16rem;
      /* 114.286% */
      letter-spacing: -0.56px;
    }
  }
}

.white-box2 {
  padding: .24rem;
  width: 7.12rem;
  //height: 9.21rem;
  flex-shrink: 0;
  border-radius: .16rem;
  background: #FEFEFE;

  .box-item {
    width: 6.64rem;
    display: flex;
    border-bottom: solid .01rem #DADADA;
    padding-bottom: .24rem;
    margin-top: .24rem;

    .item-pic {
      position: relative;
      width: 3.24rem;
      height: 2rem;
      border-radius: .04rem;
      border: 1px solid rgba(26, 26, 26, 0.16);

      .icon-mark {
        display: block;
        width: .32rem;
        height: .32rem;
        position: absolute;
        right: .12rem;
        top: .08rem;
        background: url('~assets/images/icon-mark.png');
        background-size: 100%;
      }

      .icon-mark-saved {
        display: block;
        width: .32rem;
        height: .32rem;
        position: absolute;
        right: .16rem;
        top: .16rem;
        background: url('~assets/images/icon-mark-saved.png');
        background-size: 100%;
      }
    }

    .item-right {
      padding: .21rem .0rem .21rem .15rem;
      // width: 3.07rem;
      display: flex;
      flex-direction: column;

      .title {
        color: #1A1A1A;
        font-family: Rubik;
        font-size: .2rem;
        font-size: .18rem;
        font-weight: 400;
        line-height: .24rem;
        /* 133.333% */
        letter-spacing: -0.72px;
      }

      .subtitle {
        margin-top: .04rem;
        margin-bottom: .08rem;
        color: rgba(26, 26, 26, 0.60);
        font-size: .14rem;
        font-weight: 400;
        line-height: .16rem;
        /* 133.333% */
      }

      .line {
        width: .4rem;
        height: .01rem;
        background: rgba(26, 26, 26, 0.16);
      }

      .point-1 {
        margin-top: .08rem;
        color: #1A1A1A;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        display: inline-block;
        background: url('~assets/images/views-1.png');
        background-repeat: no-repeat;
        background-position: left center;
        height: .2rem;
        line-height: .16rem;
        background-size: auto .2rem;
        padding-left: .8rem;
        font-size: .12rem;
      }

      .point-2 {
        margin-top: .08rem;
        color: #1A1A1A;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        display: inline-block;
        background: url('~assets/images/views-2.png');
        background-repeat: no-repeat;
        background-position: left center;
        height: .16rem;
        line-height: .16rem;
        background-size: auto .16rem;
        padding-left: .8rem;
        font-size: .12rem;
      }

      .icon-mark1 {
        margin-right: .04rem;
      }

      .icon-mark2 {
        margin-left: .16rem;
        margin-right: .04rem;
      }

      .item-footer {
        margin-top: auto;
        display: flex;
        color: rgba(26, 26, 26, 0.60);
        font-family: Rubik;
        font-size: .12rem;
        font-style: normal;
        font-weight: 400;
        line-height: .16rem;
        /* 133.333% */
      }
    }

    .item-views {
      margin-top: .16rem;

      .item-1 {
        display: inline-block;
        margin: .05rem 0;
        margin-right: .24rem;
        background: url('~assets/images/views-1.png');
        background-repeat: no-repeat;
        background-position: left center;
        height: .2rem;
        line-height: .2rem;
        background-size: auto .2rem;
        padding-left: .8rem;
        font-size: .12rem;
      }

      .item-2 {
        display: inline-block;
        background: url('~assets/images/views-2.png');
        background-repeat: no-repeat;
        background-size: auto .16rem;
        padding-left: .75rem;
        height: .16rem;
        line-height: .16rem;
        background-position: left center;
        font-size: .12rem;
      }
    }
  }
}

.room-box {
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid #DADADA;
  background: #FEFEFE;
  font-weight: 400;

  .mt16 {
    margin-top: 16px;
  }
}

.room-box-info {
  display: flex;
}

.rbi-img {
  width: 160px;
  height: 126px;
  border-radius: 7px 0 0 0;
}

.rbi-center {
  padding: 16px 16px 5px;
}

.rbic-star {
  display: flex;
  align-items: center;

  &-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 12px;
    font-weight: 400;
  }

  :deep(.el-rate__icon) {
    margin-right: 0;
  }
}

.rbic-title {
  margin-top: 6px;
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 500;
}

.rbic-text {
  margin-top: 16px;
  color: rgba(26, 26, 26, 0.40);
  font-size: 12px;
}

.rbic-detail {
  margin-top: 8px;
  color: rgba(26, 26, 26, 0.60);
  font-size: 20px;
  transform: scale(0.5) translate(-50%, -50%);
}

.rbi-right {
  padding: 16px 10px 16px 24px;
  flex: 1;
  border-left: 1px solid #DADADA;
}

.rbir-label {
  color: rgba(26, 26, 26, 0.60);
  font-size: 12px;
  font-weight: 400;
}

.rbir-text {
  margin-top: 4px;
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 500;
}

.room-box-amenity {
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #DADADA;
}

.rba-item {
  margin-right: 40px;
  color: #1A1A1A;
  font-size: 12px;
  font-weight: 400;

  svg {
    margin-right: 4px;
    vertical-align: -4px;
  }
}

.rba-state {
  padding: 2px 5px;
  color: #FF3263;
  border: 1px solid #FF3263;
  border-radius: 3px;
}

.rba-link {
  font-weight: 400;
  color: rgba(26, 26, 26, 0.4);
  cursor: pointer;
  text-decoration: underline;
}

.nav-box {
  height: .48rem;
  background: #FEFEFE;
  border-bottom: solid .01rem #DADADA;

  .item-list {
    display: flex;

    .item {
      padding: 0 .16rem;
      font-size: .16rem;
      line-height: .48rem;
      cursor: pointer;
    }

    .item.active,
    .item:hover {
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

.btn-default:hover {
  background: #fafafa !important;
  color: #FF3263;
  border: .01rem solid #FF3263;
}

.member-box {
  padding: .4rem 0;
  margin: 0 auto;

  .item-list {
    .item-hd {
      margin-top: .4rem;
      margin-bottom: .24rem;
      font-size: .24rem;
    }

    .item {
      background: #FEFEFE;
      padding: .32rem .24rem;
      border-radius: .12rem;
      margin-top: .16rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item-status {
        margin-left: .12rem;
        font-size: .12rem;

        .lab {
          color: rgba(26, 26, 26, 0.60);
          display: none;

        }
      }

      .item-state {
        padding: .04rem .08rem;
        border-radius: .04rem;
        background: rgba(26, 26, 26, 0.08);
        color: rgba(26, 26, 26, 0.60);

        label {
          display: none;
        }
      }

      .item-state.state-2 {
        color: #2C9056;
        background: rgba(44, 144, 86, 0.16);
      }

      .item-tag {
        padding: .04rem .08rem;
        border-radius: .04rem;
        color: #3451FF;
        font-size: .12rem;
        margin-right: .08rem;
        background: rgba(52, 81, 255, 0.16);

      }

      .item-flex {
        flex: 1;

        .item-title {
          font-size: .2rem;
        }

        .item-desc {
          margin-top: .08rem;
          font-size: .14rem;
          color: rgba(26, 26, 26, 0.60);
          display: flex;
          align-items: center;

          .split {
            position: relative;
            padding-left: .2rem;
          }

          .split::before {
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
  .container-box {
    padding-left: .15rem;
    padding-right: .15rem;
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

  .header.login {
    position: relative;
    padding-left: 1rem;

    .header-right {
      display: flex;
      height: 100%;
      flex-direction: row-reverse;
      position: absolute;
      left: 0;
      top: 0;

      .el-dropdown-link {
        padding: .08rem;
        border-right: solid 1px #DADADA;

        .user-name {
          width: .32rem;
          height: .32rem;
          font-size: .16rem;
        }

        .el-icon-arrow-down {
          font-size: .16rem;
        }
      }

      .message {
        margin-left: .16rem;

        img {
          width: .16rem;
          height: .16rem;
        }

        span {
          display: none;
        }
      }
    }

    .user-phone {
      position: absolute;
      right: .64rem;
      display: block;
    }

    .logo {
      position: absolute;
      left: 50%;
      margin-left: 0;
      transform: translateX(-50%);
    }

    .nav-bar {
      border-left: solid 1px #DADADA;
    }
  }

  .nav-box {
    display: none;
  }

  .member-box {
    padding: 0;

    .hd {
      font-size: .24rem;
      text-align: center;
    }

    .item-list {
      .item-hd {
        margin-top: .4rem;
        margin-bottom: .16rem;
        font-size: .18rem;
      }

      .item {
        position: relative;
        padding: .16rem;
        padding-bottom: .8rem;
        border-radius: .08rem;

        .item-title {
          font-size: .16rem;
        }

        .item-desc {
          font-size: .14rem;
        }

        .item-btns {
          position: absolute;
          right: .16rem;
          bottom: .16rem;
        }

        .el-button {
          padding: .12rem .2rem;
          font-size: .14rem;
          border-radius: .08rem;
        }

        .item-status {
          position: absolute;
          left: .16rem;
          bottom: .16rem;
          display: flex;
          align-items: center;
          margin-left: 0;

          .lab {
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


  .white-box {
    padding: .32rem .24rem;
    width: 100%;
    min-height: 8.12rem;
    border-radius: 0;

    //>div{
    //  margin-left: .2rem;
    //  margin-right: .2rem;
    //}

    .footer {
      .delete {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: .24rem;
      }
    }
  }

  .white-box2 {
    width: 100%;
    height: auto;
    border-radius: 0;

    .box-item {
      flex-direction: column;
      padding-bottom: 0;
    }

  }
}
</style>
