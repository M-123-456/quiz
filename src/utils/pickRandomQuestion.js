export const pickRandomQuestion = (remainingQuestions) => {
    const random = Math.floor(Math.random() * remainingQuestions.length);
    return remainingQuestions[random];
}