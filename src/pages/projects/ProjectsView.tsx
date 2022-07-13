import { ProjectCard } from 'components/ProjectCard/ProjectCard';

import { IProject, IProjects } from './Projects.types';

export const ProjectsView = ({ projects, menu, filterProjects }: IProjects): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="flex items-center justify-center gap-8 mb-8">
        {menu.map((category, index) => (
          <button
            key={index}
            type="button"
            onClick={() => filterProjects(category)}
            className="text-amber-500 hover:underline uppercase hover:text-slate-100 font-light text-xl"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project: IProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
