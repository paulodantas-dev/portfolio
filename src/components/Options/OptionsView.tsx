import { Link } from 'react-router-dom';

import { IOptions } from './Options.types';

export const OptionsView = ({ isActive }: IOptions): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-full ">
        <div
          className={`${isActive(
            '/works'
          )} hover:bg-slate-900 rounded-full w-full transition duration-150 ease-out`}
        >
          <Link
            className="text-amber-500 leading-8 p-3 font-medium text-base md:text-xl w-full cursor-pointer flex justify-center items-center"
            to={'/works'}
          >
            Work
          </Link>
        </div>
        <div
          className={`${isActive(
            '/projects'
          )} hover:bg-slate-900 rounded-full w-full transition duration-150 ease-out`}
        >
          <Link
            className="text-amber-500 leading-8 p-3 font-medium text-base md:text-xl w-full cursor-pointer flex justify-center items-center"
            to={'/projects'}
          >
            Projects
          </Link>
        </div>
        <div
          className={`${isActive(
            '/'
          )} hover:bg-slate-900 rounded-full w-full transition duration-150 ease-in-out`}
        >
          <Link
            className="text-amber-500 leading-8 p-3 font-medium text-base md:text-xl w-full cursor-pointer flex justify-center items-center"
            to={'/'}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
