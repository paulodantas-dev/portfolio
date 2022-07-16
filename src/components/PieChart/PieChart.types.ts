export interface IPieChartData {
  labels: string[] | undefined;
  datasets: {
    label: string;
    data: number[] | undefined;
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export interface IPieChart {
  dataPie: IPieChartData;
}
