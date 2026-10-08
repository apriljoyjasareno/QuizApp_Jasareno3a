import type { Question } from "../types";
import AnswerOption from "./AnswerOption";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selected: number | null;
  isLast: boolean;
  onSelect: (index: number) => void;
  onNext: () => void;
}

const letters = ["A", "B", "C", "D"];

export default function QuestionCard({
  question,
  questionNumber,
  selected,
  isLast,
  onSelect,
  onNext,
}: QuestionCardProps) {
  return (
    <div className="card">
      <p className="question-number">Question {questionNumber}</p>
      <h3 className="question-text">{question.text}</h3>

      <div className="answers">
        {question.choices.map((choice, index) => (
          <AnswerOption
            key={index}
            label={choice}
            letter={letters[index]}
            isSelected={selected === index}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>

      <button
        className="btn"
        onClick={onNext}
        disabled={selected === null}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
}