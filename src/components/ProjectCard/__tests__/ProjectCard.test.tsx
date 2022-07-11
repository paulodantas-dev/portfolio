import { render } from '@testing-library/react';

import { ProjectCard } from '../ProjectCard';
import { IProjectCard } from '../ProjectCard.types';
import { ProjectCardView } from '../ProjectCardView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <div>Link</div>),
}));

describe('ProjectCard', () => {
  const defaultProps = {
    project: {
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
  } as IProjectCard;

  it('should render correctly', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(ProjectCardView).toBeDefined();
  });
});
