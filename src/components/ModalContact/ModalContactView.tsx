import { AiOutlineLoading } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';

import { IModalContact } from './ModalContact.types';

export const ModalContactView = ({
  handleModalContact,
  handleSubmit,
  formRef,
  isLoading,
  contact,
  handleChange,
}: IModalContact) => {
  return (
    <div className="bg-black/80 absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="relative h-96 w-96 bg-slate-900 shadow-xl rounded">
        <div className="absolute top-4 right-4 cursor-pointer">
          <MdOutlineClose className="text-2xl text-amber-500" onClick={handleModalContact} />
        </div>
        <form ref={formRef} className="py-1 px-4 mt-4" onSubmit={handleSubmit}>
          <h2 className="text-amber-500 text-2xl font-semibold">Contact</h2>
          <div className="my-2">
            <label className="inline-block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              value={contact.name}
              onChange={handleChange}
              className="block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-slate-800 bg-clip-padding border border-solid border-slate-800 rounded transition ease-in-out m-0 focus:text-slate-200 focus:bg-slate-700 focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="inline-block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              required
              type="text"
              name="email"
              id="email"
              value={contact.email}
              onChange={handleChange}
              className="block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-slate-800 bg-clip-padding border border-solid border-slate-800 rounded transition ease-in-out m-0 focus:text-slate-200 focus:bg-slate-700 focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="inline-block text-gray-700" htmlFor="message">
              message
            </label>
            <textarea
              required
              name="message"
              id="message"
              value={contact.message}
              onChange={handleChange}
              className="block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-slate-800 bg-clip-padding border border-solid border-slate-800 rounded transition ease-in-out m-0 focus:text-slate-200 focus:bg-slate-700 focus:border-amber-500 focus:outline-none"
            />
          </div>
          <p className="text-xs font-extralight text-amber-500">
            *I will be happy to answer as soon as possible
          </p>
          <div className="my-4">
            <button
              disabled={
                contact.name.length === 0 ||
                contact.email.length === 0 ||
                contact.message.length === 0
              }
              type="submit"
              className="w-full uppercase disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-500 text-sm font-bold text-slate-900 rounded-md flex items-center justify-center p-2 bg-amber-500 transition-colors hover:bg-slate-800 hover:text-slate-100"
            >
              {isLoading ? (
                <AiOutlineLoading data-testid="IconLoader" className="animate-spin" />
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
