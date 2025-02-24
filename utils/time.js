const tdaytime = function(day) {
	// 自定义时间
	var diyDate = new Date()
	//加1天
	var date = new Date(diyDate.setDate(diyDate.getDate() + (day ? day : 0)));
	// 拼接日期 yyyy-MM-dd 注意月份要 + 1
	date = (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) + "-" + ((date.getMonth() + 1) > 9 ? date
		.getMonth() + 1 : "0" + (date.getMonth() +
			1)) + "-" + date.getFullYear();

	return date
}

const getday = function(daytime) {
	// 自定义时间
	var diyDate = new Date(daytime)
	// 拼接日期 yyyy-MM-dd 注意月份要 + 1
	var date = (diyDate.getDate() > 9 ? diyDate.getDate() : "0" + diyDate.getDate()) + "-" + ((diyDate.getMonth() +
		1) > 9 ? diyDate.getMonth() + 1 : "0" + (diyDate
		.getMonth() + 1)) + "-" + diyDate.getFullYear();

	return date
}

const getdayTime = function(daytime) {
	// 自定义时间
	var diyDate = new Date(daytime)
	// 拼接日期 yyyy-MM-dd 注意月份要 + 1
	var date = diyDate.getFullYear() + "-" + ((diyDate.getMonth() +
		1) > 9 ? diyDate.getMonth() + 1 : "0" + (diyDate
		.getMonth() + 1)) + "-" + (diyDate.getDate() > 9 ? diyDate.getDate() : "0" + diyDate.getDate());

	return date
}

export default {
	tdaytime,
	getday,
	getdayTime
}