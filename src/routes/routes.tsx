import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/home/Home'));

export const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </Suspense>
  );
};
