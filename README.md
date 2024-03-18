# Spleef 

Spleef is a Node.js module for fetching and analyzing weather data.

## Installation

You can install this module via npm: `npm install spleef`

## Usage
```javascript
const skySurf = require('sky-surf');

// Example usage:
(async () => {
    try {
        const weatherData = await skySurf.fetchWeatherData('NewYork');
        const temperature = skySurf.extractTemperature(weatherData);
        console.log('Temperature:', temperature);

        const temperatures = [20, 25, 30, 35, 40]; // Example temperatures
        const analysis = skySurf.analyzeTemperatureTrend(temperatures);
        console.log('Temperature Analysis:', analysis);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
```

