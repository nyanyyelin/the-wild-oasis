function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-6 px-4 py-0 text-base">
      <label className="flex items-center gap-3 font-semibold">
        {icon}
        <span>{label}</span>
      </label>
      {children}
    </div>
  );
}

export default DataItem;

// import styled from 'styled-components';

// const StyledDataItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.6rem;
//   padding: 0.8rem 0;
// `;

// const Label = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
//   font-weight: 500;

//   & svg {
//     width: 2rem;
//     height: 2rem;
//     color: var(--color-brand-600);
//   }
// `;

// return (
//   <StyledDataItem>
//     <Label>
//       {icon}
//       <span>{label}</span>
//     </Label>
//     {children}
//   </StyledDataItem>
// );
