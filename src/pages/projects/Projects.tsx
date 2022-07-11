import { useCallback, useEffect, useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

import ProjectsData from 'utils/ProjectsData.json';

import { IProject } from './Projects.types';
import { ProjectsView } from './ProjectsView';

const Projects = (): JSX.Element => {
  const [project, setProject] = useState<IProject[]>([]);

  useEffect(() => {
    setProject(ProjectsData);
  }, []);

  const renderArrowNext = useCallback((clickHandler: () => void, hasNext: boolean) => {
    return (
      <button
        className="flex items-center justify-center absolute bottom-0 right-0 z-10"
        onClick={clickHandler}
        disabled={!hasNext}
      >
        <FaChevronCircleRight className="text-amber-500 text-4xl transition-colors hover:text-slate-800" />
      </button>
    );
  }, []);

  const renderArrowPrev = useCallback((clickHandler: () => void, hasPrev: boolean) => {
    return (
      <button
        className="flex items-center justify-center absolute bottom-0 left-0 z-10 "
        onClick={clickHandler}
        disabled={!hasPrev}
      >
        <FaChevronCircleLeft className="text-amber-500 text-4xl transition-colors hover:text-slate-800" />
      </button>
    );
  }, []);

  return (
    <ProjectsView
      projects={project}
      renderArrowNext={renderArrowNext}
      renderArrowPrev={renderArrowPrev}
    />
  );
};

export default Projects;
