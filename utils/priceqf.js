const addThousandsSeparator = function(number) {
	console.log(number)
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default {
	addThousandsSeparator
}