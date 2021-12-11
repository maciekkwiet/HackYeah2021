import './App.css';

import { useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { useUser } from 'use-supabase';

const steps = [{ label: 'Typ konta' }, { label: 'Podstawowe informacje' }, { label: 'Potwierdzenie' }];

const App = () => {
  const [count, setCount] = useState(0);
  const user = useUser();
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <>
      <Box border="1px" borderColor="gray.500" m={10}>
        <Steps activeStep={activeStep} color="blue">
          {steps.map((option) => (
            <Step colorScheme="primary" label={option.label} />
          ))}
        </Steps>
      </Box>

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
