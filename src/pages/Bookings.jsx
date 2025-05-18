// import Heading from '../ui/Heading';

import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';

// import Row from '../ui/Row';
function Bookings() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h1>All bookings</h1>
        <BookingTableOperations />
      </div>
      <BookingTable />
    </div>
  );
}

export default Bookings;
