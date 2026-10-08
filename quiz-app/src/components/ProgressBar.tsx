interface ProgressBarProps {
  current: number; // 1-based
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = (current / total) * 100;
  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}