import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-supabase';
import { Paths } from 'services/routes/Paths';

export const LogoutButton = () => {
  const [, signOut] = useSignOut();
  const navigate = useNavigate();

  const logout = async () => {
    await signOut();
    navigate(Paths.Login);
  };

  return <button onClick={logout}>Wyloguj</button>;
};
