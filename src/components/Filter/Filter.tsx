import { useAppDispatch } from "../../store";
import { filterActionCreator } from "../../store/beaches/beachesSlice";
import FilterStyled from "./FilterStyled";

const Filter = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const onChangeData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value;
    dispatch(filterActionCreator(region));
  };

  return (
    <FilterStyled className="select">
      <select
        className="select__input"
        id="region"
        name="region"
        aria-label="region-selector"
        onChange={onChangeData}
      >
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
