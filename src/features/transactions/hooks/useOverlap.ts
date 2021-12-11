import { useFilter, useRealtime } from 'react-supabase';
import { useMyInventory } from 'features/inventory/hooks/useInventory';
import { InventoryDBItem } from 'features/inventory/typings/inventory';

export const useOverlap = (counterpartyId: string) => {
  const filter = useFilter((query) => query.eq('userId', counterpartyId));
  const [{ data: ours }] = useMyInventory();
  const [{ data: theirs }] = useRealtime<InventoryDBItem>('need', { select: { filter } });

  const overlap = theirs?.filter((t) => ours?.some((o) => o.category === t.category));

  return { ours, theirs, overlap };
};
