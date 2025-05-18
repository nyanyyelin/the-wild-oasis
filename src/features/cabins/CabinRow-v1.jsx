// import styled from 'styled-components';

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: 'Sono';
// `;

// const Price = styled.div`
//   font-family: 'Sono';
//   font-weight: 600;
// `;

// const Discount = styled.div`
//   font-family: 'Sono';
//   font-weight: 500;
//   color: var(--color-green-700);
// `;
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import useDeleteCabin from './useDeleteCabin';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { HiSquare2Stack } from 'react-icons/hi2';
import useCreateCabin from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Menus from '../../ui/Menus';

const CabinRowV1 = ({ cabin }) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const {
    id: cabinID,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const handleDuplicate = () => {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  };
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 bg-white px-2 py-3 last:border-b-0">
      <img
        className="block aspect-[3/2] w-16 -translate-x-2 scale-150 object-cover object-center py-0.5"
        src={image}
      />

      <div className="font-sono text-base font-semibold text-gray-600">
        {name}
      </div>

      <div className="font-poppins text-base">
        Fits up to {maxCapacity} guests
      </div>

      <div className="font-sono text-base font-semibold">
        {formatCurrency(regularPrice)}
      </div>

      <div className="font-sono text-base font-semibold text-green-700">
        {discount ? formatCurrency(discount) : <span>&mdash;</span>}
      </div>

      <div className="flex items-center gap-2">
        {/* <button
          className="rounded-md border-1 bg-gray-200 px-2 py-1 text-base transition-colors hover:bg-amber-300"
          onClick={handleDuplicate}
          disabled={isCreating}
        >
          <HiSquare2Stack />
        </button> */}

        <Modal>
          <Modal.Open opens="edit">
            <button className="rounded-md border-1 bg-gray-200 px-2 py-1 text-base transition-colors hover:bg-amber-300">
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens="delete">
            <button className="rounded-md border-1 bg-gray-200 px-2 py-1 text-base transition-colors hover:bg-amber-300">
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinID)}
            />
          </Modal.Window>
        </Modal>

        <Menus.Menu>
          <Menus.Toggle id={cabinID} />

          <Menus.List id={cabinID}>
            <Menus.Button
              icon={
                <HiSquare2Stack className="h-[1.6rem] w-[1.6rem] text-gray-400 transition-all duration-300" />
              }
              onClick={handleDuplicate}
            >
              Duplicate
            </Menus.Button>

            <Menus.Button
              icon={
                <HiPencil className="h-[1.6rem] w-[1.6rem] text-gray-400 transition-all duration-300" />
              }
            >
              Edit
            </Menus.Button>

            <Menus.Button
              icon={
                <HiTrash className="h-[1.6rem] w-[1.6rem] text-gray-400 transition-all duration-300" />
              }
            >
              Delete
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </div>
  );
};

// export default CabinRowV1;
