import React from "react";
import { GlobalContext } from "../context/GlobalSate";

function moneyFormatter(num){
    let p = num.toFixed(2).split(".");
    return (
        p[0].split("").reverse().reduce(function (acc, num, i, orig){
            return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "" ) + "." + p[1] + "FCFA"
    );
}

export const Balance = () => {
    return (
        <div>
            <h4>Balance</h4>
            <h1>35 000 FCFA</h1>
        </div>
    )
}