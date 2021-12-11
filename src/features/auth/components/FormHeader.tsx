import { Box, Flex, Text } from '@chakra-ui/react';

export const FormHeader = ({ textMain, textDescription }: any) => {
  return (
    <Box borderBottom="1px" borderColor="gray.400" my={4}>
      <Flex gridGap={10} mb={4}>
        <Box w="700px" h="10s">
          <Box textStyle="h2">{textMain}</Box>
          <Text>{textDescription}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
