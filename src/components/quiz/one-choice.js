import React from 'react'

function OneChoice({questions, currentQuestion, handleAnswerButtonClick}) {
  return (
    <div className="flex flex-row justify-center">
      {questions[currentQuestion].answers.map((options, index) => (
        <div key={`option-${index}`} className="p-1 w-6/12">
          <button
            onClick={() => handleAnswerButtonClick()}
            className="bg-white p-4 m-1 w-full h-screen text-2xl rounded-lg shadow-lg hover:bg-yellow-200 hover:text-yellow-500"
          >
            {options.answer}
          </button>
        </div>
      ))}
    </div>
  )
}

export default OneChoice
