import React from 'react'
function NextQuestionBtn({handleAnswerButtonClick, options, setOptions}) {
  return (
    <button
      onClick={() => {
        handleAnswerButtonClick(options)
        setOptions([])
      }}
      className="bg-yellow-500 text-white p-2 m-2 rounded-lg w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12"
    >
      Suivant
    </button>
  )
}

export default NextQuestionBtn
