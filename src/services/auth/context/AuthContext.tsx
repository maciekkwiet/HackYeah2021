import { createContext, FC, useEffect, useState } from 'react';
import { useAuthStateChange, useClient, useFilter, useRealtime } from 'react-supabase';
import { Session, User } from '@supabase/supabase-js';

import { Profile } from '../typings/profile';

export type AuthContextValue = {
  user: User | null;
  session: Session | null;
  profile?: Profile | null;
};

const initialState: AuthContextValue = { session: null, user: null };

export const AuthContext = createContext(initialState);

export const AuthProvider: FC = ({ children }) => {
  const { auth } = useClient();
  const [state, setState] = useState<AuthContextValue>({ user: auth.user(), session: auth.session() });

  const filter = useFilter((query) => query.eq('userId', state.user?.id), [state.user?.id]);
  const [{ data: profile }, rerun] = useRealtime<Profile>('profiles', {
    select: { filter },
  });

  useEffect(() => {
    const session = auth.session();
    const user = session?.user ?? null;

    setState({ session, user, profile: profile?.[0] });
  }, [auth, profile]);

  useAuthStateChange((event, session) => {
    console.log(`Supbase auth event: ${event}`, session);
    setState({ session, user: session?.user ?? null });
    rerun();
  });

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
