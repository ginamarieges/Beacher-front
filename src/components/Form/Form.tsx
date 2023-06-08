import React from "react";
import Select from "react-select";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  const options = [
    { value: "Alt Empordà", label: "Alt Empordà" },
    { value: "Baix Empordà", label: "Baix Empordà" },
    { value: "Selva", label: "Selva" },
    { value: "Maresme", label: "Maresme" },
    { value: "Barcelonès", label: "Barcelonès" },
    { value: "Baix Llobregat", label: "Baix Llobregat" },
    { value: "Garraf", label: "Garraf" },
    { value: "Baix Penedès", label: "Baix Penedès" },
    { value: "Tarragonès", label: "Tarragonès" },
    { value: "Baix Camp", label: "Baix Camp" },
    { value: "Baix Ebre", label: "Baix Ebre" },
    { value: "Montsià", label: "Montsià" },
  ];

  return (
    <FormStyled autoComplete="off" noValidate className="form">
      <label className="form__label" htmlFor="name">
        name
      </label>
      <input className="form__input" type="text" id="name" />

      <span className="form__label">region</span>
      <Select options={options} id="region" name="region" />

      <label className="form__label" htmlFor="town">
        town
      </label>
      <input className="form__input" type="text" id="town" />

      <label className="form__label" htmlFor="description">
        description
      </label>
      <textarea
        className="form__input"
        id="description"
        name="description"
        rows={7}
        cols={30}
      />

      <label className="form__label" htmlFor="image">
        image
      </label>
      <input className="form__input" type="text" id="image" />

      <span className="form__label">services</span>
      <div className="form__checkbox-controls">
        <input className="form__checkbox" type="checkbox" id="showers" />
        <label className="form__checkbox-label" htmlFor="showers">
          <img src="/img/shower.svg" alt="shower icon" />
          Showers
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input className="form__checkbox" type="checkbox" id="baywatch" />
        <label className="form__checkbox-label" htmlFor="baywatch">
          <img src="/img/baywatch.svg" alt="baywatch icon" />
          Baywatch
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input className="form__checkbox" type="checkbox" id="umbrellas" />
        <label className="form__checkbox-label" htmlFor="umbrellas">
          <img src="/img/parasol.svg" alt="parasol icon" />
          Umbrellas
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input className="form__checkbox" type="checkbox" id="restaurant" />
        <label className="form__checkbox-label" htmlFor="restaurant">
          <img src="/img/cutlery.svg" alt="cutlery icon" />
          Restaurant
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input className="form__checkbox" type="checkbox" id="secretBeach" />
        <label className="form__checkbox-label" htmlFor="secretBeach">
          <img src="/img/spy.svg" alt="secret beach icon" />
          Secret beach
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input className="form__checkbox" type="checkbox" id="familyBeach" />
        <label className="form__checkbox-label" htmlFor="familyBeach">
          <img src="/img/family.svg" alt="family beach icon" />
          Family beach
        </label>
      </div>
      <div className="form__checkbox-controls">
        <input className="form__checkbox" type="checkbox" id="dogsAllowed" />
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
      />

      <Button className="dark-button" text="create" />
    </FormStyled>
  );
};

export default Form;
