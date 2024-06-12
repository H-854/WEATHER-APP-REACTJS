import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateWeather}){

    let URL = "https://api.openweathermap.org/data/2.5/weather"
    const [city,setCity] = useState("")


    function handleChange(event){
        setCity(event.target.value)
    }

    async function getCityWeather(){
        let response = await fetch(`${URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        let result = await response.json();
        let weather = {
            city: city,
            temp: result.main.temp,
            tempMax: result.main.temp_max,
            tempMin: result.main.temp_min,
            weather: result.weather[0].main,
            description: result.weather[0].description,
            humidity: result.main.humidity,
            feelsLike: result.main.feels_like
        }
        
        return weather
        // console.log(weather)
    }

    async function handleSubmit(event){
        event.preventDefault()
        let result = await getCityWeather()
        setCity("")
        updateWeather(result)
        // console.log(result)
    }
    return (
        <div className='searchBox'>
            <h1>Search City</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City-Name" variant="outlined" value={city} onChange={handleChange}/> <br /><br />
                <Button variant="contained" endIcon={<SendIcon />} type='submit' size="small">
                    Search
                </Button>
            </form>
        </div>
    )
}