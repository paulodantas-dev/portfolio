import { useParams } from 'react-router-dom';

import { render } from '@testing-library/react';

import Project from '../Project';
import { ProjectView } from '../ProjectView';

jest.mock('react-router-dom');

describe('Project', () => {
  it('should render correctly', () => {
    (useParams as jest.Mock).mockReturnValue({
      params: {
        id: 1,
      },
    });

    render(<Project />);

    expect(ProjectView).toBeDefined();
  });
});
