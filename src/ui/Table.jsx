// import styled from "styled-components";

// const StyledTable = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const CommonRow = styled.div`
//   display: grid;
//   grid-template-columns: ${(props) => props.columns};
//   column-gap: 2.4rem;
//   align-items: center;
//   transition: none;
// `;

// const StyledHeader = styled(CommonRow)`
//   padding: 1.6rem 2.4rem;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
// `;

// const StyledRow = styled(CommonRow)`
//   padding: 1.2rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

// const StyledBody = styled.section`
//   margin: 0.4rem 0;
// `;

// const Footer = styled.footer`
//   background-color: var(--color-grey-50);
//   display: flex;
//   justify-content: center;
//   padding: 1.2rem;

//   /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
//   &:not(:has(*)) {
//     display: none;
//   }
// `;

// const Empty = styled.p`
//   font-size: 1.6rem;
//   font-weight: 500;
//   text-align: center;
//   margin: 2.4rem;
// `;

// THIS APPROACH IS BETTER WITH STYLED COMPONENTS
// HARD TO WORK WITH TAILWIND CSS

import { createContext, useContext } from 'react';
const TableContext = createContext();

const Table = ({ children, columns }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="overflow-hidden rounded-md border-2 border-gray-200 text-3xl">
        {children}
      </div>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 border-b-gray-100 px-2 py-3 text-sm font-semibold tracking-wide text-gray-600 uppercase">
      {children}
    </div>
  );
};
const Row = ({ children }) => {
  const { columns } = useContext(TableContext);
  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className={`grid items-center gap-x-6 bg-white px-2 py-3 last:border-b-0`}
    >
      {children}
    </div>
  );
};
const Body = ({ children }) => {};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;

// 0.6fr_1.8fr_2.2fr_1fr_1fr_1fr
