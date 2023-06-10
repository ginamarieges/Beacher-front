import { useEffect } from "react";
import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadBeachesActionCreator } from "../../store/beaches/beachesSlice";
import BeachesList from "../../components/BeachesList/BeachesList";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import Pagination from "../../components/Pagination/Pagination";

const ListPage = (): React.ReactElement => {
  const { getBeaches } = useBeaches();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.userStore);

  useEffect(() => {
    (async () => {
      const beaches = await getBeaches();

      if (beaches) {
        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = beaches.beaches[0].image;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
        dispatch(loadBeachesActionCreator(beaches.beaches));
      }
    })();
  }, [dispatch, getBeaches]);

  return (
    <ListPageStyled>
      <span className="home-title">
        Welcome {name}! Find your perfect beach for today
      </span>
      <BeachesList />
      <Pagination />
    </ListPageStyled>
  );
};

export default ListPage;
