import React from "react";

const FinishedScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;

  if (points > highScore) {
    dispatch({ type: "newHighScore", payload: points });
    highScore = points;
  }
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 90) emoji = "🥈";
  else if (percentage >= 80) emoji = "🥉";
  else emoji = "🏆";
  return (
    <>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> points out of{" "}
        {maxPossiblePoints} possible points ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore"> highscore : {highScore}</p>s{" "}
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Start Again
      </button>
    </>
  );
};

export default FinishedScreen;
