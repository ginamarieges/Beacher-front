import { useEffect } from "react";
import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadBeachesActionCreator } from "../../store/beaches/beachesSlice";
import { mockBeaches } from "../../mocks/beachesMocks";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.userStore);

  useEffect(() => {
    dispatch(loadBeachesActionCreator(mockBeaches));
  }, [dispatch]);

  return (
    <ListPageStyled>
      <h3 className="home-title">
        Welcome {name}! Find your perfect beach for today
      </h3>
    </ListPageStyled>
  );
};

export default ListPage;
