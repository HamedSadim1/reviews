interface ReviewTitleProps {
  title: string;
}

export const ReviewTitle = ({ title }: ReviewTitleProps) => (
  <div className="title">
    <h2>{title}</h2>
    <div className="underline" />
  </div>
);
