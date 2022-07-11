import { render, screen } from '@testing-library/react';

import { IOptions } from '../Options.types';
import { OptionsView } from '../OptionsView';

jest.mock('react-router-dom', () => ({
  Link: jest.fn(({ children }) => children),
}));

const defaultProps = {
  isActive: jest.fn(() => false),
} as IOptions;

describe('OptionsView', () => {
  it('should render correctly', () => {
    render(<OptionsView {...defaultProps} />);
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
