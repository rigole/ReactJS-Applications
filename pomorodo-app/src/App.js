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
        <h1>Pomodoro</h1>
        <small>Be productive </small>
        {pomodoro == 0 ? (
            <Pomodoro/>
        ): (
            <div>
                <ul className="labels">
                    <li>
                        <Button
                            title="work"
                            activeClass={executing.active === "work" ? "active-label" : undefined}
                            _callback={() => setCurrentTimer("work")}
                        />
                    </li>
                    <li>
                        <Button
                            title="Short Break"
                            activeClass={
                                executing.active === "short" ? "active-label" : undefined
                            }
                            _callback={() => setCurrentTimer("short")}
                        />
                    </li>
                    <li>
                        <Button
                            title="Long Break"
                            activeClass={
                                executing.active === "long" ? "active-label" : undefined
                            }
                            _callback={() => setCurrentTimer("long")}
                        />
                    </li>
                </ul>
                <Button title="settings" _callback={SettingsBtn}/>
            </div>
        )}
    </div>
  );
}

export default App;
