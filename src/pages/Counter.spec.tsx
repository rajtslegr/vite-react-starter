import Counter from './Counter';
import useCountStore from '@store/useCountStore';
import { render, screen, userEvent } from '@test/test-utils';
import '@testing-library/jest-dom';

// Mock the useCountStore hook
vi.mock('@store/useCountStore');

describe('Counter', () => {
  beforeEach(() => {
    // Reset the mock before each test
    vi.mocked(useCountStore).mockReset();
  });

  it('renders the counter with initial count', () => {
    vi.mocked(useCountStore).mockReturnValue({
      count: 0,
      increment: vi.fn(),
      decrement: vi.fn(),
      reset: vi.fn(),
    });

    render(<Counter />);
    expect(screen.getByText('Count: 0 - Zustand')).toBeInTheDocument();
  });

  it('increments the count when Increment button is clicked', async () => {
    const mockIncrement = vi.fn();
    vi.mocked(useCountStore).mockReturnValue({
      count: 5,
      increment: mockIncrement,
      decrement: vi.fn(),
      reset: vi.fn(),
    });

    render(<Counter />);
    await userEvent.click(screen.getByText('Increment'));
    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  it('decrements the count when Decrement button is clicked', async () => {
    const mockDecrement = vi.fn();
    vi.mocked(useCountStore).mockReturnValue({
      count: 5,
      increment: vi.fn(),
      decrement: mockDecrement,
      reset: vi.fn(),
    });

    render(<Counter />);
    await userEvent.click(screen.getByText('Decrement'));
    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });

  it('resets the count when Reset button is clicked', async () => {
    const mockReset = vi.fn();
    vi.mocked(useCountStore).mockReturnValue({
      count: 5,
      increment: vi.fn(),
      decrement: vi.fn(),
      reset: mockReset,
    });

    render(<Counter />);
    await userEvent.click(screen.getByText('Reset'));
    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
