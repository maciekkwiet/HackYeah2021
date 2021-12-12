import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import logo from 'assets/logo.svg';
import { PersonBox } from 'features/inventory/components/PersonSingleBox';
import { useCurrentUser, useIsPrivateUser } from 'services/auth/hooks/useCurrentUser';

import { Feed } from '../components/Feed';
import { Items } from '../components/Items';
import { MessageDisplay } from '../components/Message';
import { Status } from '../components/Status';
import { TransactionCard } from '../components/TransactionCard';
import { useAllTransaction, useTransaction } from '../hooks/useTransaction';

export const Transaction = () => {
  const { id } = useParams();
  const { profile } = useCurrentUser();
  const isPrivate = useIsPrivateUser();

  const [{ data }] = useTransaction(Number(id!));

  const allTransaction = useAllTransaction(profile?.userId, isPrivate)?.[0]?.data;

  console.log(allTransaction);
  console.log(data);

  if (!data && !allTransaction)
    return (
      <Flex justify="center">
        <Spinner />;
      </Flex>
    );

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data ? (
        <Flex height="85vh">
          <Flex
            border="1px"
            borderColor="gray.300"
            bgColor="white"
            padding="2rem"
            width="50%"
            boxShadow="2xl"
            marginLeft="-1rem"
            marginTop="-2rem"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Text fontWeight="bold">Oferujący</Text>
              <PersonBox id={data[0].giver} />
              <Text fontWeight="bold">Odbiorca</Text>
              <PersonBox id={data[0].taker} />
              <br />
              <Text fontSize="2xl" fontWeight="bold">
                Artykuły
              </Text>
              <br />
              <Items ids={data[0].items} />
            </Box>
            <Status item={data[0]} />
          </Flex>

          <Feed transaction={data[0]} />
        </Flex>
      ) : (
        <>
          {/* <p /> */}
          {allTransaction?.map((transaction) => (
            <Box ml={40} mb={20}>
              <TransactionCard
                logo={logo}
                giver={transaction?.giver}
                taker={transaction?.taker}
                transactionId={transaction?.id}
                items={transaction?.items}
              />
            </Box>
          ))}
        </>
      )}
    </>
  );
};
