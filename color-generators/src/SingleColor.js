import React, {useState, useEffect} from "react";
import rgbToHex from './utils'

function SingleColor({rgb, weight, index, hexColor}){
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(",")
    const hex = rgbToHex(...rgb)
    return (
            <article className={`color ${index > 10 && 'color-light'}`} style={{background: `rgb(${bcg})`}}>
                <p className="percentage-value">{weight}</p>
                <p className="color">{hexColor}</p>
            </article>

    )
}
export default SingleColor