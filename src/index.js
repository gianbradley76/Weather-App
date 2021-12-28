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
		document.getElementById(`${i}-hourDate`).textContent = convertDate(
			hourlyData[i].dt
		);
		document.getElementById(`${i}-hourTime`).textContent = convertTime(
			hourlyData[i].dt
		);
		document.getElementById(`${i}-hourTemp`).textContent = hourlyData[i].temp;
		document.getElementById(`${i}-hourMain`).textContent =
			hourlyData[i].weather[0].main;
	}
}

function convertDate(unixFormat) {
	const formatedDate = new Date(unixFormat * 1000);
	return formatedDate.toLocaleDateString([], {
		month: 'short',
		day: 'numeric',
	});
}

function convertTime(unixFormat) {
	const formatedTime = new Date(unixFormat * 1000);
	return formatedTime.toLocaleTimeString([], {
		hour: 'numeric',
	});
}

// Selecting DOMs for events
const submitCity = document.getElementById('submitCity');

function showTemp(temp) {
	const currTemp = document.getElementById('currTemp');
	currTemp.textContent = temp;
}

function showMainWeather(mainWeatherData) {
	const mainWeather = document.getElementById('mainWeather');
	mainWeather.textContent = mainWeatherData;
}

submitCity.addEventListener('click', async () => {
	const cityInput = document.getElementById('cityInput').value;
	const data = await fetchData(cityInput);
	displayWeather(data);
	console.log('final: ', data);
});
