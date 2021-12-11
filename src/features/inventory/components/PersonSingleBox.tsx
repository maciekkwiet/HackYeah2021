import { Box, Image, Text } from '@chakra-ui/react';

export const PersonSingleBox = ({ avatar, name, address }: any) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="left"
      w="400px"
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
    >
      <Image src={avatar} boxSize={20} borderRadius="full" alt="" marginLeft="1rem" />
      <Box>
        <Box textStyle="h2">{name}</Box>
        <Text color="grey.500">{address}</Text>
      </Box>
    </Box>
  );
};
