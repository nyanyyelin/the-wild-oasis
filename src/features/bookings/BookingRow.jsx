import { format, isToday } from 'date-fns';
import Tag from '../../ui/Tag';
import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';
import Menus from '../../ui/Menus';
import { HiArrowDownOnSquare, HiEye, HiArrowUpOnSquare } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../check-in-out/useCheckout';
import { HiTrash } from 'react-icons/hi2';
import { useDeleteBooking } from './useDeleteBooking';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();
  const { checkout, isCheckingout } = useCheckout();
  const { deleteBooking } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <div className="grid grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] items-center gap-x-6 bg-white px-2 py-3 last:border-b-0">
      <div className="font-sono text-base font-semibold text-gray-600">
        {cabinName}
      </div>

      <div className="flex flex-col">
        <span className="text-base font-semibold">{guestName}</span>
        <span className="text-sm text-gray-500">{email}</span>
      </div>

      <div className="gap- flex flex-col">
        <span className="text-base font-semibold">
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          &rarr; {numNights} night stay
        </span>
        <span className="text-sm text-gray-500">
          {format(new Date(startDate), 'MMM dd yyyy')} &mdash;
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </div>

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      <div className="font-sono text-base font-semibold">
        {formatCurrency(totalPrice)}
      </div>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>
            {status === 'unconfirmed' && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}
            {status === 'checked-in' && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingout}
              >
                Check out
              </Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default BookingRow;

// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: 'Sono';
// `;

// const Stacked = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.2rem;

//   & span:first-child {
//     font-weight: 500;
//   }

//   & span:last-child {
//     color: var(--color-grey-500);
//     font-size: 1.2rem;
//   }
// `;

// const Amount = styled.div`
//   font-family: 'Sono';
//   font-weight: 500;
// `;

// <Table.Row>
//   <Cabin>{cabinName}</Cabin>

//   <Stacked>
//     <span>{guestName}</span>
//     <span>{email}</span>
//   </Stacked>

//   <Stacked>
// <span>
//   {isToday(new Date(startDate))
//     ? "Today"
//     : formatDistanceFromNow(startDate)}{" "}
//   &rarr; {numNights} night stay
// </span>
// <span>
//   {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
//   {format(new Date(endDate), "MMM dd yyyy")}
// </span>
//   </Stacked>

//   <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

//   <Amount>{formatCurrency(totalPrice)}</Amount>
// </Table.Row>
