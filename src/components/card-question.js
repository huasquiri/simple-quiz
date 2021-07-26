import React, {useState} from 'react'

function CardQuestion() {
  const questions = [
    {
      typeOfQuestion: 'simple',
      order: 1,
      question: 'Question #1',
      answers: [
        {
          answer: 'Option Answer 1 (Question 1)',
          value: 1,
          selected: false
        },
        {
          answer: 'Option Answer 2 (Question 1)',
          value: 2,
          selected: false
        }
      ]
    },
    {
      typeOfQuestion: 'simple',
      order: 2,
      question: 'Question #2',
      answers: [
        {
          answer: 'Option Answer 1 (Question 2)',
          value: 1,
          selected: false
        },
        {
          answer: 'Option Answer 2 (Question 2)',
          value: 2,
          selected: false
        }
      ]
    },
    {
      typeOfQuestion: 'multiple',
      order: 3,
      question: 'Question #3',
      answers: [
        {
          answer: 'Option Answer 1 (Question 3)',
          value: 1,
          selected: false
        },
        {
          answer: 'Option Answer 2 (Question 3)',
          value: 2,
          selected: false
        },
        {
          answer: 'Option Answer 3 (Question 3)',
          value: 3,
          selected: false
        },
        {
          answer: 'Option Answer 4 (Question 3)',
          value: 4,
          selected: false
        }
      ]
    }
  ]

  function handleAnswerButtonClick() {
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  return (
    <React.Fragment>
      {showScore ? (
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
      ) : (
        <div className="flex justify-center max-w-2xl mx-auto">
          <div className="p-2 bg-white shadow-sm flex-auto">
            <h3 className="text-2xl font-bold my-2">
              {questions[currentQuestion].question}
            </h3>
            <hr />
            <h5 className="text-lg my-2">
              Type of question:{' '}
              <span className="rounded-xl mx-1 p-2 bg-gray-200 flex-1 font-bold text-gray-600">
                {questions[currentQuestion].typeOfQuestion}
              </span>
            </h5>
          </div>
          <div className="p-2 bg-white shadow-sm flex-auto">
            {questions[currentQuestion].answers.map((options, index) => (
              <div key={`option-${index}`}>
                <button
                  onClick={() => handleAnswerButtonClick()}
                  className="bg-gray-200 p-4 m-1 rounded-lg w-full"
                >
                  {options.answer}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default CardQuestion
