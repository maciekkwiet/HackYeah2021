import { Navigate } from 'react-router-dom';
import { useCurrentUser } from 'services/auth/hooks/useCurrentUser';
import { Paths } from 'services/routes/Paths';

export const DashboardPage = () => {
  const {
    profile: { accountType },
  } = useCurrentUser();

  if (accountType === 'PRIVATE') return <Navigate to={Paths.Inventory} />;

  return <Navigate to={Paths.Needs} />;
};
