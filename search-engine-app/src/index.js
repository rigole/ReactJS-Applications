import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import  { StateContextProvider }   from "./contexts/StateContextProvider"
import App from './App';

ReactDOM.render(
    <StateContextProvider>
        <Router>
            <App/>
        </Router>
    </StateContextProvider>,
    document.getElementById("root")
);

