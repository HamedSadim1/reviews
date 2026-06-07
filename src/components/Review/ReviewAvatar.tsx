import { FaQuoteRight } from "react-icons/fa";
import type { IREVIEWS } from "../../data";

type ReviewAvatarProps = Pick<IREVIEWS, "image" | "name">;

export const ReviewAvatar = ({ image, name }: ReviewAvatarProps) => (
  <div className="img-container">
    <img src={image} alt={name} className="person-img" />
    <span className="quote-icon">
      <FaQuoteRight />
    </span>
  </div>
);
