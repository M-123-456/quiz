import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../context/QuizContext';

const StatusBar = () => {

    const { quiz, remainingQuestions, score } = useContext(QuizContext);
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const quizLength = Object.keys(quiz).length

    useEffect(() => {
        setCurrentQuestionNum(quizLength - remainingQuestions.length)
    }, [remainingQuestions])

    return ( 
        <section className="mt-2 flex justify-between border-b-2 border-slate-700">
            <div>
                Question{currentQuestionNum}/{quizLength}
            </div>
            <div>
                Score: {score}
            </div>
        </section>
    );
}
 
export default StatusBar;