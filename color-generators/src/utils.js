import React from "react";

function componentToHex(c){
    const hex1 = "" +  c //.toString()
    const hex = hex1.toString()
     return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex({r, g, b }){
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export default rgbToHex