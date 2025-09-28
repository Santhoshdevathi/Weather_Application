import axios from 'axios';

export const getCoordinates = async (city) => {
  return await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
};

export const getWeatherDetails = async (latitude, longitude) => {

    return await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,wind_speed_10m_max&hourly=temperature_2m,rain,wind_speed_10m,weather_code,relative_humidity_2m,pressure_msl&current=relative_humidity_2m,temperature_2m,precipitation,rain,weather_code,cloud_cover,wind_speed_10m&timezone=Asia%2FSingapore&past_days=7`)
}






