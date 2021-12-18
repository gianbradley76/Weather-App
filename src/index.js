import { fetchData } from './fetch';

// window.addEventListener('DOMContentLoaded', displayWeather('Manila'));

function displayWeather(data) {
	showTemp(data.current.temp);
	showMainWeather(data.current.weather[0].main);

	const dataIcon = data.current.weather[0].icon;
	const weatherImg = document.getElementById('weatherIcon');

	weatherImg.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;

	console.log(data.hourly);
	displayHourlyInfo(data.hourly);
}

function displayHourlyInfo(hourlyData) {
	for (let i = 0; i < 5; i++) {
		document.querySelector(`.hour-${i}`).innerText = hourlyData[i].feels_like;
	}
}

// Selecting DOMs for events
const submitCity = document.getElementById('submitCity');

function showTemp(temp) {
	const currTemp = document.getElementById('currTemp');
	currTemp.innerText = temp;
}

function showMainWeather(mainWeatherData) {
	const mainWeather = document.getElementById('mainWeather');
	mainWeather.innerText = mainWeatherData;
}

submitCity.addEventListener('click', async () => {
	const cityInput = document.getElementById('cityInput').value;
	const data = await fetchData(cityInput);
	displayWeather(data);
	console.log('final: ', data);
});
