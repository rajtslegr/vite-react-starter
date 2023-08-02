import Button from './Button';
import { render, screen, userEvent } from '@test/test-utils';

describe('Button', () => {
  it('should render the button', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call the onClick handler', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick()}>Click me</Button>);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
