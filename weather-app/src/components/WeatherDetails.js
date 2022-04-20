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
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                       <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                10:30 PM <br/>
                                Sunset
                            </p>
                       </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                444  <br/>
                                Humidity
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                444  <br/>
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                422  <br/>
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default WeatherDetails