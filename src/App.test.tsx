import App from '@App';

import { render, screen, userEvent } from '@test/test-utils';

describe('App', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<App />);
    const clickMeArrowFn = () => userEvent.click(screen.getByText('Increment'));
    await clickMeArrowFn();
    expect(await screen.findByText(/count: 1/i)).toBeInTheDocument();
  });
});
