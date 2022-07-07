import { render, screen } from '@testing-library/react';

import { AboutView } from '../AboutView';

describe('AboutView', () => {
  it('should render correctly', () => {
    render(<AboutView />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
