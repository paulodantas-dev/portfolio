import { render } from '@testing-library/react';

import { ToogleThemeView } from '../ToogleThemeView';

describe('ToogleThemeView', () => {
  const defaultProps = {
    theme: 'light',
    toggleTheme: jest.fn(),
  };

  it('should render correctly when theme === light', () => {
    render(<ToogleThemeView {...defaultProps} />);
    expect(ToogleThemeView).toBeDefined();
  });

  it('should render correctly when theme === dark', () => {
    render(<ToogleThemeView {...defaultProps} theme="dark" />);
    expect(ToogleThemeView).toBeDefined();
  });
});
