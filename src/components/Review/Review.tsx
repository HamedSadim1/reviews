import { SURPRISE_BUTTON_TEXT } from "../../constants";
import { useReviewCarousel } from "../../hooks/useReviewCarousel";
import { ReviewAvatar } from "./ReviewAvatar";
import { ReviewInfo } from "./ReviewInfo";
import { ReviewNavigation } from "./ReviewNavigation";
import { RandomButton } from "./RandomButton";
import { ReviewProgress } from "./ReviewProgress";

export const Review = () => {
  const { review, goPrev, goNext, goRandom, goTo, currentIndex, totalReviews } =
    useReviewCarousel();
  const { name, job, image, text } = review;

  return (
    <article className="review">
      <div key={currentIndex} className="review-content review-animate">
        <ReviewAvatar image={image} name={name} />
        <ReviewInfo name={name} job={job} text={text} />
        <ReviewProgress
          currentIndex={currentIndex}
          total={totalReviews}
          onGoTo={goTo}
        />
        <ReviewNavigation onPrev={goPrev} onNext={goNext} />
        <RandomButton onClick={goRandom} label={SURPRISE_BUTTON_TEXT} />
      </div>
    </article>
  );
};

export default Review;
