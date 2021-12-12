import { Badge, Box, Button, Flex, Image, Text } from '@chakra-ui/react';

export const ItemCard = ({ logo, name, category, owner, quantity, description, action }: any) => {
  return (
    <>
      <Box border="1px" borderColor="gray.100" w="600px" borderRadius="md" mt={4}>
        <Flex gridGap={10} justify="space-between">
          <Flex>
            <Image src={logo} alt="LOGO" boxSize="80px" marginLeft="1rem" />
            <Box ml={5} mt={5} w="300px">
              <Box textStyle="h2">{name}</Box>
              <Text color="gray.500">Termin ważności: {owner?.length ? owner : '-'}</Text>
              <Text color="gray.500">Ilość: {quantity}</Text>
            </Box>
          </Flex>
          <Badge colorScheme="blue" mb={20} mr={7} mt={7}>
            <Text color="blue.400">{category}</Text>
          </Badge>
        </Flex>
        <Text color="gray.500" ml={5}>
          {description}
        </Text>
      </Box>
      <Box border="1px" bg="gray.100" borderColor="gray.100" w="600px" borderRadius="md" h={16}>
        <Flex justify="right" mr={4} mt={3}>
          <Button mr={3} colorScheme="blue" onClick={action}>
            Zaproponuj transakcję
          </Button>
        </Flex>
      </Box>
    </>
  );
};
