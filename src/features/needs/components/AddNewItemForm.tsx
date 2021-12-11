import { Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react';

import { Need } from '../typings/need';

export type AddNewItemFormProps = { handleChange: (e: any) => void } & Omit<
  Need,
  'quantityPending' | 'quantityReceived'
>;

export const AddNewItemForm = ({ category, quantity, weight, handleChange }: AddNewItemFormProps) => {
  return (
    <Box>
      <FormControl id="Kategoria">
        <FormLabel>Kategoria</FormLabel>
        <Select name="category" value={category} onChange={handleChange}>
          <option value="KARMA">Karma</option>
          <option value="ZABAWKI">Zabawki</option>
          <option value="TRANSPORTERY">Transportery</option>
        </Select>
      </FormControl>
      <FormControl id="Liczba sztuk">
        <FormLabel>Liczba sztuk</FormLabel>
        <Input name="quantity" type="number" value={quantity} onChange={handleChange} />
      </FormControl>
      <FormControl id="Waga jednej sztuk">
        <FormLabel>Waga jednej sztuki</FormLabel>
        <InputGroup>
          <Input name="weight" type="number" value={weight} onChange={handleChange} />
          <InputRightElement children={<Box color="gray.500">kg</Box>} />
        </InputGroup>
      </FormControl>
    </Box>
  );
};
