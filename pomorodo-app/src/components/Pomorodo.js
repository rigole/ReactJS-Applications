import React from "react";

function Pomorodo() {
    return (
        <div className="form-container">
            <form>
                <div className="input-wrapper">
                    <input className="input" type="number" name="work" />
                    <input className="input" type="number" name="shortBreak" />
                    <input className="input" type="number" name="longBreak" />
                </div>
                <button type="submit">Set Timer</button>
            </form>
        </div>
    )
}

export default Pomorodo