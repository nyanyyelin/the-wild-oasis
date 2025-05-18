// import styled from "styled-components";

import { useFormContext } from 'react-hook-form';

// const FileInput = styled.input`
//   font-size: 1.4rem;
//   border-radius: var(--border-radius-sm);

//   &::file-selector-button {
//     font: inherit;
//     font-weight: 500;
//     padding: 0.8rem 1.2rem;
//     margin-right: 1.2rem;
//     border-radius: var(--border-radius-sm);
//     border: none;
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);
//     cursor: pointer;
//     transition: color 0.2s, background-color 0.2s;

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   }
// `;

const FileInput = ({ isEditSession }) => {
  const { register } = useFormContext();
  return (
    <input
      type="file"
      id="image"
      accept="image/*"
      className="block text-sm text-gray-500 file:cursor-pointer file:rounded-md file:border-2 file:border-gray-200 file:px-3 file:py-2 file:duration-200 hover:file:bg-gray-600 hover:file:text-gray-50"
      {...register('image', {
        required: isEditSession ? false : 'This field is required',
      })}
    />
  );
};
export default FileInput;
