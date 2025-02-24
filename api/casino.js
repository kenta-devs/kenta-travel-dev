import request from '@/utils/request'

export const getCasinoList = (data) => {
    return request({
        url: '/system/casino/list',
        method: 'get',
        params: data
    })
}

export const casinoAdd = (data) => {
    return request({
        url: '/system/casino',
        method: 'post',
        data
    })
}
export const casinoEdit = (data) => {
    return request({
        url: '/system/casino',
        method: 'put',
        data
    })
}

export const casinoDelete = (id) => {
    return request({
        url: '/system/casino/' + id,
        method: 'delete',
    })
}

export const casinoDetail = (data) => {
    return request({
        url: '/client/casino/detail',
        method: 'get',
        params: data,
    })
}
export const casinoDetailSlug = (data) => {
    return request({
        url: '/client/casino/query',
        method: 'get',
        params: data,
    })
}
export const casinoPromoted = () => {
    return request({
        url: '/client/casino/promoted',
        method: 'get',
    })
}

// export const articleSetting = (data) => {
//     return request({
//         url: '/system/article/setting/',
//         method: 'post',
//         data
//     })
// }