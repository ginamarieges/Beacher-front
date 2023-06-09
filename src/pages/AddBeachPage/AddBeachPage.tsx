import Form from "../../components/Form/Form";
import { useAppDispatch } from "../../store";
import { addBeachActionCreator } from "../../store/beaches/beachesSlice";
import { BeachStructure } from "../../store/beaches/types";
import AddBeachPageStyled from "./AddBeachPageStyled";

const AddBeachPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const onSubmit = (beachData: BeachStructure) => {
    dispatch(addBeachActionCreator(beachData));
  };
  return (
    <AddBeachPageStyled>
      <h1 className="add-title">Add beach</h1>
      <Form onSubmit={onSubmit} />
    </AddBeachPageStyled>
  );
};

export default AddBeachPage;
