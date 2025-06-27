import Stats from './Stats';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import useCabins from '../cabins/useCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';
const DashboardLayout = () => {
  const { isPending, bookings } = useRecentBookings();
  const {
    isPending: isPendingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isPending: isPendingCabins } = useCabins();

  if (isPending || isPendingStays || isPendingCabins)
    return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_34rem_auto] gap-4">
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
};

export default DashboardLayout;
