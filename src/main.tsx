import React from 'react';

import ReactDOM from 'react-dom/client';

import { router } from './router';
import { validateEnv } from './utils/env';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import '@index.css';

// Validate environment variables before app initialization
if (import.meta.env.DEV) {
  validateEnv();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
