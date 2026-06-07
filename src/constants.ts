// ────────────────────────────────
// App configuration
// ────────────────────────────────

/** Title displayed in the app header */
export const APP_TITLE = "our reviews" as const;

/** DOM element ID where the React app is mounted */
export const ROOT_ELEMENT_ID = "root" as const;

// ────────────────────────────────
// External service URLs
// ────────────────────────────────

/** Base URL for Cloudinary-hosted review images */
export const CLOUDINARY_BASE_URL =
  "https://res.cloudinary.com/diqqf3eq2/image/upload/" as const;

// ────────────────────────────────
// Review carousel defaults
// ────────────────────────────────

/** Index of the first review shown on load */
export const INITIAL_REVIEW_INDEX = 0 as const;

/** Label text for the random-review button */
export const SURPRISE_BUTTON_TEXT = "surprise me" as const;
