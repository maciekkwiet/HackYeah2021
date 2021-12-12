import { Box, Flex } from '@chakra-ui/react';
import { useProfile } from 'features/inventory/hooks/useShelters';
import { useCurrentUser } from 'services/auth/hooks/useCurrentUser';

import { useChat } from '../hooks/useChat';
import { Transaction } from '../typings/transaction';
import { MessageDisplay } from './Message';

export const Feed = ({ transaction }: { transaction: Transaction }) => {
  const transactionId = transaction.id;

  const { profile: me } = useCurrentUser();
  const [notMeId] = [transaction.giver, transaction.taker].filter((id) => id !== (me as any).userId);

  const [{ data: notMeArr }] = useProfile(notMeId);
  const notMe = notMeArr?.[0];
  const [{ data }] = useChat(transactionId);

  console.log('🚀 ~ file: Feed.tsx ~ line 14 ~ Feed ~ me', me);
  console.log('🚀 ~ file: Feed.tsx ~ line 18 ~ Feed ~ notMe', notMe);
  console.log('🚀 ~ file: Feed.tsx ~ line 18 ~ Feed ~ data', data);

  return (
    <Flex
      flexDirection="column-reverse"
      marginLeft="-1rem"
      marginTop="-2rem"
      padding="2rem"
      paddingRight={0}
      width="100%"
    >
      {data?.map(({ content, author, created_at }) => {
        const isMyMsg = author === (me as any).userId;
        const avatar = isMyMsg ? me.avatar : notMe?.avatar;

        return (
          <MessageDisplay content={content} createdAt={new Date(created_at)} avatar={avatar} isMyMessage={isMyMsg} />
        );
      })}
    </Flex>
  );
};
