import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken, getRedirect, setRedirect, getUserId, setUserId, removeUserId, getUserName, setUserName, removeUserName, getMemberId, setMemberId, removeMemberId } from '@/utils/auth'
import Cookies from 'js-cookie'
Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    redirect: '/',
    token: getToken(),
    name: getUserName(),
    id: getUserId(),
    memberId: getMemberId(),
    avatar: '',
  },
  mutations: {
    SET_REDIRECT: (state, redirect) => {
      state.redirect = redirect
      setRedirect(redirect);
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
  },
  actions: {
    nuxtServerInit({ commit }, { req, app }) {
      console.log("刷新都会执行？");
      const userId = req && req.headers && req.headers.cookie && req.headers.cookie.split(';').find(cookie => cookie.trim().startsWith('userId='));
      const redirect = req && req.headers && req.headers.cookie && req.headers.cookie.split(';').find(cookie => cookie.trim().startsWith('redirect='));
      const userName = req && req.headers && req.headers.cookie && req.headers.cookie.split(';').find(cookie => cookie.trim().startsWith('userName='));
      const token = req && req.headers && req.headers.cookie && req.headers.cookie.split(';').find(cookie => cookie.trim().startsWith('Admin-Token='));
      // console.log(user);
      if (userId) {
        commit('SET_ID', userId.split('=')[1]);
      }
      if (redirect) {
        commit('SET_REDIRECT', redirect.split('=')[1]);
      }
      if (userName) {
        commit('SET_NAME', userName.split('=')[1]);
        console.log(userName.split('=')[1])
      }
      if (token) {
        commit('SET_TOKEN', token.split('=')[1]);
      }
    },
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.email.trim()
      const password = userInfo.password
      // const code = userInfo.code
      // const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        login(username, password).then(res => {
          setToken(res.token)
          sessionStorage.setItem("token", res.token)
          commit('SET_TOKEN', res.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          const user = res.data
          const avatar = (user.avatar == "" || user.avatar == null) ? require("@/assets/images/logo.png") : process.env.VUE_APP_BASE_API + user.avatar;
          commit('SET_NAME', user.memberName)
          commit('SET_ID', user.id)
          setUserName(user.memberName);
          setUserId(user.id);
          commit('SET_AVATAR', avatar)
          sessionStorage.setItem("user_id", user.id)
          sessionStorage.setItem("user_name", user.memberName)
          sessionStorage.setItem('user_ip', user.ipaddr)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          removeToken()
          removeUserId()
          removeUserName()
          commit('SET_TOKEN', '')
          commit('SET_ID', '')
          commit('SET_NAME', '')
          sessionStorage.removeItem("user_id");
          sessionStorage.removeItem("user_name");
          sessionStorage.removeItem("token");
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        removeToken()
        removeUserId()
        removeUserName()
        commit('SET_TOKEN', '')
        commit('SET_ID', '')
        commit('SET_NAME', '')
        sessionStorage.removeItem("user_id");
        sessionStorage.removeItem("user_name");
        sessionStorage.removeItem("token");
        resolve()
      })
    }
  },
  getters
})

