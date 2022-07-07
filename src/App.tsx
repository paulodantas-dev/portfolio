import { BrowserRouter } from 'react-router-dom';

import { Footer } from 'components/Footer/Footer';
import { Navbar } from 'components/Navbar/Navbar';

import { Routes } from './routes/routes';

export const App = (): JSX.Element => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <header className="w-full h-16">
        <Navbar />
      </header>
      <main className="w-full flex-grow">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </main>
      <footer className="w-full h-16">
        <Footer />
      </footer>
    </div>
  );
};
