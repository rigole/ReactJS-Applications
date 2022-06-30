import React, {useState} from "react";
import './App.css';

function App() {
    const [color, setColor] = ("")
  return (
    <section className="container">
      <h3>Color Generator</h3>
      <form action="">
        <input
            type="text"
            placeholder="type color"
            onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn" type="submit">
            Get Colors
        </button>
      </form>
    </section>
  );
}

export default App;
