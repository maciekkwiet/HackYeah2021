import { ChangeEvent, ReactNode } from 'react';
import { Input } from '@chakra-ui/react';

import { FormData } from '../pages/Register';

export type SecondStepProps = {
  form: FormData;
  handleChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  buttons: ReactNode;
};
export const SecondStep = ({ buttons, form, handleChange }: SecondStepProps) => {
  const { street, postCode, city, region, name, email, password, phone, avatar } = form;

  return (
    <div>
      <Input placeholder="Imie i nazwisko" name="name" handleChange={handleChange} value={name} />
      <Input placeholder="Ulica" name="street" onChange={handleChange} value={street} />
      <Input placeholder="Kot" name="postCode" onChange={handleChange} value={postCode} />
      <Input placeholder="Miasto" name="city" onChange={handleChange} value={city} />
      <Input placeholder="Województwo" name="Woj" onChange={handleChange} value={region} />
      <Input placeholder="email" name="email" onChange={handleChange} value={email} />
      <Input placeholder="password" name="password" onChange={handleChange} value={password} />
      <Input placeholder="phone" name="phone" onChange={handleChange} value={phone} />
      <Input placeholder="avatar" name="avatar" onChange={handleChange} value={avatar} />
      {buttons}
    </div>
  );
};
