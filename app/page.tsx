export default function WeatherApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white dark:bg-black rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Weather App</h1>
        <div className="flex w-full mb-4">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city name"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </main>
    </div>
  );
}
