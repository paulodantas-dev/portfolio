import { ListJobs } from 'components/ListJobs/ListJobs';

import { IWork, IWorks } from './Works.types';

export const WorksView = ({ works }: IWorks): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-2xl text-slate-100 font-bold mb-6 -ml-3">Latest Jobs</h3>

      {works.map((work: IWork) => (
        <ListJobs work={work} key={work.id} />
      ))}
    </div>
  );
};
