<template>
	<div class="page">
		<new-header />
		<div>
			<!-- :class="{ searchsticky: issearchSticky }" -->
			<div class="search-border" ref="searchElement">
				<div class="warps">
					<div class="search-box">
						<div class="search-li">
							<p class="a"> עדכון</p>
						</div>
						<div class="search-li filter">
							<filter-member :list="list" class="pacf-mb" @change="changeGuests" />
						</div>
						<div class="search-li filter">
							<filter-datepicker ref="datepicker" :defaultTime="defaultTime" @RangeTime="RangeTime"
								class="pacf-dp" :start-and-end-time="searchQuery.date" :date-type="searchQuery.dateType"
								:day-rage-index="dayRageIndex" @update:datetype="updateDateType"
								@update:time="updateStartEndTime" @update:daterange="updateDateRange" />
						</div>
						<div class="search-li">
							<div class="pac-search">
								<div class="search-btn" @click="citysearch"></div>
								<el-autocomplete @keyup.enter.native="search" suffix-icon="el-icon-search"
									class="pac-input" v-model="searchQuery.destinationName"
									:fetch-suggestions="querySearch" @focus="searchQuery.destinationName=''"
									:placeholder="other.name" @select="handleSelect">
									<template slot-scope="{ item }">
										<div>{{ item.city }}</div>
									</template>
								</el-autocomplete>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="warps">
				<div class="navs">
					<span class="span-li">
						<span>{{other.name}}</span><i class="el-icon-arrow-left"></i>
					</span>

					<span class="span-li">
						<span>לאס וגאס</span><i class="el-icon-arrow-left"></i><span>ארצות הברית</span><i
							class="el-icon-arrow-left"></i>בית
					</span>
				</div>
			</div>
			<div class="warps">
				<div class="content">
					<div class="Hotel">
						<div class="nav">
							<div class="left flex">
								<div class="yuan">
									<!--填充空白的位置 -->
									<span v-for="j in Math.max(0, 5 - Math.floor((other.rating || 0) / 2))"
										:key="'fraction-' + j"></span>
									<!-- 显示当前的分数 -->
									<span v-for="i in Math.min(5, Math.floor((other.rating || 0) / 2))"
										:key="'current-' + i" class="current"></span>
									<img src="~assets/images/icon/image 1.png" />
								</div>
								<p class="time">0 חוות דעת</p>
							</div>
							<div class="right">
								<div class="xx">
									<p class="p address">
										<span class="n">{{other.address}}</span>
										<span class="line m-line"></span>
									</p>
									<div class="xx-info">
										<span class="line m-line-no"></span>
										<span class="p rtl">{{other.distance_client}} ק״מ ממרכז העיר</span>
										<span class="line"></span>
										<div class="rate">
											<el-rate void-color="#FFB800" :value="other.star_rating" />
											<div class="disabled"></div>
										</div>
									</div>
								</div>
								<h1>{{other.name}}</h1>
							</div>
						</div>
						<!-- pc 轮播 -->
						<div class="ban">
							<div class="ban-h" v-if="otherimg.length==0"></div>
							<div class="ban-li flex" v-for="(item,index) in otherimg" :key="index">
								<el-image style="width: 100%; height: 100%" :src="item"
									:preview-src-list="other.images">
								</el-image>
								<p v-if="index == 1" style="direction: rtl;">{{other.images?other.images.length:0}}
									תמונות </p>
							</div>
						</div>
						<!-- 移动端轮播 -->
						<div class="m-ban">
							<swiper ref="mySwiper" :options="swiperOptionM">
								<swiper-slide v-for="(item,index) in otherimg" :key="index">
									<el-image style="width: 100%; height: 2.4rem" :src="item"
										:preview-src-list="other.images">
									</el-image>
								</swiper-slide>
								<div class="swiper-pagination" slot="pagination"></div>
							</swiper>
							<p style="direction: rtl;">{{mimgNum}} תמונות </p>
						</div>
					</div>

					<div class="price" :class="{ pricesticky: pricechSticky}" ref="priceElement">
						<div class="price-info flex">
							<div class="bgs"></div>
							<div @click="scrollToTop" class="fh"><i class="el-icon-download"></i> חזרה למעלה</div>
							<button style="cursor: pointer;" @click="tocheckout(hotelslist[0])">לצפיה בדילים</button>
							<div class="num">₪ {{hotelslist.length>0? hotelslist[0].children[0].daily_prices:0}} -מ
							</div>
							<div class="flex"></div>
							<div class="r">
								<div class="r-w">
									<p>מדיניות</p>
									<p>מיקום</p>
									<p>חוות דעת</p>
									<p>שירותים</p>
									<p>חדרים פנויים</p>
								</div>
							</div>
						</div>
					</div>
					<!-- 移动端 -->
					<div class="ismobile">
						<div class="mfilter-bg">
							<div class="filter-f">
								<div class="pub-div select">
									עדכון
								</div>
								<div class="pub-div" @click="showmember">
									<i class="el-icon-arrow-down"></i>
									<img src="~assets/images/icon/m-my.png" />
								</div>
								<div class="pub-div" @click="showdatepicker">
									<img src="~assets/images/icon/m-date.png" />
								</div>
								<div class="pub-div" @click="searchdirection=true">
									<img src="~assets/images/icon/m-s.png" />
								</div>
							</div>
						</div>
						<filter-member ref="member" :list="list" :hideMember="false" class="pacf-mb"
							@change="changeGuests" />
						<filter-datepicker ref="mdatepicker" :hideDate="false" :defaultTime="defaultTime"
							@RangeTime="RangeTime" class="pacf-dp" :start-and-end-time="searchQuery.date"
							:date-type="searchQuery.dateType" :day-rage-index="dayRageIndex"
							@update:datetype="updateDateType" @update:time="updateStartEndTime"
							@update:daterange="updateDateRange" />

						<div class="Palace">
							<div class="Palace-left" :class="{ sticky: !ism?isSticky:'' }" ref="stickyElement">
								<div class="top">
									<div class="index">
										<span>{{other.rating}}</span>
									</div>
									<div class="name">
										<h3>מעולה</h3>
										<div class="yuan">
											<!--填充空白的位置 -->
											<span v-for="j in Math.max(0, 5 - Math.floor((other.rating || 0) / 2))"
												:key="'fraction-' + j"></span>
											<!-- 显示当前的分数 -->
											<span v-for="i in Math.min(5, Math.floor((other.rating || 0) / 2))"
												:key="'current-' + i" class="current"></span>
										</div>
										<p>0 חוות דעת</p>
									</div>
									<div class="speed">
										<div class="tit">ביקורות האורחים:</div>
										<div class="speed-li">
											<div class="num">
												<p class="flex">{{other.price}}</p>
												תמורה על הכסף
											</div>
											<div class="progress">
												<el-progress :stroke-width="8" :show-text="false"
													:percentage="computedPercentage"
													color="rgba(0, 188, 147, 0.8)"></el-progress>
											</div>
										</div>
										<div class="speed-li">
											<div class="num">
												<p class="flex">{{other.location}}</p>
												מיקום המלון
											</div>
											<div class="progress">
												<el-progress :stroke-width="8" :show-text="false"
													:percentage="computedPercentage1"
													color="rgba(0, 188, 147, 0.8)"></el-progress>
											</div>
										</div>
										<div class="speed-li">
											<div class="num">
												<p class="flex">{{other.wifi}}</p>
												איכות ה-WiFi
											</div>
											<div class="progress">
												<el-progress :stroke-width="8" :show-text="false"
													:percentage="computedPercentage2"
													color="rgba(0, 188, 147, 0.8)"></el-progress>
											</div>
										</div>
										<div style="height: 8px;"></div>
										<button class="btn">
											לצפיה בכל הביקורות
											<img src="~assets/images/icon/Group.png" />
										</button>
									</div>
								</div>
								<div class="customer">
									<p>לא אוהבים לסגור לבד?</p>
									<p>חסכו לכם את כאב הראש</p>
									<div class="chat-btn">
										דברו עם נציג<img src="~assets/images/icon/Page-1.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<h1 class="h-title">{{other.name}}</h1>
					<div class="Palace">
						<div class="Palace-left" :class="{ sticky: !ism?isSticky:'' }" ref="stickyElement">
							<div class="top">
								<div class="index">
									<span>{{other.rating}}</span>
								</div>
								<div class="name">
									<h3>מעולה</h3>
									<div class="yuan">
										<!--填充空白的位置 -->
										<span v-for="j in Math.max(0, 5 - Math.floor((other.rating || 0) / 2))"
											:key="'fraction-' + j"></span>
										<!-- 显示当前的分数 -->
										<span v-for="i in Math.min(5, Math.floor((other.rating || 0) / 2))"
											:key="'current-' + i" class="current"></span>
									</div>
									<p>0 חוות דעת</p>
								</div>
								<div class="speed">
									<div class="tit">ביקורות האורחים:</div>
									<div class="speed-li">
										<div class="num">
											<p class="flex">{{other.price}}</p>
											תמורה על הכסף
										</div>
										<div class="progress">
											<el-progress :stroke-width="8" :show-text="false"
												:percentage="computedPercentage"
												color="rgba(0, 188, 147, 0.8)"></el-progress>
										</div>
									</div>
									<div class="speed-li">
										<div class="num">
											<p class="flex">{{other.location}}</p>
											מיקום המלון
										</div>
										<div class="progress">
											<el-progress :stroke-width="8" :show-text="false"
												:percentage="computedPercentage1"
												color="rgba(0, 188, 147, 0.8)"></el-progress>
										</div>
									</div>
									<div class="speed-li">
										<div class="num">
											<p class="flex">{{other.wifi}}</p>
											איכות ה-WiFi
										</div>
										<div class="progress">
											<el-progress :stroke-width="8" :show-text="false"
												:percentage="computedPercentage2"
												color="rgba(0, 188, 147, 0.8)"></el-progress>
										</div>
									</div>
									<div style="height: 8px;"></div>
									<button class="btn">
										לצפיה בכל הביקורות
										<img src="~assets/images/icon/Group.png" />
									</button>
								</div>
							</div>
							<div class="customer">
								<p>לא אוהבים לסגור לבד?</p>
								<p>חסכו לכם את כאב הראש</p>
								<div class="chat-btn">
									דברו עם נציג<img src="~assets/images/icon/Page-1.png" />
								</div>
							</div>
						</div>
						<div class="Palace-right" :style="{marginLeft:isSticky?'3.32rem':''}">
							<div class="Hotel-li" v-for="(item,index) in hotelslist" :key="index">
								<div class="room">
									<div class="left flex">
										<h2>{{item.room_name}}</h2>
										<p style="height: 0.2rem;">{{item.room_data_trans.bedding_type}}</p>
										<div class="laber-slide">
											<div class="laber">
												<div v-for="(iteml,indexl) in item.room_amenities" :key="indexl">
													{{iteml.name}}
													<img :src="fnimg(iteml.image)" />
												</div>
											</div>
										</div>
									</div>
									<div class="img" @click="seeMoremImg(item)">
										<el-image style="width: 100%; height: 100%"
											:src="item.images?item.images[0]:''">
										</el-image>
										<!-- :preview-src-list="item.images" -->
										<p v-if="item.images?item.images.length>0:false">תמונות
											{{item.images?item.images.length:0}}<i class="el-icon-view"></i>
										</p>
									</div>
								</div>
								<div class="item-li">
									<div class="item-li-info" v-for="(item2,index2) in item.children" :key="index2">
										<div class="info item-l">
											<div class="btn">
												<p v-if="index2==0">המחיר הכי טוב</p>
												<div class="button" @click="tocheckout(item)">
													הזמינו עכשיו
												</div>
												<!-- <router-link :to="'/checkoutPage?book_hash=' + item.book_hash">
													<div class="button">
														הזמינו עכשיו
													</div>
												</router-link> -->
											</div>
											<div class="item-price flex">
												<div>₪ {{item2.daily_prices}}</div>
												<p>{{futax(item)}} מיסים ואגרות {{fuunit(item)}}</p>
												<p>עבור {{other.date}} לילות עבור {{other.total_guests}} אורחים</p>
											</div>
										</div>
										<div class="info wallet">
											<div class="p" style="color: rgb(0, 188, 147);">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												{{item2.free_cancellation_before}}
												<img class="r" src="~assets/images/icon/icon.png" />
											</div>
											<div class="p">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												שלם עכשיו
												<img class="r" src="~assets/images/icon/qb.png" />
											</div>
										</div>
										<div class="info wallet no-boder">
											<div class="p" v-if="item2.bedding_type">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												{{item2.bedding_type}}
												<img class="r" src="~assets/images/icon/icon27.png" />
											</div>
											<!-- 无早餐 -->
											<div v-if="item2.meal=='nomeal'" class="p">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												לא כולל ארוחות
												<img class="r" src="~assets/images/icon/icon26.png" />
											</div>
											<!-- 含早餐 -->
											<div v-if="item2.meal=='breakfast'" class="p"
												:style="{color:item2.meal_data.has_breakfast?'rgba(255, 50, 99, 1)':'#1A1A1A'}">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												{{item2.meal_data.has_breakfast?'ארוחת בוקר כלולה':'לא כולל ארוחות'}}
												<img v-if="item2.meal_data.has_breakfast" class="r"
													src="~assets/images/icon/icon26s.png" />
												<img v-if="!item2.meal_data.has_breakfast" class="r"
													src="~assets/images/icon/icon26.png" />
											</div>

											<div v-if="item2.amenities_datacx" class="p"
												style="color: rgba(255, 50, 99, 1);">
												סוג המיטה לא מובטח
												<img class="r" src="~assets/images/icon/icon25.png" />
											</div>

											<div class="p" v-if="item2.amenities_data">
												חדר ללא עישון
												<img class="r" src="~assets/images/icon/icon24.png" />
											</div>
										</div>
									</div>
									<div class="more" v-if="item.children.length>5">
										5 אפשרויות נוספות<i class="el-icon-arrow-down"></i>
									</div>
								</div>
							</div>
							<div class="device">
								<h4>שירותים</h4>
								<div class="device-list">
									<div class="device-li" v-for="(item,index) in amenities" :key="index">
										<div class="name">{{item.group_name||'五标题'}}<img
												src="../assets/images/icon/my.png" /></div>
										<div class="item">
											<p v-for="(items,indexs) in item.amenities" :key="indexs">
												{{items}}<span></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="maps">
								<div class="name">
									<h4>מיקום</h4>
									<p>{{other.address}}</p>
								</div>
								<div class="map-box">
									<div ref="map" id="map" class="mapid"></div>
								</div>
								<div class="maps-icon">
									<div class="maps-icon-li">
										<h4>מקומות בקרבת מקום</h4>
										<p>Fall of Atlantis at Cesar's place <img src="../assets/images/icon/my.png" />
										</p>
										<p>Fall of Atlantis at Cesar's place <img src="../assets/images/icon/my.png" />
										</p>
									</div>
								</div>
							</div>
							<div class="progressTime">
								<h4>מדיניות</h4>
								<p class="time">צ'ק-אין וצ'ק-אאוט <img src="../assets/images/icon/fi_3114812.png" /></p>
								<div class="progressTime-li progressTime-top">
									<div class="progress">
										<el-progress :format="checkformat" :stroke-width="8"
											:percentage="checkpercentage" color="rgba(255, 50, 99, 1)">
										</el-progress>
									</div>
									<div class="text">
										<p class="n">צ'ק אין</p>
										<p class="t">{{other.check_in_time}} אחרי</p>
									</div>
								</div>
								<div class="progressTime-li" style="margin-top: 0.48rem;">
									<div class="progress">
										<el-progress :format="outformat" :stroke-width="8" :percentage="outpercentage"
											color="rgba(255, 50, 99, 1)"></el-progress>
									</div>
									<div class="text">
										<p class="n">צ׳ק אווט</p>
										<p class="t">{{other.check_out_time}} עד</p>
									</div>
								</div>
								<div class="facilities">
									<h5>מיטת תינוק <img src="../assets/images/icon/fi_1242946.png" /></h5>
									<div class="facilities-info">
										<div class="facilities-li">
											<p class="n">מְחִיר</p>
											<p class="txst">צריך להבהיר במקום</p>
										</div>
										<div class="facilities-li">
											<p class="n">מספר מקסימלי</p>
											<p class="txst">צריך להבהיר במקום</p>
										</div>
									</div>
								</div>
							</div>
							<div class="paymentInfo">
								<h4>תנאי תשלום</h4>
								<div class="paymentItem">
									<div class="payment-li paymentItem-pc">
										<h5>באינטרנט</h5>
										<p class="text">חלק מהתעריפים ניתן לשלם באמצעות כרטיס בנק בעת </p>
										<p class="text">הזמנה מקוונת. אתה יכול לשלם עבור ההזמנה שלך</p>
										<p class="text">באמצעות קוד ההטבה אם יש לך כזה.</p>
									</div>
									<div class="payment-li">
										<h6>באמצעות כרטיס</h6>
										<img src="../assets/images/icon/verified-visa-mastercard 1.png" />
									</div>
									<div class="payment-li">
										<h5>במלון</h5>
										<p class="t">במזומן</p>
										<p class="l">במטבע המלון - יורו</p>
									</div>
									<!-- 移动端 -->
									<div class="payment-li paymentItem-m">
										<h5>באינטרנט</h5>
										<p class="text">חלק מהתעריפים ניתן לשלם באמצעות כרטיס בנק בעת </p>
										<p class="text">הזמנה מקוונת. אתה יכול לשלם עבור ההזמנה שלך</p>
										<p class="text">באמצעות קוד ההטבה אם יש לך כזה.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mobile-customer">
						<div class="customer">
							<p>לא אוהבים לסגור לבד?</p>
							<p>חסכו לכם את כאב הראש</p>
							<div class="chat-btn">
								דברו עם נציג<img src="~assets/images/icon/Page-1.png" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 移动端搜索 -->
		<el-drawer :with-header="false" :visible.sync="searchdirection" size="100%" direction="btt">
			<mobile-header @close="searchdirection=false" />
			<div class="m-search">
				<div class="pac-search">
					<div class="search-btn" @click="citysearch"></div>
					<el-autocomplete @keyup.enter.native="search" suffix-icon="el-icon-search" class="pac-input"
						v-model="searchQuery.destinationName" :fetch-suggestions="querySearch"
						@focus="searchQuery.destinationName=''" placeholder="select city" @select="handleSelect">
						<template slot-scope="{ item }">
							<div>{{ item.city }}</div>
						</template>
					</el-autocomplete>
				</div>
			</div>
		</el-drawer>
		<new-footer />
		<!-- 查看房间图片 -->
		<div class="roomImg">
			<el-dialog :show-close="false" :visible.sync="dialogVisible" width="70%">
				<div class="seeImg">
					<div class="rooms">
						<div class="title">Julius Deluxe Double room</div>
						<p class="decs">מיטה כפולה מלאה</p>
						<div class="rooms-list">
							<div class="rooms-li" v-for="(item,index) in room_amenities" :key="index">
								<p>{{item.name}}<img :src="fnimg(item.image)" /></p>
							</div>
						</div>
						<div class="line"></div>
						<div class="wallets">
							<div class="wallets-li" v-if="bedding_type">
								<img class="l" src="~assets/images/icon/info-feature.png" />
								<p>{{bedding_type}}</p>
								<img class="r" src="~assets/images/icon/icon27.png" />
							</div>
							<div class="wallets-li">
								<img class="l" src="~assets/images/icon/info-feature.png" />
								<p class="color">{{free_cancellation_before}}</p>
								<img class="r" src="~assets/images/icon/icon.png" />
							</div>
							<div class="wallets-li">
								<img class="l" src="~assets/images/icon/info-feature.png" />
								<p>שלם עכשיו</p>
								<img class="r" src="~assets/images/icon/qb.png" />
							</div>
						</div>
						<div class="seemBottom">
							<div class="left">
								<p>המחיר הכי טוב</p>
								<button @click="tocheckout(seeImgitem)">הזמינו עכשיו</button>
							</div>
							<div class="right">
								<div class="seeprice">₪ {{daily_prices}}</div>
								<p>{{futax(seeImgitem)}} מיסים ואגרות {{fuunit(seeImgitem)}}</p>
								<p>עבור {{other.date}} לילות עבור {{other.total_guests}} אורחים</p>
							</div>
						</div>
					</div>
					<div class="carouse">
						<div class="carouse-colse" @click="dialogVisible=!dialogVisible">
							<img class="l" src="~assets/images/icon/mapcolse.png" />
						</div>
						<el-carousel ref="carouselRef" @change="change" :initial-index="initialIndex"
							indicator-position="none" arrow="none" height="7.68rem">
							<el-carousel-item v-for="(item,index) in seeimg" :key="index">
								<el-image style="width: 100%; height: 7.68rem" :src="item">
								</el-image>
							</el-carousel-item>
						</el-carousel>
						<div class="arrow">
							<img @click="prev" src="~assets/images/icon/right-arrow-svgrepo-com 6.png" />
							<p>{{initialIndex+1}} / {{seeimg.length}}</p>
							<img @click="next" src="~assets/images/icon/right-arrow-svgrepo-com 7.png" />
						</div>
					</div>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import casino from '@/mixins/casino'
	import {
		getHotelInfo,
		nearbyPois
	} from '@/api/kentaHb'
	import {
		currencyMap
	} from '@/config/paypal.js'
	import {
		mapToken
	} from '@/config/map'
	export default {
		props: {
			other: {
				type: Object,
				default: () => ({
					price: 0,
					location: 0,
					wifi: 0
				}) // 设置默认值
			}
		},
		computed: {
			computedPercentage() {
				// 将 `other.price` 限制在 0 到 100 之间
				return Math.min(Math.max(this.other.price, 0), 100) * 10;
			},
			computedPercentage1() {
				// 将 `other.price` 限制在 0 到 100 之间
				return Math.min(Math.max(this.other.location, 0), 100) * 10;
			},
			computedPercentage2() {
				// 将 `other.price` 限制在 0 到 100 之间
				return Math.min(Math.max(this.other.wifi, 0), 100) * 10;
			},
			amenities() {
				return this.other.amenities ? JSON.parse(this.other.amenities) : []
			}
		},

		mixins: [casino],
		data() {
			return {
				seeImgitem: {},
				daily_prices: '',
				bedding_type: '',
				free_cancellation_before: '',
				seeimg: [],
				room_amenities: [],
				initialIndex: 0,
				dialogVisible: false,
				searchdirection: false,
				hotelslist: [],
				other: {},
				isSticky: false,
				stickyOffset: 0,
				issearchSticky: false,
				pricechSticky: false,
				otherimg: [],
				dayTime: '',
				defaultTime: '',
				list: [],
				mimgNum: 0,
				ism: false,
				map: null,
				modifyData: {
					checkin: '',
					checkout: '',
					hid: "",
					other: {},
					adults: 1,
					children: []
				},
				swiperOptionM: {
					autoplay: {
						delay: 5000
					},
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets', // 或者 'fraction'，'progressbar' 等
					},
					// 将指示器放置在顶部
					paginationClickable: true,
					paginationBulletRender: (index, className) => {
						return `<span class="${className}">${index + 1}</span>`;
					},
				},
				checkpercentage: 0,
				outpercentage: 0,
				xximg: '',
				pois: []
			}
		},
		mounted() {
			this.dayTime = this.$route.query.time
			this.searchOffset = this.$refs.searchElement.offsetTop;
			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");

			if (this.$route.query.adults) {
				this.list = JSON.parse(this.$route.query.adults)
			}
			this.getmrTime()

			this.getHotel()

		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods: {
			checkformat(percentage) {
				return percentage = this.other.check_in_time
			},
			outformat(percentage) {
				return percentage = this.other.check_out_time
			},
			// 查看图片
			seeMoremImg(item) {
				this.initialIndex = 0
				this.daily_prices = 0
				this.bedding_type = ''
				this.free_cancellation_before = ''
				this.seeimg = []
				this.room_amenities = []
				this.seeImgitem = {}
				this.seeimg = item.images
				this.dialogVisible = !this.dialogVisible
				this.room_amenities = item.room_amenities
				this.free_cancellation_before = item.children[0].free_cancellation_before
				this.bedding_type = item.children[0].bedding_type
				this.daily_prices = item.children[0].daily_prices
				this.seeImgitem = item
			},
			// 上一张
			prev() {
				this.$refs.carouselRef.prev()
			},
			// 下一张
			next() {
				this.$refs.carouselRef.next()
			},
			// 轮播
			change(e) {
				this.initialIndex = e
			},
			fnimg(image) {
				return require(`~/assets/images/icon/${image}`)
			},
			// 获取默认时间
			getmrTime() {
				let t = this.$route.query.time
				let t1 = t.split("/")[0]
				let t2 = t.split("/")[1]
				let year = t1.split("-")[2].slice(2, 4)

				let tc1 = t1.split("-")[0] + '/' + t1.split("-")[1] + '/' + year
				let tc2 = t2.split("-")[0] + '/' + t2.split("-")[1] + '/' + year
				this.defaultTime = tc2 + '-' + tc1
			},
			// 跳去下一个页面
			tocheckout(e) {
				let peopleNum = 2
				if (this.list.length > 0) {
					peopleNum = this.list[0].value + this.list[1].value
				}
				let query = {
					room_name: e.room_name,
					book_hash: e.book_hash,
					// taxprice: this.futax(e),
					// unit: this.fuunit(e),
					taxes: JSON.stringify(e.payment_options.payment_types[0].tax_data.taxes),
					hid: this.$route.query.id,
					checkin: this.modifyData.checkin,
					checkout: this.modifyData.checkout,
					peopleNum: peopleNum
					// other: JSON.stringify(this.other)
				}
				this.$router.push({
					path: '/checkoutPage',
					query: query
				})
			},
			// 移动端人数选择
			showmember() {
				this.$refs.member.handleVisible4()
			},
			// 移动端时间选择
			showdatepicker() {
				this.$refs.mdatepicker.handleVisible3()
			},
			// 单位
			fuunit(val) {
				let unit = ""
				if (val) {
					if (val.payment_options) {
						if (val.payment_options.payment_types.length > 0) {
							val.payment_options.payment_types.forEach(item => {
								item.tax_data.taxes.forEach(j => {
									Object.keys(currencyMap).forEach(key => {
										if (j.currency_code == key) {
											unit = currencyMap[key]
										}
									})
								})
							})
							return unit;
						}
					} else {
						return unit;
					}
				} else {
					return unit;
				}
			},
			// 税费
			futax(val) {
				let price = 0
				if (val) {
					if (val.payment_options) {
						if (val.payment_options.payment_types.length > 0) {
							val.payment_options.payment_types.forEach(item => {
								item.tax_data.taxes.forEach(j => {
									if (j.included_by_supplier) {
										price = price + Number(j.amount)
									}
								})

							})
							return price.toFixed(2);
						}
					} else {
						return price;
					}
				} else {
					return price;
				}
			},
			changeGuests(data) {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})
				this.modifyData.adults = data[0].value
				this.list = data
				// 获取未成年人
				let children = []
				if (data[1].value > 0) {
					for (let i = 0; i < data[1].value; i++) {
						let data = 12
						children.push(data)
					}
				}
				this.modifyData.children = children.length > 0 ? children : []
				this.getDateils()
			},
			// 筛选时间
			RangeTime(e) {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})
				this.dayTime = e
				this.getHotel()
			},
			scrollToTop() {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			},
			// 页面是否是移动端
			checkIfMobile() {
				if (820 < window.innerWidth) {
					this.ism = false
				} else {
					this.ism = true
				}
			},
			// 监听滚动
			handleScroll() {
				this.isSticky = (window.scrollY + 130) >= this.stickyOffset;
				this.issearchSticky = window.scrollY >= this.searchOffset;
				this.pricechSticky = window.scrollY >= this.priceOffset;
			},
			getHotel() {
				this.modifyData.hid = this.$route.query.id
				if (this.dayTime) {
					let checkin = (this.dayTime.split("/")[0]).split("-")
					let checkinTime = checkin[2] + '-' +
						checkin[1] + '-' + checkin[0]

					let checkout = (this.dayTime.split("/")[1]).split("-")
					let checkoutTime = checkout[2] + '-' +
						checkout[1] + '-' + checkout[0]

					this.modifyData.checkin = checkinTime
					this.modifyData.checkout = checkoutTime
					this.getDateils()
				}
				if (this.list.length > 0) {
					this.modifyData.adults = this.list[0].value
					// 获取未成年人
					let children = []
					if (this.list[1].value > 0) {
						for (let i = 0; i < this.list[1].value; i++) {
							let data = 12
							children.push(data)
						}
					}
					this.modifyData.children = children.length > 0 ? children : []
				}
			},
			// 价格相加
			getprice(list) {
				let num = 0
				if (list.length > 0) {
					list.forEach(item => {
						num = num + Number(item)
					})
				}
				return num
			},
			loadScript(src) {
				return new Promise((resolve, reject) => {
					let script = document.querySelector('#map_script')
					if (script && window.mapboxgl) {
						if (window.mapboxgl) {
							resolve({
								loaded: true,
								err: null
							})
							return
						}
						script.parentElement.removeChild(script)
					}
					script = document.createElement('script')
					script.setAttribute('id', 'map_script')
					script.src = src
					script.onload = () => {
						resolve({
							loaded: true,
							err: null
						})
					}
					script.onerror = error => {
						reject({
							loaded: true,
							err: error
						})
					}
					document.body.appendChild(script)
				})
			},
			async getinitMap() {
				try {
					await this.loadScript('https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js')
					mapboxgl.accessToken = mapToken

					this.map = new mapboxgl.Map({
						container: 'map',
						style: 'mapbox://styles/mapbox/streets-v11',
						center: [this.other.longitude, this.other.latitude], // 设置初始地图中心点
						zoom: 13
					})
					// 将全屏控件添加到地图上
					this.map.addControl(new mapboxgl.FullscreenControl()); //全屏控件
					this.map.addControl(new mapboxgl.NavigationControl(),
						// top-left、top-right、bottom-left、bottom-right
						'top-right'); //导航控件
					this.map.addControl(new mapboxgl.ScaleControl(), 'top-right'); //比例尺控件

					const generateStars = (rating) => {
						let stars = '';
						for (let i = 1; i <= 5; i++) {
							if (i <= rating) {
								stars +=
									`<img src="https://kenta.b-cdn.net/star.svg" style="width: 10px; height: 10px; margin-right: 5px;">`;
							} else {
								stars +=
									`<img src="https://kenta.b-cdn.net/star.svg" style="width: 10px; height: 10px; margin-right: 5px;">`;
							}
						}
						return stars;
					};

					const popup = new mapboxgl.Popup({
							offset: 25,
							closeButton: false
						})
						.setHTML(`
							  <div style="display: flex;width: 260px;">
							  <img src="${this.otherimg[0]}"  style="width: 92px; height: 92px; margin-right:10px">
							    <div style="margin:10px 0">
								<div style="display: flex;align-items: center;">
								<div style="font-size: 22px;font-weight: bold;color: #ffb800;margin-right: 10px;">
								${this.other.rating}
								</div>
								${generateStars(this.other.star_rating)}
								</div>
								<h3 style="font-size:10px;color:#008cb9;margin-top: 10px;line-height: 11px;">${this.other.name}</h3>
								</div>
							  </div>
							`)

					const el = document.createElement('div')
					el.innerHTML = `<img style="height: 50rpx;width: 50px;" src="https://kenta.b-cdn.net/local.png" />`
					el.className = 'map-marker'
					const marker = new mapboxgl.Marker(el)
						.setLngLat([this.other.longitude, this.other.latitude])
						.setPopup(popup)
						.addTo(this.map)

					marker.togglePopup();



					// // 创建自定义图标元素
					// const el = document.createElement('div');
					// el.className = 'marker';
					// el.style.backgroundImage =
					// 	'url(https://kenta.b-cdn.net/local.png)'; // 谷歌定位图标
					// el.style.width = '50px';
					// el.style.height = '50px';
					// el.style.backgroundSize = 'cover';

					// // 添加标记到地图
					// const marker = new mapboxgl.Marker({
					// 		element: el,
					// 	})
					// 	.setLngLat([this.other.longitude, this.other.latitude])
					// 	.addTo(this.map);

					// Popup 内容


					// const popupContent = `
					// 		  <div style="display: flex;width: 260px;">
					// 		  <img src="${this.otherimg[0]}"  style="width: 92px; height: 92px; margin-right:10px">
					// 		    <div style="margin:10px 0">
					// 			<div style="display: flex;align-items: center;">
					// 			<div style="font-size: 22px;font-weight: bold;color: #ffb800;margin-right: 10px;">
					// 			${this.other.rating}
					// 			</div>
					// 			${generateStars(this.other.star_rating)}
					// 			</div>
					// 			<h3 style="font-size:10px;color:#008cb9;margin-top: 10px;line-height: 11px;">${this.other.name}</h3>
					// 			</div>
					// 		  </div>
					// 		`;

					// 创建并显示 Popup
					// const popup = new mapboxgl.Popup({
					// 		offset: 25,
					// 		closeButton: false
					// 	})
					// 	.setLngLat([this.other.longitude, this.other.latitude]) // Popup 显示的位置
					// 	.setHTML(popupContent) // 设置 Popup 的内容
					// 	.addTo(this.map); // 将 Popup 添加到地图上


					// 监听 Marker 的点击事件
					// el.addEventListener('click', () => {
					// 	if (popup.isOpen()) {
					// 		popup.remove()
					// 	} else {

					// 	}
					// })

					this.map.flyTo({
						center: [this.other.longitude, this.other.latitude],
						zoom: 16,
						essential: true
					})

				} catch (e) {
					console.log('init map error: ', e)
				}
			},

			getnearbyPois() {
				let params = {
					lat: this.other.latitude,
					lon: this.other.longitude,
					radius: '5000'
				}
				nearbyPois(params).then(res => {
					this.pois = res.pois
				})
			},
			getDateils() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading'
				})
				getHotelInfo(this.modifyData).then(res => {
					let arr = res.data.hotels[0].rates
					this.hotelslist = []
					this.other = res.data.other
					this.otherimg = this.other.images ? (this.other.images.length > 2 ? this.other.images.slice(0,
						2) : []) : []
					this.mimgNum = res.data.other.images ? (res.data.other.images.length > 0 ? res.data.other
						.images.length : 0) : 0
					arr.forEach(element => {
						let index = this.hotelslist.findIndex(t => {
							return t.room_name === element.room_name
						})
						if (index === -1) {
							this.hotelslist.push({
								room_name: element.room_name,
								children: [],
								payment_options: element.payment_options,
								room_data_trans: element.room_data_trans,
								images: element.images,
								book_hash: element.book_hash,
								room_amenities: element.room_data_trans.room_amenities,
							})
							index = this.hotelslist.length - 1
						}

						this.hotelslist[index].children.push({
							allotment: element.allotment,
							meal: element.meal,
							meal_data: element.meal_data,
							// daily_prices: this.getprice(element.daily_prices),
							daily_prices: element.daily_prices[0],
							bedding_type: element.room_data_trans.bedding_type,
							free_cancellation_before: element.free_cancellation_before,
							amenities_data: element.amenities_data.some(s => s == 'non-smoking'),
							amenities_datacx: element.amenities_data.some(s => s ==
								'not-guaranteed')
						})
					})
					loading.close()
					this.$nextTick(() => {
						this.stickyOffset = this.$refs.stickyElement.offsetTop;
						this.priceOffset = this.$refs.priceElement.offsetTop;
					})
					window.addEventListener('scroll', this.handleScroll);

					this.checkIfMobile()
					window.addEventListener("resize", this.checkIfMobile);
					if (this.other.check_in_time) {
						const checkTime = this.other.check_in_time.split(":")[0]
						this.checkpercentage = (Number(checkTime) / 24) * 100
					}
					if (this.other.check_out_time) {
						const outTime = this.other.check_out_time.split(":")[0]
						this.outpercentage = (Number(outTime) / 24) * 100
					}
					this.getinitMap()
					this.getnearbyPois()
				}).catch(err => {
					loading.close()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.map-box {
		height: 500px;
		overflow: hidden;
		border-radius: 8px;

		:deep(.mapboxgl-popup-content) {
			padding: 0;
			width: 260px;
		}

		:deep(.map-pp-img) {
			width: 100%;
			height: 120px;
			border-radius: 6px 6px 0 0;
		}

		:deep(.map-pp-title) {
			margin: 2px 12px 0;
			font-size: 0.16rem;
			font-weight: 500;
			color: rgba(26, 26, 26, 0.87);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		:deep(.map-pp-text) {
			margin: 8px 12px 0;
			color: rgba(26, 26, 26, 0.60);
			font-size: 0.12rem;
			font-weight: 400;
		}

		:deep(.map-pp-line) {
			margin: 8px 12px 0;
			background: rgba(26, 26, 26, 0.16);
			width: 40px;
			height: 1px;
		}

		:deep(.map-pp-price) {
			margin: 12px 12px 10px;
			text-align: right;
			color: rgba(26, 26, 26, 0.60);
			font-size: 12px;
			font-weight: 400;
		}

		:deep(.map-pp-price-no) {
			color: rgba(26, 26, 26, 0.87);
			font-size: 16px;
			font-weight: 400;
		}
	}

	.progressTime-top::v-deep .el-progress-bar {
		transform: rotate(180deg);
		padding-right: 0;
	}

	.paymentItem-m {
		display: none;

	}

	.roomImg::v-deep .el-progress-bar {
		margin-right: 0;
		padding-right: 0
	}

	.progressTime::v-deep .el-progress__text {
		text-align: center;
		width: 100%;
		margin-left: 0;
		padding-top: 0.08rem;
		color: rgba(26, 26, 26, 0.6) !important;
		font-size: 0.12rem !important;
	}

	.seemBottom {
		width: 100%;
		position: absolute;
		background-color: rgba(0, 188, 147, 0.04);
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding: 0.24rem 0.16rem 0.24rem 0.4rem;
		z-index: 1;

		.left {

			p {
				color: rgba(0, 188, 147, 1);
			}

			button {
				cursor: pointer;
				margin-top: 0.08rem;
				width: 1.19rem;
				height: 0.4rem;
				background-color: rgba(255, 50, 99, 1);
				color: #fff;
				border-radius: 8px;
				border: 1px solid rgba(255, 50, 99, 1);
			}
		}

		.right {
			margin-left: 0.54rem;

			.seeprice {
				font-size: 0.2rem;
				font-weight: bold;
				margin-bottom: 0.08rem;
				color: rgba(26, 26, 26, 1);
			}

			p {
				color: rgba(26, 26, 26, 0.6);
				font-size: 0.12rem;
			}
		}
	}

	.wallets-li {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-bottom: 0.08rem;

		.color {
			color: rgba(0, 188, 147, 1)
		}

		.l {
			width: 0.16rem;
		}

		.r {
			width: 0.16rem;
		}

		p {
			margin: 0 0.08rem 0 0.04rem;
		}

	}

	.roomImg::v-deep .el-dialog__body,
	.roomImg::v-deep .el-dialog__header {
		padding: 0;
	}

	.roomImg::v-deep .el-carousel__arrow {
		display: none;
	}

	.roomImg::v-deep .el-dialog {
		border-radius: 10px;
		overflow: hidden;
	}

	.seeImg {
		display: flex;

		.line {
			height: 1px;
			background-color: rgb(218, 218, 218);
			margin: 0.4rem 0;
		}

		.rooms-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;

			.rooms-li {
				width: 50%;
				margin-bottom: 0.08rem;

				p {
					border-radius: 4px;
					padding: 4px;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					float: right;
					color: rgba(26, 26, 26, 0.6);
					background-color: rgba(245, 245, 245, 1);

					img {
						width: 0.16rem;
						margin-left: 4px;
					}
				}
			}
		}

		.rooms {
			width: 3.72rem;
			padding: 0.4rem 0.24rem;
			text-align: right;
			position: relative;

			.title {
				font-size: 0.2rem;
				font-weight: 600;
				color: rgba(26, 26, 26, 1);
			}

			.decs {
				margin-top: 0.08rem;
				color: rgba(26, 26, 26, 0.6);
				margin-bottom: 0.24rem;
			}
		}

		.carouse {
			flex: 1;
			position: relative;

			.arrow {
				position: absolute;
				left: 0.24rem;
				bottom: 0.24rem;
				z-index: 9;
				display: flex;
				align-items: center;

				p {
					color: #fff;
					font-size: 0.16rem;
					margin: 0 0.16rem;
				}

				img {
					width: 0.4rem;
					cursor: pointer;
				}
			}

			.carouse-colse {
				width: 0.4rem;
				height: 0.4rem;
				background-color: #fff;
				position: absolute;
				z-index: 9;
				cursor: pointer;
				border-radius: 12px;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
				left: 0.24rem;
				top: 0.24rem;

				img {
					width: 0.13rem;
				}
			}
		}
	}

	.paymentItem {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;

		.payment-li:nth-child(3) {
			margin-left: 1.0296rem;
		}

		.payment-li:nth-child(2) {
			margin-left: 1.57rem;
		}

		.payment-li {
			text-align: right;

			.text {
				padding: 0;
				margin: 0;
			}

			img {
				width: 1.90rem;
			}

			h5 {
				font-size: 0.2rem;
				font-weight: 600;
				margin-bottom: 0.16rem;
			}

			h6 {
				color: rgba(26, 26, 26, 0.6);
				font-size: 0.12rem;
				margin-bottom: 0.08rem;
			}

			.t {
				color: rgba(26, 26, 26, 0.6);
				font-size: 0.12rem;
				margin-bottom: 0.08rem;
			}
		}
	}

	.paymentInfo {
		margin-bottom: 0.64rem;
		padding: 0.24rem 0.16rem;
		background-color: #fff;
		border-radius: 0.08rem;
		overflow: hidden;
		border: 1px solid rgb(218, 218, 218);

		h4 {
			font-size: 0.32rem;
			margin: 0;
			text-align: right;
			font-weight: 500;
		}
	}

	.facilities {
		margin-top: 0.24rem;
		border-top: 1px solid rgb(218, 218, 218);
		padding: 0.24rem 0.16rem;
		text-align: right;

		.facilities-info {
			display: flex;
			justify-content: flex-end;

			.facilities-li {
				margin-left: 0.97rem;

				.n {
					color: rgba(26, 26, 26, 0.6);
					font-size: 0.12rem;
					margin-bottom: 0.08rem;
				}
			}
		}

		h5 {
			font-size: 0.20rem;
			margin: 0;
			padding: 0;
			margin-bottom: 0.16rem;
			font-weight: 600;

			img {
				width: 0.16rem;
				margin-left: 0.08rem;
			}
		}
	}

	.progressTime {
		margin: 0.16rem 0;
		padding: 0.24rem 0 0 0;
		background-color: #fff;
		border-radius: 0.08rem;
		overflow: hidden;
		border: 1px solid rgb(218, 218, 218);

		.progressTime-li {
			display: flex;
			justify-content: flex-end;
			padding: 0 0.16rem;

			.text {
				text-align: right;
				width: 1.99rem;

				.n {
					font-size: 0.12rem;
					color: rgba(26, 26, 26, 0.6);
				}

				.t {
					margin-top: 0.04rem;
					font-size: 0.14rem;
				}
			}

			.progress {
				width: 4.32rem;
			}
		}

		.time {
			text-align: right;
			font-size: 0.2rem;
			margin: 0.24rem 0;
			padding: 0 0.16rem;
			font-weight: 600;

			img {
				width: 0.16rem;
				margin-left: 0.08rem;
			}
		}

		h4 {
			font-size: 0.32rem;
			margin: 0;
			text-align: right;
			padding: 0 0.16rem;
			font-weight: 500;
		}
	}

	.maps-icon {
		display: flex;

		.maps-icon-li {
			flex: 1;
			margin-top: 0.24rem;
			text-align: right;

			h4 {
				font-size: 0.2rem;
				margin: 0;
				padding: 0;
				font-weight: 600;
			}

			p {
				margin-top: 0.16rem;

				img {
					width: 0.16rem;
					margin-left: 0.08rem;
				}
			}
		}
	}

	.maps {
		padding: 0.24rem 0.16rem;
		background-color: #fff;
		border-radius: 0.08rem;
		overflow: hidden;
		border: 1px solid rgb(218, 218, 218);

		.mapid {
			width: 100%;
			border-radius: 8px;
			height: 100%;
		}

		.name {
			text-align: right;

			h4 {
				font-size: 0.32rem;
				margin: 0;
				padding: 0;
				font-weight: 500;
			}

			p {
				margin: 0.16rem 0;
			}
		}
	}

	.device {
		padding: 0.24rem 0.16rem;
		background-color: #fff;
		border-radius: 0.08rem;
		overflow: hidden;
		margin: 0.16rem 0;
		border: 1px solid rgb(218, 218, 218);

		.device-list {
			columns: 220px 4;

			.device-li {
				text-align: right;
				-webkit-column-break-inside: avoid;
				page-break-inside: avoid;
				break-inside: avoid;
				margin-bottom: 0.24rem;

				p {
					margin-top: 0.16rem;
					font-size: 0.14rem;

					span {
						width: 0.04rem;
						height: 0.04rem;
						border-radius: 50%;
						margin-left: 0.06rem;
						display: inline-block;
						background-color: rgba(255, 50, 99, 1);
					}
				}

				.name {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					font-size: 0.2rem;
					font-weight: bold;
					color: rgba(26, 26, 26, 1);

					img {
						width: 0.16rem;
						margin-left: 0.08rem;
					}
				}

				.item {}
			}
		}

		h4 {
			text-align: right;
			font-size: 0.32rem;
			margin: 0 0 0.24rem 0;
			padding: 0;
			font-weight: 500;
		}
	}

	.rate::v-deep .el-rate__item:nth-last-child(1) .el-rate__icon {
		font-size: 0.16rem;
		margin-top: 0.01rem;
	}

	.m-ban::v-deep .swiper-pagination-bullet {
		background: rgba(218, 218, 218, 1);
	}

	.m-ban::v-deep .swiper-pagination-bullet-active {
		background: #fff;
	}

	.laber-slide {
		display: flex;
		max-width: 100%;
		overflow-x: auto;
		white-space: nowrap;
		padding-bottom: 0.16rem;
		direction: rtl;
	}



	@media (max-width: 820px) {
		.progressTime-li::v-deep .el-progress-bar {
			margin-left: 0;
			padding-right: 0;
		}

		.page {
			::v-deep .el-carousel__container {
				height: 2.40rem !important;
			}

			::v-deep .el-dialog {
				margin-top: 0 !important;
				width: 100% !important;
				height: 100%;
				margin: 0;
				border-radius: 0;

				.seeImg .carouse {
					width: 100%;
				}

				.seeImg {
					flex-direction: column-reverse;
					align-items: flex-end;
					overflow-y: auto;
				}

				.seemBottom {
					margin-top: 0.16rem;
					position: relative;
				}

				.seeImg .rooms {
					width: 100%;
					padding: 0.16rem 0;

					.title,
					.decs,
					.rooms-list,
					.wallets {
						padding: 0 0.2rem;
					}

					.seemBottom {
						padding: 0.24rem 0.2rem 0.24rem 0.4rem;
					}

					.line {
						margin: 0.16rem;
					}
				}

				.arrow img {
					width: 0.32rem;
				}

				.carouse-colse {
					width: 0.32rem;
					height: 0.32rem;
				}

				.el-image {
					height: 2.40rem !important;
				}
			}

			.paymentInfo {
				margin-bottom: 0.16rem;
			}

			// .device-li,
			// .payment-li {
			// 	flex: inherit !important;
			// 	width: 50%;
			// }

			.payment-li:nth-child(4) {
				width: 100% !important;
			}

			.facilities {
				display: none;
			}

			.progressTime {
				padding: 0.24rem 0.16rem;
			}

			.maps-icon {
				display: inherit;
			}

			.progressTime-li .text {
				width: 100%;
			}

			.maps-icon-li p {
				margin-top: 0.08rem;
			}

			.progressTime-li .progress {
				width: 100%;
			}


			.progressTime-li {
				margin-top: 0.16rem !important;
				display: flex;
				flex-direction: column-reverse;
				/* 反转元素顺序 */
				align-items: flex-end;
			}

			.progressTime-li .text .t {
				margin-bottom: 0.08rem;
			}

			.device-list {
				columns: 150px 2;
			}

			.device-li .name {
				font-size: 0.14rem !important;
				margin: 0 0 0.08rem 0 !important;
			}

			.device-li {
				margin-bottom: 0.24rem;
			}

			.device-li p {
				margin: 0 0 0.08rem 0 !important;
			}

			.paymentItem-m {
				display: inline-block;
			}

			.paymentItem-pc {
				display: none;
			}

			.paymentItem {
				flex-wrap: wrap;
			}

			.payment-li:nth-child(3) {
				margin-left: 0
			}

			.payment-li:nth-child(2) {
				margin-left: 0
			}

			.content .nav .right .xx .rtl {
				direction: rtl;
			}

			.Palace-right {
				width: 100%;
			}

			.Palace .Palace-right .Hotel-li .room .left {
				width: 100%;
			}

			.Palace .Palace-right .Hotel-li .room .left .laber {
				direction: rtl;
			}

			.Palace .Palace-left .top .name {
				border-bottom: none;
			}

			.m-search {
				padding: 0.3rem 0;

				.pac-search {
					text-align: center;
				}

				.search-btn {
					right: 0.17rem;
				}
			}

			.mfilter-bg {
				width: 100%;
				background-color: #f5f5f5;
				padding: 0.12rem 0;
				position: fixed;
				left: 0;
				bottom: 0;
				z-index: 9;
				border-top: 1px solid rgb(218, 218, 218);
				border-bottom: 1px solid rgb(218, 218, 218);

				.filter-f {
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.select {
					background-color: rgba(255, 50, 99, 0.08) !important;
					color: rgba(255, 50, 99, 1);
					border-color: rgba(255, 50, 99, 1) !important;
					padding: 0 0.5rem !important;
				}

				.pub-div :nth-last-child(1) {
					margin-right: 0;
				}

				i {
					margin-right: 0.08rem;
				}

				.pub-div {
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					height: 0.4rem;
					margin-right: 0.08rem;
					background-color: #fff;
					padding: 0 0.12rem;
					border-radius: 6px;
					border: 1px solid rgba(218, 218, 218, 1)
				}

				.pub-div img {
					width: 0.16rem;
					height: auto;
				}
			}

			.ismobile {
				position: relative;
				margin-bottom: 0.4rem;

				.Palace .Palace-left .top .speed {
					border-top: 1px solid rgba(218, 218, 218, 1)
				}

				.Palace-left {
					display: inline-block !important;
				}
			}

			.price-info {
				position: relative;

				.bgs {
					width: 0.3rem;
					height: 0.2rem;
					position: absolute;
					right: 0.6rem;
					top: 0.07rem;
					z-index: 9;
					background: linear-gradient(90deg, #FEFEFE 83.25%, rgba(254, 254, 254, 0) 100%);
				}
			}

			.pricesticky {
				width: 100% !important;
				margin-left: 0 !important;
				padding: 8px 0.2rem;

				.price-info .bgs {
					width: 0.5rem;
					height: 0.2rem;
					position: absolute;
					right: auto;
					top: 0;
					left: 47%;
					z-index: 9;
					background: linear-gradient(90deg, #FEFEFE 8.25%, rgba(254, 254, 254, 0) 100%);
				}

				.price-info .r {
					width: 50% !important;
					flex: inherit !important;
					overflow-x: auto !important;
				}
			}

			.footer {
				margin-bottom: 0.6rem;
			}

			.mobile-customer {
				display: inline-block;

				.customer {
					margin-top: 0;
					margin-bottom: 0.16rem;
				}
			}




			.Palace .Palace-right .Hotel-li {
				background: none;
				border: none;
				border-radius: 0
			}

			.Palace .Palace-right .Hotel-li .item-li .wallet {
				border-bottom: 1px solid rgb(218, 218, 218) !important;
				border-left: none !important;
				border-right: none !important
			}

			.Palace .Palace-right .Hotel-li .item-li .item-li-info {
				flex-direction: column-reverse;
			}

			.Palace .Palace-right .Hotel-li .item-li .info {
				width: 100%;
			}

			.Palace .Palace-right .Hotel-li .item-li {
				border-top: none;
			}

			.Palace .Palace-right .Hotel-li .room .left .laber div {
				direction: ltr;
			}

			.Palace .Palace-right .Hotel-li .item-li .item-li-info {
				background-color: #fff;
				border-radius: 8px;
				overflow: hidden;
				margin-top: 0.08rem;
				border: 1px solid rgb(218, 218, 218) !important;
			}

			.Palace .Palace-right .Hotel-li .room {
				flex-direction: column-reverse;
				background-color: #fff;
				border-radius: 8px;
				overflow: hidden;
				border: 1px solid rgb(218, 218, 218);
			}

			.Palace .Palace-right .Hotel-li .room .left .laber {
				margin-top: 0.16rem;
			}

			.Palace .Palace-right .Hotel-li .room .left h2 {
				margin-top: 0;
			}

			.Palace .Palace-right .Hotel-li .room .img {
				width: 100%;
			}

			.h-title {
				margin-top: 0;
				font-size: 0.28rem;
				padding: 0 0.2rem;
				line-height: 31.64px;
			}

			.Palace .Palace-left .top .speed .tit,
			.Palace .Palace-left .customer,
			.Palace .Palace-left {
				display: none;
			}

			.Palace .Palace-right {
				margin-left: 0 !important;
				padding-left: 0;
				width: calc(100% - 0.2rem);
				flex: inherit;
				padding-left: 0.2rem;
			}

			.ismobile {
				display: inline-block;
				width: 100%;
				position: relative;

				.Palace {
					display: inline-block !important;
					width: calc(100% - 0.2rem);
					padding-left: 0.2rem;
				}

				.Palace-left {
					width: 100%;
				}
			}

			.price .price-info .r {
				width: 0.8rem;
				display: flex;
				overflow: hidden;
				white-space: nowrap;
				direction: rtl;

			}

			.price p {
				margin-right: 0;
				margin-left: 0.12rem;
				text-align: center;
			}

			.r-w {
				direction: ltr;
			}

			.price button {
				width: 1.16rem;
			}

			.price {
				margin-top: 0.16rem;
				width: calc(100% - 0.4rem);
				overflow: hidden;
				margin-left: 0.2rem;
				margin-bottom: 0.16rem;
			}

			.price .num {
				margin-left: 0.12rem;
				font-size: 0.16rem;
				padding-right: 0.1rem;
				background: linear-gradient(90deg, #FEFEFE 3.25%, rgba(254, 254, 254, 0) 100%);
			}



			.swiper-pagination {
				position: absolute;
				top: 10px;
				/* 根据需要调整顶部位置 */
				left: 50%;
				transform: translateX(-50%);
				height: 8px;
			}

			.m-ban {
				display: block;
			}

			.content .nav .right .xx {
				flex-direction: column-reverse;
				align-items: flex-end;
			}

			.content .ban {
				display: none;
			}

			.content .Hotel {
				border: none;
				border-top: 1px solid rgb(218, 218, 218);
				border-radius: 0;
			}

			.content .nav .right .xx .m-line {
				display: inline-block !important;
			}

			.m-line-no {
				display: none !important;
			}

			.content .nav {
				padding: 0.24rem 0.2rem;
			}

			.navs {
				padding: 0 0.2rem;
				line-height: 0.18rem;
				display: flex;
				flex-direction: column-reverse;

			}

			.content .nav .right h1 {
				font-size: 0.4rem;
				line-height: 0.4rem;
			}



			.Hotel .left {
				display: none;
			}

			.search-box {
				display: none;
			}

			.warps {
				width: 100%;
			}
		}
	}

	.ismobile {
		display: none;
	}

	.m-ban {
		position: relative;
		display: none;

		p {
			position: absolute;
			right: 23px;
			bottom: 16px;
			padding: 12px 16px;
			background-color: #fff;
			border-radius: 6px;
			font-size: 14px;
			font-weight: 400;
			z-index: 1;
		}
	}


	.navs {
		margin: 0.26rem 0;
		font-size: 0.12rem;
		text-align: right;
		color: rgba(26, 26, 26, 0.6);

		.span-li {
			margin: 0 !important;
		}

		span {
			margin: 0 0.05rem;
			display: inline-block;
		}

		i {
			font-weight: bold;
		}
	}

	.sticky {
		position: fixed;
		top: 1.4rem;
	}

	a {
		text-decoration: none;
	}

	.pricesticky {
		position: fixed;
		top: 0.64rem;
		width: 100%;
		z-index: 999;
		left: 0;
		margin-top: 0 !important;
		border: none !important;
		border-radius: 0 !important;
		border-bottom: 1px solid rgba(218, 218, 218, 1) !important;
		justify-content: center;

		.price-info {
			width: 9.10rem;
			margin: 0 auto;
			flex: inherit !important;


			span {
				margin-left: 24px;
				margin-right: 0 !important;
			}

			.fh {
				display: block !important;
			}

			button,
			.num {
				display: none;
			}
		}
	}

	.searchsticky {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: #fff !important;
		z-index: 99;
	}

	.mobile-customer {
		display: none;
		padding: 0 0.2rem;
		width: 100%;
	}

	.customer {
		margin-top: .16rem;
		padding: .24rem;
		background-color: #fff;
		border-radius: 8px;
		border: 1px solid rgba(218, 218, 218, 1);

		p {
			font-size: 0.20rem;
			font-weight: 600;
			text-align: center;

		}

		.chat-btn {
			margin-top: .24rem;
			border: 1px solid rgba(52, 81, 255, 1);
			height: 0.48rem;
			width: 100%;
			font-size: 0.16rem;
			display: flex;
			cursor: pointer;
			align-items: center;
			justify-content: center;
			font-weight: 600;
			border-radius: 6px;
			background-color: #fff;
			color: rgba(52, 81, 255, 1);

			img {
				width: .24rem;
				height: auto;
				margin-left: 10px;
			}
		}
	}

	.Palace {
		display: flex;

		.Palace-right {
			// flex: 1;
			width: calc(100% - 3.32rem);
			padding-left: 0.16rem;

			.Hotel-li {
				background-color: #fff;
				border-radius: 8px;
				overflow: hidden;
				margin-bottom: 16px;
				border: 1px solid rgba(218, 218, 218, 1);

				.item-li {
					.more {
						//border-top: 1px solid rgba(218, 218, 218, 1);
						text-align: center;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0.16rem 0;
						background-color: #fff;
						font-size: 0.14rem;
						font-weight: 400;
						color: rgba(255, 50, 99, 1);
						cursor: pointer;

						i {
							color: rgba(255, 50, 99, 1);
							margin-left: 0.1rem;
							font-weight: bold;
						}
					}

					.item-li-info:nth-last-child(1) {
						border-bottom: none;
					}

					.item-li-info {
						border-bottom: 1px solid rgba(218, 218, 218, 1);
						display: flex;
					}

					border-top: 1px solid rgba(218, 218, 218, 1);

					.no-boder {
						border: none !important;
					}

					.wallet {
						border-left: 1px solid rgba(218, 218, 218, 1);
						border-right: 1px solid rgba(218, 218, 218, 1);

						.p {
							margin-bottom: 8px;
							display: flex;
							align-items: center;
							justify-content: flex-end;

							.r {
								width: 0.16rem;
								height: auto;
								margin-left: 5px;
							}

							.l {
								width: 0.12rem;
								height: auto;
								margin-right: 5px;
							}
						}

					}

					.item-l {
						display: flex;

						.item-price {
							text-align: right;

							div {
								font-size: 0.20rem;
								font-weight: 600;
								letter-spacing: -0.02em;
								margin-bottom: 8px;
							}

							p {
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}

						}

						.btn {
							.button {
								cursor: pointer;
								margin-top: 8px;
								width: 1.19rem;
								height: 0.40rem;
								background-color: rgba(255, 50, 99, 1);
								border-radius: 8px;
								font-size: 0.14rem;
								font-weight: 400;
								text-align: center;
								line-height: 0.40rem;
								color: #fff;
							}

							p {
								font-size: 0.14rem;
								font-weight: 400;
								color: rgba(0, 188, 147, 1);
								margin-left: 0.16rem;
							}
						}
					}

					.info {
						width: 33.333333333%;
						padding: 16px 15px;
					}
				}

				.room {
					display: flex;

					.left {
						text-align: right;
						padding: 0.16rem 0.16rem 0 0;
						width: calc(100% - 1.99rem);

						.laber {
							margin-top: 0.35rem;
							display: flex;
							align-items: center;
							justify-content: flex-end;
							direction: ltr;

							div {
								background-color: rgba(245, 245, 245, 1);
								border-radius: 4px;
								display: flex;
								align-items: center;
								justify-content: flex-end;
								padding: 4px;
								margin-left: 12px;

								img {
									width: 0.16rem;
									margin-left: 5px;
									height: auto;
								}
							}
						}

						h2 {
							font-size: 0.20rem;
							font-weight: 600;
							text-align: right;
							margin: 8px 0;
						}
					}

					.img {
						cursor: pointer;
						width: 1.99rem;
						height: 1.43rem;
						position: relative;

						p {
							font-size: 0.12rem;
							font-weight: 400;
							position: absolute;
							background-color: rgba(254, 254, 254, 1);
							padding: 4px 6px;
							border-radius: 4px;
							right: 12px;
							bottom: 8px;

							i {
								margin-left: 5px;
							}
						}

						img {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}



		.Palace-left {
			width: 3.32rem;



			.btn {
				border: 1px solid rgba(0, 188, 147, 1);
				height: 0.48rem;
				width: 100%;
				font-size: 0.16rem;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 600;
				border-radius: 6px;
				background-color: #fff;
				color: rgba(0, 188, 147, 1);

				img {
					width: .24rem;
					height: auto;
					margin-left: 10px;
				}
			}

			.top {
				width: 3.32rem;
				position: relative;
				background-color: #fff;
				border-radius: 8px;
				border: 1px solid rgba(218, 218, 218, 1);

				.speed {
					padding: 0.24rem;

					.speed-li {
						margin-bottom: 16px;

						.progress {
							margin-top: 8px;
							transform: rotate(-180deg)
						}

						.num {
							display: flex;
							align-items: center;
							font-size: 0.14rem;
							font-weight: 400;
						}
					}

					.tit {
						font-size: 0.20rem;
						font-weight: 600;
						margin-bottom: 0.24rem;
						text-align: right;
					}
				}

				.index {
					position: absolute;
					top: 0;
					left: 24px;
					z-index: 1;
					min-width: 0.66rem;
					height: 0.88rem;
					background: url("~assets/images/icon/Vector.png");
					background-size: 100% 100%;
					font-size: 0.56rem;
					font-weight: 600;
					color: #fff;
					padding-top: 8px;
					letter-spacing: -0.04em;
					text-align: center;

					span {
						padding: 0 0.1rem;
						display: inline-block;
					}
				}

				h3 {
					font-size: 0.32rem;
					font-weight: 500;
					letter-spacing: -0.04em;
				}

				.name {
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: flex-end;
					padding: 0.24rem;
					border-bottom: 1px solid rgba(218, 218, 218, 1);



					p {
						font-size: .14rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
						direction: rtl;
					}
				}

				.yuan {
					display: flex;
					align-items: center;
					margin-top: 16px;
					margin-bottom: 8px;

					.current {
						background-color: rgba(0, 188, 147, 1);

					}

					span {
						width: 16px;
						height: 16px;
						box-sizing: border-box;
						border: 1px solid rgba(0, 188, 147, 1);
						border-radius: 50%;
						display: inline-block;
						margin-right: 4px;
					}
				}
			}
		}
	}

	.h-title {
		margin-top: .4rem;
		margin-bottom: .24rem;
		text-align: right;
		font-size: 0.32rem;
		font-weight: 500;
		letter-spacing: -0.04em;
		text-align: right;
		direction: rtl;
	}

	.price {
		margin-top: 16px;
		background-color: #fff;
		border-radius: 8px;
		height: 0.57rem;
		border: 1px solid rgba(218, 218, 218, 1);
		padding: 8px;
		display: flex;
		align-items: center;

		.price-info {
			display: flex;
			align-items: center;

			.r {
				display: flex;
				align-items: center;
			}

			.r-w {
				display: flex;
				align-items: center;
			}

			.fh {
				font-size: 0.14rem;
				font-weight: 500;
				cursor: pointer;
				color: rgba(26, 26, 26, 0.6);
				display: none;

				i {
					transform: rotate(-180deg);
					display: inline-block;
					font-weight: bold;
					font-size: 18px;
					margin-right: 0.05rem;
				}
			}
		}

		p {
			font-size: 0.14rem;
			font-weight: 500;
			margin-right: 24px;
		}

		.num {
			margin-left: .16rem;
			font-size: 0.20rem;
			font-weight: 600;
		}

		button {
			width: 1.32rem;
			height: 0.4rem;
			background-color: rgba(255, 50, 99, 1);
			border-radius: 6px;
			border: none;
			font-size: 0.14rem;
			font-weight: 600;
			color: #fff;
		}
	}

	.content {
		.Hotel {
			background-color: #fff;
			border-radius: 8px;
			overflow: hidden;
			border: 1px solid rgba(218, 218, 218, 1);
		}

		.ban {
			display: flex;

			.ban-h {
				height: 4rem;
				background-color: red;
			}

			.ban-li {
				position: relative;
				width: 50%;
				height: 4rem;
				cursor: pointer;

				p {
					position: absolute;
					right: 23px;
					bottom: 16px;
					padding: 12px 16px;
					background-color: #fff;
					border-radius: 6px;
					font-size: 14px;
					font-weight: 400;
					z-index: 1;
				}
			}

			.ban-li:nth-child(1) {
				padding-right: 8px;
			}

			.ban-li:nth-child(2) {
				padding-left: 8px;
			}

			img {
				width: 100%;
				height: 4rem;
			}
		}

		.nav {
			display: flex;
			padding: 0.24rem;


			.right {
				.xx {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					margin-bottom: 16px;

					.address {
						display: flex;
						align-items: center;
					}

					.xx-info {
						display: flex;
						align-items: center;
					}

					.rate {
						position: relative;

						.disabled {
							width: 1.15rem;
							height: 20px;
							position: absolute;
							top: 0;
							left: 0;
							z-index: 1;
						}
					}

					.p {
						font-size: 0.14rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
						direction: rtl;
					}

					.m-line {
						display: none !important;
					}

					.line {
						width: 12px;
						height: 1px;
						background-color: rgba(218, 218, 218, 1);
						margin: 0 8px;
						display: inline-block;
					}
				}

				h1 {
					font-size: 0.56rem;
					font-weight: 600;
					text-align: right;
				}
			}

			.time {
				margin-top: 0.12rem;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
				direction: rtl;
				text-align: left;
			}

			.yuan {
				display: flex;
				align-items: center;

				img {
					width: 0.24rem;
					height: auto;
					margin-left: 4px;
				}

				.current {
					background-color: rgba(0, 188, 147, 1);

				}

				span {
					width: 16px;
					height: 16px;
					box-sizing: border-box;
					border: 1px solid rgba(0, 188, 147, 1);
					border-radius: 50%;
					display: inline-block;
					margin-right: 4px;
				}
			}
		}
	}



	.pac-search {
		position: relative;
	}

	.search-btn {
		cursor: pointer;
		width: 60px;
		height: 40px;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
	}

	.filter::v-deep .el-input__inner {
		background-color: #fff !important;
		border-radius: 6px;
		color: rgba(26, 26, 26, 0.6);
	}

	.pac-search ::v-deep .el-input__inner {
		text-align: right;
		padding-right: 35px;
		width: 3.46rem;
	}

	.pac-search ::v-deep .el-input__inner::placeholder,
	.filter::v-deep .el-input__inner::placeholder {
		color: rgba(26, 26, 26, 0.6);
	}

	.filter::v-deep .el-input__icon {
		color: rgba(118, 118, 118, 1);
		font-weight: bold;
	}

	.pac-search ::v-deep .el-input__suffix {
		font-size: 18px;
		color: rgba(118, 118, 118, 1);
	}

	.search-border {
		border-bottom: 1px solid rgba(218, 218, 218, 1);
	}


	.search-box {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0.12rem 0;

		.search-li {
			margin: 0 4px;
		}

		.a {
			height: 0.40rem;
			line-height: 0.4rem;
			background-color: rgba(255, 50, 99, 0.08);
			border-radius: 6px;
			padding: 0 0.24rem;
			font-size: 0.16rem;
			font-weight: 600;
			color: rgba(255, 50, 99, 1);
			border: 1px solid rgba(255, 50, 99, 1);

		}
	}
</style>