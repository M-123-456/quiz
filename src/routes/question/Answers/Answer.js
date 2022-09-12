import { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import { COLORS } from '../../../data/constants';

const Answer = ({ index, text, question, solutions }) => {

    const { wrongAnswers, areAnswersSubmitted, userAnswers, setUserAnswers } = useContext(QuizContext);

    // color to define correct / wrong answers
    const [color, setColor] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        // if NOT submitted, make change as input
        if(!areAnswersSubmitted) {
            setChecked(e.target.checked);
        }
    }

    const updateUserAnswers = () => {
        if(solutions.length > 1) {
            let newAnswers = [...userAnswers];
            if (checked) {
                newAnswers.push(index);
            } else {
                newAnswers = newAnswers.filter(answer => answer !== index)
            }
            setUserAnswers(newAnswers);
        } else {
            if(checked){
                setUserAnswers([index]);
            }
        }
    }

    const changeColor = (solutions, wrongAnswers, index) => {
        if (solutions.includes(index)) {
            setColor(COLORS.CORRECT_ANSWER)
        } else if (wrongAnswers.includes(index)) {
            setColor(COLORS.INCORRECT_ANSWER)
        }
    }

    // when submitted, change color to show correct and wrong answers
    useEffect(() => {
        if(areAnswersSubmitted) {
            changeColor(solutions, wrongAnswers, index);
        }
    }, [areAnswersSubmitted])

    // everytime when input is done, update userAnswers
    useEffect(() => {
        updateUserAnswers();
    }, [checked])

    // everytime when question has changed (= new param), refresh checked and color
    useEffect(() => {
        setChecked(false);
        setColor('');
    }, [question])

    return (
        <div
            style={{ backgroundColor: color ? color : '' }}
            className="p-2 my-2 rounded-md"
        >
            {/* multiple-choice => checkbox, single-choice => radio */}
            {
                solutions.length > 1 ? 
                <input
                    type="checkbox"
                    checked={checked}
                    id={text}
                    onChange={handleChange}
                />
                : 
                    <input
                        type = "radio"
                        id={text}
                        name={question}
                        checked={checked}
                        onChange={handleChange}
                    />
            }
            <label
                htmlFor={text}
                className="pl-2"
            >
                {text}
            </label>
        </div>

    );
}

export default Answer;