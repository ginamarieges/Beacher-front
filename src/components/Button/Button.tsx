import ButtonStyled from "./ButtonStyled";

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
    <ButtonStyled onClick={actionOnClick} className={className}>
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
