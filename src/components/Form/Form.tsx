import React, { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { BeachStructure } from "../../store/beaches/types";

const Form = (): React.ReactElement => {
  const initialBeachData: BeachStructure = {
    image: "",
    name: "",
    region: "",
    town: "",
    addServices: "",
    description: "",
    services: {
      baywatch: false,
      dogsAllowed: false,
      familyBeach: false,
      restaurant: false,
      secretBeach: false,
      showers: false,
      umbrellas: false,
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

  return (
    <FormStyled autoComplete="off" noValidate className="form">
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
          <option value="">Select...</option>
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

      <Button className="dark-button" text="create" disabled={!isReady} />
    </FormStyled>
  );
};

export default Form;
