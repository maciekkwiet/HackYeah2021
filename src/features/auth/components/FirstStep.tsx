import { ChangeEvent, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { RadioComponent } from './RadioGroup';

export type FirstStepProps = {
  buttons: ReactNode;
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};
export const FirstStep = ({ buttons, handleChange }: FirstStepProps) => {
  return (
    <>
      <Box border="1px" borderColor="gray.500" borderRadius="md" m={10} p={7}>
        <RadioComponent onChange={handleChange} />
      </Box>
      <div>{buttons}</div>;
    </>
  );
};
