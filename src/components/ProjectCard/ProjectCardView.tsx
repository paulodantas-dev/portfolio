import { MdBuildCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { IProjectCard } from './ProjectCard.types';

export const ProjectCardView = ({ project }: IProjectCard): JSX.Element => {
  return (
    <div className="h-72 w-full bg-slate-800 relative rounded-xl overflow-hidden">
      {project.building && (
        <div className="absolute top-0 left-0 bg-amber-500 rounded-full">
          <MdBuildCircle className="text-2xl" />
        </div>
      )}
      <div className="p-2 h-36">
        <img className="h-full w-full object-cover" src={project.thumbnail} alt={project.title} />
      </div>
      <div className="w-full h-32 md:h-28 flex gap-2 flex-col items-center justify-center rounded bg-slate-900 absolute bottom-4 left-0">
        <h2 className="text-sm text-amber-500 mb-0.5">{project.title}</h2>
        <span className="text-xs text-center font-thin text-slate-100 ">{project.subTitle}</span>
        <Link
          to={`/projects/${project.id}`}
          className="py-0.5 px-3 cursor-pointer bg-amber-500 text-slate-900 transition-colors hover:bg-slate-800 hover:text-amber-500 rounded-lg text-sm"
        >
          Details
        </Link>
      </div>
    </div>
  );
};
