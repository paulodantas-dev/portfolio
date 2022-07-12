import { render, screen } from '@testing-library/react';

import { IModalContact } from '../ModalContact.types';
import { ModalContactView } from '../ModalContactView';

describe('ModalContactView', () => {
  const defaultProps = {
    contact: {
      email: 'teste@teste.com',
      name: 'teste',
      message: 'teste1',
    },
    isLoading: false,
  } as IModalContact;

  it('should render correctly', () => {
    render(<ModalContactView {...defaultProps} />);

    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should render correctly when loading is true', () => {
    render(<ModalContactView {...defaultProps} isLoading />);

    expect(screen.getByTestId('IconLoader')).toBeDefined();
  });
});
