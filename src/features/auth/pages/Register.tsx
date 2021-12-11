import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from 'react-supabase';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';

const steps = [{ label: 'Typ konta' }, { label: 'Podstawowe informacje' }, { label: 'Potwierdzenie' }];

export const Register = () => {
  const [, signUp] = useSignUp();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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
