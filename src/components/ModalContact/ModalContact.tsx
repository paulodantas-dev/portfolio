import { IModalContact } from './ModalContact.types';
import { ModalContactView } from './ModalContactView';

export const ModalContact = ({
  handleModalContact,
  handleSubmit,
  formRef,
  isLoading,
  contact,
  handleChange,
}: IModalContact) => {
  return (
    <ModalContactView
      formRef={formRef}
      handleSubmit={handleSubmit}
      handleModalContact={handleModalContact}
      isLoading={isLoading}
      contact={contact}
      handleChange={handleChange}
    />
  );
};
