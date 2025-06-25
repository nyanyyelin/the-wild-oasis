import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  // 1.
  const numBookings = bookings.length;
  // 2.
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  // 3.
  const checkins = confirmedStays.length;
  // 4.
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);
  console.log(numDays);
  console.log(cabinCount);

  // num checkin nights / all available nights (numdays * numCabins)

  return (
    <>
      <Stat
        title="Bookings"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        color="blue"
      />
      <Stat
        title="Sales"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        title="Check ins"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
        color="indigo"
      />
      <Stat
        title="Occupancy rate"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation) * 100 + '%'}
        color="yellow"
      />
    </>
  );
};

export default Stats;
