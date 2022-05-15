import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();
const baseUrl = "https://google-search1.p.rapidapi.com/google-search";

function StateContextProvider(){
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (url) => {
        setLoading(true);

        const res = await fetch( `${baseUrl}${url}`,{
            headers: {
                'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
                'X-RapidAPI-Key': '765af5fc24msh0d655c41dff9288p173ab5jsnb2a702e97743'
            },
        });

        const data = await res.json()
        setResults(data);
        setLoading(false);
    }





    return (
        <StateContextProvider.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
            {children}
        </StateContextProvider.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);