import { Badge, Button, Flex, Text } from '@chakra-ui/react';

import { useUpdateTransaction } from '../hooks/useNewTransaction';
import { Status as S, Transaction } from '../typings/transaction';

export const Pending = ({ id }: { id: number }) => {
  const { updateTransaction } = useUpdateTransaction();

  const decline = () => {
    updateTransaction({ id, status: 'DECLINED' } as any);
  };

  const approve = () => {
    updateTransaction({ id, status: 'ACCEPTED' } as any);
  };

  return (
    <Flex direction="column">
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Text fontWeight="bold" fontSize="2xl">
          Status
        </Text>
        <Badge size="2rem" colorScheme="yellow">
          Oczekująca
        </Badge>
      </Flex>
      <Text>
        Transakcja czeka na zatwierdzenie po stronie schroniska. Zatwierdź ją w momencie, kiedy uzgodnicie z oferującym
        finalną kwotę transakcji, sposób dostarczenia oraz datę odbioru produktów.
      </Text>
      <Flex mt="1rem" justifyContent="flex-end" gap="1rem">
        <Button color="red.600" onClick={decline}>
          Odrzuć transakcję
        </Button>
        <Button colorScheme="blue" onClick={approve}>
          Zatwierdź transakcję
        </Button>
      </Flex>
    </Flex>
  );
};

export const Accepted = ({ id }: { id: number }) => {
  const { updateTransaction } = useUpdateTransaction();

  const approve = () => {
    updateTransaction({ id, status: 'FINISHED' } as any);
  };

  return (
    <Flex direction="column">
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Text fontWeight="bold" fontSize="2xl">
          Status
        </Text>
        <Badge size="2rem" colorScheme="blue">
          W realizacji
        </Badge>
      </Flex>
      <Text>
        Jesteście w trakcie realizowania transakcji. Oznacz transakcję jako zrealizowaną w momencie, kiedy wszystkie
        przedmioty zostaną opłacone oraz dostarczone do schroniska.
      </Text>
      <Flex mt="1rem" justifyContent="flex-end" gap="1rem">
        <Button color="red.600">Anuluj transakcję</Button>
        <Button colorScheme="blue" onClick={approve}>
          Oznacz jako zrealizowane
        </Button>
      </Flex>
    </Flex>
  );
};

export const Finished = () => {
  return (
    <Flex direction="column">
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Text fontWeight="bold" fontSize="2xl">
          Status
        </Text>
        <Badge size="2rem" colorScheme="green">
          Zrealizowana
        </Badge>
      </Flex>
      <Text>Pomyśnie zrealizowaliście transakcję! Jeśli chcesz, możesz teraz wystawić oferującemu opinię.</Text>
      <Flex mt="1rem" justifyContent="flex-end" gap="1rem">
        <Button colorScheme="blue">Wystaw opinię oferującemu</Button>
      </Flex>
    </Flex>
  );
};

export const Status = ({ item }: { item: Transaction }) => {
  console.log('🚀 ~ file: Status.tsx ~ line 94 ~ Status ~ item', item);

  if (item?.status === 'FINISHED') return <Finished />;

  if (item?.status === 'ACCEPTED') return <Accepted id={item?.id} />;

  return <Pending id={item?.id} />;
};
