import { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { getCoordinates, getWeatherDetails } from "../Services/WeatherService";
import toast from "react-hot-toast";


import './SearchBar.css';


const SearchBar = () => {
    const {setCityDetails,setWeatherDetails} = useContext(AppContext);
    const inputRef = useRef(null);  // storing input tag
    const divRef = useRef(null);
    const [online, setOnline] = useState(navigator.onLine); // To konw internet status

    //to update internet status
    useEffect(() => {
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    };
    }, []);

    //Getting the details from API
    const getDetails = async(e) => {

        e.currentTarget.blur()

        if(inputRef.current.value == ''){   //Validating empty search
            toast.error("Please enter city name."); 
            return;
        }

        if(!online){
            toast.error("No Internet! Please connect to internet");  //Showing toast message when no internet
            inputRef.current.value ='';
            return;
        }

        
        let response = await getCoordinates(inputRef.current.value); // Calling API with input

        if(Object.keys(response.data).length == 1){
            toast.error("No City found! Please enter valid city name.");  //Shoeing error when no city
            setWeatherDetails({});  // Updating weather details
        }
        else{
            const info = await response.data.results[0];  //storing first field of response
            
            //Getting city name from response
            let Name = info.admin3 ? info.admin3 : info.admin2 ;
            Name = Name.toLowerCase();
            let name = info.name;
            name = name.toLowerCase();
            const searchedName = inputRef.current.value.toLowerCase();

            //validating match of cities
            if(searchedName === Name || searchedName === name){
                await setCityDetails(info);
                response = await getWeatherDetails(info.latitude, info.longitude);
                setWeatherDetails(response.data);
            }
            else{
                toast.error("No City found! Please enter valid city name."); //showing error
            }
        }

    
        inputRef.current.value = ''; // making input empty after search
    }

        
    
    return (
        <div className="SearchBar">
            <h1>Weather Application</h1>
            <h4>Enter the City Name: </h4>
            
            {/* input box and search button */}
            <div ref={divRef} className="city-input">
                <input ref={inputRef} type="text" name="city" className="city" placeholder="Enter City" autoComplete="off"/>
                <button onClick={(e) => getDetails(e)}>Get</button>
            </div>
        </div>
    )
}

export default SearchBar;