import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <span className="loader" aria-label="loader"></span>
    </LoaderStyled>
  );
};

export default Loader;
