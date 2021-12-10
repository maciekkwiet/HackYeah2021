import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from './services/routes/Router';
import { SupabaseProvider } from './services/supabase/SupabaseProvider';

ReactDOM.render(
  <React.StrictMode>
    <SupabaseProvider>
      <Router />
    </SupabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
