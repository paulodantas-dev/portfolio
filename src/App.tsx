import { BrowserRouter } from 'react-router-dom';

import { Footer } from 'components/Footer/Footer';
import { Navbar } from 'components/Navbar/Navbar';
import { ToogleTheme } from 'components/ToogleTheme/ToogleTheme';

import { useTheme } from 'hooks/useTheme/useTheme';

import { Routes } from './routes/routes';

export const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  return (
    <BrowserRouter>
      <div className="w-screen h-screen relative flex flex-col justify-between dark:bg-slate-900 bg-slate-100 text-slate-900 dark:text-slate-100">
        <header className="w-full h-16">
          <Navbar />
        </header>
        <main className="w-full flex-grow">
          <Routes />
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
        <ToogleTheme theme={theme} toggleTheme={toggleTheme} />
      </div>
    </BrowserRouter>
  );
};
