import { useFilter, useRealtime } from 'react-supabase';
import { useMyInventory } from 'features/inventory/hooks/useInventory';
import { InventoryDBItem } from 'features/inventory/typings/inventory';

export const useOverlap = (counterpartyId: string) => {
  const filter = useFilter((query) => query.eq('userId', counterpartyId));
  const [{ data: ours }] = useMyInventory();
  const [{ data: theirs }] = useRealtime<InventoryDBItem>('inventory', { select: { filter } });

  console.log('🚀 ~ file: useOverlap.ts ~ line 8 ~ useOverlap ~ ours', ours);
  console.log('🚀 ~ file: useOverlap.ts ~ line 12 ~ useOverlap ~ theirs', theirs);

  return { data: {} };
};
