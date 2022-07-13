import Avatar from 'assets/avatar.jpeg';

import { ISkills } from './About.types';

export const AboutView = ({ skills }: ISkills): JSX.Element => {
  return (
    <div className="flex-grow flex flex-col gap-12">
      <div className="w-full flex items-center justify-center relative">
        <div className="absolute top-0 rounded-3xl h-48 w-48 rotate-45 trans bg-slate-800 flex items-center justify-center"></div>
        <div className=" h-48 w-48 bg-amber-500 p-4 rounded-3xl z-10 ">
          <img className="h-full w-full  object-cover" src={Avatar} alt="avatar" />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="font-extrabold text-xl text-amber-500 text-center">Paulo Dantas</h1>
        <p className="font-light leading-6 text-slate-500">
          Hi, I am Enthusiastic about technology and programming, always looking to learn new things
          and improve their knowledge and skills as a programmer.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg text-amber-500 text-center">Skills</h2>
        <div className=" flex justify-between items-center">
          <ul className="grid grid-cols-3 gap-2 w-full">
            {skills.map((skill) => (
              <li
                key={skill.id}
                className="list-inside list-disc text-slate-500 hover:text-amber-500 font-light leading-6"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
