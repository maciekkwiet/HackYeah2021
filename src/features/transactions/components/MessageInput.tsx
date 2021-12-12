import { ChangeEvent, useState } from 'react';
import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Input } from '@chakra-ui/react';

export type MessageProps = {
  handleSubmit: (msg: string) => void;
};

export const MessageInput = ({ handleSubmit }: MessageProps) => {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(value);
    setValue('');
  };

  return (
    <Box width="100%">
      <form onSubmit={onSubmit}>
        <Flex gap="1rem">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            cursor="pointer"
            placeholder="Treść wiadomości..."
          />
          <Button colorScheme="blue" rightIcon={<EmailIcon />}>
            Wyślij
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
