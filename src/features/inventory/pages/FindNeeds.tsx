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
import { Inventory } from '../typings/inventory';

export const FindNeeds = () => {
  const { addNewItem } = useNewInventoryItem();
  const [form, setForm] = useState<Inventory>({
    name: '',
    description: '',
    category: '',
    image: '',
    quantity: 0,
    price: 0,
    weight: 0,
    expirationDate: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = ({ target: { name, value } }: any) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    await addNewItem(form);
    onClose();
  };

  return (
    <Box>
      <Header text="Mój inwentarz" buttonText="Dodaj przedmiot" onButtonClick={onOpen} />
      <ItemList onButtonClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj przedmiot do inwentarza</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNewItemForm {...form} handleChange={handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Anuluj
            </Button>
            <Button onClick={handleSubmit} colorScheme="brand">
              Dodaj przedmiot
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
