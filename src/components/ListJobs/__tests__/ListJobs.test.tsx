import { render } from '@testing-library/react';

import { ListJobs } from '../ListJobs';
import { IListJobs } from '../ListJobs.types';
import { ListJobsView } from '../ListJobsView';

describe('ListJobs', () => {
  const defaultProps = {
    work: {
      id: '1',
      name: 'John Doe',
      company: 'Company 1',
      description: 'Work 1 description',
      from: '2020-01-01',
      to: '2020-01-01',
      level: 'Junior',
    },
  } as IListJobs;

  it('should render correctly', () => {
    render(<ListJobs {...defaultProps} />);
    expect(ListJobsView).toBeDefined();
  });
});
