import FilterStyled from "./FilterStyled";

const Filter = (): React.ReactElement => {
  return (
    <FilterStyled className="select">
      <select className="select__input" id="region" name="region">
        <option value="">Where do you want to go?</option>
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
    </FilterStyled>
  );
};

export default Filter;
