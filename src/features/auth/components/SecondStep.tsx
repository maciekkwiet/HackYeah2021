import { ReactNode } from 'react';

export type SecondStepProps = { buttons: ReactNode };
export const SecondStep = ({ buttons }: SecondStepProps) => {
  return <div>2{buttons}</div>;
};
