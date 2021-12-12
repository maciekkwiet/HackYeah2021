import { ChangeEvent, useState } from 'react';
import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { AccountType } from 'services/auth/typings/profile';

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

export const RadioComponent = ({ onChange }: Props) => {
  const [radioValue, setRadioValue] = useState<AccountType>('SHELTER');

  const handleChange = (value: AccountType) => {
    setRadioValue(value);
    onChange({ target: { value, name: 'accountType' } } as any);
  };

  return (
    <RadioGroup onChange={handleChange} value={radioValue}>
      <Stack direction="column">
        <Radio value="SHELTER" spacing="2rem">
          <Box textStyle="h3">Schronisko</Box>
          <Text fontSize="md">Chcę wykorzystać platformę do pozyskiwania wsparcia materialnego.</Text>
        </Radio>
        <Radio value="PRIVATE" spacing="2rem">
          <Box textStyle="h3">Konto prywatne</Box>
          <Text fontSize="md">Chcę wspierać schroniska materialnie jako pojedyncza osoba.</Text>
        </Radio>
        <Radio value="CORPORATE" spacing="2rem">
          <Box textStyle="h3">Konto firmow</Box>
          <Text fontSize="md">Chcę wspierać schroniska jako firma lub organizacja trzeciego sektora.</Text>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
