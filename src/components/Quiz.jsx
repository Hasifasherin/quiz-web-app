import React, { useState } from "react";
import { questions } from "../data/questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = questions[currentQuestion];

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
              className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
