import { Vicinity } from './Vicinity';
import { Box, Checkbox, Heading, VStack } from '@chakra-ui/react';

export const VicinityProducts = ({
  handleDistanceChange,
  distance,
  productsNeeded,
}: {
  productsNeeded: string[];
  distance: number;
  handleDistanceChange: () => void;
}) => {
  
  // nie ma handleChange
  const productCheckboxes = productsNeeded.map((product) => <Checkbox>{product}</Checkbox>);

  return (
    <Vicinity
      handleChange={handleDistanceChange}
      distance={distance}
      vstack={
        <VStack display="flex" alignItems="baseline" justifyContent="flex-start">
          {productCheckboxes}
        </VStack>
      }
    />
  );
};
