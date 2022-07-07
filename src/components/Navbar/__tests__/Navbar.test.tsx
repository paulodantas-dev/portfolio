import { render } from '@testing-library/react';

import { Navbar } from '../Navbar';
import { NavbarView } from '../NavbarView';

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />);
    expect(NavbarView).toBeDefined();
  });
});
