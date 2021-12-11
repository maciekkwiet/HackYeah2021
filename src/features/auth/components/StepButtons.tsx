import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';

export type StepButtonsProps = {
  prevStep?: () => void;
  nextStep?: () => void;
};

export const StepButtons = ({ prevStep, nextStep }: StepButtonsProps) => {
  return (
    <Flex gridGap={10} justify={prevStep && nextStep ? 'space-between' : 'right'} m={10}>
      {prevStep && (
        <Button
          colorScheme="teal"
          variant="outline"
          width={200}
          size="md"
          onClick={() => prevStep()}
          leftIcon={<ArrowBackIcon />}
        >
          <Text fontSize="sm">Poprzedni krok</Text>
        </Button>
      )}
      {nextStep && (
        <Button width={200} colorScheme="blue" size="md" onClick={() => nextStep()} rightIcon={<ArrowForwardIcon />}>
          <Text fontSize="sm">Kolejny krok</Text>
        </Button>
      )}
    </Flex>
  );
};
