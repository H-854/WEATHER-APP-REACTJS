import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
export default function WeatherApp(){
    let [weather,setWeather]=useState(
        {
            city: "Pune",
            temp: 29.52,
            humidity: 89,
            tempMax: 29.52,
            tempMin: 29.52,
            description: "overcast clouds",
            feelsLike: 30,
            weather: "cloudy"
        }
    )
    let updateWeather=(result)=>{
        setWeather(result)
    }
    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox info={weather}/>
        </div>
    )
}
