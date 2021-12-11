import { Box, Skeleton, Stack, Text } from '@chakra-ui/react';
import { EmptyState } from 'components/EmptyState';
import { OurTable } from 'features/auth/components/OurTable';

import { useNeeds } from '../hooks/useInventory';
import { useRemoveItem } from '../hooks/useRemoveItem';
import { NeedDBItem } from '../typings/need';
import { EditItemModal } from './EditItemModal';

export type ItemListProps = {
  onButtonClick: () => void;
};

const itemMapper = (removeItem: (id: string) => Promise<void>) => (item: NeedDBItem) => {
  const { id, category, quantity, quantityPending, quantityReceived } = item;

  return [
    <Box display="flex" alignItems="center">
      <Text display="block" fontWeight="bold">
        {category}
      </Text>
    </Box>,
    <Text>{quantity}</Text>,
    <Text>{quantityPending ?? 0}</Text>,
    <Text>{quantityReceived ?? 0}</Text>,
    <Box display="flex" gap="1rem">
      <Text onClick={() => removeItem(id)} cursor="pointer" color="red.400">
        Usuń
      </Text>
      <EditItemModal {...item} />
    </Box>,
  ];
};
export const ItemList = ({ onButtonClick }: ItemListProps) => {
  const [{ data, fetching }] = useNeeds();
  const { removeItem } = useRemoveItem();

  if (fetching || !data)
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );

  if (data.length === 0)
    return (
      <EmptyState
        title="Twoja lista potrzeb jest pusta"
        desc="Kliknij przycisk poniżej, aby dodać nową potrzebę do swojej listy. Każda potrzeba dodana do listy będzie widoczna w profilu Twojego schroniska, dzięki czemu potencjalni darczyńcy będą mogli ją zaspokoić."
        onButtonClick={onButtonClick}
        buttonText="Dodaj artykuł do zapotrzebowania"
      />
    );

  return (
    <OurTable
      columns={['Kategoria', 'Zapotrzebowanie', 'Otrzymano', 'Oczekujące', '']}
      rows={data.map(itemMapper(removeItem))}
    />
  );
};
