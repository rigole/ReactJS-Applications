import React from 'react';

function WeatherDetails(){
    return(
        <div>
            <article className="widget">
                <div className="weatherIcon">
                    <i className="wi wi-day-sunny"></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>23.99&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">Sunny</div>
                        <div className="place">Douala, CM</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
            </article>
        </div>
    )
}

export default WeatherDetails