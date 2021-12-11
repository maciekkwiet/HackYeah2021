import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
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
      <Box border="1px" borderColor="gray.500" m={10} p={7}>
        {/* Powinno być indigo.600 w colorScheme ale nie działa, pewnie coś easy ale nie korzystałem wcześniej z chakry xD */}
        <Steps activeStep={activeStep} colorScheme="blue">
          {steps.map((option) => (
            <Step colorScheme="primary" label={option.label} />
          ))}
        </Steps>
      </Box>

      {user?.email}
      <br />
      <LogoutButton />

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
