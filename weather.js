class Weather {
	constructor() {
		this.api_key = "dd91a9e6a83c49a6f37752ea71c27844";
	}
	async getWeatherByCountry(country) {
		const request = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${
				this.api_key
			}`
		);
		const response = await request.json();
		return {
			response
		};
	}
	async getWeatherByLatLon(latitude, longitude) {
		const request = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
				this.api_key
			}`
		);
		const response = await request.json();
		return {
			response
		};
	}
}
