import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';

const MenuContext = createContext();

const Menus = ({ children }) => {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenuContext.Provider
      value={{ open, close, openId, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
};

const Menu = ({ children }) => {
  return <div>{children} </div>;
};

const Toggle = ({ id }) => {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  const handleClick = (e) => {
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === '' || openId !== id ? open(id) : close();
  };
  return (
    <button
      className="translate-x-1.5 rounded-sm border-none bg-none p-2 transition-all duration-200 hover:bg-gray-100"
      onClick={handleClick}
    >
      <HiEllipsisVertical />
    </button>
  );
};

const List = ({ id, children }) => {
  const { openId, position, close } = useContext(MenuContext);
  const ref = useOutsideClick(close);

  if (id !== openId) return null;
  return createPortal(
    <ul
      className="fixed rounded-md bg-gray-50 shadow-md"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
};

const Button = ({ children, icon, onClick, disabled }) => {
  const { close } = useContext(MenuContext);
  const handleClick = () => {
    onClick?.();
    close();
  };
  return (
    <li>
      <button
        className="flex w-full items-center gap-2 border-none bg-transparent px-2 py-4 text-left text-base transition-all duration-200 hover:bg-gray-100"
        onClick={handleClick}
        disabled={disabled}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.Button = Button;
Menus.List = List;

export default Menus;

// import styled from "styled-components";

// const StyledMenu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const StyledToggle = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-700);
//   }
// `;

// const StyledButton = styled.button`
//   width: 100%;
//   text-align: left;
//   background: none;
//   border: none;
//   padding: 1.2rem 2.4rem;
//   font-size: 1.4rem;
//   transition: all 0.2s;

//   display: flex;
//   align-items: center;
//   gap: 1.6rem;

//   &:hover {
//     background-color: var(--color-grey-50);
//   }

//   & svg {
//     width: 1.6rem;
//     height: 1.6rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }
// `;

// const StyledList = styled.ul
//   position: fixed;

//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-md);
//   border-radius: var(--border-radius-md);

//   right: ${(props) => props.position.x}px;
//   top: ${(props) => props.position.y}px;
// ;
