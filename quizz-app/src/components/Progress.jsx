import React from "react";

const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong> of {numQuestions}
      </p>
      <p>
        <strong>
          {points}/ {maxPossiblePoints}
        </strong>{" "}
        points
      </p>
    </header>
  );
};

export default Progress;
