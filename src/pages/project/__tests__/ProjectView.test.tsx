import { render, screen } from '@testing-library/react';

import { IProjectView } from '../Project.types';
import { ProjectView } from '../ProjectView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <div>Link</div>),
}));

describe('AboutView', () => {
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
    dataPie: {
      labels: ['teste1', 'teste2'],
      datasets: [
        {
          label: 'teste1',
          data: [10, 9, 8, 7],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#36A2EB', '#FFCE56'],
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#36A2EB', '#FFCE56'],
          borderWidth: 1,
        },
      ],
    },
  } as IProjectView;

  it('should render correctly', () => {
    render(<ProjectView {...defaultProps} />);
    expect(screen.getByText('title 1')).toBeInTheDocument();
  });
});
