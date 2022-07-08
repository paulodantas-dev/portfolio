import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { CONSTANTS } from 'utils/Constants';

export const FooterView = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex p-4 justify-center items-center gap-4">
        <Link to={CONSTANTS.GITHUB} className="rounded-full border-2 border-white w-12 h-12 ">
          <AiOutlineGithub className="w-6 h-full mx-auto group-hover:text-lime-400" />
        </Link>

        <Link
          to={CONSTANTS.LINKEDIN}
          className="group rounded-full border-2 border-white w-12 h-12 cursor-pointer hover:border-emerald-400"
        >
          <AiFillLinkedin className="w-6 h-full mx-auto group-hover:text-lime-400" />
        </Link>
      </div>
      <div className="flex justify-center p-2 items-center">
        © 2022 Copyright:
        <Link
          data-testid="pauloDantas"
          className="cursor-pointer hover:text-emerald-400"
          to={CONSTANTS.GITHUB}
        >
          Paulo Dantas
        </Link>
      </div>
    </div>
  );
};
