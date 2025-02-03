document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherButton = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.querySelector(".city-name");
    const temperatureDisplay = document.querySelector(".temperature");
    const weatherDescription = document.querySelector(".description");
    const errorMsg = document.querySelector(".error-message"); 
    const windSpeed= document.querySelector(".windSpeed");

    const API_KEY = "1a53cdea2c81bb3355f13e161df4f235"; 

    
    async function getWeather() {
        const city = cityInput.value.trim();
        if (!city) return;

        try {
            const weatherData = await fetchData(city);
            displayData(weatherData);
        } catch (err) {
            console.error(err);
            displayError();
        }
    }

    // Add event listener to button
    getWeatherButton.addEventListener('click', getWeather);

    // Listen for "Enter" key press in input field
    cityInput.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            getWeather();
        }
    });

    async function fetchData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        return await response.json();
    }

    function displayData(data) {
        console.log(data);
        //check the api response in the console to know the properties to access
        const { name, main, weather, wind } = data;
        cityName.textContent = `${name}`;
        temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
        weatherDescription.textContent = `Condition: ${weather[0].description}`;
        windSpeed.textContent = `Wind Speed: ${wind.speed} m/s`;

        weatherInfo.classList.remove('hidden');
        errorMsg.classList.add('hidden'); // Hide error message when successful
    }

    function displayError() {
        weatherInfo.classList.add('hidden'); // Hide weather info on error
        errorMsg.classList.remove('hidden'); // Show error message
    }
});
