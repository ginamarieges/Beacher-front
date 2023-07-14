import { useAppSelector } from "../../store";
import BeachCard from "../BeachCard/BeachCard";
import BeachesListStyled from "./BeachesListStyled";

const BeachesList = (): React.ReactElement => {
  const { beaches, region } = useAppSelector((state) => state.beachesStore);
  const { id } = useAppSelector((state) => state.userStore);

  return (
    <BeachesListStyled>
      <h1 className="list-title">Beaches</h1>
      <h2 className="list-region"> {region ? region : "all beaches"}</h2>
      <ul className="list">
        {beaches.map((beach, index) => (
          <li key={beach.id}>
            <BeachCard
              userId={id}
              isLazy={index < 3 ? "eager" : "lazy"}
              beach={beach}
            />
          </li>
        ))}
      </ul>
      {beaches.length === 0 && (
        <span className="no-beaches">Sorry, there are no beaches here</span>
      )}
    </BeachesListStyled>
  );
};

export default BeachesList;
