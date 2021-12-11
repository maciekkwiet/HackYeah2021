import { ChangeEvent, useState } from 'react';
import { useSignUp, useUpsert } from 'react-supabase';
import { Box, Container, Image, Text } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Profile } from 'services/auth/typings/profile';

import Logo from '../../../assets/logo.png';
import { FirstStep } from '../components/FirstStep';
import { SecondStep } from '../components/SecondStep';
import { StepButtons } from '../components/StepButtons';
import { ThirdStep } from '../components/ThirdStep';

const steps = [{ label: 'Typ konta' }, { label: 'Podstawowe informacje' }, { label: 'Potwierdzenie' }];

export type FormData = {
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
  krs: string;
} & Profile;

const initial: FormData = {
  accountType: 'PRIVATE',
  name: 'Krzysztof Jarzyna',
  street: '',
  postCode: '',
  city: 'Szczecin',
  region: '',
  avatar: '',
  krs: '',
  // Auth Data:
  email: 'test4@hacka.com',
  password: 'test2@hacka.com',
  repeatPassword: 'test2@hacka.com',
  phone: '',
};

export const Register = () => {
  const [form, setForm] = useState(initial);
  const [, signUp] = useSignUp();
  const [, addProfile] = useUpsert('profiles');
  const { nextStep, prevStep, activeStep, setStep } = useSteps({
    initialStep: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    const { email, password, repeatPassword, phone, ...rest } = form;

    try {
      const { error, user } = await signUp({ email, password, phone });

      if (error) throw error;

      const { error: ex } = await addProfile({ userId: user?.id, ...rest });

      if (ex) throw ex;

      setStep(2);
    } catch (ex) {
      alert(ex?.message ?? 'Nie znany błąd');
    }
  };

  return (
    <>
      <Container maxW="xl" centerContent mb={10} mt={10}>
        <Image boxSize="100px" src={Logo} alt="Logo" />
      </Container>
      <Container maxW="sm" centerContent mb={10}>
        <Box textStyle="h1" mb={4}>
          Rejestracja
        </Box>
        <Text fontSize="md">Załóż konto na platformie Pet Share</Text>
      </Container>
      <Box border="1px" borderColor="gray.500" borderRadius="md" m={10} p={7}>
        {/* Powinno być indigo.600 w colorScheme ale nie działa, pewnie coś easy ale nie korzystałem wcześniej z chakry xD */}
        <Steps activeStep={activeStep} colorScheme="blue">
          {steps.map((option) => (
            <Step colorScheme="primary" label={option.label} />
          ))}
        </Steps>
      </Box>

      {activeStep === 0 && <FirstStep handleChange={handleChange} buttons={<StepButtons nextStep={nextStep} />} />}
      {activeStep === 1 && (
        <SecondStep
          form={form}
          handleChange={handleChange}
          buttons={<StepButtons prevStep={prevStep} nextStep={registerUser} />}
          isPrivateAccount={form.accountType === 'PRIVATE'}
        />
      )}
      {activeStep === 2 && <ThirdStep isPrivateAccount={form.accountType === 'PRIVATE'} />}
    </>
  );
};
