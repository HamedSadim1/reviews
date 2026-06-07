import { INITIAL_REVIEW_INDEX } from "../constants";

// ────────────────────────────────
// Circular list index helpers
// ────────────────────────────────

/**
 * Get the next index in a circular list, wrapping around to 0
 * when reaching the end.
 * @example nextIndex(3, 4) → 0
 */
export const nextIndex = (current: number, total: number): number =>
  (current + 1) % total;

/**
 * Get the previous index in a circular list, wrapping around to
 * the last element when going below 0.
 * @example prevIndex(0, 4) → 3
 */
export const prevIndex = (current: number, total: number): number =>
  (current - 1 + total) % total;

/**
 * Get a random index that is different from the current one.
 * Returns `fallback` (default `INITIAL_REVIEW_INDEX`) when there
 * is only 1 item or fewer.
 */
export const randomIndex = (
  current: number,
  total: number,
  fallback: number = INITIAL_REVIEW_INDEX,
): number => {
  if (total <= 1) return fallback;
  let random = Math.floor(Math.random() * total);
  while (random === current) {
    random = Math.floor(Math.random() * total);
  }
  return random;
};
