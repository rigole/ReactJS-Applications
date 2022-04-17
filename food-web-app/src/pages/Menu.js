import React from 'react';
import  { MenuList } from '../data/data'

function Menu(){
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {MenuList.map((menuItem, key) => {
                         return (
                             <div>
                                 {menuItem.price}
                             </div>
                         )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu