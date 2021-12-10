async function getWeather() {
	const response = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=3d17cb75b5ada3fe1c289e344222ddea`,
		{ mode: 'cors' }
	);
	const weatherData = await response.json();
	console.log(weatherData);
}

getWeather();
