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
        id: 1,
        category: 'NodeJS',
        building: false,
        live: 'site.com',
        code: 'site.com',
        doc: 'site.com',
        title: 'titile 1',
        subTitle: 'sub tile 1',
        thumbnail: 'url image 1',
        languages: [
          {
            id: 1,
            name: 'javascript',
            porcentage: 10,
          },
          {
            id: 2,
            name: 'nodejs',
            porcentage: 90,
          },
        ],
        description: 'description 1',
        libs: [
          {
            id: 1,
            name: 'express',
          },
          {
            id: 1,
            name: 'cors',
          },
        ],
      },
      {
        id: 1,
        category: 'ReactJS',
        building: true,
        live: 'site.com',
        code: 'site.com',
        doc: 'site.com',
        title: 'titile 1',
        subTitle: 'sub tile 1',
        thumbnail: 'url image 1',
        languages: [
          {
            id: 1,
            name: 'javascript',
            porcentage: 10,
          },
          {
            id: 2,
            name: 'nodejs',
            porcentage: 90,
          },
        ],
        description: 'description 1',
        libs: [
          {
            id: 1,
            name: 'express',
          },
          {
            id: 1,
            name: 'cors',
          },
        ],
      },
    ],
    menu: ['All', 'NodeJS', 'ReactJS'],
    filterProjects: jest.fn(),
  } as IProjects;

  it('should render correctly', () => {
    render(<ProjectsView {...defaultProps} />);
    expect(screen.getByText('All')).toBeInTheDocument();
  });
});
