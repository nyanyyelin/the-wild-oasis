import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import useBookings from './useBookings';
import BookingRow from './BookingRow';
import Pagination from '../../ui/Pagination';

function BookingTable() {
  const { bookings, isPending, count } = useBookings();

  if (isPending) return <div>Loading...</div>;
  if (!bookings?.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <div className="overflow-hidden rounded-md border-2 border-gray-200 text-3xl">
        <div className="grid grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] items-center gap-x-6 border-b-gray-100 px-2 py-3 text-sm font-semibold tracking-wide text-gray-600 uppercase">
          <div>Cabins</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </div>
        {bookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
        <Pagination count={count} />
      </div>
    </Menus>
  );
}

export default BookingTable;
