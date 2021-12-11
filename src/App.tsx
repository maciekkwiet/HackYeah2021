import './App.css';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { LogoutButton } from 'features/auth/components/LogoutButton';
import { useUser } from 'use-supabase';

const content = (
  <Flex py={4}>
    <Text fontSize="xs">Lecimy z nimi</Text>
  </Flex>
);

const steps = [
  { label: 'Typ konta', content },
  { label: 'Podstawowe informacje', content },
  { label: 'Potwierdzenie', content },
];

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
      <Steps activeStep={activeStep} color="blue">
        {steps.map((option) => (
          <Step colorScheme="primary" label={option.label}>
            {content}
          </Step>
        ))}
      </Steps>

      <Flex gridGap={10}>
        <Button {...{ nextStep, prevStep }} width={250} size="md" onClick={() => prevStep()}>
          <ArrowBackIcon />
        </Button>
        <Button {...{ nextStep, prevStep }} width={250} size="md" onClick={() => nextStep()}>
          <ArrowForwardIcon />
        </Button>
      </Flex>
    </>
  );
};

export default App;
