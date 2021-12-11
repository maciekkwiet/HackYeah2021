import { useInsert } from 'react-supabase';
import { useCurrentUser } from 'services/auth/hooks/useCurrentUser';

import { Need, NeedDBItem } from '../typings/need';

export const useNewInventoryItem = () => {
  const { user } = useCurrentUser();
  const [, insert] = useInsert<NeedDBItem>('need');

  const addNewItem = async (item: Need) => {
    await insert({ userId: user.id, ...item });
  };

  return { addNewItem };
};
