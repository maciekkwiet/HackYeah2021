import { Outlet } from 'react-router-dom';
import { Container, VStack } from '@chakra-ui/react';

import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <VStack>
      <Navbar />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
    </VStack>
  );
};
