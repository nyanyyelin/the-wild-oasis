// import styled, { css } from "styled-components";

import { useSearchParams } from 'react-router-dom';
import FilterButton from './FilterButton';

// const FilterButton = styled.button`
//   background-color: var(--color-grey-0);
//   border: none;

//   ${(props) =>
//     props.active &&
//     css`
//       background-color: var(--color-brand-600);
//       color: var(--color-brand-50);
//     `}

//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;
//   /* To give the same height as select */
//   padding: 0.44rem 0.8rem;
//   transition: all 0.3s;

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;

// const StyledFilter = styled.div`
//   border: 1px solid var(--color-grey-100);
//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-sm);
//   border-radius: var(--border-radius-sm);
//   padding: 0.4rem;
//   display: flex;
//   gap: 0.4rem;
// `;

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
