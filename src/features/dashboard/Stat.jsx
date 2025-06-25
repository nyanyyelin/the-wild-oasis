// import styled from 'styled-components';

// const StyledStat = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 1.6rem;
//   display: grid;
//   grid-template-columns: 6.4rem 1fr;
//   grid-template-rows: auto auto;
//   column-gap: 1.6rem;
//   row-gap: 0.4rem;
// `;

// const Icon = styled.div`
//   grid-row: 1 / -1;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* Make these dynamic, based on the received prop */
//   background-color: var(--color-${(props) => props.color}-100);

//   & svg {
//     width: 3.2rem;
//     height: 3.2rem;
//     color: var(--color-${(props) => props.color}-700);
//   }
// `;

// const Title = styled.h5`
//   align-self: end;
//   font-size: 1.2rem;
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-500);
// `;

// const Value = styled.p`
//   font-size: 2.4rem;
//   line-height: 1;
//   font-weight: 500;
// `;

const colorMap = {
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  indigo: 'bg-indigo-100',
  yellow: 'bg-yellow-100',
};

function Stat({ icon, title, value, color }) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr] grid-rows-[auto_auto] gap-x-5 gap-y-0.5 rounded-md border border-gray-100 bg-gray-50 p-3">
      <div
        className={`row-span-full flex aspect-square items-center justify-center rounded-full ${colorMap[color]}`}
      >
        {icon}
      </div>
      <h5 className="self-end text-sm font-semibold tracking-normal text-gray-500 uppercase">
        {title}
      </h5>
      <p className="text-xl leading-none font-semibold">{value}</p>
    </div>
  );
  // return (
  //   <StyledStat>
  //     <Icon color={color}>{icon}</Icon>
  //     <Title>{title}</Title>
  //     <Value>{value}</Value>
  //   </StyledStat>
  // );
}

export default Stat;
