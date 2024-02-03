import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const head = screen.getByText('Hello');

    expect(head).toBeInTheDocument();
  });
});
