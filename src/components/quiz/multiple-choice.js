import React from 'react'

function MultipleChoice({questions, currentQuestion, handleAnswerButtonClick}) {
  return (
    <React.Fragment>
      {questions[currentQuestion].answers.map((options, index) => (
        <div key={`option-${index}`}>
          <div className="bg-gray-200 p-4 m-1 rounded-lg w-full flex">
            <div className="pr-2">
              <input type="checkbox" />
            </div>
            <div>{options.answer}</div>
          </div>
        </div>
      ))}
      <button
        onClick={() => handleAnswerButtonClick()}
        className="bg-yellow-500 text-white p-4 m-1 rounded-lg w-full"
      >
        Suivant
      </button>
    </React.Fragment>
  )
}

export default MultipleChoice
