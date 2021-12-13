async function fetchData(city) {
	const API_KEY = '3d17cb75b5ada3fe1c289e344222ddea';
	const response = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
		{ mode: 'cors' }
	);
	const weatherData = await response.json();
	console.log(weatherData);
	return weatherData;
}

export { fetchData };
