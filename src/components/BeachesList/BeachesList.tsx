import { useAppSelector } from "../../store";
import BeachCard from "../BeachCard/BeachCard";

const BeachesList = (): React.ReactElement => {
  const { beaches } = useAppSelector((state) => state.beachesStore);
  return (
    <ul>
      {beaches.map((beach) => (
        <li key={beach.id}>
          <BeachCard beach={beach} />
        </li>
      ))}
    </ul>
  );
};

export default BeachesList;
