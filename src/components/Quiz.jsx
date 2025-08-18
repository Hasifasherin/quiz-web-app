import React, { useState } from "react";
import { questions } from "../data/questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const question = questions[currentQuestion];

  // Handle user selecting an option
  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === question.answer) {
      setScore(score + 1);
    }

    // Move to next question after short delay
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert(`Quiz Finished! ✅ Your score: ${score + (option === question.answer ? 1 : 0)} / ${questions.length}`);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p className="mb-6">{question.question}</p>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`py-2 px-4 rounded transition 
                ${
                  selectedOption === option
                    ? option === question.answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-700">
          Score: {score}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
