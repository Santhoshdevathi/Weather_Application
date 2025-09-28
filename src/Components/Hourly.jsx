import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { getHourlyTime } from "../Services/DateTimeService";
import Icon from "./Icon";
import './Hourly.css';

const Hourly = () => {

    const {weatherDetails} = useContext(AppContext);

    const temperatures = weatherDetails.hourly.temperature_2m; // Getting temperatures from response
    const units = weatherDetails.hourly_units;

    let i = 168 + new Date().getHours() + 1;  // Index of current days hours , as response gives hours from past 7 days and future 7 days
    let hours = [];
    for(let t = i ; t < i+12 ; t++){  //Storing indices of next 12 hours
        hours.push(t);          
    }

    return(
        <div className="hourly">
            <h5>12 Hour Forecast</h5>
            <div className="h">

                {/* Displaying next 12 hours weather Details */}
                <div className="hours">
                {
                    hours.map((t,ind) => {
                        return(
                            <div key={ind}>
                                <p>{getHourlyTime(weatherDetails.hourly.time[t])}</p>
                                <Icon code = {weatherDetails.hourly.weather_code[t]}  size={2}></Icon>
                                <p>{temperatures[t]}{units.temperature_2m}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            
        </div>
    )
}

export default Hourly;