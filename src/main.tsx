import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'services/auth/context/AuthContext';

import { Router } from './services/routes/Router';
import { SupabaseProvider } from './services/supabase/SupabaseProvider';
import { theme } from './services/theme';

ReactDOM.render(
  <React.StrictMode>
    <SupabaseProvider>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </AuthProvider>
    </SupabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
