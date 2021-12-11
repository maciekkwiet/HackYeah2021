import { LogoutButton } from 'features/auth/components/LogoutButton';
import { useUser } from 'use-supabase';

const App = () => {
  const user = useUser();

  return (
    <>
      {user?.email}
      <br />
      <LogoutButton />
    </>
  );
};

export default App;
