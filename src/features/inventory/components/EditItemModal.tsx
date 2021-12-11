import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useEditItem } from '../hooks/useEditItem';
import { Inventory, InventoryDBItem } from '../typings/inventory';
import { AddNewItemForm } from './AddNewItemForm';

export const EditItemModal = ({
  id,
  description,
  name,
  category,
  price,
  image,
  weight,
  quantity,
  expirationDate,
}: InventoryDBItem) => {
  const { editItem } = useEditItem();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState<Inventory>({
    name,
    description,
    category,
    image,
    quantity,
    price,
    weight,
    expirationDate,
  });

  const handleChange = ({ target: { name, value } }: any) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    await editItem(id, form);
    onClose();
  };

  return (
    <>
      <Text onClick={onOpen} cursor="pointer" color="brand.400">
        Edytuj
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edytuj przedmiot w inwentarzu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNewItemForm {...form} handleChange={handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Anuluj
            </Button>
            <Button onClick={handleSubmit} colorScheme="brand">
              Edytuj przedmiot
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
