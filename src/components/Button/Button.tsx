import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  actionOnClick: () => void;
  text: string;
}
const Button = ({
  text,
  actionOnClick,
  className: className,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled onClick={actionOnClick} className={className}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
