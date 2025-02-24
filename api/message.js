import request from '@/utils/request'

export const getLatest = (data) => {
    return request({
        url: '/client/message/getLatest',
        method: 'get',
        params:data
    })
}

export const loadMessage = (data) => {
    return request({
        url: '/client/message/loadMessage',
        method: 'get',
        params:data
    })
}

export const sendMessage = (data) => {
    return request({
        url: '/client/message/sendMessage',
        method: 'get',
        params:data
    })
}