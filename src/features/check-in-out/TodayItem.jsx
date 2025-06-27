// import styled from "styled-components";

// const StyledTodayItem = styled.li`
//   display: grid;
//   grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
//   gap: 1.2rem;
//   align-items: center;

//   font-size: 1.4rem;
//   padding: 0.8rem 0;
//   border-bottom: 1px solid var(--color-grey-100);

//   &:first-child {
//     border-top: 1px solid var(--color-grey-100);
//   }
// `;

// const Guest = styled.div`
//   font-weight: 500;
// `;
import Flag from '../../ui/Flag';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import CheckoutButton from './CheckoutButton';

const TodayItem = ({ activity }) => {
  const { id, status, numNights, guests } = activity;
  const navigate = useNavigate();
  return (
    <li className="grid grid-cols-[7rem_2rem_7rem_5rem_9rem] border-b border-b-gray-100 px-2 py-0 text-xl first:border-t first:border-t-gray-100">
      {status === 'unconfirmed' && (
        <div className="flex items-center">
          <Tag type="green">Arriving</Tag>
        </div>
      )}
      {status === 'checked-in' && (
        <div className="flex items-center">
          <Tag type="blue">Departing</Tag>
        </div>
      )}
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.countryFlag}`} />
      <div className="px-3 text-base font-semibold">{guests.fullName}</div>
      <div className="text-base">{numNights} nights</div>

      {status === 'unconfirmed' && (
        <Button
          size="small"
          variation="primary"
          onClick={() => navigate(`/checkin/${id}`)}
        >
          Check in
        </Button>
      )}
      {status === 'checked-in' && <CheckoutButton bookingId={id} />}
    </li>
  );
};

export default TodayItem;
