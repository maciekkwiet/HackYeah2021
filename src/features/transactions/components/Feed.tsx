/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useProfile } from 'features/inventory/hooks/useShelters';
import { useCurrentUser } from 'services/auth/hooks/useCurrentUser';

import { useChat, useNewChatMessage } from '../hooks/useChat';
import { Transaction } from '../typings/transaction';
import { MessageDisplay } from './Message';
import { MessageInput } from './MessageInput';

export const Feed = ({ transaction }: { transaction: Transaction }) => {
  const transactionId = transaction.id;

  const { profile: me } = useCurrentUser();
  const [notMeId] = [transaction.giver, transaction.taker].filter((id) => id !== (me as any).userId);

  const [{ data: notMeArr }] = useProfile(notMeId);
  const notMe = notMeArr?.[0];
  const [{ data }] = useChat(transactionId);
  const { sendMessage } = useNewChatMessage();

  const sendMsg = (content: string) => {
    sendMessage({ author: (me as any).userId, content, transactionId } as any);
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-end"
      marginLeft="-1rem"
      marginTop="-2rem"
      padding="2rem"
      paddingRight={0}
      bgColor="grey.300"
      width="100%"
    >
      {data?.map(({ content, author, created_at }: any) => {
        const isMyMsg = author === (me as any).userId;
        const avatar = isMyMsg ? me.avatar : notMe?.avatar;

        return (
          <MessageDisplay content={content} createdAt={new Date(created_at)} avatar={avatar} isMyMessage={isMyMsg} />
        );
      })}
      <MessageInput handleSubmit={sendMsg} />
    </Flex>
  );
};
