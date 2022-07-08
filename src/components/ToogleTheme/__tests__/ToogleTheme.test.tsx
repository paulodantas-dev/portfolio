import { render } from '@testing-library/react';

import { ToogleTheme } from '../ToogleTheme';
import { ToogleThemeView } from '../ToogleThemeView';

describe('ToogleTheme', () => {
  const defaultProps = {
    theme: 'light',
    toggleTheme: jest.fn(),
  };

  it('should render correctly', () => {
    render(<ToogleTheme {...defaultProps} />);
    expect(ToogleThemeView).toBeDefined();
  });
});
