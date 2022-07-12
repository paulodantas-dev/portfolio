import { render } from '@testing-library/react';

import { ModalContact } from '../ModalContact';
import { IModalContact } from '../ModalContact.types';
import { ModalContactView } from '../ModalContactView';

describe('ModalContact', () => {
  const defaultProps = {
    contact: {
      email: 'teste@teste.com',
      name: 'teste',
      message: 'teste1',
    },
  } as IModalContact;

  it('should render correctly', () => {
    render(<ModalContact {...defaultProps} />);
    expect(ModalContactView).toBeDefined();
  });
});
