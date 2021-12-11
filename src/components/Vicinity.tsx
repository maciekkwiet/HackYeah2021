import { Box, Heading, Input, Text } from '@chakra-ui/react';

export const Vicinity = ({
  distance,
  handleChange,
  vstack,
}: {
  distance: number;
  handleChange: () => void;
  vstack: any;
}) => {
  return (
    <Box maxW="md" mt={8}>
      <Heading as="h3" size="md">
        Odległość ode mnie
      </Heading>
      <Box mt={4} display="flex" alignItems="baseline" justifyContent="start">
        <Input maxW="xs" placeholder="Do" handleChange={handleChange} value={distance} />
        <Text position="relative" right="40px" pointerEvents="none">
          km
        </Text>
      </Box>
      <Box mt={5}>{vstack}</Box>
    </Box>
  );
};
