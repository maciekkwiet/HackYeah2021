import { Box, Heading } from '@chakra-ui/react';
import { LookUp } from 'components/LookUp';
import { VicinityShelter } from 'components/VicinityShelter';

import { ShelterCard } from '../components/ShelterCard';
import { useShelters } from '../hooks/useShelters';

export const FindNeeds = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const exampleNeeds = ['Example 1', 'Example 2', 'Example 3'];
  const examplePhone = '222222222';
  const exampleEmail = 'email@email';
  const exampleLogo = 'Logo';
  const exampleName = 'schronXxxxxxxxxxxxx';
  const exampleAddress = 'addressssssssssssss';

  const transaction = () => {
    console.log('Lecimy z transakcją');
  };
  const [{ data }] = useShelters();

  console.log('🚀 ~ file: FindNeeds.tsx ~ line 20 ~ FindNeeds ~ data', data);

  const shelters = data ?? [];

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading>Wyszukaj Schroniska</Heading>
        <LookUp isPrivateAccount={isPrivateAccount} />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <VicinityShelter
          distance={0}
          handleDistanceChange={() => {}}
          isNeedItemsFromMyInventory={false}
          canTakeMyProducts={false}
          handleNeedItemsFromInvetory={() => {}}
          handleCanTakeMyProducts={() => {}}
        />
        <Box>
          {shelters.map((shelter) => (
            <ShelterCard
              id={shelter.userId}
              needs={exampleNeeds}
              phone={shelter.phone}
              logo={shelter.avatar}
              name={shelter.name}
              address={shelter.city}
              action={transaction}
              offersPickupOfThings
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
