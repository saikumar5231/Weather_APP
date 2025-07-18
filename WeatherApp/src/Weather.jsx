import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherBox() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Kurnool",
        feels_like: 29.79,
        temp: 28,
        weatherDes: "overcast clouds",
        weatherMain: "Clouds",
        windMain: 8.42,
    })

    let newInfo =  (result) =>{
        console.log(result)
        setWeatherInfo(result)
    }

    return (
        <>
            <SearchBox updateInfo={newInfo} />
            <InfoBox Data={weatherInfo} />
            
        </>
    )
}