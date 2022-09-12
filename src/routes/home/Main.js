import Button from '../../components/ui/buttons/Button';

const Main = ( { startQuiz } ) => {
    return (  
        <>
            <p>
                This is a quiz about HTML, CSS and JavaScript that can be used to repeat all the basics needed in everyday's life of a web developer.

                Find out if you know all the details!
            </p>
            <Button
                text="Let's have fun!"
                onClick={startQuiz}
            />
        </>
    );
}
 
export default Main;