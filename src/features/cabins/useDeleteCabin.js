import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabins as deleteCabinsAPI } from '../../services/apiCabins';
import toast from 'react-hot-toast';

const useDeleteCabin = () => {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabins(id) // this is fine too bc mutate(cabinID);
    mutationFn: deleteCabinsAPI,
    onSuccess: () => {
      toast.success('Cabin successfully deleted.');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
};

export default useDeleteCabin;
