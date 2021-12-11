import { Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
import { allCategories, piecesCategory, weightCategory } from 'consts';

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
          {allCategories.map((c) => (
            <option value={c}>{c[0] + c.slice(1).toLowerCase()}</option>
          ))}
          <option value="ZABAWKI">Zabawki</option>
          <option value="TRANSPORTERY">Transportery</option>
        </Select>
      </FormControl>
      {piecesCategory.includes(category) && (
        <FormControl id="Liczba sztuk">
          <FormLabel>Liczba sztuk</FormLabel>
          <Input name="quantity" type="number" value={quantity} onChange={handleChange} />
        </FormControl>
      )}
      {weightCategory.includes(category) && (
        <FormControl id="Waga jednej sztuk">
          <FormLabel>Waga jednej sztuki</FormLabel>
          <InputGroup>
            <Input name="weight" type="number" value={weight} onChange={handleChange} />
            <InputRightElement children={<Box color="gray.500">kg</Box>} />
          </InputGroup>
        </FormControl>
      )}
    </Box>
  );
};
