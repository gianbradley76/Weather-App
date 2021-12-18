/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\nasync function fetchData(city) {\r\n\tconst API_KEY = '3d17cb75b5ada3fe1c289e344222ddea';\r\n\r\n\t// Initial fetch request for the city\r\n\tconst response = await fetchAPI(city, API_KEY);\r\n\r\n\tconst latitude = response.coord.lat;\r\n\tconst longitude = response.coord.lon;\r\n\t// Fetches API that will be used\r\n\tconst weatherFetch = await fetch(\r\n\t\t`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,\r\n\t\t{ mode: 'cors' }\r\n\t);\r\n\tconst weatherData = await weatherFetch.json();\r\n\r\n\treturn weatherData;\r\n}\r\n\r\n// Fetches API to get longitude and latitude\r\nasync function fetchAPI(city, API_KEY) {\r\n\tconst initialFetch = await fetch(\r\n\t\t`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,\r\n\t\t{ mode: 'cors' }\r\n\t);\r\n\tconst initialAPI = await initialFetch.json();\r\n\treturn initialAPI;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://Weather-App/./src/fetch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"./src/fetch.js\");\n\r\n\r\n// window.addEventListener('DOMContentLoaded', displayWeather('Manila'));\r\n\r\nfunction displayWeather(data) {\r\n\tshowTemp(data.current.temp);\r\n\tshowMainWeather(data.current.weather[0].main);\r\n\r\n\tconst dataIcon = data.current.weather[0].icon;\r\n\tconst weatherImg = document.getElementById('weatherIcon');\r\n\r\n\tweatherImg.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;\r\n\r\n\tconsole.log(data.hourly);\r\n\tdisplayHourlyInfo(data.hourly);\r\n}\r\n\r\nfunction displayHourlyInfo(hourlyData) {\r\n\tfor (let i = 0; i < 5; i++) {\r\n\t\tdocument.querySelector(`.hour-${i}`).innerText = hourlyData[i].feels_like;\r\n\t}\r\n}\r\n\r\n// Selecting DOMs for events\r\nconst submitCity = document.getElementById('submitCity');\r\n\r\nfunction showTemp(temp) {\r\n\tconst currTemp = document.getElementById('currTemp');\r\n\tcurrTemp.innerText = temp;\r\n}\r\n\r\nfunction showMainWeather(mainWeatherData) {\r\n\tconst mainWeather = document.getElementById('mainWeather');\r\n\tmainWeather.innerText = mainWeatherData;\r\n}\r\n\r\nsubmitCity.addEventListener('click', async () => {\r\n\tconst cityInput = document.getElementById('cityInput').value;\r\n\tconst data = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchData)(cityInput);\r\n\tdisplayWeather(data);\r\n\tconsole.log('final: ', data);\r\n});\r\n\n\n//# sourceURL=webpack://Weather-App/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;