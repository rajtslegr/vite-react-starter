import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

afterEach(() => {
  cleanup();
});

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const customRender = (ui: React.ReactElement, options = {}) => {
  render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={createTestQueryClient()}>
        {children}
      </QueryClientProvider>
    ),
    ...options,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
