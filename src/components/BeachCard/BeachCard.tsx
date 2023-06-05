import { BeachStructure } from "../../store/beaches/types";
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
    </BeachCardStyled>
  );
};

export default BeachCard;
