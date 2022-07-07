import { render } from '@testing-library/react';

import About from '../About';
import { AboutView } from '../AboutView';

describe('About', () => {
  it('should render correctly', () => {
    render(<About />);
    expect(AboutView).toBeDefined();
  });
});
