import { ReactNode } from 'react';

export type ThirdStepProps = { buttons: ReactNode };
export const ThirdStep = ({ buttons }: ThirdStepProps) => {
  // const navigate = useNavigate();

  return <div>3{buttons}</div>;
};
