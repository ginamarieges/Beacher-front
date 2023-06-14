import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import { useAppDispatch } from "../../store";
import { addBeachActionCreator } from "../../store/beaches/beachesSlice";
import { BeachAddStructure } from "../../store/beaches/types";
import { showFeedbackActionCreator } from "../../store/ui/uiSlice";
import AddBeachPageStyled from "./AddBeachPageStyled";
import { paths } from "../../routers/paths/paths";
import { responseData } from "../../utils/responseData";

const AddBeachPage = (): React.ReactElement => {
  const { addBeach } = useBeaches();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  scrollTo(0, 0);

  const onSubmit = async (beachData: BeachAddStructure) => {
    const newBeach = await addBeach(beachData);
    if (newBeach) {
      dispatch(addBeachActionCreator(newBeach));
    }
    dispatch(
      showFeedbackActionCreator({
        isError: false,
        isVisible: true,
        message: responseData.addedBeach,
      })
    );
    navigate(paths.home);
  };

  return (
    <AddBeachPageStyled>
      <h1 className="add-title">Add beach</h1>
      <Form onSubmit={onSubmit} />
    </AddBeachPageStyled>
  );
};

export default AddBeachPage;
