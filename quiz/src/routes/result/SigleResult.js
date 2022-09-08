import { COLORS } from "../../data/constants";

const SingleResult = ( { index, result }) => {
    const { question, code, answers, solutions, userAnswers, wrongAnswers } = result;

    const formattedSolutions = solutions.map(solution => solution + 1).join(', ');
    const formattedUserAnswers = userAnswers.map(userAnswer => userAnswer + 1).join(', ');


    return ( 
        <div
            style={{ backgroundColor: wrongAnswers.length > 0 ? COLORS.INCORRECT_ANSWER : COLORS.CORRECT_ANSWER}} 
            className="m-3 py-2 px-4 shadow-lg rounded-xl"
        >
            <h3>
                <span>{index + 1}.</span>
                {question}
            </h3>
            <h3>
                {code && code}
            </h3>
            <div
                className="my-2 p-2 bg-white rounded-sm"
            >
                {
                    answers.map((answer, index)=> (
                        <div 
                            key={index}
                            
                        >
                            <span className="mr-2">{index + 1}.</span>
                            {answer.text}
                        </div>
                    ))
                }
            </div>
            <p>
                Correct answer :               {formattedSolutions}
            </p>
            <p>
                Your answer :             {formattedUserAnswers}
            </p>           
        </div>
    );
}
 
export default SingleResult;