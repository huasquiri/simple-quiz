import React from 'react'

function ResultsQuiz({setShowScore, setCurrentQuestion}) {
  return (
    <div className="flex flex-col justify-center p-3 rounded-md bg-white shadow-lg max-w-2xl mx-auto my-3">
      <h2 className="text-3xl p-2 text-center text-blue-500">Thank you!</h2>
      <h3 className="text-2xl p-2 text-center text-green-500">
        There are no words to describe you!
      </h3>
      <button
        className="p-2 m-3 bg-red-500 rounded-lg text-white"
        onClick={() => {
          setShowScore(false)
          setCurrentQuestion(0)
        }}
      >
        Re-take the quiz
      </button>
    </div>
  )
}

export default ResultsQuiz
