import { render } from '@testing-library/react';

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
});
