import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  NumberInput,
  Select,
  Textarea,
} from '@chakra-ui/react';

export const AddNewItemForm = () => {
  return (
    <Box>
      <FormControl id="Nazwa">
        <FormLabel>Nazwa</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="Nazwa">
        <FormLabel>Opis</FormLabel>
        <Textarea type="text" />
      </FormControl>
      <FormControl id="Kategoria">
        <FormLabel>Kategoria</FormLabel>
        <Select type="text" />
      </FormControl>
      <FormControl id="Zdjęcie">
        <FormLabel>Zdjęcie</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="Liczba sztuk">
        <FormLabel>Liczba sztuk</FormLabel>
        <Input type="number" />
      </FormControl>
      <FormControl id="Waga jednej sztuk">
        <FormLabel>Waga jednej sztuk</FormLabel>
        <InputGroup>
          <Input type="number" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
      </FormControl>
      <FormControl id="Cena jednej sztuk">
        <FormLabel>Cena jednej sztuk</FormLabel>
        <FormHelperText>Jeśli chcesz oddać przedmiot za darmo, pozostaw to pole puste</FormHelperText>
        <NumberInput />
      </FormControl>
    </Box>
  );
};
