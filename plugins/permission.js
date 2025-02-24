import {
	getToken
} from '@/utils/auth'
import {
	isRelogin
} from '@/utils/request'
import axios from 'axios'
import config from '../config/index.js'


const whiteList = [

	// 新增
	'/engPage',
	'/tripPage',
	'/celtapage',
	'/vigopage',
	'/Valenciapage',
	'/eventlPage',
	'/hotelPage',
	'/checkoutPage',
	// -----新增------

	'/', '/index', '/login', '/loginbypass', '/password', '/privacy-policy', '/recover-password',
	'/terms-conditions', '/auth', '/custom-trip', '/custom-trip-step1', '/about', '/blog', '/blog-article',
	'/casino-profile', '/contact', '/cookie-policy', '/destination', '/create', '/twitter', '/ticket', '/menu-app',
	'/ticket-detail', '/mobileIndexDestination', '/mobileIndexDate', '/mobileIndexGuest', '/comingSoon', '/detail',
	'/destination/new-york','/engpage','/trippage',
	'/celtaPage',
	'/vigoPage',
	'/ValenciaPage',
	'/hotelpage'

]
export default ({
	app,
	store,
	route,
	redirect,
	params,
	query
}) => {

	// app：vue 实例
	app.router.beforeEach((to, from, next) => {
		window.whiteList = whiteList

		const requestList = [
			axios.get(`${config.VUE_APP_BASE_API}client/article/list`),
			axios.get(`${config.VUE_APP_BASE_API}client/destination/slug/list`),
			axios.get(`${config.VUE_APP_BASE_API}/client/casino/slug/list`)
		]

		Promise.all(requestList).then(resList => {
			const data1 = resList[0].data.data || []

			if (data1.length > 0) {
				data1.forEach(item => {
					if (item.slug && !/\s/.test(item.slug)) {
						if (!item.slug.includes('/')) {
							if (!window.whiteList.includes(`/detail/${item.slug}`)) {
								whiteList.push(`/detail/${item.slug}`)
								window.whiteList.push(`/detail/${item.slug}`)
							}
							if (!window.whiteList.includes(`/detail/${item.slug}/`)) {
								whiteList.push(`/detail/${item.slug}/`)
								window.whiteList.push(`/detail/${item.slug}/`)
							}
						}
					}
				});
			}

			const data2 = resList[1].data
			const keys2 = Object.keys(data2)

			if (keys2.length > 0) {
				keys2.forEach(key => {
					if (data2[key] && !/\s/.test(data2[key])) {
						if (!data2[key].includes('/')) {
							if (!window.whiteList.includes(`/destination/${data2[key]}`)) {
								whiteList.push(`/destination/${data2[key]}`)
								window.whiteList.push(`/destination/${data2[key]}`)
							}
							if (!window.whiteList.includes(`/destination/${data2[key]}/`)) {
								whiteList.push(`/destination/${data2[key]}/`)
								window.whiteList.push(`/destination/${data2[key]}/`)
							}
						}
					}
				})
			}

			const data3 = resList[2].data
			const keys3 = Object.keys(data3)

			if (keys3.length > 0) {
				keys3.forEach(key => {
					if (data3[key] && !/\s/.test(data3[key])) {
						if (!data3[key].includes('/')) {
							if (!window.whiteList.includes(`/casino-profile/${data3[key]}`)) {
								whiteList.push(`/casino-profile/${data3[key]}`)
								window.whiteList.push(`/casino-profile/${data3[key]}`)
							}
							if (!window.whiteList.includes(`/casino-profile/${data3[key]}/`)) {
								whiteList.push(`/casino-profile/${data3[key]}/`)
								window.whiteList.push(`/casino-profile/${data3[key]}/`)
							}
						}
					}
				})
			}

			if (to.name === 'order-id') {
				const id = to.params.id
				if (!window.whiteList.includes(`/order/${id}`)) {
					window.whiteList.push(`/order/${id}`)
				}
			}

			if (to.name === 'detail-id') {
				const params = to.params

				if (sessionStorage.getItem('baid')) {
					params.baid = parseInt(sessionStorage.getItem('baid'))
				}
			}

			if (to.name === 'destination-id') {
				const params = to.params

				if (sessionStorage.getItem('destination-params')) {
					console.log(sessionStorage.getItem('destination-params'), 1)
					const input = JSON.parse(sessionStorage.getItem('destination-params'))

					params.destinationId = input.destinationId || ''
					params.destinationName = input.destinationName || ''
					params.dateType = input.dateType || ''
					params.date = input.date || ''
					params.gj = input.gj || ''
					params.selectedMonth = input.selectedMonth || ''
					params.guestList = input.guestList || ''
				}
			}

			if (to.name === 'casino-profile-id') {
				const params = to.params

				if (sessionStorage.getItem('cpid')) {
					params.cid = parseInt(sessionStorage.getItem('cpid'))
				}
			}

			document.querySelector("body").setAttribute("style", "overflow: auto !important;")
			if (getToken()) {
				/* has token*/
				if (to.path === '/login') {
					next({
						path: '/'
					})
				} else {
					if (store.getters.id) {
						isRelogin.show = true
						// 判断当前用户是否已拉取完user_info信息
						store.dispatch('GetInfo').then(() => {
							isRelogin.show = false
							next({
								...to,
								replace: true
							}) // hack方法 确保addRoutes已完成
						}).catch(err => {
							store.dispatch('FedLogOut').then(() => {
								Message.error(err)
								next({
									path: '/'
								})
							})
						})
					} else {
						next()
					}
				}
			} else {
				next()
				// 没有token
				// if (window.whiteList.includes(to.path)) {
				// 	// 在免登录白名单，直接进入
				// 	next()
				// } else if (to.name) {
				// 	next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
				// }
			}
		})


	});

	app.router.afterEach((transition) => {
		// if (!localStorage.getItem('_cstm_hash') && transition.name && transition.name !== 'loginbypass') {
		// 	window.location.href = '/loginbypass'
		// }
		if (transition.name === 'detail-id') {
			const params = transition.params

			if (sessionStorage.getItem('baid')) {
				params.baid = parseInt(sessionStorage.getItem('baid'))
			}
		}

		if (transition.name === 'destination-id' || transition.name === 'hotel-id') {
			const params = transition.params

			if (sessionStorage.getItem('destination-params')) {
				console.log(sessionStorage.getItem('destination-params'))
				const input = JSON.parse(sessionStorage.getItem('destination-params'), 2)

				params.destinationId = input.destinationId || ''
				params.destinationName = input.destinationName || ''
				params.destinationSlug = input.destinationSlug || ''
				params.dateType = input.dateType || ''
				params.date = input.date || ''
				params.selectedMonth = input.selectedMonth || ''
				params.guestList = input.guestList || ''
			}
		}

		if (transition.name === 'casino-profile-id') {
			const params = transition.params

			if (sessionStorage.getItem('cpid')) {
				params.cid = parseInt(sessionStorage.getItem('cpid'))
			}
		}
	})
}
