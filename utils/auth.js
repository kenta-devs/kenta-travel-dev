import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return localStorage.getItem("token")//Cookies.get(TokenKey)
}

export function setToken(token) {
  //return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem("token")
  //return Cookies.remove(TokenKey)
}
export function getRedirect() {
  //return localStorage.getItem('redirect')
}

export function setRedirect(redirect) {
  //return Cookies.set('redirect', redirect)
}
export function getUserId() {
  return localStorage.getItem('user_id')
}

export function setUserId(id) {
  //return Cookies.set('userId', id)
}

export function removeUserId() {
  return localStorage.removeItem('user_id')
}


export function getUserName() {
  return localStorage.getItem('user_name')
}

export function setUserName(name) {
  //return Cookies.set('userName', name)
}

export function removeUserName() {
  return localStorage.removeItem('user_name')
}

export function getMemberId() {
  return localStorage.getItem('user_id')
}

export function setMemberId(memberId) {
  return localStorage.setItem('user_id', user_id)
}

export function removeMemberId() {
  return localStorage.removeItem('user_id')
}
