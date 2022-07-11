import { IListJobs } from './ListJobs.types';
import { ListJobsView } from './ListJobsView';

export const ListJobs = ({ work }: IListJobs): JSX.Element => {
  return <ListJobsView work={work} />;
};
