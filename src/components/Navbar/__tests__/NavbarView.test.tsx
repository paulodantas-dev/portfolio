import { render, screen } from '@testing-library/react';

import { NavbarView } from '../NavbarView';

describe('NavbarView', () => {
  it('should render correctly', () => {
    render(<NavbarView />);
    expect(screen.getByText('navbar')).toBeDefined();
  });
});
