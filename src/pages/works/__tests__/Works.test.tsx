import { render } from '@testing-library/react';

import Works from '../Works';
import { WorksView } from '../WorksView';

describe('Works', () => {
  it('should render correctly', () => {
    render(<Works />);
    expect(WorksView).toBeDefined();
  });
});
