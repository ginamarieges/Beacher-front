import { useEffect, useState } from "react";
import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadBeachesActionCreator } from "../../store/beaches/beachesSlice";
import BeachesList from "../../components/BeachesList/BeachesList";
import useBeaches from "../../hooks/useBeaches/useBeaches";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const ListPage = (): React.ReactElement => {
  const { getBeaches } = useBeaches();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.userStore);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const beachesList = await getBeaches(page);

      if (beachesList) {
        dispatch(loadBeachesActionCreator(beachesList));

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = beachesList.beaches[0].image;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getBeaches, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <ListPageStyled>
      <span className="home-title">
        Welcome {name}! Find your perfect beach for today
      </span>
      <Filter setPage={setPage} />
      <BeachesList />
      <Pagination page={page} nextPage={nextPage} previousPage={previousPage} />
    </ListPageStyled>
  );
};

export default ListPage;
