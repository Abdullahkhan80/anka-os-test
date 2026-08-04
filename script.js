document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const searchBtn = document.querySelector('#search-btn');
    const cityInput = document.querySelector('#city-input');
    const cityName = document.querySelector('#city-name');
    const temperature = document.querySelector('#temperature');
    const description = document.querySelector('#description');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    });

    const fetchWeather = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => updateWeatherDisplay(data))
            .catch(error => console.error('Error fetching weather data:', error));
    };

    const updateWeatherDisplay = (data) => {
        if (data.cod === 200) {
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Description: ${data.weather[0].description}`;
        } else {
            cityName.textContent = 'City not found';
            temperature.textContent = 'Temperature: --°C';
            description.textContent = 'Description: --';
        }
    };
});