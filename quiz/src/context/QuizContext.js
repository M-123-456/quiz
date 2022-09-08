import { createContext, useEffect, useState } from 'react';
import { getQuiz } from '../data/questions';
import { fetchQuiz } from '../helpers/fetchQuiz';

export const QuizContext = createContext({});

export const QuizProvider = ({ children }) => {
    const [quiz, setQuiz] = useState({});
    const [remainingQuestions, setRemainingQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState([]);
    const [hasQuizStarted, setHasQuizStarted] = useState(false);

    // states refreshed for every Question component
    const [userAnswers, setUserAnswers] = useState([]);
    const [areAnswersSubmitted, setAreAnswersSubmitted] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [gotoNext, setGotoNext] = useState(false);
    const [warning, setWarning] = useState(false);
    

    useEffect(() => {
        const fetch = fetchQuiz()
        .then((res) => {
            setQuiz(res.quiz)
            setRemainingQuestions(res.remainingQuestions)
        });
        setResult([]);
        setScore(0);
    }, []);

    return (
        <QuizContext.Provider
            value={{ quiz, setQuiz, remainingQuestions, setRemainingQuestions, score, setScore, result, setResult, hasQuizStarted, setHasQuizStarted, userAnswers, setUserAnswers, areAnswersSubmitted, setAreAnswersSubmitted, wrongAnswers, setWrongAnswers, gotoNext, setGotoNext, warning, setWarning }}
        >
            { children }
        </QuizContext.Provider>
    )
}