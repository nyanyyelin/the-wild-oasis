import { useEffect } from 'react';
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  // 2. if not authenticated, redirected to login page
  useEffect(() => {
    if (isPending) return;
    if (!isAuthenticated) navigate('/login');
    console.log(isAuthenticated);
  }, [navigate, isPending, isAuthenticated]);

  // 3. While loading, show a spinner
  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        Loading...
      </div>
    );
  }
  // 4. If there IS a user, render the app;
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
