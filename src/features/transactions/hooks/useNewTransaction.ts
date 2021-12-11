import { useInsert } from 'react-supabase';

import { TransactionPayload } from '../typings/transaction';

export const useNewTransaction = () => {
  const [, insert] = useInsert<TransactionPayload>('inventory');

  const addNewTransaction = async (item: TransactionPayload) => {
    await insert(item);
  };

  return { addNewTransaction };
};
