import { createContext, FC, useEffect, useState } from 'react';
import { useAuthStateChange, useClient } from 'react-supabase';
import { Session, User } from '@supabase/supabase-js';

type State = {
  user: User | null;
  session: Session | null;
};

const initialState: State = { session: null, user: null };

export const AuthContext = createContext(initialState);

export const AuthProvider: FC = ({ children }) => {
  const { auth } = useClient();

  const [state, setState] = useState<State>({ user: auth.user(), session: auth.session() });

  useEffect(() => {
    const session = auth.session();

    setState({ session, user: session?.user ?? null });
  }, [auth]);

  useAuthStateChange((event, session) => {
    // console.log(`Supbase auth event: ${event}`, session);
    setState({ session, user: session?.user ?? null });
  });

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
