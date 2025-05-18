import { useMutation, useQueryClient } from '@tanstack/react-query';
import { creatEditCabin as editCabinAPI } from '../../services/apiCabins';
import toast from 'react-hot-toast';

const useEditCabin = (reset) => {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => editCabinAPI(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited.');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      if (reset && typeof reset === 'function') {
        // reset() only fn is provided
        reset(); // from react-hook-form
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, editCabin };
};

export default useEditCabin;
