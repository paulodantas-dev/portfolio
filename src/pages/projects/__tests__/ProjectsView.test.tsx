import { render, screen } from '@testing-library/react';

import { IProjects } from '../Projects.types';
import { ProjectsView } from '../ProjectsView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <div>Link</div>),
}));

describe('ProjectsView', () => {
  const defaultProps = {
    projects: [
      {
        id: '1',
        name: 'test',
        title: 'teste title',
        category: 'All',
        brief: 'teste brief',
        concluded: '90',
        language: [
          {
            id: '1',
            name: 'teste language',
            porcentage: '90',
          },
        ],
        description: 'teste description',
        stack: [
          {
            id: '1',
            name: 'teste stack',
          },
        ],
      },
      {
        id: '2',
        name: 'test',
        title: 'teste title',
        category: 'React',
        brief: 'teste brief',
        concluded: '90',
        language: [
          {
            id: '1',
            name: 'teste language',
            porcentage: '90',
          },
        ],
        description: 'teste description',
        stack: [
          {
            id: '1',
            name: 'teste stack',
          },
        ],
      },
      {
        id: '3',
        name: 'test',
        title: 'teste title',
        category: 'Node',
        brief: 'teste brief',
        concluded: '90',
        language: [
          {
            id: '1',
            name: 'teste language',
            porcentage: '90',
          },
        ],
        description: 'teste description',
        stack: [
          {
            id: '1',
            name: 'teste stack',
          },
        ],
      },
    ],
    menu: ['All', 'JavaScript', 'TypeScript', 'React', 'NodeJS'],
    filterProjects: jest.fn(),
  } as IProjects;

  it('should render correctly', () => {
    render(<ProjectsView {...defaultProps} />);
    expect(screen.getByText('All')).toBeInTheDocument();
  });
});
