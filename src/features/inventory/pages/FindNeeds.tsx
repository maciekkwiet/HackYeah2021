import { Box, Heading } from '@chakra-ui/react';
import { LookUp } from 'components/LookUp';
import { VicinityProducts } from 'components/VicinityProducts';
import { VicinityShelter } from 'components/VicinityShelter';
import { ShelterCard } from '../components/ShelterCard';

export const FindNeeds = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const shelterOrProduct = isPrivateAccount ? 'Schroniska' : 'Produkty';

  const exampleNeeds = ['Example 1', 'Example 2', 'Example 3'];
  const examplePhone = '222222222';
  const exampleEmail = 'email@email';
  const exampleLogo = 'Logo';
  const exampleName = 'schronXxxxxxxxxxxxx';
  const exampleAddress = 'addressssssssssssss';

  const transaction = () => {
    console.log('Lecimy z transakcją');
  };

  const vicinitySearch = isPrivateAccount ? (
    <VicinityShelter
      distance={0}
      handleDistanceChange={() => {}}
      isNeedItemsFromMyInventory
      canTakeMyProducts
      handleNeedItemsFromInvetory={() => {}}
      handleCanTakeMyProducts={() => {}}
    />
  ) : (
    <VicinityProducts
      handleDistanceChange={() => {}}
      distance={0}
      productsNeeded={['Karma mokra dla kota', 'Legowiska dla psa', 'Żwirek dla kota', 'Karma sucha dla psa']}
    />
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
