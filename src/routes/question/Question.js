import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { QuizContext } from '../../context/QuizContext';
import { pickRandomQuestion } from '../../utils/pickRandomQuestion';
import { checkAnswers } from '../../helpers/checkAnswers';
import StatusBar from './StatusBar';
import Answers from './Answers/Answers';
import ProceedButton from './ProceedButton';
import Warning from './Warning';

const Question = () => {
    const navigate = useNavigate();
    const param = useParams();

    // QuizContext
    const { quiz, remainingQuestions, setRemainingQuestions, result, setResult, setScore, userAnswers, setUserAnswers, wrongAnswers, setWrongAnswers, areAnswersSubmitted, setAreAnswersSubmitted, gotoNext, setGotoNext, warning, hasQuizStarted, setHasQuizStarted, score } = useContext(QuizContext);

    const { question, code, answers, solutions } = quiz[param.id];

    //! log
    console.log('solutions', solutions, 'userAnswers', userAnswers, 'wrongAnswers', wrongAnswers);
    console.log('result', result, 'areAnswersSubmitted', areAnswersSubmitted, 'gotoNext', gotoNext, 'score', score, 'hasQuizStarted', hasQuizStarted, 'quiz', quiz);

    // functions to update state
        // wrongAnswers
    const updateWrongAnswers = (userAnswers, solutions) => {
        const newWrongAnswers = checkAnswers(userAnswers, solutions);
        setWrongAnswers(newWrongAnswers);
    };
        // score
    const addScore = (wrongAnswers) => {
        let addedScore = 0;
        if (wrongAnswers.length === 0) {
            addedScore = 1;
        };
        setScore(prev => prev + addedScore);
    }
        // result
    const updateResult = () => {
        const newResult = {
            id: param.id,
            question: question,
            code: code,
            answers: answers,
            solutions: solutions,
            userAnswers: userAnswers,
            wrongAnswers: wrongAnswers
        }
        setResult([...result, newResult]);
    }

    // navitate to new question route / result
    const navigateToNext = () => {
        // if there is any unanswered question, pick up a random one and move to the new route with the next questions id
        if (remainingQuestions.length >= 1) {
            const randomQuestion = pickRandomQuestion(remainingQuestions);
            navigate(`/questions/${randomQuestion}`, { replace: true });
        } else {
            setHasQuizStarted(false);
            navigate('/result', { replace: true })
        }
    }
    
    // refresh states when param has changed
    useEffect(() => {
        setUserAnswers([]);
        setWrongAnswers([]);
        setAreAnswersSubmitted(false);
        setGotoNext(false);
        setRemainingQuestions(prev => {
            return prev.filter(question => question !== param.id)
        })
    }, [param]);

    // if userAnswers change, update wrongAnswers   
    useEffect(() => {
        updateWrongAnswers(userAnswers, solutions);
    }, [userAnswers])
    
    // if submitted, update result
    useEffect(() => {
        if(areAnswersSubmitted) {
            updateResult()
        }
    }, [areAnswersSubmitted])

    // if next, update score and navigate to next route / result
    useEffect(() => {
        if (gotoNext) {
            addScore(wrongAnswers);
            navigateToNext(remainingQuestions);
        }
    }, [gotoNext])

    return (
        <>
            <StatusBar />
            <section className="my-2">
                <h3>{question}</h3>
                <h4>{code && code}</h4>
                <Answers 
                    question={question}
                    answers={answers}
                    solutions={solutions}
                />
            </section>
            {
                warning && <Warning />
            }
            <ProceedButton />
        </>  
    );
}
 
export default Question;