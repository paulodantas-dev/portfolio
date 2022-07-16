import { render, screen } from '@testing-library/react';

import { IPieChart } from '../PieChart.types';
import { PieChartView } from '../PieChartView';

describe('PieChartView', () => {
  const defaultProps = {
    dataPie: {
      labels: ['teste1'],
      datasets: [
        {
          label: 'teste1',
          data: [10, 9, 8, 7],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#36A2EB', '#FFCE56'],
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#36A2EB', '#FFCE56'],
          borderWidth: 1,
        },
      ],
    },
  } as IPieChart;

  it('should render correctly', () => {
    render(<PieChartView {...defaultProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
