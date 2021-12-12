import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { LookUp } from 'components/LookUp';
import { VicinityShelter } from 'components/VicinityShelter';

import { ShelterCard } from '../components/ShelterCard';
import { useShelters } from '../hooks/useShelters';

export const FindNeeds = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const [{ data }] = useShelters();

  const shelters = data ?? [];

  return (
    <>
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
              phone={shelter.phone}
              logo={shelter.avatar}
              name={shelter.name}
              address={shelter.city}
              offersPickupOfThings
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
