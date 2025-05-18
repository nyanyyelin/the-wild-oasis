const ButtonText = ({ children, onClick }) => {
  return (
    <button
      className="rounded-sm border-0 bg-none text-center text-base font-semibold text-violet-600 transition-all duration-300 hover:text-violet-700 active:text-violet-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ButtonText;

// import styled from 'styled-components';

// const ButtonText = styled.button`
//   color: var(--color-brand-600);
//   font-weight: 500;
//   text-align: center;
//   transition: all 0.3s;
//   background: none;
//   border: none;
//   border-radius: var(--border-radius-sm);

//   &:hover,
//   &:active {
//     color: var(--color-brand-700);
//   }
// `;
