import { render, screen } from '@testing-library/react';

import { IWorks } from '../Works.types';
import { WorksView } from '../WorksView';

describe('WorksView', () => {
  const defaultProps = {
    works: [
      {
        id: '1',
        name: 'John Doe',
        company: 'Company 1',
        description: 'Work 1 description',
        from: '2020-01-01',
        to: '2020-01-01',
        level: 'Junior',
      },
    ],
  } as IWorks;

  it('should render correctly', () => {
    render(<WorksView {...defaultProps} />);
    expect(screen.getByText('Latest Jobs')).toBeInTheDocument();
  });
});
