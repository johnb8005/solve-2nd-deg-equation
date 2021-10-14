export interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
}

export interface Data {
  labels: string[];
  datasets: Dataset[];
}
