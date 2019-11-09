const weather = new Weather();
const ui = new UI();
document
	.getElementById("submitCountry")
	.addEventListener("click", handleSubmit);
const getRandomCountry = async () => {
	const request = await fetch(
		"https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json"
	);
	const resp = await request.json();
	return resp;
};

function getRandomInRange(from, to, fixed) {
	return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(getLatLong, fail);
} else {
	getRandomCountry().then(countries => {
		weather
			.getWeatherByCountry(
				countries[Math.floor(Math.random() * countries.length)].country
			)
			.then(data => {
				console.log(data);
				ui.displayCard(data.response);
			})
			.catch(err => {
				weather.getWeatherByCountry("Miami").then(data => {
					console.log(data);
					ui.displayCard(data.response);
				});
			});
	});
}
function getLatLong(position) {
	weather
		.getWeatherByLatLon(position.coords.latitude, position.coords.longitude)
		.then(data => ui.displayCard(data.response));
}

function fail() {
	getRandomCountry().then(countries => {
		weather
			.getWeatherByCountry(
				countries[Math.floor(Math.random() * countries.length)].country
			)
			.then(data => {
				ui.displayCard(data.response);
			})
			.catch(err => {
				weather.getWeatherByCountry("Miami").then(data => {
					ui.displayCard(data.response);
				});
			});
	});
}
function handleSubmit(e) {
	const country = document.querySelector("#cityInput").value;
	weather
		.getWeatherByCountry(country)
		.then(data => ui.displayCard(data.response));
	document.querySelector("#cityInput").value = "";
}
