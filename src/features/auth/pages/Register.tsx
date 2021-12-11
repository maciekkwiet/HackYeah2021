import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { useUser } from 'use-supabase';

const steps = [{ label: 'Typ konta' }, { label: 'Podstawowe informacje' }, { label: 'Potwierdzenie' }];

export const Register = () => {
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

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSupabase } from 'use-supabase';

// export const Register = () => {
//   const supabase = useSupabase();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     setLoading(true);

//     try {
//       const { error } = await supabase.auth.signUp({ email, password });

//       setLoading(false);

//       if (error) throw error;

//       navigate('/');
//     } catch (error) {
//       alert(error.error_description || error.message);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1>Supabase + React</h1>
//         <p>Sign up with your email below</p>
//         <div>
//           <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input
//             type="password"
//             placeholder="Your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               handleRegister();
//             }}
//             disabled={loading}
//           >
//             {loading ? <span>Loading</span> : <span>Send magic link</span>}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
