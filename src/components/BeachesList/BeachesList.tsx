import { useAppSelector } from "../../store";
import BeachCard from "../BeachCard/BeachCard";
import BeachesListStyled from "./BeachesListStyled";

const BeachesList = (): React.ReactElement => {
  const { beaches } = useAppSelector((state) => state.beachesStore);
  return (
    <BeachesListStyled>
      <h2 className="list-title">Beaches</h2>
      <ul className="list">
        {beaches.map((beach, index) => (
          <li key={beach.id}>
            <BeachCard isLazy={index < 3 ? "eager" : "lazy"} beach={beach} />
          </li>
        ))}
      </ul>
    </BeachesListStyled>
  );
};

export default BeachesList;
