import { useSearchParams } from 'react-router-dom';
import Select from './Select';
const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';
  const handleChange = (e) => {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Select
        options={options}
        value={sortBy}
        type="white"
        onChange={handleChange}
      />
    </div>
  );
};

export default SortBy;
