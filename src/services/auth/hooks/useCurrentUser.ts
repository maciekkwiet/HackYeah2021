import { useFilter } from 'react-supabase';
import { User } from '@supabase/supabase-js';

import { Profile } from '../typings/profile';
import { useAuth } from './useAuth';

export const useCurrentUser = () => {
  const { user, profile } = useAuth();

  return { user: user as User, profile: profile as Profile };
};

export const useCurrentUserFilter = () => {
  const { user } = useCurrentUser();
  const filter = useFilter((query) => query.eq('userId', user.id), [user.id]);

  return { filter };
};

export const useIsPrivateUser = () => {
  const {
    profile: { accountType },
  } = useCurrentUser();

  return accountType === 'PRIVATE';
};
