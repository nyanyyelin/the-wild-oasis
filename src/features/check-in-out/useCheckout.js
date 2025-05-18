import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export const useCheckout = () => {
  const queryClient = useQueryClient();
  const { mutate: checkout, isPending: isCheckingout } = useMutation({
    mutationFn: (bookingId) => {
      return updateBooking(bookingId, { status: 'checked-out' });
    },
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out.`);
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
    onError: () => toast.error('There was an error while checking out'),
  });

  return { checkout, isCheckingout };
};
