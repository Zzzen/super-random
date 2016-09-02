/**
 * @param {number} delay -ms
 * @return {Promise}
 **/
module.exports = delay => new Promise(resolve => {
	function iter(num, end, interval) {
		if (Date.now() >= end) {
			resolve(num);
		} else {
			setTimeout(iter, interval, num + 1, end, interval / 2);
		}
	}

	iter(0, Date.now() + delay, delay / 2);
});