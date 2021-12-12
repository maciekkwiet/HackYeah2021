import { Box, Flex, Text } from '@chakra-ui/react';
import { InventoryDBItem } from 'features/inventory/typings/inventory';

export const Item = ({ name, description, price, quantity, expirationDate }: InventoryDBItem) => {
  return (
    <Flex justifyContent="space-between" width="100%">
      <Box>
        <Text fontWeight="bold">{name}</Text>
        <Text>{description}</Text>
        <Text>{quantity} szt</Text>
        {expirationDate && <Text>Ważny do {expirationDate}</Text>}
      </Box>
      <Flex alignItems="center">
        <Text fontSize="2xl">{Number(quantity) !== 0 ? Number(price) * Number(quantity) : Number(price)} zł</Text>
      </Flex>
    </Flex>
  );
};
