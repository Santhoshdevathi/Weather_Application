import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (prop) => {

    const [cityDetails, setCityDetails] = useState({});  // To store city details like altitude and altitide etc

    const [weatherDetails, setWeatherDetails] = useState({}); // To store weather details of particular city

    // Making these states available to all components
    const contextValue = {
            cityDetails,
            setCityDetails,
            weatherDetails,
            setWeatherDetails
    }


    return(
        /* proving states to other components */
        <AppContext.Provider value = {contextValue}>
            {prop.children}
        </AppContext.Provider>
    )
}