import { useUpdate } from 'react-supabase';

import { Need } from '../typings/need';

export const useEditItem = () => {
  const [, update] = useUpdate('need');
  const editItem = async (id: string, item: Need) => {
    await update(item, (query) => query.eq('id', id));
  };

  return { editItem };
};
