interface ReviewProgressProps {
  currentIndex: number;
  total: number;
  onGoTo: (index: number) => void;
}

export const ReviewProgress = ({
  currentIndex,
  total,
  onGoTo,
}: ReviewProgressProps) => (
  <div className="progress-dots">
    {Array.from({ length: total }, (_, i) => (
      <button
        key={i}
        className={`progress-dot${i === currentIndex ? " active" : ""}`}
        onClick={() => onGoTo(i)}
        aria-label={`Go to review ${i + 1}`}
        type="button"
      />
    ))}
  </div>
);
