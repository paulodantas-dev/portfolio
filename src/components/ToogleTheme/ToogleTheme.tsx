import { IToogleTheme } from './ToogleTheme.types';
import { ToogleThemeView } from './ToogleThemeView';

export const ToogleTheme = ({ theme, toggleTheme }: IToogleTheme): JSX.Element => {
  return <ToogleThemeView theme={theme} toggleTheme={toggleTheme} />;
};
