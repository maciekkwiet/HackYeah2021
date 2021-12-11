import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from 'react-supabase';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';

import { FirstStep } from '../components/FirstStep';
import { SecondStep } from '../components/SecondStep';
import { StepButtons } from '../components/StepButtons';
import { ThirdStep } from '../components/ThirdStep';

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

  console.log('🚀 ~ file: Register.tsx ~ line 24 ~ Register ~ activeStep', activeStep);

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

      {activeStep === 0 && <FirstStep buttons={<StepButtons nextStep={nextStep} />} />}
      {activeStep === 1 && <SecondStep buttons={<StepButtons prevStep={prevStep} nextStep={nextStep} />} />}
      {activeStep === 2 && <ThirdStep buttons={<StepButtons prevStep={prevStep} nextStep={nextStep} />} />}
    </>
  );
};
