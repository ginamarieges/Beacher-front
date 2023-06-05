import { useEffect } from "react";
import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadBeachesActionCreator } from "../../store/beaches/beachesSlice";
import BeachesList from "../../components/BeachesList/BeachesList";
import useBeaches from "../../hooks/useBeaches/useBeaches";

const ListPage = (): React.ReactElement => {
  const { getBeaches } = useBeaches();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.userStore);

  useEffect(() => {
    (async () => {
      const beaches = await getBeaches();

      if (beaches) {
        dispatch(loadBeachesActionCreator(beaches.beaches));
      }
    })();
  }, [dispatch, getBeaches]);

  return (
    <ListPageStyled>
      <h3 className="home-title">
        Welcome {name}! Find your perfect beach for today
      </h3>
      <BeachesList />
    </ListPageStyled>
  );
};

export default ListPage;
