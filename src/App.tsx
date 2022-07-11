import { BrowserRouter } from 'react-router-dom';

import { Footer } from 'components/Footer/Footer';
import { Info } from 'components/Info/Info';
import { Options } from 'components/Options/Options';

import { Routes } from './routes/routes';

export const App = (): JSX.Element => {
  return (
    <div className="bg-slate-900 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-900 h-screen">
      <BrowserRouter>
        <div className="max-w-2xl mx-auto h-full w-full py-10 px-8 flex flex-col gap-12">
          <Info />
          <Options />
          <main className="flex-grow">
            <Routes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};
