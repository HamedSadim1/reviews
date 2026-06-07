import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ReviewNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

export const ReviewNavigation = ({ onPrev, onNext }: ReviewNavigationProps) => (
  <div className="button-container">
    <button className="prev-btn" onClick={onPrev}>
      <FaChevronLeft />
    </button>
    <button className="next-btn" onClick={onNext}>
      <FaChevronRight />
    </button>
  </div>
);
