import { Box } from '@chakra-ui/react';

import { MessageDisplay } from './Message';

export const Feed = () => {
  return (
    <Box marginLeft="-1rem" marginTop="-2rem" padding="2rem" paddingRight={0} width="100%">
      <MessageDisplay content="AAA" createdAt={new Date()} author="nfdn" isMyMessage={false} />
      <MessageDisplay content="AAA" createdAt={new Date()} author="nfdn" isMyMessage />
      <MessageDisplay content="AAA" createdAt={new Date()} author="nfdn" isMyMessage={false} />
    </Box>
  );
};
