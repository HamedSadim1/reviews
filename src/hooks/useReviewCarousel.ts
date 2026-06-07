import { useState, useCallback, useEffect } from "react";
import { reviewsData } from "../data";
import { INITIAL_REVIEW_INDEX } from "../constants";
import { nextIndex, prevIndex, randomIndex } from "../utils";
import type { IREVIEWS } from "../data";

export interface UseReviewCarouselReturn {
  /** The current review object (name, job, image, text) */
  review: IREVIEWS;
  /** Navigate to the previous review */
  goPrev: () => void;
  /** Navigate to the next review */
  goNext: () => void;
  /** Jump to a random review */
  goRandom: () => void;
  /** Navigate to a specific index */
  goTo: (index: number) => void;
  /** 0-based index of the current review */
  currentIndex: number;
  /** Total number of reviews */
  totalReviews: number;
}

/**
 * Custom hook that manages review carousel state.
 *
 * Returns the current review, navigation callbacks, and metadata
 * so that any presentational component can remain stateless.
 * Supports keyboard navigation (Left/Right arrow keys).
 */
export const useReviewCarousel = (
  initialIndex: number = INITIAL_REVIEW_INDEX,
): UseReviewCarouselReturn => {
  const [index, setIndex] = useState<number>(initialIndex);
  const totalReviews = reviewsData.length;

  const goPrev = useCallback(
    () => setIndex((i) => prevIndex(i, totalReviews)),
    [totalReviews],
  );

  const goNext = useCallback(
    () => setIndex((i) => nextIndex(i, totalReviews)),
    [totalReviews],
  );

  const goRandom = useCallback(
    () => setIndex((i) => randomIndex(i, totalReviews)),
    [totalReviews],
  );

  const goTo = useCallback(
    (target: number) => {
      setIndex(target);
    },
    [],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext]);

  const review = reviewsData[index];

  return {
    review,
    goPrev,
    goNext,
    goRandom,
    goTo,
    currentIndex: index,
    totalReviews,
  } satisfies UseReviewCarouselReturn;
};
