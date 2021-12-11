import { useNavigate } from 'react-router-dom';
import { Paths } from 'services/routes/Paths';
import { useSupabase } from 'use-supabase';

export const LogoutButton = () => {
  const { auth } = useSupabase();
  const navigate = useNavigate();

  const logout = async () => {
    await auth.signOut();
    navigate(Paths.Login);
  };

  return <button onClick={logout}>Wyloguj</button>;
};
