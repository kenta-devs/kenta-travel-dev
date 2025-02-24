import request from '@/utils/request'

export const getArticleList = (data) => {
    return request({
        url: '/system/article/list',
        method: 'get',
        params: data
    })
}

export const articleAdd = (data) => {
    return request({
        url: '/system/article',
        method: 'post',
        data
    })
}
export const articleEdit = (data) => {
    return request({
        url: '/system/article',
        method: 'put',
        data
    })
}

export const articleDelete = (id) => {
    return request({
        url: '/system/article/' + id,
        method: 'delete',
    })
}

export const articleDetail = (data) => {
    return request({
        url: '/client/article/detail/',
        method: 'get',
        params: data
    })
}

export const articleDetailSlug = (data) => {
    return request({
        url: 'client/article/query',
        method: 'get',
        params: data
    })
}

export const articlePromoted = () => {
    return request({
        url: '/client/article/promoted',
        method: 'get',
    })
}

export const articleSetting = (data) => {
    return request({
        url: '/system/article/setting',
        method: 'get',
        params: data
    })
}
