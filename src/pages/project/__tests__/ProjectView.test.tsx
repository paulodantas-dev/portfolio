import { render, screen } from '@testing-library/react';

import { ProjectView } from '../ProjectView';

describe('AboutView', () => {
  it('should render correctly', () => {
    render(<ProjectView />);
    expect(screen.getByText('ProjectView')).toBeInTheDocument();
  });
});
