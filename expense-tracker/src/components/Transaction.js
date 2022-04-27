import React, {useContext} from "react";

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            Salary <span> +50 FCFA</span>
            <button>x</button>
        </li>
    )
}