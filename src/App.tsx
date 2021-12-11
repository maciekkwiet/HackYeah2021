import { useSteps } from 'chakra-ui-steps';
import { LogoutButton } from 'features/auth/components/LogoutButton';
import { useUser } from 'use-supabase';

const steps = [{ label: 'Typ konta' }, { label: 'Podstawowe informacje' }, { label: 'Potwierdzenie' }];

const App = () => {
  const user = useUser();
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <>
      {user?.email}
      <br />
      <LogoutButton />
    </>
  );
};

export default App;
