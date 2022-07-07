import { render } from '@testing-library/react';

import Skills from '../Skills';
import { SkillsView } from '../SkillsView';

describe('Skills', () => {
  it('should render correctly', () => {
    render(<Skills />);
    expect(SkillsView).toBeDefined();
  });
});
