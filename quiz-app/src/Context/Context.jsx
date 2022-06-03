import   { createContext, useState, useContext } from "react";
import axios from "axios";

const table = {
    sports : 19,
    history: 23,
    politics: 24,
}

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

    const fetchQuestions = async (url) => {
        setLoading(true);
        setWaiting(false);
        const response = await axios.get(url).catch((error) => {console.log(error)});

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

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
        setWaiting(true)
        setCorrect(0)
    }

    const nextQuestion = () => {
        setIndex((oldNumberQuestion) => {
            const index = oldNumberQuestion + 1;
            if (index >= oldNumberQuestion.length - 1){
                openModal();
                return 0;
            } else {
                return index;
            }

        });
    }

    const checkAnswer = (answer) => {
        if (value) {
            setCorrect((oldNumberCorrect) => oldNumberCorrect + 1);

        }
        nextQuestion();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://opentdb.com/api.php?amount=${quiz.amount}&category=${quiz.category}&difficulty=${quiz.difficulty}&type=multiple`;
        fetchQuestions(url)
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