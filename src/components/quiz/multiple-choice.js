import React, {useState} from 'react'
import NextQuestionBtn from './next-question-btn'
import CheckBoxChoice from './check-box-choice'
// import {nanoid} from 'nanoid'

function MultipleChoice({questions, currentQuestion, handleAnswerButtonClick}) {
  const [opt, setOpt] = useState([])

  function handleMultipleChoice(evt, options) {
    if (evt.target.checked) {
      setOpt((prevState) => [
        ...prevState,
        {
          question: `quiz-${currentQuestion}`,
          profile: evt.target.value,
          points: options.points
        }
      ])
    } else {
      const newOptions = opt.filter((o) => o.profile !== evt.target.value)
      setOpt(newOptions)
    }
  }
  return (
    <div className="w-8/12">
      <div>
        <div className="text-right">
          <NextQuestionBtn
            handleAnswerButtonClick={handleAnswerButtonClick}
            options={opt}
            setOptions={setOpt}
          />
        </div>
      </div>
      <div className="flex m-2 bg-white rounded-lg shadow-lg">
        <div className="w-6/12">
          <img
            className="object-contain h-full w-full rounded-t-sm"
            src="https://picsum.photos/seed/picsum/500"
          />
        </div>
        <div className="flex flex-col w-6/12">
          {questions[currentQuestion].answers.map((options, index) => (
            <div key={`option-${index}`} className="p-4 m-1 rounded-lg flex">
              <div className="pr-2 py-1">
                <CheckBoxChoice
                  index={index}
                  handleMultipleChoice={handleMultipleChoice}
                  options={options}
                />
              </div>
              <div className="text-2xl">{options.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MultipleChoice
