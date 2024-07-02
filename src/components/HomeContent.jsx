import React, { useState, useEffect, useRef } from "react";

const Quiz = ({ questions = [], resetQuiz }) => {
  const [processedQuestions, setProcessedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const hasProcessedQuestions = useRef(false);

  useEffect(() => {
    if (questions.length > 0 && !hasProcessedQuestions.current) {
      const processed = questions.map((question) => {
        const correctAnswerKey = Object.keys(question.correct_answers).find(
          (key) => question.correct_answers[key] === "true"
        );
        const correctAnswer =
          question.answers[correctAnswerKey.replace("_correct", "")];
        const options = [
          correctAnswer,
          ...Object.values(question.answers).filter(
            (answer) => answer && answer !== correctAnswer
          ),
        ];
        return { ...question, options, correctAnswer };
      });
      setProcessedQuestions(processed);
      hasProcessedQuestions.current = true;
    }
  }, [questions]);

  const handleOptionChange = (option) => setSelectedOption(option);

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      alert("Please select an option!");
      return;
    }
    if (
      selectedOption === processedQuestions[currentQuestionIndex].correctAnswer
    ) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex + 1 === processedQuestions.length) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (quizCompleted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Quiz Completed!</h2>
        <p>
          Your total score is: {score} out of {processedQuestions.length}
        </p>
        <p>Please choose a category to start a new quiz.</p>
      </div>
    );
  }

  if (processedQuestions.length === 0) {
    return (
      <div className="text-center">
        Please choose a category to start the quiz.
      </div>
    );
  }

  const question = processedQuestions[currentQuestionIndex];

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-4 flex flex-col">
      <div className="text-gray-600 mb-4">
        Question {currentQuestionIndex + 1} of {processedQuestions.length}
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">{question.question}</h2>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 border rounded-lg cursor-pointer ${
                selectedOption === option
                  ? "bg-blue-100 border-blue-500"
                  : "bg-gray-100 border-gray-300"
              }`}
              onClick={() => handleOptionChange(option)}
            >
              <input
                type="radio"
                name="options"
                value={option}
                className="hidden"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={handleNextQuestion}
        className="w-1/5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 self-end"
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
