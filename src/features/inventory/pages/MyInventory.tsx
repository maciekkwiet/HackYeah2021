import {
  Box,
  Button,
  Container,
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

export const MyInventory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Header text="Mój inwentarz" buttonText="Dodaj przedmiot" onButtonClick={onOpen} />
      <Container>
        There are many benefits to a joint design and development system. Not only does it bring benefits to the design
        team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent
        look and feel, not just in our design specs, but in production
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Dodaj przedmiot do inwentarza</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddNewItemForm />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Anuluj
              </Button>
              <Button colorScheme="brand">Dodaj przedmiot</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};
