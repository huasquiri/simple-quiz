import React from 'react'

function ResultsQuiz({setShowScore, setCurrentQuestion, scoresData}) {
  return (
    <div className="flex flex-col justify-center p-3 rounded-md bg-white shadow-lg max-w-2xl mx-auto my-3">
      <h2 className="text-3xl p-2 text-center text-blue-500">Thank you!</h2>
      <div>
        <div className="p-2 m-2 bg-gray-300 rounded-md w-10/12 max-w-lg">
          <h3>Answers</h3>
          <pre>{JSON.stringify(scoresData, null, 2)}</pre>
        </div>
      </div>
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
