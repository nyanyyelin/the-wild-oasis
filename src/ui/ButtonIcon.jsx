const ButtonIcon = ({ children, disabled, onClick }) => {
  return (
    <button
      className="rounded-sm border-0 bg-none p-1 transition-all duration-200 hover:bg-gray-100"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;

// import styled from "styled-components";

// const ButtonIcon = styled.button`
//   background: none;
//   border: none;
//   padding: 0.6rem;
//   border-radius: var(--border-radius-sm);
//   transition: all 0.2s;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.2rem;
//     height: 2.2rem;
//     color: var(--color-brand-600);
//   }
// `;
