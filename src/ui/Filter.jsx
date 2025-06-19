import { useSearchParams } from 'react-router-dom';
import FilterButton from './FilterButton';

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    // notice that .set() is used, this update the field in the url with name 'discount'
    searchParams.set(filterField, value);
    searchParams.set('page', 1);
    // setSearchParams() update the whole url;
    setSearchParams(searchParams);
  };

  return (
    <div className="flex gap-3 rounded-sm border-0 bg-gray-50 p-1 shadow-sm">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          isActive={currentFilter === option.value}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filter;
