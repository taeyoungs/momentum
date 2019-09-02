const COORDS = "coords";
const API_KEY = "817ffc0d71bc664fdce604e353473138";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const temparature = json.main.temp;
        const city = json.name;
        weather.innerText = `${temparature} @ ${city}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("fail to get weather info");
}

function findCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function init() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        findCoords();
    } else {
        // LS에 이미 좌표 정보가 있으므로 정보를 기반으로 날씨 정보 호출
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

init();