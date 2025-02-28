import "./Button.scss";

export const Button = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};
