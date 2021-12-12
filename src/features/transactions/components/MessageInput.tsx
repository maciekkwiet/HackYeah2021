import { ChangeEvent, useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

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
    <Box width="70%">
      <form onSubmit={onSubmit}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          cursor="pointer"
          placeholder="Treść wiadomości..."
        />
      </form>
    </Box>
  );
};
