import { useParams } from 'react-router-dom';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { PersonBox } from 'features/inventory/components/PersonSingleBox';

import { Items } from '../components/Items';
import { Status } from '../components/Status';
import { useTransaction } from '../hooks/useTransaction';

export const Transaction = () => {
  const { id } = useParams();

  const [{ data }] = useTransaction(Number(id!));

  if (!data)
    return (
      <Flex justify="center">
        <Spinner />;
      </Flex>
    );

  const transaction = data[0];

  return (
    <Flex height="85vh">
      <Flex
        border="1px"
        borderColor="gray.300"
        padding="2rem"
        width="50%"
        boxShadow="2xl"
        marginLeft="-1rem"
        marginTop="-2rem"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text fontWeight="bold">Oferujący</Text>
          <PersonBox id={transaction.giver} />
          <Text fontWeight="bold">Odbiorca</Text>
          <PersonBox id={transaction.taker} />
          <br />
          <Text fontSize="2xl" fontWeight="bold">
            Artykuły
          </Text>
          <br />
          <Items ids={transaction.items} />
        </Box>
        <Status item={transaction} />
      </Flex>

      <Box width="50%" />
    </Flex>
  );
};
