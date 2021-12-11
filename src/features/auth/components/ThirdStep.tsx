import { ReactNode } from 'react';
import { Container, Text } from '@chakra-ui/react';
import { Step, Steps } from 'chakra-ui-steps';

export type ThirdStepProps = { buttons: ReactNode; isPrivateAccount: boolean };

export const ThirdStep = ({ buttons, isPrivateAccount }: ThirdStepProps) => {
  return (
    <>
      <Container maxW="xl" centerContent mb={10}>
        <Steps
          activeStep={1}
          style={{
            justifyContent: 'center',
          }}
        >
          <Step colorScheme="primary" label="" />
        </Steps>
      </Container>
      <Container maxW="sm" centerContent mb={10}>
        <Text fontSize="sm">
          {isPrivateAccount ? 'Twoje konto zostało utworzone' : 'Utworzono konto dla Twojego schroniska'}
        </Text>
        <Text fontSize="sm">
          {isPrivateAccount
            ? 'Możesz teraz przejść to swojego inwentarza, aby dodać przedmioty, które chcesz przekazać/sprzedać schroniskom. Możesz także skorzystać z wyszukiwarki, aby odnaleźć schroniska potrzebujące wsparcia.'
            : 'Możesz teraz przejść to swojej listy potrzeb, aby określić, jakie przedmioty są potrzebne Twojemu schronisku. Możesz także skorzystać z wyszukiwarki, aby zobaczyć istniejące oferty wsparcia materialnego.'}
        </Text>
      </Container>
      <div>{buttons}</div>
    </>
  );
};
