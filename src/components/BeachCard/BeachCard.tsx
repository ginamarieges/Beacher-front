import { Link } from "react-router-dom";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import { useAppDispatch } from "../../store";
import {
  deleteBeachActionCreator,
  loadBeachesActionCreator,
} from "../../store/beaches/beachesSlice";
import { BeachStructure } from "../../store/beaches/types";
import Button from "../Button/Button";
import BeachCardStyled from "./BeachCardStyled";

interface BeachCardProps {
  beach: BeachStructure;
  isLazy: "eager" | "lazy";
  userId: string;
}
const BeachCard = ({
  isLazy,
  beach: { image, name, town, id, user },
  userId,
}: BeachCardProps) => {
  const { deleteBeach, getBeaches } = useBeaches();
  const dispatch = useAppDispatch();

  const handleOnClick = async () => {
    if (id) {
      await deleteBeach(id);
      dispatch(deleteBeachActionCreator(id));
    }

    const beachesData = await getBeaches();
    if (beachesData) {
      dispatch(loadBeachesActionCreator(beachesData));
    }
  };

  return (
    <BeachCardStyled className="card">
      <Link to={`/beaches/${id}`} aria-label="navigate-to-details-page">
        <img
          className="card__image"
          loading={isLazy}
          src={image}
          alt={name}
          width={258}
          height={85}
        />
        <h2 className="card__name">{name}</h2>
        <span className="card__town">{town}</span>
      </Link>
      {user === userId && (
        <Button
          accessibility="close-button"
          className="card__button"
          actionOnClick={handleOnClick}
        >
          <img src="/img/delete.svg" alt="delete" width={24} height={24} />
        </Button>
      )}
    </BeachCardStyled>
  );
};

export default BeachCard;
