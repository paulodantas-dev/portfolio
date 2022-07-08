import './global.css';

import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'hooks/useTheme/useTheme';

import { App } from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
