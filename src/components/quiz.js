import React from 'react'
import MultipleChoice from './quiz/multiple-choice'
import OneChoice from './quiz/one-choice'
function Quiz({questions, currentQuestion, handleAnswerButtonClick}) {
  return (
    <div className="flex justify-center mx-auto rounded-lg">
      <div className="p-2 bg-white shadow-sm flex-auto">
        <h3 className="text-2xl font-bold my-2">
          {questions[currentQuestion].question}
        </h3>
        <hr />
        <h5 className="text-lg my-2">
          Type of question:{' '}
          <span className="rounded-xl mx-1 p-2 bg-gray-200 flex-1 font-bold text-gray-600">
            {questions[currentQuestion].typeOfQuestion}
          </span>
        </h5>
      </div>
      <div className="p-2 bg-white shadow-sm flex-auto">
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
    </div>
  )
}

export default Quiz
