import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <p> {numQuestions} questions available</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
