import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import Button from '../../components/ui/buttons/Button';

const ProceedButton = () => {

    const { userAnswers, areAnswersSubmitted, setAreAnswersSubmitted, setGotoNext, warning, setWarning } = useContext(QuizContext);

    // onClick -- Submit button
    const handleSubmitAnswers = () => {
        if (userAnswers.length < 1) {
            setWarning(true);
        } else {
            if (warning) {
                setWarning(false);
            }
            setAreAnswersSubmitted(true);
        }
    }

    // onClick -- Next button
    const handleNext = () => {
        setGotoNext(true);
        setAreAnswersSubmitted(false);
    }

    return (  
        <>
            {
                areAnswersSubmitted ?
                    <Button
                        text="Next"
                        onClick={handleNext}
                    />
                    :
                    <Button
                        text="Submit"
                        onClick={handleSubmitAnswers}
                    />
            }
        </>
    );
}
 
export default ProceedButton;