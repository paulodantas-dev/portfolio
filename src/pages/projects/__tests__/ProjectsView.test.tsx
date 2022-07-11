import { render, screen } from '@testing-library/react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IProjects } from '../Projects.types';
import { ProjectsView } from '../ProjectsView';

jest.mock('react-responsive-carousel', () => ({
  Carousel: jest.fn(() => (
    <div>
      <div>teste title</div>
    </div>
  )),
}));

describe('ProjectsView', () => {
  const defaultProps = {
    projects: [
      {
        id: '1',
        name: 'test',
        title: 'teste title',
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
    renderArrowNext: () => <div>Next</div>,
    renderArrowPrev: () => <div>Prev</div>,
  } as IProjects;
  it('should render correctly', () => {
    render(<ProjectsView {...defaultProps} />);
    expect(screen.getByText(defaultProps.projects[0].title)).toBeInTheDocument();
  });
});
