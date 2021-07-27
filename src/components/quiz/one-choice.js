import React from 'react'

function OneChoice({questions, currentQuestion, handleAnswerButtonClick}) {
  return (
    <React.Fragment>
      {questions[currentQuestion].answers.map((options, index) => (
        <div key={`option-${index}`}>
          <button
            onClick={() => handleAnswerButtonClick()}
            className="bg-gray-200 p-4 m-1 rounded-lg w-full"
          >
            {options.answer}
          </button>
        </div>
      ))}
    </React.Fragment>
  )
}

export default OneChoice
