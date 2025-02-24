<template>
  <div class="btn-google">
    <button class="btn" @click="onSignIn">Authorize with Google</button>
  </div>
</template>

<script>
// import { google } from "googleapis";

export default {
  data: () => ({
    client: null,
    msg: null
  }),
  mounted () {

  },
  methods: {
    onSignIn (googleUser) {
      //   if (google) {
      //     this.client = google.accounts.oauth2.initCodeClient({
      //       client_id: '16800385999-8c2rie3crqe9npuou97ubripn199cr4a.apps.googleusercontent.com',
      //       scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
      //       ux_mode: 'redirect',
      //       redirect_uri: "https://casino-blog.vercel.app/auth",
      //       state: "YOUR_BINDING_VALUE"
      //     });
      //   }

      this.msg = this.client.requestCode()
    },
  }
}
  </script>

<style lang="scss" scoped>
.btn-google {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  .btn {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
}
</style>