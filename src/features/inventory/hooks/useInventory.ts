import { useFilter, useRealtime } from 'react-supabase';
import { useCurrentUserFilter } from 'services/auth/hooks/useCurrentUser';

import { InventoryDBItem } from '../typings/inventory';

export const useMyInventory = () => {
  const { filter } = useCurrentUserFilter();

  return useRealtime<InventoryDBItem>('inventory', { select: { filter } });
};

export const useInventoryItems = (ids: number[]) => {
  const filter = useFilter((query) => query.in('id', ids));

  return useRealtime<InventoryDBItem>('inventory', { select: { filter } });
};

export const useAllInventoryItems = () => {
  return useRealtime<InventoryDBItem>('inventory');
};
