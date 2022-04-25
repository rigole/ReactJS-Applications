import React, {createContext , useReducer} from "react";


const InitialState = [
        { id: 1, text: 'Food', amount: -30000},
        { id: 2, text: 'Internet', amount: -10000},
        { id: 1, text: 'Salary', amount: 1500000},
        { id: 1, text: 'Renting', amount: -50000}
    ]
export const GlobalContext = createContext(InitialState);


// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(InitialState)

    return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}