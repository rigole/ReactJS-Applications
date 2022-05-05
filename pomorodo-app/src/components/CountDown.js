import  React, {useContext} from 'react';
//import {SettingsContext} from '../context/SettingsContext';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

function CountDown({ key, timer, animate, children }) {
    const { stopAnimate } = useContext(SettingsContext);
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors="#FE6F68"
            strokeWidth={6}
            size={220}
            trailColor="#151932"
            onComplete={() => {
            stopAnimate();
        }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountDown