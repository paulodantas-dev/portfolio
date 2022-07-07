import { render, screen } from '@testing-library/react';

import { LoaderView } from '../LoaderView';

describe('LoaderView', () => {
  it('should render correctly', () => {
    render(<LoaderView />);
    expect(screen.getByTestId('IconLoader')).toBeDefined();
  });
});
