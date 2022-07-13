import { fireEvent, render, screen } from '@testing-library/react';

import Projects from '../Projects';
import { ProjectsView } from '../ProjectsView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <div>Link</div>),
}));

describe('Projects', () => {
  it('should render correctly', () => {
    render(<Projects />);
    expect(ProjectsView).toBeDefined();
  });

  it('should work correctly function filterProjects', () => {
    render(<Projects />);

    fireEvent.click(screen.getByText('All'));
    expect(screen.getByText('All')).toBeInTheDocument();

    fireEvent.click(screen.getByText('React'));
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
