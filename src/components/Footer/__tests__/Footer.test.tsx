import { render } from '@testing-library/react';

import { Footer } from '../Footer';
import { FooterView } from '../FooterView';

jest.mock('react-router-dom');

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);
    expect(FooterView).toBeDefined();
  });
});
