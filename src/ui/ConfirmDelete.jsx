// import styled from "styled-components";
// import Button from "./Button";
// import Heading from "./Heading";

// const StyledConfirmDelete = styled.div`
//   width: 40rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;

//   & p {
//     color: var(--color-grey-500);
//     margin-bottom: 1.2rem;
//   }

//   & div {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// function ConfirmDelete({ resourceName, onConfirm, disabled }) {
//   return (
//     <StyledConfirmDelete>
//       <Heading as="h3">Delete {resourceName}</Heading>
//       <p>
//         Are you sure you want to delete this {resourceName} permanently? This
//         action cannot be undone.
//       </p>

//       <div>
//         <Button variation="secondary" disabled={disabled}>
//           Cancel
//         </Button>
//         <Button variation="danger" disabled={disabled}>
//           Delete
//         </Button>
//       </div>
//     </StyledConfirmDelete>
//   );
// }

const ConfirmDelete = ({ resourceName, onConfirm, disabled, onCloseModal }) => {
  return (
    <div className="flex flex-col gap-5 p-7 py-9">
      <h3 className="font-poppin text-2xl leading-2.5 font-semibold">
        Delete {resourceName}
      </h3>
      <p className="mb-2 text-xl text-gray-500">
        Are you sure you want to delete this {resourceName} permanently? This
        cannot be undone.
      </p>
      <div className="flex justify-end gap-5">
        <button
          className="rounded-md border-1 bg-gray-200 px-3 py-2 text-base transition-all duration-300 hover:bg-gray-600"
          onClick={onCloseModal}
          disabled={disabled}
        >
          Cancel
        </button>
        <buton
          className="bg-gay-200 rounded-md bg-red-600 px-4 py-2 text-base text-white transition-all duration-300 hover:bg-red-800"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </buton>
      </div>
    </div>
  );
};
export default ConfirmDelete;
