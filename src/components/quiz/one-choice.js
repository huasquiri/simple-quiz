import React from 'react'

function OneChoice({questions, currentQuestion, handleAnswerButtonClick}) {
  return (
    <div className="flex flex-row justify-center">
      {questions[currentQuestion].answers.map((options, index) => (
        <div
          key={`option-${index}`}
          className="p-4 w-4/12 flex flex-col bg-white m-1 text-2xl rounded-lg shadow-lg"
        >
          <div>
            <img
              className="object-contain h-full w-full"
              src="https://picsum.photos/seed/picsum/500"
            />
          </div>
          <div>
            <button
              onClick={() =>
                handleAnswerButtonClick([
                  {
                    question: `quiz-${currentQuestion}`,
                    profile: options.profile,
                    points: options.points
                  }
                ])
              }
              className="w-full h-64 hover:bg-yellow-300 hover:border-yellow-400 border-2 rounded-b-lg border-transparent"
            >
              {options.answer}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OneChoice
