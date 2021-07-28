import React, {useState} from 'react'

function CheckBoxChoice({index, handleMultipleChoice, options}) {
  const [selected, setSelected] = useState(false)

  function handleSelected(evt) {
    console.log(evt.target.checked ? 'hola' : 'no se pudo', selected)
    if (evt.target.checked) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }
  return (
    <input
      type="checkbox"
      name={`quiz-${index}`}
      onChange={(evt) => {
        handleSelected(evt)
        if (evt.target.checked !== false) {
          handleMultipleChoice(options)
        }
      }}
      checked={selected}
    />
  )
}

function MultipleChoice({questions, currentQuestion, handleAnswerButtonClick}) {
  const [options, setOptions] = useState([])

  function handleMultipleChoice(options) {
    setOptions((prevState) => [
      ...prevState,
      {
        question: `quiz-${currentQuestion}`,
        profile: options.profile,
        points: options.points
      }
    ])
  }
  return (
    <div>
      <div>
        <div className="text-right">
          <button
            onClick={() => {
              handleAnswerButtonClick(options)
              setOptions([])
            }}
            className="bg-yellow-500 text-white p-2 m-2 rounded-lg w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12"
          >
            Suivant
          </button>
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
      {/* <pre>{JSON.stringify(options, null, 2)}</pre> */}
    </div>
  )
}

export default MultipleChoice
