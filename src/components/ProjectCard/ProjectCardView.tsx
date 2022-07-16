import { Link } from 'react-router-dom';

import { IProjectCard } from './ProjectCard.types';

export const ProjectCardView = ({ project }: IProjectCard): JSX.Element => {
  return (
    <div className="h-72 w-full bg-slate-800 relative rounded-xl overflow-hidden">
      <div className="relative p-2">
        <img
          className="rounded-full h-full w-full object-cover"
          src="https://res.cloudinary.com/paulodantas/image/upload/v1657669894/1_cxsjax.png"
          alt="avatar"
        />
      </div>
      <div className="w-full h-28 flex gap-2 flex-col items-center justify-center rounded bg-slate-900 absolute bottom-4 left-0">
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
