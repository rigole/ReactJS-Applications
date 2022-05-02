import React, {useEffect, useContext} from "react";
import Button from "./components/Button";
import CountDown from "./components/CountDown";
import Pomodoro from "./components/Pomodoro";
import {SettingsContext} from "./context/SettingsContext";
import './App.css';

function App() {
    const {
        pomodoro,
        executing,
        startAnimate,
        children,
        startTimer,
        pauseTimer,
        updateExecute,
        setCurrentTimer,
        SettingsBtn
    } = useContext(SettingsContext);

    useEffect(() => {
        updateExecute(executing);

    }, [executing, startAnimate])

  return (
    <div>
      <Button/>
    </div>
  );
}

export default App;
