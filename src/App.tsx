import { useSteps } from 'chakra-ui-steps';
import { LogoutButton } from 'features/auth/components/LogoutButton';

const steps = [{ label: 'Typ konta' }, { label: 'Podstawowe informacje' }, { label: 'Potwierdzenie' }];

const App = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <>
      <LogoutButton />
    </>
  );
};

export default App;
