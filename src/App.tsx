import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { sendForm } from '@emailjs/browser';

import { Footer } from 'components/Footer/Footer';
import { Info } from 'components/Info/Info';
import { ModalContact } from 'components/ModalContact/ModalContact';
import { Options } from 'components/Options/Options';

import { IContact } from 'types/App.types';

import { Routes } from './routes/routes';

export const App = (): JSX.Element => {
  const initialContact = {
    name: '',
    email: '',
    message: '',
  } as IContact;

  const [isModalContact, setIsModalContact] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contact, setContact] = useState<IContact>(initialContact);

  const formRef = useRef(null);

  const handleModalContact = useCallback((): void => {
    setIsModalContact(!isModalContact);
  }, [isModalContact]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target;

      setContact((prevContact) => ({ ...prevContact, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    try {
      sendForm(
        'service_cw9wqke',
        'template_itd9yba',
        formRef.current || '',
        'N_TbVot3s9W8-Wdnw'
      ).then(
        (result) => {
          if (result.status === 200) {
            setIsModalContact(false);
            setIsLoading(false);
            toast.success('Message sent!');
          }
        },
        (error) => {
          setIsLoading(false);
          toast.error(error.text);
        }
      );
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  }, []);

  return (
    <>
      <div className="bg-slate-900 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-900 h-screen relative">
        <BrowserRouter>
          <div className="max-w-sm md:max-w-2xl mx-auto h-full w-full py-4 px-4 flex flex-col gap-12">
            <Info handleModalContact={handleModalContact} />
            <Options />
            <main className="flex-grow">
              <Routes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
      {isModalContact && (
        <ModalContact
          formRef={formRef}
          handleModalContact={handleModalContact}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          handleChange={handleChange}
          contact={contact}
        />
      )}
    </>
  );
};
