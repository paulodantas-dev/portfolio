import { render, screen } from '@testing-library/react';

import { SkillsView } from '../SkillsView';

describe('SkillsView', () => {
  it('should render correctly', () => {
    render(<SkillsView />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });
});
