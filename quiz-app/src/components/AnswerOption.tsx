interface AnswerOptionProps {
  label: string;
  letter: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function AnswerOption({
  label,
  letter,
  isSelected,
  onSelect,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      className={`answer ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <span className="answer-letter">{letter}</span>
      <span>{label}</span>
    </button>
  );
}