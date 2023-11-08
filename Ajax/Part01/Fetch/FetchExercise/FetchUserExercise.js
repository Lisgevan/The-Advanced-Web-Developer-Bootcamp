let btn = document.querySelector("#btn");
let avatar = document.querySelector("#avatar");
let fullname = document.querySelector("#fullname");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");

let url = "https://randomuser.me/api/";

btn.addEventListener("click", () => {
	fetch(url).then(handleErrors).then(parseJSON).then(updateProfile).catch(printError);
});

const handleErrors = response => {
	if (!response.ok) throw Error(response.status);
	return response;
};
const parseJSON = response => {
	return response.json();
};
const updateProfile = response => {
	let data = response.results[0];
	console.log(data);
	avatar.src = data.picture.medium;
	fullname.innerText = `${data.name.first} ${data.name.last}`;
	username.innerText = data.login.username;
	email.innerText = data.email;
	city.innerText = data.location.city;
};
const printError = error => {
	console.error(error);
};
