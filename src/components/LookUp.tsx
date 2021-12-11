import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const LookUp = ({ isPrivateAccount} : {isPrivateAccount: boolean}) => {
    
    const placeholder = `Wpisz frazę, aby wyszukać ${isPrivateAccount ? 'schroniska' : 'produkty'}`;
    return (
      <Box mx={3} w='50%'>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input placeholder={placeholder} />
        </InputGroup>
      </Box>
    );
}