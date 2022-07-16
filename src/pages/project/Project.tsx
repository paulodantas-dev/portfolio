import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProjectsData from 'utils/ProjectsData.json';

import { IProject } from './Project.types';
import { ProjectView } from './ProjectView';

const Project = (): JSX.Element => {
  const params = useParams();
  const filterProjects = ProjectsData.filter((item) => item.id === Number(params.id));
  const [project] = useState<IProject>(filterProjects[0]);

  const labels = project?.languages.map((item) => item.name);
  const data = project?.languages.map((item) => item.porcentage);

  const dataPie = {
    labels: labels,
    datasets: [
      {
        label: '# of Languages',
        data: data,
        backgroundColor: [
          'rgba(245, 158, 11, 0.2)',
          'rgba(100, 116, 139, 0.2)',
          'rgba(16, 185, 129, 0.2)',
          'rgba(14, 165, 233, 0.2)',
          'rgba(244, 63, 94, 0.2)',
          'rgba(168, 85, 247, 0.2)',
        ],
        borderColor: [
          'rgba(245, 158, 11, 1)',
          'rgba(100, 116, 139, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(14, 165, 233, 1)',
          'rgba(244, 63, 94, 1)',
          'rgba(168, 85, 247, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <ProjectView dataPie={dataPie} project={project} />;
};

export default Project;
