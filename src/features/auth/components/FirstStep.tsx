import { ChangeEvent, ReactNode } from 'react';
import { Select } from '@chakra-ui/react';

import { FormData } from '../pages/Register';

export type FirstStepProps = {
  form: FormData;
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  buttons: ReactNode;
};

export const FirstStep = ({ buttons, handleChange }: FirstStepProps) => {
  return (
    <div>
      <Select name="accountType" placeholder="Select option" onChange={handleChange}>
        <option value="SHELTER">SHELTER 1</option>
        <option value="PRIVATE">PRIVATE 2</option>
        <option value="CORPORATE">CORPORATE 3</option>
      </Select>
      {buttons}
    </div>
  );
};
