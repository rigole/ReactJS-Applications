import React from 'react';
import  { Datas } from '../data/data';
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';

function Menu(){
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {Datas.map((data, key) => {
                         return (
                             <MenuItem
                                key={key}
                                image={data.image}
                                name={data.name}
                                price={data.price}
                             />
                         )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu