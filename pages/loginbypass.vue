<template>
  <div class="page">
    <div class="login-form">
      <div class="logo">
        <img src="~assets/images/Logo.svg" alt="Kenta" style="width: 78px;">
      </div>
      <div class="label">Log in with account and password</div>
      <div class="mt24">
        <el-input v-model="form.username" placeholder="Enter your account"></el-input>
      </div>
      <div class="mt12">
        <el-input v-model="form.password" type="password" placeholder="Enter your password"></el-input>
      </div>
      <div class="form-btns">
        <el-button type="primary" :loading="loading" style="width: 180px;" @click="handleSubmit">Sign In</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      if (!this.form.username) {
        this.$message.error('Account is required.')
        return false;
      }
      if (!this.form.password) {
        this.$message.error('Password is required.')
        return false;
      }
      if (this.form.username !== 'FlyMe2TheMoon404') {
        this.$message.error('Account does not exist.')
        return false
      }
      if (this.form.password !== 'FlyMe2TheMoon404') {
        this.$message.error('Incorrect password. Please try again.')
        return false
      }
      this.loading = true;
      localStorage.setItem('_cstm_hash', true);
      setTimeout(() => {
        this.loading = false;
        if (this.$route.query.redirect) {
          window.location.href = this.$route.query.redirect
        } else {
          window.location.href = '/'
        }
      }, 1000 * 2.5)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-form {
    max-width: 480px;
    margin: 15vh auto 0;
    padding: 0 30px;
    .logo {
      text-align: center;
    }
    .label {
      margin-top: 24px;
      font-size: 16px;
      text-align: center;
    }
    .mt24 {
      margin-top: 24px;
    }
    .mt12 {
      margin-top: 12px;
    }
    .form-btns {
      margin-top: 24px;
      text-align: right;
    }
  }
</style>
