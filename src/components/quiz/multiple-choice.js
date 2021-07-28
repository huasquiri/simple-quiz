import React from 'react'

function MultipleChoice({questions, currentQuestion, handleAnswerButtonClick}) {
  return (
    <div className="flex flex-col m-2 bg-white rounded-lg shadow-lg">
      {questions[currentQuestion].answers.map((options, index) => (
        <div key={`option-${index}`} className="p-4 m-1 rounded-lg flex">
          <div className="pr-2 py-1">
            <input type="checkbox" />
          </div>
          <div className="text-2xl">{options.answer}</div>
        </div>
      ))}
      <div className="text-right">
        <button
          onClick={() => handleAnswerButtonClick()}
          className="bg-yellow-500 text-white p-4 m-1 rounded-lg w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12"
        >
          Suivant
        </button>
      </div>
    </div>
  )
}

export default MultipleChoice
