import request from '@/utils/request'

//最近浏览
export const recentlyViewed = (data) => {
    return request({
        url: '/client/dashboard/recentlyViewed',
        method: 'get',
        params:data
    })
}
//查询收藏
export const dashboardSaved = (data) => {
    return request({
        url: '/client/dashboard/saved',
        method: 'get',
        params:data
    })
}
// 账户设置
export const accountSetting = (data) => {
    return request({
        url: '/client/dashboard/accountSetting',
        method: 'get',
        params:data
    })
}
//账户回显
export const getName = (data) => {
    return request({
        url: '/client/dashboard/getName',
        method: 'get',
		params:data
    })
}
//删除账户
export const deleteAccount = (data) => {
    return request({
        url: '/client/dashboard/deleteAccount',
        method: 'get',
		params:data
    })
}
