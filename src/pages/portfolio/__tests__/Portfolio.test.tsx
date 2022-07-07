import { render } from '@testing-library/react';

import Portfolio from '../Portfolio';
import { PortfolioView } from '../PortfolioView';

describe('Portfolio', () => {
  it('should render correctly', () => {
    render(<Portfolio />);
    expect(PortfolioView).toBeDefined();
  });
});
