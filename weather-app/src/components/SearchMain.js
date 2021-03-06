import React, { useEffect,  useState} from 'react';
import './style.css';
import WeatherDetails from "./WeatherDetails";

function SearchMain(){
    const [longitude, setlongitude] = useState('9.7679');
    const [latitude, setlatitude] = useState('4.0511');
    const[tempInfo, setTempInfo]= useState({});

    /*console.log(longitude);
    console.log(latitude);*/
    //https://api.openweathermap.org/data/2.5/weather?lat=4.0511&lon=9.7679&appid=8ed4e9412e2b8e447572ddb968492e1b
    const getWeatherInfo = async () => {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=8ed4e9412e2b8e447572ddb968492e1b`

            let res = await fetch(url);
            let data = await res.json();
            const {temp, humidity, pressure} = data.main;
            const { main: weatherType } = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            console.log(weatherType);

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherType,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getWeatherInfo()
    }, [])

    return (
        <>
            <div className="wrap">

                    <div className="search">
                        <input type="text"
                               placeholder="enter Latitude"
                               value={longitude}
                               required
                               onChange={(e) => setlongitude(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="enter longitude"
                            value={latitude}
                            required
                            onChange={(e) => setlatitude(e.target.value)}
                        />
                    </div>
                    <button className="searchButton" onClick={getWeatherInfo}>Search</button>

            </div>
            <WeatherDetails {... tempInfo}/>
        </>
    )
}

export default SearchMain