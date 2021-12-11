import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

export const RadioComponent = ({ setRadioValue, radioValue }: any) => {
  return (
    <RadioGroup onChange={setRadioValue} value={radioValue}>
      <Stack direction="column">
        <Radio value="1">
          <Box textStyle="h3">Schronisko</Box>
          <Text fontSize="md">Chcę wykorzystać platformę do pozyskiwania wsparcia materialnego.</Text>
        </Radio>
        <Radio value="2">
          <Box textStyle="h3">Konto prywatne</Box>
          <Text fontSize="md">Chcę wspierać schroniska materialnie jako pojedyncza osoba.</Text>
        </Radio>
        <Radio value="3">
          <Box textStyle="h3">Konto firmow</Box>
          <Text fontSize="md">Chcę wspierać schroniska jako firma lub organizacja trzeciego sektora.</Text>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
