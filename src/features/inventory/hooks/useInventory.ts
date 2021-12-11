import { useRealtime } from 'react-supabase';
import { useCurrentUserFilter } from 'services/auth/hooks/useCurrentUser';

import { InventoryDBItem } from '../typings/inventory';

export const useInventory = () => {
  const { filter } = useCurrentUserFilter();

  return useRealtime<InventoryDBItem>('inventory', { select: { filter } });
};
