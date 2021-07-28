import React from 'react'
import MultipleChoice from './quiz/multiple-choice'
import OneChoice from './quiz/one-choice'
function Quiz({questions, currentQuestion, handleAnswerButtonClick}) {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="text-3xl font-bold my-2 text-center text-gray-900">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="flex justify-center">
        {questions[currentQuestion].typeOfQuestion === 'simple' ? (
          <OneChoice
            questions={questions}
            currentQuestion={currentQuestion}
            handleAnswerButtonClick={handleAnswerButtonClick}
          />
        ) : (
          <MultipleChoice
            questions={questions}
            currentQuestion={currentQuestion}
            handleAnswerButtonClick={handleAnswerButtonClick}
          />
        )}
      </div>
    </React.Fragment>
  )
}

export default Quiz
