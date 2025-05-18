import { useNavigate } from 'react-router-dom';
import { login as loginAPI } from '../../services/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (data) => {
      // data -> session, user
      // setting the newly arrived data to the react query cache
      // faster login,
      // data.user is a bare user obj
      // getCurrentUser return user: { bare user obj }

      queryClient.setQueryData(['user'], { user: data.user });
      toast.success('Login successful');
      navigate('/dashboard', { replace: true });
    },
    onError: () => {
      toast.error('Provided email or password is incorrect');
    },
  });

  return { login, isLoggingIn };
};
