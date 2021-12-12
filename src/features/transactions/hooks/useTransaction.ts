import { useFilter, useRealtime } from 'react-supabase';

import { Transaction } from '../typings/transaction';

export const useTransaction = (id: number) => {
  const filter = useFilter((query) => query.eq('id', id));

  return useRealtime<Transaction>('transaction', { select: { filter } });
};

export const useAllTransaction = (id: any, isPrivate: boolean) => {
  const filter = useFilter((query) => query.eq(isPrivate ? 'giver' : 'taker', id));

  return useRealtime<any>('transaction', { select: { filter } });
};
