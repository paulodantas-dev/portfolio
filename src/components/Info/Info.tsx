import { IInfo } from './Info.types';
import { InfoView } from './InfoView';

export const Info = ({ handleModalContact }: IInfo): JSX.Element => {
  return <InfoView handleModalContact={handleModalContact} />;
};
