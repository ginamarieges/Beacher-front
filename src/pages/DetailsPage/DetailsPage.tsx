import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import DetailsPageStyled from "./DetailsPageStyled";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  deleteBeachActionCreator,
  loadBeachByIdActionCreator,
} from "../../store/beaches/beachesSlice";
import { paths } from "../../routers/paths/paths";

const DetailsPage = (): React.ReactElement => {
  const { id } = useParams();
  const { getBeach, deleteBeach } = useBeaches();
  const dispatch = useAppDispatch();
  const beach = useAppSelector((state) => state.beachesStore.beach);
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.userStore.id);

  scrollTo(0, 0);
  useEffect(() => {
    (async () => {
      if (id) {
        const beach = await getBeach(id);
        if (beach) {
          dispatch(loadBeachByIdActionCreator(beach));
        }
      }
    })();
  }, [dispatch, getBeach, id]);

  const {
    user,
    name,
    image,
    region,
    town,
    addServices,
    description,
    services: {
      baywatch,
      dogsAllowed,
      familyBeach,
      restaurant,
      secretBeach,
      showers,
      umbrellas,
    },
  } = beach;

  const handleOnDelete = async () => {
    if (id) {
      await deleteBeach(id);
      dispatch(deleteBeachActionCreator(id));
    }
    navigate(paths.home);
  };

  return (
    <DetailsPageStyled className="beach">
      <h1 className="details-title">Details</h1>
      <div className="beach__container">
        <img
          className="beach__image"
          src={image}
          alt={`${name} landscape`}
          width={250}
          height={150}
        />
        <h2 className="beach__name">{name}</h2>
        <span className="beach__region">{region}</span>
        <span className="town">{town}</span>

        {(!umbrellas &&
          !showers &&
          !baywatch &&
          !restaurant &&
          !familyBeach &&
          !secretBeach &&
          !dogsAllowed) || (
          <div className="services-container">
            <h3 className="services-title">Services</h3>
            {baywatch && (
              <span>
                <img
                  src="/img/baywatch.svg"
                  alt="baywatch icon"
                  width={15}
                  height={15}
                />
                Baywatch
              </span>
            )}
            {umbrellas && (
              <span>
                <img
                  src="/img/parasol.svg"
                  alt="parasol icon"
                  width={15}
                  height={15}
                />
                Umbrellas
              </span>
            )}
            {restaurant && (
              <span>
                <img
                  src="/img/cutlery.svg"
                  alt="cutlery icon"
                  width={15}
                  height={15}
                />
                Restaurant
              </span>
            )}
            {dogsAllowed && (
              <span>
                <img src="/img/paw.svg" alt="paw icon" width={15} height={15} />
                Dogs allowed
              </span>
            )}
            {secretBeach && (
              <span>
                <img src="/img/spy.svg" alt="spy icon" width={15} height={15} />
                Secret beach
              </span>
            )}
            {familyBeach && (
              <span>
                <img
                  src="/img/family.svg"
                  alt="family icon"
                  width={15}
                  height={15}
                />
                Family beach
              </span>
            )}
            {showers && (
              <span>
                <img
                  src="/img/shower.svg"
                  alt="shower icon"
                  width={15}
                  height={15}
                />
                Showers
              </span>
            )}
          </div>
        )}

        <p className="beach__description">{description}</p>
        {addServices && (
          <>
            <h3>Other services</h3>
            <p>{addServices}</p>
          </>
        )}
        {userId === user && (
          <>
            <Button
              className="light-button"
              text="delete"
              actionOnClick={handleOnDelete}
            />
          </>
        )}
      </div>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
