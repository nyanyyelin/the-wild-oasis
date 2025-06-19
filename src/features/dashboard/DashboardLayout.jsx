import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';

const DashboardLayout = () => {
  const { isPending, bookings } = useRecentBookings();
  const { isPending: isPendingStays, stays } = useRecentStays();

  if (isPending || isPendingStays) return <div>Loading...</div>;
  console.log(bookings);
  console.log(stays);

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_34rem_auto] gap-4">
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </div>
  );
};

export default DashboardLayout;
