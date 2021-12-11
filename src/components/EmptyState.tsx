import { HiOutlineInbox } from 'react-icons/hi';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Icon, Text, VStack } from '@chakra-ui/react';

export type EmptyStateProps = {
  onButtonClick: () => void;
  buttonText: string;
  title: string;
  desc: string;
};

export const EmptyState = ({ title, desc, onButtonClick, buttonText }: EmptyStateProps) => {
  return (
    <VStack>
      <Icon boxSize="12" as={HiOutlineInbox} color="gray.400" />
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Box textAlign="center">{desc}</Box>
      <Button onClick={onButtonClick} colorScheme="brand" leftIcon={<AddIcon />}>
        {buttonText}
      </Button>
    </VStack>
  );
};
