<template>
	<div class="page">
		<new-header ishome />
		<div class="banner">
			<div class="title">
				<h1>,הנופש הבא שלך</h1>
				<h1>
					.מתחיל בחיפוש אחד
				</h1>
			</div>
			<div class="search">
				<div class="search-input">
					<el-autocomplete @keyup.enter.native="search" class="inline-input" v-model="cityval"
						:fetch-suggestions="querySearch" placeholder="חפשו חבילות, כרטיסים או יעדים"
						@select="handleSelect" @change="changeInput">
						<template slot-scope="{ item }">
							<div>{{ item.city }}</div>
						</template>
					</el-autocomplete>
				</div>
				<img @click="search" src="~assets/images/icon/icon21.png" />
			</div>
			<div class="searches">
				:חיפושים פופולריים
			</div>
			<div class="searches-list">
				<a href="https://kenta-dev-hb.vercel.app/destination/%D7%93%D7%95%D7%91%D7%90%D7%99,%20%D7%90%D7%99%D7%97%D7%95%D7%93%20%D7%94%D7%90%D7%9E%D7%99%D7%A8%D7%95%D7%99%D7%95%D7%AA%20%D7%94%D7%A2%D7%A8%D7%91%D7%99%D7%95%D7%AA"
					class="li">
					סופ״ש בדואבי
				</a>
				<a href="https://kenta-dev-hb.vercel.app/destination/%D7%9E%D7%93%D7%A8%D7%99%D7%93,%20%D7%A1%D7%A4%D7%A8%D7%93"
					class="li">
					סופ״ש במדריד
				</a>
				<a href="https://kenta-dev-hb.vercel.app/destination/%D7%A4%D7%95%D7%A7%D7%98,%20%D7%AA%D7%90%D7%99%D7%9C%D7%A0%D7%93"
					class="li">
					מלונות בפוקט
				</a>
				<a href="https://kenta-dev-hb.vercel.app/destination/%D7%A7%D7%95%20%D7%A1%D7%9E%D7%95%D7%99,%D7%AA%D7%90%D7%99%D7%9C%D7%A0%D7%93"
					class="li">
					מלונות בקוסמוי
				</a>
			</div>
		</div>
		<div class="warps">
			<div class="Tickets">
				<div class="title">כרטיסים לאירועי ספורט</div>
			</div>
			<!-- PC -->
			<div class="carousel-box nomobile" v-if="showSwiper">
				<div class="carousel-wrapper">
					<div class="carousel">
						<swiper ref="mySwiper" :options="visibleOption">
							<swiper-slide v-for="(item, index) in images" :key="index">
								<div class="carousel-li hover-li">
									<img :src="item.src" />
									<div class="info">
										<h4>{{ item.title }}</h4>
										<button @click="toeventlPage(item)">לצפייה בכרטיסים</button>
										<!-- <router-link
											:to="{ name: 'eventlPage', query: { tournament_name: item.tournament_name } }"
											tag="button">לצפייה בכרטיסים</router-link> -->
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</div>
			<!-- 移动端 -->
			<div class="carousel-box ismobile" v-if="showSwiper">
				<div class="carousel-wrapper">
					<div class="carousel">
						<swiper ref="mySwiper" :options="swiperOptionM">
							<swiper-slide v-for="(item, index) in images" :key="index">
								<div class="carousel-li">
									<img :src="item.src" />
									<div class="info">
										<h4>{{ item.title }}</h4>
										<router-link
											:to="{ name: 'eventlPage', query: { tournament_name: item.tournament_name } }"
											tag="button">לצפייה בכרטיסים</router-link>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</div>
		</div>
		<div class="experience">
			<!-- 移动端 -->
			<div class="experience-info">
				<div class="right ismobile">
					<div class="name">
						<h2>,חבילות נופש - לנפש</h2>
						<h2>
							.חוויה בכל הזמנה
						</h2>
					</div>
					<div class="text">
						<p>,אנו מבטיחים כרטיסים ומלונות רשמיים</p>
						<p>.שקיפות מלאה ושירות יוצא דופן</p>
					</div>
				</div>
				<div class="left flex ismobile" style="margin-bottom: 0;" v-if="showSwiper">
					<div class="experience-list">
						<swiper ref="mySwiper" :options="swiperOptionM">
							<swiper-slide>
								<div :to="{ name: 'eventlPage', query: { id: 1 } }" class="experience-li">
									<img src="~assets/images/Rectangle 715.png" />
									<h3>סופ״ש ספונטני</h3>
									<p>חבילות לרגע האחרון</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li">
									<img src="~assets/images/Rectangle 716.png" />
									<h3>אירועי ספורט</h3>
									<p>חבילות ספורט בעולם</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li">
									<img src="~assets/images/Rectangle 717.png" />
									<h3>טיולי שופינג</h3>
									<p>חבילות ליעדי קניות</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li">
									<img src="~assets/images/Rectangle 719.png" />
									<h3>חופשות קזינו</h3>
									<p>חבילות קזינו</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li">
									<img src="~assets/images/Rectangle 718.png" />
									<h3>נופש על המים</h3>
									<p>חבילות בטן-גב</p>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</div>
			<!-- PC端 -->
			<div class="experience-info">
				<div class="left flex nomobile">
					<div class="experience-list">
						<swiper ref="mySwiper" :options="swiperOption" v-if="showSwiper">
							<swiper-slide>
								<div :to="{ name: 'eventlPage', query: { id: 1 } }" class="experience-li hover-li">
									<div class="img">
										<img src="~assets/images/Rectangle 715.png" />
									</div>
									<h3>סופ״ש ספונטני</h3>
									<p>חבילות לרגע האחרון</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li hover-li">
									<div class="img">
										<img src="~assets/images/Rectangle 716.png" />
									</div>
									<h3>אירועי ספורט</h3>
									<p>חבילות ספורט בעולם</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li hover-li">
									<div class="img">
										<img src="~assets/images/Rectangle 717.png" />
									</div>
									<h3>טיולי שופינג</h3>
									<p>חבילות ליעדי קניות</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li hover-li">
									<div class="img">
										<img src="~assets/images/Rectangle 719.png" />
									</div>
									<h3>חופשות קזינו</h3>
									<p>חבילות קזינו</p>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="experience-li hover-li">
									<div class="img">
										<img src="~assets/images/Rectangle 718.png" />
									</div>
									<h3>נופש על המים</h3>
									<p>חבילות בטן-גב</p>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="right nomobile">
					<div class="name">
						<h2>,חבילות נופש - לנפש</h2>
						<h2>
							.חוויה בכל הזמנה
						</h2>
					</div>
					<div class="text">
						<p>,אנו מבטיחים כרטיסים ומלונות רשמיים</p>
						<p>.שקיפות מלאה ושירות יוצא דופן</p>
					</div>
				</div>
			</div>
		</div>
		<div class="warps">
			<div class="choose">
				<div class="title">?למה לבחור בנו</div>
				<div class="choose-list">
					<div class="choose-li flex">
						<img src="~assets/images/icon/Asset1.png" />
						<div>תיירות מודרנית ואמינה</div>
						<p>אל תאמינו לנו, תקראו ביקורות של אחרים </p>
						<p>וקבלו מאיתנו תמיכה ושירות לקוחות, אנחנו </p>
						<p>.איתכם בכל שלב</p>
					</div>
					<div class="choose-li flex">
						<img src="~assets/images/icon/Asset3.png" />
						<div>מבצעים והפתעות</div>
						<p>כרטיסים רישמיים בלבד, מלונות במחירים</p>
						<p>מעולים ובקרוב גם קרדיט לחיסכון נוסף</p>
						<p>.בחופשה הבאה שלך</p>
					</div>
					<div class="choose-li flex">
						<img src="~assets/images/icon/Asset2.png" />
						<div>חוויות שכולן נופש</div>
						<p>הזמינו אפילו ברגע האחרון, דלגו על תורים</p>
						<p>ותהנו מביטול חינם לחווית נופש קלילה </p>
						<p>.ונעימה יותר</p>
					</div>
					<div class="choose-li flex">
						<img src="~assets/images/icon/Asset4.png" />
						<div>עולם של אפשרויות</div>
						<p>עם מאות אירועי ספורט שונים, חצי מיליון </p>
						<p>מלונות מובחרים ועוד - אנחנו דואגים שיהיה</p>
						<p>.לכם שמח בחופשה</p>
					</div>
				</div>
			</div>
		</div>
		<div class="language">
			<div class="language-info">
				<div class="left">
					<div class="language-list">
						<div class="language-li" @click="toPath('La Liga')">
							<img src="~assets/images/icon/icon22.png" />
							<div>ליגה ספרדית</div>
						</div>
						<div class="language-li" @click="toPath('Premier League')">
							<img src="~assets/images/icon/language1.png" />
							<div>ליגה אנגלית</div>
						</div>
						<div class="language-li" @click="toPath('Champions League')">
							<img src="~assets/images/icon/language2.png" />
							<div>ליגת האלופות</div>
						</div>
						<div class="language-li" @click="toPath('Bundesliga')">
							<img src="~assets/images/icon/language3.png" />
							<div>ליגה גרמנית</div>
						</div>
						<div class="language-li" @click="toPath('Ligue 1')">
							<img src="~assets/images/icon/language4.png" />
							<div>ליגה צרפתית</div>
						</div>
						<div class="language-li" @click="toPath('Serie A')">
							<img src="~assets/images/icon/language5.png" />
							<div>ליגה איטלקית</div>
						</div>
					</div>
				</div>
				<div class="right flex">
					<div class="name">
						<h2>כרטיסים למשחקי כדורגל</h2>
					</div>
					<div class="text">
						<p>קנטה מציעה כרטיסים לכדורגל לכמעט כל</p>
						<p>המועדונים באירופה. בחרו ליגה, הזמינו כרטיסים</p>
						<p>.והרכיבו את טיול הכדורגל המושלם עבורכם</p>
					</div>
					<div class="more" @click="toPath('soccer_all')">לצפיה בכל הכרטיסים</div>
				</div>
			</div>
		</div>
		<div class="warps">
			<div class="life">
				<div class="form">
					<div class="name">
						<p>,החיים קצרים מידי</p>
						<p>.לחופשות בינוניות</p>
					</div>
					<div class="text">.הכתובת שלכם לחופשות ולאירועים הטובים בעולם</div>
					<div class="form-li">
						<div class="flex">
							<el-input v-model="input" placeholder="כתובת אימייל">
							</el-input>
						</div>
						<img src="~assets/images/icon/icon23.png" />
					</div>
					<div class="form-li">
						<div class="flex">
							<el-input v-model="input" placeholder="...אני מתעניין ב">
							</el-input>
						</div>
					</div>
					<div class="btn flex">
						<button>תשאירו אותי מעדוכן</button>
					</div>
					<div class="agree">.המידע מנוהל בהתאם למדיניות<span>הפרטיות שלנו</span></div>
				</div>
			</div>
		</div>
		<div class="warps">
			<div class="system">
				<img src="~assets/images/Logo-h.png" />
				<div class="text">
					<p>המערכת שלנו בדקה בקפידה כל מלון, כרטיס ואירוע. הטכנולוגיה</p>
					<p>שלנו מסננת את אלפי מלונות שלא עמדו בסטנדרטים שלנו - וכל</p>
					<p>.מאמצינו מתמקדים בשיפור הנופש הבא שלך</p>
				</div>
				<div class="system-more">
					עוד פרטים על קנטה
				</div>
			</div>
		</div>
		<div class="warps">
			<div class="vacation">
				<div class="title">
					חופשת החלומות הבאה שלך
				</div>
				<!-- PC -->
				<div class="vacation-hide nomobile">
					<div class="vacation-list">
						<swiper ref="mySwiper" :options="slideImgOption" v-if="showSwiper">
							<swiper-slide v-for="(item,index) in imagesList" :key="index">
								<div class="vacation-li hover-li">
									<div class="img">
										<img :src="item.src" />
									</div>
									<h3>{{item.title}}</h3>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<!-- 移动 -->
				<div class="vacation-hide ismobile">
					<div class="vacation-list">
						<swiper ref="mySwiper" :options="swiperOptionM" v-if="showSwiper">
							<swiper-slide v-for="(item,index) in imagesList" :key="index">
								<div class="vacation-li">
									<img :src="item.src" />
									<h3>{{item.title}}</h3>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</div>
		</div>
		<div class="warps">
			<div class="Recommended">
				<!-- <div class="dow" @click="over=!over">
					<i class="el-icon-arrow-down"></i>
					<h3>יעדים מומלצים</h3>
				</div> -->
				<!-- @click="over=!over" -->
				<div class="up" >
					<!-- <i class="el-icon-arrow-up"></i> -->
					<h3>כל היעדים</h3>
				</div>
				<!-- PC -->
				<div class="menus-warp menus-nomobile">
					<div class="menus" v-if="over">
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/קיוטו, יפן'">קיוטו</p>
							<p onclick="window.location.href='destination/אדינבורו, הממלכה המאוחדת'">אדינבורו</p>
							<p onclick="window.location.href='destination/דיסלדורף, גרמניה'">דיסלדורף</p>
							<p onclick="window.location.href='destination/רודוס, יוון'">רודוס</p>
							<p onclick="window.location.href='destination/ירוואן, ארמניה'">ירוואן</p>
							<p onclick="window.location.href='destination/פירנצה, איטליה'">פירנצה</p>
							<p onclick="window.location.href='destination/המבורג, גרמניה'">המבורג</p>
							<p onclick="window.location.href='destination/הלסינקי, פינלנד'">הלסינקי</p>
							<p onclick="window.location.href='destination/הרקליון, יוון'">הרקליון</p>
							<p onclick="window.location.href='destination/פוקט, תאילנד'">פוקט</p>
							<p onclick="window.location.href='destination/מיקונוס, יוון'">מיקונוס</p>
							<p onclick="window.location.href='destination/סקיאתוס, יוון'">סקיאתוס</p>
							<p onclick="window.location.href='destination/הונג קונג, סין'">הונג קונג</p>
							<p onclick="window.location.href='destination/מרסיי, צרפת'">מרסיי</p>
							<p onclick="window.location.href='destination/קוס, יוון'">קוס</p>
							<p onclick="window.location.href='destination/טולום, מקסיקו'">טולום</p>
							<p onclick="window.location.href='destination/קרקוב, פולין'">קרקוב</p>
							<p onclick="window.location.href='destination/לאס וגאס, ארצות הברית'">לאס וגאס</p>
							<p onclick="window.location.href='destination/סנט פטרסבורג, רוסיה'">סנט פטרסבורג</p>
							<p onclick="window.location.href='destination/ליסבון, פורטוגל'">ליסבון</p>

						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/לונדון, הממלכה המאוחדת'">לונדון</p>
							<p onclick="window.location.href='destination/ליברפול, הממלכה המאוחדת'">ליברפול</p>
							<p onclick="window.location.href='destination/ליון, צרפת'">ליון</p>
							<p onclick="window.location.href='destination/מדריד, ספרד'">מדריד</p>
							<p onclick="window.location.href='destination/מנצ'סטר, הממלכה המאוחדת'">מנצ'סטר</p>
							<p onclick="window.location.href='destination/מלבורן, אוסטרליה'">מלבורן</p>
							<p onclick="window.location.href='destination/מקסיקו סיטי, מקסיקו'">מקסיקו סיטי</p>
							<p onclick="window.location.href='destination/מיאמי, ארצות הברית'">מיאמי</p>
							<p onclick="window.location.href='destination/מילאנו, איטליה'">מילאנו</p>
							<p onclick="window.location.href='destination/מנילה, הפיליפינים'">מנילה</p>
							<p onclick="window.location.href='destination/מינכן, גרמניה'">מינכן</p>
							<p onclick="window.location.href='destination/נאפולי, איטליה'">נאפולי</p>
							<p onclick="window.location.href='destination/נסאו, איי בהאמה'">נסאו</p>
							<p onclick="window.location.href='destination/ניו יורק, ארצות הברית'">ניו יורק</p>
							<p onclick="window.location.href='destination/פורטו, פורטוגל'">פורטו</p>
							<p onclick="window.location.href='destination/אוסקה, יפן'">אוסקה</p>
							<p onclick="window.location.href='destination/אוסלו, נורווגיה'">אוסלו</p>
							<p onclick="window.location.href='destination/פריז, צרפת'">פריז</p>
							<p onclick="window.location.href='destination/פרת', אוסטרליה'">פרת'</p>
							<p onclick="window.location.href='destination/פאפוס, קפריסין'">פאפוס</p>

						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/פראג, צ'כיה'">פראג</p>
							<p onclick="window.location.href='destination/פנמה סיטי, פנמה'">פנמה סיטי</p>
							<p onclick="window.location.href='destination/מרקש, מרוקו'">מרקש</p>
							<p onclick="window.location.href='destination/ריו דה ז'ניירו, ברזיל'">ריו דה ז'ניירו</p>
							<p onclick="window.location.href='destination/רומא, איטליה'">רומא</p>
							<p onclick="window.location.href='destination/סאו פאולו, ברזיל'">סאו פאולו</p>
							<p onclick="window.location.href='destination/סיאול, דרום קוריאה'">סיאול</p>
							<p onclick="window.location.href='destination/סינגפור, סינגפור'">סינגפור</p>
							<p onclick="window.location.href='destination/סלוניקי, יוון'">סלוניקי</p>
							<p onclick="window.location.href='destination/סטוקהולם, שוודיה'">סטוקהולם</p>
							<p onclick="window.location.href='destination/שטוטגרט, גרמניה'">שטוטגרט</p>
							<p onclick="window.location.href='destination/סביליה, ספרד'">סביליה</p>
							<p onclick="window.location.href='destination/סידני, אוסטרליה'">סידני</p>
							<p onclick="window.location.href='destination/טביליסי, גאורגיה'">טביליסי</p>
							<p onclick="window.location.href='destination/טאיפיי, טייוואן'">טאיפיי</p>
							<p onclick="window.location.href='destination/טוקיו, יפן'">טוקיו</p>
							<p onclick="window.location.href='destination/ונציה, איטליה'">ונציה</p>
							<p onclick="window.location.href='destination/וינה, אוסטריה'">וינה</p>
							<p onclick="window.location.href='destination/ולנסיה, ספרד'">ולנסיה</p>
							<p onclick="window.location.href='destination/אמסטרדם, הולנד'">אמסטרדם</p>
						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/מונטריאול, קנדה'">מונטריאול</p>
							<p onclick="window.location.href='destination/אוטווה, קנדה'">אוטווה</p>
							<p onclick="window.location.href='destination/טורונטו, קנדה'">טורונטו</p>
							<p onclick="window.location.href='destination/ונקובר, קנדה'">ונקובר</p>
							<p onclick="window.location.href='destination/ציריך, שווייץ'">ציריך</p>
							<p onclick="window.location.href='destination/אתונה, יוון'">אתונה</p>
							<p onclick="window.location.href='destination/לוזאן, שווייץ'">לוזאן</p>
							<p onclick="window.location.href='destination/אבו דאבי, איחוד האמירויות הערביות'">אבו דאבי</p>
							<p onclick="window.location.href='destination/באקו, אזרבייג'ן'">באקו</p>
							<p onclick="window.location.href='destination/ברצלונה, ספרד'">ברצלונה</p>
							<p onclick="window.location.href='destination/לימסול, קפריסין'">לימסול</p>
							<p onclick="window.location.href='destination/ברלין, גרמניה'">ברלין</p>
							<p onclick="window.location.href='destination/בייג'ינג, סין'">בייג'ינג</p>
							<p onclick="window.location.href='destination/זקינתוס, יוון'">זקינתוס</p>
							<p onclick="window.location.href='destination/חאניה, יוון'">חאניה</p>
							<p onclick="window.location.href='destination/פלאיה דל כרמן, מקסיקו'">פלאיה דל כרמן</p>
							<p onclick="window.location.href='destination/אנטיגואה, גואטמלה'">אנטיגואה</p>
							<p onclick="window.location.href='destination/קו סמוי, תאילנד'">קו סמוי</p>
							<p onclick="window.location.href='destination/בנגקוק, תאילנד'">בנגקוק</p>
							<p onclick="window.location.href='destination/לרנקה, קפריסין'">לרנקה</p>

						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/סופיה, בולגריה'">סופיה</p>
							<p onclick="window.location.href='destination/בריסטול, הממלכה המאוחדת'">בריסטול</p>
							<p onclick="window.location.href='destination/מונקו, מונקו'">מונקו</p>
							<p onclick="window.location.href='destination/דובאי, איחוד האמירויות הערביות'">דובאי</p>
							<p onclick="window.location.href='destination/האנוי, וייטנאם'">האנוי</p>
							<p onclick="window.location.href='destination/בוקרשט, רומניה'">בוקרשט</p>
							<p onclick="window.location.href='destination/קפלוניה, יוון'">קפלוניה</p>
							<p onclick="window.location.href='destination/בלגרד, סרביה'">בלגרד</p>
							<p onclick="window.location.href='destination/בורדו, צרפת'">בורדו</p>
							<p onclick="window.location.href='destination/בודפשט, הונגריה'">בודפשט</p>
							<p onclick="window.location.href='destination/בואנוס איירס, ארגנטינה'">בואנוס איירס</p>
							<p onclick="window.location.href='destination/קאן, צרפת'">קאן</p>
							<p onclick="window.location.href='destination/קורפו, יוון'">קורפו</p>
							<p onclick="window.location.href='destination/קלן, גרמניה'">קלן</p>
							<p onclick="window.location.href='destination/מקאו, סין'">מקאו</p>
							<p onclick="window.location.href='destination/קופנהגן, דנמרק'">קופנהגן</p>
							<p onclick="window.location.href='destination/קייפטאון, דרום אפריקה'">קייפטאון</p>
							<p onclick="window.location.href='destination/קנקון, מקסיקו'">קנקון</p>
							<p onclick="window.location.href='destination/קאפרי, איטליה'">קאפרי</p>
							<p onclick="window.location.href='destination/גלזגו, סקוטלנד'">גלזגו</p>
						</div>
					</div>
				</div>

				<!-- 移动端 -->
				<div class="menus-warp menus-ismobile">
					<div class="menus" v-if="over">
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/קיוטו, יפן'">קיוטו</p>
							<p onclick="window.location.href='destination/אדינבורו, הממלכה המאוחדת'">אדינבורו</p>
							<p onclick="window.location.href='destination/דיסלדורף, גרמניה'">דיסלדורף</p>
							<p onclick="window.location.href='destination/רודוס, יוון'">רודוס</p>
							<p onclick="window.location.href='destination/ירוואן, ארמניה'">ירוואן</p>
							<p onclick="window.location.href='destination/פירנצה, איטליה'">פירנצה</p>
							<p onclick="window.location.href='destination/המבורג, גרמניה'">המבורג</p>
							<p onclick="window.location.href='destination/הלסינקי, פינלנד'">הלסינקי</p>
							<p onclick="window.location.href='destination/הרקליון, יוון'">הרקליון</p>
							<p onclick="window.location.href='destination/פוקט, תאילנד'">פוקט</p>
							<p onclick="window.location.href='destination/מיקונוס, יוון'">מיקונוס</p>
							<p onclick="window.location.href='destination/סקיאתוס, יוון'">סקיאתוס</p>
							<p onclick="window.location.href='destination/הונג קונג, סין'">הונג קונג</p>
							<p onclick="window.location.href='destination/מרסיי, צרפת'">מרסיי</p>
							<p onclick="window.location.href='destination/קוס, יוון'">קוס</p>
							<p onclick="window.location.href='destination/טולום, מקסיקו'">טולום</p>
							<p onclick="window.location.href='destination/קרקוב, פולין'">קרקוב</p>
							<p onclick="window.location.href='destination/לאס וגאס, ארצות הברית'">לאס וגאס</p>
							<p onclick="window.location.href='destination/סנט פטרסבורג, רוסיה'">סנט פטרסבורג</p>
							<p onclick="window.location.href='destination/ליסבון, פורטוגל'">ליסבון</p>

						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/לונדון, הממלכה המאוחדת'">לונדון</p>
							<p onclick="window.location.href='destination/ליברפול, הממלכה המאוחדת'">ליברפול</p>
							<p onclick="window.location.href='destination/ליון, צרפת'">ליון</p>
							<p onclick="window.location.href='destination/מדריד, ספרד'">מדריד</p>
							<p onclick="window.location.href='destination/מנצ'סטר, הממלכה המאוחדת'">מנצ'סטר</p>
							<p onclick="window.location.href='destination/מלבורן, אוסטרליה'">מלבורן</p>
							<p onclick="window.location.href='destination/מקסיקו סיטי, מקסיקו'">מקסיקו סיטי</p>
							<p onclick="window.location.href='destination/מיאמי, ארצות הברית'">מיאמי</p>
							<p onclick="window.location.href='destination/מילאנו, איטליה'">מילאנו</p>
							<p onclick="window.location.href='destination/מנילה, הפיליפינים'">מנילה</p>
							<p onclick="window.location.href='destination/מינכן, גרמניה'">מינכן</p>
							<p onclick="window.location.href='destination/נאפולי, איטליה'">נאפולי</p>
							<p onclick="window.location.href='destination/נסאו, איי בהאמה'">נסאו</p>
							<p onclick="window.location.href='destination/ניו יורק, ארצות הברית'">ניו יורק</p>
							<p onclick="window.location.href='destination/פורטו, פורטוגל'">פורטו</p>
							<p onclick="window.location.href='destination/אוסקה, יפן'">אוסקה</p>
							<p onclick="window.location.href='destination/אוסלו, נורווגיה'">אוסלו</p>
							<p onclick="window.location.href='destination/פריז, צרפת'">פריז</p>
							<p onclick="window.location.href='destination/פרת', אוסטרליה'">פרת'</p>
							<p onclick="window.location.href='destination/פאפוס, קפריסין'">פאפוס</p>

						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/פראג, צ'כיה'">פראג</p>
							<p onclick="window.location.href='destination/פנמה סיטי, פנמה'">פנמה סיטי</p>
							<p onclick="window.location.href='destination/מרקש, מרוקו'">מרקש</p>
							<p onclick="window.location.href='destination/ריו דה ז'ניירו, ברזיל'">ריו דה ז'ניירו</p>
							<p onclick="window.location.href='destination/רומא, איטליה'">רומא</p>
							<p onclick="window.location.href='destination/סאו פאולו, ברזיל'">סאו פאולו</p>
							<p onclick="window.location.href='destination/סיאול, דרום קוריאה'">סיאול</p>
							<p onclick="window.location.href='destination/סינגפור, סינגפור'">סינגפור</p>
							<p onclick="window.location.href='destination/סלוניקי, יוון'">סלוניקי</p>
							<p onclick="window.location.href='destination/סטוקהולם, שוודיה'">סטוקהולם</p>
							<p onclick="window.location.href='destination/שטוטגרט, גרמניה'">שטוטגרט</p>
							<p onclick="window.location.href='destination/סביליה, ספרד'">סביליה</p>
							<p onclick="window.location.href='destination/סידני, אוסטרליה'">סידני</p>
							<p onclick="window.location.href='destination/טביליסי, גאורגיה'">טביליסי</p>
							<p onclick="window.location.href='destination/טאיפיי, טייוואן'">טאיפיי</p>
							<p onclick="window.location.href='destination/טוקיו, יפן'">טוקיו</p>
							<p onclick="window.location.href='destination/ונציה, איטליה'">ונציה</p>
							<p onclick="window.location.href='destination/וינה, אוסטריה'">וינה</p>
							<p onclick="window.location.href='destination/ולנסיה, ספרד'">ולנסיה</p>
							<p onclick="window.location.href='destination/אמסטרדם, הולנד'">אמסטרדם</p>
						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/מונטריאול, קנדה'">מונטריאול</p>
							<p onclick="window.location.href='destination/אוטווה, קנדה'">אוטווה</p>
							<p onclick="window.location.href='destination/טורונטו, קנדה'">טורונטו</p>
							<p onclick="window.location.href='destination/ונקובר, קנדה'">ונקובר</p>
							<p onclick="window.location.href='destination/ציריך, שווייץ'">ציריך</p>
							<p onclick="window.location.href='destination/אתונה, יוון'">אתונה</p>
							<p onclick="window.location.href='destination/לוזאן, שווייץ'">לוזאן</p>
							<p onclick="window.location.href='destination/אבו דאבי, איחוד האמירויות הערביות'">אבו דאבי</p>
							<p onclick="window.location.href='destination/באקו, אזרבייג'ן'">באקו</p>
							<p onclick="window.location.href='destination/ברצלונה, ספרד'">ברצלונה</p>
							<p onclick="window.location.href='destination/לימסול, קפריסין'">לימסול</p>
							<p onclick="window.location.href='destination/ברלין, גרמניה'">ברלין</p>
							<p onclick="window.location.href='destination/בייג'ינג, סין'">בייג'ינג</p>
							<p onclick="window.location.href='destination/זקינתוס, יוון'">זקינתוס</p>
							<p onclick="window.location.href='destination/חאניה, יוון'">חאניה</p>
							<p onclick="window.location.href='destination/פלאיה דל כרמן, מקסיקו'">פלאיה דל כרמן</p>
							<p onclick="window.location.href='destination/אנטיגואה, גואטמלה'">אנטיגואה</p>
							<p onclick="window.location.href='destination/קו סמוי, תאילנד'">קו סמוי</p>
							<p onclick="window.location.href='destination/בנגקוק, תאילנד'">בנגקוק</p>
							<p onclick="window.location.href='destination/לרנקה, קפריסין'">לרנקה</p>

						</div>
						<div class="menus-li flex">
							<p onclick="window.location.href='destination/סופיה, בולגריה'">סופיה</p>
							<p onclick="window.location.href='destination/בריסטול, הממלכה המאוחדת'">בריסטול</p>
							<p onclick="window.location.href='destination/מונקו, מונקו'">מונקו</p>
							<p onclick="window.location.href='destination/דובאי, איחוד האמירויות הערביות'">דובאי</p>
							<p onclick="window.location.href='destination/האנוי, וייטנאם'">האנוי</p>
							<p onclick="window.location.href='destination/בוקרשט, רומניה'">בוקרשט</p>
							<p onclick="window.location.href='destination/קפלוניה, יוון'">קפלוניה</p>
							<p onclick="window.location.href='destination/בלגרד, סרביה'">בלגרד</p>
							<p onclick="window.location.href='destination/בורדו, צרפת'">בורדו</p>
							<p onclick="window.location.href='destination/בודפשט, הונגריה'">בודפשט</p>
							<p onclick="window.location.href='destination/בואנוס איירס, ארגנטינה'">בואנוס איירס</p>
							<p onclick="window.location.href='destination/קאן, צרפת'">קאן</p>
							<p onclick="window.location.href='destination/קורפו, יוון'">קורפו</p>
							<p onclick="window.location.href='destination/קלן, גרמניה'">קלן</p>
							<p onclick="window.location.href='destination/מקאו, סין'">מקאו</p>
							<p onclick="window.location.href='destination/קופנהגן, דנמרק'">קופנהגן</p>
							<p onclick="window.location.href='destination/קייפטאון, דרום אפריקה'">קייפטאון</p>
							<p onclick="window.location.href='destination/קנקון, מקסיקו'">קנקון</p>
							<p onclick="window.location.href='destination/קאפרי, איטליה'">קאפרי</p>
							<p onclick="window.location.href='destination/גלזגו, סקוטלנד'">גלזגו</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<new-footer />
	</div>
