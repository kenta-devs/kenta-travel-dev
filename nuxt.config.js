const axios = require('axios')
const config = require('./config/index.js')
export default {
	ssr: false,
	distDir: 'dist/',
	target: 'server',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'kenta',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: ''
			},
			{
				name: 'format-detection',
				content: 'telephone=no'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1, minimal-ui'
			}
		],
		script: [{
				src: 'https://accounts.google.com/gsi/client',
				mode: 'client'
			},
			// { src: 'https://www.paypal.com/sdk/js?components=buttons,card-fields&client-id=AXaD42mzwwR7djesJiy14wOEz6cAQDPPFJZVrMHfjewuDPNHDly6esM0LqFWdJjuMQLmSa1hrRxkmOXR&currency=EUR', mode: 'client' }
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&cache=clear'
			},
			{ rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'element-ui/lib/theme-chalk/index.css',
		//'swiper/css/swiper.css',
		'~/assets/css/normalize.css',
		'~/assets/css/quill.core.css',
		'~/assets/css/quill.snow.css',
		'~/assets/css/map.scss',
		'~/assets/css/main.scss',
		'~/assets/css/global.scss',
	],
	loading: '@/components/loading.vue',
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{
			src: '@/plugins/rem',
			ssr: false
		},
		'@/plugins/element-ui',
		{
			src: '@/plugins/permission',
			ssr: false
		},
		'@/plugins/swiper',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],
	// Generate
	generate: {
		routes() {
			const requestList = [
				axios.get(`${config.default.VUE_APP_BASE_API}client/article/list`),
				axios.get(`${config.default.VUE_APP_BASE_API}client/destination/slug/list`),
				axios.get(`${config.default.VUE_APP_BASE_API}/client/casino/slug/list`)
			]

			return Promise.all(requestList).then(resList => {
				const list = []

				const data1 = resList[0].data.data || []

				if (data1.length > 0) {
					data1.forEach(item => {
						if (item.slug && !/\s/.test(item.slug)) {
							if (!item.slug.includes('/')) {
								list.push(`/detail/${item.slug}`)
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
								list.push(`/destination/${data2[key]}`)
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
								list.push(`/casino-profile/${data3[key]}`)
							}
						}
					})
				}

				return list
			})
		}
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [/^element-ui/]
	}
}