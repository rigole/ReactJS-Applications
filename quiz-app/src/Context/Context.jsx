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
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: "sports",
        difficulty: "easy"
    });
    const [modal, setModal] = useState(false)

    const fetchQuestions = async (url) => {
        setLoading(true);
        setWaiting(false);
         axios.get(url).then((response) => {
             if(response){
                 const data = response.data.results;
                 if (data.length > 0){
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
         })


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
            if (index > oldNumberQuestion.length - 1){
                openModal();
                return 0;
            } else {
                return index;
            }

        });
    }

    const checkAnswer = (answer) => {
        if (answer) {
            setCorrect((oldNumberCorrect) => oldNumberCorrect + 1);

        }
        nextQuestion();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setQuiz({...quiz, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { amount, difficulty, category } = quiz;
        const url = `https://opentdb.com/api.php?amount=10`;
        fetchQuestions(url)
    }


    return(
        <AppContext.Provider
        value={{
            waiting,
            loading,
            questions,
            index,
            correct,
            error,
            modal,
            nextQuestion,
            checkAnswer,
            closeModal,
            quiz,
            handleSubmit,
            handleChange
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };