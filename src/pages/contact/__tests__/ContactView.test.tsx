import { render, screen } from '@testing-library/react';

import { ContactView } from '../ContactView';

describe('ContactView', () => {
  it('should render correctly', () => {
    render(<ContactView />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
