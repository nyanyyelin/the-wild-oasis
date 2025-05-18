// import styled from 'styled-components';

// const TableOperations = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.6rem;
// `;

const TableOperations = ({ children }) => {
  return <div className="flex items-center gap-4">{children}</div>;
};
export default TableOperations;
