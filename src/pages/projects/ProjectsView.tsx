import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';

import { IProject, IProjects } from './Projects.types';

export const ProjectsView = ({
  projects,
  renderArrowNext,
  renderArrowPrev,
}: IProjects): JSX.Element => {
  return (
    <section className="w-full relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={5000}
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
      >
        {projects.map((project: IProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Carousel>
    </section>
  );
};
