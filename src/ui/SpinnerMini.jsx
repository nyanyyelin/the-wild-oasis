// import styled, { keyframes } from "styled-components";
// import { BiLoaderAlt } from "react-icons/bi";

// const rotate = keyframes`
//   to {
//     transform: rotate(1turn)
//   }
// `;

// const SpinnerMini = styled(BiLoaderAlt)`
//   width: 2.4rem;
//   height: 2.4rem;
//   animation: ${rotate} 1.5s infinite linear;
// `;

import { BiLoaderAlt } from 'react-icons/bi';

export default function SpinnerMini() {
  return (
    <BiLoaderAlt className="h-[2.4rem] w-[2.4rem] animate-[spin_1.5s_linear_infinite]" />
  );
}
