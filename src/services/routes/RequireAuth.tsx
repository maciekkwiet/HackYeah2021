import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'services/auth/hooks/useAuth';

import { Paths } from './Paths';

export const RequireAuth = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to={Paths.Login} />;

  return <Outlet />;
};
