import { useMutation, useQueryClient } from '@tanstack/react-query';
import { creatEditCabin as createCabinAPI } from '../../services/apiCabins';
import toast from 'react-hot-toast';

const useCreateCabin = (reset) => {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createCabinAPI,
    onSuccess: () => {
      toast.success('Cabin successfully created.');
      // causes to refetch and update the cached data
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      if (reset && typeof reset === 'function') {
        reset(); // from react-hook-form
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createCabin };
};

export default useCreateCabin;
