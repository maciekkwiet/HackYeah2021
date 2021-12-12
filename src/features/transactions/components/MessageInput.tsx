import { ChangeEvent } from 'react';
import { Box, Input } from '@chakra-ui/react';

export type MessageProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

export const MessageInput = ({ value, handleChange }: MessageProps) => {
  return (
    <Box width="30%">
      <Input value={value} type="text" onChange={handleChange} cursor="pointer" placeholder="Treść wiadomości..." />
    </Box>
  );
};
