import { render } from '@testing-library/react';

import Contact from '../Contact';
import { ContactView } from '../ContactView';

describe('Contact', () => {
  it('should render correctly', () => {
    render(<Contact />);
    expect(ContactView).toBeDefined();
  });
});
