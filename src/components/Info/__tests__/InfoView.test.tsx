import { render, screen } from '@testing-library/react';

import { IInfo } from '../Info.types';
import { InfoView } from '../InfoView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <div>Link</div>),
}));

describe('InfoView', () => {
  const defaultProps = {
    handleModalContact: jest.fn(),
  } as IInfo;

  it('should render correctly', () => {
    render(<InfoView {...defaultProps} />);
    expect(screen.getByText('Paulo Dantas')).toBeInTheDocument();
  });
});
