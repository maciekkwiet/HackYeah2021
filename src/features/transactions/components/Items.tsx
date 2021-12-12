import { Divider, Flex, Text } from '@chakra-ui/react';
import { useInventoryItems } from 'features/inventory/hooks/useInventory';

import { Item } from './Item';

export const Items = ({ ids }: { ids: number[] }) => {
  const [{ data: items }] = useInventoryItems(ids);

  const total = items?.reduce((acc, val) => acc + Number(val.quantity) * Number(val.price), 0);

  return (
    <>
      {items?.map((item) => (
        <>
          <Item {...item} />
          <Divider mb="0.5rem" />
        </>
      ))}
      <Flex justifyContent="space-between">
        <Text fontWeight="bold" fontSize="2xl">
          Do zapłaty
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          {total} zł
        </Text>
      </Flex>
    </>
  );
};
