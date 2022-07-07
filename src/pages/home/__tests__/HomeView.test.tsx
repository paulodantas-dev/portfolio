import { render, screen } from '@testing-library/react';

import { HomeView } from '../HomeView';

describe('HomeView', () => {
  it('should render correctly', () => {
    render(<HomeView />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
