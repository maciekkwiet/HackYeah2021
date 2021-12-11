import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { OurTable } from 'features/auth/components/OurTable';
import { useMyInventory } from 'features/inventory/hooks/useInventory';

import { useOverlap } from '../hooks/useOverlap';

export type NewTransactionModelProps = {
  counterpartyId: string;
};

export const NewTransactionModel = ({ counterpartyId }: NewTransactionModelProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useOverlap(counterpartyId);

  const handleSubmit = () => {};

  return (
    <>
      <Button onClick={onOpen} colorScheme="brand">
        Zaproponuj pomoc
      </Button>
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
