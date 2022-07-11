import { useLocation } from 'react-router-dom';

import { render } from '@testing-library/react';

import { Options } from '../Options';
import { OptionsView } from '../OptionsView';

jest.mock('react-router-dom');

describe('Options', () => {
  it('should render correctly', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });
    render(<Options />);

    expect(OptionsView).toBeDefined();
  });
});
