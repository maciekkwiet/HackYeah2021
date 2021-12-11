import { Box, Heading } from '@chakra-ui/react';
import { LookUp } from 'components/LookUp';
import { VicinityProducts } from 'components/VicinityProducts';
import { VicinityShelter } from 'components/VicinityShelter';

import { ShelterCard } from '../components/ShelterCard';
import { useMyInventory } from '../hooks/useInventory';

export const FindNeeds = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const shelterOrProduct = 'Schroniska';
  const [{ data }] = useMyInventory();

  const exampleNeeds = ['Example 1', 'Example 2', 'Example 3'];
  const examplePhone = '222222222';
  const exampleEmail = 'email@email';
  const exampleLogo = 'Logo';
  const exampleName = 'schronXxxxxxxxxxxxx';
  const exampleAddress = 'addressssssssssssss';

  const transaction = () => {
    console.log('Lecimy z transakcją');
  };

  const vicinitySearch = (
    <VicinityProducts handleDistanceChange={() => {}} distance={0} productsNeeded={data?.map((d) => d.name) ?? []} />
  );

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading>Wyszukaj {shelterOrProduct}</Heading>
        <LookUp isPrivateAccount={isPrivateAccount} />
      </Box>
      <Box display="flex" justifyContent="space-around">
        {vicinitySearch}
        <Box>
          <ShelterCard
            needs={exampleNeeds}
            phone={examplePhone}
            email={exampleEmail}
            logo={exampleLogo}
            name={exampleName}
            address={exampleAddress}
            action={transaction}
            offersPickupOfThings
          />
          <ShelterCard
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
      </Box>
    </Box>
  );
};
