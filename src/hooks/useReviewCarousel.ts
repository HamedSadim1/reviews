import { useState, useEffect } from "react";
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
 *
 * The React Compiler automatically memoizes all callbacks,
 * so manual useCallback wrappers are not needed.
 */
export const useReviewCarousel = (
  initialIndex: number = INITIAL_REVIEW_INDEX,
): UseReviewCarouselReturn => {
  const [index, setIndex] = useState<number>(initialIndex);
  const totalReviews = reviewsData.length;

  const goPrev = () => setIndex((i) => prevIndex(i, totalReviews));
  const goNext = () => setIndex((i) => nextIndex(i, totalReviews));
  const goRandom = () => setIndex((i) => randomIndex(i, totalReviews));
  const goTo = (target: number) => {
    setIndex(target);
  };

  // Keyboard navigation (effect avoids depending on callbacks so
  // they can remain plain functions — the React Compiler memoizes them)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setIndex((i) => prevIndex(i, totalReviews));
      } else if (e.key === "ArrowRight") {
        setIndex((i) => nextIndex(i, totalReviews));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalReviews]);

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
