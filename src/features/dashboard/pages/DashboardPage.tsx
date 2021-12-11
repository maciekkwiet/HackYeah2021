import { Navigate } from 'react-router-dom';
import { useIsPrivateUser } from 'services/auth/hooks/useCurrentUser';
import { Paths } from 'services/routes/Paths';

export const DashboardPage = () => {
  const isPrivateUser = useIsPrivateUser();

  if (isPrivateUser) return <Navigate to={Paths.Inventory} />;

  return <Navigate to={Paths.Needs} />;
};
