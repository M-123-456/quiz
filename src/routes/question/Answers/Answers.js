import Answer from './Answer';

const Answers = ({ question, answers, solutions }) => {

    return (
        <div className="mt-2">
            {
                answers.map((answer, index) =>
                (
                    <Answer
                        key={index}
                        index={index}
                        text={answer.text}
                        question={question}
                        solutions={solutions}
                    />
                ))
            }

        </div>
    );
}

export default Answers;
