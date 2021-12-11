import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { RadioComponent } from './RadioGroup';

export type FirstStepProps = { buttons: ReactNode; setRadioValue: any; radioValue: any };
export const FirstStep = ({ buttons, setRadioValue, radioValue }: FirstStepProps) => {
  return (
    <>
      <Box border="1px" borderColor="gray.500" borderRadius="md" m={10} p={7}>
        <RadioComponent setRadioValue={setRadioValue} radioValue={radioValue} />
      </Box>
      <div>{buttons}</div>;
    </>
  );
};
