import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import InfoBox from './infoBox';


export default function SearchBox({ updateInfo }) {
    let [ Data, setData ] = useState("");
    let [ error, setError ] = useState(false);

    let handleInputChange = (event) =>  {
        event.preventDefault()
        setData(event.target.value);
    }

    let getInfo = async (cityName) => {
        try{
            const response = await fetch(API_URL);
            const res = await response.json();
            let result = {
                city: res.name,
                temp: res.main.temp,
                feels_like: res.main.feels_like,
                weatherDes: res.weather[0].description,
                weatherMain: res.weather[0].main,
                windMain:  res.wind.speed,
                humidity: res.main.humidity
            }
            return result
        }catch(err){
            throw err
        }
        
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            setData("")
            let newInfo = await getInfo(Data);
            updateInfo(newInfo)
            setError(false)
        }catch(err){
            setError(true);
        }
        

    }

 

    return (
        <div>
            <TextField className="searchbox" id="Searchbox" label="Enter CityName" variant="outlined" value={Data} onChange={handleInputChange}/><br></br><br></br>
            <Button variant="contained" onClick={handleSubmit}>Search</Button>
            <br></br>
            <br></br>
            {error && <p>No such Place Exists in API</p>}
        </div>
        
    )
}