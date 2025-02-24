import request from '@/utils/request'
import qs from 'querystring'
import { getUserId } from '@/utils/auth'
import { ClientId, ClientSecret } from '@/config/paypal'

// const prefix = 'https://api-m.sandbox.paypal.com'
const prefix = 'https://api-m.paypal.com'

export const createPaypalToken = (reqId) => {
  return request({
    url: `${prefix}/v1/oauth2/token`,
    method: 'post',
    auth: {
      username: ClientId,
      password: ClientSecret,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'PayPal-Request-Id': reqId,
    },
    data: qs.stringify({
      grant_type: 'client_credentials',
    }),
    isPaypal: true
  })
}

export const createPaypalOrder = (data, token, reqId) => {
  return request({
    url: `${prefix}/v2/checkout/orders`,
    method: 'post',
    headers: {
      // 'PayPal-Request-Id': reqId,
    },
    data,
    accessToken: token,
    isPaypal: true
  })
}

export const authPaypalOrder = (orderId, data, token) => {
  return request({
    url: `${prefix}/v2/checkout/orders/${orderId}/authorize`,
    method: 'post',
    data,
    accessToken: token,
    isPaypal: true,
  });
}

export const capturePaypalOrder = (orderId, token) => {
  return request({
    url: `${prefix}/v2/checkout/orders/${orderId}/capture`,
    method: 'post',
    data: {},
    accessToken: token,
    isPaypal: true
  });
}

export const getMyOrders = () => {
  const userId = getUserId();
  return request({
    url: `/client/api/order/memberId?id=${userId}`,
    method: 'get'
  });
}
export const cancelOrderComplete = () => {
  return request({
    url: '/client/api/order/',
    method: 'post'
  });
}
export const updateOrderCancelStatus = (orderId) => {
  return request({
    url: `/client/api/order/cancalOrder?id=${orderId}`,
    method: 'get'
  })
}
