import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"
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
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
