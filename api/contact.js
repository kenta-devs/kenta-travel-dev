import request from '@/utils/request'

export const contactAdd = (data) => {
    return request({
        url: '/client/home/contractUs',
        method: 'post',
        data
    })
}
