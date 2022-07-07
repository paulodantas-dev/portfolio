import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Skills = lazy(() => import('../pages/skills/Skills'));
const Portfolio = lazy(() => import('../pages/portfolio/Portfolio'));
const Contact = lazy(() => import('../pages/contact/Contact'));

export const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
    </Suspense>
  );
};
