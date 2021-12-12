import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-supabase';
import { Box, Button, Container, Flex, Image, Input, Text } from '@chakra-ui/react';
import { Paths } from 'services/routes/Paths';

import Logo from '../../../assets/logo.png';
import { FormInput } from '../components/FormInput';

export const Login = () => {
  const [, signIn] = useSignIn();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { error } = await signIn({ email, password });

      setLoading(false);

      if (error) throw error;

      navigate(Paths.Dashboard);
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <Box m={20}>
      <Container maxW="xl" centerContent mb={10} mt={10}>
        <Image boxSize="100px" src={Logo} alt="Logo" />
      </Container>
      <Container maxW="sm" centerContent mb={10}>
        <Box textStyle="h1" mb={4}>
          Logowanie
        </Box>
        <Text fontSize="md">Zaloguj się do platformy Pet Share</Text>
      </Container>
      <FormInput
        text="Email"
        input={<Input placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />}
      />
      <FormInput
        text="Hasło"
        input={
          <Input
            type="password"
            placeholder="Hasło"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        }
      />
      <Box m={20} />
      <Flex justify="center">
        <Button width={200} colorScheme="blue" size="md" onClick={(e) => handleLogin(e)}>
          <Text fontSize="md">Zaloguj</Text>
        </Button>
      </Flex>
    </Box>
  );
};
