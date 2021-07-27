import React, {useState} from 'react'
import ResultsQuiz from './quiz/results'
import Quiz from './quiz'
import questions from '../data/questions'
function Layout() {
  const copyQuestions = questions
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  function handleAnswerButtonClick() {
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < copyQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <React.Fragment>
      {showScore ? (
        <ResultsQuiz
          setShowScore={setShowScore}
          setCurrentQuestion={setCurrentQuestion}
        />
      ) : (
        <Quiz
          questions={copyQuestions}
          currentQuestion={currentQuestion}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
      )}
    </React.Fragment>
  )
}

export default Layout
