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
import { OurTable } from 'features/auth/components/OurTable';

import { ShelterCard } from '../components/ShelterCard';
import { useShelters } from '../hooks/useShelters';

export const FindNeeds = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ data }] = useShelters();

  const shelters = data ?? [];
  const handleSubmit = () => {};

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
              action={onOpen}
              offersPickupOfThings
            />
          ))}
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Zaproponuj pomoc</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OurTable columns={['Artykuł', 'Cena za szt.', 'Data Ważności', 'Ilość']} rows={[]} />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Anuluj
            </Button>
            <Button onClick={handleSubmit} colorScheme="brand">
              Zaproponuj pomoc
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
