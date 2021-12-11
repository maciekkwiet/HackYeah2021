import { Box, Flex, Text } from '@chakra-ui/react';

export const FormInput = ({ input, text }: any) => {
  return (
    <Box borderBottom="1px" borderColor="gray.400" my={4}>
      <Flex gridGap={10} mb={4}>
        <Box w="300px" h="10s">
          <Text>{text}</Text>
        </Box>
        {input}
      </Flex>
    </Box>
  );
};
