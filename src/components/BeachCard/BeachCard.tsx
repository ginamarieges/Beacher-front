import { useAppDispatch } from "../../store";
import { deleteBeachActionCreator } from "../../store/beaches/beachesSlice";
import { BeachStructure } from "../../store/beaches/types";
import Button from "../Button/Button";
import BeachCardStyled from "./BeachCardStyled";

interface BeachCardProps {
  beach: BeachStructure;
  isLazy: "eager" | "lazy";
}
const BeachCard = ({
  isLazy,
  beach: { image, name, town, id },
}: BeachCardProps) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(deleteBeachActionCreator(id));
  };

  return (
    <BeachCardStyled className="card">
      <img
        className="card__image"
        loading={isLazy}
        src={image}
        alt={name}
        width={258}
        height={85}
      />
      <h2 className="card__name">{name}</h2>
      <h3 className="card__town">{town}</h3>
      <Button className="card__button" actionOnClick={handleOnClick}>
        <img src="/img/delete.svg" alt="delete" width={24} height={24} />
      </Button>
    </BeachCardStyled>
  );
};

export default BeachCard;
