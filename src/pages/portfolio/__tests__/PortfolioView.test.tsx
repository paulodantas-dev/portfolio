import { render, screen } from '@testing-library/react';

import { PortfolioView } from '../PortfolioView';

describe('PortfolioView', () => {
  it('should render correctly', () => {
    render(<PortfolioView />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
