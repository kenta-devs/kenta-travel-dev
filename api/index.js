import request from '@/utils/request'

//获取首页文章
export const getClientArticleList = () => {
    return request({
        url: '/client/article/list',
        method: 'get',
    })
}
//首页内容接口
export const getIndexData = () => {
    return request({
        url: '/client/home/getIndexData',
        method: 'get',
    })
}

// google登录
export function googleLogin(params) {
  return request({
    url: '/auth-code'+params,
    headers: {
      isToken: false
    },
    method: 'get',
  })
}
//首页pages数据
export function dictList(params) {
  return request({
    url: '/client/home/dictList',
    headers: {
      isToken: false
    },
    method: 'get',
    params:params
  })
}

export function sendMsgByBuka(params) {
  return request({
    url: '/sendMsgByBuka',
    headers: {
      isToken: false,
      formData: true,
    },
    method: 'post',
    data:params
  })
}

export function checkMsg(params) {
  return request({
    url: '/checkMsg',
    headers: {
      isToken: false
    },
    method: 'post',
    data:params
  })
}

//收藏casino
export const saveCasino = (params) => {
    return request({
        url: '/client/casino/saveCasino',
        method: 'get',
        params:params
    })
}

//收藏casino
export const cancelSaveCasino = (params) => {
    return request({
        url: '/client/casino/cancelSaveCasino',
        method: 'get',
        params:params
    })
}

//订阅邮箱
export const subscribe = (data) => {
    return request({
        url: '/client/home/subscribe',
        method: 'get',
		params:data
    })
}