</template>

<script>
	import {
		getIndexData,
		getIdByName,
		postgetIndexData
	} from '@/api/kentaHb'
	export default {
		name: 'home',
		data() {
			return {
				images: [{
						src: require("assets/images/Group1.png"),
						title: "כרטיסים לפורמולה 1 זמינים כעת",
						tournament_name: ''
					},
					{
						src: require("assets/images/Group2.png"),
						title: "כרטיסים ללה ליגה 24/25 זמינים כעת",
						tournament_name: 'Primeira Liga'
					},
					{
						src: require("assets/images/Group3.png"),
						title: "כרטיסים לליגת האלופות 24/25",
						tournament_name: 'Champions League'
					}
				],
				imagesList: [{
						src: require("assets/images/Rectangle 673.png"),
						title: 'משתוקקים ליוקרה של דובאי?'
					},
					{
						src: require("assets/images/Rectangle 669.png"),
						title: 'נרגשים לכדורגל בברצלונה?'
					},
					{
						src: require("assets/images/Rectangle 670.png"),
						title: 'מתחשק לך שופינג בלונדון?'
					},
					{
						src: require("assets/images/Rectangle 671.png"),
						title: 'משתוקקים ליוקרה של דובאי?'
					},
					{
						src: require("assets/images/Rectangle 766.png"),
						title: 'מוכנים לשחק בלאס וגאס?'
					}

				],
				slideImg: [],
				slidecurrentIndex: 0,
				visibleImages: [],
				currentIndex: 0,
				list: [{
						chid: [{}, {}, {}]
					},
					{
						chid: [{}, {}, {}]
					}
				],
				input: '',
				over: true,
				state1: '',
				restaurants: [],
				hotList: [],
				swiperOption: {
					slidesPerView: 4.5,
					centeredSlides: false,
					spaceBetween: 16,
					grabCursor: true,
					loop: true,
					autoplay: false,
				},
				visibleOption: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 16,
					grabCursor: true,
					loop: true,
					autoplay: false,
				},
				slideImgOption: {
					slidesPerView: 5,
					centeredSlides: false,
					spaceBetween: 16,
					grabCursor: true,
					loop: true,
					autoplay: false,
				},
				swiperOptionM: {
					slidesPerView: 1.5,
					centeredSlides: false,
					spaceBetween: 16,
					grabCursor: true,
					loop: true,
					autoplay: false,
				},
				cityval: '',
				defaultList: [],
				showSwiper: true
			}
		},
		mounted() {
			this.loadAll();
			this.initializeVisibleImages();
			this.getImages()
			// 监听窗口尺寸变化
			window.addEventListener('resize', this.handleResize);
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize);
		},
		methods: {
			toPath(name) {
				this.$router.push({
					path: ("/eventlPage?tournament_name=" + name)
				})
			},
			toeventlPage(item) {
				this.$router.push({
					path: ("/eventlPage?tournament_name=" + item.tournament_name)
				})
			},
			handleResize() {
				this.reloadSwiper();
			},
			reloadSwiper() {
				let that = this
				// 销毁并重新加载 Swiper
				this.showSwiper = false;
				setTimeout(function() {
					// location.reload()
					that.showSwiper = true;
				}, 100)
			},
			getImages() {
				this.slideImg = this.imagesList.slice(0, 5); // 初始化显示前三张图片
			},
			prevslide() {
				this.slidecurrentIndex = (this.slidecurrentIndex + 1) % this.imagesList.length;
				this.updateslideImages();
			},
			updateslideImages() {
				this.slideImg = [];
				for (let i = 0; i < 5; i++) {
					const index = (this.slidecurrentIndex + i) % this.imagesList.length;
					this.slideImg.push(this.imagesList[index]);
				}
			},
			initializeVisibleImages() {
				this.visibleImages = this.images.slice(0, 3); // 初始化显示前三张图片
			},
			prev() {
				this.currentIndex = (this.currentIndex + 1) % this.images.length;
				this.updateVisibleImages();
			},
			next() {
				this.currentIndex = (this.currentIndex + 1) % this.images.length;
				this.updateVisibleImages();
			},
			updateVisibleImages() {
				this.visibleImages = [];
				for (let i = 0; i < 3; i++) {
					const index = (this.currentIndex + i) % this.images.length;
					this.visibleImages.push(this.images[index]);
				}
			},
			// 搜索
			search() {
				if (this.cityval) {
					getIdByName({
						city: this.cityval
					}).then(res => {
						this.$router.push({
							path: ("/destination/" + this.cityval)
						})
						// this.$router.push({
						// 	path: ("/destination/" + res[0].id)
						// })
					})
				}
			},
			// 上一页

			// prev() {
			// 	this.$refs.carousel.prev();
			// },
			// 下一页

			// 搜框输入获取数据
			changeInput(e) {
				console.log(e)
			},
			handleSelect(item) {
				this.$router.push({
					path: ("/destination/" + item.city)
				})
			},
			querySearch(queryString, cb) {
				let that = this
				if (!queryString) {
					this.restaurants = this.defaultList
					let restaurants = this.restaurants;
					let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
					// 调用 callback 返回建议列表的数据
					cb(results);
				} else {
					this.restaurants = []
					postgetIndexData({
						name: queryString
					}).then(res => {
						for (let i = 0; i < res.length; i++) {
							this.restaurants.push({
								value: res[i].city,
								city: res[i].city,
								id: res[i].id
							})
						}
						cb(this.restaurants);
					})
				}

			},
			createFilter(queryString) {
				return (restaurant) => {
					return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				this.restaurants = []
				getIndexData().then(res => {
					for (let i = 0; i < res.length; i++) {
						this.restaurants.push({
							value: res[i].city,
							city: res[i].city,
							id: res[i].id
						})
					}
				})
				this.defaultList = this.restaurants
			}
		}
	}
