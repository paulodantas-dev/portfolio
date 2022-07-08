import { render, screen } from '@testing-library/react';

import { FooterView } from '../FooterView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <a href="/">Paulo Dantas</a>),
}));

describe('FooterView', () => {
  it('should render correctly', () => {
    render(<FooterView />);
    expect(screen.getAllByText(/Paulo Dantas/i)).toHaveLength(3);
  });
});
