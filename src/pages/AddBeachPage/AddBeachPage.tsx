import Form from "../../components/Form/Form";
import AddBeachPageStyled from "./AddBeachPageStyled";

const AddBeachPage = (): React.ReactElement => {
  return (
    <AddBeachPageStyled>
      <h1 className="add-title">Add beach</h1>
      <Form />
    </AddBeachPageStyled>
  );
};

export default AddBeachPage;
