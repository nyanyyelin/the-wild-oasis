import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import { useState, createContext, useContext, cloneElement } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: openWindowName }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (openName !== name) return null;

  return createPortal(
    <div className="fixed top-0 left-0 h-screen w-full bg-white/30 backdrop-blur-xs transition-all duration-500">
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gray-50 shadow-lg transition-all duration-500"
        ref={ref}
      >
        <button
          className="absolute top-1 right-3 rounded-sm border-none bg-none p-1.5 transition-all duration-200 hover:bg-gray-100"
          onClick={close}
        >
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body, // this can be anything document.[AnyType]
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
