interface ResultCardProps {
  total: number;
  score: number;
  onRetake: () => void;
  onHome: () => void;
}

export default function ResultCard({
  total,
  score,
  onRetake,
  onHome,
}: ResultCardProps) {
  const incorrect = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="card result-card">
      <p className="muted">Quiz Completed</p>
      <h2>Your score:</h2>
      <div className="score-box">
        {score} / {total}
      </div>

      <ul className="stats">
        <li>
          <span>Total questions</span>
          <strong>{total}</strong>
        </li>
        <li>
          <span>Correct answers</span>
          <strong className="good">{score}</strong>
        </li>
        <li>
          <span>Incorrect answers</span>
          <strong className="bad">{incorrect}</strong>
        </li>
        <li>
          <span>Percentage</span>
          <strong>{percentage}%</strong>
        </li>
      </ul>

      <div className="button-row">
        <button className="btn" onClick={onRetake}>
          Retake Quiz
        </button>
        <button className="btn btn-outline" onClick={onHome}>
          Return Home
        </button>
      </div>
    </div>
  );
}