import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import QuizHeader from "../components/QuizHeader";
import QuestionCard from "../components/QuestionCard";

export default function Quiz() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  const handleNext = () => {
    if (selected === null) return;

    // record whether the answer is correct
    const newScore =
      selected === currentQuestion.correctAnswer ? score + 1 : score;
    setScore(newScore);

    if (isLast) {
      // quiz completed -> go to result page
      setIsFinished(true);
      navigate("/result", {
        state: { score: newScore, total: questions.length },
      });
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    }
  };

  if (isFinished) return null;

  return (
    <div className="quiz">
      <QuizHeader current={currentIndex + 1} total={questions.length} />
      <QuestionCard
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        selected={selected}
        isLast={isLast}
        onSelect={setSelected}
        onNext={handleNext}
      />
    </div>
  );
}