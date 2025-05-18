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

const FilterButton = ({ children, onClick, isActive }) => {
  return (
    <button
      className={`rounded-sm border-none bg-gray-50 px-2 py-2 text-sm font-medium text-black transition-all duration-300 ${isActive ? 'bg-violet-600 text-white' : 'hover:bg-violet-600 hover:text-gray-50'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
