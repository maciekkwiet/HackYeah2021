import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';

import { PersonSingleBox } from './PersonSingleBox';

export const PersonBox = ({ shelterAvatar, shelterName, shelterPlace, userAvatar, userName, userCity }: any) => {
  return (
    <Box>
      <Flex justify="space-between">
        <PersonSingleBox avatar={shelterAvatar} name={shelterName} address={shelterPlace} />
        <ArrowForwardIcon w={12} h={12} color="gray.300" mt={3} />
        <PersonSingleBox avatar={userAvatar} name={userName} address={userCity} />
      </Flex>
    </Box>
  );
};
