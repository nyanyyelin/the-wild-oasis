import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting as updateSettingAPI } from '../../services/apiSettings';
import toast from 'react-hot-toast';

const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success('Setting updated successfully');
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateSetting };
};

export default useUpdateSetting;
