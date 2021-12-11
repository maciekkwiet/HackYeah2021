import { BellIcon, CheckIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useOverlap } from 'features/transactions/hooks/useOverlap';

export const ShelterCard = ({ id, needs, phone, email, logo, name, address, action, offersPickupOfThings }: any) => {
  const { theirs, overlap } = useOverlap(id);

  return (
    <>
      <Box border="1px" borderColor="gray.100" w="600px" borderRadius="md" mt={4}>
        <Flex gridGap={10} mb={4} justify="space-between">
          <Flex alignItems="center">
            <Image src={logo} boxSize={20} borderRadius="full" alt="" marginLeft="1rem" />
            <Box ml={5} mt={5}>
              <Box textStyle="h2">{name}</Box>
              <Text color="gray.500">{address}</Text>
              <Flex>
                <Text color="gray.500">{phone}</Text>
                <Text color="gray.500">{email}</Text>
              </Flex>
            </Box>
          </Flex>
          {offersPickupOfThings && (
            <Badge colorScheme="blue" mb={20} mr={7} mt={7}>
              <Flex>
                <BellIcon mt={1} />
                <Text color="blue.400">Oferuje odbiór rzeczy</Text>
              </Flex>
            </Badge>
          )}
        </Flex>
        <Flex ml={5} mb={5}>
          {theirs?.map((need: any) => (
            <Box mr={4}>
              <CheckIcon mt={1} />
              <Badge colorScheme={overlap?.some((o) => o.id === need.id) ? 'green' : ''}>{need.category}</Badge>
            </Box>
          ))}
        </Flex>
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
