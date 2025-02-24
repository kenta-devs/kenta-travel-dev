import request from '@/utils/request'

const HOTEL_API_V2 = 'https://admin.kenta.travel/api/b2b/v3'
const HOTEL_API_V3 = 'https://admin.kenta.travel/api/public/v1'

export function getHotelInfo(data) {
  return request.post('/hotel/info/', data, {
    baseURL: HOTEL_API_V2,
    isWorldota: true
  })
}
export function getHotelRooms(data) {
  return request.post('/search/hp/', data, {
    baseURL: HOTEL_API_V2,
    isWorldota: true
  })
}
export async function getUserIp() {
  const user_ip = sessionStorage.getItem('user_ip')
  try {
    if (user_ip) {
      return JSON.parse(user_ip)
    }
  } catch (e) {}
  const res = await request.get('/client/api/getIP')
  sessionStorage.setItem('user_ip', JSON.stringify(res.data))
  return res.data
}
export function createOrderForm(data) {
  return request.post('/hotel/order/booking/form/', data, {
    baseURL: HOTEL_API_V2,
    isWorldota: true
  })
}
export function createCreditToken(data) {
  return request.post('/manage/init_partners', data, {
    baseURL: HOTEL_API_V3,
    isPayota: true
  })
}
export function postBookingFinish(data) {
  return request.post('/hotel/order/booking/finish/', data, {
    baseURL: HOTEL_API_V2,
    isWorldota: true
  })
}
export function checkBookingFinishStatus(data) {
  return request.post('/hotel/order/booking/finish/status/', data, {
    baseURL: HOTEL_API_V2,
    isWorldota: true
  })
}
export function postDataServer(data) {
  return request.post('/client/api/order/generate', data)
}
export function cancelBookingOrder(data) {
  return request.post(`${HOTEL_API_V2}/hotel/order/cancel/`, data, {
    baseURL: HOTEL_API_V2,
    isWorldota: true,
  });
}
