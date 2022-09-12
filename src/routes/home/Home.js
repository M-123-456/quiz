import { useState, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/QuizContext';
import { pickRandomQuestion } from '../../utils/pickRandomQuestion';
import Header from './Header';
import Main from './Main';



const Home = () => {
    const navigate = useNavigate();
    const { remainingQuestions, hasQuizStarted, setHasQuizStarted } = useContext(QuizContext);

    const startQuiz = () => {
        // setHasQuizStarted --> change display to <Outlet/>
        setHasQuizStarted(true);

        // choose a quiz randomly and navigate to the id of the quiz
        const randomQuestion = pickRandomQuestion(remainingQuestions);
        navigate(`/questions/${randomQuestion}`, { replace: true });
    }

    return (
        <>
            <Header />
            <main>
                {
                    hasQuizStarted ?
                        <Outlet /> : 
                        <Main 
                            startQuiz={startQuiz}
                        />
                }
            </main>
        </>
    );
}

export default Home;