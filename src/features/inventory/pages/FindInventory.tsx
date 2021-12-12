import { Box, Heading } from '@chakra-ui/react';
import { LookUp } from 'components/LookUp';
import { VicinityProducts } from 'components/VicinityProducts';

import { ItemCard } from '../components/ItemCard';
import { useAllInventoryItems } from '../hooks/useInventory';

export const FindInventory = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const transaction = () => {
    console.log('Lecimy z transakcją');
  };

  const [{ data }] = useAllInventoryItems();

  const inventory = data ?? [];

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading>Wyszukaj Produkty</Heading>
        <LookUp isPrivateAccount={isPrivateAccount} />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <VicinityProducts
          handleDistanceChange={() => {}}
          distance={0}
          productsNeeded={data?.map((d) => d.name) ?? []}
        />
        <Box>
          {inventory.map((element) => (
            <ItemCard
              logo={element?.image}
              name={element?.name}
              category={element?.category}
              owner={element?.expirationDate}
              quantity={element?.quantity}
              description={element?.description}
              action={transaction}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
