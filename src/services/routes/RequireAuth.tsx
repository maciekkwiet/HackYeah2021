import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'services/auth/hooks/useAuth';

import { Paths } from './Paths';

export const RequireAuth = () => {
  const { user, profile } = useAuth();

  if (!user) return <Navigate to={Paths.Login} />;

  if (user && !profile) return <p>Loading...</p>;

  return <Outlet />;
};
