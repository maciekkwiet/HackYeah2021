import { useParams } from 'react-router-dom';
import { Box, Container, Spinner, Text } from '@chakra-ui/react';
import { PersonBox } from 'features/inventory/components/PersonSingleBox';

import { useTransaction } from '../hooks/useTransaction';

export const Transaction = () => {
  const { id } = useParams();
  const [{ data }] = useTransaction(Number(id!));

  if (!data) return <Spinner />;

  const transaction = data[0];

  return (
    <Box>
      <Box
        border="1px"
        borderColor="gray.300"
        padding="2rem"
        width="50%"
        boxShadow="2xl"
        marginLeft="-1rem"
        marginTop="-2rem"
      >
        <Text fontWeight="bold">Oferujący</Text>
        <PersonBox id={transaction.giver} />
        <Text fontWeight="bold">Odbiorca</Text>
        <PersonBox id={transaction.taker} />
      </Box>

      <Box width="50%" />
    </Box>
  );
};
