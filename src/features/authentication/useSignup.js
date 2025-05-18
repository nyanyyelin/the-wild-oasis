import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';

const useSingup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created. Please verify the new account frm the user's email address.",
      );
    },
  });

  return { signup, isLoading };
};

export default useSingup;
