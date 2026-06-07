import type { IREVIEWS } from "../../data";

type ReviewInfoProps = Pick<IREVIEWS, "name" | "job" | "text">;

export const ReviewInfo = ({ name, job, text }: ReviewInfoProps) => (
  <>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
  </>
);
