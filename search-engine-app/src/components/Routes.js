import React from 'react'
import {Switch, Route, Routes, Link} from "react-router-dom";

import { Results }  from './Results'
import Search from "./Search";


export const Routs = () => (

        <div className="p-4" >
                <Routes>
                    <Route exact path="/"  element={<Search/>}/>
                    <Route exact path="/search" element={<Results/>}/>
                    <Route exact path="/images"  element={<Results/>}/>
                    <Route exact path="/news" element={<Results/>}/>
                    <Route exact path="/videos" element={<Results/>}/>
                </Routes>
        </div>


)

export default Routs