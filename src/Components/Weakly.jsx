import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { getButtonDate } from "../Services/DateTimeService";
import Today from "./Today";
import './Weakly.css';

const Weakly = () => {
    const {weatherDetails} = useContext(AppContext);
    const dates = weatherDetails.daily.time;

    //Seperating past days and future days
    const past_dates = dates.slice(1,7);
    const future_dates = dates.slice(8,14);

    //For Storing specific date
    const [specific,setSpecific] = useState(); 
    

    
    return(
        <div className="weakly">
            <h4>Weakly forecast</h4>
            <div className="container">
                <div className="days">
                    <h5>Previous 6 Days</h5>
                </div>

                {/* Buttons of past 6 days with dates */}
                <div className="dates-container">
                    {past_dates.map((date, index) => (
                        <button 
                            key={index} 
                            className="date-button" 
                            onClick={() => setSpecific(date)} 
                        >
                        {getButtonDate(date)}  {/* Getting date to show on button from date service*/}
                        </button>
                    ))}
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="days">
                    <h5>Next 6 days</h5>
                </div>

                {/* Buttons of next 6 days with dates */}
                <div className="dates-container">
                    {future_dates.map((date, index) => (
                        <button 
                            key={index} 
                            className="date-button" 
                            onClick={() => setSpecific(date)}
                        > 
                        {getButtonDate(date)}
                        </button>
                    ))}
                </div>
            </div>
           
            {specific && <Today date = {specific} className='today'/> }  {/* Including Today component calling with specific date */}

        </div>
    )
}

export default Weakly;