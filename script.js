/**
 * Weather App
 */

// API_KEY
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dde556fb69msha1fa08987b33130p13b376jsn285747eeb2da',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
}

/**
 * Retrieve weather data from an API
 */
getWeatherData = (city) => {
  const weatherPromise = fetch('https://open-weather13.p.rapidapi.com/city/' + city, options)
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  const weatherData = getWeatherData(city)
    .then((result) => {
      console.log(result)
      showWeatherData(result);
    }).catch((error) => {
      console.log(error);
      console.log("Something happend");
    })
}

fahrenheitToCelsius = (f) => ((f - 32) / 1.8).toFixed(2)


/**
 * Show the weather data in HTML
 * °F = °C * 1.8 + 32
 * C = (°F -32) / 1.8
 */
showWeatherData = (weatherData) => {
  console.log(weatherData);
  const cityName = weatherData.name
  const weather = weatherData.weather[0].main
  const temp = fahrenheitToCelsius(weatherData.main.temp)
  const minTemp = fahrenheitToCelsius(weatherData.main.temp_min)
  const maxTemp = fahrenheitToCelsius(weatherData.main.temp_max)

  document.querySelector('#city-name').innerText = cityName
  document.querySelector('#weather-type').innerText = weather
  document.querySelector('#temp').innerHTML = `<span>${temp} &#176C</span>`
  document.querySelector('#min-temp').innerHTML = `<span>${minTemp} &#176C</span>`
  document.querySelector('#max-temp').innerHTML = `<span>${maxTemp} &#176C</span>`

}

