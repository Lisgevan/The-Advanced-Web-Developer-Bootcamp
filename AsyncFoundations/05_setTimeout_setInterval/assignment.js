let countDown = sec => {
	let counter = setInterval(() => {
		console.log(`Time left: ${sec}`);
		sec--;
		if (sec < 0) {
			clearInterval(counter);
			console.log(`Ring Ring Ring`);
		}
	}, 1000);
};
