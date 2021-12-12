import { useInsert, useUpdate } from 'react-supabase';

import { Transaction, TransactionPayload } from '../typings/transaction';

export const useNewTransaction = () => {
  const [, insert] = useInsert<TransactionPayload>('transaction');

  const addNewTransaction = async (item: TransactionPayload) => {
    await insert(item);
  };

  return { addNewTransaction };
};

export const useUpdateTransaction = () => {
  const [, update] = useUpdate<Transaction>('transaction');

  const updateTransaction = async (item: Transaction) => {
    await update(item, (query) => query.eq('id', item.id));
  };

  return { updateTransaction };
};
