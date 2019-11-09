class UI {
	constructor() {
		this.app = document.querySelector("#app");
	}
	displayCard(data) {
		this.app.innerHTML = `
        <div class="card mx-auto mt-5 shadow-lg bg-info" style="width: 20rem;">
        <div class="card-body">
            <h3 class="card-title text-center text-light">${data.name}</h3>
            <h6 class="card-title text-dark text-center">${data.weather[0].description.toUpperCase()}</h6>
            <h6 class="card-title text-light text-center">${parseFloat(
				data.main.temp.toFixed(2)
			)} F (${(
			(parseFloat(data.main.temp.toFixed(2)) - 32) /
			1.8
		).toFixed(2)} C)</h6>
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <img src="https://openweathermap.org/img/wn/${
					data.weather[0].icon
				}.png" alt="weather icon"
                    class="img-fluid d-flex justify-content-center">
                <ul class="list-group mb-4 mt-2">
                    <li class="list-group-item">Humidity: ${
						data.main.humidity
					}%</li>
                    <li class="list-group-item">Wind Speed: ${
						data.wind.speed
					} MPH</li>
                    <li class="list-group-item">Pressure: ${
						data.main.pressure
					} mbar</li>
                    <li class="list-group-item">Longitude: ${
						data.coord.lon
					}, Latitude: ${data.coord.lat}</li>
                </ul>
                <a href="#" class="btn btn-primary text-center" data-toggle="modal" data-target="#locationModal">Change
                    Location</a>
            </div>

        </div>
    </div>
        `;
	}
}
