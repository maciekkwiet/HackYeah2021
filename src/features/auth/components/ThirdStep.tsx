import { ReactNode } from 'react';

export type ThirdStepProps = { buttons: ReactNode };
export const ThirdStep = ({ buttons }: ThirdStepProps) => {
  return <div>3{buttons}</div>;
};
