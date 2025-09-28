import Current from "./Components/Current";
import Today from "./Components/Today";
import Hourly from "./Components/Hourly";
import SearchBar from "./Components/SearchBar";
import Weakly from "./Components/Weakly";
import Icon from "./Components/Icon";
import { AppContext } from "./Context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useRef } from "react";
import './App.css';



const App = () => {

  const {weatherDetails} = useContext(AppContext); 
  const [theme, setTheme] = useState();
  const appRef = useRef(null);

  useEffect(() => {
    
      const hour = new Date().getHours();
      if(hour < 6 || hour >= 19){      // To set theme basd on System time
        setTheme("dark-theme");
      }
      else{
       setTheme("light-theme");
      }
      
      appRef.current.classList.add(theme);
  
  },[]);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.classList.remove("light-theme", "dark-theme"); // Removing all classNames
      appRef.current.classList.add(theme); // adding the current theme
    }
  }, [theme]);


  //Toggling between dar and light themes
  const toggleTheme = () => {
   if(theme === "light-theme"){
    appRef.current.classList.remove("light-theme");
    appRef.current.classList.add("dark-theme");
    setTheme("dark-theme");
   }
   else{
    appRef.current.classList.remove("dark-theme");
    appRef.current.classList.add("light-theme");
    setTheme("light-theme");
   }
  
  };

  return(
    <div className="App" ref={appRef}>
      {/* Animated sun/moon */}
      <div className="sun-moon"></div>
      
      {/* toggling Button */}
      <div onClick={toggleTheme} className="toggle-btn">
          {theme === "light-theme" ? <Icon str = {'dark'}/> : <Icon str={'light'}/>}
      </div>
      
      
      {/* embedding other components */}
      <Toaster/>
      <SearchBar/>

      {Object.keys(weatherDetails).length > 0 && (<div className="contains"><Current/> <Today/> <Hourly/> <Weakly/></div>)}


    </div>
  )
}

export default App;