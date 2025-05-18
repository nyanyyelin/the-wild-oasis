import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingAPI } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => {
      deleteBookingAPI(bookingId);
      return bookingId;
    },
    onSuccess: (bookingId) => {
      toast.success(`Booking #${bookingId} is deleted`);
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
    onError: () => toast.error('Error deleting booking'),
  });

  return { deleteBooking, isDeleting };
};
