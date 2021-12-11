import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { Step, Steps } from 'chakra-ui-steps';
import { Paths } from 'services/routes/Paths';

export type ThirdStepProps = { isPrivateAccount: boolean };

export const ThirdStep = ({ isPrivateAccount }: ThirdStepProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Container maxW="xl" centerContent mb={10}>
        <Steps
          activeStep={1}
          style={{
            justifyContent: 'center',
          }}
        >
          <Step colorScheme="green.100" label="" />
        </Steps>
      </Container>
      <Container maxW="sm" centerContent mb={10}>
        <Box textStyle="h2">
          {isPrivateAccount ? 'Twoje konto zostało utworzone' : 'Utworzono konto dla Twojego schroniska'}
        </Box>
        <Text fontSize="sm" align="center">
          {isPrivateAccount
            ? 'Możesz teraz przejść to swojego inwentarza, aby dodać przedmioty, które chcesz przekazać/sprzedać schroniskom. Możesz także skorzystać z wyszukiwarki, aby odnaleźć schroniska potrzebujące wsparcia.'
            : 'Możesz teraz przejść to swojej listy potrzeb, aby określić, jakie przedmioty są potrzebne Twojemu schronisku. Możesz także skorzystać z wyszukiwarki, aby zobaczyć istniejące oferty wsparcia materialnego.'}
        </Text>
      </Container>
      <Container maxW="sm" centerContent mb={10}>
        <Flex gridGap={10}>
          <Button colorScheme="teal" variant="outline" width={200} size="md" onClick={() => {}}>
            <Text fontSize="sm">{isPrivateAccount ? 'Wyszukaj schroniska' : 'Wyszukaj oferty wsparcia'}</Text>
          </Button>
          <Button
            width={200}
            colorScheme="blue"
            size="md"
            onClick={() => {
              navigate(Paths.Dashboard);
            }}
          >
            <Text fontSize="sm">{isPrivateAccount ? 'Przejdź do inwentarza' : 'Przejdź do listy potrzeb'}</Text>
          </Button>
        </Flex>
      </Container>
    </>
  );
};
