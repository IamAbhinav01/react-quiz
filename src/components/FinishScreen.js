function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) {
    emoji = ' 🎉 Perfect Score! 🎉';
  } else if (percentage >= 75) {
    emoji = ' 😊 Great Job! 😊';
  } else if (percentage >= 50) {
    emoji = ' 😊 Good Job! 😊';
  } else if (percentage >= 25) {
    emoji = ' 😐 Keep Trying! 😐';
  } else {
    emoji = ' 😞 Better Luck Next Time! 😞';
  }
  return (
    <>
      <p className="result">
        Congratulations! You have completed the quiz.<span>{emoji}</span> Your
        score is <strong>{points}</strong> point out of{' '}
        <strong>{maxPossiblePoints}</strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
