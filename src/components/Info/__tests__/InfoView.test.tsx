import { render, screen } from '@testing-library/react';

import { InfoView } from '../InfoView';

describe('InfoView', () => {
  it('should render correctly', () => {
    render(<InfoView />);
    expect(screen.getByText('Paulo Dantas')).toBeInTheDocument();
  });
});
