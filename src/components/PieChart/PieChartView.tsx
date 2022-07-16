import { Pie } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { IPieChart } from './PieChart.types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChartView = ({ dataPie }: IPieChart) => {
  return <Pie data={dataPie} />;
};
