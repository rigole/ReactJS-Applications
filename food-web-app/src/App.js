import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route  path="/" exact element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
