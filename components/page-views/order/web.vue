<template>
  <div class="page-order">
    <div class="page-order-header">
      <span class="poh-label">Checkout</span>
      <a href="/"><img src="@/assets/images/Logo.svg" alt="Kenta Logo" style="width:auto;height:32px;"></a>
      <div class="poh-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_366_9532)">
            <path d="M7.99992 14.6663C11.6818 14.6663 14.6666 11.6816 14.6666 7.99967C14.6666 4.31778 11.6818 1.33301 7.99992 1.33301C4.31802 1.33301 1.33325 4.31778 1.33325 7.99967C1.33325 11.6816 4.31802 14.6663 7.99992 14.6663Z" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 4V8L10.6667 9.33333" stroke="#1A1A1A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_366_9532">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span class="pohr-label">Time Remaining:</span>
        <span class="pohr-time">{{ timeRemaining }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_366_9535)">
            <path opacity="0.24" d="M8 16C4.22876 16 2.34314 16 1.17158 14.8284C-9.53674e-08 13.6569 0 11.7712 0 8C0 4.22876 -9.53674e-08 2.34314 1.17158 1.17158C2.34314 -9.53674e-08 4.22876 0 8 0C11.7712 0 13.6569 -9.53674e-08 14.8284 1.17158C16 2.34314 16 4.22876 16 8C16 11.7712 16 13.6569 14.8284 14.8284C13.6569 16 11.7712 16 8 16Z" fill="#DADADA"/>
            <path d="M8 5.16699C7.5858 5.16699 7.25 5.50278 7.25 5.91699C7.25 6.19313 7.02613 6.41699 6.75 6.41699C6.47386 6.41699 6.25 6.19313 6.25 5.91699C6.25 4.95049 7.03353 4.16699 8 4.16699C8.96647 4.16699 9.75 4.95049 9.75 5.91699C9.75 6.39089 9.561 6.82166 9.25533 7.13633C9.1938 7.19959 9.13513 7.25826 9.07913 7.31419C8.93527 7.45793 8.8092 7.58386 8.6986 7.72599C8.5526 7.91359 8.5 8.05153 8.5 8.16699V8.66699C8.5 8.94313 8.27613 9.16699 8 9.16699C7.72387 9.16699 7.5 8.94313 7.5 8.66699V8.16699C7.5 7.73019 7.70333 7.37659 7.90947 7.11179C8.06193 6.91586 8.2536 6.72453 8.4092 6.5693C8.45613 6.52247 8.49973 6.47892 8.538 6.43951C8.66973 6.30395 8.75 6.12035 8.75 5.91699C8.75 5.50278 8.4142 5.16699 8 5.16699Z" fill="#1A1A1A" fill-opacity="0.6"/>
            <path d="M7.99992 11.3333C8.36812 11.3333 8.66659 11.0349 8.66659 10.6667C8.66659 10.2985 8.36812 10 7.99992 10C7.63172 10 7.33325 10.2985 7.33325 10.6667C7.33325 11.0349 7.63172 11.3333 7.99992 11.3333Z" fill="#1A1A1A" fill-opacity="0.6"/>
          </g>
          <defs>
            <clipPath id="clip0_366_9535">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="page-order-content">
      <div class="poc-left">
        <div class="poc-room-box">
          <div class="pocrb-info">
            <div>
              <img :src="casino.imagesList[0]?.url" class="pocrb-img">
            </div>
            <div class="pocrb-center">
              <div class="pocrb-star">
                <el-rate :value="casino.star" disabled />
                <span class="pocrb-star-label">· {{ casino.distance || 0 }} mile from city center</span>
              </div>
              <div class="pocrb-title">{{ casino.name }}</div>
              <div class="pocrb-text">{{ roomInfo.room_data_trans.bedding_type }}</div>
              <div class="pocrb-price">
                <span class="pocrb-price-old">€{{ paymentInfo.$old }} {{ paymentInfo.currency_code }}</span>
                <span class="pocrb-price-new">€{{ paymentInfo.amount | filterMoney }}</span>
                <span class="pocrb-price-text">+ Taxes and fees</span>
              </div>
              <div class="pocrb-detail">{{ casino.roomView }}</div>
            </div>
            <div class="pocrb-right">
              <div class="pocrb-r-label">Check-in: After {{ hotelInfo.$check_in_time_format }}</div>
              <div class="pocrb-r-text">{{ theCheckInTime }}</div>
              <div class="pocrb-r-label mt16">Check-out: Before {{ hotelInfo.$check_out_time_format }}</div>
              <div class="pocrb-r-text">{{ theCheckOutTime }}</div>
            </div>
          </div>
          <div class="pocrb-amenity">
            <span class="pocrb-a-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.9276 1.915C8.9216 1.862 8.9061 1.81 8.8786 1.761C8.8231 1.6615 8.7456 1.566 8.6751 1.476C8.6271 1.417 8.5776 1.352 8.5191 1.302C8.4361 1.2325 8.3421 1.17 8.2336 1.148C8.1571 1.1335 8.0816 1.128 8.0041 1.125C7.9806 1.124 7.9576 1.1235 7.9346 1.1235C7.8916 1.1235 7.8486 1.125 7.8056 1.127C7.7586 1.128 7.7121 1.13 7.6651 1.129C7.5056 1.128 7.3461 1.1405 7.1866 1.147C7.0156 1.1535 6.8436 1.1625 6.6716 1.167C6.4861 1.172 6.3006 1.1785 6.1156 1.1835C5.9416 1.1875 5.7676 1.2035 5.5941 1.2085C5.2911 1.217 4.9871 1.215 4.6846 1.217C4.3721 1.219 4.0596 1.243 3.7471 1.263C3.5986 1.2725 3.4501 1.2785 3.3021 1.289C3.1091 1.3025 2.9001 1.3165 2.7306 1.421C2.6206 1.488 2.5396 1.5805 2.4726 1.6895C2.3781 1.842 2.3611 2.021 2.3761 2.1955C2.3771 2.2015 2.3791 2.2065 2.3801 2.2125C2.3721 2.243 2.3606 2.273 2.3611 2.306C2.3651 2.7015 2.4011 3.0955 2.4221 3.49C2.4411 3.858 2.4431 4.226 2.4576 4.5925C2.4861 5.3485 2.4156 6.1175 2.6191 6.8555C2.6956 7.1345 2.7921 7.4105 2.9316 7.6665C3.0531 7.889 3.2201 8.061 3.4321 8.198C3.6281 8.324 3.8401 8.369 4.0696 8.39C4.1726 8.3985 4.2771 8.408 4.3811 8.415C4.4086 8.4165 4.4371 8.416 4.4651 8.417C4.4441 8.792 4.4281 9.167 4.4166 9.5435C4.4041 9.9575 4.3756 10.37 4.3681 10.7845C4.3556 11.5555 4.3316 12.3305 4.3576 13.1025C4.3651 13.3355 4.3846 13.568 4.4256 13.798C4.4416 13.885 4.4646 13.968 4.4971 14.051C4.5401 14.163 4.5871 14.2775 4.6481 14.3805C4.7551 14.563 4.9011 14.7265 5.0821 14.8375C5.2541 14.9425 5.4661 14.982 5.6631 14.996C5.8311 15.0075 6.0061 14.992 6.1686 14.9475C6.2271 14.932 6.2786 14.91 6.3341 14.8855C6.4126 14.851 6.4786 14.791 6.5416 14.7335C6.6246 14.656 6.6946 14.551 6.7491 14.4505C6.8456 14.272 6.8916 14.0585 6.9306 13.862C6.9706 13.6605 6.9966 13.451 7.0061 13.2455C7.0146 13.0565 7.0216 12.867 7.0221 12.677C7.0231 12.489 7.0086 12.2995 6.9991 12.1115C6.9811 11.7295 6.9511 11.348 6.9286 10.966C6.9046 10.574 6.8731 10.1835 6.8436 9.7915C6.8311 9.6235 6.8246 9.454 6.8081 9.286C6.7921 9.1085 6.7701 8.9315 6.7516 8.754C6.7441 8.684 6.7336 8.6145 6.7241 8.545C6.8691 8.54 7.0136 8.5365 7.1581 8.5185C7.2926 8.5025 7.4266 8.4915 7.5546 8.446C7.6816 8.402 7.8106 8.36 7.9256 8.2875C8.1156 8.168 8.2946 8.024 8.4606 7.874C8.6611 7.6925 8.7731 7.448 8.8656 7.1985C8.9791 6.888 9.0321 6.547 9.0321 6.217C9.0331 5.854 9.0321 5.489 9.0246 5.126C9.0171 4.7935 9.0301 4.46 9.0391 4.1275C9.0486 3.749 9.0371 3.3705 9.0391 2.9925C9.0411 2.7335 9.0726 2.4755 9.0746 2.2155C9.0746 2.0935 9.0151 1.988 8.9276 1.915ZM8.2696 6.078C8.2686 6.2115 8.2731 6.346 8.2596 6.4795C8.2336 6.652 8.1936 6.8285 8.1296 6.9905C8.0966 7.065 8.0621 7.1415 8.0186 7.21C7.9581 7.2785 7.8886 7.3385 7.8176 7.3955C7.7186 7.4665 7.6111 7.531 7.5011 7.5845C7.4051 7.619 7.3021 7.646 7.2026 7.663C7.0671 7.6795 6.9326 7.6955 6.7976 7.713C6.8091 7.7115 6.8211 7.7095 6.8326 7.708C6.7311 7.7215 6.6356 7.7175 6.5346 7.71C6.3921 7.698 6.2701 7.7835 6.1931 7.8985C6.1916 7.899 6.1906 7.8985 6.1891 7.899C6.1871 7.899 6.1851 7.9 6.1826 7.901C6.0191 7.946 5.9016 8.099 5.9016 8.27C5.9016 8.3215 5.9126 8.3715 5.9321 8.417C5.9621 8.684 5.9796 8.9525 6.0066 9.2195C6.0236 9.3885 6.0276 9.5585 6.0381 9.728C6.0506 9.923 6.0716 10.118 6.0841 10.313C6.1106 10.703 6.1356 11.093 6.1701 11.4815C6.2036 11.859 6.2351 12.2365 6.2506 12.614C6.2621 12.9055 6.2561 13.2035 6.2236 13.4925C6.1951 13.671 6.1571 13.845 6.0961 14.015C6.0781 14.052 6.0576 14.0875 6.0351 14.122C6.0176 14.142 5.9996 14.1615 5.9801 14.18C5.9446 14.1905 5.9086 14.1985 5.8726 14.205C5.7921 14.2115 5.7121 14.211 5.6316 14.2045C5.5891 14.1965 5.5476 14.1855 5.5071 14.172C5.4896 14.163 5.4726 14.1535 5.4556 14.143C5.4211 14.1115 5.3891 14.078 5.3591 14.0425C5.3141 13.9765 5.2761 13.9075 5.2426 13.835C5.2211 13.781 5.2016 13.726 5.1886 13.6695C5.1771 13.6205 5.1686 13.5705 5.1611 13.52C5.1161 13.1575 5.1321 12.7885 5.1341 12.4245C5.1361 12.0375 5.1416 11.6505 5.1486 11.2635C5.1631 10.438 5.1876 9.6125 5.2546 8.7885C5.2691 8.605 5.2841 8.4225 5.2976 8.239C5.3081 8.097 5.2216 7.976 5.1056 7.901C5.1036 7.892 5.1061 7.883 5.1036 7.874C5.0751 7.77 5.0051 7.679 4.9116 7.6245C4.8201 7.571 4.7251 7.561 4.6256 7.576C4.5311 7.5805 4.4326 7.568 4.3391 7.5585C4.2436 7.5485 4.1481 7.543 4.0526 7.5335C4.0021 7.525 3.9516 7.514 3.9031 7.4985C3.8566 7.4735 3.8111 7.4445 3.7671 7.414C3.7286 7.3795 3.6931 7.3415 3.6591 7.302C3.5861 7.198 3.5216 7.086 3.4676 6.971C3.3701 6.7195 3.3066 6.4515 3.2651 6.185C3.2336 5.8955 3.2411 5.602 3.2411 5.312C3.2401 4.9825 3.2306 4.654 3.2226 4.324C3.2151 3.999 3.2131 3.674 3.1836 3.3505C3.1511 3.0025 3.1511 2.655 3.1541 2.306C3.1541 2.296 3.1491 2.2875 3.1481 2.2775C3.1541 2.25 3.1661 2.2225 3.1636 2.1955C3.1596 2.155 3.1546 2.114 3.1531 2.073C3.2116 2.0565 3.2721 2.045 3.3321 2.0355C3.4881 2.018 3.6461 2.008 3.8031 1.9945C3.8091 2.315 3.8281 2.6345 3.8526 2.9545C3.8631 3.102 3.8661 3.248 3.8766 3.395C3.8881 3.547 3.9036 3.698 3.9121 3.851C3.9281 4.135 3.9301 4.4205 3.9281 4.705C3.9266 4.9805 3.9261 5.255 3.9166 5.5305C3.9076 5.5495 3.8996 5.5695 3.8936 5.5905C3.8801 5.6405 3.8801 5.6895 3.8791 5.74C3.8771 5.9465 4.0541 6.1185 4.2586 6.1185C4.4621 6.1185 4.6406 5.9465 4.6371 5.74C4.6371 5.724 4.6371 5.7075 4.6371 5.6915C4.6366 5.6375 4.6251 5.589 4.6056 5.545C4.6046 5.2735 4.6186 5.002 4.6171 4.7305C4.6151 4.4445 4.6151 4.1585 4.6006 3.873C4.5866 3.571 4.5596 3.271 4.5521 2.969C4.5441 2.627 4.5401 2.2855 4.5416 1.9435C4.7426 1.936 4.9441 1.9305 5.1446 1.931C5.1786 1.931 5.2131 1.9305 5.2471 1.9305C5.2531 2.244 5.2651 2.5575 5.2716 2.8705C5.2781 3.209 5.2821 3.547 5.2861 3.8845C5.2881 4.0525 5.2891 4.22 5.2891 4.387C5.2891 4.5515 5.2786 4.7155 5.2836 4.88C5.2876 5.0465 5.2996 5.2125 5.3086 5.379C5.3151 5.5195 5.3136 5.659 5.3141 5.7995C5.3141 5.9965 5.4776 6.1605 5.6751 6.1605C5.8596 6.1605 6.0516 5.996 6.0361 5.7995C6.0256 5.6675 6.0236 5.535 6.0206 5.402C6.0176 5.2375 6.0071 5.0735 6.0051 4.909C6.0041 4.739 6.0126 4.568 6.0156 4.398C6.0196 4.227 6.0186 4.056 6.0186 3.885C6.0186 3.5505 6.0071 3.215 6.0121 2.88C6.0171 2.558 6.0311 2.236 6.0376 1.914C6.1816 1.9115 6.3251 1.9095 6.4696 1.908C6.5241 1.907 6.5781 1.907 6.6326 1.9065C6.6371 2.266 6.6531 2.624 6.6766 2.983C6.7006 3.347 6.7311 3.712 6.7471 4.077C6.7626 4.423 6.7651 4.77 6.7861 5.1155C6.8016 5.3715 6.7881 5.6335 6.8291 5.8875C6.8436 5.9775 6.9246 6.065 7.0001 6.11C7.0861 6.1595 7.1911 6.174 7.2876 6.1475C7.3801 6.1215 7.4616 6.0595 7.5101 5.9765C7.5541 5.901 7.5626 5.8275 7.5551 5.748C7.5566 5.759 7.5581 5.7705 7.5596 5.7815C7.5536 5.726 7.5466 5.6715 7.5391 5.6165C7.5281 5.5225 7.5261 5.428 7.5206 5.3335C7.5131 5.176 7.4996 5.019 7.4921 4.8625C7.4766 4.5415 7.4741 4.2195 7.4586 3.8985C7.4426 3.564 7.4146 3.2295 7.3926 2.896C7.3716 2.5625 7.3866 2.2275 7.3906 1.894C7.4206 1.8935 7.4506 1.8915 7.4811 1.892C7.5461 1.894 7.6121 1.893 7.6771 1.892C7.7851 1.8895 7.8926 1.888 7.9996 1.8965C8.0286 1.926 8.0566 1.958 8.0826 1.99C8.1226 2.0455 8.1621 2.104 8.1931 2.1635C8.2146 2.2035 8.2456 2.2345 8.2791 2.2625C8.2811 2.629 8.2651 2.997 8.2631 3.3635C8.2611 3.744 8.2591 4.125 8.2576 4.5065C8.2556 4.845 8.2691 5.182 8.2711 5.5205C8.2726 5.705 8.2726 5.8915 8.2696 6.078ZM13.6226 7.115C13.5731 6.7365 13.5206 6.36 13.4246 5.9915C13.3346 5.641 13.2401 5.293 13.1666 4.9375C13.0941 4.579 13.0101 4.222 12.9106 3.87C12.8611 3.694 12.8101 3.5165 12.7481 3.3455C12.6841 3.1705 12.6151 2.9985 12.5446 2.8275C12.4671 2.6395 12.3916 2.4455 12.2941 2.2655C12.2091 2.1105 12.1191 1.9595 12.0236 1.8115C11.9251 1.6595 11.8241 1.5055 11.7036 1.372C11.5766 1.2315 11.4151 1.116 11.2371 1.05C11.1421 1.0145 11.0441 1 10.9466 1C10.7701 1 10.5926 1.048 10.4256 1.1075C10.3261 1.144 10.2451 1.1955 10.1906 1.289C10.1516 1.3545 10.1411 1.43 10.1451 1.505C10.1431 1.5195 10.1361 1.5325 10.1356 1.5475C10.1221 1.9515 10.1126 2.355 10.0981 2.759C10.0856 3.148 10.0826 3.538 10.0926 3.9255C10.1136 4.714 10.1671 5.501 10.1891 6.2895C10.1996 6.6805 10.2091 7.071 10.2036 7.462C10.1981 7.8405 10.1766 8.22 10.1616 8.598C10.1471 8.9795 10.1456 9.3595 10.1456 9.741C10.1446 10.1205 10.1371 10.5015 10.1496 10.881C10.1621 11.2555 10.1736 11.629 10.1906 12.003C10.1991 12.179 10.2011 12.3545 10.2096 12.5315C10.2171 12.6795 10.2221 12.8285 10.2201 12.977C10.2181 13.2475 10.2191 13.519 10.2506 13.7875C10.2821 14.055 10.3291 14.3235 10.4551 14.5655C10.5296 14.709 10.6721 14.816 10.8136 14.8895C10.9321 14.9505 11.0571 14.9745 11.1901 14.9715C11.2606 14.9705 11.3326 14.9675 11.4041 14.9685C11.4921 14.9705 11.5771 14.9645 11.6651 14.9435C11.7426 14.9255 11.8171 14.886 11.8886 14.852C11.9916 14.8025 12.0786 14.727 12.1646 14.6525C12.2411 14.5855 12.3241 14.529 12.3911 14.452C12.4636 14.37 12.5316 14.28 12.5976 14.192C12.6481 14.125 12.6796 14.0285 12.7106 13.953C12.7201 13.9315 12.7286 13.91 12.7376 13.8885C12.7941 13.759 12.8541 13.6345 12.8816 13.494C12.9091 13.3525 12.9541 13.215 12.9781 13.0725C13.0056 12.9035 13.0251 12.7265 13.0356 12.5545C13.0471 12.376 13.0501 12.1935 13.0411 12.0145C13.0306 11.7945 12.9836 11.577 12.9406 11.363C12.9081 11.2005 12.8796 11.039 12.8556 10.8745C12.8126 10.586 12.7411 10.301 12.6731 10.0175C12.6491 9.916 12.6436 9.811 12.6101 9.7115C12.6031 9.69 12.5991 9.6685 12.5921 9.6475C12.6061 9.631 12.6261 9.6175 12.6341 9.599C12.6376 9.591 12.6411 9.5835 12.6451 9.576C12.6866 9.532 12.7326 9.4925 12.7791 9.453C12.8926 9.3545 13.0026 9.241 13.0851 9.114C13.1721 8.9765 13.2466 8.8285 13.3156 8.682C13.3966 8.512 13.4496 8.3285 13.5066 8.149C13.6131 7.818 13.6696 7.462 13.6226 7.115ZM12.8251 7.626C12.8041 7.746 12.7711 7.863 12.7391 7.98C12.7041 8.1055 12.6681 8.231 12.6216 8.352C12.5696 8.47 12.5161 8.592 12.4441 8.699C12.3701 8.787 12.2916 8.875 12.2056 8.948C12.1156 9.0255 12.0181 9.099 11.9706 9.2115C11.9641 9.226 11.9621 9.2395 11.9571 9.254C11.8486 9.3245 11.7676 9.439 11.7766 9.5725C11.7841 9.6775 11.7986 9.779 11.8361 9.8775C11.8646 9.951 11.8781 10.0255 11.8896 10.103C11.8981 10.1665 11.9076 10.229 11.9236 10.2915C11.9406 10.3605 11.9616 10.429 11.9771 10.499C12.0076 10.633 12.0316 10.7675 12.0546 10.902C12.1136 11.235 12.1956 11.5645 12.2531 11.898C12.2856 12.1915 12.2731 12.488 12.2381 12.7815C12.2196 12.9065 12.1906 13.029 12.1596 13.1515C12.1261 13.2805 12.0926 13.4065 12.0441 13.5295C12.0021 13.628 11.9561 13.728 11.8951 13.8145C11.8546 13.8655 11.8116 13.916 11.7641 13.96C11.7056 14.014 11.6421 14.064 11.5786 14.1135C11.5456 14.1365 11.5111 14.157 11.4751 14.1755C11.4621 14.18 11.4486 14.1835 11.4356 14.187C11.3441 14.193 11.2511 14.2015 11.1596 14.1985C11.1516 14.1935 11.1436 14.1885 11.1356 14.183C11.1316 14.1795 11.1276 14.1755 11.1236 14.172C11.1171 14.1615 11.1111 14.1505 11.1056 14.1395C11.0631 14.014 11.0341 13.8845 11.0141 13.7535C10.9861 13.5025 10.9846 13.2535 10.9791 13.001C10.9761 12.8575 10.9666 12.7145 10.9591 12.571C10.9486 12.397 10.9446 12.223 10.9371 12.0485C10.9216 11.6805 10.8981 11.3125 10.8891 10.944C10.8806 10.5665 10.8806 10.19 10.8796 9.8115C10.8786 9.0385 10.8976 8.2655 10.9066 7.4925C10.9161 6.7025 10.8911 5.912 10.8511 5.1225C10.8226 4.534 10.7916 3.9435 10.7956 3.354C10.7991 2.829 10.8446 2.3075 10.8781 1.784C10.8906 1.7805 10.9021 1.7745 10.9146 1.7715C10.9286 1.7715 10.9426 1.7715 10.9571 1.7725C10.9736 1.776 10.9901 1.7805 11.0061 1.7855C11.0356 1.802 11.0646 1.8195 11.0931 1.8385C11.1566 1.896 11.2126 1.96 11.2666 2.0265C11.2781 2.041 11.2891 2.0555 11.3006 2.07C11.2961 2.064 11.2911 2.058 11.2866 2.052C11.4091 2.2095 11.5186 2.375 11.6211 2.546C11.7126 2.701 11.7876 2.8615 11.8591 3.0255C11.8566 3.0195 11.8541 3.0135 11.8516 3.0075C11.8541 3.014 11.8571 3.0205 11.8596 3.027C11.8691 3.0485 11.8786 3.0705 11.8876 3.0925C11.8786 3.072 11.8696 3.0515 11.8611 3.0315C11.9186 3.1705 11.9746 3.31 12.0291 3.451C12.0816 3.5885 12.1226 3.728 12.1636 3.8705C12.2516 4.1735 12.3306 4.478 12.3986 4.787C12.4656 5.0945 12.5246 5.4045 12.5886 5.712C12.6181 5.8555 12.6611 5.995 12.6936 6.137C12.7281 6.291 12.7546 6.446 12.7776 6.6025C12.7996 6.773 12.8221 6.9435 12.8321 7.1155C12.8411 7.287 12.8421 7.4545 12.8251 7.626ZM11.8601 3.031C11.8591 3.029 11.8586 3.027 11.8576 3.0255C11.8576 3.026 11.8581 3.0265 11.8581 3.027C11.8586 3.028 11.8596 3.0295 11.8601 3.031Z" fill="#1A1A1A"/>
              </svg>
              {{ roomInfo.meal }}
            </span>
            <span class="pocrb-a-item" style="color:#00BC93;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_366_9664)">
                  <path d="M6.33374 9.1668C6.33374 9.81347 6.83374 10.3335 7.44707 10.3335H8.70041C9.23374 10.3335 9.66707 9.88014 9.66707 9.31347C9.66707 8.7068 9.40041 8.4868 9.00707 8.3468L7.00041 7.6468C6.60707 7.5068 6.34041 7.29347 6.34041 6.68014C6.34041 6.12016 6.77374 5.66016 7.30707 5.66016H8.56041C9.17374 5.66016 9.67374 6.18016 9.67374 6.8268" stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.00049 5V11" stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.6668 7.99967C14.6668 11.6797 11.6802 14.6663 8.00016 14.6663C4.32016 14.6663 1.3335 11.6797 1.3335 7.99967C1.3335 4.31967 4.32016 1.33301 8.00016 1.33301" stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.6667 3.99967V1.33301H12" stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.3335 4.66634L14.6668 1.33301" stroke="#00BC93" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_366_9664">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              {{ cancelInfo || 'No-Cancellation' }}
            </span>
            <span class="pocrb-a-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_366_9672)">
                  <path d="M13.3332 10.0003C13.7014 10.0003 13.9998 9.70186 13.9998 9.33366C13.9998 8.96546 13.7014 8.66699 13.3332 8.66699C12.965 8.66699 12.6665 8.96546 12.6665 9.33366C12.6665 9.70186 12.965 10.0003 13.3332 10.0003Z" fill="#1A1A1A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1832 0.656443C12.3278 0.3067 13.5212 1.03383 13.7354 2.21138L13.9573 3.43215C14.7562 3.69434 15.3332 4.44622 15.3332 5.33284V7.17544C15.7423 7.54164 15.9998 8.07384 15.9998 8.66618V9.99951C15.9998 10.5918 15.7423 11.124 15.3332 11.4902V13.3328C15.3332 14.4374 14.4378 15.3328 13.3332 15.3328H2.6665C1.56194 15.3328 0.666504 14.4374 0.666504 13.3328V5.33284C0.666504 4.34157 1.38766 3.51874 2.33396 3.36036L11.1832 0.656443ZM13.9998 10.6662C14.368 10.6662 14.6665 10.3677 14.6665 9.99951V8.66618C14.6665 8.29798 14.368 7.99951 13.9998 7.99951H11.9998C11.6316 7.99951 11.3332 8.29798 11.3332 8.66618V9.99951C11.3332 10.3677 11.6316 10.6662 11.9998 10.6662H13.9998ZM13.9998 11.9995V13.3328C13.9998 13.701 13.7014 13.9995 13.3332 13.9995H2.6665C2.29832 13.9995 1.99984 13.701 1.99984 13.3328V5.33284C1.99984 4.96466 2.29832 4.66618 2.6665 4.66618H13.3332C13.6998 4.66618 13.9973 4.96215 13.9998 5.3282V6.66618H11.9998C10.8952 6.66618 9.99984 7.56158 9.99984 8.66618V9.99951C9.99984 11.1041 10.8952 11.9995 11.9998 11.9995H13.9998ZM12.4634 2.40421L12.6273 3.33284H6.6665L11.6153 1.88152C11.9975 1.76687 12.3941 2.0113 12.4634 2.40421Z" fill="#1A1A1A"/>
                </g>
                <defs>
                  <clipPath id="clip0_366_9672">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              Pay now
            </span>
          </div>
        </div>
        <!-- <div class="poc-book-faster">
          <div class="pocbf-header">
            <i class="pocbf-h-icon el-icon-arrow-down" />
            <span class="pocbf-h-title">Book faster - Login to Kenta</span>
          </div>
        </div> -->
        <div class="poc-book-form">
          <div class="pocbff-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 8.00169V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Guests Info
          </div>
          <div class="pocbff-text">Please fill out all the fields below to proceed.</div>
          <div class="pocbff-form">
            <div class="pocbff-row">
                <div class="pocbff-row-left">
                    <el-input v-model="guestForm.user_first_name"placeholder="First name":style="{border: !isFirstNameValid ? '1px solid rgb(255 0 0)'  : '', 'border-radius': '4px'}"></el-input>
                </div>
                <div class="pocbff-row-right">
                    <el-input v-model="guestForm.user_last_name"placeholder="Last name":style="{border: !isLastNameValid ? '1px solid rgb(255 0 0)' : '', 'border-radius': '4px'}"></el-input>
                </div>
            </div>
            <div class="pocbff-row email">
              <el-input v-model="otherForm.email" placeholder="Email Address":style="{border: !isemailValid ? '1px solid rgb(255 0 0)' : '', 'border-radius': '4px'}">
                <span slot="suffix" class="pocbff-icon-email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.9587 3.50861C15.8866 3.1453 15.7255 2.81283 15.5005 2.53817C15.4531 2.47833 15.4035 2.42473 15.3498 2.37114C14.9512 1.97058 14.3918 1.7207 13.7806 1.7207H2.21941C1.60825 1.7207 1.05081 1.97058 0.650344 2.37114C0.59675 2.42473 0.547188 2.47833 0.499625 2.53817C0.274531 2.8128 0.113438 3.1453 0.0433125 3.50861C0.0145 3.64883 0 3.79373 0 3.94023V12.06C0 12.3715 0.0660625 12.671 0.183875 12.9414C0.293156 13.1995 0.454281 13.433 0.650312 13.6289C0.7 13.6785 0.749344 13.724 0.803187 13.7693C1.18712 14.0873 1.68272 14.2793 2.21941 14.2793H13.7806C14.3175 14.2793 14.8152 14.0873 15.1969 13.7673C15.2506 13.724 15.3002 13.6785 15.3498 13.6289C15.5457 13.433 15.7068 13.1995 15.8183 12.9414V12.9394C15.9361 12.669 16 12.3715 16 12.06V3.94023C16 3.79373 15.9857 3.64883 15.9587 3.50861ZM1.45341 3.17411C1.65169 2.97605 1.91797 2.85614 2.21941 2.85614H13.7806C14.082 2.85614 14.3507 2.97605 14.5466 3.17411C14.5817 3.20939 14.6147 3.2487 14.6438 3.28777L8.58425 8.56886C8.41713 8.71533 8.21069 8.78767 8 8.78767C7.79144 8.78767 7.58512 8.71533 7.41578 8.56886L1.3585 3.28552C1.38531 3.24645 1.41834 3.20939 1.45341 3.17411ZM1.13544 12.06V4.46048L5.52056 8.28595L1.13766 12.1074C1.13544 12.0929 1.13544 12.0765 1.13544 12.06ZM13.7806 13.1437H2.21941C2.02313 13.1437 1.83947 13.0921 1.68272 13.0014L6.30703 8.97145L6.73875 9.34702C7.10003 9.66095 7.55212 9.81995 8 9.81995C8.45019 9.81995 8.90225 9.66095 9.2635 9.34702L9.695 8.97145L14.3175 13.0014C14.1605 13.0921 13.9769 13.1437 13.7806 13.1437ZM14.8646 12.06C14.8646 12.0765 14.8646 12.0929 14.8624 12.1074L10.4796 8.28817L14.8646 4.46252V12.06Z" fill="#1A1A1A" fill-opacity="0.4"/>
                  </svg>
                </span>
              </el-input>
            </div>
            <div class="pocbff-row">
              <div class="pocbff-row-left">
                <el-select v-model="otherForm.citizenship" placeholder="Citizenship" style="width: 100%;":style="{border: !iscitizenshipValid ? '1px solid #ff0000' : '', 'border-radius': '4px'}">
                  <el-option
                    v-for="citem in countryList"
                    :key="citem.value"
                    :value="citem.value"
                  >
                    {{ citem.label }}
                  </el-option>
                </el-select>
              </div>
              <div class="pocbff-row-right">
                <el-input v-model="otherForm.phone" placeholder="Phone Number":style="{border: !isphoneValid ? '1px solid #ff0000' : '', 'border-radius': '4px'}" />
              </div>
            </div>
          </div>
          <div class="poc-line"></div>
          <div class="pocbff-btns">
            <el-button icon="el-icon-arrow-down" type="primary" plain>Enter All Guests Names</el-button>
          </div>
          <div class="pocbff-tip">Not necessary, but you might need it for the visa application</div>
          <div class="poc-line"></div>
          <div class="pocbff-title mt24">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 8.00169V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Arrival Details
          </div>
          <div class="pocbff-time">
            <el-select v-model="otherForm.arrival_datetime" placeholder="Time">
              <el-option
                v-for="opt in timeList"
                :key="opt"
                :value="opt"
              >{{ opt }}</el-option>
            </el-select>
            <span class="pocbff-time-text">Your room <br>will be ready by 16:00</span>
          </div>
        </div>
        <div v-show="showCardForm" class="poc-book-credit mt16">
          <div class="pocbc-top">
            <div class="pocbff-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.0001 23.6157C11.6113 23.619 11.2292 23.5146 10.8961 23.314L6.73383 20.8797C5.17562 20.0083 3.87506 18.7409 2.96361 17.2058C2.05215 15.6706 1.5621 13.9221 1.54297 12.1368V5.48541C1.54315 5.03719 1.6806 4.59978 1.93681 4.232C2.19302 3.86423 2.55572 3.58374 2.97611 3.42827L11.2458 0.390553C11.7329 0.212264 12.2673 0.212264 12.7544 0.390553L21.0241 3.42827C21.4445 3.58374 21.8072 3.86423 22.0634 4.232C22.3196 4.59978 22.4571 5.03719 22.4573 5.48541V12.1368C22.4381 13.9221 21.9481 15.6706 21.0366 17.2058C20.1252 18.7409 18.8246 20.0083 17.2664 20.8797L13.1041 23.314C12.771 23.5146 12.3889 23.619 12.0001 23.6157ZM12.0001 1.97455C11.9457 1.96465 11.89 1.96465 11.8355 1.97455L3.56583 5.02598C3.47268 5.06048 3.39274 5.12341 3.33736 5.20587C3.28198 5.28833 3.25395 5.38613 3.25725 5.48541V12.1368C3.27714 13.6223 3.68902 15.0761 4.45122 16.3513C5.21341 17.6264 6.29889 18.6776 7.59783 19.3986L11.7601 21.8397C11.8337 21.8799 11.9162 21.901 12.0001 21.901C12.084 21.901 12.1665 21.8799 12.2401 21.8397L16.4024 19.3986C17.7013 18.6776 18.7868 17.6264 19.549 16.3513C20.3112 15.0761 20.7231 13.6223 20.743 12.1368V5.48541C20.7434 5.38845 20.714 5.2937 20.6588 5.21398C20.6037 5.13426 20.5253 5.07342 20.4344 5.0397L12.1647 2.00198C12.112 1.98287 12.0562 1.97358 12.0001 1.97455Z" fill="#1A1A1A"/>
                <path d="M11.2456 15.3255C11.0433 15.3242 10.8474 15.254 10.6902 15.1266L7.76217 12.6581C7.58759 12.5117 7.47831 12.3019 7.45837 12.0749C7.43844 11.848 7.50949 11.6224 7.65589 11.4478C7.80229 11.2732 8.01205 11.1639 8.23902 11.144C8.46599 11.124 8.69159 11.1951 8.86618 11.3415L11.1633 13.2752L15.0856 8.95521C15.2384 8.78608 15.4521 8.68456 15.6797 8.67298C15.9073 8.66141 16.1302 8.74073 16.2993 8.8935C16.4685 9.04626 16.57 9.25996 16.5815 9.48757C16.5931 9.71519 16.5138 9.93808 16.361 10.1072L11.9176 15.0444C11.8325 15.137 11.7284 15.21 11.6124 15.2586C11.4964 15.3071 11.3713 15.3299 11.2456 15.3255Z" fill="#1A1A1A"/>
              </svg>
              Pay with credit or debit card
            </div>
            <div class="pocbff-tip">As soon as you click “Complete Booking”, you will be charged the full price of your stay and your booking will be completed.</div>
          </div>
          <div class="pocbc-form">
            <div class="pocbc-form-left">
              <div class="pocbc-form-row">
                <!-- <el-input v-model="cardInfo.card_number" placeholder="Credit card number"></el-input> -->
                <div id="card-number-field-container" style="width:100%;"></div>
              </div>
              <div class="pocbc-form-row">
                <div id="card-expiry-field-container" class="pocbc-form-row-half"></div>
                <div id="card-cvv-field-container" style="width: 128px;"></div>
                <!-- <el-input v-model="validDate" placeholder="Expiry date（MM/YYYY）" class="pocbc-form-row-half"></el-input> -->
                <!-- <el-input v-model="guestForm.cvc" placeholder="CVC/CVV" style="width: 128px;margin-left:16px;"></el-input> -->
              </div>
              <div class="pocbc-form-row">
                <div id="card-name-field-container" style="width:100%;"></div>
                <!-- <el-input v-model="cardInfo.card_holder" placeholder="Name on the card"></el-input> -->
              </div>
            </div>
            <div class="pocbc-form-right">
              <div class="pocbc-r-label">We Accept:</div>
              <div class="pocbc-r-row">
                <img src="@/assets/images/cards/cc-visa.png" class="pocbc-r-icon" style="width:auto;height:12px;">
                <img src="@/assets/images/cards/cc-master.png" class="pocbc-r-icon" style="width:auto;height:18px;">
                <img src="@/assets/images/cards/cc-american.png" class="pocbc-r-icon" style="width:auto;height:24px;">
              </div>
              <div class="pocbc-r-row">
                <img src="@/assets/images/cards/cc-diners.png" class="pocbc-r-icon" style="width:auto;height:12px;">
                <img src="@/assets/images/cards/cc-discover.png" class="pocbc-r-icon" style="width:auto;height:12px;">
                <img src="@/assets/images/cards/cc-apply-pay.png" class="pocbc-r-icon" style="width:auto;height:16px;">
              </div>
              <div class="pocbc-r-row">
                <img src="@/assets/images/cards/cc-mnf.png" class="pocbc-r-icon" style="width:auto;height:12px;">
                <img src="@/assets/images/cards/cc-alipay.png" class="pocbc-r-icon" style="width:auto;height:12px;">
              </div>
              <div class="pocbc-r-chk">
                <el-checkbox />
                <span class="pocbc-r-chk-label">Save card details</span>
              </div>
            </div>
          </div>
          <div class="pocbc-footer">
            <el-button type="primary" style="width:420px;" :loading="finishLoading" @click="handleCompleteBooking">Complete Booking</el-button>
            <div class="pocbfc-form-tip mt8">
              By clicking on "Complete Booking", you accept <span class="underline">Booking Terms and Conditions</span>
            </div>
          </div>
        </div>
        <div v-if="!showCardForm" class="poc-btns">
          <el-button type="primary" :loading="cloading" style="width:332px;" @click="handleShowCard">Continue to Payment</el-button>
        </div>
      </div>
      <div class="poc-right">
        <div class="poc-right-content">
          <div class="pocr-row">
            <span class="pocr-label bold">Room price</span>
            <span class="pocr-text">1 x € {{ paymentInfo.amount | filterMoney }}</span>
          </div>
          <div class="pocr-row mt8">
            <span class="pocr-label normal">For {{ guestDetail }}</span>
          </div>
          <div v-if="taxList && taxList.length > 0" class="pocr-row mt8">
            <span class="pocr-label normal">Including Occupancy tax</span>
            <span class="pocr-label normal">{{ currencyMap[taxList[0].currency_code] || '€' }}{{ paymentInfo.$tax }}</span>
          </div>
          <div class="pocr-row mt16" style="justify-content: flex-start;">
            <input type="checkbox" class="pocr-checkbox">
            <span class="pocr-chk-label">Apply promo Code</span>
          </div>
          <div class="pocr-row mt16">
            <a class="pocr-ii" @click="openInfoModal">Important Information</a>
          </div>
          <div class="poc-line"></div>
          <div class="pocr-row mt16">
            <span class="pocr-label normal">Payment currency</span>
            <span class="pocr-label bold">{{ paymentInfo.currency_code }}</span>
            <!-- <el-dropdown trigger="click" @command="handlePaymentType">
              <span class="pocr-label bold"><i class="el-icon-arrow-down" /> {{ paymentInfo.currency_code }}</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="code in paymentCodeList"
                  :key="code"
                  :command="code"
                >
                  {{ code }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown> -->
          </div>
          <div class="pocr-total-label mt16">Total</div>
          <div class="pocr-total-text mt8">{{ currencyMap[paymentInfo.currency_code] }} {{ paymentInfo.amount | filterMoney }}</div>
          <div class="poc-line"></div>
          <div class="pocr-row mt24">
            <span class="pocr-text">To be paid upon arrival</span>
          </div>
          <div class="pocr-row mt16">
            <span class="pocr-label">Resort fee</span>
            <span class="pocr-label">€{{ paymentInfo.amount | filterMoney }}</span>
          </div>
          <div v-for="tRow in taxList" :key="tRow.name" class="pocr-row mt16">
            <span class="pocr-label lighter">{{ tRow.name }}</span>
            <span class="pocr-label lighter">{{ currencyMap[tRow.currency_code] || '€' }}{{ tRow.amount }}</span>
          </div>
          <div class="pocr-row mt16">
            <span class="pocr-label lighter">Please note You'll have to pay taxes and fees in the local currency.</span>
          </div>
        </div>
        <div class="pocr-cards">
          <img src="@/assets/images/cards/card-master.png" alt="MasterCard" style="width:114px;height:40px;">
          <img src="@/assets/images/cards/card-visa.png" alt="VISA" style="width:64px;height:64px;">
          <img src="@/assets/images/cards/card-pci.png" alt="PCI" style="width:104px;height:40px;">
        </div>
      </div>
    </div>
    <modal-tip
      v-if="showTip"
      msg="Payment Succeed"
    />
    <modal-order-policy
      v-if="infoModal"
      @close="infoModal=false"
    />
  </div>
</template>

<script>
import order from '@/mixins/order'
import { countryList } from '@/config/data'
import { currencyMap } from '@/config/paypal'

export default {
  mixins: [order],

  data() {
    return {
      guestForm: {
        user_first_name: '',
        user_last_name: '',
      },
    isFirstNameValid: true,
    isLastNameValid: true,
    isphoneValid: true,
    iscitizenshipValid: true,
    isemailValid: true,
      // 将countryList和currencyMap直接作为数据对象的一部分返回
      countryList: countryList,
      currencyMap: currencyMap,
    };
  },

  // 其他组件选项...
}
</script>

<style lang="scss" scoped>
.page-order {
  background: #F5F5F5;
  &-content {
    display: flex;
    align-items: flex-start;
    width: 1140px;
    margin: 24px auto 0;
    padding-bottom: 90px;
    .mt16 {
      margin-top: 16px;
    }
    .mt8 {
      margin-top: 8px;
    }
    .mt24 {
      margin-top: 24px;
    }
    .poc-book-credit {
      border-radius: 8px;
      border: 1px solid #DADADA;
      background: #FEFEFE;
    }
    .pocbc-top {
      padding: 16px 24px;
    }
    .pocbc-form {
      padding: 16px 24px;
      display: flex;
      background: linear-gradient(0deg, rgba(0, 188, 147, 0.08) 0%, rgba(0, 188, 147, 0.08) 100%), #FFF;
      &-left {
        flex: 1;
        min-width: 0;
      }
      &-right {
        width: 220px;
        margin-left: 16px;
      }
    }
    .pocbc-r-row {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    .pocbc-form-row {
      display: flex;
      align-items: center;
    }
    .pocbc-form-row-half {
      flex: 1;
      min-width: 0;
    }
    .pocbc-r-chk {
      margin-top: 38px;
      &-label {
        color: rgba(26, 26, 26, 0.60);
        font-size: 16px;
        font-weight: 300;
      }
    }
    .pocbc-r-icon {
      margin-right: 12px;
    }
    .pocbc-footer {
      padding: 24px;
    }
    .pocbfc-form-tip {
      color: rgba(26, 26, 26, 0.60);
      font-size: 14px;
      font-weight: 300;
      .underline {
        text-decoration: underline;
      }
    }
    .poc-left {
      flex: 1;
      min-width: 0;
    }
    .poc-btns {
      margin-top: 24px;
    }
    .poc-book-form {
      margin-top: 16px;
      padding: 24px;
      border-radius: 8px;
      border: 1px solid #DADADA;
      background: #FEFEFE;
    }
    .pocbff-title {
      display: flex;
      align-items: center;
      color: #1A1A1A;
      font-size: 24px;
      font-weight: 400;
      svg {
        margin-right: 4px;
      }
      &.mt24 {
        margin-top: 24px;
      }
    }
    .pocbff-time {
      margin-top: 12px;
      display: flex;
      align-items: center;
      &-text {
        margin-left: 16px;
        color: rgba(26, 26, 26, 0.60);
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
      }
    }
    .pocbff-text {
      margin-top: 8px;
      color: rgba(26, 26, 26, 0.60);
      font-size: 16px;
      font-weight: 300;
    }
    .pocbff-form {
      margin-top: 8px;
    }
    .pocbff-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 16px;
      &-left {
        flex: 1;
        min-width: 0;
      }
      &-right {
        margin-left: 16px;
        flex: 1;
        min-width: 0;
      }
      &.email :deep(.el-input__suffix) {
        top: 10px;
        right: 10px;
        height: auto;
      }
    }
    .pocbff-btns {
      margin-top: 24px;
    }
    .pocbff-tip {
      margin-top: 16px;
      color: rgba(26, 26, 26, 0.60);
      font-size: 16px;
      font-weight: 300;
    }
    .poc-line {
      margin-top: 24px;
      background-color: #DADADA;
      width: 100%;
      height: 1px;
    }
    .poc-book-faster {
      margin-top: 16px;
      border-radius: 8px;
      border: 1px solid #DADADA;
      background: #FEFEFE;
    }
    .pocbf-header {
      position: relative;
      height: 48px;
      line-height: 48px;
      color: #FF3263;
      text-align: center;
      cursor: pointer;
    }
    .pocbf-h-icon {
      position: absolute;
      top: 18px;
      left: 24px;
    }
    .pocbf-h-title {
      font-size: 16px;
      font-weight: 400;
    }
    .poc-room-box {
      border-radius: 8px;
      border: 1px solid #DADADA;
      background: #FEFEFE;
    }
    .pocrb-info {
      display: flex;
    }
    .pocrb-img {
      width: 160px;
      border-radius: 8px 0 0
    }
    .pocrb-center {
      padding: 16px 16px 5px;
    }
    .pocrb-star {
      display: flex;
      align-items: center;
      &-label {
        color: rgba(26, 26, 26, 0.60);
        font-size: 12px;
        font-weight: 400;
      }
    }
    .pocrb-title {
      margin-top: 6px;
      color: #1A1A1A;
      font-size: 16px;
      font-weight: 500;
    }
    .pocrb-text {
      margin-top: 16px;
      color: rgba(26, 26, 26, 0.40);
      font-size: 12px;
    }
    .pocrb-price {
      margin-top: 8px;
      &-old {
        color: rgba(26, 26, 26, 0.60);
        font-size: 12px;
        font-weight: 400;
        text-decoration: line-through;
      }
      &-new {
        margin-left: 8px;
        color: #1A1A1A;
        font-size: 16px;
        font-weight: 400;
      }
      &-text {
        margin-left: 8px;
        color: #1A1A1A;
        font-size: 14px;
        font-weight: 300;
      }
    }
    .pocrb-detail {
      margin-top: 8px;
      color: rgba(26, 26, 26, 0.60);
      font-size: 20px;
      transform: scale(0.5) translate(-50%, -50%);
    }
    .pocrb-right {
      padding: 16px 10px 16px 24px;
      border-left: 1px solid #DADADA;
    }
    .pocrb-r-label {
      color: rgba(26, 26, 26, 0.60);
      font-size: 12px;
      font-weight: 400;
    }
    .pocrb-r-text {
      margin-top: 4px;
      color: #1A1A1A;
      font-size: 16px;
      font-weight: 500;
    }
    .pocrb-amenity {
      padding: 16px 18px;
      display: flex;
      align-items: center;
      border-top: 1px solid #DADADA;
    }
    .pocrb-a-item {
      margin-right: 40px;
      color: #1A1A1A;
      font-size: 12px;
      font-weight: 400;
      svg {
        margin-right: 4px;
        vertical-align: -4px;
      }
    }
    .poc-right {
      width: 448px;
      margin-left: 16px;
      &-content {
        padding: 24px 16px;
        border-radius: 8px;
        border: 1px solid #DADADA;
        background: #FEFEFE;
      }
    }
    .pocr-total-label {
      color: #1A1A1A;
      font-size: 20px;
      font-weight: 400;
    }
    .pocr-total-text {
      color: #1A1A1A;
      font-size: 20px;
      font-weight: 400;
    }
    .pocr-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .pocr-ii {
      color: rgb(0, 188, 147);
      cursor: pointer;
    }
    .pocr-checkbox {
      accent-color: #FF3263;
    }
    .pocr-label {
      color: rgba(26, 26, 26, 0.60);
      font-size: 14px;
      font-weight: 400;
      &.bold {
        color: #1A1A1A;
        font-size: 16px;
      }
      &.lighter {
        line-height: 16px;
        font-weight: 300;
      }
    }
    .pocr-text {
      color: #1A1A1A;
      font-size: 16px;
      font-weight: 500;
    }
    .pocr-chk-label {
      margin-left: 8px;
      color: rgba(26, 26, 26, 0.60);
      font-size: 16px;
      font-weight: 300;
    }
    .pocr-cards {
      margin: 24px 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  &-header {
    position: sticky;
    top: 0;
    height: 64px;
    width: 100%;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DADADA;
    background: #FEFEFE;
    z-index: 999;
    .poh-label {
      width: 200px;
      color: rgba(26, 26, 26, 0.60);
      font-size: 14px;
      font-weight: 500;
    }
    .poh-right {
      display: flex;
      align-items: center;
      width: 200px;
    }
    .pohr-label {
      margin: 0 4px;
      color: #1A1A1A;
      font-size: 14px;
      font-weight: 400;
    }
.border-red .el-input__inner {
    border-color: red !important;
}
    .pohr-time {
      margin-right: 8px;
      color: #1A1A1A;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
