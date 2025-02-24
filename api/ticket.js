import request from '@/utils/request'


export const casinoPromoted = () => {
  return request({
    url: '/client/casino/promoted',
    method: 'get',
  })
}
// 列表接口
export const ticketList = (data) => {
  return request({
    url: '/client/ticket/list',
    method: 'post',
    data
  })
}
// 详情
export const ticketDetail = (data) => {
  return request({
    url: '/client/ticket/GetById',
    method: 'get',
    params: data,
  })
}
// 查询位置
export const getLoactions = () => {
  return request({
    url: '/client/ticket/getLoactions',
    method: 'get',
  })
}
// 查询体育场
export const getStadium = () => {
  return request({
    url: '/client/ticket/getStadium',
    method: 'get',
  })
}