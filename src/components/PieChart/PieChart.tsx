import { IPieChart } from './PieChart.types';
import { PieChartView } from './PieChartView';

export const PieChart = ({ dataPie }: IPieChart): JSX.Element => {
  return <PieChartView dataPie={dataPie} />;
};
