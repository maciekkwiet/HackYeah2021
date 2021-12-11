import { Box, Heading } from '@chakra-ui/react';

import { ItemCard } from '../components/ItemCard';

const exampleNeeds = ['Example 1', 'Example 2', 'Example 3'];
const examplePhone = '222222222';
const exampleEmail = 'email@email';
const exampleLogo = 'Logo';
const exampleName = 'schronXxxxxxxxxxxxx';
const exampleAddress = 'addressssssssssssss';

export const FindInventory = () => {
  const transaction = () => {
    console.log('Lecimy z transakcją');
  };

  return (
    <Box>
      <Heading>Wyszukaj schroniska</Heading>
      <ItemCard
        needs={exampleNeeds}
        phone={examplePhone}
        email={exampleEmail}
        logo={exampleLogo}
        name={exampleName}
        address={exampleAddress}
        action={transaction}
        offersPickupOfThings
      />
      <ItemCard
        needs={exampleNeeds}
        phone={examplePhone}
        email={exampleEmail}
        logo={exampleLogo}
        name={exampleName}
        address={exampleAddress}
        action={transaction}
        offersPickupOfThings
      />
    </Box>
  );
};
