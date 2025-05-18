import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';

import DataItem from '../../ui/DataItem';
import Flag from '../../ui/Flag';

import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';

// A purely presentational component
function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="bg-gray-0 overflow-hidden rounded-md border-1 border-gray-100 bg-white">
      <header className="flex items-center justify-between bg-violet-600 px-3 py-4 text-base font-semibold text-[#e0e7ff]">
        <div className="flex items-center gap-3 text-base font-semibold">
          <HiOutlineHomeModern className="h-7 w-7" />
          <p className="text-base">
            {numNights} nights in Cabin
            <span className="font-sono ml-2">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>
      </header>

      <section className="mt-2 px-4 py-4">
        <div className="mb-2 flex items-center gap-3 text-base text-gray-500">
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p className="font-semibold text-gray-700">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>
      </section>

      {observations && (
        <DataItem
          icon={<HiOutlineChatBubbleBottomCenterText />}
          label="Observations"
        >
          {observations}
        </DataItem>
      )}

      <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
        {hasBreakfast ? 'Yes' : 'No'}
      </DataItem>

      <div
        className={`mx-4 mt-5 flex items-center justify-between rounded-sm px-3 py-3 ${isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
      >
        <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
          {formatCurrency(totalPrice)}

          {hasBreakfast &&
            ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
              extrasPrice,
            )} breakfast)`}
        </DataItem>

        <p className="pr-5 text-sm font-semibold uppercase">
          {isPaid ? 'Paid' : 'Will pay at property'}
        </p>
      </div>

      <footer className="px-2 py-5 text-right text-sm text-gray-500">
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;

// import styled from 'styled-components';

//   const StyledBookingDataBox = styled.section`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   overflow: hidden;
// `;

// const Header = styled.header`
//   background-color: var(--color-brand-500);
//   padding: 2rem 4rem;
//   color: #e0e7ff;
//   font-size: 1.8rem;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   svg {
//     height: 3.2rem;
//     width: 3.2rem;
//   }

//   & div:first-child {
//     display: flex;
//     align-items: center;
//     gap: 1.6rem;
//     font-weight: 600;
//     font-size: 1.8rem;
//   }

//   & span {
//     font-family: 'Sono';
//     font-size: 2rem;
//     margin-left: 4px;
//   }
// `;

// const Section = styled.section`
//   padding: 3.2rem 4rem 1.2rem;
// `;

// const Guest = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.2rem;
//   margin-bottom: 1.6rem;
//   color: var(--color-grey-500);

//   & p:first-of-type {
//     font-weight: 500;
//     color: var(--color-grey-700);
//   }
// `;

// const Price = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1.6rem 3.2rem;
//   border-radius: var(--border-radius-sm);
//   margin-top: 2.4rem;

//   background-color: ${(props) =>
//     props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
//   color: ${(props) =>
//     props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

//   & p:last-child {
//     text-transform: uppercase;
//     font-size: 1.4rem;
//     font-weight: 600;
//   }

//   svg {
//     height: 2.4rem;
//     width: 2.4rem;
//     color: currentColor !important;
//   }
// `;

// const Footer = styled.footer`
//   padding: 1.6rem 4rem;
//   font-size: 1.2rem;
//   color: var(--color-grey-500);
//   text-align: right;
// `;

// return (
//   <StyledBookingDataBox>
//     <Header>
// <div>
//   <HiOutlineHomeModern />
//   <p>
//     {numNights} nights in Cabin <span>{cabinName}</span>
//   </p>
// </div>

// <p>
//   {format(new Date(startDate), "EEE, MMM dd yyyy")} (
//   {isToday(new Date(startDate))
//     ? "Today"
//     : formatDistanceFromNow(startDate)}
//   ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
// </p>
//     </Header>

//     <Section>
//       <Guest>
// {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
// <p>
//   {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
// </p>
// <span>&bull;</span>
// <p>{email}</p>
// <span>&bull;</span>
// <p>National ID {nationalID}</p>
//       </Guest>

// {observations && (
//   <DataItem
//     icon={<HiOutlineChatBubbleBottomCenterText />}
//     label="Observations"
//   >
//     {observations}
//   </DataItem>
// )}

// <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
//   {hasBreakfast ? "Yes" : "No"}
// </DataItem>

//       <Price isPaid={isPaid}>
// <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
//   {formatCurrency(totalPrice)}

//   {hasBreakfast &&
//     ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
//       extrasPrice
//     )} breakfast)`}
// </DataItem>

// <p>{isPaid ? "Paid" : "Will pay at property"}</p>
//       </Price>
//     </Section>

//     <Footer>
// <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
//     </Footer>
//   </StyledBookingDataBox>
// );
