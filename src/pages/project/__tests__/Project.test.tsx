import { render } from '@testing-library/react';

import Project from '../Project';
import { ProjectView } from '../ProjectView';

describe('Project', () => {
  it('should render correctly', () => {
    render(<Project />);
    expect(ProjectView).toBeDefined();
  });
});
