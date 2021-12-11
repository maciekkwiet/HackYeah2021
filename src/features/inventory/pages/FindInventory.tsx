import { Box, Heading } from '@chakra-ui/react';
import { LookUp } from 'components/LookUp';
import { VicinityProducts } from 'components/VicinityProducts';

import { ItemCard } from '../components/ItemCard';
import { useMyInventory } from '../hooks/useInventory';
import { useShelters } from '../hooks/useShelters';

const exampleName = 'schronXxxxxxxxxxxxx';
const exampleCategory = 'KARMA';
const exampleLogo = 'Logo';
const exampleOwner = 'Jan Kowalski';
const exampleQuantity = '6';
const exampleDescription = 'asasdadasdadasdwhkfbajkfsldfahnsdf;kjn';

export const FindInventory = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const transaction = () => {
    console.log('Lecimy z transakcją');
  };

  const a = useShelters();
  const [{ data }] = useMyInventory();

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
          <ItemCard
            logo={exampleLogo}
            name={exampleName}
            category={exampleCategory}
            owner={exampleOwner}
            quantity={exampleQuantity}
            description={exampleDescription}
            action={transaction}
          />
          <ItemCard
            logo={exampleLogo}
            name={exampleName}
            category={exampleCategory}
            owner={exampleOwner}
            quantity={exampleQuantity}
            description={exampleDescription}
            action={transaction}
          />
        </Box>
      </Box>
    </Box>
  );
};
