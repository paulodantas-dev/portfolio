import { RiCalendar2Line } from 'react-icons/ri';

import { IListJobs } from './ListJobs.types';

export const ListJobsView = ({ work }: IListJobs): JSX.Element => {
  return (
    <ol className="border-l-2 border-amber-500">
      <li>
        <div className="md:flex flex-start">
          <div className="bg-amber-500 w-8 h-8 p-1 flex items-center justify-center rounded-full -ml-3">
            <RiCalendar2Line className="text-white w-4 h-4" />
          </div>
          <div className="block p-6 rounded-lg shadow-lg bg-slate-800 max-w-xl  ml-6 mb-10">
            <div className="flex justify-between mb-4 ">
              <div>
                <h2 className="font-medium text-amber-500 hover:text-amber-500 text-base">
                  {work.name} <span className="text-xs text-slate-500"> - {work.level}</span>
                </h2>
                <span className="font-light text-slate-100 text-xs">{work.company}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-medium text-slate-500 hover:text-amber-500 text-xs">
                  {work.to}
                </span>
                <span className="font-medium text-slate-500 hover:text-amber-500 text-xs">
                  {work.from}
                </span>
              </div>
            </div>
            <p className="text-slate-500 mb-6 leading-6">{work.description}</p>
          </div>
        </div>
      </li>
    </ol>
  );
};
