import { BeachStructure } from "../../store/beaches/types";
import Button from "../Button/Button";
import BeachCardStyled from "./BeachCardStyled";

interface BeachCardProps {
  beach: BeachStructure;
}
const BeachCard = ({ beach: { image, name, town } }: BeachCardProps) => {
  return (
    <BeachCardStyled className="card">
      <img
        className="card__image"
        loading="lazy"
        src={image}
        alt={name}
        width={258}
        height={85}
      />
      <h4 className="card__name">{name}</h4>
      <span className="card__town">{town}</span>
      <Button className="card__button">
        <img src="/img/delete.svg" alt="delete" width={24} height={24} />
      </Button>
    </BeachCardStyled>
  );
};

export default BeachCard;
