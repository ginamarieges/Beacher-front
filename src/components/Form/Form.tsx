import React, { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { BeachAddStructure, BeachStructure } from "../../store/beaches/types";

interface FormProps {
  onSubmit: (beachData: Partial<BeachStructure>) => void;
  beach?: BeachStructure;
}

const Form = ({ onSubmit, beach }: FormProps): React.ReactElement => {
  const initialBeachData: BeachAddStructure = {
    image: beach ? beach.image : "",
    name: beach ? beach.name : "",
    region: beach ? beach.region : "",
    town: beach ? beach.town : "",
    addServices: beach ? beach.addServices : "",
    description: beach ? beach.description : "",
    services: {
      baywatch: beach ? beach.services.baywatch : false,
      dogsAllowed: beach ? beach.services.dogsAllowed : false,
      familyBeach: beach ? beach.services.familyBeach : false,
      restaurant: beach ? beach.services.restaurant : false,
      secretBeach: beach ? beach.services.secretBeach : false,
      showers: beach ? beach.services.showers : false,
      umbrellas: beach ? beach.services.umbrellas : false,
    },
  };
  const [beachData, setBeachData] = useState(initialBeachData);

  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setBeachData({
      ...beachData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBeachData({
      ...beachData,
      services: {
        ...beachData.services,
        [event.target.id]: event.target.checked,
      },
    });
  };

  const isReady =
    beachData.name !== "" &&
    beachData.region !== "" &&
    beachData.town !== "" &&
    beachData.image !== "";

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(
      beach
        ? { ...beachData, id: beach.id, user: beach.user }
        : { ...beachData }
    );
    setBeachData(initialBeachData);
  };
  return (
    <FormStyled
      autoComplete="off"
      noValidate
      className="form"
      onSubmit={handleOnSubmit}
    >
      <label className="form__label" htmlFor="name">
        name
      </label>
      <input
        className="form__input"
        type="text"
        id="name"
        value={beachData.name}
        onChange={onChangeData}
      />
      <div className="select-container">
        <label className="form__label" htmlFor="region">
          region
        </label>
        <select
          className="form__input"
          id="region"
          name="region"
          onChange={onChangeData}
        >
          {beach ? (
            <option value="">{beach.region}</option>
          ) : (
            <option value="">Select...</option>
          )}
          <option value="Alt Empordà">Alt Empordà</option>
          <option value="Baix Empordà">Baix Empordà</option>
          <option value="Selva">Selva</option>
          <option value="Maresme">Maresme</option>
          <option value="Barcelonès">Barcelonès</option>
          <option value="Baix Llobregat">Baix Llobregat</option>
          <option value="Garraf">Garraf</option>
          <option value="Baix Penedès">Baix Penedès</option>
          <option value="Tarragonès">Tarragonès</option>
          <option value="Baix Camp">Baix Camp</option>
          <option value="Baix Ebre">Baix Ebre</option>
          <option value="Montsià">Montsià</option>
        </select>
      </div>

      <label className="form__label" htmlFor="town">
        town
      </label>
      <input
        className="form__input"
        type="text"
        id="town"
        value={beachData.town}
        onChange={onChangeData}
      />

      <label className="form__label" htmlFor="description">
        description
      </label>
      <textarea
        className="form__input"
        id="description"
        name="description"
        rows={7}
        cols={30}
        value={beachData.description}
        onChange={onChangeData}
      />

      <label className="form__label" htmlFor="image">
        image
      </label>
      <input
        className="form__input"
        type="text"
        id="image"
        value={beachData.image}
        onChange={onChangeData}
      />
      {beachData.image && (
        <img
          className="form__image-preview"
          alt="Landscape beach"
          src={beachData.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/img/no-image.svg";
            currentTarget.alt = "not found image";
          }}
        />
      )}

      <span className="form__label">services</span>
      <div className="form__checkbox-controls">
        <input
          className="form__checkbox"
          type="checkbox"
          id="showers"
          checked={beachData.services.showers}
          onChange={handleCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="showers">
          <img src="/img/shower.svg" alt="shower icon" />
          Showers
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input
          className="form__checkbox"
          type="checkbox"
          id="baywatch"
          checked={beachData.services.baywatch}
          onChange={handleCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="baywatch">
          <img src="/img/baywatch.svg" alt="baywatch icon" />
          Baywatch
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input
          className="form__checkbox"
          type="checkbox"
          id="umbrellas"
          checked={beachData.services.umbrellas}
          onChange={handleCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="umbrellas">
          <img src="/img/parasol.svg" alt="parasol icon" />
          Umbrellas
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input
          className="form__checkbox"
          type="checkbox"
          id="restaurant"
          checked={beachData.services.restaurant}
          onChange={handleCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="restaurant">
          <img src="/img/cutlery.svg" alt="cutlery icon" />
          Restaurant
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input
          className="form__checkbox"
          type="checkbox"
          id="secretBeach"
          checked={beachData.services.secretBeach}
          onChange={handleCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="secretBeach">
          <img src="/img/spy.svg" alt="secret beach icon" />
          Secret beach
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input
          className="form__checkbox"
          type="checkbox"
          id="familyBeach"
          checked={beachData.services.familyBeach}
          onChange={handleCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="familyBeach">
          <img src="/img/family.svg" alt="family beach icon" />
          Family beach
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input
          className="form__checkbox"
          type="checkbox"
          id="dogsAllowed"
          checked={beachData.services.dogsAllowed}
          onChange={handleCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="dogsAllowed">
          <img src="/img/paw.svg" alt="paw icon" />
          Dogs allowed
        </label>
      </div>

      <label className="form__label" htmlFor="addServices">
        add services
      </label>
      <textarea
        className="form__input"
        name="addServices"
        id="addServices"
        rows={3}
        cols={10}
        value={beachData.addServices}
        onChange={onChangeData}
      />

      <Button
        className="dark-button"
        text={`${beach ? "modify" : "create"}`}
        disabled={!isReady}
        actionOnClick={() => onSubmit}
      />
    </FormStyled>
  );
};

export default Form;
