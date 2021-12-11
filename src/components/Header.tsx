import { Box, Button, Heading } from '@chakra-ui/react';

export const Header = ({ text, buttonText, onButtonClick }: any) => {
  return (
    <Box>
      <Heading>{text}</Heading>
      <Button colorScheme="brand" variant="solid">
        {buttonText}
      </Button>
    </Box>
  );
};
