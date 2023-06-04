import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  classname: string;
  actionOnClick: () => void;
  text: string;
}
const Button = ({
  text,
  actionOnClick,
  classname,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled onClick={actionOnClick} className={classname}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
