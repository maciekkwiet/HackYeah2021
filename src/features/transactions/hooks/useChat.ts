import { useFilter, useInsert, useRealtime } from 'react-supabase';

export type Message = {
  id: number;
  transactionId: number;
  author: string;
  content: string;
  createdAt: string;
};

export const useNewChatMessage = () => {
  const [, insert] = useInsert<Message>('chat');

  const sendMessage = async (item: Message) => {
    await insert(item);
  };

  return { sendMessage };
};

export const useChat = (id: number) => {
  const filter = useFilter((query) => query.eq('transactionId', id));

  return useRealtime<Message>('chat', { select: { filter } });
};
