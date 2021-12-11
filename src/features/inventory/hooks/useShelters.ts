import { useFilter, useRealtime } from 'react-supabase';
import { Profile } from 'services/auth/typings/profile';

export const useShelters = () => {
  const filter = useFilter((query) => query.eq('accountType', 'SHELTER'));
  const [{ data: profiles }] = useRealtime<any>('profiles', { select: { filter } });

  const ids = profiles?.map((p) => p.userId);
  const filter2 = useFilter((query) => query.in('userId', ids ?? []));
  const [{ data: shelters }] = useRealtime<any>('need', { select: { filter: filter2 } });

  console.log(shelters);
};
