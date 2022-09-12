import { useContext, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';
import { fetchQuiz } from '../../helpers/fetchQuiz';
import { pickRandomQuestion } from '../../utils/pickRandomQuestion';
import Button from '../../components/ui/buttons/Button';
import SingleResult from './SigleResult';

const Result = () => {

    const navigate = useNavigate();

    const { result, setResult, score, setScore, hasQuizStarted, setHasQuizStarted, quiz, setQuiz, remainingQuestions, setRemainingQuestions, setUserAnswers, setWrongAnswers, setAreAnswersSubmitted, setGotoNext } = useContext(QuizContext);

    console.log(remainingQuestions, quiz, hasQuizStarted);

    const restartQuiz = () => {
        refreshQuiz();
        setHasQuizStarted(true);
    }

    const refreshQuiz = () => {
        const fetch = fetchQuiz()
            .then((res) => {
                setQuiz(res.quiz)
                setRemainingQuestions(res.remainingQuestions)
            });
        setUserAnswers([]);
        setWrongAnswers([]);
        setAreAnswersSubmitted(false);
        setGotoNext(false);
        setResult([]);
        setScore(0);
    };

    const navigateToNext = () => {
        const randomQuestion = pickRandomQuestion(remainingQuestions);
        navigate(`/questions/${randomQuestion}`, { replace: true });
    }

    useEffect(() => {
        if(hasQuizStarted) {
            navigateToNext();
        }
    }, [hasQuizStarted, remainingQuestions])
 
  
    return ( 
        <section className="flex flex-col align-center">
            <div 
                className="mx-3 flex gap-4 justify-between"
            >
                <h2 className="text-3xl">Your score: {score}</h2>
                <Button 
                    text='Restart quiz'
                    onClick={restartQuiz}
                />
            </div>
            {
                result.map((result, index) => (
                    <SingleResult 
                        key={result.id}
                        index={index}
                        result={result}
                    />
                ))
            }
        </section>
    );
}
 
export default memo(Result);