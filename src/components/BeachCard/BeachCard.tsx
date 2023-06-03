import { BeachStructure } from "../../store/beaches/types";

interface BeachCardProps {
  beach: BeachStructure;
}
const BeachCard = ({ beach: { image, name, town } }: BeachCardProps) => {
  return (
    <article>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span>{town}</span>
    </article>
  );
};

export default BeachCard;
