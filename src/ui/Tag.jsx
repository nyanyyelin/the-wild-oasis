// import styled from "styled-components";

// const Tag = styled.span`
//   width: fit-content;
//   text-transform: uppercase;
//   font-size: 1.1rem;
//   font-weight: 600;
//   padding: 0.4rem 1.2rem;
//   border-radius: 100px;

//   /* Make these dynamic, based on the received prop */
//   color: var(--color-${(props) => props.type}-700);
//   background-color: var(--color-${(props) => props.type}-100);
// `;

const Tag = ({ type, children }) => {
  // const customStyle = type ? `text-${type}-700 bg-${type}-100` : '';  // TAILWIND DOES NOT SUPPORT DYNAMIC STYLING
  const colorMap = {
    blue: 'text-blue-700 bg-blue-100',
    green: 'text-green-700 bg-green-100',
    silver: 'text-gray-700 bg-gray-100',
  };

  return (
    <span
      className={`w-fit rounded-2xl px-3 py-2 text-xs font-semibold uppercase ${colorMap[type]}`}
    >
      {children}
    </span>
  );
};

export default Tag;
