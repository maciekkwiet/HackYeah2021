import { Box, Heading } from '@chakra-ui/react';

import { ItemCard } from '../components/ItemCard';
import { useShelters } from '../hooks/useShelters';

const exampleName = 'schronXxxxxxxxxxxxx';
const exampleCategory = 'KARMA';
const exampleLogo = 'Logo';
const exampleOwner = 'Jan Kowalski';
const exampleQuantity = '6';
const exampleDescription = 'asasdadasdadasdwhkfbajkfsldfahnsdf;kjn';

export const FindInventory = () => {
  const transaction = () => {
    console.log('Lecimy z transakcją');
  };

  const a = useShelters();

  return (
    <Box>
      <Heading>Wyszukaj przedmioty</Heading>
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
  );
};
