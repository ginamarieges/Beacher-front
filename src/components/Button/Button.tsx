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
    <button onClick={actionOnClick} className={classname}>
      {text}
    </button>
  );
};

export default Button;
