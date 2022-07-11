import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { OptionsView } from './OptionsView';

export const Options = (): JSX.Element => {
  const location = useLocation();

  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path && 'bg-slate-900';
    },
    [location.pathname]
  );

  return <OptionsView isActive={isActive} />;
};
