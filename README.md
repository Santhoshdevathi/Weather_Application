# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Tech Stack

Frontend: React, CSS

Backend: React, JavaScript

REST API integration with Open-Meteo

API: Open-Meteo



Weather Application

A full-stack weather application built with React (frontend) and Spring Boot/Node.js (backend) that fetches real-time weather data using the Open-Meteo API.

It provides users with:

1 Current weather details

2 Today’s maximum & minimum temperature

3 Next 12-hour forecast

4 Past 7 days weather trends

5 Future 7 days weather predictions


Features

-> Search weather by city

-> Current weather conditions (temperature, humidity, wind, etc.)

-> Daily forecast (min & max temperature)

-> Hourly forecast for the next 12 hours

-> Historical weather data for the past week

-> Future 7-day forecast

-> Responsive UI for desktop & mobile


Control Flow

1. User enters city name in the search bar.

2. If a valid city is found, the app fetches weather details from Open-Meteo API.

3. The data is stored in React state.

4. Using useContext, weather details are shared across all components.

5. Each component consumes the data and displays it to the user.



Components

1. App.jsx → Root component, integrates all other components.

2. SearchBar.jsx → Accepts city input and triggers API call.

3. Current.jsx → Displays current weather details.

4. Today.jsx → Displays today’s min & max values.

5. Hourly.jsx → Shows next 12-hour forecast.

6. Weekly.jsx → Shows past 7 days & future 7 days forecast.


Weather Details Displayed

1. Temperature

2. Humidity

3. Sunrise

4. Sunset

5. Maximum Wind Speed

7. Maximum Temperature

8. Minimum Temperature
   
9. Daylight duration

10. Rain
