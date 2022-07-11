import { useEffect, useState } from 'react';

import WorksData from 'utils/WorksData.json';

import { IWork } from './Works.types';
import { WorksView } from './WorksView';

const Works = (): JSX.Element => {
  const [work, setWork] = useState<IWork[]>([]);

  useEffect(() => {
    setWork(WorksData);
  }, []);

  return <WorksView works={work} />;
};

export default Works;
