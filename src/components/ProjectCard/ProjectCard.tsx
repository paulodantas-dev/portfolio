import { IProjectCard } from './ProjectCard.types';
import { ProjectCardView } from './ProjectCardView';

export const ProjectCard = ({ project }: IProjectCard): JSX.Element => {
  return <ProjectCardView project={project} />;
};
