import React from "react";
import banner from "../assets/food.jpeg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {

    return(
        <div className="home"  style={{ backgroundImage: `url(${banner})` }}>
            <div className="headerContainer">
                <h1>Food Corner</h1>
                <p>Foot from Africa</p>

                    <button>Order Now</button>

            </div>
        </div>
    )
}

export default Home