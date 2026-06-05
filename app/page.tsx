import { useState, useEffect } from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data: WeatherData = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white dark:bg-black rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Weather App</h1>
        <div className="flex w-full mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city name"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {weather && (
          <div className="w-full p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </main>
    </div>
  );
}
