import ProgressBar from "./ProgressBar";

interface QuizHeaderProps {
  current: number; // 1-based
  total: number;
}

export default function QuizHeader({ current, total }: QuizHeaderProps) {
  return (
    <header className="quiz-header">
      <div className="quiz-header-top">
        <h2>Frontend Quiz</h2>
        <span>
          Question {current} of {total}
        </span>
      </div>
      <ProgressBar current={current} total={total} />
    </header>
  );
}