import { useContext, } from "react";
import { AppContext } from "../Context/AppContext";
import Icon from "./Icon";
import './Current.css';
import { getCurrentTime } from "../Services/DateTimeService";

const Current = () => {
    
    const {cityDetails,weatherDetails} = useContext(AppContext); //taking details from context
    const units = weatherDetails.current_units;
    const current_values = weatherDetails.current; // response of Current weather

    
    return (
        <div className="current">

            {/* Displaying city name */}
           <h3 className="city-info">{`${cityDetails.admin3 ? cityDetails.admin3 : cityDetails.admin2}, ${cityDetails.admin1}, ${cityDetails.country}`}</h3>
           <div className="current-weather">
                
                <div className="current-temperature">
                    <div className="temp">
                        <div>
                            <h5>Current Weather</h5>
                            <p>{getCurrentTime()}</p>
                        </div>
                        <div>
                            {/* Getting icon */}
                            <Icon code = {current_values.weather_code} size = {5}></Icon>
                        </div>
                        <div>
                            <p className="temperature">{current_values.temperature_2m} <span className="temp-unit">{units.temperature_2m}</span></p>
                        </div>
                    </div>

                    {/* Displaying weather details */}
                    <div className="properties">
                        <div>
                            <h5>Humidity</h5>
                            <p>{current_values.relative_humidity_2m} {units.relative_humidity_2m}</p>
                        </div>

                        <div>
                            <h5>Precipitation</h5>
                            <p>{current_values.precipitation} {units.precipitation}</p>
                        </div>

                        <div>
                            <h5>Wind Speed</h5>
                            <p>{current_values.wind_speed_10m} {units.wind_speed_10m}</p>
                        </div>

                        <div>
                            <h5>Rain</h5>
                            <p>{current_values.rain} {units.rain}</p>
                        </div>

                        <div>
                            <h5>Cloud Cover</h5>
                            <p>{current_values.cloud_cover} {units.cloud_cover}</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Current;
    