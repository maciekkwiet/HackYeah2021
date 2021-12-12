import { useInsert } from 'react-supabase';

export const useSendNotification = () => {
  const [, insert] = useInsert<any>('notification');

  const sendNotification = async (target: string, content: string) => {
    await insert({ target, content });
  };

  return { sendNotification };
};
