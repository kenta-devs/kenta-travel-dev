import request from '@/utils/request'

export const getDestinationList = (data) => {
    return request({
        url: '/client/destination/list',
        method: 'get',
        params: data
    })
}
export const destinationPopular = () => {
    return request({
        url: '/client/destination/getPopular',
        method: 'get',
        headers: {
            isToken: false
        },
    })
}
export const destinationDetail = (data) => {
    return request({
        url: '/client/destination/detail',
        method: 'get',
        params: data
    })
}
// client/destination/detail/slug?slug=new-york
export const destinationSlugDetail = (data) => {
    return request({
        url: '/client/destination/detail/slug',
        method: 'get',
        params: data
    })
}
export const destinationLandmarks = (data) => {
    return request({
        url: '/client/destination/landmarks',
        method: 'get',
        headers: {
            isToken: false
        },
        params: data
    })
}

export const destinationAdd = (data) => {
    return request({
        url: '/system/destination',
        method: 'post',
        data
    })
}
export const destinationEdit = (data) => {
    return request({
        url: '/system/destination',
        method: 'put',
        data
    })
}

export const destinationDelete = (id) => {
    return request({
        url: '/system/destination/' + id,
        method: 'delete',
    })
}

export const orderCreate = (data) => {
    return request({
        url: '/client/order/create',
        method: 'post',
        data
    })
}


