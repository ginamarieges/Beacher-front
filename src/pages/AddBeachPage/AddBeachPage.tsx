import Form from "../../components/Form/Form";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import { useAppDispatch } from "../../store";
import { addBeachActionCreator } from "../../store/beaches/beachesSlice";
import { BeachStructure } from "../../store/beaches/types";
import AddBeachPageStyled from "./AddBeachPageStyled";

const AddBeachPage = (): React.ReactElement => {
  const { addBeach } = useBeaches();
  const dispatch = useAppDispatch();

  const onSubmit = async (beachData: BeachStructure) => {
    const newBeach = await addBeach(beachData);
    if (!newBeach) {
      return;
    }
    dispatch(addBeachActionCreator(newBeach));
  };

  return (
    <AddBeachPageStyled>
      <h1 className="add-title">Add beach</h1>
      <Form onSubmit={onSubmit} />
    </AddBeachPageStyled>
  );
};

export default AddBeachPage;
