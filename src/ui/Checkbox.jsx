// import styled from 'styled-components';

// const StyledCheckbox = styled.div`
//   display: flex;
//   gap: 1.6rem;

//   & input[type='checkbox'] {
//     height: 2.4rem;
//     width: 2.4rem;
//     outline-offset: 2px;
//     transform-origin: 0;
//     accent-color: var(--color-brand-600);
//   }

//   & input[type='checkbox']:disabled {
//     accent-color: var(--color-brand-600);
//   }

//   & label {
//     flex: 1;

//     display: flex;
//     align-items: center;
//     gap: 0.8rem;
//   }
// `;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 accent-violet-600 outline-offset-2"
      />
      <label htmlFor={!disabled ? id : ''} className="text-base">
        {children}
      </label>
    </div>
  );
}
export default Checkbox;

// return (
//   <StyledCheckbox>
//     <input
// type="checkbox"
// id={id}
// checked={checked}
// onChange={onChange}
// disabled={disabled}
//     />
//     <label htmlFor={!disabled ? id : ""}>{children}</label>
//   </StyledCheckbox>
// );
