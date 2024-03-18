const axios = require('axios');
const _ = require('lodash');

// Function to fetch weather data from an API
async function fetchWeatherData(city) {
    try {
        const response = await axios.get(`https://api.weather.com/data/${city}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
}

// Function to extract temperature from weather data
function extractTemperature(weatherData) {
    return _.get(weatherData, 'temperature', null);
}

// Function to analyze temperature trends
function analyzeTemperatureTrend(temperatures) {
    const average = _.mean(temperatures);
    const max = _.max(temperatures);
    const min = _.min(temperatures);
    return { average, max, min };
}

module.exports = {
    fetchWeatherData,
    extractTemperature,
    analyzeTemperatureTrend
};
