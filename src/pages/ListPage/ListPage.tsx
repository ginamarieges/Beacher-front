import { useEffect } from "react";
import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadBeachesActionCreator } from "../../store/beaches/beachesSlice";
import BeachesList from "../../components/BeachesList/BeachesList";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import { paginationActionCreator } from "../../store/ui/uiSlice";

const ListPage = (): React.ReactElement => {
  const { getBeaches } = useBeaches();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.userStore);
  const { page } = useAppSelector((state) => state.uiStore);

  useEffect(() => {
    (async () => {
      const beachesList = await getBeaches();

      if (beachesList) {
        dispatch(loadBeachesActionCreator(beachesList));

        const parent = document.head;
        const firstChild = document.head.firstChild;

        const linksToPreload = beachesList.beaches.slice(0, 5).map((beach) => {
          const preconnectElement = document.createElement("link");
          preconnectElement.rel = "preload";
          preconnectElement.as = "image";
          preconnectElement.href = beach.image;
          return preconnectElement;
        });

        linksToPreload.forEach((link) => {
          parent.insertBefore(link, firstChild);
        });
      }
    })();
  }, [dispatch, getBeaches]);

  const nextPage = () => {
    dispatch(paginationActionCreator(page + 1));
  };

  const previousPage = () => {
    dispatch(paginationActionCreator(page - 1));
  };

  return (
    <ListPageStyled>
      <span className="home-title">
        Welcome {name}! Find your perfect beach for today
      </span>
      <Filter />
      <BeachesList />
      <Pagination page={page} nextPage={nextPage} previousPage={previousPage} />
    </ListPageStyled>
  );
};

export default ListPage;
