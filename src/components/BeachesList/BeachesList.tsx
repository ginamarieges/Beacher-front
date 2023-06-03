import { useAppSelector } from "../../store";

const BeachesList = (): React.ReactElement => {
  const { beaches } = useAppSelector((state) => state.beachesStore);
  return (
    <ul>
      {beaches.map((beach) => (
        <li key={beach.id}>
          <h3>{beach.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default BeachesList;
