import { useDelete } from 'react-supabase';

export const useRemoveItem = () => {
  const [, remove] = useDelete('need');
  const removeItem = async (id: string) => {
    await remove((query) => query.eq('id', id));
  };

  return { removeItem };
};
