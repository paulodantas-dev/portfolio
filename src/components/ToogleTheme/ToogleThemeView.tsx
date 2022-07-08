import { FaMoon, FaSun } from 'react-icons/fa';

import { IToogleTheme } from './ToogleTheme.types';

export const ToogleThemeView = ({ theme, toggleTheme }: IToogleTheme): JSX.Element => {
  return (
    <div className="absolute top-10 right-10 shadow-2xl rounded-full p-4 bg-slate-200 dark:bg-slate-800">
      {theme === 'light' ? (
        <FaMoon className="w-8 h-8 text-sky-600" onClick={toggleTheme} />
      ) : (
        <FaSun className="w-8 h-8 text-amber-400" onClick={toggleTheme} />
      )}
    </div>
  );
};
