import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';

import { PersonSingleBox } from './PersonSingleBox';

export const PersonBox = ({ shelterAvatar, shelterName, shelterPlace, userAvatar, userName, userCity }: any) => {
  return (
    <Box>
      <Flex justify="space-between">
        <Box>
          <Text color="gray.700">Oferujący</Text>
          <PersonSingleBox avatar={shelterAvatar} name={shelterName} address={shelterPlace} />
        </Box>
        <ArrowForwardIcon w={12} h={12} color="gray.300" mt={12} />
        <Box>
          <Text color="gray.700">Odbiorca</Text>
          <PersonSingleBox avatar={userAvatar} name={userName} address={userCity} />
        </Box>
      </Flex>
    </Box>
  );
};
