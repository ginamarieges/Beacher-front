import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import { useAppSelector } from "../../store";
import { BeachStructure } from "../../store/beaches/types";
import UpdateBeachPageStyled from "./UpdateBeachPageStyled";
import { paths } from "../../routers/paths/paths";

const UpdateBeachPage = (): React.ReactElement => {
  const beach = useAppSelector((state) => state.beachesStore.beach);
  const { updateBeach } = useBeaches();
  const navigate = useNavigate();

  const actionOnSubmit = async (
    beachData: BeachStructure | Partial<BeachStructure>
  ) => {
    await updateBeach(beachData as BeachStructure);

    navigate(paths.home);
  };

  return (
    <UpdateBeachPageStyled>
      <h1 className="modify-title">Modify beach</h1>
      <Form beach={beach} onSubmit={actionOnSubmit} />
    </UpdateBeachPageStyled>
  );
};

export default UpdateBeachPage;
