import BookingDataBox from '../../features/bookings/BookingDataBox';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Checkbox from '../../ui/Checkbox';
import { useEffect, useState } from 'react';

import { useMoveBack } from '../../hooks/useMoveBack';
import useBooking from '../bookings/useBooking';
import { formatCurrency } from '../../utils/helpers';
import { useCheckin } from './useCheckin';
import useSettings from '../settings/useSetttings';
import { format } from 'date-fns';
import { check } from 'prettier';

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isPending } = useBooking();
  const { settings, isPending: isLoadingSettings } = useSettings();
  const { checkin, isCheckingIn } = useCheckin();
  const moveBack = useMoveBack();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  if (isPending || isLoadingSettings || !settings) return <div>Loading...</div>;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings?.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Check in booking #{bookingId}</h1>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </div>
      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <div className="rounded-sm bg-white px-3 py-4">
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </div>
      )}
      <div className="rounded-sm bg-white px-3 py-4">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid the total amount of{' '}
          {`${formatCurrency(totalPrice + optionalBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`}
        </Checkbox>
      </div>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <button
          className="cursor-pointer rounded-md border-1 border-gray-50 bg-white px-2 py-3 text-base text-gray-600 shadow-md duration-300 hover:bg-gray-100"
          onClick={moveBack}
        >
          Back
        </button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;

// return (
//   <>
//     <Row type="horizontal">
//       <Heading as="h1">Check in booking #{bookingId}</Heading>
//       <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
//     </Row>

//     <BookingDataBox booking={booking} />

// <ButtonGroup>
//   <Button onClick={handleCheckin}>Check in booking #{bookingId}</Button>
//   <Button variation="secondary" onClick={moveBack}>
//     Back
//   </Button>
// </ButtonGroup>
//   </>
// );
