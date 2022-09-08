export const checkAnswers = (userAnswers, solutions) => {
    const newWrongAnswers = [];

    for (const answer of userAnswers) {
        if (!(solutions.includes(answer))) {
            newWrongAnswers.push(answer);
        }
    }

    for (const solution of solutions) {
        if (!(userAnswers.includes(solution))) {
            newWrongAnswers.push(solution);
        }
    }

    return newWrongAnswers;
}