import { useSearchParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PAGE_SIZE } from '../../utils/constants';

const useBookings = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };
  // { field: 'status', value: filterValue, method: 'gte' };

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // QUERY
  const {
    isPending,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page], // this acts like dependency array from useEffect()
    queryFn: () => getBookings({ filter, sortBy, page }), // this has to be a function
  });

  // PRE-FETCHING FOR BETTER UX
  // prefetchInfinteQuery for infinite scroll
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isPending, bookings, error, count };
};

export default useBookings;
