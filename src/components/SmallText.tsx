import { Text } from '@chakra-ui/react';

export const SmallText = (text?: string) => {
  return <Text fontSize="sm">{text ?? 'Kolejny krok'}</Text>;
};
