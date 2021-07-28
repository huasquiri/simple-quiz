import React, {useState} from 'react'
import ResultsQuiz from './quiz/results'
import Quiz from './quiz'
import questionsTogezer from '../data/questions-togezer'

function getAllScores(answer) {
  return answer.flat()
}
function Layout() {
  const copyQuestions = questionsTogezer
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [answer, setAnswer] = useState([])

  function handleAnswerButtonClick(options) {
    setAnswer((prevAnswer) => [...prevAnswer, options])

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < copyQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <React.Fragment>
      <div className="flex justify-between">
        {currentQuestion > 0 ? (
          <button
            className="p-2 my-2 mx-2 bg-yellow-500 text-white rounded-sm"
            onClick={() => setCurrentQuestion(0)}
          >{`Retour à la page d'accueil`}</button>
        ) : null}
        <div className="text-right w-10/12 max-w-lg mx-2">
          <h3 className="text-2xl font-bold">
            {currentQuestion + 1}/{copyQuestions.length}
          </h3>
        </div>
      </div>

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
      <div className="p-2 m-2 bg-gray-300 rounded-md w-10/12 max-w-lg">
        <h3>Array of Answers</h3>
        <pre>{JSON.stringify(getAllScores(answer), null, 2)}</pre>
      </div>
    </React.Fragment>
  )
}

export default Layout
