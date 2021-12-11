import { Box, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import { EmptyState } from 'components/EmptyState';
import { OurTable } from 'features/auth/components/OurTable';

import { useMyInventory } from '../hooks/useInventory';
import { useRemoveItem } from '../hooks/useRemoveItem';
import { InventoryDBItem } from '../typings/inventory';
import { EditItemModal } from './EditItemModal';

export type ItemListProps = {
  onButtonClick: () => void;
};

const itemMapper = (removeItem: (id: string) => Promise<void>) => (item: InventoryDBItem) => {
  const { id, name, price, quantity, expirationDate, image } = item;

  return [
    <Box display="flex" alignItems="center">
      {image && <Image boxSize="60px" src={image} mr="1rem" borderRadius="full" />}
      <Text display="block" fontWeight="bold">
        {name}
      </Text>
    </Box>,
    <Text>{price}</Text>,
    <Text>{quantity}</Text>,
    <Text>{expirationDate}</Text>,
    <Box display="flex" gap="1rem">
      <Text onClick={() => removeItem(id)} cursor="pointer" color="red.400">
        Usuń
      </Text>
      <EditItemModal {...item} />
    </Box>,
  ];
};
export const ItemList = ({ onButtonClick }: ItemListProps) => {
  const [{ data, fetching }] = useMyInventory();
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
        title="Twój inwentarz jest pusty"
        desc="Kliknij przycisk poniżej, aby dodać nowy przedmiot do swojego inwentarza. Każdy przedmiot dodany do inwentarz będzie widoczny dla schronisk zarejestrowanych na portalu."
        onButtonClick={onButtonClick}
        buttonText="Dodaj przedmiot do inwentarza"
      />
    );

  return (
    <OurTable
      columns={['Przedmioty', 'Cena za szt', 'Ilość', 'Data Ważności', '']}
      rows={data.map(itemMapper(removeItem))}
    />
  );
};
