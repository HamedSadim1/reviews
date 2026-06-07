interface RandomButtonProps {
  onClick: () => void;
  label: string;
}

export const RandomButton = ({ onClick, label }: RandomButtonProps) => (
  <button className="random-btn" onClick={onClick}>
    {label}
  </button>
);
