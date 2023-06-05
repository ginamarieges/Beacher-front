interface ButtonProps {
  className: string;
  actionOnClick?: () => void;
  text?: string;
  children?: React.ReactElement;
}
const Button = ({
  text,
  actionOnClick,
  className: className,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button onClick={actionOnClick} className={className}>
      {text}
      {children}
    </button>
  );
};

export default Button;
