const apiKey = '009c66eba5794de58f4154529230708';
const apiUrl = 'https://api.weatherapi.com/v1';

// Function to fetch weather data and log it to the console
function getWeatherData(city) {
  const url = `${apiUrl}/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Weather Data:', data.current.feelslike_f);
      console.log('Weather Data:', data.current.condition.text);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Call the function with the desired city (e.g., 'New York')
getWeatherData('New York');
