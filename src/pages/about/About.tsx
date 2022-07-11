import { useEffect, useState } from 'react';

import SkillsData from 'utils/SkillsData.json';

import { ISkill } from './About.types';
import { AboutView } from './AboutView';

const About = (): JSX.Element => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    setSkills(SkillsData);
  }, []);
  return <AboutView skills={skills} />;
};

export default About;
