import { fetchData } from './fetch';

// window.addEventListener('DOMContentLoaded', displayWeather('Manila'));

function displayWeather(city) {
	fetchData(city).then((data) => {
		showTemp(data.main.temp);
		showMainWeather(data.weather[0].main);

		const dataIcon = data.weather[0].icon;
		const weatherImg = document.getElementById('weather-img');

		weatherImg.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;
	});
}

// Selecting DOMs for events
const form = document.querySelector('.city-form');

function showTemp(temp) {
	const currTemp = document.getElementById('curr-temp');
	currTemp.innerText = temp;
}

function showMainWeather(mainWeatherData) {
	const mainWeather = document.getElementById('main-weather');
	mainWeather.innerText = mainWeatherData;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const cityInput = document.getElementById('city-input').value;
	fetchData(cityInput).then((data) => {
		showTemp(data.main.temp);
		showMainWeather(data.weather[0].main);
	});
	form.reset();
});
