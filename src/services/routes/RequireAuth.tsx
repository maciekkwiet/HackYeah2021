import { Navigate, Outlet } from 'react-router-dom';
import { useSupabase, useUser } from 'use-supabase';

import { Paths } from './Paths';

export const RequireAuth = () => {
  const user = useUser();

  const { auth } = useSupabase();

  const userFromToken = (auth as any).currentUser;

  if (userFromToken && !user) return <p>Loading...</p>;

  if (!user) return <Navigate to={Paths.Login} />;

  return <Outlet />;
};
