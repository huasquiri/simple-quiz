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
          points: 1,
          profile: 'profile-a',
          selected: false
        },
        {
          answer: 'Option Answer 2 (Question 1)',
          points: 1,
          profile: 'profile-b',
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
          points: 1,
          profile: 'profile-a',
          selected: false
        },
        {
          answer: 'Option Answer 2 (Question 2)',
          points: 1,
          profile: 'profile-b',
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
          points: 1,
          profile: 'profile-a',
          selected: false
        },
        {
          answer: 'Option Answer 2 (Question 3)',
          points: 1,
          profile: 'profile-b',
          selected: false
        },
        {
          answer: 'Option Answer 3 (Question 3)',
          points: 1,
          profile: 'profile-a',
          selected: false
        },
        {
          answer: 'Option Answer 4 (Question 3)',
          points: 1,
          profile: 'profile-b',
          selected: false
        }
      ]
    }
  ]

  function OneChoice({questions, currentQuestion, handleAnswerButtonClick}) {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }

  function Quiz({questions, currentQuestion, handleAnswerButtonClick}) {
    return (
      <div className="flex justify-center max-w-2xl mx-auto rounded-lg">
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
        <div className="p-2 bg-gray-50 shadow-sm flex-auto">
          {questions[currentQuestion].typeOfQuestion === 'simple' ? (
            <OneChoice
              questions={questions}
              currentQuestion={currentQuestion}
              handleAnswerButtonClick={handleAnswerButtonClick}
            />
          ) : (
            <MultipleChoice
              questions={questions}
              currentQuestion={currentQuestion}
              handleAnswerButtonClick={handleAnswerButtonClick}
            />
          )}
        </div>
      </div>
    )
  }

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

  function MultipleChoice({
    questions,
    currentQuestion,
    handleAnswerButtonClick
  }) {
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
          Next
        </button>
      </React.Fragment>
    )
  }

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
        <ResultsQuiz
          setShowScore={setShowScore}
          setCurrentQuestion={setCurrentQuestion}
        />
      ) : (
        <Quiz
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
      )}
    </React.Fragment>
  )
}

export default CardQuestion
