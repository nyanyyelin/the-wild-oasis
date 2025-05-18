// import styled from "styled-components";

// const StyledSelect = styled.select`
//   font-size: 1.4rem;
//   padding: 0.8rem 1.2rem;
//   border: 1px solid
//     ${(props) =>
//       props.type === "white"
//         ? "var(--color-grey-100)"
//         : "var(--color-grey-300)"};
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-grey-0);
//   font-weight: 500;
//   box-shadow: var(--shadow-sm);
// `;

const Select = ({ options, value, type, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`rounded-sm border-1 ${type === 'white' ? 'bg-gray-50' : 'bg-gray-300'} px-2 py-2 text-sm font-medium shadow-sm`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
