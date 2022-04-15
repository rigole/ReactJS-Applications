import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
