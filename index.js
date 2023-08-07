const apiKey = '009c66eba5794de58f4154529230708';
const apiUrl = 'https://api.weatherapi.com/v1';

const dates = document.getElementById('Date');
const conditions = document.getElementById('condition');
const temp = document.getElementById('temp');
// Function to fetch weather data and log it to the console
function getWeatherData(city) {
  const url = `${apiUrl}/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Weather Data:', data.current.feelslike_f);
      conditions.textContent = data.current.condition.text;
      temp.textContent = data.current.feelslike_f + ' F° ';
      // Update the date and time after weather data is fetched
      const currentDateTime = new Date();

      const options = {
        weekday: 'long',     // Full day name (e.g., Monday)
        month: 'long',       // Full month name (e.g., August)
        day: 'numeric',      // Numeric day of the month (e.g., 7)
        year: 'numeric',     // Full year (e.g., 2023)
        hour: 'numeric',     // Numeric hour (e.g., 2)
        minute: '2-digit',   // Two-digit minute (e.g., 35)
        hour12: true         // Use 12-hour format (e.g., 2:35 pm)
      };

      const formattedDateTime = currentDateTime.toLocaleString('en-US', options);
      dates.textContent = formattedDateTime;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Call the function with the desired city (e.g., 'New York')
getWeatherData('michigan');
