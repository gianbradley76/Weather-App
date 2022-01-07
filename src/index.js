import { fetchData } from './fetch';

// window.addEventListener('DOMContentLoaded', displayWeather('Manila'));

function displayWeather(data) {
	displayCurrentInfo(data);
	displayHourlyInfo(data.hourly);
}

function displayCurrentInfo(data) {
	document.getElementById('cityName').textContent =
		document.getElementById('cityInput').value;

	showTemp(data.current.temp);
	showMainWeather(data.current.weather[0].main);

	const dataIcon = data.current.weather[0].icon;
	const weatherImg = document.getElementById('weatherIcon');

	weatherImg.src = showIcon(data.current.weather[0].main);
	console.log(data);
}

function displayHourlyInfo(hourlyData) {
	for (let i = 0; i < 5; i++) {
		const unixDateTime = hourlyData[i].dt;
		// Hourly Info Weather Icon
		document.getElementById(`${i}-hourIcon`).src = showIcon(
			hourlyData[i].weather[0].main
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

function showIcon(mainWeather) {
	switch (mainWeather) {
		case 'Thunderstorm':
			return './images/thunderstorm.svg';
		case 'Drizzle':
			return './images/drizzle.svg';
		case 'Rain':
			return './images/rain.svg';
		case 'Snow':
			return './images/snow.svg';
		case 'Clear':
			return './images/clear.svg';
		case 'Clouds':
			return './images/clouds.svg';
		default:
			return `http://openweathermap.org/img/wn/${icon}.png`;
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
	console.log(formatedTime.getHours());
	return formatedTime.toLocaleTimeString([], {
		hour: 'numeric',
	});
}

function showTemp(temp) {
	const currTemp = document.getElementById('currTemp');
	currTemp.textContent = temp;
}

function showMainWeather(mainWeatherData) {
	const mainWeather = document.getElementById('mainWeather');
	mainWeather.textContent = mainWeatherData;
}

// Selecting DOMs for events
const submitCity = document.getElementById('submitCity');
submitCity.addEventListener('click', async () => {
	const cityInput = document.getElementById('cityInput').value;
	const data = await fetchData(cityInput);
	displayWeather(data);
});
