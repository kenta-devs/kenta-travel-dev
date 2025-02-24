
<template>


  <div class="page"  dir="rtl">
      <hebrew-kt-header></hebrew-kt-header>
      <main>
        <header class="banner" >
          <div class="tab-con" >
            <h1 class = "h1_home">הנופש הבא שלך, מתחיל בחיפוש אחד.</h1>
            <div class="search-box animate__animated"  style = "margin-top : 16px;">
            <hebrew-destination-search></hebrew-destination-search>
            <div class="title-hearder">חיפושים פופולריים:</div>
            <div class="button-container">
              <div style = "gap:16px;display: flex;align-items: center;">
                <div class="frame-1081">חבילות למיקונוס</div>
                <div class="frame-1080">מלונות עם קזינו</div>
                <div class="frame-1082">דילים ללונדון</div>
              </div>
            </div> 
            </div>
          </div>
        </header>

        <div class="non-header">
        <div class = "first-title">
              <h2 class = "first-title-1" >כרטיסים לאירועי ספורט</h2>
        </div>

        <div class = "first-title-pic">
          <div class="rectangle-672">pic1</div>
          <div class="rectangle-706">pic1</div>
          <div class="rectangle-707">pic1</div>
        </div>
        
      </div>

        <div class = "group-1188">
          <div class="non-header-2">
          <div class ="first-title2" >
            <div class = "first-title-2" >חבילות נופש - לנפש, חוויה בכל הזמנה.</div>
            <div class = "first-title-2-1">אנו מבטיחים כרטיסים ומלונות רשמיים, שקיפות מלאה ושירות יוצא דופן.</div>
          </div>
          <div class = "first-title-pic-1">
            <div class = image-class-1>

              <div class="cards">
                <div class="card" v-for="(item, index) in items" :key="index">
                  <img :src="item.image" :alt="item.title" />
                  <h2 class = "hebrew-h2">{{ item.title }}</h2>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>


          </div>
        </div>
        </div>

        <div class="non-header">

          <div class = "first-title">
            <h2 class = "first-title-1" >למה לבחור בנו?</h2>
          </div>
          <div class="features">
    <div class="feature" v-for="(feature, index) in features" :key="index">
      <img :src="feature.image" :alt="feature.title" class="feature-image" />
      <h3 class="feature-title">{{ feature.title }}</h3>
      <h4 class="feature-subtitle">{{ feature.subtitle }}</h4>
    </div>
  </div>

        </div>
        <div class = "group-1190">

          <div class="non-header">
            <div style = "display:flex;margin-right: 148px;">

            <div class="headers">
              <h2>כרטיסים למשחקי כדורגל</h2>
              <p>
                קנה מעכשיו כרטיסים למשחקי כדורגל לממש את כל
                המקומות הנחשקים באירופה. בחר ליגה, הזמן כרטיסים
                ותכנן את טיול הכדורגל המושלם עבורך.
              </p>
              <button>לצפיה בכל הכרטיסים</button>
            </div>

            <div class="leagues">
              <div class="league-card" v-for="league in leagues" :key="league.id">
                <img :src="league.flag" alt="flag" />
              </div>
            </div>
          </div>
        </div>
        </div>



        <div class="non-header">
        <div class="pic-background-head">  
          <div class = "pic-background" > 

          </div>
        </div>
        </div>
      </main>

    </div>
  </template>



<script>
import {dictList} from '@/api/index';
export default {
    name: 'AboutPage',
    data() {
        return {
			homePage: [],

      items: [
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20717.png',
          title: 'נופש על המים',
          description: 'חבילות בטן-גב',
        },
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20719.png',
          title: 'הופעות לייב',
          description: 'חבילות לייב',
        },
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20716.png',
          title: 'טיולי שופינג',
          description: 'חבילות ייעודיות לקניות',
        },
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20715.png',
          title: 'אירועי ספורט',
          description: 'חבילות ספורט ברחבי העולם',
        },
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20715.png',
          title: 'סופ״ש ספורטיבי',
          description: 'חבילות לסופי שבוע',
        },
      ],
            features: [
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Asset%20111%201.png',
          title: 'תיירות מודרנית ואמינה',
          subtitle: 'אל תאמינו לנו, תקראו ביקורות של אחרים וקבלו מאיתנו תמיכה ושירות ללקוחות, אנחנו איתכם בכל שלב.',
        },
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Asset%2041%201.png',
          title: 'חוויה שכוללת נופש',
          subtitle: 'האמינו אפילו בגבול האחרון, דלגו על תורים ונהנו מביטול חינם לחוויית נופש קלה ונעימה יותר.',
        },
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Asset%20101%201.png',
          title: 'מבצעים והפתעות',
          subtitle: 'כרטיסים רשמיים בלבד, מלונות במחירים מעולים וגם קרדיט להפתעה בחופשה הבאה שלך.',
        },
        {
          image: 'https://kenta-vip-text.b-cdn.net/hebrew-Asset%2071%201.png',
          title: 'עולם של אפשרויות',
          subtitle: 'עם מאות אירועי ספורט שונים, חצי מיליון מלונות ונופשים ועוד - אנחנו דואגים שיהיה לכם שמח בחופשה.',
        },
      ],
      leagues: [
        { id: 1, name: '1ליגה ספרדית', flag: require('../assets/images/es.png') },
        { id: 2, name: 'ליגה אנגלית', flag: require('../assets/images/es.png')},
        { id: 3, name: 'ליגת האלופות', flag: require('../assets/images/es.png')},
        { id: 4, name: 'ליגה גרמנית', flag: require('../assets/images/es.png')},
        { id: 5, name: 'ליגה צרפתית', flag: require('../assets/images/es.png')},
        { id: 6, name: 'ליגה איטלקית', flag: require('../assets/images/es.png')},
      ],
        }

    },
    mounted() {
		this.init();
    },
    methods: {
		init(){
			dictList({dictType: 'about'}).then((res) => {
			  this.homePage = res.data;
				console.log(" this.homePage",this.homePage)
			})
		},
        toHome(){
            this.$router.push({path:'/'})
        },
    }
}
</script>


