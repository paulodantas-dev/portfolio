import { render } from '@testing-library/react';

import { Info } from '../Info';
import { IInfo } from '../Info.types';
import { InfoView } from '../InfoView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => <div>Link</div>),
}));

describe('Info', () => {
  const defaultProps = {
    handleModalContact: jest.fn(),
  } as IInfo;

  it('should render correctly', () => {
    render(<Info {...defaultProps} />);
    expect(InfoView).toBeDefined();
  });
});
