import { render, screen } from '@testing-library/react';

import { IProjectCard } from '../ProjectCard.types';
import { ProjectCardView } from '../ProjectCardView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <div>Link</div>),
}));

describe('ProjectCardView', () => {
  const defaultProps = {
    project: {
      id: 1,
      category: 'NodeJS',
      live: 'site.com',
      code: 'site.com',
      doc: 'site.com',
      title: 'title 1',
      subTitle: 'sub title 1',
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
    render(<ProjectCardView {...defaultProps} />);

    expect(screen.getByText('title 1')).toBeInTheDocument();
  });
});