<style lang="scss" scoped>
.non-header{

  width: 1440px;
  margin: 0 auto; /* 让container水平居中 */
  
}

.pic-background-head{
  margin-top:80px;
}

.pic-background{
  margin-top:80px;
  background-image: url('https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20765.png');
  width: 1376px;
  height: 576px;
  border-radius: 20px 20px 20px 20px;

}


.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.headers {
  max-width: 300px;
}

.headers h2 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: right;
  font-weight : 500;
}

.headers p {
  font-size: 14px;
  margin-bottom: 20px;
  margin-top:16px;
  width: 332px;
    height: 60px;
}

.headers button {
  padding: 10px 20px;
  background-color: #f0f0f0;

  cursor: pointer;
  border-radius: 6px;
  border: 1px solid rgba(26, 26, 26, 1);
}

.leagues {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-right:132px;
}

.league-card {
  width : 216px;
  height : 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(218, 218, 218, 1);
  justify-content: center;
}

.league-card img {
  width: 111px;
  height: 44px;

}


.non-header-2{
width: 1440px;
margin: 0 auto; /* 让container水平居中 */
display: flex;
}
.features {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  padding: 20px;
}

.feature {
  width: 200px;
}

.feature-image {
  width: 127.99px;
  height: 120.04px;
  margin: 0 auto;
}

.feature-title {
  font-family: 'Noto Sans Hebrew', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: right;
}

.feature-subtitle {
  font-family: 'Noto Sans Hebrew', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: right;
  margin: 0 auto;
  max-width: 264px;
}
.banner {
  background: linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.4)), 
  url('https://kenta-vip-text.b-cdn.net/hebrew_home.png') no-repeat center center;
  background-size: cover;
  background-position: center 70%; 
  width: 100%;
  height: calc(100vw * (456 / 1440)); // 这是根据宽度动态计算高度
  margin-top: -0.64rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fefefe;

.tab {
    display: none;
  }
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px; /* 按钮之间的间隔 */
  margin-top:16px;
}

.frame-1080{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    width: 125px; /* 设置宽度为 109px */
    height: 32px;
    background: rgba(254, 254, 254, 0.16);
    border: 1px solid #FEFEFE;
    backdrop-filter: blur(2px);
    border-radius: 6px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  margin-right:56px;
}


.hebrew-h2{
  font-family: Noto Sans Hebrew;
font-size: 20px;
font-weight: 600;
line-height: 24px;
text-align: right;
}
.card {
  width: 18%;
  box-sizing: border-box;

  margin: 0 8px 8px; /* 左右各8px，垂直方向16px */
}

.card img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.frame-1082{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    width: 109px; /* 设置宽度为 109px */
    height: 32px;
    background: rgba(254, 254, 254, 0.16);
    border: 1px solid #FEFEFE;
    backdrop-filter: blur(2px);
    border-radius: 6px;
}
.frame-1081 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    width: 131px; /* 设置宽度为 109px */
    height: 32px;
    background: rgba(254, 254, 254, 0.16);
    border: 1px solid #FEFEFE;
    backdrop-filter: blur(2px);
    border-radius: 6px;
}

.tab-con {
width: 480px;
top: 124px;
left: 480px;
gap: 0px;
opacity: 0px;
}

.h1_home{
font-family: Noto Sans Hebrew;
font-size: 0.5rem;
font-weight: 600;
// line-height: 50.4px;
letter-spacing: -0.04em;
text-align: center;
    }

.title-hearder{
margin-top:24px;
  font-family: Noto Sans Hebrew;
font-size: 14px;
font-weight: 600;
line-height: 16px;
text-align: center;

}


.group-1188{
width: 100vw;

height: 428px;
background: rgba(245, 245, 245, 1);
margin-top:64px;
padding-top: 64px;
}

.group-1190{
width: 100vw;
height: 304px;
background: rgba(245, 245, 245, 1);
margin-top:64px;
padding-top: 64px;
}

.first-title{


margin-top: 64px;

}
.first-title2{
width: 292px;
height: 72px;
gap: 0px;
opacity: 0px;

}
.first-title-2{

font-family: Noto Sans Hebrew;
font-size: 32px;
font-weight: 500;
line-height: 36.16px;
letter-spacing: -0.04em;
text-align: right;

}
.first-title-2-1{

margin-top:16px;font-family: Noto Sans Hebrew;
font-size: 16px;
font-weight: 400;
line-height: 19.84px;
text-align: right;

}

.first-title-1{

font-family: Noto Sans Hebrew;
font-size: 32px;
font-weight: 500;
line-height: 36.16px;
letter-spacing: -0.04em;
text-align: right;

}



.first-title-pic{

margin-top: 24px;
display: flex;
gap: 16px; /* 设置图片之间的间隔 */

}



.rectangle-707{
    width: 448px !important;
    height: 240px !important;
    background: linear-gradient(117.03deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20707.png) !important;
    border-radius: 8px !important;
}
.rectangle-706{
    width: 448px !important;
    height: 240px !important;
    background: linear-gradient(117.03deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20706.png) !important;
    border-radius: 8px !important;
}
.rectangle-672 {
    width: 448px !important;
    height: 240px !important;
    background: linear-gradient(117.03deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://kenta-vip-text.b-cdn.net/hebrew-Rectangle%20672.png) !important;
    border-radius: 8px !important;
}




  </style>




