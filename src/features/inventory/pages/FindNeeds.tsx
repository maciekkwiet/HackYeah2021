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

export const FindNeeds = ({ isPrivateAccount }: { isPrivateAccount: boolean }) => {
  const exampleNeeds = ['Example 1', 'Example 2', 'Example 3'];
  const examplePhone = '222222222';
  const exampleEmail = 'email@email';
  const exampleLogo = 'Logo';
  const exampleName = 'schronXxxxxxxxxxxxx';
  const exampleAddress = 'addressssssssssssss';

  const handleSubmit = () => {};

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Heading>Wyszukaj Schroniska</Heading>
          <LookUp isPrivateAccount={isPrivateAccount} />
        </Box>
        <Box display="flex" justifyContent="space-around">
          <VicinityShelter
            distance={0}
            handleDistanceChange={() => {}}
            isNeedItemsFromMyInventory
            canTakeMyProducts
            handleNeedItemsFromInvetory={() => {}}
            handleCanTakeMyProducts={() => {}}
          />
          <Box>
            <ShelterCard
              needs={exampleNeeds}
              phone={examplePhone}
              email={exampleEmail}
              logo={exampleLogo}
              name={exampleName}
              address={exampleAddress}
              action={onOpen}
              offersPickupOfThings
            />
            <ShelterCard
              needs={exampleNeeds}
              phone={examplePhone}
              email={exampleEmail}
              logo={exampleLogo}
              name={exampleName}
              address={exampleAddress}
              action={onOpen}
              offersPickupOfThings
            />
          </Box>
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
