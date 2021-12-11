import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Heading } from '@chakra-ui/react';

export type HeaderProps = {
  text: string;
  buttonText: string;
  onButtonClick: () => void;
};

export const Header = ({ text, buttonText, onButtonClick }: HeaderProps) => {
  return (
    <Box display="flex" justifyContent="space-between" marginBottom="2rem">
      <Heading>{text}</Heading>
      <Button onClick={onButtonClick} colorScheme="brand" variant="solid" leftIcon={<AddIcon />}>
        {buttonText}
      </Button>
    </Box>
  );
};
