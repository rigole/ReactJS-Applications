import React from "react";
import {useState, createContext} from 'react';

export const SettingsContext = createContext();
function SettingsContextProvider(props) {
    const [pomorodo, setPomorodo] = useState(0);
    const [executing, setExecuting] = useState({});
    const [startAnimate, setStartAnimate]= useState(false);

    function setCurrentTimer(active_state){
        updateExecute({
           ...executing,
           active:active_state,
        })
        setTimerTime(executing);

        //start animation function
        function startTimer() {
            setStartAnimate(true);
        }

        //pause animation function
        function pauseTimer() {
            setStartAnimate(false);
        }

        // pass time to counter
        const children = ({remainingTime}) => {
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
        }
    }
    return (
        <div>

        </div>
    )
}
export default SettingsContext