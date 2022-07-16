import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { PieChart } from 'components/PieChart/PieChart';

import { IProjectView } from './Project.types';

export const ProjectView = ({ dataPie, project }: IProjectView): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col gap-8 relative">
      <Link to={'/projects'} className="absolute top-0 left-0 cursor-pointer">
        <BiArrowBack className="text-2xl text-slate-900 bg-amber-500 hover:bg-slate-800 hover:text-amber-500 transition-colors p-1 rounded-full" />
      </Link>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-xl text-amber-500 uppercase">{project?.title}</h1>
        <h3 className="text-center text-sm text-slate-400">{project?.subTitle}</h3>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-amber-500 uppercase">Description</h2>
        <p className="text-slate-400">{project?.description}</p>
      </div>
      <div className="flex items-center justify-around w-full p-4 bg-slate-800 rounded-full">
        <a
          href={project?.live}
          target="_blank"
          className="py-1 cursor-pointer px-6 uppercase font-semibold text-sm bg-slate-900 text-slate-100 hover:bg-amber-500 hover:text-slate-900 transition-colors rounded-md"
          rel="noreferrer"
        >
          LIVE
        </a>
        <a
          href={project?.code}
          target="_blank"
          className="py-1 cursor-pointer px-6 uppercase font-semibold text-sm bg-slate-900 text-slate-100 hover:bg-amber-500 hover:text-slate-900 transition-colors rounded-md"
          rel="noreferrer"
        >
          CODE
        </a>
        <a
          href={project?.doc}
          target="_blank"
          className="py-1 cursor-pointer px-6 uppercase font-semibold text-sm bg-slate-900 text-slate-100 hover:bg-amber-500 hover:text-slate-900 transition-colors rounded-md"
          rel="noreferrer"
        >
          DOC
        </a>
      </div>
      <div className="flex justify-center gap-8">
        <div className="flex-1 space-y-6">
          <h2 className="text-xl text-amber-500 uppercase">Languages</h2>
          <PieChart dataPie={dataPie} />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-xl text-amber-500 uppercase">Libraries</h2>
          <ul className="flex flex-wrap gap-4 bg-slate-800 p-2 rounded-md">
            {project?.libs.map((lib) => (
              <li key={lib.id} className="p-1 bg-slate-900 rounded-md text-slate-100">
                {lib.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
