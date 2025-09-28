import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//names of icons
import {
  faSun,
  faCloud,
  faCloudSun,
  faSmog,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSunRain,
  faSnowflake,
  faBolt,
  faMoon,
  faCloudMoon
} from "@fortawesome/free-solid-svg-icons";


const Icon = (props) => {

  //Getting names from weather code of response
    function getWeatherIcon(code) {

        let isDay = false;
        const hr = new Date().getHours();
        if(hr > 6 && hr < 19) isDay = true;

        switch(code) {
        case 0: return isDay ? faSun : faMoon;           // Clear sky
        case 1: return isDay ? faSun : faMoon;           // Mainly clear
        case 2: return isDay ? faCloudSun : faCloudMoon;// Partly cloudy
        case 3: return faCloud;                          // Cloudy
        case 45: case 48: return faSmog;                 // Fog / Mist
        case 51: case 53: case 55: return faCloudRain;   // Drizzle light/moderate
        case 56: case 57: return faCloudShowersHeavy;    // Freezing drizzle
        case 61: case 63: case 65: return faCloudShowersHeavy; // Rain showers
        case 66: case 67: return faCloudShowersHeavy;    // Freezing rain
        case 71: case 73: case 75: return faSnowflake;   // Snow fall
        case 77: return faSnowflake;                     // Snow grains
        case 80: case 81: case 82: return faCloudSunRain; // Rain showers
        case 85: case 86: return faSnowflake;           // Snow showers
        case 95: return faBolt;                           // Thunderstorm
        case 96: case 99: return faBolt;                 // Thunderstorm with hail
        default: return faCloud;                          // Default icon
    }
    }

    //Returning weather icon with size 5
    if(props.size == 5){
      return <FontAwesomeIcon icon={getWeatherIcon(props.code)} size="5x" />
    }

    //Returning weather icon with size 2
    if(props.size == 2){
      return <FontAwesomeIcon icon={getWeatherIcon(props.code)} size="2x" />
    }


    //Returning weather icon when called with name directly
    if(props.str){
      if(props.str === 'light'){
        return <FontAwesomeIcon icon={faSun} size="2x"/>
      }
      else{
        return <FontAwesomeIcon icon={faMoon} size="2x"/>
      }
    }
    
    
}

export default Icon;