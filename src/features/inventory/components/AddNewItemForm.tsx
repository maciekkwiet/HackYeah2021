import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { FileUpload } from 'components/FileUpload';

import { allCategories, piecesCategory, weightCategory } from '../../../consts';
import { Inventory } from '../typings/inventory';

export type AddNewItemFormProps = { handleChange: (e: any) => void } & Inventory;

export const AddNewItemForm = ({
  name,
  description,
  category,
  expirationDate,
  price,
  quantity,
  weight,
  handleChange,
}: AddNewItemFormProps) => {
  console.log('🚀 ~ file: AddNewItemForm.tsx ~ line 31 ~ category', category);

  const [isExpired, setExpired] = useState(false);

  return (
    <Box>
      <FormControl id="Nazwa">
        <FormLabel>Nazwa</FormLabel>
        <Input name="name" type="text" value={name} onChange={handleChange} />
      </FormControl>
      <FormControl id="Nazwa">
        <FormLabel>Opis</FormLabel>
        <Textarea name="description" type="text" value={description} onChange={handleChange} />
      </FormControl>
      <FormControl id="Kategoria">
        <FormLabel>Kategoria</FormLabel>
        <Select name="category" value={category} onChange={handleChange}>
          {allCategories.map((c) => (
            <option value={c}>{c[0] + c.slice(1).toLowerCase()}</option>
          ))}
        </Select>
      </FormControl>
      <FileUpload name="image" onChange={handleChange} label="Zdjęcie" />
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
      <FormControl id="Cena jednej sztuk" mb="0.4rem">
        <FormLabel>Cena jednej sztuki</FormLabel>
        <InputGroup>
          <Input name="price" type="number" value={price} onChange={handleChange} />
          <InputRightElement children={<Box color="gray.500">zł</Box>} />
        </InputGroup>
        <FormHelperText>Jeśli chcesz oddać przedmiot za darmo, pozostaw to pole puste</FormHelperText>
      </FormControl>
      <Checkbox mb="0.4rem" isChecked={isExpired} onChange={() => setExpired(!isExpired)}>
        Przedmiot posiada datę ważności
      </Checkbox>
      <InputGroup>
        <Input
          isDisabled={!isExpired}
          name="expirationDate"
          type="date"
          value={expirationDate}
          onChange={handleChange}
        />
      </InputGroup>
    </Box>
  );
};
