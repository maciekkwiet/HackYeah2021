import { ReactNode } from 'react';

export type FirstStepProps = { buttons: ReactNode };
export const FirstStep = ({ buttons }: FirstStepProps) => {
  return <div>1{buttons}</div>;
};
