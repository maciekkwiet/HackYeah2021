import { Box, Image, Text } from '@chakra-ui/react';

import { useProfile } from '../hooks/useShelters';

export const PersonSingleBox = ({ avatar, name, address, small }: any) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="left"
      w={small ? '260px' : '400px'}
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      padding="1rem"
    >
      <Image src={avatar} boxSize={16} borderRadius="full" alt="" marginLeft="1rem" mr="1rem" />
      <Box>
        <Box textStyle="h2">{name}</Box>
        <Text color="grey.500">{address}</Text>
      </Box>
    </Box>
  );
};

export const PersonBox = ({ id, small }: { id: string; small?: boolean }) => {
  const [{ data }] = useProfile(id);

  if (!data) return null;

  const { avatar, name, city } = data[0];

  return <PersonSingleBox avatar={avatar} name={name} address={city} small />;
};
