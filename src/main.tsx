import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { App } from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <App />
      <ToastContainer
        autoClose={3000}
        closeButton
        pauseOnHover
        theme="colored"
        position="top-center"
      />
    </>
  );
}
