import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';

const About = lazy(() => import('../pages/about/About'));
const Projects = lazy(() => import('../pages/projects/Projects'));
const Works = lazy(() => import('../pages/works/Works'));
const Project = lazy(() => import('../pages/project/Project'));

export const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/works" element={<Works />} />
      </Switch>
    </Suspense>
  );
};
