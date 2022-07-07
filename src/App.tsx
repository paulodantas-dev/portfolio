import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/routes';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
