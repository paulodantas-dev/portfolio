import { render } from '@testing-library/react';

import { Loader } from '../Loader';
import { LoaderView } from '../LoaderView';

describe('Loader', () => {
  it('should render correctly', () => {
    render(<Loader />);
    expect(LoaderView).toBeDefined();
  });
});
