import { createContext, useContext, useEffect, useState } from 'react';

import { ITheme, IThemeProvider } from './useTheme.types';

const ThemeContext = createContext<ITheme>({} as ITheme);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const oldTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(oldTheme);
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
