import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

export type StepButtonsProps = {
  prevStep?: () => void;
  nextStep?: () => void;
};

export const StepButtons = ({ prevStep, nextStep }: StepButtonsProps) => {
  return (
    <Flex gridGap={10}>
      {prevStep && (
        <Button width={250} size="md" onClick={() => prevStep()}>
          <ArrowBackIcon />
        </Button>
      )}
      {nextStep && (
        <Button width={250} size="md" onClick={() => nextStep()}>
          <ArrowForwardIcon />
        </Button>
      )}
    </Flex>
  );
};
