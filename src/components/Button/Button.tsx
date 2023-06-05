interface ButtonProps {
  className: string;
  actionOnClick?: () => void;
  text?: string;
  children?: React.ReactElement;
  accessibility?: string;
}
const Button = ({
  text,
  actionOnClick,
  className: className,
  children,
  accessibility,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      aria-label={accessibility}
      onClick={actionOnClick}
      className={className}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
