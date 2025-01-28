document.getElementById("getWeather").onclick = function() {
  let city = document.getElementById("city").value;

  if (city === "") {
    document.getElementById("weatherInfo").innerText = "Please type a city name!";
    return;
  }

  let apiKey = "a6504b5303b412907dde2469f1b95f71";
  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.cod === 200) {
        let weather = "City: " + data.name + "\n" +
                      "Weather: " + data.weather[0].description + "\n" +
                      "Temperature: " + data.main.temp + "°C";
        document.getElementById("weatherInfo").innerText = weather;
      } else {
        document.getElementById("weatherInfo").innerText = "City not found. Please try again.";
      }
    })
    .catch(function(error) {
      document.getElementById("weatherInfo").innerText = "Something went wrong. Try again later.";
    });
};
