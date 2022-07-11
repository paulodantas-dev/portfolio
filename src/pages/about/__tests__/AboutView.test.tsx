import { render, screen } from '@testing-library/react';

import { ISkills } from '../About.types';
import { AboutView } from '../AboutView';

describe('AboutView', () => {
  it('should render correctly', () => {
    const defaultProps = {
      skills: [
        {
          id: '1',
          name: 'HTML',
        },
        {
          id: '2',
          name: 'CSS',
        },
      ],
    } as ISkills;

    render(<AboutView {...defaultProps} />);
    expect(
      screen.getByText(
        'Hi, I am Enthusiastic about technology and programming, always looking to learn new things and improve their knowledge and skills as a programmer.'
      )
    ).toBeInTheDocument();
  });
});
