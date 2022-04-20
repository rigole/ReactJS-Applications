import React, {useState} from 'react';
import './style.css';

function SearchMain(){
    const [longitude, setlongitude] = useState('9.7679')
    const [latitude, setlatitude] = useState('4.0511');

    return (
        <div className="wrap">
            <div className="search">
                <input type="text" placeholder="enter Latitude" onChange={(e) => setlongitude(e.target.value)}/>
                <input type="text" placeholder="enter longitude" onChange={(e) => setlatitude(e.target.value)}/>
            </div>
            <button className="searchButton">Search</button>
        </div>
    )
}

export default SearchMain