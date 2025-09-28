import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { getToday } from "../Services/DateTimeService";
import { formatTimeFromISO, getDaylightDuration } from "../Services/DateTimeService";
import './Today.css';
import Icon from "./Icon";


const Today = (props) => {

    const {weatherDetails} = useContext(AppContext);
    const today = weatherDetails.daily;  //Storing Today's weather details
    const units = weatherDetails.daily_units;
    let i = 6;  // Index of current day in response array

    if(props.date){
        i = today.time.indexOf(props.date);  // Index of props.date
    }

    
    return(
        <div className="today">
            <h4>{props.date ? '' :'Today'}</h4>  {/* Displaying Today when no props */}
            <p>{getToday(props.date)}</p>  {/* Getting Specific day's date from time service */}


            {/* Displaying that day's weather attributes */}
            <div className="properties">
                <div>
                    <p>Maximum Temperature</p>
                    <h5>{today.temperature_2m_max[props.date?i:6]} {units.temperature_2m_max}</h5>

                </div>

                <div>
                    <p>Minimum Temperature</p>
                    <h5>{today.temperature_2m_min[props.date?i:6]} {units.temperature_2m_min}</h5>
                </div>

                <div>
                    <p>Sunrise</p>
                    <h5>{formatTimeFromISO(today.sunrise[props.date? i : 6])}</h5>
                </div>

                <div>
                    <p>Sunset</p>
                    <h5>{formatTimeFromISO(today.sunset[props.date?i:6])}</h5>
                </div>

                <div>
                    <p>Daylight Duration</p>
                    <h5>{getDaylightDuration(today.daylight_duration[props.date?i:6])}</h5>
                </div>

                <div>
                    <p>Maximum Wind speed</p>
                    <h5>{today.wind_speed_10m_max[props.date?i:6]} {units.wind_speed_10m_max}</h5>
                </div>
            </div>
        </div>
    )
}

export default Today;