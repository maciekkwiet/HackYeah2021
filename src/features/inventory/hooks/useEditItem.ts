import { useUpdate } from 'react-supabase';

import { Inventory } from '../typings/inventory';

export const useEditItem = () => {
  const [, update] = useUpdate('inventory');
  const editItem = async (id: string, item: Inventory) => {
    await update(item, (query) => query.eq('id', id));
  };

  return { editItem };
};