</script>
<style lang="scss" scoped>
	.nomobile {
		display: block;
	}

	.hover-li:hover img {
		transition: ease .5s;
		transform: scale(1.3);
	}

	.language .left .language-list .language-li:hover {
		background-color: rgba(0, 0, 0, 0.2);
		transition: ease .5s;
	}

	@media (min-width: 820px) and (max-width: 1440px) {
		.page {

			.warps,
			.experience .experience-info {
				width: 100%;
				padding: 0 0.2rem;
			}
		}
	}

	@media (max-width: 820px) {
		.page {
			.searches-list {
				flex-wrap: wrap;
			}

			.carousel-box,
			.carousel-wrapper,
			.vacation-hide {
				margin-bottom: 0 !important;
			}

			.carousel {
				direction: rtl;
			}

			.warps {
				width: 100%;
			}

			.menus-ismobile {
				display: inline-block;
			}

			.vacation .vacation-list .vacation-li h3 {
				font-size: 0.15rem;
			}

			.menus-nomobile {
				display: none;
			}

			.carousel .carousel-li .info {
				align-items: flex-start;
			}

			.Recommended {
				padding: 0.8rem 0.2rem 0.64rem 0.2rem;
			}

			.Recommended .menus {
				flex-wrap: wrap;
				direction: rtl;
			}

			.menus-li {
				width: 50%;
				flex: inherit;
				margin-bottom: 0.16rem;
			}

			.vacation-hide .arrow {
				left: 0.2rem;
			}

			.vacation .title {
				font-size: 0.28rem;
				padding-right: 0.2rem;
			}

			.life .form .name p {
				font-size: 0.32rem;
				line-height: 0.28rem;
			}

			.life .form {
				margin-left: 0;
				border-radius: 16px;
				width: 100%;
				padding: 0.4rem 0.18rem;
			}

			.system {
				margin: 0 0.2rem;
			}

			.system .text p {
				line-height: 0.1684rem;
				font-size: 0.12rem;
			}

			.system .system-more {
				width: 100%;
			}

			.life {
				background-image: url("~assets/images/life-m.png");
				background-size: 100% 100%;
				padding: 0 0.2rem;
				margin-bottom: 0;
			}

			.language .right {
				flex: inherit;
				width: 100%;
				padding-right: 0.2rem;
			}

			.more {
				margin-bottom: 0.48rem;
			}

			.language .right .name h2 {
				font-size: 0.28rem;
			}

			.language .left .language-list .language-li {
				width: 48.5%;
				margin-right: 3% !important;
				margin-left: 0 !important;
				margin-bottom: 3%;
			}

			.language .left .language-list .language-li:nth-child(even) {
				margin-right: 0 !important;
				margin-left: 0 !important;
			}

			.language .left .language-list .language-li:nth-child(5),
			.language .left .language-list .language-li:nth-child(6) {
				margin-bottom: 0 !important;
			}

			.language .left {
				width: 100%;
				padding: 0 0.2rem;
			}

			.language .language-info {
				display: flex;
				flex-direction: column-reverse;
				/* 反转元素顺序 */
				align-items: flex-end;
				width: 100%;
				padding: 0;
			}

			.choose .choose-list {
				padding-right: 0.2rem;
				display: flex;
				flex-direction: column-reverse;
				/* 反转元素顺序 */
				align-items: flex-end;
			}

			.choose .title {
				font-size: 0.28rem;
				padding-right: 0.2rem;
			}

			.choose .choose-list .choose-li {
				margin-bottom: 0.4rem;
			}

			.choose .choose-list .choose-li:nth-child(1) {
				margin-bottom: 0;
			}

			.ismobile {
				display: inline-block;
				width: 100%;
				margin-bottom: 0.4rem;
			}

			.nomobile {
				display: none;
			}

			.experience .experience-info {
				display: inherit;
				width: 100%;
				margin: 0;
			}

			.experience {
				padding: 0.64rem 0;
				margin-top: 0.64rem;
			}

			.experience .right {
				padding-right: 0.2rem;
			}

			.experience .right .name h2 {
				text-align: right;
				font-size: 0.28rem;
			}

			.experience .left {
				padding-right: 0.2rem;
				margin-right: 0;
			}

			.carousel .carousel-li {
				width: 100%;
			}

			.carousel .carousel-li .info {
				width: 100%;
			}

			.carousel-wrapper {
				overflow: hidden;
				direction: rtl;
				margin-right: 0.2rem;
			}

			.vacation-hide {
				overflow: hidden;
				direction: rtl;
				padding-right: 0.2rem;
			}

			// .vacation .vacation-list .vacation-li:nth-child(1) {
			// 	margin-right: 0;
			// }


			.vacation-list {
				// width: 11.6rem;
				direction: rtl;
			}


			// .carousel {
			// 	width: 9.32rem;
			// 	height: auto;
			// }

			.Tickets {
				padding-right: 0.2rem;
				margin-top: 0.64rem;
			}

			.Tickets .title {
				font-size: 0.28rem;
			}

			.banner .searches-list {
				margin-top: 0.16rem;
			}

			.banner .searches-list .li {
				margin: 0 0.04rem 0.08rem 0.04rem;
				padding: 0 0.08rem;
				height: 0.32rem;
				line-height: 0.32rem;
				width: 40%;
			}

			.banner {
				width: 100%;
				overflow: hidden;
				padding: 0 0.2rem;
				height: 4.48rem;
				justify-content: inherit;
				background: url('~assets/images/Rectangle 594.png');
				background-size: 100% 100%;
			}

			.banner .search {
				width: 100%;
				margin: 0.16rem 0 0.24rem 0;
			}

			.banner .title {
				margin-top: 1.44rem;
			}

			.banner .title h1 {
				font-size: 0.4rem;
				line-height: 0.36rem;
			}
		}
	}

	.menus-ismobile {
		display: none;
	}

	.ismobile {
		display: none;
	}

	.Recommended {
		padding: 0.80rem 1.48rem;

		.menus {
			padding-top: 0.16rem;
			display: flex;
			padding-bottom: 0.24rem;
			border-bottom: 1px solid rgba(218, 218, 218, 1);

			p {
				font-size: 0.16rem;
				font-weight: 400;
				text-align: right;
				color: rgba(26, 26, 26, 0.6);
				line-height: 0.24rem;
				cursor: pointer;
			}
		}

		.up {
			border-top: 1px solid rgba(218, 218, 218, 1);
			// color: rgba(52, 81, 255, 1);
			display: flex;
			cursor: pointer;
			align-items: center;
			padding-top: 0.16rem;

			i {
				color: rgba(52, 81, 255, 1);
			}

			h3 {
				flex: 1;
				text-align: right;
				font-size: 0.2rem;
				font-weight: 600;
			}
		}

		.dow {
			display: flex;
			cursor: pointer;
			align-items: center;
			padding-bottom: 0.16rem;
			border-bottom: 1px solid rgba(218, 218, 218, 1);
			color: rgba(26, 26, 26, 1);

			i {
				color: rgba(26, 26, 26, 1);
			}

			h3 {
				flex: 1;
				text-align: right;
				font-size: 0.2rem;
				font-weight: 600;
			}
		}
	}

	.vacation {
		padding: 0.64rem 0;

		.vacation-list {
			padding-top: 0.24rem;
			display: flex;

			.vacation-li:nth-last-child(1) {
				margin-right: 0;
			}

			.vacation-li {
				width: 100%;
				// margin-right: 0.16rem;

				h3 {
					margin-top: 0.12rem;
					font-size: 0.2rem;
					font-weight: 600;
					text-align: right;
					direction: rtl;
				}
				.img {
					width: 100%;
					border-radius: 8px;
					height: 3.20rem;
					overflow: hidden;
				}

				img {
					width: 100%;
					border-radius: 8px;
					height: 3.20rem;
					transition: ease .5s;
				}
			}
		}

		.title {
			font-size: 0.32rem;
			font-weight: 500;
			letter-spacing: -0.04em;
			text-align: right;
		}
	}

	.inline-input::v-deep .el-input__inner {
		direction: rtl;
	}



	.system {
		display: flex;
		padding: 0.64rem 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		border-bottom: 1px solid rgba(218, 218, 218, 1);

		img {
			width: 1.13rem;
			height: auto;
		}

		.system-more {
			width: 1.65rem;
			height: 0.4rem;
			border: 1px solid rgba(26, 26, 26, 1);
			border-radius: 6px;
			font-size: 0.16rem;
			font-weight: 400;
			line-height: 0.4rem;
			text-align: center;
		}

		.text {
			margin: 0.24rem 0;

			p {
				font-size: 0.16rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
			}
		}
	}

	.life {
		margin: 0.64rem 0;
		width: 100%;
		height: 5.76rem;
		background-image: url("~assets/images/Rectangle 765.png");
		background-size: 100% 100%;
		display: flex;
		align-items: center;

		.form-li::v-deep .el-input__inner {
			height: 0.48rem;
			font-size: 0.16rem;
			font-weight: 400;
			text-align: right;
			border: none;
			padding: 0 0.16rem;
		}

		.form {
			width: 5.60rem;
			height: 4.16rem;
			padding: 0.40rem;
			margin-left: 0.6rem;
			background-image: url("~assets/images/Rectangle 786.png");
			background-size: 100% 100%;
			color: rgba(254, 254, 254, 1);

			.agree {
				margin-top: 0.16rem;
				font-size: 0.14rem;
				font-weight: 400;
				text-align: center;
				color: rgba(254, 254, 254, 0.6);

				span {
					cursor: pointer;
					text-decoration: underline;
					margin-right: 0.05rem;
				}
			}

			.btn {
				margin-top: 0.16rem;

				button {
					width: 100%;
					background-color: rgba(255, 50, 99, 1);
					height: 0.4rem;
					font-size: 0.16rem;
					font-weight: 400;
					color: #fff;
					border-radius: 6px;
					border: none;
					cursor: pointer;
				}
			}

			.form-li {
				margin-top: 0.16rem;
				height: 0.48rem;
				background-color: #fff;
				display: flex;
				align-items: center;
				border-radius: 8px;
				overflow: hidden;
				padding: 0 0.16rem;

				img {
					width: 0.16rem;
					height: auto;
				}
			}

			.text {
				margin-top: 0.16rem;
				text-align: center;
				font-size: 0.16rem;
				font-weight: 400;
			}

			.name {
				p {
					text-align: center;
					font-size: 0.56rem;
					font-weight: 400;
					letter-spacing: -0.04em;
					line-height: 0.504rem;

				}
			}
		}
	}

	.language {
		padding: 0.64rem 0;
		background-color: rgba(245, 245, 245, 1);

		.language-info {
			width: 14.40rem;
			margin: 0 auto;
			display: flex;
			padding: 0 1.48rem;
		}

		.right {
			text-align: right;
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			.name {
				h2 {
					font-size: 0.32rem;
					font-weight: 500;
					letter-spacing: -0.04em;
					color: rgba(26, 26, 26, 1);
				}

			}

			.text {
				font-size: 0.16rem;
				font-weight: 400;
				margin-top: 0.16rem;
				color: rgba(26, 26, 26, 0.6);
			}
		}

		.left {
			width: 6.8rem;

			.language-list {
				display: flex;
				flex-wrap: wrap;

				.language-li:nth-child(2) {
					margin: 0 0.16rem;
				}

				.language-li:nth-child(5) {
					margin: 0 0.16rem;
				}

				.language-li {
					cursor: pointer;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text-align: center;
					width: 2.16rem;
					height: 0.8rem;
					margin-bottom: 0.16rem;
					background-color: #fff;
					border: 1px solid rgba(218, 218, 218, 1);
					border-radius: 8px;

					img {
						width: 0.20rem;
						height: auto;
					}

					div {
						margin-top: 0.05rem;
						font-size: 0.2rem;
						font-weight: 600;
					}
				}
			}
		}
	}

	.more {
		margin-top: 0.24rem;
		border: 1px solid rgba(26, 26, 26, 1);
		border-radius: 6px;
		width: 1.74rem;
		text-align: center;
		line-height: 0.4rem;
		height: 0.4rem;
		display: inline-block;
		font-size: 0.16rem;
		font-weight: 400;

	}

	.choose {
		padding: 0.64rem 0;

		.title {
			font-size: 0.32rem;
			font-weight: 500;
			text-align: right;
			letter-spacing: -0.04em;
		}

		.choose-list {
			margin-top: 0.2rem;
			display: flex;
			align-items: center;

			.choose-li {
				text-align: right;

				div {
					margin-top: 0.16rem;
					font-size: 0.2rem;
					font-weight: 600;
					margin-bottom: 0.1rem;
				}

				p {
					font-size: 0.14rem;
					font-weight: 400;
					color: rgba(26, 26, 26, 0.6);
				}

				img {
					width: 1.28rem;
				}
			}
		}
	}

	.experience {
		background-color: rgba(245, 245, 245, 1);
		padding: 0.14rem 0;
		padding-bottom: 0.6rem;

		.experience-info {
			display: flex;
			width: 14.40rem;
			margin: 0.4rem auto 0 auto;
		}

		.left {
			margin-right: 0.80rem;
			overflow: hidden;

			.experience-list {
				direction: rtl;

				.experience-li {
					width: 100%;
					cursor: pointer;
					overflow: hidden;
					text-align: right;

					h3 {
						margin-top: 0.16rem;
						font-size: 0.20rem;
						font-weight: 600;
					}

					p {
						margin-top: 0.05rem;
						font-size: 0.14rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
					}

					.img {
						width: 100%;
						height: 2.40rem;
						border-radius: 8px;
						overflow: hidden;
					}

					img {
						width: 100%;
						height: 2.40rem;
						border-radius: 8px;
						transition: ease .5s;
					}
				}
			}

		}

		.right {
			text-align: right;

			.name {
				h2 {
					font-size: 0.32rem;
					font-weight: 500;
					letter-spacing: -0.04em;
					color: rgba(26, 26, 26, 1);
					text-align: right;
				}
			}

			.text {
				font-size: 0.16rem;
				font-weight: 400;
				margin-top: 0.16rem;
				color: rgba(26, 26, 26, 0.6);
			}
		}
	}

	.carousel-box::v-deep .el-carousel__arrow {
		display: none;
	}

	.vacation-hide {
		position: relative;
	}

	.vacation-hide {
		.arrow {
			top: 1.75rem;
			left: 0.2rem;
		}
	}

	.carousel-wrapper {
		// height: 2.4rem;
		position: relative;
		margin-bottom: 0.64rem;
	}

	.arrow {
		cursor: pointer;
		background-color: #fff;
		color: rgba(26, 26, 26, 1);
		border: 1px solid rgba(218, 218, 218, 1);
		width: 0.4rem;
		height: 0.4rem;
		top: 50%;
		margin-top: -0.2rem;
		border-radius: 50%;
		text-align: center;
		z-index: 9;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		i {
			font-size: 18px;
			font-weight: bold;
		}
	}

	.carousel-box {
		position: relative;

		.left {
			left: 0.2rem;
		}

		.right {
			right: -0.2rem;
		}


	}


	.carousel {
		margin-top: 0.15rem;
		display: flex;
		overflow: hidden;

		.carousel-li:nth-child(even) {
			margin: 0 0.16rem;
		}

		.carousel-li {
			cursor: pointer;
			height: 2.40rem;
			position: relative;
			border-radius: 8px;
			overflow: hidden;

			.info {
				transition: ease .5s;
				width: 100%;
				height: 2.40rem;
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				padding: 0.16rem;
				color: rgba(254, 254, 254, 1);
				box-sizing: border-box;
				align-items: flex-end;

				h4 {
					font-size: 0.2rem;
					font-weight: 500;
					padding: 0;
					margin: 0;
				}

				button {
					cursor: pointer;
					margin-top: 0.16rem;
					width: 1.48rem;
					height: 0.4rem;
					background-color: rgba(255, 50, 99, 1);
					border-radius: 6px;
					border: none;
					color: rgba(254, 254, 254, 1);
					font-size: 0.16rem;
					font-weight: 400;

				}
			}

			img {
				width: 100%;
				height: 100%;
				transition: ease .5s;
			}
		}
	}


	.Tickets {
		margin-top: 0.64rem;

		.title {
			font-size: 0.32rem;
			font-weight: 400;
			letter-spacing: -0.04em;
			text-align: right;
		}
	}

	.banner {
		background: url('~assets/images/banner.png') no-repeat;
		background-size: 100% 100%;
		display: flex;
		height: 4.56rem;
		padding-top: 0.8rem;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: #fefefe;
		color: rgba(254, 254, 254, 1);

		.searches-list {
			margin-top: 0.2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;

			a {
				color: #fff;
				text-decoration: none;
			}

			.li {
				padding: 0.07rem 0.2rem;
				background-color: rgba(254, 254, 254, 0.16);
				border: 1px solid rgba(254, 254, 254, 1);
				border-radius: 6px;
				font-size: 0.14rem;
				font-weight: 400;
				margin: 0 0.1rem;
			}
		}

		.searches {
			font-size: 0.14rem;
			font-weight: 400;
			color: rgba(254, 254, 254, 1);
		}

		.search::v-deep .el-input__inner {
			height: 0.48rem;
			border: none;
		}

		.search::v-deep .el-input__inner::placeholder {
			color: rgba(26, 26, 26, 1);
		}

		.search::v-deep .el-autocomplete {
			width: 100%;
		}

		.search-input {
			cursor: pointer;
			flex: 1;
		}

		.search {
			margin: 0.2rem 0;
			width: 4.48rem;
			height: 0.48rem;
			padding: 0 0.15rem;
			display: flex;
			overflow: hidden;
			align-items: center;
			border-radius: 8px;
			background-color: rgba(254, 254, 254, 1);

			img {
				width: 0.16rem;
				height: auto;
				cursor: pointer;
			}

			// input::placeholder {
			// 	color: rgba(26, 26, 26, 1);
			// }

			// input:focus {
			// 	outline: none;
			// 	border: none;
			// }

			// input {
			// 	padding-right: 0.15rem;
			// 	flex: 1;
			// 	border: none;
			// 	text-align: right;
			// 	height: 0.48rem;
			// 	font-size: 0.16rem;

			// }
		}

		.title {
			h1 {
				font-size: 0.56rem;
				font-weight: 500;
				text-align: center;
				line-height: 0.504rem;
				letter-spacing: -0.04em;
			}
		}
	}
</style>