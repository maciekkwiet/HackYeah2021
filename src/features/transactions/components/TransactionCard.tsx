import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { PersonBox } from 'features/inventory/components/PersonSingleBox';

// import { Paths } from 'services/routes/Paths';
import { Items } from './Items';

export const TransactionCard = ({ giver, taker, transactionId, items }: any) => {
  const navigate = useNavigate();

  return (
    <>
      <Box border="1px" borderColor="gray.200" w="600px" borderRadius="md" mt={4}>
        <Flex gridGap={10} justify="space-between">
          <Flex>
            <Box>
              <Text fontWeight="bold">Oferujący</Text>
              <PersonBox id={giver} small />
            </Box>
            <ArrowForwardIcon w={12} h={12} color="gray.300" mt={12} />
            <Box>
              <Text fontWeight="bold">Oferujący</Text>
              <PersonBox id={taker} />
            </Box>
          </Flex>
        </Flex>
        <Box ml={10} mr={10}>
          <Items ids={items} />
        </Box>
      </Box>
      <Box border="1px" bg="gray.100" borderColor="gray.100" w="600px" borderRadius="md" h={16}>
        <Flex justify="right" mr={4} mt={3}>
          <Button
            mr={3}
            colorScheme="blue"
            onClick={() => {
              navigate(`/transaction/${transactionId}`);
            }}
          >
            Przejdź do szczegółów
          </Button>
        </Flex>
      </Box>
    </>
  );
};
