import Tag from '../../ui/Tag';

import BookingDataBox from './BookingDataBox';
import ButtonGroup from '../../ui/ButtonGroup';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import useBooking from './useBooking';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../check-in-out/useCheckout';
import { useDeleteBooking } from './useDeleteBooking';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isPending } = useBooking();
  const { checkout, isCheckingout } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const moveBack = useMoveBack();

  if (isPending) return <div>Loading... </div>;
  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-base font-semibold">Booking {bookingId}</h1>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </div>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <button
            className="rounded-sm border-1 bg-violet-600 px-3 py-2 text-base text-white hover:bg-violet-700"
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check In
          </button>
        )}
        {status === 'checked-in' && (
          <button
            className="rounded-sm border-1 bg-violet-600 px-3 py-2 text-base text-white hover:bg-violet-700"
            onClick={() => checkout(bookingId)}
            disabled={isCheckingout}
          >
            Check out
          </button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <button
              className="rounded-sm border-1 bg-red-600 px-3 py-2 text-base text-white hover:bg-red-700"
              disabled={isDeleting}
            >
              Delete Booking
            </button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1), // can add individual onSuccess, onError here too
                })
              }
            />
          </Modal.Window>
        </Modal>
        <button
          className="rounded-sm border-1 border-gray-200 bg-white px-3 py-2 text-base text-gray-600 hover:bg-gray-200"
          onClick={moveBack}
        >
          Back
        </button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;

//   secondary: css`
//     color: var(--color-grey-600);
//     background: var(--color-grey-0);
//     border: 1px solid var(--color-grey-200);

//     &:hover {
//       background-color: var(--color-grey-50);
//     }

// import styled from 'styled-components';

// import Row from '../../ui/Row';
// import Heading from '../../ui/Heading';
// import Button from '../../ui/Button';
// const HeadingGroup = styled.div`
//   display: flex;
//   gap: 2.4rem;
//   align-items: center;
// `;

/* <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #X</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup> */
