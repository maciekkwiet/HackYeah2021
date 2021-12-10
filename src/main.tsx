import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Router } from './services/routes/Router';
import { SupabaseProvider } from './services/supabase/SupabaseProvider';
import { theme } from './services/theme';

ReactDOM.render(
  <React.StrictMode>
    <SupabaseProvider>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </SupabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
