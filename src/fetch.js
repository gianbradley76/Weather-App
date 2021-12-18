async function fetchData(city) {
	const API_KEY = '3d17cb75b5ada3fe1c289e344222ddea';

	// Initial fetch request for the city
	const response = await fetchAPI(city, API_KEY);

	const latitude = response.coord.lat;
	const longitude = response.coord.lon;
	// Fetches API that will be used
	const weatherFetch = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
		{ mode: 'cors' }
	);
	const weatherData = await weatherFetch.json();

	return weatherData;
}

// Fetches API to get longitude and latitude
async function fetchAPI(city, API_KEY) {
	const initialFetch = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
		{ mode: 'cors' }
	);
	const initialAPI = await initialFetch.json();
	return initialAPI;
}

export { fetchData };
