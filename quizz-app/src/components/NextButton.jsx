import React from "react";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;
  // index is zero bases but the number is not
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
