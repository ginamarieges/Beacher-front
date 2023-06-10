import { useEffect, useState } from "react";
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
  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalBeaches, setTotalBeaches] = useState(0);

  useEffect(() => {
    (async () => {
      const beachesList = await getBeaches(limit, skip);

      if (beachesList) {
        const { length, beaches } = beachesList;

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = beaches[0].image;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
        dispatch(loadBeachesActionCreator(beaches));

        setTotalBeaches(length);
      }
    })();
  }, [dispatch, getBeaches, limit, skip, totalBeaches]);

  const nextPage = () => {
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setSkip(skip - limit);
  };

  return (
    <ListPageStyled>
      <span className="home-title">
        Welcome {name}! Find your perfect beach for today
      </span>
      <BeachesList />
      <Pagination
        skip={skip}
        nextPage={nextPage}
        previousPage={previousPage}
        totalBeaches={totalBeaches}
      />
    </ListPageStyled>
  );
};

export default ListPage;
