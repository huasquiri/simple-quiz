import React, {useState} from 'react'
import NextQuestionBtn from './next-question-btn'
import CheckBoxChoice from './check-box-choice'

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
    <div>
      <div>
        <div className="text-right">
          <NextQuestionBtn
            handleAnswerButtonClick={handleAnswerButtonClick}
            options={opt}
            setOptions={setOpt}
          />
        </div>
      </div>
      <div className="flex flex-col flex-auto m-2 bg-white rounded-lg shadow-lg">
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
      {/* <div className="flex flex-auto rounded-lg shadow-md bg-white m-2 p-5">
        <pre>{JSON.stringify(opt, null, 2)}</pre>
      </div> */}
    </div>
  )
}

export default MultipleChoice
