import   { createContext, useState, useContext } from "react";
import axios from "axios";

const AppContext = createContext();
const AppProvider = ({ children }) => {

    const [waiting, setWaiting] = useState(true);
    const [loading, setLoading] = useState(false);
    const [question, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [quiz, setQuiz] = useState({
        amount:10,
        category: "sports",
        difficulty: "easy"
    });
    const [modal, setModal] = useState(false)

    const fetchQuestions = async () => {
        setLoading(true);
        setWaiting(false);
        const response = await axios.get("https://opentdb.com/api_config.php").catch((error) => {console.log(error)});

        if(response){
            const data = response.data.results;
            if (data.length){
                setQuestions(data)
                setLoading(false);
                setWaiting(false);
                setError(false)
            }else {
                setWaiting(true);
                setLoading(true);
            }
        }else{
            setWaiting(true);
        }

    }

    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };