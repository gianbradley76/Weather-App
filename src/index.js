import { fetchData } from './fetch';

// window.addEventListener('DOMContentLoaded', displayWeather('Manila'));

function displayWeather(data) {
	showTemp(data.current.temp);
	showMainWeather(data.current.weather[0].main);

	const dataIcon = data.current.weather[0].icon;
	const weatherImg = document.getElementById('weatherIcon');

	weatherImg.src = fetchIconURL(dataIcon);

	displayHourlyInfo(data.hourly);
}

function displayHourlyInfo(hourlyData) {
	for (let i = 0; i < 5; i++) {
		const unixDateTime = hourlyData[i].dt;
		// Hourly Info Weather Icon
		document.getElementById(`${i}-hourIcon`).src = fetchIconURL(
			hourlyData[i].weather[0].icon
		);
		// Hourly Info Date
		document.getElementById(`${i}-hourDate`).textContent =
			convertDate(unixDateTime);
		// Hourly Info Time
		document.getElementById(`${i}-hourTime`).textContent =
			convertTime(unixDateTime);
		// Hourly Info Temperature
		document.getElementById(`${i}-hourTemp`).textContent = hourlyData[i].temp;
		// Hourly Info Weather
		document.getElementById(`${i}-hourMain`).textContent =
			hourlyData[i].weather[0].main;
	}
}

function fetchIconURL(icon) {
	return `http://openweathermap.org/img/wn/${icon}.png`;
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
});
