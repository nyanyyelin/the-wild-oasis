// import styled from "styled-components";

import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

// const StyledModal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-lg);
//   box-shadow: var(--shadow-lg);
//   padding: 3.2rem 4rem;
//   transition: all 0.5s;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

const Modal = ({ children, onClose }) => {
  return createPortal(
    <div className="fixed top-0 left-0 h-screen w-full bg-white/30 backdrop-blur-xs transition-all duration-500">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gray-50 shadow-lg transition-all duration-500">
        <button
          className="absolute top-1 right-3 rounded-sm border-none bg-none p-1.5 transition-all duration-200 hover:bg-gray-100"
          onClick={onClose}
        >
          <HiXMark />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body, // this can be anything document.[AnyType]
  );
};

export default Modal;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;
