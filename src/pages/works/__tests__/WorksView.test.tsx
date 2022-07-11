import { render, screen } from '@testing-library/react';

import { WorksView } from '../WorksView';

describe('WorksView', () => {
  it('should render correctly', () => {
    render(<WorksView />);
    expect(screen.getByText('Works')).toBeInTheDocument();
  });
});
