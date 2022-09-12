import { getQuiz } from '../data/questions';

export const fetchQuiz = async () => {
    const quiz = await getQuiz();
    const remainingQuestions = Object.keys(quiz);
    return { quiz, remainingQuestions };
}