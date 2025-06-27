const sizes = {
  small: 'text-sm px-0.5 py-1 uppercase font-semibold text-center',
  medium: 'text-base px-2 py-2.5 font-medium',
  large: 'text-xl px-3 py-3.5 font-medium',
};

const variations = {
  primary: 'text-gray-50 bg-gray-600 hover:bg-gray-700',
  secondary:
    'text-gray-600 bg-gray-0 border-1 border-gray-200 hover:bg-gray-50',
  danger: 'text-red-100 bg-red-700 hover:bg-red-800',
};

const Button = ({ children, onClick, type, disabled, size, variation }) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center rounded-md ${size ? sizes[size] : 'px-2 py-3 text-base'} ${variation ? variations[variation] : 'border-none bg-violet-600 text-gray-50 hover:bg-violet-700'} shadow-md duration-300`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

// const sizes = {
//   small: css`
//     font-size: 1.2rem;
//     padding: 0.4rem 0.8rem;
//     text-transform: uppercase;
//     font-weight: 600;
//     text-align: center;
//   `,
//   medium: css`
//     font-size: 1.4rem;
//     padding: 1.2rem 1.6rem;
//     font-weight: 500;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 1.2rem 2.4rem;
//     font-weight: 500;
//   `,
// };

// const variations = {
//   primary: css`
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   `,
//   secondary: css`
//     color: var(--color-grey-600);
//     background: var(--color-grey-0);
//     border: 1px solid var(--color-grey-200);

//     &:hover {
//       background-color: var(--color-grey-50);
//     }
//   `,
//   danger: css`
//     color: var(--color-red-100);
//     background-color: var(--color-red-700);

//     &:hover {
//       background-color: var(--color-red-800);
//     }
//   `,
// };
