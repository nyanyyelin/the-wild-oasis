// import styled from 'styled-components';

// export const Flag = styled.img`
//   max-width: 2rem;
//   border-radius: var(--border-radius-tiny);
//   display: block;
//   border: 1px solid var(--color-grey-100);
// `;

const Flag = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="block w-8 rounded-sm border-1 border-gray-100"
    />
  );
};

export default Flag;
