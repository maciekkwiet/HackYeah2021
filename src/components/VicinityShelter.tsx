import { Vicinity } from './Vicinity';
import { Box, Checkbox, Heading, VStack } from '@chakra-ui/react';

export const VicinityShelter = ({
  distance = 0,
  handleDistanceChange,
  isNeedItemsFromMyInventory,
  canTakeMyProducts,
  handleNeedItemsFromInvetory,
  handleCanTakeMyProducts,
}: any) => {
  return (
    <Vicinity
      handleChange={handleDistanceChange}
      distance={distance}
      vstack={
        <VStack display="flex" alignItems="baseline" justifyContent="flex-start">
          <Checkbox py={2} isChecked={isNeedItemsFromMyInventory} onChange={handleNeedItemsFromInvetory}>
            Potrzebuje rzeczy z mojego inwentarza
          </Checkbox>
          <Checkbox py={2} isChecked={canTakeMyProducts} onChange={handleCanTakeMyProducts}>
            Może odebrać ode mnie produkty
          </Checkbox>
        </VStack>
      }
    />
  );
};
