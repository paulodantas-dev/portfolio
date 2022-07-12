import { ChangeEvent, FormEvent } from 'react';

import { IContact } from 'types/App.types';

export interface IModalContact {
  formRef: React.RefObject<HTMLFormElement>;
  handleModalContact: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  contact: IContact;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
