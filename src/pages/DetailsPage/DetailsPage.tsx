import Button from "../../components/Button/Button";
import { useAppSelector } from "../../store";

const DetailsPage = (): React.ReactElement => {
  const beach = useAppSelector((state) => state.beachesStore.beaches[0]);
  return (
    <>
      <h1 className="details-title">Details</h1>
      <div>
        <h2>{beach.name}</h2>
        <span>{beach.region}</span>
        <span>{beach.town}</span>
        <p>{beach.description}</p>
        <Button text="modify" />
        <Button text="delete" />
      </div>
    </>
  );
};

export default DetailsPage;
