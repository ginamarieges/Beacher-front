import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <Header />
      <div className="notFound-container">
        <h1 className="title">404 not found</h1>
        <span className="subtitle">this are uncharted waters....</span>
        <span className="text">Sorry, that page can not be found</span>
      </div>
      <Navbar />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
