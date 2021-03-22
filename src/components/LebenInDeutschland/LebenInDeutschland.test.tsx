import { render, screen } from '@testing-library/react';
import { LebenInDeutschland } from './LebenInDeutschland';

test('renders header', () => {
  render(<LebenInDeutschland />);
  const linkElement = screen.getByText(/Leben in Deutschland/i);
  expect(linkElement).toBeInTheDocument();
});
