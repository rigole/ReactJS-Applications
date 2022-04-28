import React, {createContext , useReducer} from "react";
import AppReducer from "./AppReducer";


const InitialState = [
        { id: 1, text: 'Food', amount: -30000},
        { id: 2, text: 'Internet', amount: -10000},
        { id: 1, text: 'Salary', amount: 1500000},
        { id: 1, text: 'Renting', amount: -50000}
    ]
export const GlobalContext = createContext(InitialState);


// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppInitialState);

    //Actions

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return <GlobalContext.Provider >{children}</GlobalContext.Provider>
}