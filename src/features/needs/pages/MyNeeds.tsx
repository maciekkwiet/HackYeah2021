import { useState } from 'react';
import {
  Box,
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
import { Header } from 'components/Header';

import { AddNewItemForm } from '../components/AddNewItemForm';
import { ItemList } from '../components/ItemList';
import { useNewInventoryItem } from '../hooks/useNewInventoryItem';
import { Need } from '../typings/need';

export const MyNeeds = () => {
  const { addNewItem } = useNewInventoryItem();
  const [form, setForm] = useState<Omit<Need, 'quantityPending' | 'quantityReceived'>>({
    category: 'KARMA',
    quantity: 0,
    weight: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = ({ target: { name, value } }: any) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    await addNewItem(form as any);
    onClose();
  };

  return (
    <Box>
      <Header text="Moje zapotrzebowanie" buttonText="Dodaj artykuł" onButtonClick={onOpen} />
      <ItemList onButtonClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj artykuł do zapotrzebowania</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNewItemForm {...form} handleChange={handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Anuluj
            </Button>
            <Button onClick={handleSubmit} colorScheme="brand">
              Dodaj artykuł
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
