import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineVerticalAlignBottom, MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { CONSTANTS } from 'utils/Constants';

import Profile from 'assets/Profile.jpeg';

import { IInfo } from './Info.types';

export const InfoView = ({ handleModalContact }: IInfo): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col gap-8">
        <div className="flex items-center justify-center gap-8">
          <div className="border-2 border-amber-500 rounded-full p-2 h-48 w-80">
            <img className="w-full h-full rounded-full" src={Profile} alt="Profile" />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl leading-10 text-center text-slate-100 font-medium">
              Paulo Dantas
            </h1>
            <p className="text-slate-100 text-center text-xl leading-8 font-extralight">
              Full Stack developer
            </p>
            <div className="w-full flex justify-center gap-8 items-center mt-4">
              <a href={CONSTANTS.GITHUB} target="_blank" rel="noreferrer">
                <FaGithub className="text-amber-500 text-4xl cursor-pointer hover:text-slate-100" />
              </a>
              <a href={CONSTANTS.LINKEDIN} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-amber-500 text-4xl cursor-pointer hover:text-slate-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-8">
          <Link
            className="group cursor-pointer py-4 px-8 bg-amber-500 hover:bg-slate-800 hover:text-amber-500 rounded-3xl flex items-center gap-2 font-medium text-xl leading-8 transition duration-150 ease-out"
            to="/paulo_dantas_US.pdf"
            target="_blank"
            download
          >
            Download CV
            <MdOutlineVerticalAlignBottom className="text-2xl group-hover:text-amber-500" />
          </Link>
          <button
            onClick={handleModalContact}
            className="group cursor-pointer py-4 px-8 bg-slate-800 hover:bg-amber-500 text-amber-500 hover:text-slate-900 rounded-3xl flex items-center gap-2 font-medium text-xl leading-8 transition duration-150 ease-out"
          >
            Contact me
            <MdEmail className="text-2xl text-amber-500 group-hover:text-slate-900 " />
          </button>
        </div>
      </div>
    </div>
  );
};
