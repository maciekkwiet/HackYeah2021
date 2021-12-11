import { useInsert } from 'react-supabase';
import { useCurrentUser } from 'services/auth/hooks/useCurrentUser';

import { Inventory, InventoryDBItem } from '../typings/inventory';

export const useNewInventoryItem = () => {
  const { user } = useCurrentUser();
  const [, insert] = useInsert<InventoryDBItem>('inventory');

  const addNewItem = async (item: Inventory) => {
    await insert({ userId: user.id, ...item });
  };

  return { addNewItem };
};
