<template>
  <div class="booking-box">
    <div class="book-visit">
      <div class="book-visit-title">Book your stay</div>
      <div class="book-visit-text">
        <p>Discover latest deals, and book your stay directly</p>
        <p>with {{ casionName }}</p>
      </div>
      <div class="book-visit-button">
        <el-button class="book-visit-btn" type="primary" @click="toBooking()">Visit Site </el-button>
      </div>
    </div>

    <hr />
    <div class="book-directy">
      <div class="coming-soon">COMING SOON</div>
      <div class="book-directy-title">Book directly with Kenta</div>
      <div class="book-directy-text">
        <p>Be the first to know on the upcoming release.</p>
        <p>Unlock exclusive deals & perks.</p>
      </div>
      <div class="subscribe-form">
        <div style="height: 8px;width: 100%;"></div>
        <div class="inp-box">
          <el-input v-model="email" :placeholder="Address">
            <i slot="prefix" class="icon icon-email">
              <img src="~assets/images/icon-email.png" alt="">
            </i>
          </el-input>
        </div>
        <el-button class="form-btn" type="primary" @click="addsubscribe()">Subscribe</el-button>
      </div>
    </div>

    <div class="privacy">
      By clicking subscribe you agree to our <router-link to="privacy-policy" class="text-red">privacy</router-link> and
      <router-link to="terms-conditions" class="text-red">terms</router-link>.
    </div>
  </div>
</template>

<script>
import { subscribe } from '@/api/index.js';

export default {
  props: {
    casionName: String,
    address: String
  },
  data: () => ({
    email: '',
    Address:'Address'
  }),
  methods: {
    toBooking() {
      window.open(this.address);

    },
    addsubscribe() {
      subscribe({ email: this.email }).then(res => {
        if(res.code == 200){
          //this.$alert('Thank you for subscribing', 'message');
          this.email='';
          this.Address = 'Thank you for subscribing';
        }
      })
    },
  }
}

</script>

<style lang="scss" scoped>
hr {
  margin-top: 40px;
  width: 450px;
  background-color: #DADADA;
  border: none;
  height: 1px;
}

.booking-box {
  width: 600px;
  height: 640px;
}

.book-visit {
  width: 456px;
  height: 188px;
  margin-left: 72px;
  margin-top: 80px;
  background-color: white;
  border: 1px solid rgba(218, 218, 218, 1);
  border-radius: 8px;
}

.book-visit-title {
  font-family: Rubik;
  font-size: 32px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.04em;
  text-align: center;
  margin-top: 16px;
}

.book-visit-text {
  font-family: Rubik;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 16px;
}

.book-visit-button {
  font-family: Rubik;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  background: rgba(254, 254, 254, 1);
  margin-top: 16px;
}

.book-visit-btn {
  width: 360px;
  height: 48px;
  top: 188px;
  left: 120px;
  border-radius: 8px;
  background: rgba(255, 50, 99, 1);
}

.book-directy {
  margin-top: 40px;
  margin-left: 72px;
  width: 456px;
  height: 252px;
  border-radius: 8px;
  border: 1px;
  background: rgba(0, 188, 147, 0.08) ;
  border: 1px solid rgba(218, 218, 218, 1);
}

.coming-soon {
  width: 97px;
  height: 20px;
  border-radius: 2px;
  background: rgba(0, 188, 147, 1);
  font-family: Rubik;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(254, 254, 254, 1);
  margin-left: 180px;
  margin-top: -10px;
  padding-top: 4px;

}

.book-directy-title {
  font-family: Rubik;
  font-size: 32px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.04em;
  text-align: center;
  color: rgba(0, 188, 147, 1);
  margin-top: 24px;

}

.book-directy-text {
  font-family: Rubik;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(26, 26, 26, 0.6);
  margin-top: 8px;
}

.book-directy-button {
  width: 440px;
  height: 120px;
  border-radius: 12px;
  border: 1px;
  margin-top: 16px;
  margin-left: 8px;
  background: #DADADA;
}

.privacy {
  margin-top: 8px;
  width: 100%;
  font-family: Rubik;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

}

.text-red {
  color: red;
  text-decoration-line: underline;
}

.form-btn {
  width: 424px;
  height: 48px;
  border-radius: 8px;
  background: rgba(255, 50, 99, 1);
  font-family: Rubik;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(254, 254, 254, 1);
  margin-left: 8px;
  margin-top: 8px;

}


.subscribe-form {
  width: 440px;
  height: 120px;
  border-radius: 12px;
  border: 1px solid #DADADA;
  margin-left: 8px;
  margin-top: 8px;
  background: #F5F5F5;

  .inp-box {
    width: 424px;
    margin-left: 8px;
    flex: 1;
    padding-left: .16rem;
    align-items: center;
    border: 1px solid rgba(218, 218, 218, 0.60);
    background: #FEFEFE;
    height: 48px;
    border-radius: 8px;

    .icon {
      width: 16px;
      height: 16px;
      display: block;
      margin-top: 12px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    ::v-deep .el-input {

    }

    ::v-deep .el-input__inner {
      height: .4rem;
      line-height: .4rem;
      border-radius: .08rem;
      border: none;
    }
  }
}
</style>
