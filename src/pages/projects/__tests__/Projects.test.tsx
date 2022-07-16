import { render, fireEvent, screen } from '@testing-library/react';

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

  it('should render correctly function filterProjects', () => {
    const menu = ['All', 'NodeJS'];
    render(<Projects />);
    menu.forEach((item) => {
      fireEvent.click(screen.getByText(item));
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
