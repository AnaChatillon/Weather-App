function citySearch(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  let city = searchCityInput.value;
  let apiKey = "be22fb4bc4c7fb43oa29a90de3d443t3";

  if (city) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemp);

    let h1 = document.querySelector("h1");
    h1.innerHTML = city;
  }
}

function displayTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let currentTemperature = document.querySelector(".temperature");
  currentTemperature.innerHTML = temp;
}

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", citySearch);

// Show the curruent time (Week day + hour & minutes)

let now = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = week[now.getDay()];
let minutes = now.getMinutes().toString().padStart(2, "0");
let hours = now.getHours().toString().padStart(2, "0");

let currentTime = document.querySelector(".currentTime");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
