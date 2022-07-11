import { Link } from 'react-router-dom';

import { Formatter } from 'utils/Formatter/Formatter';

import Image from 'assets/img.jpeg';

import { IProjectCard } from './ProjectCard.types';

export const ProjectCardView = ({ project }: IProjectCard): JSX.Element => {
  return (
    <div className="max-w-md md:max-w-2xl text-start">
      <div className=" shadow-xl rounded-lg overflow-hidden grid grid-cols-[1fr,2fr] bg-slate-800">
        <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56">
          <img className="h-full w-full object-cover" src={Image} alt={project.name} />
        </div>
        <div>
          <div className="p-4 md:p-5 space-y-2">
            <p className="font-bold text-xl md:text-2xl text-slate-100">{project.name}</p>
            <p className="text-slate-400 font-light text-sm md:text-lg ">
              {Formatter.truncate(project.brief, 99)}
            </p>
          </div>
          <div className="p-4 md:p-5">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="space-y-1">
                <h2 className="font-bold text-lg text-slate-100">Languages</h2>
                <div className="grid grid-cols-2 gap-2">
                  {project.language.map((lang) => (
                    <p key={lang.id} className="text-xs font-semibold text-slate-100 ">
                      <span className="text-xs text-amber-500">{lang.porcentage}%</span>
                      {lang.name}
                    </p>
                  ))}
                </div>
              </div>
              <Link
                to={'/'}
                className="mt-3 sm:mt-0 cursor-pointer py-1 px-2 rounded-md bg-amber-500 hover:bg-amber-500 font-semibold text-slate-100 "
              >
                Details
              </Link>
            </div>
            <div className="mt-8 text-slate-100 text-sm flex items-center justify-around">
              {project.stack.map((stack) => (
                <p key={stack.id} className="bg-slate-900 p-1 rounded">
                  {stack.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
