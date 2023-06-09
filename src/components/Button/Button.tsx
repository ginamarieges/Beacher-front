interface ButtonProps {
  className: string;
  actionOnClick?: () => void;
  text?: string;
  children?: React.ReactElement;
  accessibility?: string;
  disabled?: boolean;
}
const Button = ({
  text,
  actionOnClick,
  className: className,
  children,
  accessibility,
  disabled,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      aria-label={accessibility}
      onClick={actionOnClick}
      className={className}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
