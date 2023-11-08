let btn = document.querySelector("button");
let span = document.querySelector("#price");

//listen for clicks
btn.addEventListener("click", function () {
	//make the request
	let XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function () {
		if (XHR.readyState == 4 && XHR.status == 200) {
			let data = JSON.parse(XHR.responseText);
			span.textContent = `${data.bpi.EUR.rate} ${data.bpi.EUR.code}`;
		}
	};

	XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
	XHR.send();
});
