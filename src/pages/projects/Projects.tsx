import { useState } from 'react';

import ProjectsData from 'utils/ProjectsData.json';

import { IProject } from './Projects.types';
import { ProjectsView } from './ProjectsView';

const Projects = (): JSX.Element => {
  const allCategories = ['All', ...new Set(ProjectsData.map((item) => item.category))];
  const [project, setProject] = useState<IProject[]>(ProjectsData);
  const [menu] = useState<string[]>(allCategories);

  const filterProjects = (category: string) => {
    if (category === 'All') {
      return setProject(ProjectsData);
    }

    const filteredData = ProjectsData.filter((item) => item.category === category);
    setProject(filteredData);
  };

  return <ProjectsView projects={project} menu={menu} filterProjects={filterProjects} />;
};

export default Projects;
