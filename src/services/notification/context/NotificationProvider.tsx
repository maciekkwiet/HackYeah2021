import { Outlet } from 'react-router-dom';
import { useSubscription } from 'react-supabase';
import { useToast } from '@chakra-ui/react';
import { useCurrentUser } from 'services/auth/hooks/useCurrentUser';

export const NotificationProvider = () => {
  const toast = useToast();
  const { user } = useCurrentUser();

  useSubscription(
    ({ new: { content, target } }) => {
      if (target === user.id) {
        toast({ title: `${content}`, position: 'top-right', isClosable: true });
      }
    },
    { event: 'INSERT', table: 'notification' }
  );

  return <Outlet />;
};
