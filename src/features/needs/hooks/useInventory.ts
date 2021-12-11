import { useRealtime } from 'react-supabase';
import { useCurrentUserFilter } from 'services/auth/hooks/useCurrentUser';

import { NeedDBItem } from '../typings/need';

export const useNeeds = () => {
  const { filter } = useCurrentUserFilter();

  return useRealtime<NeedDBItem>('need', { select: { filter } });
};
