import request from '@/utils/request'

export const events = (params) => {
    return request({
        url: '/kenta-hb/event/v1/events',
        method: 'post',
		data:params
    })
}
