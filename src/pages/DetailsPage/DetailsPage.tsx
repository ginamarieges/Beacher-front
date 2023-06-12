import Button from "../../components/Button/Button";
import DetailsPageStyled from "./DetailsPageStyled";

const DetailsPage = (): React.ReactElement => {
  return (
    <DetailsPageStyled className="beach">
      <h1 className="details-title">Details</h1>
      <div className="beach__container">
        <img
          src="https://cdn.discordapp.com/attachments/1100447017337094238/1117532232366694481/aiguafreda-06.webp"
          alt="aiguafreda landscape"
          width={250}
          height={200}
        />
        <h2 className="beach__name">Aiguafreda</h2>
        <span className="beach__region">Baix Empordà</span>
        <span className="town">Begur</span>
        <div className="services-container">
          <h3 className="services-title">Services</h3>
          <span>
            <img
              src="/img/baywatch.svg"
              alt="baywatch icon"
              width={15}
              height={15}
            />
            Baywatch
          </span>
          <span>
            <img
              src="/img/parasol.svg"
              alt="parasol icon"
              width={15}
              height={15}
            />
            Umbrellas
          </span>
          <span>
            <img
              src="/img/cutlery.svg"
              alt="cutlery icon"
              width={15}
              height={15}
            />
            Restaurant
          </span>
        </div>
        <p className="beach__description">
          Aiguafreda Beach is a beautiful coastal spot located in the town of
          Begur, in the region of Costa Brava. It offers a picturesque setting
          with clear turquoise waters and rocky cliffs.
        </p>
        <Button className="light-button" text="modify" />
        <Button className="light-button" text="delete" />
      </div>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
