// import styled, { css } from "styled-components";

// const Form = styled.form`
//   ${(props) =>
//     props.type !== "modal" &&
//     css`
//       padding: 2.4rem 4rem;

//       /* Box */
//       background-color: var(--color-grey-0);
//       border: 1px solid var(--color-grey-100);
//       border-radius: var(--border-radius-md);
//     `}

//   ${(props) =>
//     props.type === "modal" &&
//     css`
//       width: 80rem;
//     `}

//   overflow: hidden;
//   font-size: 1.4rem;
// `;

const Form = ({ onSubmit, children, type }) => {
  return (
    <form
      noValidate
      className={`font-poppins border-1.5 rounded-sm border-gray-200 bg-white px-4 py-5 text-base ${type === 'modal' ? 'w-[65rem]' : ''}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
export default Form;
