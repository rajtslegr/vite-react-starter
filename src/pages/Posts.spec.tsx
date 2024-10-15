import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { vi, expect } from 'vitest';

import Posts from './Posts';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

// Mock the useQuery hook
vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

describe('Posts', () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('displays loading state', () => {
    vi.mocked(useQuery).mockReturnValue({
      isLoading: true,
      error: null,
      data: undefined,
    } as any);

    render(<Posts />, { wrapper });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error state', () => {
    vi.mocked(useQuery).mockReturnValue({
      isLoading: false,
      error: new Error('Failed to fetch'),
      data: undefined,
    } as any);

    render(<Posts />, { wrapper });
    expect(
      screen.getByText('An error occurred: Failed to fetch'),
    ).toBeInTheDocument();
  });

  it('displays posts when data is loaded', async () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ];

    vi.mocked(useQuery).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockPosts,
    } as any);

    render(<Posts />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
      expect(screen.getByText('Body 1')).toBeInTheDocument();
      expect(screen.getByText('Post 2')).toBeInTheDocument();
      expect(screen.getByText('Body 2')).toBeInTheDocument();
    });
  });
});
