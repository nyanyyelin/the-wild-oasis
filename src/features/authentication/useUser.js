import { getCurrentUser } from '../../services/apiAuth';
import { useQuery } from '@tanstack/react-query';

export const useUser = () => {
  const { isPending, data } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  // data return user: {}
  const user = data?.user ?? null;

  return {
    user,
    isPending,
    isAuthenticated: user?.role === 'authenticated',
  };
};
