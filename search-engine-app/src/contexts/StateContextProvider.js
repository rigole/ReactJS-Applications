import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/search/";


export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (url) => {
        setLoading(true);

        const res = await fetch( `${baseUrl}${url}`,{
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '765af5fc24msh0d655c41dff9288p173ab5jsnb2a702e97743'
            },
        });

        const data = await res.json()
        setResults(data);
        setLoading(false);
    }





    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);