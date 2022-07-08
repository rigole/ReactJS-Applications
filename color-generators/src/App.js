import React, { useState } from "react";
import Values from "values.js";
import './App.css';
import SingleColor from "./SingleColor";



function App() {
    const [color, setColor] = useState("")
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values("#FF7777").all(10))

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("test")
      try {
          let colors = new Values(color).all(10)
          setList(colors)
      } catch (error){
          setError(true)
          console.log(error)
      }
    }

  return (
      <>
          <section className="container">
              <h3>Color Generator</h3>
              <form onSubmit={handleSubmit}>
                  <input
                      type="text"
                      placeholder="#FF7777"
                      value={color}
                      className={`${error ? "error" : null}`}
                      onChange={(e) => setColor(e.target.value)}
                  />
                  <button className="btn" type="submit">
                      Get Colors
                  </button>
              </form>
          </section>
          <section className="colors">
              {list.map((color, index) => {
                  return (
                      <SingleColor
                        key={index}
                        {...color}
                        index={index}
                        hexColor={color.hex}
                      />
                  )
              })}
          </section>
      </>

  );
}

export default App;
