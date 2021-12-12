import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-supabase';
import { Button } from '@chakra-ui/react';
import { Paths } from 'services/routes/Paths';

export const LogoutButton = () => {
  const [, signOut] = useSignOut();
  const navigate = useNavigate();

  const logout = async () => {
    await signOut();
    navigate(Paths.Login);
  };

  return <MdLogout cursor="pointer" size="2rem" onClick={logout} />;
};
