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
      id: 1,
      category: 'NodeJS',
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
  } as IProjectCard;

  it('should render correctly', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(ProjectCardView).toBeDefined();
  });
});
