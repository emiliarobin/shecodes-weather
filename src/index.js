function formatDate(date) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekdays[date.getDay()];
  let hr = date.getHours();
  let min = date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  return `${day} ${hr}:${min}`;
}

let dayTime = document.querySelector("#day-time");
let today = new Date();
dayTime.innerHTML = formatDate(today);

let apiKey = "0o4ed1e90203t4aebcd31fcfe41e7f10";
let searchInput = document.querySelector("#searchInput");

function getTemp(event) {
  event.preventDefault();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTempCity);
}

function displayTempCity(response) {
  let temp = document.querySelector("#temp");
  let currentTemp = response.data.temperature.current;
  temp.innerHTML = Math.round(currentTemp);

  let cityInput = document.querySelector("#searchInput");
  let city = document.querySelector("#city");
  city.innerHTML = cityInput.value;
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", getTemp);
