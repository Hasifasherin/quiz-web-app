import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "../data/questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === question.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true); // ✅ Show results screen
      }
    }, 800);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
      <AnimatePresence mode="wait">
        {quizFinished ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Quiz Finished! 🎉
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              Your Score:{" "}
              <span className="font-semibold text-indigo-600">{score}</span> /{" "}
              {questions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="py-3 px-6 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Restart Quiz 🔄
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="mb-6 text-gray-700">{question.question}</p>

            <div className="flex flex-col gap-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOptionClick(option)}
                  className={`py-3 px-4 rounded-lg font-medium transition 
                    ${
                      selectedOption === option
                        ? option === question.answer
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-indigo-500 text-white hover:bg-indigo-600"
                    }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <div className="mt-6 text-gray-600 font-medium">
              Score: <span className="text-indigo-600">{score}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
