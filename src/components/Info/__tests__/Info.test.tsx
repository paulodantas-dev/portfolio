import { render } from '@testing-library/react';

import { Info } from '../Info';
import { InfoView } from '../InfoView';

describe('Info', () => {
  it('should render correctly', () => {
    render(<Info />);
    expect(InfoView).toBeDefined();
  });
});
