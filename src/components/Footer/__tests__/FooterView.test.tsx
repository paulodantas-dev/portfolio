import { render, screen } from '@testing-library/react';

import { FooterView } from '../FooterView';

describe('FooterView', () => {
  it('should render correctly', () => {
    render(<FooterView />);
    expect(screen.getByText('Footer')).toBeDefined();
  });
});
