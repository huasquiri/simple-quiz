import React, {useState} from 'react'
import ResultsQuiz from './quiz/results'
import Quiz from './quiz'
import questionsTogezer from '../data/questions-togezer'
function Layout() {
  const copyQuestions = questionsTogezer
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
      {currentQuestion > 0 ? (
        <button
          className="p-2 my-2 mx-2 bg-yellow-500 text-white rounded-sm"
          onClick={() => setCurrentQuestion(0)}
        >{`Retour à la page d'accueil`}</button>
      ) : null}
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
