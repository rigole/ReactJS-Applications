import React, {useState} from 'react';
import './style.css';
import WeatherDetails from "./WeatherDetails";

function SearchMain(){
    const [longitude, setlongitude] = useState('9.7679');
    const [latitude, setlatitude] = useState('4.0511');
    console.log(longitude);
    console.log(latitude);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="text"
                           placeholder="enter Latitude"
                           value={longitude}
                           onChange={(e) => setlongitude(e.target.value)}/>

                    <input
                        type="text"
                        placeholder="enter longitude"
                        value={latitude}
                        onChange={(e) => setlatitude(e.target.value)}/>
                </div>
                <button className="searchButton">Search</button>
            </div>
            <WeatherDetails/>
        </>
    )
}

export default SearchMain