# Quiz App

## Components
- App
- Home
- Error404
- StatusBar
- Question
- Answer
- Result

## Routes
- Home
    - Question with Quiz ID
        - Route of first question to be integrated in the start button
        - From the second question, in the button of "Go on to the next"
- Result
    - Button in the last question "show result" or Quit --> navigate to result page
- Error404

## States
- [quiz, setQuiz]
    - Data type: Object
    - Description: fetched Quiz from question.js
    - Component: QuizContext

- [remainingQuestions, setRemainingQuestions]
    - Data type: Array 
    - Description: Questions that are not answered yet
    - Component: QuizContext

- [result, setResult]
    - Data type: Array
    - Description: Answered questions, correct and wrong answer of them, hasAnsweredCorrectly, score
    - Component: QuizContext

- [userSolution, setUserSolution] 
    - Array 
    - answers of the users to the questions
    - Component: each question Route

## useEffect
- fetchQuiz [] -- fetch Quiz when the site is loaded

## Event
- onClick 
    - Start button to start quiz
        Action: 
            - pick first question from the remainingQuestions
            - navigate to the route with picked question id
    - Next button
        Action:
            - store result in result state
            - update remainingQuesions

- onChange
    - User's solution

- onSubmit
    - Submit button of each quiz
        Action: 
            - Check solutions
            - highlight answers
