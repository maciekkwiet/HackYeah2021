import { useFilter, useRealtime } from 'react-supabase';

import { Transaction } from '../typings/transaction';

export const useTransaction = (id: number) => {
  const filter = useFilter((query) => query.eq('id', id));

  return useRealtime<Transaction>('transaction', { select: { filter } });
};
