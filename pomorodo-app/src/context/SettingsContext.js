import React from "react";
import {useState, createContext} from 'react';

export const SettingsContext = createContext();
function SettingsContextProvider(props) {
    const [pomorodo, setPomorodo] = useState(0);
    const [executing, setExecuting] = useState({});
    const [startAnimate, setStartAnimate] = useState(false);


    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings);
        setTimerTime(updatedSettings);
    }

    const setTimerTime = (evaluate) => {
        switch (evaluate.active) {
            case 'work':
                setPomorodo(evaluate.work);
                break;
            case 'short':
                setPomorodo(evaluate.short);
                break;
            case 'long':
                setPomorodo(evaluate.long);
                break;
            default:
                setPomorodo(0);
                break;
        }
    }

    function stopAnimate() {
        setStartAnimate(false);
    }


    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state,
        })
        setTimerTime(executing);
    }

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

        return `${minutes}:${seconds}`;
    }

    // clear session storage
    const SettingsBtn = () => {
        setExecuting({});
        setPomorodo(0)
    }







    return (
        <SettingsContext.Provider
            value={{
                pomorodo,
                executing,
                updateExecute,
                startAnimate,
                startTimer,
                pauseTimer,
                children,
                SettingsBtn,
                setCurrentTimer,
                stopAnimate,
            }}>
            {props.children}
        </SettingsContext.Provider>
    )
}
export default SettingsContext